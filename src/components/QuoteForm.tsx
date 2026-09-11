"use client";

import { useActionState } from "react";
import { submitQuoteRequest, type QuoteFormState } from "../data/actions";

const initialState: QuoteFormState = { status: "idle" };

const inputClass =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-steel/60 outline-none transition focus:border-brick focus:ring-2 focus:ring-brick/15";

const labelClass =
  "mb-2 block text-xs font-bold uppercase tracking-widest text-steel";

const errorClass = "mt-1.5 text-xs font-medium text-brick";

export function QuoteForm() {
  const [state, formAction, isPending] = useActionState(
    submitQuoteRequest,
    initialState
  );

  return (
    <form
      action={formAction}
      className="rounded-[24px] border border-line bg-white p-10 shadow-sm"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            required
            placeholder="John Doe"
            className={inputClass}
          />
          {state.errors?.name && (
            <p className={errorClass}>{state.errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="john@company.com"
            className={inputClass}
          />
          {state.errors?.email && (
            <p className={errorClass}>{state.errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+91 8765432100"
            className={inputClass}
          />
          {state.errors?.phone && (
            <p className={errorClass}>{state.errors.phone}</p>
          )}
        </div>

        <div>
          <label htmlFor="company" className={labelClass}>
            Company
          </label>
          <input
            id="company"
            name="company"
            placeholder="Acme Inc."
            className={inputClass}
          />
          {state.errors?.company && (
            <p className={errorClass}>{state.errors.company}</p>
          )}
        </div>

        {/* <div>
          <label htmlFor="projectType" className={labelClass}>
            Project Type *
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            defaultValue=""
            className={inputClass}
          >
            <option value="" disabled>
              Select a type
            </option>
            <option value="New Build">New Build</option>
            <option value="Renovation">Renovation</option>
            <option value="Repair">Repair</option>
            <option value="Consultation">Consultation</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="budget" className={labelClass}>
            Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            defaultValue=""
            className={inputClass}
          >
            <option value="" disabled>
              Select a range
            </option>
            <option value="Under $10k">Under $10k</option>
            <option value="$10k–$50k">$10k–$50k</option>
            <option value="$50k–$150k">$50k–$150k</option>
            <option value="$150k+">$150k+</option>
          </select>
        </div> */}

        <div className="md:col-span-2">
          <label htmlFor="timeline" className={labelClass}>
            Timeline
          </label>
          <input
            id="timeline"
            name="timeline"
            placeholder="e.g. Start within 2 months"
            className={inputClass}
          />
          {state.errors?.timeline && (
            <p className={errorClass}>{state.errors.timeline}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label htmlFor="details" className={labelClass}>
            Tell us about your requirements *
          </label>
          <textarea
            id="details"
            name="details"
            required
            rows={5}
            placeholder="Tell us about the scope, site, and any specifics we should know..."
            className={`${inputClass} min-h-30 resize-y`}
          />
          {state.errors?.details && (
            <p className={errorClass}>{state.errors.details}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className={`group relative z-[1] inline-flex items-center cursor-pointer mt-6 gap-2 overflow-hidden rounded-full bg-ink text-white px-5 py-2.5 text-[13.5px] font-bold lg:px-6 lg:py-3 lg:text-[14.5px]`}
      >
        <span
              aria-hidden
              className="absolute inset-0 -z-[1] origin-left scale-x-0 rounded-full bg-brick transition-transform duration-300 ease-out group-hover:scale-x-100"
            />
            <span className="relative z-[1]">{isPending ? "Sending..." : "Request Quote"}</span>
        
      </button>

      {state.status === "success" && (
        <p className="mt-4 text-sm font-medium text-green-700">
          {state.message}
        </p>
      )}
      {state.status === "error" && (
        <p className="mt-4 text-sm font-medium text-brick">{state.message}</p>
      )}
    </form>
  );
}