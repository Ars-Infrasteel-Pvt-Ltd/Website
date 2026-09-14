"use server";

import { Resend } from "resend";
import { headers } from "next/headers";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export type QuoteFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Record<string, string>;
};

export type QuotePayload = {
  name: string;
  email: string;
  phone: string;
  company?: string;
  timeline: string;
  details: string;
};

// ---------- Validation ----------

const quoteSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(100, "Name is too long."),
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .email("Enter a valid email address."),
  phone: z
    .string()
    .trim()
    .max(20, "Phone number is too long.")
    .refine((val) => val === "" || /^[+()\d\s-]{7,20}$/.test(val), {
      message: "Enter a valid phone number.",
    }),
  company: z.string().trim().max(150, "Company name is too long.").optional(),
  timeline: z.string().trim().max(150, "Timeline is too long.").default(""),
  details: z
    .string()
    .trim()
    .min(10, "Please provide at least 10 characters of detail.")
    .max(3000, "Details must be under 3000 characters."),
});

// ---------- Rate limiting ----------
// NOTE: This is an in-memory limiter. It resets on server restart and is
// PER SERVER INSTANCE, so it will not work correctly across multiple
// serverless instances (e.g. Vercel edge/serverless functions can spin up
// many isolated instances). For production, use a shared store like
// Upstash Redis, or Vercel KV, or a DB table, keyed by IP.

type RateEntry = { count: number; firstRequestAt: number };

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX_REQUESTS = 3; // max 3 quote requests per window per IP

const rateLimitStore = new Map<string, RateEntry>();

// Periodically clean up stale entries so the Map doesn't grow forever.
function cleanupStore() {
  const now = Date.now();
  for (const [key, entry] of rateLimitStore.entries()) {
    if (now - entry.firstRequestAt > RATE_LIMIT_WINDOW_MS) {
      rateLimitStore.delete(key);
    }
  }
}

async function getClientIp(): Promise<string> {
  const headersList = await headers();
  const forwardedFor = headersList.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }
  const realIp = headersList.get("x-real-ip");
  if (realIp) return realIp.trim();
  return "unknown";
}

function checkRateLimit(ip: string): { allowed: boolean; retryAfterMs?: number } {
  cleanupStore();

  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry) {
    rateLimitStore.set(ip, { count: 1, firstRequestAt: now });
    return { allowed: true };
  }

  const windowElapsed = now - entry.firstRequestAt;

  if (windowElapsed > RATE_LIMIT_WINDOW_MS) {
    // Window expired, reset.
    rateLimitStore.set(ip, { count: 1, firstRequestAt: now });
    return { allowed: true };
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return { allowed: false, retryAfterMs: RATE_LIMIT_WINDOW_MS - windowElapsed };
  }

  entry.count += 1;
  rateLimitStore.set(ip, entry);
  return { allowed: true };
}

// ---------- Email builder (unchanged) ----------

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildEmailHtml(data: QuotePayload) {
  const row = (label: string, value: string, isLast = false) => `
    <tr>
      <td style="padding:16px 28px;${isLast ? "" : "border-bottom:1px solid #EFEBE3;"}">
        <table role="presentation" width="100%" style="border-collapse:collapse;">
          <tr>
            <td width="140" valign="top" style="padding-right:16px;">
              <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#8A8578;font-family:Arial,Helvetica,sans-serif;line-height:1.4;">
                ${label}
              </p>
            </td>
            <td valign="top">
              <p style="margin:0;font-size:15px;color:#1A1A1A;font-family:Arial,Helvetica,sans-serif;line-height:1.55;">
                ${escapeHtml(value) || "—"}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>`;

  const rows = [
    row("Full Name", data.name),
    row("Email", data.email),
    row("Phone", data.phone),
    row("Company", data.company ?? ""),
    row("Timeline", data.timeline),
    row("Project Details", data.details, true),
  ].join("");

  return `
  <div style="background-color:#F5F3EE;padding:48px 16px;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" style="max-width:600px;margin:0 auto;border-collapse:collapse;">
      <tr>
        <td style="background-color:#B33A2E;border-radius:20px 20px 0 0;padding:32px 28px;">
          <span style="font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,0.75);">
            New Quote Request
          </span>
          <h1 style="margin:10px 0 0;font-size:26px;font-weight:700;letter-spacing:-0.02em;color:#ffffff;">
            ${escapeHtml(data.name)} wants a project spec&#39;d.
          </h1>
        </td>
      </tr>
      <tr>
        <td style="background:#ffffff;border:1px solid #EFEBE3;border-top:none;">
          <table role="presentation" width="100%" style="border-collapse:collapse;">
            ${rows}
          </table>
        </td>
      </tr>
      <tr>
        <td style="background:#ffffff;border:1px solid #EFEBE3;border-top:none;border-radius:0 0 20px 20px;padding:24px 28px 32px;">
          <a href="mailto:${encodeURIComponent(data.email)}"
             style="display:inline-block;background-color:#B33A2E;color:#ffffff;text-decoration:none;font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:13px 28px;border-radius:10px;">
            Reply to ${escapeHtml(data.name.split(" ")[0] || "them")}
          </a>
        </td>
      </tr>
      <tr>
        <td style="padding:20px 28px 0;">
          <p style="margin:0;font-size:12px;color:#9B9689;">
            Sent from the Request a Quote form on your website.
          </p>
        </td>
      </tr>
    </table>
  </div>`;
}

// ---------- Server action ----------

export async function submitQuoteRequest(
  _prevState: QuoteFormState,
  formData: FormData
): Promise<QuoteFormState> {
  // 1. Rate limit check first (cheap, avoids wasted validation/email work)
  const ip = await getClientIp();
  const { allowed, retryAfterMs } = checkRateLimit(ip);

  if (!allowed) {
    const minutes = Math.ceil((retryAfterMs ?? 0) / 60000);
    return {
      status: "error",
      message: `Too many requests. Please try again in ${minutes} minute${
        minutes === 1 ? "" : "s"
      }.`,
    };
  }

  // 2. Validate input
  const raw = {
    name: String(formData.get("name") || ""),
    email: String(formData.get("email") || ""),
    phone: String(formData.get("phone") || ""),
    company: String(formData.get("company") || ""),
    timeline: String(formData.get("timeline") || ""),
    details: String(formData.get("details") || ""),
  };

  const result = quoteSchema.safeParse(raw);

  if (!result.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of result.error.issues) {
      const field = issue.path[0] as string;
      if (!fieldErrors[field]) fieldErrors[field] = issue.message;
    }
    return {
      status: "error",
      message: "Please fix the highlighted fields and try again.",
      errors: fieldErrors,
    };
  }

  const data: QuotePayload = result.data;

  // 3. Send email
  try {
    await resend.emails.send({
      from: "Quote Requests <onboarding@resend.dev>",
      to: ["info@arsinfrasteel.com"],
      replyTo: data.email,
      subject: `New Quote Request: ${data.name}`,
      html: buildEmailHtml(data),
    });

    return { status: "success", message: "Thanks, we'll be in touch shortly." };
  } catch (error) {
    console.error("Failed to send quote email:", error);
    return {
      status: "error",
      message: "Something went wrong sending your request. Please try again.",
    };
  }
}