import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import ProductCard from "@/components/ProductCard";
import DataCenterCard from "@/components/DataCenterCard";
import StatCounter from "@/components/StatCounter";
import ClientCarousel from "@/components/ClientCarousel";
import CertificationCard from "@/components/CertificationCard";
import { products } from "@/data/products";
import { dataCenterProducts } from "@/data/datacenter";
import ProductIcon from "@/components/ProductIcon";

/** Corner registration marks — the recurring signature motif, borrowed
 *  from shop-drawing corner ticks. Wraps any block to read as a
 *  measured, inspected panel rather than a decorative card. */
function Frame({
  children,
  className = "",
  dark = false,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  const tick = dark
    ? "before:bg-white/25 after:bg-white/25"
    : "before:bg-line after:bg-line";
  return (
    <div className={`group relative ${className}`}>
      <span
        className={`pointer-events-none absolute -left-px -top-px h-2.5 w-2.5 border-l-2 border-t-2 sm:h-3 sm:w-3 ${dark ? "border-brick/70" : "border-brick"}`}
      />
      <span
        className={`pointer-events-none absolute -right-px -top-px h-2.5 w-2.5 border-r-2 border-t-2 sm:h-3 sm:w-3 ${dark ? "border-brick/70" : "border-brick"}`}
      />
      <span
        className={`pointer-events-none absolute -bottom-px -left-px h-2.5 w-2.5 border-b-2 border-l-2 sm:h-3 sm:w-3 ${dark ? "border-brick/70" : "border-brick"}`}
      />
      <span
        className={`pointer-events-none absolute -bottom-px -right-px h-2.5 w-2.5 border-b-2 border-r-2 sm:h-3 sm:w-3 ${dark ? "border-brick/70" : "border-brick"}`}
      />
      {children}
    </div>
  );
}

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
    <span className="mb-2.5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-brick sm:text-xs">
      {/* <span className={dark ? "text-gray-500" : "text-steel/60"}>{index}</span> */}
      {children}
    </span>
  );
}

