import {
  BUDGET_OPTIONS,
  INQUIRY_LIMITS,
  PROJECT_TYPES,
  TIMING_OPTIONS,
  type BudgetOption,
  type InquiryFieldErrors,
  type ProjectInquiry,
  type ProjectType,
  type TimingOption,
} from "@/lib/project-inquiry-schema";

type ValidationResult =
  | { success: true; data: ProjectInquiry }
  | { success: false; errors: InquiryFieldErrors; isBot: boolean };

function getString(input: Record<string, unknown>, key: string) {
  const value = input[key];
  return typeof value === "string" ? value.trim() : "";
}

function getSingleLine(input: Record<string, unknown>, key: string) {
  return getString(input, key).replace(/\s+/g, " ");
}

function exceeds(value: string, maximum: number) {
  return value.length > maximum;
}

export function validateProjectInquiry(input: unknown): ValidationResult {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return {
      success: false,
      errors: { form: "Please submit the inquiry form again." },
      isBot: false,
    };
  }

  const raw = input as Record<string, unknown>;
  const website = getString(raw, "website");

  if (website) {
    return {
      success: false,
      errors: { form: "We could not process this inquiry." },
      isBot: true,
    };
  }

  const name = getSingleLine(raw, "name");
  const email = getSingleLine(raw, "email").toLowerCase();
  const organization = getSingleLine(raw, "organization");
  const projectType = getString(raw, "projectType");
  const description = getString(raw, "description");
  const currentSetup = getString(raw, "currentSetup");
  const budget = getString(raw, "budget");
  const timing = getString(raw, "timing");
  const additionalContext = getString(raw, "additionalContext");
  const errors: InquiryFieldErrors = {};

  if (!name) {
    errors.name = "Please tell us your name.";
  } else if (exceeds(name, INQUIRY_LIMITS.name)) {
    errors.name = `Please keep your name under ${INQUIRY_LIMITS.name} characters.`;
  }

  if (!email) {
    errors.email = "Please enter your email address.";
  } else if (exceeds(email, INQUIRY_LIMITS.email)) {
    errors.email = `Please keep your email under ${INQUIRY_LIMITS.email} characters.`;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (exceeds(organization, INQUIRY_LIMITS.organization)) {
    errors.organization = `Please keep this under ${INQUIRY_LIMITS.organization} characters.`;
  }

  if (!PROJECT_TYPES.includes(projectType as ProjectType)) {
    errors.projectType = "Please choose the option that fits best.";
  }

  if (!description) {
    errors.description = "Please tell us what you are trying to build or improve.";
  } else if (exceeds(description, INQUIRY_LIMITS.description)) {
    errors.description = `Please keep this under ${INQUIRY_LIMITS.description} characters.`;
  }

  if (exceeds(currentSetup, INQUIRY_LIMITS.currentSetup)) {
    errors.currentSetup = `Please keep this under ${INQUIRY_LIMITS.currentSetup} characters.`;
  }

  if (!BUDGET_OPTIONS.includes(budget as BudgetOption)) {
    errors.budget = "Please choose an approximate budget.";
  }

  if (!TIMING_OPTIONS.includes(timing as TimingOption)) {
    errors.timing = "Please choose the timing that fits best.";
  }

  if (exceeds(additionalContext, INQUIRY_LIMITS.additionalContext)) {
    errors.additionalContext = `Please keep this under ${INQUIRY_LIMITS.additionalContext} characters.`;
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors, isBot: false };
  }

  return {
    success: true,
    data: {
      name,
      email,
      organization,
      projectType: projectType as ProjectType,
      description,
      currentSetup,
      budget: budget as BudgetOption,
      timing: timing as TimingOption,
      additionalContext,
    },
  };
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[character] ?? character,
  );
}

function displayValue(value: string) {
  return value || "Not provided";
}

function htmlValue(value: string) {
  return escapeHtml(displayValue(value)).replace(/\n/g, "<br />");
}

export function buildProjectInquiryEmail(inquiry: ProjectInquiry) {
  const fields = [
    ["Name", inquiry.name],
    ["Email", inquiry.email],
    ["Organization", inquiry.organization],
    ["Project type", inquiry.projectType],
    ["Description", inquiry.description],
    ["Current setup", inquiry.currentSetup],
    ["Budget", inquiry.budget],
    ["Timing", inquiry.timing],
    ["Additional context", inquiry.additionalContext],
  ] as const;

  const subject = `New Emmivale project inquiry — ${inquiry.name}`;
  const text = [
    "New Emmivale project inquiry",
    "",
    ...fields.flatMap(([label, value]) => [
      label,
      displayValue(value),
      "",
    ]),
  ].join("\n");

  const htmlFields = fields
    .map(
      ([label, value]) => `
        <tr>
          <th style="padding:16px 20px 6px;text-align:left;font-family:Arial,sans-serif;font-size:12px;line-height:1.4;text-transform:uppercase;color:#66745f;border-top:1px solid #d8d2c7;">${label}</th>
        </tr>
        <tr>
          <td style="padding:0 20px 18px;font-family:Arial,sans-serif;font-size:16px;line-height:1.6;color:#171a18;">${htmlValue(value)}</td>
        </tr>`,
    )
    .join("");

  const html = `<!doctype html>
<html lang="en">
  <body style="margin:0;padding:0;background:#f4f0e8;color:#171a18;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4f0e8;">
      <tr>
        <td style="padding:32px 12px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:680px;margin:0 auto;background:#fffaf2;border-collapse:collapse;">
            <tr>
              <td style="padding:28px 20px 24px;font-family:Georgia,serif;font-size:30px;line-height:1.2;color:#171a18;">New project inquiry</td>
            </tr>
            ${htmlFields}
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  return { subject, text, html };
}
