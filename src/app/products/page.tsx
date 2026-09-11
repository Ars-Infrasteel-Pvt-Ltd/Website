import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20">
      <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-brick sm:mb-2.5">
        Products
      </span>
      <h1 className="mb-8 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl md:mb-12 md:text-5xl">
        Everything you need, fabricated in-house.
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </section>
  );
}