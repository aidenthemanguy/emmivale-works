import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../case-study.module.css";

const description =
  "A fictional portfolio concept for a public mobile detailing website and guided quote request workflow.";

export const metadata: Metadata = {
  title: "Velora Auto Detail",
  description,
  alternates: {
    canonical: "/work/velora-auto-detail",
  },
  openGraph: {
    title: "Velora Auto Detail | Emmivale Works",
    description,
    url: "/work/velora-auto-detail",
    siteName: "Emmivale Works",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Velora Auto Detail | Emmivale Works",
    description,
  },
};

export default function VeloraAutoDetailPage() {
  return (
    <article className={styles.casePage}>
      <section className={styles.caseHero} aria-labelledby="case-title">
        <div className={styles.caseHeroInner}>
          <Link href="/work" className={styles.backLink}>
            <span aria-hidden="true">←</span> Back to Work
          </Link>

          <div className={styles.caseHeroGrid}>
            <div>
              <p className={styles.caseIndex}>01 / Selected Work</p>
              <h1 id="case-title" className={styles.caseTitle}>
                Velora Auto Detail
              </h1>
              <p className={styles.caseCategory}>
                Business website + quote workflow
              </p>
              <p className={styles.caseDisclosure}>
                Fictional production-quality demonstration, not a client
                project or operating business.
              </p>
            </div>
            <p className={styles.caseSummary}>
              A production-quality mobile-detailing concept designed around
              clear services, mobile convenience, responsive browsing, and a
              guided customer request flow.
            </p>
          </div>

          <figure className={styles.openingFigure}>
            <Image
              src="/work/velora-auto-detail/home-desktop.png"
              alt="Velora Auto Detail homepage showing the mobile detailing offer, service navigation, primary request action, and driveway detailing photography"
              width={1381}
              height={635}
              sizes="(max-width: 768px) 96vw, 94vw"
              preload
              className={styles.caseImage}
            />
            <figcaption className={styles.caseCaption}>
              Customer-facing homepage / Clear positioning and one primary path
            </figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.chapter} aria-labelledby="challenge-title">
        <div className={styles.chapterInner}>
          <header className={styles.chapterHeader}>
            <p className={styles.chapterLabel}>The challenge</p>
            <h2 id="challenge-title">Make the service easy to trust.</h2>
          </header>
          <div className={styles.challengeBody}>
            <p className={styles.humanStatement}>
              How do you make a mobile service business feel trustworthy, easy
              to understand, and easy to contact without overwhelming the
              customer?
            </p>
            <div className={styles.prose}>
              <p>
                The concept begins with a practical tension: detailing has
                enough options to require explanation, but a visitor still
                needs to understand the offer quickly. The page leads with the
                mobile-service promise, then layers in services, packages,
                process, proof, and answers as they become useful.
              </p>
              <p>
                Calls to action stay consistent so the next step remains clear
                without turning every section into a sales pitch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${styles.chapter} ${styles.stoneChapter}`}
        aria-labelledby="experience-title"
      >
        <div className={styles.chapterInner}>
          <div className={styles.chapterLead}>
            <header className={styles.chapterHeader}>
              <p className={styles.chapterLabel}>The customer experience</p>
              <h2 id="experience-title">Clarity before complexity.</h2>
            </header>
            <div className={styles.prose}>
              <p>
                The visual hierarchy explains what Velora does, where the work
                happens, and how to begin. Service language stays plain, while
                trust points and package structure help a visitor compare
                options without reading a wall of detail.
              </p>
            </div>
          </div>

          <dl className={styles.experienceRail}>
            <div>
              <dt>Positioning</dt>
              <dd>Mobile detailing brought directly to the driveway.</dd>
            </div>
            <div>
              <dt>Service clarity</dt>
              <dd>Packages and service focus are organized for comparison.</dd>
            </div>
            <div>
              <dt>Confidence</dt>
              <dd>Process, trust points, results, and FAQs answer common questions.</dd>
            </div>
            <div>
              <dt>Action</dt>
              <dd>Primary calls to action lead into the same guided request path.</dd>
            </div>
          </dl>

          <div className={styles.mobileEvidence}>
            <div className={styles.mobileEvidenceCopy}>
              <p className={styles.chapterLabel}>Responsive by design</p>
              <h3>The hierarchy is reorganized, not merely reduced.</h3>
              <p>
                On a narrow screen, navigation, actions, service language,
                photography, and trust points become a deliberate vertical
                sequence. The customer can understand the service and reach the
                request flow without hunting through a desktop layout.
              </p>
            </div>
            <figure className={styles.mobileFigure}>
              <Image
                src="/work/velora-auto-detail/home-mobile.png"
                alt="Mobile Velora Auto Detail homepage with reorganized navigation, service message, request action, photography, and trust points"
                width={389}
                height={839}
                sizes="(max-width: 768px) 56vw, 18rem"
                className={styles.caseImage}
              />
              <figcaption className={styles.caseCaption}>
                Mobile homepage / Content order follows the decision path
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section
        className={`${styles.chapter} ${styles.darkChapter}`}
        aria-labelledby="request-title"
      >
        <div className={styles.wideChapterInner}>
          <div className={styles.chapterLead}>
            <header className={styles.chapterHeader}>
              <p className={styles.chapterLabel}>The request flow</p>
              <h2 id="request-title">A useful request, not a vague message.</h2>
            </header>
            <div className={styles.prose}>
              <p>
                The guided flow asks for the information needed to understand a
                detailing request before it enters the private workspace.
                Business meaning comes first: fewer missing details, a clearer
                service need, and a record that can move forward.
              </p>
            </div>
          </div>

          <ul className={styles.requestFields} aria-label="Information captured">
            <li>Customer information</li>
            <li>Vehicle information</li>
            <li>Service package</li>
            <li>Service focus</li>
            <li>ZIP code</li>
            <li>Date</li>
            <li>Time preference</li>
            <li>Notes</li>
          </ul>

          <figure className={styles.requestFigure}>
            <Image
              src="/work/velora-auto-detail/quote-desktop.png"
              alt="Velora quote request interface showing customer and vehicle information sections in a guided service request form"
              width={1622}
              height={866}
              sizes="(max-width: 768px) 96vw, 88vw"
              className={styles.caseImage}
            />
            <figcaption className={styles.caseCaption}>
              Guided quote request / Structured information before submission
            </figcaption>
          </figure>

          <div className={styles.requestExplanation}>
            <p>
              The route validates submitted values on the server and returns
              useful error or success states. Accepted public fields are
              selected explicitly, so a visitor cannot submit arbitrary
              privileged values into the operational record.
            </p>
            <p>
              Once accepted, the request is stored in the same data system used
              by Velora Manager. The form is the beginning of a workflow, not a
              dead-end contact message.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.chapter} aria-labelledby="connection-title">
        <div className={styles.chapterInner}>
          <div className={styles.chapterLead}>
            <header className={styles.chapterHeader}>
              <p className={styles.chapterLabel}>System connection</p>
              <h2 id="connection-title">The public side hands off cleanly.</h2>
            </header>
            <div className={styles.prose}>
              <p>
                A submitted request becomes a shared record that the private
                Manager can find, review, quote, and move through its workflow.
                The customer experience stays simple because the operational
                complexity lives behind it.
              </p>
            </div>
          </div>

          <ol className={styles.connectionPath}>
            <li>
              <strong>Public website</strong>
              <span>Guides the customer</span>
            </li>
            <li>
              <strong>Validated request</strong>
              <span>Checks and structures the data</span>
            </li>
            <li>
              <strong>Shared record</strong>
              <span>Persists the useful context</span>
            </li>
            <li>
              <strong>Velora Manager</strong>
              <span>Moves the work forward</span>
            </li>
          </ol>
        </div>
      </section>

      <section
        className={`${styles.chapter} ${styles.technicalChapter}`}
        aria-labelledby="engineering-title"
      >
        <div className={styles.chapterInner}>
          <header className={styles.chapterHeader}>
            <p className={styles.chapterLabel}>Engineering notes</p>
            <h2 id="engineering-title">Technical depth, kept in proportion.</h2>
          </header>
          <div className={styles.technicalLayer}>
            <p>
              The public interface is implemented with responsive React and
              Next.js composition, optimized image delivery, typed form data,
              server validation, and a Route Handler connected to persistent
              storage.
            </p>
            <ul className={styles.techList}>
              <li>Next.js</li>
              <li>React</li>
              <li>TypeScript</li>
              <li>Next/Image</li>
              <li>Route Handler</li>
              <li>Server validation</li>
              <li>Supabase</li>
              <li>Vercel</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.takeaway} aria-labelledby="takeaway-title">
        <div className={styles.takeawayInner}>
          <p className={styles.chapterLabel}>What it demonstrates</p>
          <h2 id="takeaway-title">
            Emmivale can design and build a polished customer-facing website
            that connects into a real operational workflow instead of stopping
            at a contact form.
          </h2>
        </div>
      </section>

      <footer className={styles.caseFooter}>
        <nav className={styles.projectNav} aria-label="Case study navigation">
          <Link href="/work" className={styles.backLink}>
            <span aria-hidden="true">←</span> Back to Work
          </Link>
          <Link href="/work/velora-manager" className={styles.nextProject}>
            <span>Next</span>
            Velora Manager <span aria-hidden="true">→</span>
          </Link>
        </nav>
        <div className={styles.projectInvitation}>
          <p>Have something similar in mind?</p>
          <Link href="/start-a-project">
            Start a Project <span aria-hidden="true">→</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}
