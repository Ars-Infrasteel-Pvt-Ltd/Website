export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-10 sm:px-6 sm:py-16 md:px-10 md:py-20">
      <span className="mb-2.5 block text-[11px] font-bold uppercase tracking-widest text-brick sm:text-xs">
        About Us
      </span>
      <h1 className="mb-4 max-w-2xl text-[28px] font-display font-bold tracking-tight sm:text-4xl md:text-5xl">
        Trusted structural steel manufacturing since 2011.
      </h1>
      <p className="mb-7 max-w-2xl text-[15px] font-medium text-steel sm:text-lg md:mb-10">
        Delivering engineered steel solutions with quality, precision,
        reliability, and innovation for India&apos;s infrastructure growth.
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-14">
        <div className="space-y-4 text-[15px] leading-relaxed text-steel sm:text-[17px]">
          <p>
            ARS Infrasteel Private Limited is a professionally managed
            engineering and manufacturing company specializing in the
            design, fabrication and supply of high-quality steel
            infrastructure products for the Railways, Power Transmission,
            Renewable Energy, Industrial and Infrastructure sectors.
          </p>
          <p>
            We manufacture a wide range of products including steel
            fabrication structures, cable management systems, industrial
            gratings, fencing solutions, earthing materials, solar
            structure components, and customized engineering products
            designed to meet diverse project requirements and industry
            standards.
          </p>
          <p>
            Backed by a modern manufacturing facility, advanced machinery,
            a skilled workforce, and robust quality management systems, we
            hold capabilities in cutting, punching, bending, welding,
            fabrication, surface finishing, inspection, and
            project-specific manufacturing solutions ensuring consistent
            quality, operational efficiency, and timely project execution.
          </p>

          <ul className="mt-6 grid grid-cols-1 gap-2.5 text-sm sm:grid-cols-2 sm:text-[15px]">
            {[
              "Proven industry experience",
              "Advanced manufacturing infrastructure",
              "Robust quality assurance system",
              "NABL-supported testing facilities",
              "Customized engineering solutions",
              "Timely project execution & delivery",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brick" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid content-start grid-cols-2 gap-2.5 sm:gap-3.5">
          {[
            ["Sonipat, HR", "Manufacturing unit"],
            ["Mechanized", "Material handling"],
            ["2013", "Founded"],
            ["Rigorous", "Quality testing"],
          ].map(([b, s]) => (
            <div
              key={s}
              className="rounded-2xl border border-line bg-card p-4 sm:rounded-[18px] sm:p-5"
            >
              <b className="block text-base font-bold sm:text-lg md:text-xl">{b}</b>
              <span className="text-[11px] text-steel sm:text-[11.5px]">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}