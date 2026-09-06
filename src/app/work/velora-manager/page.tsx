import type { Metadata } from "next";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Velora Manager",
  description:
    "A fictional portfolio concept for a private operations system connected to a public website workflow.",
  alternates: {
    canonical: "/work/velora-manager",
  },
};

export default function VeloraManagerPage() {
  return (
    <Section className="py-20 sm:py-24">
      <p className="text-sm font-semibold uppercase text-accent-secondary [letter-spacing:0.18em]">
        Portfolio Concept
      </p>
      <h1 className="mt-6 max-w-3xl font-serif text-5xl font-medium leading-tight sm:text-6xl">
        Velora Manager
      </h1>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
        A private business operations system concept for reviewing requests,
        managing workflow status, and keeping activity history visible.
      </p>
      <p className="mt-8 max-w-3xl border-t border-border pt-6 text-sm leading-7 text-muted">
        Velora Auto Detail and Velora Manager are fictional portfolio concepts
        built to demonstrate the design and development capabilities of
        Emmivale Works. They are not client projects or operating businesses.
      </p>
    </Section>
  );
}
