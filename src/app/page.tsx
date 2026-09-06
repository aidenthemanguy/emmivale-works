import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { Section } from "@/components/section";

const services = [
  {
    name: "Websites",
    description:
      "Clear, responsive sites that explain the business well and guide customers toward the right action.",
  },
  {
    name: "Custom Software",
    description:
      "Focused utilities, automations, dashboards, portals, and larger custom applications built around specific workflows.",
  },
  {
    name: "Business Systems",
    description:
      "When the public website, database, staff tools, permissions, records, and integrations need to work as one system.",
  },
  {
    name: "Ongoing Care",
    description:
      "Maintenance, troubleshooting, improvements, and continued development after launch.",
  },
];

const process = [
  {
    name: "Tell us how it works",
    description:
      "Walk us through how the business operates, where it slows down, and what you wish existed.",
    position: "max-w-5xl",
  },
  {
    name: "Shape the right solution",
    description:
      "Map what actually needs to change, define the first useful release, and make tradeoffs clear.",
    position: "ml-auto max-w-4xl",
  },
  {
    name: "Build in the open",
    description:
      "Review working screens and functioning flows while design and engineering develop together.",
    position: "max-w-6xl",
  },
  {
    name: "Put it to work",
    description:
      "Test realistic scenarios, refine the handoffs, and prepare the work for actual use.",
    position: "ml-auto max-w-5xl",
  },
  {
    name: "Keep it useful",
    description:
      "Maintain, support, and improve it as the business changes.",
    position: "max-w-4xl",
  },
];

const systemSteps = [
  { plain: "Customer request", technical: "Browser form" },
  { plain: "Public website", technical: "Next.js" },
  { plain: "Checked and saved", technical: "Route Handler" },
  { plain: "Shared database", technical: "PostgreSQL / Supabase" },
  { plain: "Private Manager", technical: "Auth + RLS" },
  {
    plain: "Workflow and history",
    technical: "Server Actions + audit events",
  },
];

