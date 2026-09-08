import Image from "next/image";
import Link from "next/link";
import { CapabilityField } from "@/components/home/capability-field";
import { ProblemTranslator } from "@/components/home/problem-translator";
import { SystemRoute } from "@/components/home/system-route";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div id="top" className={styles.page}>
      <section className={styles.hero} aria-labelledby="home-title">
        <div className={styles.heroInner}>
          <p className={styles.heroKicker}>
            Emmivale Works / Websites / Software / Systems
          </p>

          <h1 id="home-title" className={styles.heroTitle}>
            <span className={styles.heroTitleStrong}>Technology built</span>
            <span className={styles.heroTitleHuman}>around how you work.</span>
          </h1>

          <div className={styles.heroDetails}>
            <p className={styles.heroCopy}>
              Start with how the business actually works. We’ll help figure out
              what needs to be built.
            </p>

            <div className={styles.heroActions}>
              <Link href="/start-a-project" className={styles.primaryAction}>
                Start a Project <span aria-hidden="true">→</span>
              </Link>
              <Link href="#work" className={styles.secondaryAction}>
                See our work <span aria-hidden="true">↓</span>
              </Link>
            </div>
          </div>

          <svg
            className={styles.threadOpening}
            viewBox="0 0 1600 900"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              pathLength="1"
              d="M 328 345 L 328 476 C 328 516 352 536 398 536 L 1304 536 C 1350 536 1374 560 1374 604 L 1374 900"
            />
          </svg>
        </div>
      </section>

      <section
        id="work"
        className={styles.workField}
        aria-labelledby="selected-work-label"
      >
        <article className={styles.autoScene}>
          <header className={styles.autoLead}>
            <p id="selected-work-label" className={styles.workSectionLabel}>
              Selected work
            </p>
            <h2 className={styles.projectTitle}>
              <span className={styles.projectNumber}>
                01 <span aria-hidden="true">/</span>
              </span>
              <span>Velora Auto Detail</span>
            </h2>
            <p className={styles.projectMeta}>
              Business website / Quote workflow / Responsive experience
            </p>
          </header>

          <figure className={styles.autoDesktopFigure}>
            <Image
              src="/work/velora-auto-detail/home-desktop.png"
              width={1381}
              height={635}
              sizes="94vw"
              preload
              alt="Velora Auto Detail desktop homepage with a detailing headline, request buttons, and a car being washed"
              className={styles.autoDesktopImage}
            />
            <figcaption className={styles.autoCaption}>
              <span>What the customer sees</span>
              <span>Homepage / Guided request path</span>
            </figcaption>
          </figure>

          <div className={styles.autoOpeningCopy}>
            <p className={styles.workStatement}>
              The front of the business, made clear.
            </p>
            <p>
              A customer-facing website that explains the service, establishes
              trust, and carries people into a guided request flow without
              making the work feel generic.
            </p>
          </div>

          <div className={styles.autoSpecimen}>
            <div className={styles.autoSpecimenCopy}>
              <p>Responsive by design</p>
              <h3>The same decision path, rebuilt for a narrow screen.</h3>
              <p>
                Navigation, actions, imagery, and supporting proof are
                reorganized for mobile rather than simply reduced in size.
              </p>
              <Link
                href="/work/velora-auto-detail"
                className={styles.projectLink}
              >
                See the project <span aria-hidden="true">↗</span>
              </Link>
            </div>

            <figure className={styles.autoMobileFigure}>
              <Image
                src="/work/velora-auto-detail/home-mobile.png"
                width={389}
                height={839}
                sizes="(max-width: 767px) 52vw, 310px"
                loading="lazy"
                alt="Mobile Velora Auto Detail homepage with stacked navigation, a request button, and the service photograph"
                className={styles.autoMobileImage}
              />
              <figcaption>Mobile homepage / Natural portrait ratio</figcaption>
            </figure>
          </div>
        </article>

        <div className={styles.projectHandoff}>
          <div className={styles.handoffLabels}>
            <p>What the customer sees</p>
            <p>Same request</p>
            <p>What the business runs on</p>
          </div>
          <svg viewBox="0 0 1200 170" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <marker
                id="handoff-arrow"
                markerWidth="8"
                markerHeight="8"
                refX="7"
                refY="4"
                orient="auto"
                markerUnits="strokeWidth"
              >
                <path d="M 0 0 L 8 4 L 0 8 Z" />
              </marker>
            </defs>
            <path
              className={styles.handoffThread}
              d="M 8 86 L 300 86 C 372 86 382 124 452 124 L 744 124 C 816 124 826 86 898 86 L 1184 86"
              markerEnd="url(#handoff-arrow)"
            />
          </svg>
        </div>

        <article className={styles.managerScene}>
          <header className={styles.managerLead}>
            <div>
              <h2>
                <span className={styles.managerNumber}>
                  02 <span aria-hidden="true">/</span>
                </span>
                <span>Velora Manager</span>
              </h2>
              <p className={styles.managerMeta}>
                Private workspace / Request workflow / Persistent history
              </p>
            </div>

            <div className={styles.managerIntro}>
              <p>
                Search, workflow state, quotes, internal notes,
                authentication, and audit history—built around the same
                requests created by the public website.
              </p>
              <Link href="/work/velora-manager" className={styles.projectLinkDark}>
                See the project <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </header>

          <div className={styles.managerPrimaryStage}>
            <ul className={styles.managerAnnotations} aria-label="Interface capabilities">
              <li>Search</li>
              <li>Package filter</li>
              <li>Status tabs</li>
              <li>Preferred schedule</li>
              <li>Created</li>
            </ul>
            <figure className={styles.managerRequestsFigure}>
              <Image
                src="/work/velora-manager/requests.png"
                width={1877}
                height={889}
                sizes="94vw"
                loading="lazy"
                alt="Velora Manager request list with sidebar navigation, search and package filters, status tabs, and customer records"
                className={styles.managerImage}
              />
              <figcaption>
                Request discovery / Filters / Workflow state
              </figcaption>
            </figure>
          </div>

          <div className={styles.managerDetailStage}>
            <div className={styles.managerDetailCopy}>
              <p>From list to living record</p>
              <h3>The request keeps its context as the work moves.</h3>
              <p>
                Customer details, status controls, quote editing, internal
                notes, and a durable activity trail remain connected in one
                authenticated view.
              </p>
            </div>

            <figure className={styles.managerDetailFigure}>
              <Image
                src="/work/velora-manager/request-detail.png"
                width={1887}
                height={943}
                sizes="(max-width: 767px) 94vw, 76vw"
                loading="lazy"
                alt="Velora Manager request detail showing a workflow timeline, status controls, customer request data, and quote editing"
                className={styles.managerImage}
              />
              <figcaption>
                Stateful request detail / Quote controls / Audit history
              </figcaption>
            </figure>
          </div>
        </article>

        <aside className={styles.workDisclosure}>
          <p>
            About this work
          </p>
          <p>
            Velora is a fictional business concept developed as a
            production-quality demonstration of Emmivale Works’ design and
            engineering capabilities. It is not a client project or operating
            business.
          </p>
        </aside>
      </section>

      <SystemRoute />

      <CapabilityField />

      <ProblemTranslator />

      <section
        id="process"
        className={styles.methodField}
        aria-labelledby="method-title"
      >
        <header className={styles.methodIntro}>
          <p>Working method</p>
          <h2 id="method-title">The work stays visible while it becomes real.</h2>
        </header>

        <ol className={styles.methodTrack}>
          {[
            "You talk.",
            "We map it.",
            "We build it where you can see it.",
            "We test it together.",
            "We stay around.",
          ].map((stage) => (
            <li key={stage}>
              <span aria-hidden="true" />
              <p>{stage}</p>
            </li>
          ))}
        </ol>

        <p className={styles.methodNote}>
          Conversation becomes a map, the map becomes working software, and
          each review gives the next decision something real to respond to.
        </p>
      </section>

      <section
        id="about"
        className={styles.philosophyField}
        aria-labelledby="philosophy-title"
      >
        <div>
          <p>Philosophy</p>
          <h2 id="philosophy-title">
            <span>You shouldn’t have to speak like an engineer</span>
            <span>to get good technology built.</span>
          </h2>
        </div>

        <p className={styles.philosophyAside}>
          <span>
            Tell us how the business works, where the friction is, or what you
            wish existed. We’ll help turn that into a clear plan and build what
            actually helps.
          </span>
          <Link href="#top" className={styles.backToTop}>
            Back to top <span aria-hidden="true">↑</span>
          </Link>
        </p>
      </section>

      <section className={styles.finalCta} aria-labelledby="final-cta-title">
        <div className={styles.finalCtaInner}>
          <p>Start a project</p>
          <h2 id="final-cta-title">Tell us what you&apos;re trying to build.</h2>
          <p>
            Start with the problem, the idea, or the part of the business that
            is harder than it should be.
          </p>
          <div className={styles.finalActionThread}>
            <Link href="/start-a-project" className={styles.finalAction}>
              Start a Project <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
