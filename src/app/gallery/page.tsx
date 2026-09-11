export default function GalleryPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20">
      <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-brick sm:mb-2.5">
        Gallery
      </span>
      <h1 className="mb-8 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl md:mb-12 md:text-5xl">
        Facility &amp; product photos.
      </h1>
      {/* <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="flex aspect-square items-center justify-center rounded-xl border border-line bg-card text-xs text-steel sm:rounded-2xl"
          >
            Photo {i + 1}
          </div>
        ))}
      </div> */}
      <div>
        Coming Soon
      </div>
    </section>
  );
}