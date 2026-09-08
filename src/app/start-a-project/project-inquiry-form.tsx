"use client";

import Link from "next/link";
import { useRef, useState, type FormEvent } from "react";
import {
  BUDGET_OPTIONS,
  INQUIRY_LIMITS,
  PROJECT_TYPES,
  TIMING_OPTIONS,
  type InquiryField,
  type InquiryFieldErrors,
} from "@/lib/project-inquiry-schema";
import styles from "./start-a-project.module.css";

type FormStatus = "idle" | "submitting" | "invalid" | "error" | "success";

type InquiryResponse = {
  ok?: boolean;
  message?: string;
  errors?: InquiryFieldErrors;
};

const fieldOrder: InquiryField[] = [
  "name",
  "email",
  "organization",
  "projectType",
  "description",
  "currentSetup",
  "budget",
  "timing",
  "additionalContext",
];

function describedBy(
  field: InquiryField,
  errors: InquiryFieldErrors,
  hintId?: string,
) {
  const ids = [hintId, errors[field] ? `${field}-error` : undefined].filter(
    Boolean,
  );
  return ids.length > 0 ? ids.join(" ") : undefined;
}

function FieldError({
  field,
  errors,
}: {
  field: InquiryField;
  errors: InquiryFieldErrors;
}) {
  if (!errors[field]) {
    return null;
  }

  return (
    <p id={`${field}-error`} className={styles.fieldError}>
      {errors[field]}
    </p>
  );
}

