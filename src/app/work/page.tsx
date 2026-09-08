import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./work.module.css";

const description =
  "Selected Emmivale Works portfolio concepts spanning customer-facing websites, private software, and connected business systems.";

export const metadata: Metadata = {
  title: "Work",
  description,
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Work | Emmivale Works",
    description,
    url: "/work",
    siteName: "Emmivale Works",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Work | Emmivale Works",
    description,
  },
};

const businessFlow = [
  "Customer request",
  "Public website",
  "Server validation",
  "Shared database",
  "Private Manager",
  "Business workflow",
];

const technicalFlow = [
  "Next.js",
  "Route Handler",
  "Supabase / PostgreSQL",
  "Auth + RLS",
  "Server Actions",
  "Audit history",
];

export default function WorkPage() {
  return (
    <article className={styles.workPage}>
      <section className={styles.overviewHero} aria-labelledby="work-title">
        <div className={styles.overviewHeroInner}>
          <p className={styles.eyebrow}>Work</p>
          <div>
            <h1 id="work-title">Work</h1>
            <p className={styles.overviewPhrase}>
              Built across both sides of a business.
            </p>
            <p className={styles.overviewSummary}>
              Emmivale Works designs customer-facing experiences, internal
              software, and the systems that connect them.
            </p>
          </div>
        </div>
        <div className={styles.overviewThread} aria-hidden="true">
          <span />
          <i />
          <span />
        </div>
      </section>

      <section
        className={styles.autoProject}
        aria-labelledby="auto-project-title"
      >
        <div className={styles.projectInner}>
          <header className={styles.projectHeader}>
            <div>
              <p className={styles.projectCategory}>
                Customer-facing website + request flow
              </p>
              <h2 id="auto-project-title">
                <span className={styles.projectNumber}>01 /</span>
                <span>Velora Auto Detail</span>
              </h2>
            </div>
            <div className={styles.projectSummary}>
              <p>
                A responsive service website that makes the offer clear and
                carries a customer into a guided detail request.
              </p>
              <Link href="/work/velora-auto-detail" className={styles.textLink}>
                See the project <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </header>

          <div className={styles.autoEvidence}>
            <figure className={styles.autoDesktopFigure}>
              <Image
                src="/work/velora-auto-detail/home-desktop.png"
                alt="Velora Auto Detail homepage showing the mobile detailing offer, service navigation, calls to action, and driveway detailing photography"
                width={1381}
                height={635}
                sizes="(max-width: 768px) 96vw, 78vw"
                preload
                className={styles.productImage}
              />
              <figcaption>
                Public homepage / Service positioning and primary request path
              </figcaption>
            </figure>

            <figure className={styles.autoMobileFigure}>
              <Image
                src="/work/velora-auto-detail/home-mobile.png"
                alt="Mobile Velora Auto Detail homepage with reorganized navigation, service message, request action, and trust points"
                width={389}
                height={839}
                sizes="(max-width: 768px) 48vw, 14rem"
                className={styles.productImage}
              />
              <figcaption>Responsive evidence / Narrow-screen hierarchy</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section
        className={styles.managerProject}
        aria-labelledby="manager-project-title"
      >
        <div className={styles.projectInner}>
          <header className={`${styles.projectHeader} ${styles.managerHeader}`}>
            <div>
              <p className={styles.projectCategory}>
                Private operations software
              </p>
              <h2 id="manager-project-title">
                <span className={styles.projectNumber}>02 /</span>
                <span>Velora Manager</span>
              </h2>
            </div>
            <div className={styles.projectSummary}>
              <p>
                A private workspace for finding requests, understanding their
                state, and moving each record through a real workflow.
              </p>
              <Link href="/work/velora-manager" className={styles.textLinkDark}>
                See the project <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </header>

          <div className={styles.managerEvidence}>
            <figure className={styles.managerRequestsFigure}>
              <Image
                src="/work/velora-manager/requests.png"
                alt="Velora Manager requests workspace showing sidebar navigation, search, package filtering, status tabs, sorting, scheduling, and structured request records"
                width={1877}
                height={889}
                sizes="(max-width: 768px) 96vw, 88vw"
                className={styles.productImage}
              />
              <figcaption>
                Request discovery / Search, filters, status, and schedule
              </figcaption>
            </figure>

            <figure className={styles.managerDetailFigure}>
              <Image
                src="/work/velora-manager/request-detail.png"
                alt="Velora Manager request record showing workflow progression, status actions, request details, and quote controls"
                width={1887}
                height={943}
                sizes="(max-width: 768px) 92vw, 60vw"
                className={styles.productImage}
              />
              <figcaption>
                Stateful request record / Workflow and quote controls
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className={styles.connectedStory} aria-labelledby="connected-title">
        <div className={styles.connectedInner}>
          <header>
            <p className={styles.eyebrow}>Connected work</p>
            <h2 id="connected-title">One request, carried all the way through.</h2>
            <p>
              The public experience and private workspace are separate products,
              but they work from the same request record. Information stays
              useful as it moves from an initial inquiry into day-to-day work.
            </p>
          </header>

          <ol className={styles.businessFlow}>
            {businessFlow.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>

          <div className={styles.technicalFlow} aria-label="Technical path">
            {technicalFlow.map((step) => (
              <span key={step}>{step}</span>
            ))}
          </div>

          <p className={styles.disclosure}>
            Velora is a fictional business concept developed as a
            production-quality demonstration of Emmivale Works’ design and
            engineering capabilities. It is not a client project or operating
            business.
          </p>
        </div>
      </section>
    </article>
  );
}
