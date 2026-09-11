import { DataCenterProduct } from "@/types/datacenter";
import ProductIcon from "@/components/ProductIcon";

export default function DataCenterCard({ product }: { product: DataCenterProduct }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition-colors duration-300 hover:border-brick/40">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white transition-colors duration-300 group-hover:text-brick">
        <ProductIcon slug={product.slug} className="h-5 w-5" />
      </div>

      <h3 className="mb-2 font-display text-lg font-bold tracking-tight text-white">
        {product.name}
      </h3>
      <p className="mb-5 text-sm leading-relaxed text-gray-400">
        {product.description}
      </p>

      <div className="mt-auto space-y-1.5 border-t border-dashed border-white/10 pt-4">
        {product.specs.map((s) => (
          <div key={s.label} className="flex justify-between font-mono text-[11px]">
            <span className="text-gray-500 uppercase tracking-wide">{s.label}</span>
            <span className="font-semibold text-brick">{s.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}