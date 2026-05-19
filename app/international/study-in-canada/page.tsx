import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Banknote,
  Ban,
  Building2,
  Clock,
  FileCheck,
  GraduationCap,
  Heart,
  Info,
  LineChart,
  Scale,
  Users,
  Wallet,
} from "lucide-react";
import { buildMetadata } from "@/lib/metadata-helpers";
import { SITE } from "@/lib/site";
import { UNSPLASH } from "@/lib/media/unsplash";
import { INTL_FAQS } from "@/lib/data/intl-faqs";
import { InternationalGuideBanner } from "@/components/sections/international-guide-banner";
import { intlBannerStudyCanada } from "@/lib/data/intl-guide-banner-presets";
import { TrustBar } from "@/components/sections/trust-bar";
import { InPageNav } from "@/components/sections/in-page-nav";
import { ProvinceGrid } from "@/components/sections/province-grid";
import { CountryGrid } from "@/components/sections/country-grid";
import { StepList } from "@/components/sections/step-list";
import { TabbedFaq } from "@/components/sections/tabbed-faq";
import { RcicDisclaimer } from "@/components/sections/rcic-disclaimer";
import { CtaBlock } from "@/components/sections/cta-block";
import { InternationalSectionTitle } from "@/components/sections/international-section-title";
import { cn } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Why Study in Canada (2026 Policy Snapshot)",
  description:
    "Why Canada for international students in 2026: PAL, 437K permit cap, $22,895 GIC, SDS ended Nov 2024, 24hr work week, PGWP rules. Honest Toronto & GTA guidance from Study Master Canada.",
  path: "/international/study-in-canada",
});

const why2026: {
  icon: LucideIcon;
  title: string;
  body: string;
}[] = [
  {
    icon: Building2,
    title: "DLI quality floor + integrity measures",
    body: "Canada’s 2024–2026 settings reward genuine students at designated learning institutions — not fly-by-night operators.",
  },
  {
    icon: Clock,
    title: "Work while you learn (24 hrs/week)",
    body: "Off-campus work is capped at 24 hours per week during scheduled classes since November 2024 — still meaningful for rent and groceries.",
  },
  {
    icon: GraduationCap,
    title: "PGWP bridge to Canadian experience",
    body: "Eligible graduates can obtain an open work permit aligned to program length — up to three years — with PR pathways afterwards.",
  },
  {
    icon: LineChart,
    title: "PR pathways that reward local ties",
    body: "Express Entry, PNPs, and Atlantic programs continue to absorb international graduate talent when labour market needs align.",
  },
  {
    icon: Users,
    title: "Multicultural campuses",
    body: "With nearly one million international students in Canada by end-2024, you will find diaspora communities — without sacrificing English/French practice.",
  },
  {
    icon: Wallet,
    title: "Transparent financial expectations",
    body: "The Sept 1, 2025 GIC minimum (CAD $22,895) gives families a concrete savings target alongside tuition invoices.",
  },
];

const policyKpis = [
  {
    value: "437,000",
    label: "2025 new study permits (national reference)",
  },
  {
    value: "$22,895",
    label: "GIC floor effective Sept 1, 2025",
  },
  {
    value: "Nov 2024",
    label: "SDS discontinued — standard stream only",
  },
  {
    value: "24 h/wk",
    label: "Off-campus cap during class weeks",
  },
] as const;

const policyDetails: {
  icon: LucideIcon;
  title: string;
  body: string;
  tone: "alert" | "neutral";
}[] = [
  {
    icon: Ban,
    tone: "alert",
    title: "SDS discontinued (November 8, 2024)",
    body: "The Student Direct Stream is no longer active. If a consultant still markets SDS, walk away. Today’s pathway is the standard study permit stream with complete financial evidence, PAL compliance where required, and a credible narrative tying your past studies to the Canadian program.",
  },
  {
    icon: LineChart,
    tone: "neutral",
    title: "Study permit caps",
    body: "Canada signalled intake discipline with a 2025 cap of 437,000 new study permits — down from 517,410 in 2024. That national number translates into PAL quotas at the provincial level, which means institutions may pause offers or delay PAL issuance during peak cycles.",
  },
  {
    icon: Banknote,
    tone: "neutral",
    title: "Financial requirement (GIC minimum)",
    body: "Effective September 1, 2025, IRCC’s minimum GIC amount is CAD $22,895. Major banks still charge roughly CAD $200 in setup fees. We recommend a 10% buffer beyond the regulatory line so exchange swings do not strand you below the threshold.",
  },
  {
    icon: Clock,
    tone: "neutral",
    title: "Work hours (24/week)",
    body: "Off-campus work during academic terms is capped at 24 hours per week since November 2024. On-campus rules remain distinct, and scheduled breaks may allow full-time work when your permit conditions permit.",
  },
  {
    icon: Heart,
    tone: "alert",
    title: "Spouse open work permits",
    body: "Eligibility narrowed: most spouse OWPs now align with master’s, doctoral, or select professional programs. Do not assume a college diploma will unlock the same benefit in 2026.",
  },
  {
    icon: Scale,
    tone: "neutral",
    title: "PGWP field-of-study list (college)",
    body: "College graduates must verify program eligibility against IRCC’s evolving field-of-study lists tied to labour market priorities. University streams add CLB 7 language expectations for many post-graduation work permits.",
  },
  {
    icon: FileCheck,
    tone: "neutral",
    title: "PAL requirement (since January 22, 2024)",
    body: "Most new study permit applicants must include a Provincial Attestation Letter from the destination province. Your DLI explains issuance mechanics — without a PAL when required, IRCC will not treat the application as complete.",
  },
];

