"use client";

import { useState } from "react";
import styles from "@/app/home.module.css";

const examples = [
  {
    label: "Quote requests",
    problem:
      "We lose track of quote requests between email and text messages.",
    response: [
      "Intake flow",
      "Shared database",
      "Manager dashboard",
      "Status workflow",
    ],
  },
  {
    label: "Service clarity",
    problem:
      "Customers keep asking the same questions and don’t know what to book.",
    response: [
      "Clear service architecture",
      "Guided request flow",
      "Responsive website",
    ],
  },
  {
    label: "Repeated copying",
    problem:
      "We spend hours copying the same information between systems.",
    response: [
      "Workflow automation",
      "Data integration",
      "Internal tool",
    ],
  },
];

export function ProblemTranslator() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeExample = examples[activeIndex];

  return (
    <section
      className={styles.translatorField}
      aria-labelledby="translator-title"
    >
      <header className={styles.translatorIntro}>
        <p>In your words</p>
        <h2 id="translator-title">Tell us the problem in your words.</h2>
        <p>
          You don’t need the technical language. Choose a familiar starting
          point and see how we would begin mapping it.
        </p>
      </header>

      <div className={styles.translatorBody}>
        <div
          className={styles.problemChoices}
          role="group"
          aria-label="Example business problems"
        >
          {examples.map((example, index) => (
            <button
              key={example.label}
              type="button"
              aria-pressed={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            >
              {example.label}
            </button>
          ))}
        </div>

        <div className={styles.translationResult} aria-live="polite">
          <blockquote>“{activeExample.problem}”</blockquote>
          <div>
            <p>We begin mapping</p>
            <ul>
              {activeExample.response.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
