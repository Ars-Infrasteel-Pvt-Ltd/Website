"use client";

import { useState } from "react";

type Category = "all" | "national" | "international";

interface Project {
  client: string;
  name: string;
  detail: string;
  category: Exclude<Category, "all">;
}

const projects: Project[] = [
  {
    client: "Linxon Switzerland Ltd.",
    name: "North-South Commuter Railway (NSCR)",
    detail: "Supply of cable tray with supports and accessories",
    category: "international",
  },
  {
    client: "KEC International Limited",
    name: "66/33kV RSS  Bangalore Metro Rail Phase-2A & 2B (KR Pura, Airport Depot, Yelahanka)",
    detail:
      "Supply of GI flat, GI angles, cable ladder trays, fittings and fasteners",
    category: "national",
  },
  {
    client: "Power Grid Corporation of India",
    name: "GIS Maharanibagh",
    detail: "Supply and installation of grating",
    category: "national",
  },
  {
    client: "Nalanda Engicon Pvt. Ltd.",
    name: "220/132/55kV Traction Substation, SPs & SSPs  Amla-Nagpur & Wardha-Ballarshah Sections",
    detail: "Supply of fencing items",
    category: "national",
  },
  {
    client: "Zetwerk Manufacturing Businesses Pvt. Ltd.",
    name: "Multi-site railway and substation supply  RITES Lumding, CR Nagpur, SCR Nikonda, Blupine 14MW, ECOR Sambalpur",
    detail: "Supply of GI flat, MS flat and related structural material",
    category: "national",
  },
  {
    client: "Techno Electric & Engineering Co. Ltd.",
    name: "Substation structures  Nilgiri SS (J&K), Dhule, Ishanagar, DG Shed",
    detail:
      "Cover slab, grating, HDG fencing panels with posts, and ladder structures",
    category: "national",
  },
  {
    client: "Siemens Limited",
    name: "220kV GIS  BSRM",
    detail: "Structural steel and cable tray supply",
    category: "international",
  },
  {
    client: "Blue Star Limited",
    name: "SP-SSP-TSS structures  Gaya (Bihar), Coderma (Jharkhand), Nagda-Kota (WCR), Tamil Nadu, Rajasthan, Mandsaur-Ramganjmandi",
    detail: "Supply of SP-SSP-TSS structures and fencing",
    category: "national",
  },
  {
    client: "Sterling and Wilson Renewable Energy Limited",
    name: "Purvah Green 300MW & Talriya",
    detail:
      "Cable tray bends, IDT platform and foundation steel structures, switchyard fencing, GI earthing strip, HDG nuts and bolts",
    category: "national",
  },
  {
    client: "CG Power & Industrial Solutions Limited",
    name: "Substation cable tray supply",
    detail: "Pre-fabricated and HDG cable trays",
    category: "national",
  },
  {
    client: "TBEA Energy (India) Pvt. Ltd.",
    name: "NER-02 Railway Project",
    detail: "Structural supply for traction substation works",
    category: "national",
  },
  {
    client: "J.K. Electric Contractor LLP",
    name: "Structural supply contract",
    detail: "Cable support angles and related structures",
    category: "national",
  },
  {
    client: "BCPL Railway Infrastructure Limited",
    name: "Multi-site railway projects  NDBS, AG, ARG, LM (Ludhiana)",
    detail:
      "Cable support angles, cable support trays and structural steel for SSPs",
    category: "national",
  },
  {
    client: "L&T Ltd.",
    name: "Ongoing supply engagement",
    detail: "Details to be added",
    category: "national",
  },
  {
    client: "Tata Projects Ltd.",
    name: "Ongoing supply engagement",
    detail: "Details to be added",
    category: "national",
  },
  {
    client: "GE T&D India Ltd.",
    name: "Ongoing supply engagement",
    detail: "Details to be added",
    category: "national",
  },
];

const tabs: { key: Category; label: string }[] = [
  { key: "all", label: "All" },
  { key: "national", label: "National" },
  { key: "international", label: "International" },
];

export default function ProjectsPage() {
  const [active, setActive] = useState<Category>("all");

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20">
      <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-brick sm:mb-2.5">
        Projects
      </span>
      <h1 className="mb-8 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl md:mb-10 md:text-5xl">
        Work delivered across India and beyond.
      </h1>

      <div className="mb-8 flex flex-wrap gap-2 md:mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={`rounded-full cursor-pointer border px-4 py-1.5 text-sm font-bold transition-colors ${
              active === tab.key
                ? "border-brick bg-brick text-white"
                : "border-line text-steel hover:border-steel"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="divide-y divide-line border-y border-line">
        {filtered.map((proj, i) => (
          <div
            key={proj.client + proj.name}
            className="flex gap-3 py-5 sm:gap-6 sm:py-7"
          >
            <span className="font-mono text-sm text-steel">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex-1">
              <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-brick">
                {proj.client}
              </span>
              <h3 className="text-lg font-bold tracking-tight sm:text-xl">
                {proj.name}
              </h3>
              <p className="mt-1 text-sm text-steel">{proj.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
