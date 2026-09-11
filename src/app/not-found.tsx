import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black px-6">
      {/* Ambient glow background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[420px] w-[420px] rounded-full bg-red-600/20 blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* 404 */}
        <h1 className="text-white text-[7rem] font-extrabold leading-none tracking-tight text-transparent sm:text-[9rem]">
          404
        </h1>

        {/* Divider */}
        {/* <div className="mt-2 h-px w-24 bg-gradient-to-r from-transparent via-red-500/40 to-transparent" /> */}

        <h2 className="mt-6 text-xl font-semibold text-white sm:text-2xl">
          Page not found
        </h2>
        <p className="mt-3 max-w-md text-sm text-white/50 sm:text-base">
          The page you&apos;re looking for doesn&apos;t exist, may have been
          moved, or the URL might be incorrect.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-full bg-gradient-to-b from-white to-red-50 px-6 py-2.5 text-sm font-medium text-black transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Go back home
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/15 px-6 py-2.5 text-sm font-medium text-white/80 transition-colors hover:border-white/30 hover:text-white"
          >
            Contact support
          </Link>
        </div>
      </div>

      {/* Faint grid overlay for texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  );
}