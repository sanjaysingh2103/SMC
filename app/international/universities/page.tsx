import Link from "next/link";
import { buildMetadata } from "@/lib/metadata-helpers";
import { SITE } from "@/lib/site";
import { UNSPLASH } from "@/lib/media/unsplash";
import { INTL_FAQS } from "@/lib/data/intl-faqs";
import { InternationalGuideBanner } from "@/components/sections/international-guide-banner";
import { intlBannerUniversities } from "@/lib/data/intl-guide-banner-presets";
import { TrustBar } from "@/components/sections/trust-bar";
import { InPageNav } from "@/components/sections/in-page-nav";
import { StepList } from "@/components/sections/step-list";
import { TabbedFaq } from "@/components/sections/tabbed-faq";
import { RcicDisclaimer } from "@/components/sections/rcic-disclaimer";
import { CtaBlock } from "@/components/sections/cta-block";
import { InternationalSectionTitle } from "@/components/sections/international-section-title";
import { Info } from "lucide-react";

export const metadata = buildMetadata({
  title: "Canadian Universities for International Students",
  description:
    "Plan Canadian university admission: U15 research intensity, UG/PG paths, PAL timing, international tuition bands, CLB 7 PGWP notes, scholarships reality. Toronto & GTA Study Master Canada; permits via Visa Master Canada (RCIC).",
  path: "/international/universities",
});

const universities = [
  "University of Toronto",
  "McGill University",
  "University of British Columbia",
  "University of Waterloo",
  "McMaster University",
  "University of Alberta",
  "Western University",
  "Queen's University",
  "University of Ottawa",
  "Dalhousie University",
  "Simon Fraser University",
  "York University",
] as const;

const foundationCards = [
  {
    title: "Degrees with depth",
    body: "Honours and specialist streams combine coursework, senior projects, and sometimes co-op — read prerequisite chains before you apply.",
    href: "/international/graduate-studies",
    linkLabel: "Graduate studies",
  },
  {
    title: "Tuition grids vary by faculty",
    body: "Arts/science baselines differ from engineering, computer science, and commerce — use each institution’s 2026 fee schedule, not averages from blogs.",
    href: "/international/cost",
    linkLabel: "Cost of studying",
  },
  {
    title: "PGWP + language planning",
    body: "University graduates should track CLB-style language expectations referenced in PGWP materials — align IELTS/PTE validity with filing windows.",
    href: "/international/english-tests",
    linkLabel: "English tests",
  },
] as const;

const facts = [
  {
    title: "Research ecosystems",
    body: "U15-style universities run major labs and graduate pipelines — undergraduate access varies by program; ask how soon you touch research or design studios.",
  },
  {
    title: "International tuition reality",
    body: "UG commerce or engineering at flagship campuses can approach high CAD $40k+ annually before housing — model four years, not one brochure line.",
  },
  {
    title: "Scholarship competition",
    body: "Entrance awards exist but are often partial — budget primarily from family, savings, or documented sponsors until offers confirm aid.",
  },
  {
    title: "PAL discipline",
    body: "Provincial caps can pause offers or delay PAL issuance — start applications early where your province rationed study spots.",
  },
  {
    title: "Transfer pathways",
    body: "Some students ladder from college diplomas — credit acceptance is faculty-specific, not generic “2+2” marketing.",
  },
  {
    title: "Prerequisites are gates",
    body: "Missing linear algebra, senior chemistry, or calculus can disqualify you even with a strong average — read explicit course requirements.",
  },
] as const;

const uniJourney = [
  {
    number: "01",
    title: "Define stack",
    description: "Reach / match / safety with honest grade and test bands — prestige without prerequisites wastes fees.",
  },
  {
    number: "02",
    title: "Build evidence",
    description: "Transcripts, tests, portfolios, and activities that prove you can handle seminar pace.",
  },
  {
    number: "03",
    title: "Align narrative",
    description: "SOP, LORs, and optional interviews tell one coherent story — contradictions flag integrity risk.",
  },
  {
    number: "04",
    title: "Offer + PAL + permit",
    description: "Compare net cost after aid; confirm PAL path; then study permit package with credible funds — RCIC partner when retained.",
  },
] as const;

