import Link from "next/link";
import { products } from "@/data/products";
import Image from "next/image";

const COMPANY_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/data", label: "Data Center" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/company/ars-infrasteel-private-limited",
    label: "LinkedIn",
  },
  // { href: "https://www.instagram.com/arsinfrasteel", label: "Instagram" },
  // { href: "https://www.facebook.com/arsinfrasteel", label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden px-5 py-12 sm:px-6 sm:py-14 md:px-10 md:py-16 max-w-6xl mx-auto">
      <div className="relative z-10">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 border-b border-line pb-8 sm:grid-cols-2 sm:gap-8 sm:pb-10 md:grid-cols-4">
          <div className="col-span-2 sm:col-span-2 md:col-span-1">
            <div className="mb-3 flex items-center gap-2.5 text-lg font-bold tracking-tight">
              <Image
                src={"/ARSLogo.png"}
                alt="Logo"
                height={50}
                width={118}
                className="h-auto w-auto"
              />
            </div>
            <p className="max-w-70 text-[14.5px] leading-relaxed text-steel">
              Plot 41/4, Bahalgarh-Sonipat Road, Fazilpur, Sonipat - 131001,
              Haryana, India
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-steel">
              Company
            </h4>
            <ul className="space-y-2.5 text-[14.5px]">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-brick">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-steel">
              Products
            </h4>
            <ul className="space-y-2.5 text-[14.5px]">
              {products.slice(0, 15).map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/products/${p.slug}`}
                    className="hover:text-brick"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-steel">
              Contact
            </h4>
            <ul className="space-y-2.5 text-[14.5px]">
              <li>
                <a
                  href="mailto:info@arsinfrasteel.com"
                  className="hover:text-brick"
                >
                  info@arsinfrasteel.com
                </a>
              </li>
              <li>
                <a href="tel:+918285123275" className="hover:text-brick">
                  +91-8285123275
                </a>
              </li>
              <li>
                <a href="tel:+919810209509" className="hover:text-brick">
                  +91-9810209509
                </a>
              </li>
              <li>
                <a href="tel:+918285123277" className="hover:text-brick">
                  +91-8285123277
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-[13px] text-steel sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} ARS Infrasteel Pvt. Ltd.</span>
          <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
            {SOCIAL_LINKS.map((social, i) => (
              <span key={social.label} className="flex items-center gap-3">
                <a
                  href={social.href}
                  target="_blank"
                  className="hover:text-brick"
                >
                  {social.label}
                </a>
                {i < SOCIAL_LINKS.length - 1 && (
                  <span aria-hidden className="hidden sm:inline">
                    ·
                  </span>
                )}
              </span>
            ))}
          </span>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden">
        <Image
          src="/makeInIndia.png"
          alt=""
          width={900}
          height={400}
          className="h-auto w-[85%] max-w-[800px] translate-y-[20%] object-contain opacity-[0.08] grayscale sm:w-[60%]"
        />
      </div>
    </footer>
  );
}
