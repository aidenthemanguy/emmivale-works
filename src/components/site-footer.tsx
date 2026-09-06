import Link from "next/link";

const footerNavItems = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/#about" },
  { label: "Start a Project", href: "/start-a-project" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1fr_1.2fr] lg:px-10">
        <div>
          <p className="text-xs font-semibold uppercase leading-none [letter-spacing:0.24em]">
            Emmivale
          </p>
          <p className="mt-1 text-xs font-semibold uppercase leading-none [letter-spacing:0.31em]">
            Works
          </p>
          <p className="mt-6 max-w-sm text-sm leading-7 text-background/80">
            Websites, software, and custom technology built around what you
            need.
          </p>
        </div>

        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-5 gap-y-3 text-sm"
          >
            {footerNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-background/80 no-underline transition-colors hover:text-background focus-visible:text-background"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="text-sm text-background/70">emmivaleworks.com</p>
        </div>
      </div>
    </footer>
  );
}
