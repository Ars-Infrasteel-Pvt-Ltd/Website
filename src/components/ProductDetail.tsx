"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import { products } from "@/data/products";
import { standardsLogos } from "@/data/standardslogos"; // adjust path to match where you saved it

function ChevronLeftIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

function CheckCircleIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="M22 4L12 14.01l-3-3" />
    </svg>
  );
}

function ShieldCheckIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function GlobeIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function DownloadIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="M7 10l5 5 5-5" />
      <path d="M12 15V3" />
    </svg>
  );
}

function EyeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export default function ProductDetail({ slug }: { slug: string }) {
  const product = products.find((p) => p.slug === slug);
  const [activeImage, setActiveImage] = useState(0);

  const [isCatalogueOpen, setIsCatalogueOpen] = useState(false);

  useEffect(() => {
    if (!isCatalogueOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsCatalogueOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [isCatalogueOpen]);

  if (!product) return null;

  // Falls back to a repeated single image until real photography per-angle exists.
  const gallery =
    product.images && product.images.length > 0
      ? product.images
      : [product.image, product.image, product.image, product.image];

  const goTo = (index: number) => {
    setActiveImage((index + gallery.length) % gallery.length);
  };

  const isImported = product.sourceType === "imported";

  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 md:px-10 md:py-20">
      {/* ---------- Dynamic breadcrumb ---------- */}
      <nav className="mb-6 flex flex-wrap items-center gap-2 text-xs font-medium text-steel sm:mb-8">
        <Link href="/" className="transition hover:text-brick">
          Home
        </Link>
        <span className="text-line">/</span>
        <Link href="/products" className="transition hover:text-brick">
          Products
        </Link>
        <span className="text-line">/</span>
        <span className="text-ink">{product.name}</span>
      </nav>

      {/* ---------- Source / category banner ---------- */}
      <div className="mb-6 flex flex-wrap gap-2 sm:mb-8">
        <span
          className={`rounded-full px-3.5 py-1.5 text-[12.5px] font-bold uppercase tracking-wide ${
            isImported ? "bg-blue-50 text-blue-700" : "bg-brick/10 text-brick"
          }`}
        >
          {isImported ? "Imported Product" : "In-House Manufactured"}
        </span>
        {product.isDataCenter && (
          <span className="rounded-full bg-ink/5 px-3.5 py-1.5 text-[12.5px] font-bold uppercase tracking-wide text-ink">
            Data Center Range
          </span>
        )}
      </div>

      {/* ---------- Authorized importer notice ---------- */}
      {isImported && product.origin && (
        <div className="mb-8 flex gap-3.5 rounded-2xl border border-blue-100 bg-blue-50/60 p-5 sm:mb-10 sm:gap-4 sm:rounded-[20px] sm:p-6">
          <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 sm:h-9 sm:w-9">
            <ShieldCheckIcon />
          </span>
          <p className="text-[14.5px] leading-relaxed text-ink sm:text-[15px]">
            <b>ARS Infrasteel is the authorized importer and trading partner</b>{" "}
            for this product. Every shipment is quality-checked and backed by
            full documentation before it reaches your site.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        {/* ---------- Left: slideable image gallery ---------- */}
        <div>
          <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-black/20 bg-card sm:rounded-[24px]">
            <Image
              key={activeImage}
              src={gallery[activeImage]}
              alt={`${product.name} — view ${activeImage + 1}`}
              fill
              className="object-contain p-6 sm:p-10"
              priority
            />

            {gallery.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => goTo(activeImage - 1)}
                  aria-label="Previous image"
                  className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-line bg-white/90 text-ink opacity-0 shadow-sm transition-opacity duration-200 hover:bg-white group-hover:opacity-100 sm:left-3 sm:h-10 sm:w-10"
                >
                  <ChevronLeftIcon />
                </button>
                <button
                  type="button"
                  onClick={() => goTo(activeImage + 1)}
                  aria-label="Next image"
                  className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-line bg-white/90 text-ink opacity-0 shadow-sm transition-opacity duration-200 hover:bg-white group-hover:opacity-100 sm:right-3 sm:h-10 sm:w-10"
                >
                  <ChevronRightIcon />
                </button>

                {/* Dot indicators */}
                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                  {gallery.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => goTo(i)}
                      aria-label={`Go to image ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all ${
                        i === activeImage ? "w-5 bg-brick" : "w-1.5 bg-line"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Thumbnail strip — click to view */}
          {gallery.length > 1 && (
            <div className="mt-3 grid grid-cols-4 gap-2 sm:mt-4 sm:gap-3">
              {gallery.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`View image ${i + 1}`}
                  className={`relative aspect-square cursor-pointer border border-black/20 overflow-hidden rounded-xl bg-card transition sm:rounded-[14px] ${
                    i === activeImage
                      ? "border-brick ring-2 ring-brick/20"
                      : "border-line hover:border-steel/40"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} thumbnail ${i + 1}`}
                    fill
                    className="object-contain p-2 sm:p-3"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ---------- Right: product info ---------- */}
        <div>
          <h1 className="mb-3 text-3xl font-bold tracking-tight sm:mb-4 sm:text-4xl md:text-5xl">
            {product.name}
          </h1>

          <p className="mb-6 text-base leading-relaxed text-steel sm:mb-8 sm:text-[17px]">
            {product.description}
          </p>

          {/* Spec highlight strip */}
          <div className="mb-6 flex flex-wrap gap-2.5 sm:mb-8 sm:gap-3">
            <div className="rounded-2xl border border-black/20 bg-card px-4 py-3 sm:rounded-2xl sm:px-3 sm:py-3.5">
              <b className="block text-sm font-bold text-ink">{product.spec}</b>
              <span className="text-[11px] text-steel">Available types</span>
            </div>
            <div className="rounded-2xl border border-black/20 bg-card px-4 py-3 sm:rounded-2xl sm:px-3 sm:py-3.5">
              <b className="block text-sm font-bold text-ink">Custom</b>
              <span className="text-[11px] text-steel">Pricing &amp; MOQ</span>
            </div>
            <div className="rounded-2xl border border-black/20 bg-card px-4 py-3 sm:rounded-2xl sm:px-3 sm:py-3.5">
              <b className="block text-sm font-bold text-ink">
                {isImported ? "Global" : "Pan-India"}
              </b>
              <span className="text-[11px] text-steel">
                {isImported ? "Import & delivery" : "Supply & erection"}
              </span>
            </div>
          </div>

          {/* What is it? */}
          {product.overview && (
            <div className="mb-6 sm:mb-8">
              <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-black">
                What is it?
              </h2>
              <p className="text-[14.5px] leading-relaxed text-ink sm:text-[15px]">
                {product.overview}
              </p>
            </div>
          )}

          {/* Advantages / use cases */}
          {product.useCases && product.useCases.length > 0 && (
            <div className="mb-6 sm:mb-8">
              <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-black">
                Advantages &amp; use cases
              </h2>
              <ul className="space-y-2">
                {product.useCases.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[14.5px] leading-relaxed text-ink sm:text-[15px]"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brick" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* What ARS is adding special to this */}
          {product.arsAdvantage && product.arsAdvantage.length > 0 && (
            <div className="mb-6 rounded-2xl border border-brick/20 bg-brick/[0.03] p-5 sm:mb-8 sm:rounded-[20px] sm:p-6">
              <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-brick">
                The ARS advantage
              </h2>
              <ul className="space-y-2">
                {product.arsAdvantage.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[14.5px] leading-relaxed text-ink sm:text-[15px]"
                  >
                    <span className="mt-0.5 flex-shrink-0 text-brick">
                      <CheckCircleIcon size={16} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Types — chips, like variant selectors on a product page */}
          {product.types && product.types.length > 0 && (
            <div className="mb-6 sm:mb-8">
              <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-steel">
                Types available
              </h2>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {product.types.map((type) => (
                  <span
                    key={type}
                    className="rounded-full border border-black/20 bg-white px-3.5 py-1.5 text-[13px] font-medium text-ink transition hover:border-brick hover:text-brick sm:px-4 sm:py-2"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Styles — e.g. Perforated / Ladder */}
          {product.styles && product.styles.length > 0 && (
            <div className="mb-6 sm:mb-8">
              <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-steel">
                Styles
              </h2>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {product.styles.map((style) => (
                  <span
                    key={style}
                    className="rounded-full border border-black/20 bg-white px-3.5 py-1.5 text-[13px] font-medium text-ink transition hover:border-brick hover:text-brick sm:px-4 sm:py-2"
                  >
                    {style}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Finishes */}
          {product.finishes && product.finishes.length > 0 && (
            <div className="mb-6 sm:mb-8">
              <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-steel">
                Finishes available
              </h2>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {product.finishes.map((finish) => (
                  <span
                    key={finish}
                    className="rounded-full border border-black/20 bg-white px-3.5 py-1.5 text-[13px] font-medium text-ink transition hover:border-brick hover:text-brick sm:px-4 sm:py-2"
                  >
                    {finish}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Accessories */}
          {product.accessories && product.accessories.length > 0 && (
            <div className="mb-6 sm:mb-8">
              <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-steel">
                Accessories
              </h2>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {product.accessories.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-black/20 bg-white px-3.5 py-1.5 text-[13px] font-medium text-ink transition hover:border-brick hover:text-brick sm:px-4 sm:py-2"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Specifications table */}
          {product.specifications && product.specifications.length > 0 && (
            <div className="mb-6 sm:mb-8">
              <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-steel">
                Specifications
              </h2>
              <div className="overflow-hidden rounded-2xl border border-black/20">
                <table className="w-full text-sm">
                  <tbody>
                    {product.specifications.map((spec, i) => (
                      <tr
                        key={spec.label}
                        className={i % 2 === 0 ? "bg-card" : "bg-white"}
                      >
                        <td className="w-2/5 border-b border-line px-4 py-2.5 font-semibold text-ink last:border-b-0">
                          {spec.label}
                        </td>
                        <td className="border-b border-line px-4 py-2.5 text-steel last:border-b-0">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Regional approvals / compliance */}
          {/* {product.compliance && (
            <div className="mb-6 rounded-2xl border-black/30 bg-[FAF8F3] p-5 sm:mb-8 sm:rounded-[20px] sm:p-6">
              <div className="mb-5 flex items-center gap-2.5 text-ink">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-ink/5 text-ink">
                  <GlobeIcon size={16} />
                </span>
                <h2 className="text-xs font-bold uppercase tracking-widest text-steel">
                  Certified &amp; Approved for Sale
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                {(
                  [
                    ["Europe", product.compliance.europe],
                    ["Asia", product.compliance.asia],
                  ] as const
                ).map(([label, region]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-black/20 bg-[FAF8F3] p-4 sm:rounded-[16px] sm:p-5"
                  >
                    <p className="mb-1.5 text-[11px] font-bold uppercase tracking-wide text-steel">
                      {label}
                    </p>
                    <p className="mb-4 text-[14px] font-semibold text-ink sm:text-[14.5px]">
                      {region.status}
                    </p>

                    <div className="flex flex-wrap gap-2.5">
                      {region.standards.map((std) => {
                        const logo = standardsLogos[std];
                        return (
                          <div
                            key={std}
                            className="flex min-w-[72px] flex-1 flex-col items-center gap-2 rounded-xl border border-line bg-card px-2 py-3"
                          >
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white ring-1 ring-line/60">
                              {logo ? (
                                <Image
                                  src={logo}
                                  alt={std}
                                  width={36}
                                  height={36}
                                  className="h-8 w-8 object-contain"
                                />
                              ) : (
                                <span className="flex h-full w-full items-center justify-center rounded-lg bg-ink/5 text-[10px] font-bold uppercase text-steel">
                                  {std.length <= 3 ? std : std.slice(0, 2)}
                                </span>
                              )}
                            </div>
                            <span className="text-center text-[11px] font-medium leading-tight text-steel">
                              {std}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )} */}

          {/* CTA block */}
          <div className="hidden rounded-2xl border border-black/20 bg-card p-5 sm:rounded-[20px] sm:p-6 lg:block">
            <p className="mb-4 text-sm text-steel">
              Get a custom quote for your project specs, quantities and delivery
              timeline.
            </p>

            <div className="flex flex-col gap-3">
              <Link
                href="/quote"
                className="group relative z-[1] inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-ink px-6 py-3 text-[14.5px] font-bold text-white"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 -z-[1] origin-left scale-x-0 rounded-full bg-brick transition-transform duration-300 ease-out group-hover:scale-x-100"
                />
                <span className="relative z-[1]">Request a Quote</span>
              </Link>

              {product.catalogue && (
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setIsCatalogueOpen(true)}
                    className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-black/20 bg-white px-5 py-3 text-[14.5px] font-bold text-ink transition hover:border-brick hover:text-brick"
                  >
                    <EyeIcon size={16} />
                    View Catalogue
                  </button>
                  <a
                    href={product.catalogue}
                    download
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-black/20 bg-white px-5 py-3 text-[14.5px] font-bold text-ink transition hover:border-brick hover:text-brick"
                  >
                    <DownloadIcon size={16} />
                    Download
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Key features ---------- */}
      {product.features && product.features.length > 0 && (
        <div className="mt-12 sm:mt-16 md:mt-20">
          <div className="rounded-2xl border border-black/20 bg-card p-5 sm:rounded-[28px] sm:p-8 md:p-12">
            <div className="mb-6 flex items-end justify-between gap-4 border-b border-line pb-5 sm:mb-8 sm:pb-6">
              <div>
                <h2 className="text-xl font-bold tracking-tight sm:text-2xl md:text-4xl">
                  Key Features
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 sm:gap-y-6">
              {product.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 sm:gap-4">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brick/10 text-brick sm:h-8 sm:w-8">
                    <CheckCircleIcon />
                  </span>
                  <p className="text-[14.5px] leading-relaxed text-ink sm:text-[15px]">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ---------- Mobile sticky quote bar ---------- */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex gap-3 border-t border-line bg-white/95 p-4 backdrop-blur lg:hidden">
        <Link
          href="/quote"
          className="group relative z-[1] inline-flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-full bg-ink px-5 py-3 text-[14.5px] font-bold text-white"
        >
          <span
            aria-hidden
            className="absolute inset-0 -z-[1] origin-left scale-x-0 rounded-full bg-brick transition-transform duration-300 ease-out group-hover:scale-x-100"
          />
          <span className="relative z-[1]">Request a Quote</span>
        </Link>

        {product.catalogue && (
          <>
            <button
              type="button"
              onClick={() => setIsCatalogueOpen(true)}
              aria-label="View catalogue"
              className="inline-flex h-12 w-12 flex-shrink-0 cursor-pointer items-center justify-center rounded-full border border-black/20 bg-white text-ink transition active:border-brick active:text-brick"
            >
              <EyeIcon size={18} />
            </button>
            <a
              href={product.catalogue}
              download
              aria-label="Download catalogue"
              className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-black/20 bg-white text-ink transition active:border-brick active:text-brick"
            >
              <DownloadIcon size={18} />
            </a>
          </>
        )}
      </div>

      {/* Spacer so sticky bar doesn't overlap content on mobile */}
      <div className="h-20 lg:hidden" />
      {isCatalogueOpen && product.catalogue && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="catalogue-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsCatalogueOpen(false);
          }}
        >
          <div className="relative flex h-[calc(100dvh-2rem)] w-full max-w-5xl flex-col overflow-hidden bg-white shadow-2xl sm:h-[calc(100dvh-3rem)]">
            <div className="flex shrink-0 items-center justify-between gap-4 border-b border-line px-4 py-3 sm:px-6 sm:py-4">
              <h2
                id="catalogue-title"
                className="min-w-0 truncate text-base font-bold sm:text-lg"
              >
                {product.name} Catalogue
              </h2>
              <div className="flex shrink-0 items-center gap-1">
                <a
                  href={product.catalogue}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden rounded-full px-3 py-2 text-xs font-bold text-steel transition hover:text-brick sm:inline-flex"
                >
                  Open in new tab
                </a>
                <a
                  href={product.catalogue}
                  download
                  aria-label="Download catalogue"
                  className="flex h-10 w-10 items-center justify-center text-steel transition-colors hover:text-brick"
                >
                  <DownloadIcon size={18} />
                </a>
                <button
                  type="button"
                  onClick={() => setIsCatalogueOpen(false)}
                  aria-label="Close catalogue"
                  className="flex h-10 w-10 cursor-pointer items-center justify-center text-2xl leading-none text-steel transition-colors hover:text-brick"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>

            <div className="min-h-0 flex-1 bg-canvas">
              <iframe
                src={product.catalogue}
                title={`${product.name} catalogue`}
                className="h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
