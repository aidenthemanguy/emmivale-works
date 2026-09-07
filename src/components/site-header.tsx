import Link from "next/link";
import styles from "./site-header.module.css";

const navItems = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/#about" },
];

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link
          href="/"
          aria-label="Emmivale Works home"
          className={styles.wordmark}
        >
          <span>EMMIVALE</span>
          <span>WORKS</span>
        </Link>

        <nav aria-label="Primary navigation" className={styles.nav}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.navLink}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/start-a-project"
            className={styles.startLink}
          >
            Start <span aria-hidden="true">→</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
