import Link from "next/link";
import { buildMetadata } from "@/lib/metadata-helpers";
import { SITE } from "@/lib/site";
import { UNSPLASH } from "@/lib/media/unsplash";
import { INTL_FAQS } from "@/lib/data/intl-faqs";
import { InternationalGuideBanner } from "@/components/sections/international-guide-banner";
import { intlBannerGradStudies } from "@/lib/data/intl-guide-banner-presets";
import { TrustBar } from "@/components/sections/trust-bar";
import { InPageNav } from "@/components/sections/in-page-nav";
import { StepList } from "@/components/sections/step-list";
import { TabbedFaq } from "@/components/sections/tabbed-faq";
import { RcicDisclaimer } from "@/components/sections/rcic-disclaimer";
import { CtaBlock } from "@/components/sections/cta-block";
import { InternationalSectionTitle } from "@/components/sections/international-section-title";
import { Info } from "lucide-react";

export const metadata = buildMetadata({
  title: "Graduate Studies in Canada (Master's & PhD)",
  description:
    "Master's, doctoral, and professional graduate studies in Canada: thesis vs course-based, funding letters, supervisor fit, CLB 7 PGWP notes, spouse OWP policy context. GTA counselling; study permits via Visa Master Canada (RCIC).",
  path: "/international/graduate-studies",
});

const tiles = [
  {
    title: "Master’s length",
    body: "Most coursework master’s run 12–24 months; thesis streams may extend. Read whether co-op is embedded and how it affects permits.",
  },
  {
    title: "Doctoral depth",
    body: "PhD timelines often span four to six years — supervisory fit and funding stability matter more than brochure prestige.",
  },
  {
    title: "Tuition bands",
    body: "STEM and professional programs may exceed CAD $35k annually for internationals — fee tables are faculty-specific.",
  },
  {
    title: "CLB 7 language",
    body: "University-level PGWP filings frequently require CLB 7–style proof where IRCC instructions say so — plan IELTS/PTE validity through filing.",
  },
  {
    title: "Spouse OWP context",
    body: "Policy has narrowed spouse open work permits — master’s, doctoral, and certain professional programs remain the main cohorts where spouses may qualify; verify current IRCC text.",
  },
  {
    title: "Funding mix",
    body: "Combine TA/RA packages, entrance awards, and external scholarships — read offer letters for guaranteed vs conditional dollars.",
  },
] as const;

const fields = [
  "MBA",
  "Data Science",
  "Engineering",
  "Computer Science",
  "Public Health",
  "Education",
  "Environmental Sciences",
  "Architecture",
  "Social Work",
] as const;

const foundationCards = [
  {
    title: "Supervisor fit (thesis routes)",
    body: "Email discipline matters: read recent papers, reference specific methods, and explain why their lab — not generic praise.",
    href: "/international/sop",
    linkLabel: "SOP coaching",
  },
  {
    title: "Credential evaluation",
    body: "WES, ICAS, or institution-specific equivalency for international degrees — plan courier and portal lag before deadlines.",
    href: "/international/admissions",
    linkLabel: "Admissions support",
  },
  {
    title: "Referees + committee culture",
    body: "Academic references should know your research or professional output — committees compare LORs to your statement line by line.",
    href: "/international/lor",
    linkLabel: "LOR coaching",
  },
] as const;

const gradSteps = [
  {
    number: "01",
    title: "Program / supervisor fit",
    description: "For thesis routes, align interests and funding before you pay many application fees.",
  },
  {
    number: "02",
    title: "Credential evaluation",
    description: "Order evaluations early — processing and translation add weeks.",
  },
  {
    number: "03",
    title: "Referees + SOP",
    description: "Canadian-style narrative with honest gap explanations and measurable outcomes.",
  },
  {
    number: "04",
    title: "Offers + funding",
    description: "Compare net tuition after scholarships; parse TA/RA guarantees vs estimates.",
  },
  {
    number: "05",
    title: "PAL + study permit",
    description: "Education documents on our side; Visa Master Canada (RCIC) files permits when retained.",
  },
] as const;

const mistakeCards = [
  {
    title: "Mass-emailing ten professors",
    body: "Generic intros get ignored — fewer, deeper emails beat spam volume.",
  },
  {
    title: "Accepting funding without line-item clarity",
    body: "TA hours and health benefits vary — ask what is guaranteed in writing for year one.",
  },
  {
    title: "Ignoring language validity windows",
    body: "Scores must still be valid when you file PGWP — not only when you started the degree.",
  },
  {
    title: "SOP that reads like undergrad",
    body: "Grad committees expect methods vocabulary and research literacy — upgrade tone and evidence.",
  },
] as const;

