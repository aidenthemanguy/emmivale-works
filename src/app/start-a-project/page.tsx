import type { Metadata } from "next";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Start a Project",
  description:
    "Start a conversation with Emmivale Works about a website, custom software project, or business system.",
  alternates: {
    canonical: "/start-a-project",
  },
};

export default function StartAProjectPage() {
  return (
    <Section className="py-20 sm:py-24">
      <p className="text-sm font-semibold uppercase text-accent-secondary [letter-spacing:0.18em]">
        Start a Project
      </p>
      <h1 className="mt-6 max-w-3xl font-serif text-5xl font-medium leading-tight sm:text-6xl">
        Tell us what you are trying to build.
      </h1>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
        This page will become a calm project inquiry flow for websites, custom
        software, and connected business systems. The form will be added in a
        later milestone.
      </p>
    </Section>
  );
}
