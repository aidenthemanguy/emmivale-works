import type { Metadata } from "next";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Velora Auto Detail",
  description:
    "A fictional portfolio concept for a public mobile detailing website and guided quote request workflow.",
  alternates: {
    canonical: "/work/velora-auto-detail",
  },
};

export default function VeloraAutoDetailPage() {
  return (
    <Section className="py-20 sm:py-24">
      <p className="text-sm font-semibold uppercase text-accent-secondary [letter-spacing:0.18em]">
        Portfolio Concept
      </p>
      <h1 className="mt-6 max-w-3xl font-serif text-5xl font-medium leading-tight sm:text-6xl">
        Velora Auto Detail
      </h1>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
        A production-quality mobile detailing website concept with a guided
        quote request workflow.
      </p>
      <p className="mt-8 max-w-3xl border-t border-border pt-6 text-sm leading-7 text-muted">
        Velora Auto Detail and Velora Manager are fictional portfolio concepts
        built to demonstrate the design and development capabilities of
        Emmivale Works. They are not client projects or operating businesses.
      </p>
    </Section>
  );
}
