"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const CLIENT_LOGOS = [
  { name: "Larsen & Toubro", src: "/clients/01_LT_Larsen_Toubro.png" },
  { name: "Kalpataru Power Transmission", src: "/clients/02_Kalpataru_Power_Transmission.png" },
  { name: "GE General Electric", src: "/clients/03_GE_General_Electric.png" },
  { name: "Siemens", src: "/clients/04_Siemens.png" },
  { name: "SIPS", src: "/clients/05_SIPS.png" },
  { name: "TBEA", src: "/clients/06_TBEA.png" },
  { name: "Godrej & Boyce", src: "/clients/07_Godrej_Boyce.png" },
  { name: "Techno Electric & Engineering", src: "/clients/08_Techno_Electric_Engineering.png" },
  { name: "ABB", src: "/clients/09_ABB.png" },
  { name: "Tata Projects", src: "/clients/10_Tata_Projects.png" },
  { name: "GPT Group", src: "/clients/11_GPT_Group.png" },
  { name: "AIA Engineering", src: "/clients/12_AIA_Engineering.png" },
  { name: "KEI Industries", src: "/clients/13_KEI_Industries.png" },
  { name: "KEC International", src: "/clients/14_KEC_International.png" },
  { name: "PTCL", src: "/clients/15_PTCL.png" },
  { name: "APAR Industries", src: "/clients/16_APAR_Industries.png" },
  { name: "EMC Limited", src: "/clients/17_EMC_Limited.png" },
  { name: "EMCO Limited", src: "/clients/18_EMCO_Limited.png" },
];

// Deterministic initial set for SSR — first 10 logos, in order.
// No Math.random()/Date.now() here so server and client markup match on first paint.
const INITIAL_LOGOS = CLIENT_LOGOS.slice(0, 10).map((logo, index) => ({
  id: `initial-${index}`,
  ...logo,
}));

const shuffle = <T,>(arr: T[]) => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const createRandomLogos = () =>
  shuffle(CLIENT_LOGOS)
    .slice(0, 10)
    .map((logo, index) => ({
      id: `${Date.now()}-${index}-${Math.random()}`,
      ...logo,
    }));

export default function ClientCarousel() {
  const [visibleLogos, setVisibleLogos] = useState(INITIAL_LOGOS);

  useEffect(() => {
    // First randomization happens client-side only, after hydration,
    // so it never has to match a server-rendered value.
    setVisibleLogos(createRandomLogos());

    const interval = setInterval(() => {
      setVisibleLogos(createRandomLogos());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-6 md:px-10">
      {/* Left fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-canvas to-transparent" />

      {/* Right fade */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-canvas to-transparent" />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 md:gap-4">
        <AnimatePresence mode="popLayout">
          {visibleLogos.map((logo, index) => (
            <motion.div
              key={logo.id}
              initial={{
                opacity: 0,
                x: 50,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                x: -50,
                filter: "blur(10px)",
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex h-24 items-center justify-center rounded-2xl border border-line bg-card p-4 grayscale transition-all duration-300 hover:grayscale-0 sm:h-28"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-15 max-w-[85%] object-contain"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}