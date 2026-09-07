"use client";

import { useState } from "react";
import styles from "@/app/home.module.css";

const capabilities = [
  {
    name: "Websites",
    description:
      "Clear, responsive websites that explain the work and guide people toward the right next step.",
    examples: [
      "Service sites",
      "Portfolios",
      "Quote flows",
      "Responsive redesigns",
    ],
  },
  {
    name: "Custom Software",
    description:
      "Focused tools and larger applications built around specific workflows.",
    feasibility: true,
    examples: [
      "Utilities",
      "Dashboards",
      "Portals",
      "Automation",
      "Custom applications",
    ],
  },
  {
    name: "Business Systems",
    description:
      "Connected internal systems that keep information, permissions, and workflow in one usable place.",
    feasibility: true,
    examples: [
      "Databases",
      "Internal tools",
      "Permissions",
      "Workflow software",
      "Integrations",
    ],
  },
  {
    name: "Ongoing Care",
    description:
      "Practical maintenance and continued development that keep useful technology reliable as the work changes.",
    examples: [
      "Maintenance",
      "Improvements",
      "Troubleshooting",
      "Continued development",
    ],
  },
];

const connectorRoutes = [
  { path: "M 236 82 C 292 82 292 174 324 174", junction: [324, 174] },
  { path: "M 764 88 C 708 88 708 174 676 174", junction: [676, 174] },
  { path: "M 286 418 C 328 418 318 326 324 326", junction: [324, 326] },
  { path: "M 764 420 C 712 420 706 326 676 326", junction: [676, 326] },
];

export function CapabilityField() {
  const [activeIndex, setActiveIndex] = useState(1);
  const activeCapability = capabilities[activeIndex];
  const activeRoute = connectorRoutes[activeIndex];

  return (
    <section
      id="services"
      className={styles.capabilityField}
      aria-labelledby="capabilities-title"
    >
      <header className={styles.capabilityIntro}>
        <p>What we build</p>
        <h2 id="capabilities-title">Different kinds of work. One way in.</h2>
        <p>
          Start with the part that feels closest. We’ll help determine the
          shape, scope, and right-sized first release.
        </p>
      </header>

      <div
        className={styles.capabilityMap}
        data-active-index={activeIndex}
      >
        <svg
          className={styles.capabilityThread}
          viewBox="0 0 1000 500"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            key={`path-${activeIndex}`}
            className={styles.capabilityThreadPath}
            pathLength="1"
            d={activeRoute.path}
          />
          <rect
            key={`junction-${activeIndex}`}
            className={styles.capabilityThreadJunction}
            x={activeRoute.junction[0] - 6}
            y={activeRoute.junction[1] - 6}
            width="12"
            height="12"
            transform={`rotate(45 ${activeRoute.junction[0]} ${activeRoute.junction[1]})`}
          />
        </svg>

        {capabilities.map((capability, index) => (
          <div
            key={capability.name}
            className={styles.capabilityTerritory}
            data-active={activeIndex === index}
            data-capability-index={index}
          >
            <button
              id={`capability-${index}-trigger`}
              type="button"
              aria-pressed={activeIndex === index}
              aria-expanded={activeIndex === index}
              aria-controls="capability-detail"
              onClick={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <strong>{capability.name}</strong>
              <span className={styles.capabilityCue} aria-hidden="true">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>
          </div>
        ))}

        <div
          id="capability-detail"
          className={styles.capabilityDetail}
          aria-live="polite"
          aria-labelledby={`capability-${activeIndex}-trigger`}
        >
          <div key={activeCapability.name} className={styles.capabilityDetailInner}>
            <p className={styles.capabilityDetailLabel}>
              {activeCapability.name}
            </p>
            <p className={styles.capabilityDescription}>
              {activeCapability.description}
            </p>
            <ul className={styles.capabilityExamples}>
              {activeCapability.examples.map((example) => (
                <li key={example}>{example}</li>
              ))}
            </ul>
            {activeCapability.feasibility ? (
              <p className={styles.capabilityDetailNote}>
                Larger custom engagements begin with a technical feasibility
                review and a clearly defined first release.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