const projectLinkClasses =
  "inline-flex min-h-11 items-center border-b border-accent pb-1 text-sm font-semibold text-foreground no-underline transition-colors hover:border-focus hover:text-focus focus-visible:text-focus";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Section className="relative pb-14 pt-12 sm:pb-18 sm:pt-16 lg:pb-20 lg:pt-20">
        <p className="text-xs font-semibold uppercase text-accent-secondary [letter-spacing:0.2em]">
          Emmivale Works
        </p>

        <h1 className="mt-7 max-w-6xl font-serif text-5xl font-medium leading-[1.02] text-foreground sm:text-7xl lg:text-8xl">
          <span className="block">Technology built</span>
          <span className="block sm:ml-[9%]">around how you work.</span>
        </h1>

        <div className="mt-10 grid gap-8 border-b border-border pb-12 sm:mt-12 sm:pb-14 md:grid-cols-[minmax(0,0.7fr)_minmax(18rem,0.44fr)] md:items-end lg:mt-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <ButtonLink href="/start-a-project" tone="clay">
              Start a Project
            </ButtonLink>
            <Link
              href="#work"
              className="inline-flex min-h-11 items-center text-sm font-semibold underline decoration-border underline-offset-8 transition-colors hover:text-focus focus-visible:text-focus"
            >
              See our work
            </Link>
          </div>

          <p className="max-w-md text-lg leading-8 text-muted sm:text-xl sm:leading-9">
            Websites, software, and custom systems designed around real
            problems—not off-the-shelf templates.
          </p>
        </div>
      </Section>

      <Section id="work" className="pb-16 pt-4 sm:pb-20 sm:pt-6 lg:pb-28">
        <div className="grid gap-5 py-8 md:grid-cols-[0.38fr_1fr] md:items-baseline lg:py-10">
          <h2 className="font-sans text-sm font-semibold uppercase text-accent-secondary [letter-spacing:0.18em]">
            Selected Work
          </h2>
          <p className="max-w-2xl text-xl font-medium leading-8 text-foreground sm:text-2xl sm:leading-9">
            Two connected products, designed across the customer and operations
            sides of one business.
          </p>
        </div>

        <article className="border-t border-border pt-9 sm:pt-11">
          <div className="grid gap-8 lg:grid-cols-[0.47fr_0.8fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold text-accent [letter-spacing:0.18em]">
                01
              </p>
              <h3 className="mt-4 font-serif text-4xl font-medium uppercase leading-tight sm:text-5xl">
                Velora Auto Detail
              </h3>
              <p className="mt-4 text-xs font-semibold uppercase text-accent-secondary [letter-spacing:0.16em]">
                Business website / quote workflow
              </p>
            </div>

            <div className="max-w-2xl lg:justify-self-end">
              <p className="text-base leading-8 text-muted">
                A customer-facing website designed to explain the service,
                establish trust, and carry people into a guided request flow.
                Its desktop and mobile layouts preserve the same clear
                conversion hierarchy.
              </p>
              <Link
                href="/work/velora-auto-detail"
                className={`mt-5 ${projectLinkClasses}`}
              >
                View case study
              </Link>
            </div>
          </div>

          <div className="mt-9 grid gap-8 sm:mt-11 xl:grid-cols-[minmax(0,1fr)_15.5rem] xl:items-start">
            <figure>
              <Image
                src="/work/velora-auto-detail/home-desktop.png"
                width={1381}
                height={635}
                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 92vw, 920px"
                preload
                alt="Velora Auto Detail desktop homepage with a detailing headline, request buttons, and a car being washed"
                className="h-auto w-full bg-foreground"
              />
              <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs leading-5 text-muted">
                <span>Customer-facing homepage</span>
                <span>Conversion path</span>
              </figcaption>
            </figure>

            <div className="grid gap-8 sm:grid-cols-[minmax(0,1fr)_15.5rem] sm:items-end xl:flex xl:flex-col xl:gap-0">
              <div className="border-t border-border pt-5 xl:order-2 xl:mt-7">
                <p className="text-xs font-semibold uppercase text-accent-secondary [letter-spacing:0.16em]">
                  Responsive by design
                </p>
                <p className="mt-3 max-w-lg text-sm leading-7 text-muted">
                  Navigation, actions, imagery, and supporting proof are
                  reorganized for a narrow screen rather than simply reduced in
                  size.
                </p>
              </div>

              <figure className="ml-auto w-[min(72vw,15.5rem)] sm:w-[15.5rem] xl:order-1">
                <Image
                  src="/work/velora-auto-detail/home-mobile.png"
                  width={389}
                  height={839}
                  sizes="(max-width: 639px) 72vw, 248px"
                  loading="lazy"
                  alt="Mobile Velora Auto Detail homepage with stacked navigation, a request button, and the service photograph"
                  className="h-auto w-full bg-foreground"
                />
                <figcaption className="mt-3 text-xs leading-5 text-muted">
                  Mobile homepage at its natural portrait ratio
                </figcaption>
              </figure>
            </div>
          </div>
        </article>

        <article className="mt-24 border-t border-border pt-9 sm:mt-28 sm:pt-11 lg:mt-36">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_0.5fr] lg:items-end">
            <div className="order-2 max-w-2xl lg:order-1">
              <p className="text-base leading-8 text-muted">
                Built for request discovery and day-to-day control: search and
                filtering, workflow states, quotes, internal notes, and a
                persistent activity record inside an authenticated workspace.
              </p>
              <Link
                href="/work/velora-manager"
                className={`mt-5 ${projectLinkClasses}`}
              >
                View case study
              </Link>
            </div>

            <div className="order-1 lg:order-2 lg:text-right">
              <p className="text-sm font-semibold text-accent [letter-spacing:0.18em]">
                02
              </p>
              <h3 className="mt-4 font-sans text-3xl font-semibold uppercase leading-tight text-foreground sm:text-4xl">
                Velora Manager
              </h3>
              <p className="mt-4 text-xs font-semibold uppercase text-accent-secondary [letter-spacing:0.16em]">
                Private operations software
              </p>
            </div>
          </div>

          <figure className="mt-9 sm:mt-11">
            <Image
              src="/work/velora-manager/requests.png"
              width={1877}
              height={889}
              sizes="(max-width: 767px) 100vw, (max-width: 1279px) 92vw, 1200px"
              loading="lazy"
              alt="Velora Manager request list with sidebar navigation, search and package filters, status tabs, and customer records"
              className="h-auto w-full bg-surface"
            />
            <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs leading-5 text-muted">
              <span>Request discovery and filtering</span>
              <span>Structured records · Workflow states</span>
            </figcaption>
          </figure>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,0.67fr)_minmax(15rem,0.33fr)] lg:items-end lg:gap-10">
            <figure>
              <Image
                src="/work/velora-manager/request-detail.png"
                width={1887}
                height={943}
                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 64vw, 800px"
                loading="lazy"
                alt="Velora Manager request detail showing a workflow timeline, status controls, customer request data, and quote editing"
                className="h-auto w-full bg-surface"
              />
              <figcaption className="mt-3 text-xs leading-5 text-muted">
                A request moves from discovery into stateful record management
              </figcaption>
            </figure>

            <div className="border-t border-border pt-5 lg:mb-8">
              <p className="text-xs font-semibold uppercase text-accent-secondary [letter-spacing:0.16em]">
                Behind the interface
              </p>
              <p className="mt-3 text-sm leading-7 text-muted">
                Authentication, database persistence, internal notes, pricing,
                and audit history support the visible workflow without making
                the interface feel technical to use.
              </p>
            </div>
          </div>
        </article>

        <aside className="mt-20 grid gap-4 border-t border-border pt-6 text-sm leading-7 text-muted md:grid-cols-[0.38fr_1fr] lg:mt-24">
          <p className="text-xs font-semibold uppercase text-accent-secondary [letter-spacing:0.16em]">
            About this work
          </p>
          <p className="max-w-3xl">
            Velora is a fictional business concept developed as a
            production-quality demonstration of Emmivale Works’ design and
            engineering capabilities. It is not a client project or operating
            business.
          </p>
        </aside>
      </Section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="grid gap-6 lg:grid-cols-[0.5fr_1fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase text-accent-secondary [letter-spacing:0.18em]">
                Connected System
              </p>
              <h2 className="mt-4 font-sans text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                One connected system.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-muted">
              A customer sees a straightforward request path. Behind it, the
              information is checked, stored, protected, and made useful to the
              people doing the work.
            </p>
          </div>

          <ol
            aria-label="How a customer request moves through the Velora system"
            className="mt-10 grid md:mt-14 md:grid-cols-6"
          >
            {systemSteps.map((step) => (
              <li
                key={step.plain}
                className="relative border-l border-accent-secondary pb-8 pl-7 last:pb-0 md:border-l-0 md:border-t md:pb-0 md:pl-0 md:pr-5 md:pt-6"
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[5px] top-1 h-2.5 w-2.5 bg-accent md:-top-[5px] md:left-0"
                />
                <span className="block max-w-40 text-sm font-semibold leading-6 text-foreground">
                  {step.plain}
                </span>
                <span className="mt-2 block max-w-40 text-xs leading-5 text-muted">
                  {step.technical}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Section id="services" className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.42fr_1fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase text-accent-secondary [letter-spacing:0.18em]">
              What We Build
            </p>
            <h2 className="mt-4 max-w-sm font-sans text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Technology with a clear job to do.
            </h2>
          </div>

          <div className="border-t border-border">
            {services.map((service, index) => (
              <div
                key={service.name}
                className={`grid gap-4 border-b border-border py-6 sm:grid-cols-[0.48fr_1fr] sm:py-7 ${
                  index % 2 === 1 ? "lg:pl-8" : "lg:pr-8"
                }`}
              >
                <h3 className="font-sans text-xl font-semibold text-foreground sm:text-2xl">
                  {service.name}
                </h3>
                <p className="max-w-2xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  {service.description}
                </p>
              </div>
            ))}
            <p className="mt-5 text-sm leading-7 text-muted">
              Larger custom engagements begin with a technical feasibility
              review and a clearly defined first release.
            </p>
          </div>
        </div>
      </Section>

      <Section id="process" className="pb-16 pt-8 sm:pb-20 sm:pt-10 lg:pb-24">
        <div className="grid gap-6 border-t border-border pt-9 md:grid-cols-[0.38fr_1fr] md:items-end">
          <p className="text-xs font-semibold uppercase text-accent-secondary [letter-spacing:0.18em]">
            How We Work
          </p>
          <h2 className="max-w-2xl font-sans text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            A clear sequence, shaped around the work itself.
          </h2>
        </div>

        <ol className="mt-10 sm:mt-12">
          {process.map((step, index) => (
            <li
              key={step.name}
              className={`${step.position} grid gap-4 border-t border-border py-6 sm:grid-cols-[3rem_minmax(12rem,0.72fr)_minmax(0,1fr)] sm:items-start sm:gap-6 sm:py-7`}
            >
              <p className="text-xs font-semibold text-accent [letter-spacing:0.16em]">
                0{index + 1}
              </p>
              <h3 className="font-sans text-xl font-semibold leading-7 text-foreground sm:text-2xl">
                {step.name}
              </h3>
              <p className="max-w-xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="about" className="py-12 sm:py-16 lg:py-20">
        <div className="grid gap-8 border-y border-border py-10 sm:py-12 lg:grid-cols-[0.9fr_0.7fr] lg:items-center">
          <h2 className="max-w-3xl font-serif text-4xl font-medium leading-tight text-foreground sm:text-5xl">
            You shouldn’t have to speak like an engineer to get good technology
            built.
          </h2>
          <p className="max-w-xl text-base leading-8 text-muted">
            Tell us how your business works, where the friction is, or what you
            wish existed. Emmivale Works translates that into a clear plan and a
            right-sized website, software product, or connected system.
          </p>
        </div>
      </Section>

      <Section className="pb-20 pt-8 sm:pb-24 sm:pt-12 lg:pb-28">
        <div className="ml-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_0.5fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase text-accent-secondary [letter-spacing:0.18em]">
              Start a Project
            </p>
            <h2 className="mt-4 font-sans text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Tell us what you’re trying to build.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
              Start with the problem, the idea, or the part of the business that
              is harder than it should be.
            </p>
          </div>
          <div className="lg:justify-self-end">
            <ButtonLink href="/start-a-project" tone="clay">
              Start a Project
            </ButtonLink>
          </div>
        </div>
      </Section>
    </div>
  );
}
