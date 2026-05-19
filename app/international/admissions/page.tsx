import Link from "next/link";
import { buildMetadata } from "@/lib/metadata-helpers";
import { SITE } from "@/lib/site";
import { UNSPLASH } from "@/lib/media/unsplash";
import { INTL_FAQS } from "@/lib/data/intl-faqs";
import { intlBannerAdmissions } from "@/lib/data/intl-guide-banner-presets";
import { InternationalGuideBanner } from "@/components/sections/international-guide-banner";
import { TrustBar } from "@/components/sections/trust-bar";
import { InPageNav } from "@/components/sections/in-page-nav";
import { StepList } from "@/components/sections/step-list";
import { TabbedFaq } from "@/components/sections/tabbed-faq";
import { RcicDisclaimer } from "@/components/sections/rcic-disclaimer";
import { CtaBlock } from "@/components/sections/cta-block";
import { InternationalSectionTitle } from "@/components/sections/international-section-title";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  CalendarClock,
  ClipboardCheck,
  FolderOpen,
  GraduationCap,
  Info,
  Target,
  UsersRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const metadata = buildMetadata({
  title: "International Admissions Support for Canadian DLIs | Study Master Canada",
  description:
    "Toronto & GTA admissions coaching for designated learning institutions: program shortlists, transcripts & credential evaluation (WES/ICAS), English tests, portals, LOR & SOP coaching. PAL-aware offer timing; study permits filed through licensed RCIC partner Visa Master Canada. Walk-in Brampton office.",
  path: "/international/admissions",
});

const handleCards: {
  title: string;
  body: string;
  icon: LucideIcon;
  href?: string;
  linkLabel?: string;
}[] = [
  {
    icon: Target,
    title: "Program shortlist",
    body: "Reach / match / safety mix grounded in grades, tests, and PGWP-aware program design — not ranking hype alone.",
    href: "/international/programs",
    linkLabel: "Search programs",
  },
  {
    icon: FolderOpen,
    title: "Document prep",
    body: "Translation, notarization, attestation, and naming consistency across IDs so admissions and IRCC see one story.",
  },
  {
    icon: GraduationCap,
    title: "Transcript strategy",
    body: "WES/ICAS or institution-specific evaluations planned early so deadlines are not blown by courier lag.",
  },
  {
    icon: UsersRound,
    title: "LOR coordination",
    body: "Referee briefing packages that respect academic integrity — structure and timelines, not ghostwriting.",
    href: "/international/lor",
    linkLabel: "LOR coaching",
  },
  {
    icon: BookOpen,
    title: "English test roadmap",
    body: "IELTS, TOEFL, PTE, or Duolingo mapped to each institution’s acceptance list, with retake buffer baked in.",
    href: "/international/english-tests",
    linkLabel: "English tests guide",
  },
  {
    icon: ClipboardCheck,
    title: "Submission hygiene",
    body: "Portals tracked, payments receipted, and follow-ups logged until decisions land — nothing expires silently.",
  },
];

const challenges = [
  {
    title: "Last-minute test dates",
    problem: "IELTS slots vanish before September.",
    fix: "We back-schedule from your earliest deadline, including time for a single retake.",
  },
  {
    title: "Transcript mismatches",
    problem: "Names differ between passport, national ID, and school records.",
    fix: "Affidavit or notarized linkage plus proactive notes to admissions.",
  },
  {
    title: "Weak program fit narrative",
    problem: "Generic SOPs that could apply to any country.",
    fix: "Canadian-specific outcomes: courses, faculty, co-op, and location ties — see our SOP coaching when you need deeper support.",
  },
  {
    title: "Deposit paralysis",
    problem: "Multiple offers with conflicting PAL timelines.",
    fix: "Scenario table comparing net tuition, scholarships, rent, and visa risk before you lock a non-refundable deposit.",
  },
];

const checklist = [
  "Passport biodata page",
  "Academic transcripts + grading legends",
  "Degree certificates / provisional statements",
  "English proficiency official score report",
  "Resume / CV (especially for course-based professional programs)",
  "Portfolio or writing sample (design/creative fields)",
  "Application fee payment receipts",
  "Referee contact list with institutional emails",
];

