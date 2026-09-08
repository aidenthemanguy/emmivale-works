import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../case-study.module.css";

const description =
  "A fictional portfolio concept for a private operations system connected to a public website workflow.";

export const metadata: Metadata = {
  title: "Velora Manager",
  description,
  alternates: {
    canonical: "/work/velora-manager",
  },
  openGraph: {
    title: "Velora Manager | Emmivale Works",
    description,
    url: "/work/velora-manager",
    siteName: "Emmivale Works",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Velora Manager | Emmivale Works",
    description,
  },
};

const discoveryTools = [
  ["Search", "Find a request by customer, vehicle, or identifying detail."],
  ["Package", "Narrow the list to the service the customer selected."],
  ["Status", "See which requests need contact, a quote, or scheduling."],
  ["Sort", "Bring the newest or most relevant work into view."],
  ["Records", "Open the complete request without losing its context."],
  ["Schedule", "Keep timing visible as a request moves toward service."],
];

const workflow = [
  ["New", "Received and ready for review."],
  ["Contacted", "The customer conversation has begun."],
  ["Quoted", "A price has been prepared and recorded."],
  ["Scheduled", "The work has an agreed service time."],
  ["Complete", "The request has reached its working conclusion."],
];

export default function VeloraManagerPage() {
  return (
    <article className={styles.casePage}>
      <section
        className={`${styles.caseHero} ${styles.managerHero}`}
        aria-labelledby="case-title"
      >
        <div className={styles.caseHeroInner}>
          <Link href="/work" className={styles.backLink}>
            <span aria-hidden="true">←</span> Back to Work
          </Link>

          <div className={styles.caseHeroGrid}>
            <div>
              <p className={styles.caseIndex}>02 / Selected Work</p>
              <h1 id="case-title" className={styles.caseTitle}>
                Velora Manager
              </h1>
              <p className={styles.caseCategory}>Private operations software</p>
              <p className={styles.caseDisclosure}>
                Fictional production-quality demonstration, not a client
                project or operating business.
              </p>
            </div>
            <p className={styles.caseSummary}>
              A private workspace built around the same detailing requests
              created by the public Velora website, from first review through
              scheduling and completion.
            </p>
          </div>

          <figure className={styles.openingFigure}>
            <Image
              src="/work/velora-manager/requests.png"
              alt="Velora Manager requests view with search, filtering, status, customer, vehicle, package, and schedule information"
              width={1877}
              height={889}
              sizes="(max-width: 768px) 96vw, 94vw"
              preload
              className={styles.caseImage}
            />
            <figcaption className={styles.caseCaption}>
              Request workspace / Work is visible before a record is opened
            </figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.chapter} aria-labelledby="problem-title">
        <div className={styles.chapterInner}>
          <header className={styles.chapterHeader}>
            <p className={styles.chapterLabel}>The business problem</p>
            <h2 id="problem-title">A request is only the beginning.</h2>
          </header>
          <div className={styles.challengeBody}>
            <p className={styles.humanStatement}>
              Once requests begin arriving, someone needs to understand them,
              follow up, prepare a quote, schedule the work, and remember what
              happened.
            </p>
            <div className={styles.prose}>
              <p>
                Velora Manager gives that work a private, focused home. It
                carries the information collected by the public website into a
                working queue, then keeps the customer, vehicle, service need,
                schedule, quote, notes, and history attached to one record.
              </p>
              <p>
                The interface is intentionally quieter than the customer site.
                It is designed for repeated scanning, fast decisions, and a
                clear next action.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${styles.chapter} ${styles.stoneChapter}`}
        aria-labelledby="discovery-title"
      >
        <div className={styles.chapterInner}>
          <div className={styles.chapterLead}>
            <header className={styles.chapterHeader}>
              <p className={styles.chapterLabel}>Request discovery</p>
              <h2 id="discovery-title">Find the work that needs attention.</h2>
            </header>
            <div className={styles.prose}>
              <p>
                The request list gives the operator useful context at a glance
                and several direct ways to narrow the queue. The goal is not a
                dashboard full of metrics; it is a reliable view of current
                customer work, so requests do not disappear into separate email
                or text threads and their current state remains organized.
              </p>
            </div>
          </div>

          <dl className={styles.discoveryRail}>
            {discoveryTools.map(([term, description]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>{description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className={styles.chapter} aria-labelledby="record-title">
        <div className={styles.wideChapterInner}>
          <div className={styles.evidenceIntro}>
            <header className={styles.chapterHeader}>
              <p className={styles.chapterLabel}>From list to record</p>
              <h2 id="record-title">The whole request stays together.</h2>
            </header>
            <div className={styles.prose}>
              <p>
                Opening a request turns a row into a working record. Customer
                and vehicle details remain visible beside the service package,
                focus, schedule, workflow status, quote, notes, and available
                next actions.
              </p>
            </div>
          </div>

          <figure className={styles.recordFigure}>
            <Image
              src="/work/velora-manager/request-detail.png"
              alt="Velora Manager request detail view with customer, vehicle, service, workflow, quote, and note information"
              width={1887}
              height={943}
              sizes="(max-width: 768px) 96vw, 94vw"
              className={styles.caseImage}
            />
            <figcaption className={styles.caseCaption}>
              Request detail / Context and next actions share one workspace
            </figcaption>
          </figure>

          <div className={styles.evidenceNotes}>
            <div>
              <h3>Customer context</h3>
              <p>
                Contact, vehicle, and submitted service details remain close to
                the work they describe.
              </p>
            </div>
            <div>
              <h3>Current state</h3>
              <p>
                Status and schedule make it clear where the request sits and
                what should happen next.
              </p>
            </div>
            <div>
              <h3>Working record</h3>
              <p>
                Quotes, internal notes, and activity accumulate without
                replacing the customer&apos;s original request.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${styles.chapter} ${styles.workflowChapter}`}
        aria-labelledby="workflow-title"
      >
        <div className={styles.chapterInner}>
          <div className={styles.chapterLead}>
            <header className={styles.chapterHeader}>
              <p className={styles.chapterLabel}>Workflow pipeline</p>
              <h2 id="workflow-title">Progress follows defined steps.</h2>
            </header>
            <div className={styles.prose}>
              <p>
                Each status represents a real stage in the service process.
                Available actions move the request through sensible transitions
                while server-side rules reject impossible jumps, such as moving
                directly from New to Complete.
              </p>
            </div>
          </div>

          <ol className={styles.workflowPath}>
            {workflow.map(([status, description]) => (
              <li key={status}>
                <strong>{status}</strong>
                <span>{description}</span>
              </li>
            ))}
          </ol>
          <p className={styles.alternateStates}>
            <span>Cancelled</span>
            <span>Declined</span>
          </p>
        </div>
      </section>

      <section className={styles.chapter} aria-labelledby="working-detail-title">
        <div className={styles.chapterInner}>
          <header className={styles.chapterHeader}>
            <p className={styles.chapterLabel}>Working detail</p>
            <h2 id="working-detail-title">
              Quote and notes serve different jobs.
            </h2>
          </header>
          <div className={styles.twoColumnNotes}>
            <article>
              <h3>A quote the business can rely on.</h3>
              <p>
                A price is attached to the request and shown in ordinary
                currency. Behind the interface it is stored as integer cents,
                avoiding floating-point ambiguity while keeping the operator&apos;s
                task straightforward.
              </p>
            </article>
            <article>
              <h3>Private context for the next decision.</h3>
              <p>
                Internal notes are kept separately from the customer&apos;s
                submission. The original need remains intact while the team can
                add the context required to follow through.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        className={`${styles.chapter} ${styles.darkChapter}`}
        aria-labelledby="activity-title"
      >
        <div className={styles.wideChapterInner}>
          <div className={styles.evidenceIntro}>
            <header className={styles.chapterHeader}>
              <p className={styles.chapterLabel}>Activity history</p>
              <h2 id="activity-title">The record remembers what changed.</h2>
            </header>
            <div className={styles.prose}>
              <p>
                Meaningful events such as Request created, Status changed,
                Quote updated, and Internal notes updated become part of the
                request&apos;s history. That history is produced by database-backed
                audit behavior rather than temporary interface state, giving
                later decisions a clear basis after a refresh or restart.
              </p>
            </div>
          </div>

          <figure className={styles.activityFigure}>
            <Image
              src="/work/velora-manager/request-activity.png"
              alt="Velora Manager request activity area showing customer context, internal notes, timestamps, and recorded request history"
              width={1876}
              height={556}
              sizes="(max-width: 768px) 96vw, 94vw"
              className={styles.caseImage}
            />
            <figcaption className={styles.caseCaption}>
              Activity history / Durable context follows the request
            </figcaption>
          </figure>
        </div>
      </section>

      <section
        className={`${styles.chapter} ${styles.securityChapter}`}
        aria-labelledby="security-title"
      >
        <div className={styles.chapterInner}>
          <div className={styles.chapterLead}>
            <header className={styles.chapterHeader}>
              <p className={styles.chapterLabel}>Security model</p>
              <h2 id="security-title">Private means authorized at every layer.</h2>
            </header>
            <div className={styles.prose}>
              <p>
                Signing in is necessary, but it is not enough. Access is
                restricted to approved Manager users, and request reads and
                mutations are checked again where the data is handled.
              </p>
            </div>
          </div>

          <div className={styles.securityLayers}>
            <div>
              <strong>Identity</strong>
              <p>Supabase Auth establishes the signed-in user.</p>
            </div>
            <div>
              <strong>Session</strong>
              <p>Server-rendered routes receive authenticated session context.</p>
            </div>
            <div>
              <strong>Membership</strong>
              <p>Only approved Manager members reach private operations views.</p>
            </div>
            <div>
              <strong>Data boundary</strong>
              <p>RLS and server-authorized mutations protect request records.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.chapter} aria-labelledby="persistence-title">
        <div className={styles.chapterInner}>
          <div className={styles.chapterLead}>
            <header className={styles.chapterHeader}>
              <p className={styles.chapterLabel}>Persistence</p>
              <h2 id="persistence-title">The workflow survives the interface.</h2>
            </header>
            <div className={styles.prose}>
              <p>
                Requests live in PostgreSQL rather than temporary page state.
                Public submissions and private operations use the same records,
                so status, quote, notes, and history remain after refreshes and
                application restarts.
              </p>
            </div>
          </div>

          <ol className={styles.persistencePath}>
            <li>
              <strong>Server Components</strong>
              <span>Request authenticated page data.</span>
            </li>
            <li>
              <strong>Supabase client</strong>
              <span>Carries server session context.</span>
            </li>
            <li>
              <strong>PostgreSQL</strong>
              <span>Stores the shared working record.</span>
            </li>
            <li>
              <strong>RLS</strong>
              <span>Enforces access beside the data.</span>
            </li>
            <li>
              <strong>Database history</strong>
              <span>Preserves meaningful activity over time.</span>
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
            <h2 id="engineering-title">The stack supports the operating model.</h2>
          </header>
          <div className={styles.technicalLayer}>
            <p>
              The private application combines server-rendered reads, focused
              client interactions, server-authorized mutations, typed business
              rules, persistent relational data, and database-backed activity
              history.
            </p>
            <ul className={styles.techList}>
              <li>Next.js</li>
              <li>React</li>
              <li>TypeScript</li>
              <li>Server Components</li>
              <li>Server Actions</li>
              <li>Supabase Auth</li>
              <li>PostgreSQL</li>
              <li>Row Level Security</li>
              <li>Vercel</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.takeaway} aria-labelledby="takeaway-title">
        <div className={styles.takeawayInner}>
          <p className={styles.chapterLabel}>What it demonstrates</p>
          <h2 id="takeaway-title">
            Emmivale can build secure, database-backed internal software around
            the way a business actually operates.
          </h2>
        </div>
      </section>

      <footer className={styles.caseFooter}>
        <nav className={styles.projectNav} aria-label="Case study navigation">
          <Link href="/work" className={styles.backLink}>
            <span aria-hidden="true">←</span> Back to Work
          </Link>
          <Link
            href="/work/velora-auto-detail"
            className={`${styles.nextProject} ${styles.previousProject}`}
          >
            <span>Previous</span>
            <span aria-hidden="true">←</span> Velora Auto Detail
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
