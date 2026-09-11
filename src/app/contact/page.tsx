import Button from "@/components/Button";
import Link from "next/link";

const departments = [
  {
    label: "Sales/Inquiry",
    email: "sales@arsinfrasteel.com",
    phone: "+91-8285123275",
  },
  {
    label: "Company Office Number",
    email: "info@arsinfrasteel.com",
    phone: "+91-9810209509 / +91-8285123277",
  },
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20">
      <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-brick sm:mb-2.5">
        Contact
      </span>
      <h1 className="mb-8 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl md:mb-12 md:text-5xl">
        Get in touch.
      </h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.4fr_1fr] md:gap-10">
        <div className="space-y-3 sm:space-y-4">
          {departments.map((dept) => (
            <div
              key={dept.email}
              className="flex flex-col gap-2.5 rounded-2xl border border-line bg-card p-5 sm:gap-3 sm:rounded-[18px] sm:p-6 md:flex-row md:items-center md:justify-between"
            >
              <div>
                <span className="text-[14px] text-steel">{dept.label}</span>
                <p className="break-words text-base font-bold sm:text-lg">
                  <a href={`mailto:${dept.email}`} className="hover:underline">
                    {dept.email}
                  </a>
                </p>
              </div>
              <p className="text-base font-bold sm:text-lg md:whitespace-nowrap">
                <a href={`tel:${dept.phone}`} className="hover:underline">
                  {dept.phone}
                </a>
              </p>
            </div>
          ))}

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            <div className="rounded-2xl border border-line bg-card p-5 sm:rounded-[18px] sm:p-6">
              <span className="text-[11.5px] text-steel">Works</span>
              <p className="text-base font-bold sm:text-lg">
                41/4, Bahalgarh-Sonipat Road, Near Deewan Palace Hotel, P.O.
                Fazilpur, Sonipat - 131001, Haryana, India
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-card p-5 sm:rounded-[18px] sm:p-6">
              <span className="text-[11.5px] text-steel">Correspondence</span>
              <p className="text-base font-bold sm:text-lg">
                16, 1st Floor, Anupama Apartment, Mehrauli Road, New Delhi -
                110068, India
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center gap-4 rounded-2xl border border-line bg-card p-6 sm:rounded-[24px] sm:p-10">
          <p className="text-[15.5px] leading-relaxed text-steel sm:text-[17px]">
            Have specs ready? Skip the wait — request a formal quote directly
            and our sales team will respond within 24 hours.
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
      </div>
    </section>
  );
}