export default function HomePage() {
  return (
    <>
      {/* HERO — the opening sheet of the same spec-book the rest of the
    page is built from: SpecLabel + Frame carry over, corner ticks
    frame the photo the way every other panel on the page is framed. */}
      <section className="relative overflow-hidden border-b border-line">
        {/* <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--tw-color-ink,#111) 1px, transparent 1px), linear-gradient(to bottom, var(--tw-color-ink,#111) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        /> */}
        <div className="mx-auto max-w-6xl px-5 pt-14 sm:px-6 sm:pt-20 md:px-10 md:pt-24">
          <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center md:gap-14">
            {/* Copy column */}
            <div>
              <SpecLabel index="00">Est. 2013, Sonipat</SpecLabel>

              <h1 className="mt-2.5 max-w-xl text-[38px] font-display font-bold leading-[1.03] tracking-tight sm:text-5xl md:text-[58px] lg:text-[68px]">
                Steel built to carry the load.
              </h1>

              <p className="mt-6 max-w-md text-[15.5px] leading-relaxed text-steel sm:text-lg">
                Cable trays, gratings, fencing and custom fabricated structures
                formed, galvanized and quality-checked under one roof.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link
                  href="/products"
                  className="group relative z-[1] inline-flex items-center gap-2 overflow-hidden rounded-full bg-ink px-6 py-3 text-[13.5px] font-bold text-white lg:px-7 lg:py-3.5 lg:text-[14.5px]"
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 z-[-1] origin-left scale-x-0 rounded-full bg-brick transition-transform duration-300 ease-out group-hover:scale-x-100"
                  />
                  <span className="relative z-[1]">View Products</span>
                </Link>
                <Link
                  href="/quote"
                  className="text-[13px] font-semibold text-steel underline decoration-line underline-offset-4 transition-colors hover:text-brick hover:decoration-brick sm:text-[13.5px]"
                >
                  Prefer to talk specs? Request a quote →
                </Link>
              </div>

              {/* Spec strip — same divide-line data-row pattern as the About section */}
              <div className="mt-10 grid grid-cols-3 sm:mt-12">
                {[
                  ["13+", "Years operating"],
                  ["4", "Continents supplied"],
                  ["100%", "In-house made"],
                ].map(([b, s]) => (
                  <div
                    key={s}
                    className="px-1 py-4 text-center sm:px-4 sm:py-5"
                  >
                    <div className="text-xl font-bold text-ink sm:text-2xl">
                      {b}
                    </div>
                    <div className="mt-1 text-[10px] uppercase tracking-wide text-steel sm:text-[11px]">
                      {s}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo panel — same Frame + caption-strip treatment as the
          "Factory Floor" panel further down the page */}
            <Frame className="relative h-[320px] overflow-hidden bg-[ink] sm:h-[400px] md:h-[520px]">
              <Image
                src="/heroSection2.png"
                alt="Galvanized steel cable tray and grating, Sonipat facility"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              {/* <div className="absolute inset-x-0 bottom-0 z-[2] flex items-center justify-between border-t border-white/10 bg-ink/80 px-4 py-3 backdrop-blur-sm sm:px-5">
          <span className="font-mono text-[10px] tracking-wide text-white/70 sm:text-[11px]">
            SONIPAT MANUFACTURING FACILITY
          </span>
          <span className="hidden font-mono text-[10px] tracking-wide text-white/40 sm:inline sm:text-[11px]">
            DRG. NO. ARS/HOME/01
          </span>
        </div> */}
            </Frame>
          </div>

          <div className="h-14 sm:h-20 md:h-24" />
        </div>
      </section>

      {/* TICKER — kept as a running spec strip */}
      {/* TICKER — always overflows, seamless infinite loop */}
      <div className="ticker-wrap group relative overflow-hidden border-b border-line bg-ink py-3 sm:py-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-linear-to-r from-ink to-transparent sm:w-16 md:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-linear-to-l from-ink to-transparent sm:w-16 md:w-28" />

        <div className="flex w-max animate-ticker group-hover:[animation-play-state:paused]">
          {/* two identical halves — animation translates exactly -50% for a seamless loop */}
          {Array.from({ length: 2 }).map((_, half) => (
            <div
              key={half}
              className="flex shrink-0 items-center gap-2 pr-2 sm:gap-3 sm:pr-3"
            >
              {/* repeat the 6 items enough times to always overflow the viewport */}
              {Array.from({ length: 1 }).map((_, rep) =>
                [
                  "Cable Tray",
                  "Steel Structure",
                  "Gratings",
                  "Chainlink Fence",
                  "Solar Structure",
                  "Fabricated Steel",
                  "Fasteners & Electrical Accessories",
                  "Key Cutting Machines",
                  "Integrated Cabinet & UPS Systems",
                  "Electromagnetic Shielding Cabinets",
                  "Micro-Module Data Center Channels",
                  "PDU & Smart PDU",
                  "KVM & Digital KVM Switches",
                  "Structured Cabling",
                  "Server Racks",
                ].map((item) => (
                  <span
                    key={`${half}-${rep}-${item}`}
                    className="flex shrink-0 items-center gap-2 rounded-full whitespace-nowrap border border-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-gray-300 sm:px-4 sm:text-[12px]"
                  >
                    {/* <span className="h-1 w-1 shrink-0 rounded-full bg-brick" /> */}
                    {item}
                  </span>
                )),
              )}
            </div>
          ))}
        </div>
      </div>

      {/* PRODUCTS — each card sits in a registration frame, numbered
          like sheet items rather than a plain uniform grid. */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24">
        <div className="mb-10 flex flex-col justify-between gap-5 border-b border-line pb-7 sm:mb-12 sm:gap-6 sm:pb-8 md:flex-row md:items-end">
          <div>
            <SpecLabel index="01">Products</SpecLabel>
            <h2 className="max-w-lg text-3xl font-display font-bold tracking-tight sm:text-4xl md:text-5xl">
              Everything you need, fabricated in-house.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-steel">
            Galvanized and MS steel products manufactured to industrial spec.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {products.slice(0, 6).map((p) => (
            <ProductCard product={p} key={p.slug} />
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <Link
            href="/products"
            className={`group relative z-[1] items-center gap-2 overflow-hidden rounded-full bg-ink text-white px-5 py-2.5 text-[13.5px] font-bold sm:inline-flex lg:px-6 lg:py-3 lg:text-[14.5px]`}
          >
            <span
              aria-hidden
              className="absolute inset-0 z-[-1] origin-left scale-x-100 rounded-full bg-brick md:scale-x-0 md:transition-transform md:duration-300 md:ease-out md:group-hover:scale-x-100"
            />
            <span className="relative z-[1]">View All Products</span>
          </Link>
        </div>
      </section>

      {/* DATA CENTER — the technology-transfer notice becomes a
          title-block callout instead of a soft rounded banner. */}
      <section className="relative overflow-hidden bg-ink px-5 py-16 text-white sm:px-6 sm:py-20 md:px-10 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          // style={{
          //   backgroundImage:
          //     "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          //   backgroundSize: "44px 44px",
          // }}
        />
        <div className="relative z-2 mx-auto max-w-6xl px-0 py-8 sm:px-6 sm:py-12 md:px-10">
          <div className="mb-8 flex flex-col justify-between gap-5 border-b border-white/10 pb-7 sm:gap-6 sm:pb-8 md:flex-row md:items-end">
            <div>
              <SpecLabel index="02" dark>
                New Division
              </SpecLabel>
              <h2 className="max-w-lg text-3xl font-display font-bold tracking-tight sm:text-4xl md:text-5xl">
                Data Center Solutions
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-gray-400">
              ARS Infrasteel is an authorized trader and manufacturer in India,
              building data center infrastructure with technology shared from
              international bodies.
            </p>
          </div>

          <div className="mb-12 flex flex-col gap-4 rounded-xl bg-white/[0.08] p-5 sm:mb-16 sm:flex-row sm:items-center sm:gap-6 sm:p-6">
            <span className="shrink-0 self-start rounded-full bg-brick px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white sm:text-[12px]">
              Technology Transfer
            </span>
            <p className="text-[13.5px] leading-relaxed text-gray-300 sm:text-[14.5px]">
              Product designs, engineering know-how and quality specifications
              are shared from international bodies; ARS Infrasteel manufactures
              the resulting server cabinets, PDUs and modular data center
              infrastructure at its Sonipat, Haryana facility as an authorized
              trader and manufacturer in India.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {dataCenterProducts.slice(0, 6).map((p) => (
              <div
                key={p.slug}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-brick/50 hover:bg-white/[0.05] sm:p-7"
              >
                <div className="mb-5 flex items-center justify-between sm:mb-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.06] text-white transition-colors duration-300 group-hover:bg-brick/15 group-hover:text-brick sm:h-12 sm:w-12">
                    <ProductIcon slug={p.slug} className="h-5 w-5" />
                  </div>
                  {/* <span className="font-mono text-[11px] font-semibold tracking-wide text-white/25">
                            {p.id}
                          </span> */}
                </div>

                <h3 className="mb-2 font-display text-lg font-bold tracking-tight text-white">
                  {p.name}
                </h3>
                <p className="mb-5 text-[13.5px] leading-relaxed text-gray-400 sm:mb-6 sm:text-[14px]">
                  {p.description}
                </p>

                <div className="mt-auto space-y-2 border-t border-white/10 pt-4">
                  {p.specs.map((s) => (
                    <div
                      key={s.label}
                      className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 text-[12px]"
                    >
                      <span className="uppercase tracking-wide text-gray-400">
                        {s.label}
                      </span>
                      <span className="font-semibold text-white">
                        {s.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center sm:mt-12">
            <Link
              href="/data"
              className={`group relative z-[1] items-center gap-2 overflow-hidden rounded-full bg-brick text-white px-5 py-2.5 text-[13.5px] font-bold sm:inline-flex lg:px-6 lg:py-3 lg:text-[16px]`}
            >
              <span className="relative z-[1]">View full Catalog</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT — spec cards read as a data table; the factory panel
          keeps a title-block strip instead of the plain corner label. */}
      <section className="border-t border-line px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16 px-0 py-8 sm:px-6 sm:py-12 md:px-10">
          <div>
            <SpecLabel index="03">About Us</SpecLabel>
            <h2 className="mb-6 mt-2.5 text-[26px] font-display font-bold tracking-tight sm:text-[30px] md:text-[34px]">
              Trusted structural steel manufacturing since 2013.
            </h2>
            <p className="mb-4 max-w-md text-[15.5px] leading-relaxed text-steel sm:text-[17px]">
              One of the leading manufacturers of structural steel in Northern
              India, with a fully mechanized facility in Sonipat, Haryana.
            </p>
            <p className="mb-4 max-w-md text-[15.5px] leading-relaxed text-steel sm:text-[17px]">
              Every product is put through rigorous inspection and testing to
              match consistent quality standards.
            </p>
            <p className="mb-4 max-w-md text-[15.5px] leading-relaxed text-steel sm:text-[17px]">
              We manufacture steel fabrication structures, cable management
              systems, gratings, fencing solutions, earthing materials and solar
              structure components backed by NABL-supported testing and a
              quality management system trusted by PSUs and EPC contractors
              nationwide.
            </p>
            <div className="mt-6 divide-y divide-line">
              {[
                ["Sonipat, HR", "Manufacturing unit"],
                ["Mechanized", "Material handling"],
                ["2013", "Founded"],
                ["Rigorous", "Quality testing"],
              ].map(([b, s]) => (
                <div
                  key={s}
                  className="flex flex-wrap items-center border border-black/20 justify-between gap-x-4 gap-y-1 px-4 py-3.5 sm:px-5 sm:py-4"
                >
                  <span className="text-[11px] uppercase tracking-wide text-steel sm:text-[11.5px]">
                    {s}
                  </span>
                  <b className="text-base font-bold sm:text-lg">{b}</b>
                </div>
              ))}
            </div>
          </div>

          <Frame className="relative flex h-65 flex-col justify-between overflow-hidden bg-ink p-6 sm:h-85 sm:p-7 md:h-105">
            <Image
              src="/factory.png"
              alt="Siemens"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </Frame>
        </div>
      </section>

      {/* CERTIFICATIONS — spec-sheet cards, numbered as clauses */}
      <section className="border-t border-line px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl px-0 py-8 sm:px-6 sm:py-12 md:px-10">
          <div className="mb-10 flex flex-col justify-between gap-5 border-b border-line pb-7 sm:mb-12 sm:gap-6 sm:pb-8 md:flex-row md:items-end">
            <div>
              <SpecLabel index="04">Certifications &amp; Compliance</SpecLabel>
              <h2 className="max-w-lg text-3xl font-display font-bold tracking-tight sm:text-4xl">
                Certified, tested, and accountable at every stage.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-steel">
              Manufacturing backed by formal quality, safety and management
              system certification.
            </p>
          </div>

          <div className="grid grid-cols-1 divide-y divide-line sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-5">
            {[
              {
                tag: "ISO",
                title: "ISO 9001:2015",
                body: "Certified quality management system covering design, fabrication and dispatch.",
                fileUrl: "/ISO9001.jpg",
                fileType: "image" as const,
              },
              {
                tag: "ISO",
                title: "ISO 14001:2015",
                body: "Environmental management system standard covering our fabrication and dispatch processes.",
                fileUrl: "/ISO14001.pdf",
                fileType: "pdf" as const,
              },
              {
                tag: "ISO",
                title: "ISO 45001:2018",
                body: "Occupational health & safety management system standard across the shop floor.",
                fileUrl: "/ISO45001.pdf",
                fileType: "pdf" as const,
              },
              {
                tag: "MSME",
                title: "UDYAM Registration",
                body: "Registered MSME status under the Government of India's UDYAM scheme.",
                fileUrl: "/UDYAMCERTIFICATE.pdf",
                fileType: "pdf" as const,
              },
              {
                tag: "NSIC",
                title: "NSIC Registration",
                body: "Registered with NSIC, enabling eligibility for government and PSU tenders.",
                fileUrl: "/NSICCertificate.pdf",
                fileType: "pdf" as const,
              },
            ].map((c) => (
              <CertificationCard key={c.title} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="border-t border-line py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10">
          <div className="mb-10">
            <SpecLabel index="05">Clientele</SpecLabel>
            <h2 className="max-w-lg text-3xl font-display font-bold tracking-tight sm:text-4xl">
              Trusted by industrial teams across India.
            </h2>
          </div>
        </div>
        <ClientCarousel />
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24">
        <Frame
          dark
          className="relative overflow-hidden rounded-[28px] bg-ink px-5 py-14 text-center text-white sm:rounded-4xl sm:px-8 sm:py-16 md:px-12 md:py-20"
        >
          <div className="relative z-[2]">
            {/* <SpecLabel index="06" dark>
              <span className="text-brick">Get in Touch</span>
            </SpecLabel> */}
            <h2 className="mx-auto max-w-xl text-[30px] font-display font-bold leading-tight tracking-tight sm:text-[38px] md:text-[46px]">
              Have a project?{" "}
              <span className="text-brick">Request a quote</span> in minutes.
            </h2>
            <p className="mb-8 mt-4 text-[14px] text-gray-300 sm:text-[15px]">
              Our sales team responds within 24 hours.
            </p>
            <Link
              href="/quote"
              className="group relative z-[1] inline-flex items-center gap-2 overflow-hidden rounded-full bg-ink px-6 py-3 text-[14px] font-bold text-white sm:text-[14.5px]"
            >
              <span
                aria-hidden
                className="absolute inset-0 -z-[1] origin-left md:scale-x-0 rounded-full bg-brick transition-transform duration-300 ease-out scale-x-100 md:group-hover:scale-x-100"
              />
              <span className="relative z-[1]">Request a Quote</span>
            </Link>
          </div>
        </Frame>
      </section>
    </>
  );
}
