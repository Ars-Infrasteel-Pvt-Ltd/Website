import { QuoteForm } from "../../components/QuoteForm";

export default function QuotePage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
      <span className="mb-2.5 block text-xs font-bold uppercase tracking-widest text-brick">
        Request a Quote
      </span>
      <div className="mb-12 max-w-2xl text-5xl font-display font-bold tracking-tight">
        Let&apos;s spec your project.
      </div>

      <QuoteForm />
    </section>
  );
}