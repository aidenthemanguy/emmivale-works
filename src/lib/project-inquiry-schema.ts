export const PROJECT_TYPES = [
  "Website",
  "Custom software",
  "Website + software",
  "Business system",
  "Existing system improvement",
  "Not sure yet",
  "Other",
] as const;

export const BUDGET_OPTIONS = [
  "Under $500",
  "$500–$1,500",
  "$1,500–$3,000",
  "$3,000–$7,500",
  "$7,500+",
  "Not sure yet",
] as const;

export const TIMING_OPTIONS = [
  "As soon as practical",
  "2–4 weeks",
  "1–2 months",
  "2+ months",
  "Flexible / not sure",
] as const;

export const INQUIRY_LIMITS = {
  name: 100,
  email: 254,
  organization: 150,
  description: 5000,
  currentSetup: 500,
  additionalContext: 3000,
} as const;

export type ProjectType = (typeof PROJECT_TYPES)[number];
export type BudgetOption = (typeof BUDGET_OPTIONS)[number];
export type TimingOption = (typeof TIMING_OPTIONS)[number];

export type ProjectInquiry = {
  name: string;
  email: string;
  organization: string;
  projectType: ProjectType;
  description: string;
  currentSetup: string;
  budget: BudgetOption;
  timing: TimingOption;
  additionalContext: string;
};

export type InquiryField =
  | keyof ProjectInquiry
  | "website"
  | "form";

export type InquiryFieldErrors = Partial<Record<InquiryField, string>>;