const admissionsJourneySteps = [
  {
    number: "01",
    title: "Counsel + shortlist",
    description:
      "Budget, PGWP-aware program choice, English test booking, and document inventory — planned backwards from your intake.",
  },
  {
    number: "02",
    title: "Applications live",
    description:
      "Portals, transcripts, evaluations, referees, and SOP/LOR packages aligned so the same narrative reaches DLIs and later IRCC.",
  },
  {
    number: "03",
    title: "Offers + PAL path",
    description:
      "Compare net costs and scholarships; confirm how your DLI issues a Provincial Attestation Letter before you pay deposits.",
  },
  {
    number: "04",
    title: "Permit handoff",
    description:
      "Proof-of-funds story matches admissions choices; Visa Master Canada (RCIC) files study permits when you retain them — same GTA building.",
  },
];

export default function AdmissionsPage() {
  return (
    <main>
      <InternationalGuideBanner
        eyebrow="ADMISSIONS"
        title="Admissions support that respects visa reality."
        lead="We do not spray generic applications. We build defensible files — your study permit officer will read the same story later."
        body={
          <>
            PAL-backed offers, deposit timing, English score validity windows, and portal receipts must align before IRCC
            sees your file. See how policy fits together in{" "}
            <Link
              className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
              href="/international/study-in-canada"
            >
              Why Canada — 2026 snapshot
            </Link>
            , then the{" "}
            <Link
              className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
              href="/international/visa"
            >
              study permit guide
            </Link>{" "}
            for PAL, GIC floors, and RCIC filing.
          </>
        }
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Study in Canada", href: "/international" },
          { label: "Admissions" },
        ]}
        primaryCta={{
          label: "Book Free 20-Min Call",
          href: SITE.contactFormUrl,
        }}
        secondaryCta={{ label: "SOP coaching", href: "/international/sop" }}
        stats={intlBannerAdmissions}
        heroImage={UNSPLASH.counsellingDesk}
        asideTitle="Admissions · snapshot"
        metaItems={[
          "DLI-focused applications · Study Master Canada",
          "Study permits · Visa Master Canada (RCIC) when retained",
          `${SITE.office.city}, ON walk-in`,
          SITE.hours,
        ]}
      />

      <TrustBar />

      <InPageNav
        items={[
          { label: "2026 context", href: "#context-2026", badge: "NEW" },
          { label: "What we handle", href: "#services" },
          { label: "Bridge to permit", href: "#bridge" },
          { label: "Documents", href: "#documents" },
          { label: "Challenges", href: "#challenges" },
          { label: "Journey", href: "#journey" },
          { label: "Timeline", href: "#timeline" },
          { label: "FAQs", href: "#faqs" },
        ]}
        cta={{ label: "Book call", href: SITE.contactFormUrl }}
      />

      <section
        id="context-2026"
        className="scroll-mt-28 border-t border-sm-gray-200/80 bg-sm-off-white py-8 md:py-10"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-col gap-4 rounded-2xl border border-sm-teal/25 bg-gradient-to-r from-sm-teal/10 via-white to-sm-off-white/50 p-5 shadow-sm md:flex-row md:items-start md:gap-5 md:p-6">
            <Info className="h-8 w-8 shrink-0 text-sm-teal-dark" aria-hidden />
            <div>
              <p className="font-bold text-sm-gray-900">Why admissions and immigration are one thread in 2026</p>
              <p className="mt-1 text-sm leading-relaxed text-sm-gray-700 md:text-base">
                Provincial PAL quotas still gate many study permits;{" "}
                <strong>deposit deadlines</strong>, <strong>English score validity</strong>, and{" "}
                <strong>DLI program eligibility</strong> (including PGWP field-of-study rules for college routes) can
                invalidate an otherwise strong file. We plan backwards from your tightest constraint — offers first,
                permit narrative second — so you do not pay large deposits on programs you cannot defend to an officer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="scroll-mt-28 border-t border-sm-gray-200/80 bg-sm-off-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="SCOPE"
            title="What we handle"
            description={
              <p className="text-sm-gray-600">
                Six pillars we run with Brampton-based accountability — cross-linked to deeper guides where you need them.
              </p>
            }
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {handleCards.map(({ icon: Icon, title, body, href, linkLabel }) => (
              <div key={title} className="card-pro grad-border relative flex flex-col p-6 md:p-7">
                <div className="inline-flex w-fit rounded-xl bg-gradient-to-br from-sm-teal/15 to-sm-teal/5 p-2.5 text-sm-teal-dark shadow-sm ring-1 ring-sm-teal/10">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-4 text-lg font-bold leading-snug text-sm-gray-900">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-sm-gray-700">{body}</p>
                {href ? (
                  <Link
                    className={cn("mt-4 text-sm font-semibold text-sm-teal-dark underline underline-offset-2")}
                    href={href}
                  >
                    {linkLabel ?? "Learn more"}
                  </Link>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="bridge" className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="THE SPLIT"
            title="Admissions coaching vs regulated immigration"
            description={
              <p className="text-sm-gray-600">
                Same partnership model as our{" "}
                <Link className="font-semibold text-sm-teal-dark underline" href="/international/visa">
                  study permit page
                </Link>
                : education evidence on our side, regulated filings on theirs when you retain an RCIC.
              </p>
            }
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
            <div className="rounded-2xl border border-sm-gray-200 bg-sm-off-white/80 p-6 shadow-sm md:p-7">
              <h3 className="text-lg font-bold text-sm-gray-900">Study Master Canada</h3>
              <p className="mt-3 text-sm leading-relaxed text-sm-gray-700 md:text-base">
                Program shortlists, application packages, SOP/LOR coaching, English test sequencing, financial planning
                narratives for family meetings, and document discipline so your study intent matches your transcript.
              </p>
            </div>
            <div className="rounded-2xl border border-sm-gray-200 bg-sm-off-white/80 p-6 shadow-sm md:p-7">
              <h3 className="text-lg font-bold text-sm-gray-900">Visa Master Canada (RCIC)</h3>
              <p className="mt-3 text-sm leading-relaxed text-sm-gray-700 md:text-base">
                Study permit and related immigration forms, strategy when cases are complex, and representation within the
                scope of your retainer — including refusals and regulated advice where applicable.
              </p>
              <Link
                className="mt-4 inline-block text-sm font-semibold text-sm-teal-dark underline underline-offset-2"
                href="/international/visa"
              >
                Read the permit guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="documents" className="scroll-mt-28 border-t border-sm-gray-200/80 bg-sm-off-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="CHECKLIST"
            title="Typical document inventory"
            description={
              <p className="text-sm-gray-600">
                Exact lists vary by DLI and program level; use this as a working inventory with your counsellor. Official
                translations and naming consistency matter as much as grades.
              </p>
            }
          />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {checklist.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-sm-gray-100 bg-white px-4 py-3 text-sm text-sm-gray-800 shadow-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="challenges"
        className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="REAL ISSUES"
            title="Common admissions challenges we solve"
            description={
              <p className="text-sm-gray-600">
                These are the failures we see most often when students rush September intakes — usually fixable with
                calendar discipline and one coherent narrative.
              </p>
            }
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {challenges.map((c) => (
              <div key={c.title} className="rounded-2xl border border-sm-gray-100 bg-sm-off-white/90 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-sm-gray-900">{c.title}</h3>
                <p className="mt-2 text-sm text-sm-gray-700">
                  <span className="font-semibold text-sm-gray-800">Problem:</span> {c.problem}
                </p>
                <p className="mt-2 text-sm text-sm-gray-700">
                  <span className="font-semibold text-sm-gray-800">Fix:</span> {c.fix}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-sm-gray-600">
            Need help with statements? See{" "}
            <Link className="font-semibold text-sm-teal-dark underline" href="/international/sop">
              SOP coaching
            </Link>{" "}
            and{" "}
            <Link className="font-semibold text-sm-teal-dark underline" href="/international/lor">
              LOR support
            </Link>
            .
          </p>
        </div>
      </section>

      <div id="journey" className="scroll-mt-28">
        <StepList
          eyebrow="PROCESS"
          title="Admissions spine — from shortlist to permit-ready"
          subtitle="Every file is unique, but strong applicants share the same sequencing: credible program choice, clean documents, offer discipline, then immigration evidence."
          steps={admissionsJourneySteps}
          sectionClassName="section-pro section-pro-bg-stripe border-t border-sm-gray-200/80"
          columns={4}
        />
      </div>

      <section
        id="timeline"
        className="scroll-mt-28 border-t border-sm-gray-200 bg-sm-dark py-11 text-white md:py-14"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-wrap items-end gap-3">
            <CalendarClock className="h-9 w-9 text-sm-orange-light" aria-hidden />
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-sm-orange-light">Calendar</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">
                Typical 6–8 month runway (September intake)
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-white/75 md:text-base">
                Illustrative only — competitive programs and PAL queues can pull everything earlier. Use a counsellor-led
                calendar for your country and target institutions.
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              {
                label: "Month 0–1",
                body: "Counselling, shortlist, English test booking, document inventory.",
              },
              {
                label: "Month 2–3",
                body: "Applications live, transcripts couriered, referees engaged with clear deadlines.",
              },
              {
                label: "Month 4–5",
                body: "Offers compared, scholarships appealed, PAL pathway confirmed with your DLI.",
              },
              {
                label: "Month 6–8",
                body: "GIC at current IRCC floor (e.g. CAD $22,895 minimum Sept 1, 2025), study permit filed via RCIC partner, biometrics completed.",
              },
            ].map((row) => (
              <div key={row.label} className="rounded-2xl border border-white/15 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-sm-orange">{row.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/80">{row.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-white/65">
            Budget and GIC mechanics:{" "}
            <Link className="font-semibold text-white underline underline-offset-2" href="/international/gic">
              GIC & financial planning
            </Link>
            {" · "}
            <Link className="font-semibold text-white underline underline-offset-2" href="/international/cost">
              Cost of studying in Canada
            </Link>
            .
          </p>
        </div>
      </section>

      <div className="border-t border-sm-gray-200 bg-gradient-to-b from-white to-sm-off-white/40 py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <p className="text-center text-sm leading-relaxed text-sm-gray-700 md:text-base">
            Ready to narrow programs before you apply? Start with{" "}
            <Link className="font-bold text-sm-teal-dark underline underline-offset-2" href="/international/programs">
              program search
            </Link>
            {" · "}
            Proof-of-funds reality check:{" "}
            <Link className="font-bold text-sm-orange-dark underline underline-offset-2" href="/tools/cost-calculator">
              first-year cost calculator
            </Link>
            .
          </p>
        </div>
      </div>

      <div
        id="faqs"
        className="scroll-mt-28 border-t border-sm-gray-200 bg-gradient-to-b from-white via-sm-off-white/50 to-white"
      >
        <TabbedFaq
          sectionPaddingClassName="py-14 md:py-16"
          title="Admissions & pathway questions"
          subtitle="Grounded in how Canadian DLIs and IRCC actually behave — still verify institution and visa instructions for your intake."
          tabs={[
            {
              id: "programs",
              label: "Programs & fit",
              faqs: [INTL_FAQS[16], INTL_FAQS[4], INTL_FAQS[12], INTL_FAQS[11]],
            },
            {
              id: "planning",
              label: "Planning & timing",
              faqs: [INTL_FAQS[14], INTL_FAQS[0]],
            },
            {
              id: "offers-permit",
              label: "Offers → permit",
              faqs: [INTL_FAQS[3], INTL_FAQS[5], INTL_FAQS[17]],
            },
            {
              id: "support",
              label: "Awards & counselling",
              faqs: [INTL_FAQS[18], INTL_FAQS[13]],
            },
          ]}
        />
      </div>

      <section className="border-t border-sm-gray-100 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <RcicDisclaimer />
        </div>
      </section>

      <CtaBlock />
    </main>
  );
}
