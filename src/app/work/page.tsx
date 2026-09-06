import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected Emmivale Works portfolio concepts for websites, software, and connected business systems.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkPage() {
  return (
    <Section className="py-20 sm:py-24">
      <p className="text-sm font-semibold uppercase text-accent-secondary [letter-spacing:0.18em]">
        Work
      </p>
      <h1 className="mt-6 max-w-3xl font-serif text-5xl font-medium leading-tight sm:text-6xl">
        Selected work will show how public websites and private tools connect.
      </h1>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
        The first portfolio foundations are Velora Auto Detail, a public
        detailing website concept, and Velora Manager, a private operations
        system concept.
      </p>
      <p className="mt-8 max-w-3xl border-t border-border pt-6 text-sm leading-7 text-muted">
        Velora Auto Detail and Velora Manager are fictional portfolio concepts
        built to demonstrate the design and development capabilities of
        Emmivale Works. They are not client projects or operating businesses.
      </p>
      <div className="mt-10 flex flex-col gap-4 text-sm font-semibold sm:flex-row">
        <Link
          href="/work/velora-auto-detail"
          className="underline decoration-border underline-offset-8 transition-colors hover:text-accent focus-visible:text-accent"
        >
          Velora Auto Detail
        </Link>
        <Link
          href="/work/velora-manager"
          className="underline decoration-border underline-offset-8 transition-colors hover:text-accent focus-visible:text-accent"
        >
          Velora Manager
        </Link>
      </div>
    </Section>
  );
}