const mistakeCards = [
  {
    title: "Ranking-only shortlists",
    body: "Officers read program fit — prestige without course alignment or budget spine weakens visa files.",
  },
  {
    title: "Ignoring co-op work authorization",
    body: "Co-op streams may need distinct permits — confirm before you accept a ranked program for salary assumptions alone.",
  },
  {
    title: "Scholarship-first budgeting",
    body: "Treat merit aid as bonus until confirmed — living costs in Toronto and Vancouver punish optimistic spreadsheets.",
  },
  {
    title: "Weak prerequisite audit",
    body: "Self-taught gaps rarely substitute for transcript evidence — upgrade courses where faculties demand them.",
  },
] as const;

export default function UniversitiesPage() {
  return (
    <main>
      <InternationalGuideBanner
        eyebrow="CANADIAN UNIVERSITIES"
        title="Canadian universities — ambition with receipts."
        lead="Degrees that travel well, research ecosystems that build skills, and alumni networks that open doors — when finances, prerequisites, and PAL timing align."
        body={
          <>
            Undergraduate planning often lands <strong>CAD $25k–55k / year</strong> for international students before housing
            — tighten estimates with each faculty’s fee grid. Next:{" "}
            <Link
              className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
              href="/international/admissions"
            >
              admissions support
            </Link>
            ,{" "}
            <Link
              className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
              href="/international/sop"
            >
              SOP coaching
            </Link>
            , and{" "}
            <Link
              className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
              href="/international/visa"
            >
              study permits
            </Link>
            .
          </>
        }
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Study in Canada", href: "/international" },
          { label: "Universities" },
        ]}
        primaryCta={{
          label: "Book Free 20-Min Call",
          href: SITE.contactFormUrl,
        }}
        secondaryCta={{ label: "Program search", href: "/international/programs" }}
        stats={intlBannerUniversities}
        heroImage={UNSPLASH.campusModern}
        asideTitle="Universities · snapshot"
        metaItems={[
          "Reach/match/safety shortlists · Study Master Canada",
          "Study permits · Visa Master Canada (RCIC) when retained",
          `${SITE.office.city}, ON · ${SITE.hours}`,
          "Verify each faculty’s prerequisites and fee schedule",
        ]}
      />

      <TrustBar />

      <InPageNav
        items={[
          { label: "2026 context", href: "#context-2026", badge: "NEW" },
          { label: "Basics", href: "#basics" },
          { label: "Overview", href: "#overview" },
          { label: "Six truths", href: "#truths" },
          { label: "Schools", href: "#schools" },
          { label: "College vs uni", href: "#tradeoffs" },
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
              <p className="font-bold text-sm-gray-900">Universities sit inside the same cap system as colleges</p>
              <p className="mt-1 text-sm leading-relaxed text-sm-gray-700 md:text-base">
                Provincial attestation letters and national intake planning affect whether you receive a complete study
                permit file in time for class start. Competitive faculties may fill before generic deadlines on marketing
                sites — treat{" "}
                <strong>portal dates, document checklists, and PAL issuance</strong> as hard constraints alongside rankings.
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
            title="What a Canadian university degree signals"
            description={
              <p>
                Universities grant bachelor’s, honours, and professional-entry degrees with heavier theory, elective
                breadth, and research expectations than college diplomas. Canada’s publicly funded universities are
                provincially chartered — quality is high, but admission and aid vary sharply by campus and faculty.
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
          <InternationalSectionTitle label="OVERVIEW" title="What is a Canadian university degree?" />
          <p>
            Universities combine lower-division breadth with upper-division depth. Competitive faculties publish explicit
            prerequisite courses — missing senior math or lab science can silently disqualify you even with a strong GPA.
          </p>
          <p>
            PGWP eligibility for university programs generally aligns with completion of an eligible program at a DLI, but
            you must still respect study permit conditions, maintain full-time status where required, and document language
            outcomes when IRCC instructions require them for post-graduation work permit filings.
          </p>
        </div>
      </section>

      <section id="truths" className="scroll-mt-28 border-t border-sm-gray-200/80 bg-sm-off-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="DEGREE BASICS"
            title="Six truths about Canadian degrees"
            description={<p>Planning anchors — always confirm on the faculty site for your intake.</p>}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {facts.map((f) => (
              <div key={f.title} className="card-pro grad-border p-6 md:p-7">
                <h3 className="text-lg font-bold text-sm-gray-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="schools" className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="ORIENTATION"
            title="Twelve research-intensive names"
            description={
              <p className="text-sm-gray-600">
                Not admission promises — a map to start research. We pair reach/match/safety with honest grade and English
                expectations.
              </p>
            }
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {universities.map((u) => (
              <div key={u} className="card-pro grad-border p-4 text-sm font-semibold text-sm-gray-900 shadow-sm">
                {u}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="tradeoffs"
        className="scroll-mt-28 border-t border-sm-gray-200/80 bg-sm-off-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle label="DECISION GRID" title="University vs college — honest trade-offs" />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="card-pro grad-border p-6 md:p-7">
              <h3 className="text-lg font-bold text-sm-teal-dark">Choose a university when…</h3>
              <ul className="mt-4 space-y-2 text-sm text-sm-gray-700">
                <li>You need a degree for licensing, graduate school, or global mobility.</li>
                <li>You thrive in lecture + seminar environments and self-directed reading.</li>
                <li>You can fund three to four years without breaking GIC and tuition narratives.</li>
              </ul>
            </div>
            <div className="card-pro grad-border p-6 md:p-7">
              <h3 className="text-lg font-bold text-sm-orange-dark">Consider college first when…</h3>
              <ul className="mt-4 space-y-2 text-sm text-sm-gray-700">
                <li>You want faster workforce integration with co-op wages (with correct permits).</li>
                <li>You need a gentler English transition before degree-level rigour.</li>
                <li>You accept field-of-study PGWP guardrails for diplomas.</li>
              </ul>
            </div>
          </div>
          <p className="mt-8 text-sm text-sm-gray-700">
            Explore{" "}
            <Link className="font-semibold text-sm-teal-dark underline" href="/international/colleges">
              Canadian colleges
            </Link>{" "}
            side by side.
          </p>
        </div>
      </section>

      <div id="journey" className="scroll-mt-28">
        <StepList
          eyebrow="PROCESS"
          title="From grades to enrolment-ready"
          subtitle="Same sequencing officers like to see — program credibility before permit packaging."
          steps={uniJourney}
          sectionClassName="section-pro section-pro-bg-stripe border-t border-sm-gray-200/80"
          columns={4}
        />
      </div>

      <section id="mistakes" className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="PITFALLS"
            title="Common university planning mistakes"
            description={<p>We catch these in shortlist review — fix them before application fees multiply.</p>}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {mistakeCards.map((m) => (
              <div key={m.title} className="rounded-2xl border border-sm-gray-100 bg-sm-off-white/90 p-6 shadow-sm">
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
          title="University & pathway questions"
          subtitle="Fit, money, and timing — verify each institution for your intake."
          tabs={[
            {
              id: "fit",
              label: "Programs & grades",
              faqs: [INTL_FAQS[4], INTL_FAQS[12], INTL_FAQS[16]],
            },
            {
              id: "money",
              label: "Costs & awards",
              faqs: [INTL_FAQS[0], INTL_FAQS[18], INTL_FAQS[7]],
            },
            {
              id: "path",
              label: "Permits & PGWP",
              faqs: [INTL_FAQS[10], INTL_FAQS[3], INTL_FAQS[15]],
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
