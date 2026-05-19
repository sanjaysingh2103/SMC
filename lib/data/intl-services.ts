import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  FileSignature,
  GraduationCap,
  Home,
  PenLine,
  Plane,
  ShieldCheck,
  Target,
  Wallet,
} from "lucide-react";

export type IntlServiceSlug =
  | "program-matching"
  | "admissions-support"
  | "sop-coaching"
  | "letters-of-recommendation"
  | "english-test-guidance"
  | "gic-financial-planning"
  | "study-permit-rcic"
  | "pre-departure-support"
  | "post-arrival-support";

export type IntlService = {
  slug: IntlServiceSlug;
  title: string;
  shortDescription: string;
  icon: LucideIcon;
  href: string;
  estimatedDuration: string;
};

export const INTL_SERVICES: IntlService[] = [
  {
    slug: "program-matching",
    title: "Program Matching",
    shortDescription:
      "Shortlists aligned to your grades, budget, career goals, and PGWP-aware program design.",
    icon: Target,
    href: "/international/programs",
    estimatedDuration: "1–2 weeks",
  },
  {
    slug: "admissions-support",
    title: "Admissions Support",
    shortDescription:
      "Document strategy, application portals, deadlines, and follow-ups with institutions.",
    icon: GraduationCap,
    href: "/international/admissions",
    estimatedDuration: "2–4 weeks",
  },
  {
    slug: "sop-coaching",
    title: "SOP Coaching",
    shortDescription:
      "Canadian-style statements that explain fit, progression, and genuine study intent.",
    icon: PenLine,
    href: "/international/sop",
    estimatedDuration: "2–3 weeks",
  },
  {
    slug: "letters-of-recommendation",
    title: "Letters of Recommendation",
    shortDescription:
      "Referee selection, briefing notes, and structure coaching-ethical support without ghostwriting.",
    icon: FileSignature,
    href: "/international/lor",
    estimatedDuration: "1–2 weeks",
  },
  {
    slug: "english-test-guidance",
    title: "English Test Guidance",
    shortDescription:
      "IELTS, TOEFL, PTE, or Duolingo-what your targets accept and how to reach the score you need.",
    icon: BookOpen,
    href: "/international/english-tests",
    estimatedDuration: "Varies",
  },
  {
    slug: "gic-financial-planning",
    title: "GIC & Financial Planning",
    shortDescription:
      "Proof of funds planning including the CAD $22,895 GIC minimum (Sept 1, 2025) and bank workflows.",
    icon: Wallet,
    href: "/international/gic",
    estimatedDuration: "1–2 weeks",
  },
  {
    slug: "study-permit-rcic",
    title: "Study Permit via RCIC",
    shortDescription:
      "Regulated immigration filings are completed by Visa Master Canada, our licensed RCIC partner.",
    icon: ShieldCheck,
    href: "/international/visa",
    estimatedDuration: "8–12 weeks (IRCC processing varies)",
  },
  {
    slug: "pre-departure-support",
    title: "Pre-Departure Support",
    shortDescription:
      "Flights, insurance gaps, packing, banking appointments, and first-week logistics.",
    icon: Plane,
    href: "/international/pre-departure",
    estimatedDuration: "Before departure",
  },
  {
    slug: "post-arrival-support",
    title: "Post-Arrival Support",
    shortDescription:
      "SIN, bank account, phone plan, housing transitions, and campus orientation priorities.",
    icon: Home,
    href: "/international/post-arrival",
    estimatedDuration: "First 2 weeks in Canada",
  },
];
