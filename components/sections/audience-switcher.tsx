"use client";

import { useState } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  DollarSign,
  GraduationCap,
  Home,
  Landmark,
  Mountain,
  PenLine,
  Plane,
  ShieldCheck,
  Target,
  Wallet,
} from "lucide-react";

type Tab = "international" | "canadian";

const intlCards: {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  badge?: string;
}[] = [
  {
    icon: Target,
    title: "Program Matching",
    description:
      "Shortlist 3-5 Canadian colleges and universities fitting your profile, budget, and goals.",
    href: "/international",
  },
  {
    icon: GraduationCap,
    title: "Admissions Support",
    description:
      "Transcripts, references, English tests, SOP, LORs - we prepare and submit.",
    href: "/international/admissions",
  },
  {
    icon: PenLine,
    title: "SOP Coaching",
    description: "Your Statement of Purpose in your voice - no templates.",
    href: "/international/sop",
  },
  {
    icon: Wallet,
    title: "GIC & Proof of Funds",
    description:
      "CAD $22,895 IRCC requirement. Participating banks. Step-by-step.",
    href: "/international/gic",
    badge: "KEY SEO",
  },
  {
    icon: BookOpen,
    title: "English Tests",
    description: "IELTS, TOEFL, PTE, Duolingo - pick the right one, prep smart.",
    href: "/international/english-tests",
  },
  {
    icon: DollarSign,
    title: "Cost of Studying",
    description: "Real 2026 numbers by province, city, and program level.",
    href: "/international/cost",
    badge: "KEY SEO",
  },
  {
    icon: ShieldCheck,
    title: "Study Permit (RCIC)",
    description: "Study permit filing via our licensed RCIC partner.",
    href: "/international/visa",
    badge: "VIA RCIC",
  },
  {
    icon: Plane,
    title: "Pre-Departure",
    description:
      "Checklists, documents, flights, accommodation coordination.",
    href: "/international/pre-departure",
  },
  {
    icon: Home,
    title: "Post-Arrival",
    description:
      "Airport pickup, SIN, bank, housing, health card, phone.",
    href: "/international/post-arrival",
  },
];

const secondaryPills = [
  { label: "Letters of Recommendation", href: "/international/lor" },
  { label: "Financial Planning", href: "/international/financial-planning" },
  { label: "Accommodation", href: "/international/accommodation" },
  { label: "Banking", href: "/international/banking" },
  { label: "Working in Canada", href: "/international/working-in-canada" },
  { label: "PGWP", href: "/international/pgwp" },
  { label: "PR Pathways", href: "/international/pathways-to-pr" },
  { label: "Scholarships", href: "/international/scholarships" },
] as const;

