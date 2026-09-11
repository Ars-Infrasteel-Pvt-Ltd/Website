import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import ProductIcon from "@/components/ProductIcon";
import { dataCenterProducts } from "@/data/datacenter";

export const metadata: Metadata = {
  title: "Data Center Solutions - ARS Infrasteel Pvt. Ltd.",
  description:
    "ARS Infrasteel's data center infrastructure division - server cabinets, PDUs, modular data centers, precision cooling, KVM switches and UPS systems, manufactured in Sonipat, Haryana. Authorized trader and manufacturer in India.",
};

/** Small mono "spec" label — used in place of generic eyebrows to keep
 *  the shop-drawing register consistent across sections. */
function SpecLabel({
  children,
}: {
  index: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <span className="mb-2.5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white sm:text-xs">
      {/* <span className={dark ? "text-gray-500" : "text-steel/60"}>{index}</span> */}
      {children}
    </span>
  );
}

/* Frame — same corner-tick photo frame used on the home hero */
function Frame({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`relative rounded-2xl border border-white/10 ${className}`}>
      <span className="pointer-events-none absolute -left-px -top-px h-4 w-4 border-l-2 border-t-2 border-brick" />
      <span className="pointer-events-none absolute -right-px -top-px h-4 w-4 border-r-2 border-t-2 border-brick" />
      <span className="pointer-events-none absolute -bottom-px -left-px h-4 w-4 border-b-2 border-l-2 border-brick" />
      <span className="pointer-events-none absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-brick" />
      {children}
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-4 flex items-center gap-2.5 font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-brick">
      <span className="h-1.5 w-1.5 rounded-[1px] bg-brick" />
      {children}
    </span>
  );
}

export default function DataCenterPage() {
  return (
    <div className="relative overflow-hidden bg-ink text-white">
      {/* HERO — mirrors the home page hero: SpecLabel + copy column + Frame photo + spec strip */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="mx-auto max-w-6xl px-5 pt-14 sm:px-6 sm:pt-20 md:px-10 md:pt-24">
          <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center md:gap-14">
            {/* Copy column */}
            <div>
              <SpecLabel index="00">NEW DIVISION</SpecLabel>

              <h1 className="mt-2.5 max-w-xl font-display text-[38px] font-bold leading-[1.03] tracking-tight sm:text-5xl md:text-[58px] lg:text-[64px]">
                Data center{" "}
                <span className="text-brick">solutions</span>, made in India.
              </h1>

              <p className="mt-6 max-w-md text-[15.5px] leading-relaxed text-gray-300 sm:text-lg">
                Server cabinets, PDUs, modular data centers and precision
                cooling systems — engineered with technology shared from
                international bodies, manufactured in-house at our Sonipat,
                Haryana facility.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link
                  href="#catalog"
                  className="group relative z-[1] inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-3 text-[13.5px] font-bold text-ink lg:px-7 lg:py-3.5 lg:text-[14.5px]"
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 z-[-1] origin-left scale-x-0 rounded-full bg-brick transition-transform duration-300 ease-out group-hover:scale-x-100"
                  />
                  <span className="relative z-[1] transition-colors duration-300 group-hover:text-white">
                    View Catalog
                  </span>
                </Link>
                <Link
                  href="/quote"
                  className="text-[13px] font-semibold text-gray-400 underline decoration-white/20 underline-offset-4 transition-colors hover:text-brick hover:decoration-brick sm:text-[13.5px]"
                >
                  Prefer to talk specs? Request a quote →
                </Link>
              </div>

              
            </div>

            {/* Photo panel — same Frame treatment as the home hero */}
            <div className="relative h-80 overflow-hidden bg-ink rounded-2xl sm:h-100 md:h-130">
              <Image
                src="/dataCenter.png"
                alt="ARS Infrasteel data center infrastructure, Sonipat facility"
                fill
                priority
                sizes="100vw"
                className="object-contain scale-[1.1] mix-blend-screen"
              />
            </div>
          </div>

          <div className="h-14 sm:h-20 md:h-24" />
        </div>
      </section>

      {/* PRODUCT CATALOG — cards unchanged, data updated below */}
      <section id="catalog" className="relative z-[2] mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 md:px-10 md:py-24">
        <div className="mb-10 flex flex-col justify-between gap-5 border-b border-white/10 pb-6 sm:mb-14 sm:gap-6 sm:pb-8 md:flex-row md:items-end">
          <div>
            <Eyebrow>Product Range</Eyebrow>
            <h2 className="max-w-lg font-display text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              The full data center catalog.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-gray-400">
            {dataCenterProducts.length} product lines, manufactured in-house
            as an authorized trader and manufacturer in India.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {dataCenterProducts.map((p) => (
            <div
              key={p.slug}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-brick/50 hover:bg-white/[0.05] sm:p-7"
            >
              <div className="mb-5 flex items-center justify-between sm:mb-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.06] text-white transition-colors duration-300 group-hover:bg-brick/15 group-hover:text-brick sm:h-12 sm:w-12">
                  <ProductIcon slug={p.slug} className="h-5 w-5" />
                </div>
              </div>

              <h3 className="mb-2 font-display text-base font-bold tracking-tight text-white sm:text-lg">
                {p.name}
              </h3>
              <p className="mb-5 text-[13.5px] leading-relaxed text-gray-400 sm:mb-6 sm:text-[14px]">
                {p.description}
              </p>

              <div className="mt-auto space-y-2 border-t border-white/10 pt-4">
                {p.specs.map((s) => (
                  <div key={s.label} className="flex items-center justify-between text-[12px]">
                    <span className="uppercase tracking-wide text-gray-400">{s.label}</span>
                    <span className="font-semibold text-white">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center sm:mt-12">
          <Link
            href="/products"
            className={`group relative z-[1] items-center gap-2 overflow-hidden rounded-full bg-brick text-white px-5 py-2.5 text-[13.5px] font-bold sm:inline-flex lg:px-6 lg:py-3 lg:text-[14.5px]`}
          >
            <span className="relative z-[1]">View All Products</span>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-[2] mx-auto max-w-6xl px-4 pb-14 sm:px-6 sm:pb-20 md:px-10 md:pb-24">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-12 text-center sm:rounded-3xl sm:px-6 sm:py-16 md:px-12">
          <h2 className="mx-auto max-w-xl font-display text-2xl font-bold leading-tight tracking-tight sm:text-[28px] md:text-[34px]">
            Have a data center project?{" "}
            <span className="text-brick">Request a quote.</span>
          </h2>
          <p className="mb-7 mt-3 text-[14px] text-gray-400 sm:mb-8 sm:mt-4 sm:text-[15px]">
            Our sales team responds within 24 hours.
          </p>
          <Button href="/quote" variant="primary">Request a Quote</Button>
        </div>
      </section>
    </div>
  );
}