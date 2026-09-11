const projects = [
  { name: "Industrial Warehouse - Cable Tray Install", location: "Sonipat, HR" },
  { name: "Solar Farm Mounting Structure", location: "Rajasthan" },
  { name: "Perimeter Fencing - Manufacturing Plant", location: "Panipat, HR" },
];

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20">
      <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-brick sm:mb-2.5">
        Projects
      </span>
      <h1 className="mb-8 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl md:mb-12 md:text-5xl">
        Work delivered across India.
      </h1>
      <div className="divide-y divide-line border-y border-line">
        {projects.map((proj, i) => (
          <div
            key={proj.name}
            className="flex flex-col gap-1.5 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-7"
          >
            <div className="flex items-center gap-3 sm:contents">
              <span className="font-mono text-sm text-steel">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="flex-1 text-lg font-bold tracking-tight sm:text-xl">
                {proj.name}
              </h3>
            </div>
            <span className="pl-8 text-sm text-steel sm:pl-0">
              {proj.location}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}