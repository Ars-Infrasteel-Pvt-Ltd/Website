type IconProps = { slug: string; className?: string };

// One relatable glyph per product category — no icon library, just inline SVG.
export default function ProductIcon({ slug, className }: IconProps) {
  switch (slug) {
    case "cable-tray":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
          {/* perspective ladder tray */}
          <path d="M4 34L16 26H44L32 34H4Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M4 34V38L16 30V26" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M32 34V38L44 30V26" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M9 32.8L19.5 27.6M15 33.9L25.5 28.7M21 35L31.5 29.8M27 36.1L37.5 30.9"
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        </svg>
      );
    case "steel-structure":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
          <path d="M24 5L40 12V16L24 10L8 16V12L24 5Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M12 16V40M36 16V40" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M12 22L36 30M36 22L12 30" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.65" />
          <path d="M12 40H36" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M6 44L12 40M42 44L36 40" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );
    case "railway-fencing":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
          <path d="M4 40H44" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M10 40V16L14 12L18 16V40" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M22 40V13L26 9L30 13V40" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M34 40V16L38 12L42 16V40" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M8 22H44M8 30H44" stroke="currentColor" strokeWidth="1.4" opacity="0.55" />
        </svg>
      );
    case "grating":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
          <rect x="6" y="6" width="36" height="36" rx="2" stroke="currentColor" strokeWidth="2.2" />
          <path d="M6 15h36M6 24h36M6 33h36M15 6v36M24 6v36M33 6v36" stroke="currentColor" strokeWidth="1.4" opacity="0.6" />
        </svg>
      );
    case "chainlink-fence":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
          <path d="M6 8V40M42 8V40" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M6 8H42M6 40H42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 12L18 18L12 24L18 30L12 36" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" opacity="0.75" />
          <path d="M20 12L26 18L20 24L26 30L20 36" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" opacity="0.75" />
          <path d="M28 12L34 18L28 24L34 30L28 36" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" opacity="0.75" />
        </svg>
      );
    case "solar-structure":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
          <path d="M6 20L26 12L42 18L22 26L6 20Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M14 17.2L34 25.2M22 14L38 21.6" stroke="currentColor" strokeWidth="1.3" opacity="0.6" />
          <path d="M14 21L14 15.6M22 24.2L22 18.8M30 27.4L30 22" stroke="currentColor" strokeWidth="1.3" opacity="0.6" />
          <path d="M18 27L14 40M30 30L34 40" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M9 40H39" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );
    case "fabricated-steel":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
          <path d="M10 30l10-18 8 6 10-14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 8l4-2 1 4 4 1-3 3M8 34l3 8 8-3-4-4-4-2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.75" />
        </svg>
      );
    case "fasteners-accessories":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
          {/* hex bolt */}
          <path d="M18 8L8 14V26L18 32L28 26V14L18 8Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
          <circle cx="18" cy="20" r="4" stroke="currentColor" strokeWidth="1.8" />
          {/* washer + nut stack */}
          <circle cx="34" cy="14" r="5" stroke="currentColor" strokeWidth="2" />
          <circle cx="34" cy="14" r="1.6" fill="currentColor" />
          {/* cable lug */}
          <path d="M28 38H40M40 38l-4-4M40 38l-4 4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="26" cy="38" r="3" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "key-cutting-machines":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
          {/* key */}
          <circle cx="12" cy="24" r="6" stroke="currentColor" strokeWidth="2.2" />
          <path d="M18 24H36M30 24V30M36 24V29" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          {/* cutting blade / disc */}
          <circle cx="38" cy="14" r="6" stroke="currentColor" strokeWidth="1.8" opacity="0.75" />
          <path d="M38 10V18M34 14H42" stroke="currentColor" strokeWidth="1.4" opacity="0.6" />
        </svg>
      );

    // ── Data Center division ──────────────────────────────
    case "server-cabinet":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
          <rect x="12" y="4" width="24" height="40" rx="1.5" stroke="currentColor" strokeWidth="2.2" />
          <path d="M12 13h24M12 21h24M12 29h24M12 37h24" stroke="currentColor" strokeWidth="1.6" opacity="0.6" />
          <circle cx="17" cy="8.5" r="1.2" fill="currentColor" />
          <circle cx="17" cy="17" r="1.2" fill="currentColor" />
        </svg>
      );
    case "pdu":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
          <rect x="17" y="4" width="14" height="40" rx="2" stroke="currentColor" strokeWidth="2.2" />
          <circle cx="24" cy="12" r="1.5" fill="currentColor" />
          <circle cx="24" cy="20" r="1.5" fill="currentColor" />
          <circle cx="24" cy="28" r="1.5" fill="currentColor" />
          <circle cx="24" cy="36" r="1.5" fill="currentColor" />
        </svg>
      );
    case "micro-module-data-center":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
          <rect x="4" y="10" width="18" height="28" rx="1.5" stroke="currentColor" strokeWidth="2.2" />
          <rect x="26" y="10" width="18" height="28" rx="1.5" stroke="currentColor" strokeWidth="2.2" />
          <path d="M9 16h8M9 22h8M31 16h8M31 22h8" stroke="currentColor" strokeWidth="1.6" opacity="0.6" strokeLinecap="round" />
        </svg>
      );
    case "precision-air-conditioning":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
          <path d="M24 6c-8 6-14 10-14 20a14 14 0 0028 0c0-10-6-14-14-20z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M24 18c-3 3-5 6-5 9a5 5 0 0010 0c0-3-2-6-5-9z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" opacity="0.7" />
        </svg>
      );
    case "kvm-switch":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
          <rect x="6" y="16" width="36" height="16" rx="1.5" stroke="currentColor" strokeWidth="2.2" />
          <circle cx="14" cy="24" r="2" fill="currentColor" />
          <circle cx="22" cy="24" r="2" fill="currentColor" />
          <circle cx="30" cy="24" r="2" fill="currentColor" />
          <circle cx="38" cy="24" r="2" fill="currentColor" />
        </svg>
      );
    case "ups":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
          <rect x="8" y="8" width="32" height="32" rx="2" stroke="currentColor" strokeWidth="2.2" />
          <path d="M24 16v8l6 4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    // ── New: exact data-center catalog slugs ───────────────
    case "integrated-cabinet-ups":
      // server rack cabinet with a lightning bolt (integrated power) badge
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
          <rect x="10" y="4" width="22" height="40" rx="1.5" stroke="currentColor" strokeWidth="2.2" />
          <path d="M10 13h22M10 21h22M10 29h22M10 37h22" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
          <circle cx="14.5" cy="8.5" r="1.1" fill="currentColor" />
          <path d="M37 14l-6 9h5l-6 9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "electromagnetic-shielding-cabinet":
      // cabinet enclosed in a shielding/interference ring
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
          <rect x="14" y="6" width="20" height="36" rx="1.5" stroke="currentColor" strokeWidth="2.2" />
          <path d="M14 15h20M14 23h20M14 31h20" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
          <path d="M6 24c0-6 3-11 6-14M42 24c0 6-3 11-6 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />
          <path d="M4 24c0-8 4-14 8-18M44 24c0 8-4 14-8 18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.4" />
        </svg>
      );
    case "micro-module-channel":
      // two paired racks forming an aisle, with an airflow arrow between them
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
          <rect x="4" y="8" width="14" height="32" rx="1.5" stroke="currentColor" strokeWidth="2.2" />
          <rect x="30" y="8" width="14" height="32" rx="1.5" stroke="currentColor" strokeWidth="2.2" />
          <path d="M8 14h6M8 20h6M34 14h6M34 20h6" stroke="currentColor" strokeWidth="1.4" opacity="0.6" strokeLinecap="round" />
          <path d="M20 24h8M25 20l3 4-3 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.75" />
        </svg>
      );
    case "pdu-smart-pdu":
      // vertical PDU strip with sockets plus a small signal/IP wave for "smart"
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
          <rect x="18" y="4" width="12" height="40" rx="2" stroke="currentColor" strokeWidth="2.2" />
          <circle cx="24" cy="11" r="1.4" fill="currentColor" />
          <circle cx="24" cy="18" r="1.4" fill="currentColor" />
          <circle cx="24" cy="25" r="1.4" fill="currentColor" />
          <circle cx="24" cy="32" r="1.4" fill="currentColor" />
          <circle cx="24" cy="39" r="1.4" fill="currentColor" />
          <path d="M34 14a10 10 0 010 14M38 10a15 15 0 010 22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.65" />
        </svg>
      );
    case "kvm-digital-kvm":
      // monitor + keyboard with switching arrows to a rack
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
          <rect x="4" y="8" width="18" height="13" rx="1.5" stroke="currentColor" strokeWidth="2.2" />
          <path d="M9 27h8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <rect x="4" y="30" width="18" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" opacity="0.75" />
          <path d="M26 20h8M31 16l4 4-4 4M26 30h8M34 26l-4 4 4 4"
            stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.75" />
          <rect x="40" y="10" width="4" height="28" rx="1" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "structured-cabling":
      // patch panel row with plugged cables looping down
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
          <rect x="4" y="8" width="40" height="8" rx="1.5" stroke="currentColor" strokeWidth="2.2" />
          <circle cx="10" cy="12" r="1.1" fill="currentColor" />
          <circle cx="18" cy="12" r="1.1" fill="currentColor" />
          <circle cx="26" cy="12" r="1.1" fill="currentColor" />
          <circle cx="34" cy="12" r="1.1" fill="currentColor" />
          <circle cx="42" cy="12" r="1.1" fill="currentColor" />
          <path d="M10 16c0 6 6 4 6 10M18 16c0 8 10 4 10 12M34 16c0 5-5 4-5 9"
            stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.65" />
          <path d="M28 40l-2-4h4l-2 4z" fill="currentColor" opacity="0.8" />
        </svg>
      );
    case "server-rack":
      // freestanding open-frame rack, distinct from the solid enclosed server-cabinet
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
          <path d="M10 4v40M38 4v40" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M10 4h28M10 44h28" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M10 13h28M10 22h28M10 31h28" stroke="currentColor" strokeWidth="1.6" opacity="0.55" />
          <circle cx="14" cy="9" r="1.1" fill="currentColor" />
          <circle cx="14" cy="18" r="1.1" fill="currentColor" />
          <circle cx="14" cy="27" r="1.1" fill="currentColor" />
          <circle cx="14" cy="36" r="1.1" fill="currentColor" />
        </svg>
      );

    default:
      return null;
  }
}