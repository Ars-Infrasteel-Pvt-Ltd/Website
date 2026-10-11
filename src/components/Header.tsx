"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/data", label: "Data Center" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const isDataRoute = pathname?.startsWith("/data");
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-xl backdrop-saturate-150 ${
        isDataRoute
          ? "border-b border-white/10 bg-ink supports-backdrop-filter:bg-ink/95"
          : "border-b border-white/40 bg-canvas/60 supports-backdrop-filter:bg-canvas/40"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 sm:py-2 md:px-10">
        <Link
          href="/"
          className={`flex items-center gap-2 text-[18px] font-display font-bold tracking-tight sm:gap-2.5 sm:text-[21px] ${
            isDataRoute ? "text-white" : ""
          }`}
        >
          <Image
            src="/ARSLogo.png"
            alt="Logo"
            height={50}
            width={118}
            className="h-auto w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav
          className={`hidden gap-7 text-[15px] font-medium lg:flex lg:gap-9 ${
            isDataRoute ? "text-white" : ""
          }`}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative pb-1"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded bg-brick transition-all duration-200 ease-out group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">

          {/* Quote button - hidden on smallest screens, shown from sm up */}
          <Link
            href="/quote"
            className={`group relative z-[1] hidden items-center gap-2 overflow-hidden rounded-full ${isDataRoute ? "bg-white text-black" : "bg-ink text-white"} px-5 py-2.5 text-[13.5px] font-bold sm:inline-flex lg:px-6 lg:py-3 lg:text-[14.5px]`}
          >
            <span
              aria-hidden
              className="absolute inset-0 -z-[1] origin-left scale-x-0 rounded-full bg-brick transition-transform duration-300 ease-out group-hover:scale-x-100"
            />
            <span className="relative z-[1] transition-colors duration-300 group-hover:text-white">Request a Quote</span>
          </Link>

          {/* Hamburger button - shown below lg */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className={`relative z-[1] flex h-10 w-10 items-center justify-center rounded-full lg:hidden ${
              isDataRoute ? "text-white" : "text-ink"
            }`}
          >
            <span className="relative flex h-4 w-5 flex-col justify-between">
              <span
                className={`h-[2px] w-full rounded bg-current transition-all duration-200 ease-out ${
                  isOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[2px] w-full rounded bg-current transition-all duration-200 ease-out ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-[2px] w-full rounded bg-current transition-all duration-200 ease-out ${
                  isOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile / tablet menu panel */}
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-out lg:hidden ${
          isOpen ? "max-h-[28rem]" : "max-h-0"
        } ${
          isDataRoute
            ? "border-t border-white/10 bg-ink"
            : "border-t border-white/40 bg-canvas/95"
        }`}
      >
        <nav
          className={`mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 text-[15px] font-medium sm:px-6 ${
            isDataRoute ? "text-white" : ""
          }`}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-2 py-3 transition-colors hover:bg-white/10"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/quote"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brick px-6 py-3 text-[14.5px] font-bold text-white sm:hidden"
          >
            Request a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}