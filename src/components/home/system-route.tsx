"use client";

import { useState } from "react";
import styles from "@/app/home.module.css";

const routeSteps = [
  {
    business: "Customer",
    businessDetail: "Has a question or needs a quote",
    technical: "Browser form",
    technicalDetail: "Structured fields and client-side feedback",
  },
  {
    business: "Website",
    businessDetail: "Guides the request",
    technical: "Next.js",
    technicalDetail: "Responsive public interface",
  },
  {
    business: "Checked + saved",
    businessDetail: "Keeps the information usable",
    technical: "Route Handler",
    technicalDetail: "Validation and protected writes",
  },
  {
    business: "Database",
    businessDetail: "One shared record",
    technical: "PostgreSQL",
    technicalDetail: "Persistent data in Supabase",
  },
  {
    business: "Manager",
    businessDetail: "Gives the team a private workspace",
    technical: "Supabase Auth + RLS",
    technicalDetail: "Authenticated, permissioned access",
  },
  {
    business: "Workflow",
    businessDetail: "Tracks what happened next",
    technical: "Server Actions",
    technicalDetail: "Updates with an audit trigger",
  },
];

type RouteView = "business" | "technical";

export function SystemRoute() {
  const [view, setView] = useState<RouteView>("business");

  return (
    <section className={styles.systemField} aria-labelledby="system-title">
      <div className={styles.systemIntro}>
        <div>
          <p className={styles.systemKicker}>System</p>
          <h2 id="system-title" className={styles.systemTitle}>
            One request. Two sides of the business.
          </h2>
        </div>

        <div className={styles.systemIntroSide}>
          <p>
            What looks simple to the customer becomes useful, protected, and
            traceable for the people doing the work.
          </p>
          <div
            className={styles.viewToggle}
            role="group"
            aria-label="System route view"
          >
            <button
              type="button"
              aria-pressed={view === "business"}
              onClick={() => setView("business")}
            >
              Business view
            </button>
            <button
              type="button"
              aria-pressed={view === "technical"}
              onClick={() => setView("technical")}
            >
              Technical view
            </button>
          </div>
        </div>
      </div>

      <div className={styles.routeStage} data-view={view}>
        <svg
          className={styles.systemThread}
          viewBox="0 0 1500 430"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <marker
              id="system-arrow"
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
            className={styles.systemRoutePath}
            d="M 50 120 L 300 120 C 414 120 446 250 560 250 L 850 250 C 964 250 996 120 1110 120 L 1450 120"
            markerEnd="url(#system-arrow)"
          />
          {[
            [50, 120],
            [300, 120],
            [560, 250],
            [850, 250],
            [1110, 120],
            [1450, 120],
          ].map(([x, y]) => (
            <rect
              key={`${x}-${y}`}
              className={styles.systemJunction}
              x={x - 7}
              y={y - 7}
              width="14"
              height="14"
              transform={`rotate(45 ${x} ${y})`}
            />
          ))}
        </svg>

        <ol aria-live="polite" aria-label={`${view} system route`}>
          {routeSteps.map((step) => (
            <li key={step.business}>
              <h3>
                {view === "business" ? step.business : step.technical}
              </h3>
              <p>
                {view === "business"
                  ? step.businessDetail
                  : step.technicalDetail}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