export function ProjectInquiryForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<InquiryFieldErrors>({});
  const formRef = useRef<HTMLFormElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const submissionLock = useRef(false);

  function focusFirstError(nextErrors: InquiryFieldErrors) {
    const firstField = fieldOrder.find((field) => nextErrors[field]);

    requestAnimationFrame(() => {
      if (firstField) {
        formRef.current
          ?.querySelector<HTMLElement>(`[name="${firstField}"]`)
          ?.focus();
        return;
      }

      messageRef.current?.focus();
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submissionLock.current) {
      return;
    }

    submissionLock.current = true;
    setStatus("submitting");
    setErrors({});

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch("/api/project-inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json().catch(() => ({}))) as InquiryResponse;

      if (response.ok && result.ok) {
        form.reset();
        setStatus("success");
        requestAnimationFrame(() => successRef.current?.focus());
        return;
      }

      if (result.errors && Object.keys(result.errors).length > 0) {
        setErrors(result.errors);
        setStatus("invalid");
        focusFirstError(result.errors);
        return;
      }

      setStatus("error");
      requestAnimationFrame(() => messageRef.current?.focus());
    } catch {
      setStatus("error");
      requestAnimationFrame(() => messageRef.current?.focus());
    } finally {
      submissionLock.current = false;
    }
  }

  if (status === "success") {
    return (
      <div
        ref={successRef}
        className={styles.successState}
        tabIndex={-1}
        aria-labelledby="inquiry-success-title"
      >
        <div className={styles.successThread} aria-hidden="true">
          <span />
          <i />
          <span />
        </div>
        <p className={styles.formEyebrow}>Inquiry sent</p>
        <h2 id="inquiry-success-title">We got it.</h2>
        <p>Thanks for telling us what you&apos;re working on.</p>
        <p>We&apos;ll review what you sent and follow up by email.</p>
        <Link href="/work" className={styles.returnLink}>
          Back to Work <span aria-hidden="true">→</span>
        </Link>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      className={styles.inquiryForm}
      onSubmit={handleSubmit}
      noValidate
      aria-busy={status === "submitting"}
    >
      <div className={styles.formIntroduction}>
        <p className={styles.formEyebrow}>Project inquiry</p>
        <h2>A few useful details.</h2>
        <p>
          Share what you know. Choosing &ldquo;Not sure yet&rdquo; is completely
          valid.
        </p>
      </div>

      {status === "invalid" ? (
        <div
          ref={messageRef}
          className={styles.formMessage}
          role="alert"
          tabIndex={-1}
        >
          Please check the highlighted fields and try again.
        </div>
      ) : null}

      <fieldset className={styles.formSection}>
        <legend>You</legend>
        <p className={styles.sectionPrompt}>How can we reach you?</p>
        <div className={styles.contactGrid}>
          <div className={styles.fieldGroup}>
            <label htmlFor="name">
              Name <span aria-hidden="true">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              maxLength={INQUIRY_LIMITS.name}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={describedBy("name", errors)}
              required
            />
            <FieldError field="name" errors={errors} />
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="email">
              Email <span aria-hidden="true">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              maxLength={INQUIRY_LIMITS.email}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={describedBy("email", errors)}
              required
            />
            <FieldError field="email" errors={errors} />
          </div>

          <div className={`${styles.fieldGroup} ${styles.organizationField}`}>
            <label htmlFor="organization">
              Business / organization <span>Optional</span>
            </label>
            <input
              id="organization"
              name="organization"
              type="text"
              autoComplete="organization"
              maxLength={INQUIRY_LIMITS.organization}
              aria-invalid={Boolean(errors.organization)}
              aria-describedby={describedBy("organization", errors)}
            />
            <FieldError field="organization" errors={errors} />
          </div>
        </div>
      </fieldset>

      <fieldset
        className={styles.formSection}
        aria-describedby={describedBy(
          "projectType",
          errors,
          "projectType-hint",
        )}
      >
        <legend>What you need</legend>
        <p className={styles.sectionPrompt}>
          What are you looking for? <span aria-hidden="true">*</span>
        </p>
        <p id="projectType-hint" className={styles.fieldHint}>
          Pick the closest fit. It does not need to be exact.
        </p>
        <div
          className={styles.projectOptions}
          data-invalid={errors.projectType ? "true" : undefined}
        >
          {PROJECT_TYPES.map((projectType) => (
            <label key={projectType} className={styles.projectOption}>
              <input
                type="radio"
                name="projectType"
                value={projectType}
                required
              />
              <span className={styles.radioLabel}>{projectType}</span>
              <span className={styles.selectionStatus} aria-hidden="true" />
            </label>
          ))}
        </div>
        <FieldError field="projectType" errors={errors} />
      </fieldset>

      <fieldset className={styles.formSection}>
        <legend>Main question</legend>
        <p className={styles.sectionPrompt}>
          What are you trying to build or improve?{" "}
          <span aria-hidden="true">*</span>
        </p>
        <div className={styles.fieldGroup}>
          <label htmlFor="description" className="sr-only">
            What are you trying to build or improve?
          </label>
          <textarea
            id="description"
            name="description"
            rows={8}
            maxLength={INQUIRY_LIMITS.description}
            aria-invalid={Boolean(errors.description)}
            aria-describedby={describedBy(
              "description",
              errors,
              "description-hint description-safety",
            )}
            required
          />
          <p id="description-hint" className={styles.fieldHint}>
            Describe the problem, the idea, or how the current process works.
            Plain language is perfect.
          </p>
          <p id="description-safety" className={styles.safetyNote}>
            <span aria-hidden="true" />
            Please do not include passwords, private customer information, API
            keys, or other sensitive credentials.
          </p>
          <FieldError field="description" errors={errors} />
        </div>
      </fieldset>

      <fieldset className={styles.formSection}>
        <legend>What exists now</legend>
        <p className={styles.sectionPrompt}>Current website or system</p>
        <div className={styles.fieldGroup}>
          <label htmlFor="currentSetup" className="sr-only">
            Current website or system
          </label>
          <textarea
            id="currentSetup"
            name="currentSetup"
            rows={3}
            maxLength={INQUIRY_LIMITS.currentSetup}
            aria-invalid={Boolean(errors.currentSetup)}
            aria-describedby={describedBy(
              "currentSetup",
              errors,
              "currentSetup-hint",
            )}
          />
          <p id="currentSetup-hint" className={styles.fieldHint}>
            Optional. Add a URL or a short description of what you use today.
          </p>
          <FieldError field="currentSetup" errors={errors} />
        </div>
      </fieldset>

      <div className={styles.decisionPair}>
        <fieldset className={styles.formSection}>
          <legend>Budget</legend>
          <div className={styles.fieldGroup}>
            <label htmlFor="budget">
              Approximate budget <span aria-hidden="true">*</span>
            </label>
            <select
              id="budget"
              name="budget"
              defaultValue=""
              aria-invalid={Boolean(errors.budget)}
              aria-describedby={describedBy(
                "budget",
                errors,
                "budget-hint",
              )}
              required
            >
              <option value="" disabled>
                Choose a range
              </option>
              {BUDGET_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <p id="budget-hint" className={styles.fieldHint}>
              A range helps with fit and planning. It does not guarantee a quote.
            </p>
            <FieldError field="budget" errors={errors} />
          </div>
        </fieldset>

        <fieldset className={styles.formSection}>
          <legend>Timing</legend>
          <div className={styles.fieldGroup}>
            <label htmlFor="timing">
              Desired timing <span aria-hidden="true">*</span>
            </label>
            <select
              id="timing"
              name="timing"
              defaultValue=""
              aria-invalid={Boolean(errors.timing)}
              aria-describedby={describedBy("timing", errors)}
              required
            >
              <option value="" disabled>
                Choose timing
              </option>
              {TIMING_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <FieldError field="timing" errors={errors} />
          </div>
        </fieldset>
      </div>

      <fieldset className={styles.formSection}>
        <legend>Anything else</legend>
        <p className={styles.sectionPrompt}>Anything else we should know?</p>
        <div className={styles.fieldGroup}>
          <label htmlFor="additionalContext" className="sr-only">
            Anything else we should know?
          </label>
          <textarea
            id="additionalContext"
            name="additionalContext"
            rows={5}
            maxLength={INQUIRY_LIMITS.additionalContext}
            aria-invalid={Boolean(errors.additionalContext)}
            aria-describedby={describedBy(
              "additionalContext",
              errors,
              "additionalContext-hint",
            )}
          />
          <p id="additionalContext-hint" className={styles.fieldHint}>
            Optional. Add useful context that did not fit above.
          </p>
          <FieldError field="additionalContext" errors={errors} />
        </div>
      </fieldset>

      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="website">Leave this field blank</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className={styles.submitSection}>
        <div>
          <p className={styles.formEyebrow}>Ready when you are</p>
          <p>We&apos;ll use these details to understand the conversation.</p>
        </div>
        <button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending inquiry..." : "Send inquiry"}
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <p className={styles.pendingMessage} aria-live="polite">
        {status === "submitting" ? "Your inquiry is being sent." : ""}
      </p>

      {status === "error" ? (
        <div
          ref={messageRef}
          className={styles.deliveryError}
          role="alert"
          tabIndex={-1}
        >
          We couldn&apos;t send your inquiry just now. Please try again.
        </div>
      ) : null}
    </form>
  );
}