const studyMistakeCards = [
  {
    title: "Treating 2021 forum advice as current law",
    body: "SDS ended Nov 2024, PAL and caps shifted, and GIC floors changed — verify IRCC and your DLI for every intake.",
  },
  {
    title: "Ranking-first shortlists",
    body: "Officers read program fit and finances — prestige without prerequisites or budget spine weakens files.",
  },
  {
    title: "Ignoring PAL timing",
    body: "Provincial attestation queues can delay offers — deposit deadlines and PAL issuance must be planned together.",
  },
  {
    title: "Undershooting English + retake runway",
    body: "Book tests so one retake still clears your earliest deadline; validity windows must cover permit filing.",
  },
] as const;

const shortSteps = [
  {
    number: "01",
    title: "Counsel & shortlist",
    description: "Program fit, budget, PGWP-aware planning, English test roadmap.",
  },
  {
    number: "02",
    title: "Apply + secure PAL offer",
    description: "Admissions package, deposit strategy, provincial attestation letter alignment.",
  },
  {
    number: "03",
    title: "Proof of funds + GIC",
    description: "Bank workflows for CAD $22,895 GIC and supplemental liquid funds.",
  },
  {
    number: "04",
    title: "Study permit via RCIC",
    description: "Regulated filing through Visa Master Canada with medical/biometrics scheduling.",
  },
];