export function AudienceSwitcher() {
  const [tab, setTab] = useState<Tab>("international");

  return (
    <section className="bg-white py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="border-l-4 border-sm-orange pl-3">
          <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">
            OUR SERVICES
          </p>
        </div>
        <h2 className="mt-4 font-extrabold tracking-tight text-4xl text-sm-gray-900 md:text-5xl">
          Who we&apos;re helping today
        </h2>
        <p className="mt-4 max-w-5xl text-justify hyphens-auto text-sm-gray-700">
          Start with international students abroad: Canadian college and university admissions, GIC, and study permits via our RCIC partner. Switch to Canadian students for government financial aid programs like OSAP (Ontario) and StudentAid BC.
        </p>

        <div className="mt-10 tab-container">
          <button
            type="button"
            onClick={() => setTab("international")}
            className={`tab-btn ${tab === "international" ? "active-blue" : ""}`}
          >
            International Students
          </button>
          <button
            type="button"
            onClick={() => setTab("canadian")}
            className={`tab-btn ${tab === "canadian" ? "active-red" : ""}`}
          >
            Canadian Students
          </button>
        </div>

        {tab === "international" ? (
          <>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {intlCards.map((card) => {
                const Icon = card.icon;
                return (
                  <Link
                    key={card.href}
                    href={card.href}
                    className="group rounded-2xl border border-sm-gray-200 bg-white p-7 transition hover:border-sm-teal/40 hover:shadow-lg"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="rounded-lg bg-sm-teal/10 p-2 text-sm-teal">
                        <Icon className="h-6 w-6" aria-hidden />
                      </div>
                      {card.badge ? (
                        <span className="shrink-0 rounded-full bg-sm-orange px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                          {card.badge}
                        </span>
                      ) : null}
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-sm-gray-900">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-sm-gray-600">
                      {card.description}
                    </p>
                    <span className="mt-5 inline-block text-sm font-semibold text-sm-teal-dark group-hover:underline">
                      View guide →
                    </span>
                  </Link>
                );
              })}
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <span className="text-sm font-semibold text-sm-gray-800">
                Also included:
              </span>
              <div className="flex flex-wrap gap-2">
                {secondaryPills.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    className="rounded-full border border-sm-gray-200 bg-sm-off-white px-4 py-1.5 text-xs font-semibold text-sm-gray-700 transition hover:border-sm-teal hover:text-sm-teal-dark"
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              <Link
                href="/domestic/osap"
                className="group rounded-2xl border-2 border-sm-teal/20 bg-white p-8 transition hover:border-sm-teal/50 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="rounded-xl bg-sm-teal/10 p-2.5 text-sm-teal">
                    <Landmark className="h-12 w-12" aria-hidden />
                  </div>
                  <span className="rounded-full bg-sm-gray-900 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                    LIVE
                  </span>
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-widest text-sm-teal-dark">
                  Ontario students
                </p>
                <h3 className="mt-2 font-extrabold text-2xl text-sm-gray-900">
                  OSAP - Ontario Student Assistance Program
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-sm-gray-700">
                  Government financial aid for eligible Ontario residents. Full guide to OSAP - applications, eligibility, 2026 changes, and 24 FAQs. We&apos;ve helped 2,000+ Ontario students navigate the process.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-sm-gray-800">
                  <li>✓ Government grants + loans (eligibility-based)</li>
                  <li>✓ Full applications + annual reviews</li>
                  <li>✓ Appeals for rejected assessments</li>
                  <li>✓ Free guidance for Ontario students</li>
                </ul>
                <span className="mt-8 inline-block border-b-2 border-sm-teal font-bold text-sm-teal-dark group-hover:opacity-80">
                  Preview OSAP →
                </span>
              </Link>

              <Link
                href="/domestic/bc-aid"
                className="group rounded-2xl border-2 border-sm-orange/20 bg-white p-8 transition hover:border-sm-orange/50 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="rounded-xl bg-sm-orange/10 p-2.5 text-sm-orange">
                    <Mountain className="h-12 w-12" aria-hidden />
                  </div>
                  <span className="rounded-full bg-sm-gray-900 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                    Coming soon
                  </span>
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-widest text-sm-orange-dark">
                  BC students
                </p>
                <h3 className="mt-2 font-extrabold text-2xl text-sm-gray-900">
                  StudentAid BC
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-sm-gray-700">
                  British Columbia&apos;s provincial aid program. We&apos;re
                  bringing the same free, end-to-end model from our OSAP work to BC
                  students. Full guide launches 2026.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-sm-gray-800">
                  <li>✓ Government grants + loans (eligibility-based)</li>
                  <li>✓ Application preparation + submission</li>
                  <li>✓ Appeals and reviews included</li>
                  <li>✓ Step-by-step guidance</li>
                </ul>
                <span className="mt-8 inline-block border-b-2 border-sm-orange font-bold text-sm-orange-dark group-hover:opacity-80">
                  Preview StudentAid BC →
                </span>
              </Link>
            </div>
            <p className="mt-10 text-center text-sm text-sm-gray-600">
              Don&apos;t see your province? We&apos;re expanding to all provinces
              in 2026. Book a free call.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
