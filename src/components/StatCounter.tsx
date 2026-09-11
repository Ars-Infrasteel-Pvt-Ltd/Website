"use client";

import { useEffect, useRef, useState } from "react";

export default function StatCounter({
  to,
  label,
  suffix = "",
}: {
  to: number;
  label: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const step = Math.max(1, Math.round(to / 30));
            let cur = 0;
            const tick = () => {
              cur += step;
              if (cur >= to) {
                setCount(to);
                return;
              }
              setCount(cur);
              requestAnimationFrame(tick);
            };
            tick();
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return (
    <div ref={ref} className="flex-1 rounded-[20px] border border-line bg-card px-7 py-5">
      <b className="block text-[32px] font-bold tracking-tight text-brick">
        {count}
        {suffix}
      </b>
      <span className="text-xs tracking-wide text-steel">{label}</span>
    </div>
  );
}
