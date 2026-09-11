"use client";

import Link from "next/link";
import { useRef } from "react";
import { Product } from "@/types/product";
import ProductIcon from "@/components/ProductIcon";

export default function ProductCard({ product }: { product: Product }) {
  const ref = useRef<HTMLAnchorElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  }

  return (
    <Link
      ref={ref}
      href={`/products/${product.slug}`}
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-card transition-colors duration-300 hover:border-brick/30 sm:rounded-3xl"
    >
      {/* cursor-tracked spotlight — unchanged */}
      <span
        aria-hidden
        className="pointer-events-none absolute h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          left: "var(--x, 50%)",
          top: "var(--y, 50%)",
          background:
            "radial-gradient(circle, rgba(200,38,44,0.16), transparent 70%)",
        }}
      />

      {/* photo header */}
      <div className="relative h-32 overflow-hidden border-b border-line sm:h-36 md:h-40">
        
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
        {/* <div className="absolute bottom-3 left-4 flex h-9 w-9 items-center justify-center rounded-xl bg-white/90 text-ink backdrop-blur-sm transition-colors duration-300 group-hover:text-brick sm:h-10 sm:w-10">
          <ProductIcon slug={product.slug} className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
        </div> */}
      </div>

      <div className="relative z-[2] flex flex-1 flex-col p-5 sm:p-6 md:p-7">
        <div className="mb-2.5 flex flex-wrap gap-1.5">
    <span
      className={`rounded-full px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wide ${
        product.sourceType === "imported"
          ? "bg-blue-50 text-blue-700"
          : "bg-brick/10 text-brick"
      }`}
    >
      {product.sourceType === "imported" ? "Imported" : "In-House Manufactured"}
    </span>
    {product.isDataCenter && (
      <span className="rounded-full bg-ink/5 px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wide text-ink">
        Data Center
      </span>
    )}
  </div>
        <h3 className="mb-2 font-display text-lg font-bold tracking-tight sm:text-xl">
          {product.name}
        </h3>
        <p className="mb-5 flex-1 text-sm leading-relaxed text-steel sm:mb-6">
          {product.spec}
        </p>
        <span className="inline-flex items-center gap-1.5 text-[13px] font-bold text-ink transition-colors group-hover:text-brick sm:text-[13.5px]">
          Explore range
          <span className="transition-transform duration-200 group-hover:translate-x-1.5">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}