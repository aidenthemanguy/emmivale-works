import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
  className?: string;
  tone?: "ink" | "clay";
};

export function ButtonLink({
  children,
  href,
  className = "",
  tone = "ink",
}: ButtonLinkProps) {
  const toneClasses =
    tone === "clay"
      ? "border-accent bg-accent text-foreground hover:border-focus hover:bg-focus hover:text-background"
      : "border-foreground bg-foreground text-background hover:border-accent hover:bg-accent hover:text-foreground";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center border px-5 py-3 text-sm font-semibold transition-colors ${toneClasses} ${className}`}
    >
      {children}
    </Link>
  );
}
