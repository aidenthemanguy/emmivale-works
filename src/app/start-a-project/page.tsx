import type { Metadata } from "next";
import { ProjectInquiryForm } from "./project-inquiry-form";
import styles from "./start-a-project.module.css";

const description =
  "Tell Emmivale Works what you're trying to build and start a conversation about a website, custom software, or business system.";

export const metadata: Metadata = {
  title: "Start a Project",
  description,
  alternates: {
    canonical: "/start-a-project",
  },
  openGraph: {
    title: "Start a Project | Emmivale Works",
    description,
    url: "/start-a-project",
    siteName: "Emmivale Works",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Start a Project | Emmivale Works",
    description,
  },
};

const progress = [
  "You",
  "What you need",
  "What exists now",
  "Budget and timing",
  "Anything else",
];

export default function StartAProjectPage() {
  return (
    <article className={styles.page}>
      <section className={styles.openingScene} aria-labelledby="start-title">
        <div className={styles.openingInner}>
          <div>
            <p className={styles.eyebrow}>Start a Project</p>
            <h1 id="start-title">
              Tell us what you&apos;re trying to build.
            </h1>
          </div>
          <div className={styles.openingCopy}>
            <p>
              Start with the idea, the problem, or the part of the business that
              is harder than it should be.
            </p>
            <p>
              You do not need a technical specification. Tell us what is
              happening now and what you would like to work better.
            </p>
          </div>
        </div>
        <div className={styles.openingThread} aria-hidden="true">
          <span />
          <i />
          <span />
        </div>
      </section>

      <section className={styles.inquiryScene} aria-label="Project inquiry">
        <div className={styles.inquiryInner}>
          <aside className={styles.progressRail} aria-label="Inquiry progression">
            <p>A short conversation</p>
            <ol>
              {progress.map((step) => (
                <li key={step}>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <p>A few minutes is enough.</p>
          </aside>

          <div className={styles.formColumn}>
            <ProjectInquiryForm />
          </div>
        </div>
      </section>
    </article>
  );
}
