import Link from "next/link";
import styles from "./site-footer.module.css";

const footerNavItems = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/#about" },
  { label: "Start", href: "/start-a-project" },
];

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <p className={styles.wordmark}>
            <span>Emmivale</span>
            <span>Works</span>
          </p>
          <p className={styles.domain}>emmivaleworks.com</p>
        </div>

        <div className={styles.right}>
          <p className={styles.workLine}>
            Websites / Software / Business Systems / Care
          </p>
          <nav aria-label="Footer navigation" className={styles.nav}>
            {footerNavItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