export default function GraduateStudiesPage() {
  return (
    <main>
      <InternationalGuideBanner
        eyebrow="GRADUATE STUDIES"
        title="Graduate studies in Canada — depth, funding, and intent."
        lead="Whether you want a thesis lab in Waterloo or a professional master’s in Toronto, committees reward clarity: why this program, why now, and how you fund year two if TA lines shrink."
        body={
          <>
            Expect <strong>CAD $25k–45k+ / year</strong> for many international coursework programs before housing — read
            funding letters line-by-line. Next:{" "}
            <Link
              className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
              href="/international/english-tests"
            >
              English tests
            </Link>
            ,{" "}
            <Link
              className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
              href="/international/scholarships"
            >
              scholarships
            </Link>
            , and{" "}
            <Link
              className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
              href="/international/pgwp"
            >
              PGWP
            </Link>
            .
          </>
        }
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Study in Canada", href: "/international" },
          { label: "Graduate studies" },
        ]}
        primaryCta={{
          label: "Book Free 20-Min Call",
          href: SITE.contactFormUrl,
        }}
        secondaryCta={{ label: "SOP coaching", href: "/international/sop" }}
        stats={intlBannerGradStudies}
        heroImage={UNSPLASH.libraryStudy}
        asideTitle="Grad studies · snapshot"
        metaItems={[
          "Grad admissions & narrative · Study Master Canada",
          "Study permits · Visa Master Canada (RCIC) when retained",
          `${SITE.office.city}, ON · ${SITE.hours}`,
          "Verify faculty funding letters and IRCC instructions",
        ]}
      />

      <TrustBar />

      <InPageNav
        items={[
          { label: "2026 context", href: "#context-2026", badge: "NEW" },
          { label: "Basics", href: "#basics" },
          { label: "Overview", href: "#overview" },
          { label: "2026 facts", href: "#facts" },
          { label: "Fields", href: "#fields" },
          { label: "Journey", href: "#journey" },
          { label: "Mistakes", href: "#mistakes" },
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
              <p className="font-bold text-sm-gray-900">Grad files are evidence-heavy</p>
              <p className="mt-1 text-sm leading-relaxed text-sm-gray-700 md:text-base">
                Committees read for research maturity, funding realism, and alignment with faculty capacity. Immigration
                rules for spouses and post-graduation work permits have tightened outside narrow credential bands — build
                your plan from current IRCC instructions, not older cohort stories.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="basics"
        className="scroll-mt-28 border-t border-sm-gray-200/80 bg-sm-off-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="FOUNDATION"
            title="How we think about Canadian graduate admissions"
            description={
              <p>
                Course-based professional programs emphasize placements and cohort outcomes; thesis programs emphasize
                supervisor fit and publication trajectory. Both require clean credential evaluation and referee discipline.
              </p>
            }
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {foundationCards.map((c) => (
              <div key={c.title} className="card-pro grad-border relative flex flex-col p-6 md:p-7">
                <h3 className="text-lg font-bold leading-snug text-sm-gray-900">{c.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-sm-gray-700">{c.body}</p>
                <Link className="mt-4 text-sm font-semibold text-sm-teal-dark underline underline-offset-2" href={c.href}>
                  {c.linkLabel}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="overview"
        className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl space-y-6 px-6 text-sm leading-relaxed text-sm-gray-700 md:px-10 md:text-base">
          <InternationalSectionTitle
            label="PROGRAM TYPES"
            title="Master’s, doctoral, and professional programs"
          />
          <p>
            Canadian graduate credentials span research-intensive thesis programs, professionally oriented course-based
            master’s, and doctoral training with publication expectations. Admission committees read for academic maturity:
            can you handle seminar pace, methodology courses, and independent work without hand-holding?
          </p>
          <p>
            Financing is seldom fully covered by a single scholarship — successful students stack entrance awards, teaching
            assistantships, graduate research funds, and pragmatic summer work within study permit conditions. We help you
            read offer letters like contracts: what is guaranteed versus conditional?
          </p>
        </div>
      </section>

      <section id="facts" className="scroll-mt-28 border-t border-sm-gray-200/80 bg-sm-off-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="GRAD PLANNING"
            title="Key facts for 2026 planners"
            description={<p>Policy and fees move — confirm on faculty sites and IRCC for your intake.</p>}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {tiles.map((t) => (
              <div key={t.title} className="card-pro grad-border p-6 md:p-7">
                <h3 className="text-lg font-bold text-sm-gray-900">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="fields" className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="EXAMPLES"
            title="Popular graduate fields"
            description={<p>Illustrative — every faculty publishes different prerequisites and quotas.</p>}
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {fields.map((f) => (
              <div key={f} className="card-pro grad-border p-4 text-sm font-semibold text-sm-gray-900 shadow-sm">
                {f}
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-sm-gray-700">
            Compare tests:{" "}
            <Link className="font-semibold text-sm-teal-dark underline" href="/international/english-tests">
              IELTS, TOEFL, PTE, Duolingo
            </Link>
            .
          </p>
        </div>
      </section>

      <div id="journey" className="scroll-mt-28">
        <StepList
          eyebrow="SPINE"
          title="Graduate admissions spine"
          subtitle="Every faculty tweaks steps, but strong files share this backbone."
          steps={gradSteps}
          sectionClassName="section-pro section-pro-bg-stripe border-t border-sm-gray-200/80"
          columns={3}
        />
      </div>

      <section id="mistakes" className="scroll-mt-28 border-t border-sm-gray-200/80 bg-sm-off-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="PITFALLS"
            title="Graduate application mistakes"
            description={<p>Committees see thousands of files — avoid self-inflicted weaknesses.</p>}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {mistakeCards.map((m) => (
              <div key={m.title} className="rounded-2xl border border-sm-gray-100 bg-white p-6 shadow-sm">
                <p className="font-bold text-sm-gray-900">{m.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div
        id="faqs"
        className="scroll-mt-28 border-t border-sm-gray-200 bg-gradient-to-b from-white via-sm-off-white/50 to-white"
      >
        <TabbedFaq
          sectionPaddingClassName="py-14 md:py-16"
          title="Graduate & pathway questions"
          subtitle="Timing, money, and program fit — still verify each faculty and IRCC."
          tabs={[
            {
              id: "fit",
              label: "Programs & transfer",
              faqs: [INTL_FAQS[4], INTL_FAQS[11], INTL_FAQS[12]],
            },
            {
              id: "money",
              label: "Costs & awards",
              faqs: [INTL_FAQS[0], INTL_FAQS[18], INTL_FAQS[14]],
            },
            {
              id: "path",
              label: "PGWP & permits",
              faqs: [INTL_FAQS[10], INTL_FAQS[9], INTL_FAQS[5]],
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