export default function StudyInCanadaPage() {
  return (
    <main>
      <InternationalGuideBanner
        eyebrow="WHY CANADA"
        title="Canada still rewards prepared students."
        lead="The opportunity is real — but 2026 is not 2021. Policies tightened, caps landed, and officers read files with more skepticism. We help you respond with evidence, not vibes."
        body={
          <>
            Caps, PAL, and GIC floors are checkable facts — if a pitch ignores them, it is not a plan. Next:{" "}
            <Link
              className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
              href="/international/programs"
            >
              Program search
            </Link>
            ,{" "}
            <Link
              className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
              href="/international/visa"
            >
              study permits
            </Link>
            , and{" "}
            <Link
              className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
              href="/international/cost"
            >
              cost planning
            </Link>
            .
          </>
        }
        asideTitle="Why Canada · snapshot"
        metaItems={[
          "Policy-literate counselling · Study Master Canada",
          "Study permits · Visa Master Canada (RCIC) when retained",
          `${SITE.office.city}, ON · ${SITE.hours}`,
          "Verify IRCC instructions for your country and intake",
        ]}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Study in Canada", href: "/international" },
          { label: "Why Canada" },
        ]}
        primaryCta={{
          label: "Book Free 20-Min Call",
          href: SITE.contactFormUrl,
        }}
        secondaryCta={{ label: "International hub", href: "/international" }}
        stats={intlBannerStudyCanada}
        heroImage={UNSPLASH.campusModern}
      />

      <TrustBar />

      <InPageNav
        items={[
          { label: "2026 context", href: "#context-2026", badge: "NEW" },
          { label: "Why 2026", href: "#why-2026" },
          { label: "Policy", href: "#policy" },
          { label: "Mistakes", href: "#mistakes" },
          { label: "Regions", href: "#regions" },
          { label: "Journey", href: "#journey" },
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
              <p className="font-bold text-sm-gray-900">Public numbers you can verify</p>
              <p className="mt-1 text-sm leading-relaxed text-sm-gray-700 md:text-base">
                Year-end 2024 saw roughly <strong>997,000</strong> study permit holders in Canada (IRCC open data /
                public reporting). The federal government referenced a <strong>437,000</strong> cap on new study permits for
                2025 — provinces operationalize intake partly through <strong>PAL</strong> systems. The standard-stream{" "}
                <strong>GIC</strong> minimum rose to <strong>CAD $22,895</strong> effective Sept 1, 2025. Always confirm
                current instructions before you budget or file.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Canada in 2026 — section shell matches OSAP /domestic/osap #what */}
      <section
        id="why-2026"
        className="scroll-mt-28 border-t border-sm-gray-200/80 bg-sm-off-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="The case for Canada"
            title="Why Canada in 2026 — still worth it when you plan honestly"
            description={
              <p className="text-sm-gray-600">
                Quality institutions, work-while-study, and post-graduation routes remain real — next to
                higher scrutiny and tighter intakes. These pillars are what serious applicants build on.
              </p>
            }
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {why2026.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="card-pro grad-border relative flex flex-col p-6 md:p-7"
              >
                <div className="inline-flex w-fit rounded-xl bg-gradient-to-br from-sm-teal/15 to-sm-teal/5 p-2.5 text-sm-teal-dark shadow-sm ring-1 ring-sm-teal/10">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-4 text-lg font-bold leading-snug text-sm-gray-900">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-sm-gray-700">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy */}
      <section id="policy" className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="Policy reality"
            title="2024–2026 changes — read as a system, not bullet trivia"
            description={
              <p className="text-sm-gray-600">
                IRCC, provinces, and DLIs moved together: caps, PAL, funds, work hours, and PGWP rules
                reinforce each other. The strip below is your quick anchor; the cards unpack what to do.
              </p>
            }
          />

          <div className="kpi-strip mt-10 w-full p-5 md:mt-12 md:p-8">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
              {policyKpis.map((k) => (
                <div key={k.label} className="kpi-item p-4 text-center md:p-5">
                  <p className="text-xl font-extrabold tracking-tight text-sm-gray-900 md:text-2xl">
                    {k.value}
                  </p>
                  <p className="mt-2 text-[11px] font-semibold uppercase leading-snug tracking-wide text-sm-gray-500 md:text-xs">
                    {k.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {policyDetails.map(({ icon: Icon, title, body, tone }) => (
              <div
                key={title}
                className={cn(
                  "relative overflow-hidden rounded-2xl border border-sm-gray-100 bg-sm-off-white/80 p-6 shadow-sm backdrop-blur-sm md:p-7",
                  "border-l-[5px]",
                  tone === "alert" ? "border-l-sm-orange" : "border-l-sm-teal-dark",
                )}
              >
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-white to-transparent opacity-90" />
                <div className="relative flex gap-4">
                  <span
                    className={cn(
                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl shadow-sm ring-1 ring-black/5",
                      tone === "alert"
                        ? "bg-sm-orange/15 text-sm-orange-dark"
                        : "bg-sm-teal/10 text-sm-teal-dark",
                    )}
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-bold text-sm-gray-900 md:text-lg">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">{body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative mt-10 w-full overflow-hidden rounded-2xl border border-sm-teal/20 bg-gradient-to-br from-sm-teal/5 via-white to-sm-orange/5 p-6 shadow-[0_12px_40px_-12px_rgba(30,90,165,0.2)] md:p-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sm-teal/10 via-transparent to-transparent" />
            <p className="relative text-sm font-medium text-sm-gray-800 md:text-base">
              Need numbers for your family meeting? Start with our{" "}
              <Link className="font-bold text-sm-teal-dark underline underline-offset-2" href="/international/cost">
                cost guide
              </Link>{" "}
              and{" "}
              <Link className="font-bold text-sm-orange-dark underline underline-offset-2" href="/tools/cost-calculator">
                first-year cost calculator
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Regions */}
      <div id="regions" className="scroll-mt-28">
        <ProvinceGrid />
        <CountryGrid />
      </div>

      {/* Journey */}
      <div id="journey" className="scroll-mt-28">
        <StepList
          eyebrow="JOURNEY"
          title="Short version of the journey"
          subtitle="Every file is unique, but strong cases share the same spine."
          steps={shortSteps}
          sectionClassName="section-pro section-pro-bg-stripe border-t border-sm-gray-200/80"
          columns={4}
        />
      </div>

      <section
        id="mistakes"
        className="scroll-mt-28 border-t border-sm-gray-200/80 bg-sm-off-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="PITFALLS"
            title="Planning mistakes we see in 2026 intakes"
            description={<p>Fix these before deposits and visa fees lock you in.</p>}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {studyMistakeCards.map((m) => (
              <div key={m.title} className="rounded-2xl border border-sm-gray-100 bg-white p-6 shadow-sm">
                <p className="font-bold text-sm-gray-900">{m.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <div
        id="faqs"
        className="scroll-mt-28 border-t border-sm-gray-200 bg-gradient-to-b from-white via-sm-off-white/50 to-white"
      >
        <TabbedFaq
          sectionPaddingClassName="py-14 md:py-16"
          title="Questions we hear daily"
          subtitle="Straight answers before you commit time and deposit money."
          tabs={[
            {
              id: "basics",
              label: "Basics",
              faqs: [INTL_FAQS[3], INTL_FAQS[2], INTL_FAQS[18]],
            },
            {
              id: "costs",
              label: "Costs",
              faqs: [INTL_FAQS[0], INTL_FAQS[1], INTL_FAQS[7]],
            },
            {
              id: "choices",
              label: "College vs uni",
              faqs: [INTL_FAQS[4], INTL_FAQS[12]],
            },
            {
              id: "timing",
              label: "Timing",
              faqs: [INTL_FAQS[5], INTL_FAQS[14]],
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
