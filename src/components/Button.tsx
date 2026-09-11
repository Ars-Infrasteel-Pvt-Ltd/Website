import Link from "next/link";
import { ReactNode } from "react";

export default function Button({
  href,
  children,
  variant = "default",
}: {
  href: string;
  children: ReactNode;
  variant?: "default" | "primary";
}) {
  const fill = variant === "primary" ? "bg-brick" : "bg-ink";
  const base =
    variant === "primary"
      ? "border-ink bg-ink text-white"
      : "border-ink bg-transparent text-ink";

  return (
    <Link
      href={href}
      className={`group relative z-[1] inline-flex shrink-0 items-center gap-2 whitespace-nowrap overflow-hidden rounded-full border-2 px-7 py-4 text-[15px] font-bold transition-colors duration-300 hover:text-white ${base}`}
    >
      <span
        aria-hidden
        className={`absolute inset-0 -z-[1] origin-left scale-x-0 rounded-full transition-transform duration-300 ease-out group-hover:scale-x-100 ${fill}`}
      />
      <span className="relative z-[1]">{children}</span>
    </Link>
  );
}
