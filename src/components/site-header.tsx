import Link from "next/link";
import { ButtonLink } from "@/components/button-link";

const navItems = [
  { label: "Work", href: "/work" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/#about" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-5 py-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <Link
          href="/"
          aria-label="Emmivale Works home"
          className="w-fit text-foreground no-underline transition-colors hover:text-accent focus-visible:text-accent"
        >
          <span className="block text-xs font-semibold uppercase leading-none [letter-spacing:0.26em]">
            Emmivale
          </span>
          <span className="mt-1 block text-xs font-semibold uppercase leading-none [letter-spacing:0.33em]">
            Works
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-medium text-muted no-underline transition-colors hover:text-accent focus-visible:text-accent"
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink
            href="/start-a-project"
            tone="clay"
            className="min-h-10 px-4 py-2"
          >
            Start a Project
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
