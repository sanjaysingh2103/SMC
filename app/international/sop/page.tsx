import Link from "next/link";
import { buildMetadata } from "@/lib/metadata-helpers";
import { SITE } from "@/lib/site";
import { UNSPLASH } from "@/lib/media/unsplash";
import { INTL_FAQS } from "@/lib/data/intl-faqs";
import { InternationalGuideBanner } from "@/components/sections/international-guide-banner";
import { intlBannerSop } from "@/lib/data/intl-guide-banner-presets";
import { TrustBar } from "@/components/sections/trust-bar";
import { InPageNav } from "@/components/sections/in-page-nav";
import { StepList } from "@/components/sections/step-list";
import { TabbedFaq } from "@/components/sections/tabbed-faq";
import { RcicDisclaimer } from "@/components/sections/rcic-disclaimer";
import { CtaBlock } from "@/components/sections/cta-block";
import { InternationalSectionTitle } from "@/components/sections/international-section-title";
import { Info } from "lucide-react";

export const metadata = buildMetadata({
  title: "Statement of Purpose (SOP) Coaching for Canada",
  description:
    "Canadian-style Statement of Purpose coaching: structure, authenticity, program fit, and refusal-aware narratives. Study Master Canada - Toronto & GTA.",
  path: "/international/sop",
});

const foundationCards = [
  {
    title: "Evidence brief, not fan fiction",
    body: "Officers and committees read SOPs as coherence checks against transcripts, referees, and finances — tone and facts must align.",
    href: "/international/admissions",
    linkLabel: "Admissions hub",
  },
  {
    title: "Same story as your LORs",
    body: "Committees compare files side-by-side. Contradicting dates, degree titles, or timelines flags integrity risk faster than a weak GPA.",
    href: "/international/lor",
    linkLabel: "LOR coaching",
  },
  {
    title: "Canada-specific outcomes",
    body: "Courses, faculty, co-op, city, and tuition path should be concrete — not a recycled US “dream school” essay with a maple leaf pasted on.",
    href: "/international/programs",
    linkLabel: "Program search",
  },
] as const;

const coachingSteps = [
  {
    number: "01",
    title: "Intake interview",
    description: "We map academic history, failures, career pivots, and family constraints without judgment.",
  },
  {
    number: "02",
    title: "Outline architecture",
    description: "Canadian readers expect progression: past → program → Canada → outcomes — with honest gaps explained.",
  },
  {
    number: "03",
    title: "Draft passes",
    description: "Multiple revision cycles tightening evidence, removing clichés, and aligning with referees.",
  },
  {
    number: "04",
    title: "Final polish",
    description: "Grammar, tone, word limits, and faculty-specific tweaks for graduate committees.",
  },
] as const;

const mistakeCards = [
  {
    title: "Recycling a US essay",
    body: "Zero Canadian specifics — officers have read thousands of generic “world class education” paragraphs.",
  },
  {
    title: "Ignoring a gap year",
    body: "Silence invites worst-case inference — brief honest context beats omission.",
  },
  {
    title: "Rankings without curriculum",
    body: "Name-dropping QS without tying courses to your prior learning reads as lazy.",
  },
  {
    title: "Contradicting LOR writers",
    body: "Dates and degree titles must match everywhere in the file.",
  },
] as const;

const levelCards = [
  {
    title: "Undergraduate",
    body: "Emphasize curiosity, leadership, resilience, and how the program builds on high school strengths — still grounded in course names.",
  },
  {
    title: "Coursework master’s",
    body: "Signal research literacy, faculty alignment, and technical vocabulary from your prior degree — avoid vague “passion” without methods.",
  },
  {
    title: "Doctoral / research",
    body: "Narrow to problem statements, methods, and supervisor fit — committees expect precision.",
  },
] as const;

export default function SopPage() {
  return (
    <main>
      <InternationalGuideBanner
        eyebrow="SOP COACHING"
        title="Statement of Purpose coaching — Canadian nuance matters."
        lead="Officers and admissions committees want coherence: why this credential, why Canada, why now, and how you will fund it without violating conditions."
        body={
          <>
            We strengthen evidence — courses, faculty, budget reality — <strong>not fiction</strong>. Ghostwritten heroic
            essays contradict transcripts and hurt visa credibility. Next:{" "}
            <Link
              className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
              href="/international/lor"
            >
              LOR coaching
            </Link>
            ,{" "}
            <Link
              className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
              href="/international/english-tests"
            >
              English tests
            </Link>
            , and{" "}
            <Link
              className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
              href="/international/visa"
            >
              study permit guide
            </Link>
            .
          </>
        }
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Study in Canada", href: "/international" },
          { label: "SOP" },
        ]}
        primaryCta={{
          label: "Book Free 20-Min Call",
          href: SITE.contactFormUrl,
        }}
        secondaryCta={{ label: "LOR coaching", href: "/international/lor" }}
        stats={intlBannerSop}
        heroImage={UNSPLASH.libraryStudy}
        asideTitle="SOP · snapshot"
        metaItems={[
          "SOP & admissions narrative · Study Master Canada",
          "Study permits · Visa Master Canada (RCIC) when retained",
          `${SITE.office.city}, ON · ${SITE.hours}`,
          "We coach structure and honesty — we do not ghostwrite fiction",
        ]}
      />

      <TrustBar />

      <InPageNav
        items={[
          { label: "2026 context", href: "#context-2026", badge: "NEW" },
          { label: "Basics", href: "#basics" },
          { label: "Canadian SOP", href: "#nuance" },
          { label: "Process", href: "#process" },
          { label: "Mistakes", href: "#mistakes" },
          { label: "By level", href: "#levels" },
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
              <p className="font-bold text-sm-gray-900">Standard-stream credibility in 2026</p>
              <p className="mt-1 text-sm leading-relaxed text-sm-gray-700 md:text-base">
                After SDS ended, officers read standard-stream files with more scrutiny on <strong>program fit</strong>,{" "}
                <strong>funds</strong>, and <strong>PAL-backed offers</strong> where required. Your SOP should sound like the
                same person who appears in transcripts, bank narratives, and LORs — not a separate marketing persona.
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
            title="What we mean by SOP coaching"
            description={
              <p>
                We help you structure authentic drafts you own. We tighten evidence and remove clichés — we do not invent
                achievements or write in a professor’s voice.
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
        id="nuance"
        className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 text-sm leading-relaxed text-sm-gray-700 md:text-base">
          <InternationalSectionTitle
            label="VOICE"
            title="What makes a Canadian SOP different from US/UK essays?"
            description={
              <>
                <p className="text-sm-gray-700">
                  American prompts often celebrate personal storytelling; UK personal statements skew reflective and concise.
                  Canadian SOPs — especially those read by visa officers — function as evidence briefs: they connect academic
                  history, program curriculum, finances, and post-study intent without sounding evasive.
                </p>
                <p className="mt-4 text-sm-gray-700">
                  Officers expect PAL-backed offers where required, tuition realism, and plausible ties to your home country
                  even when you hope to pursue PR later — tone and honesty matter.
                </p>
              </>
            }
          />
        </div>
      </section>

      <div id="process" className="scroll-mt-28">
        <StepList
          eyebrow="COACHING"
          title="Our four-stage coaching process"
          steps={coachingSteps}
          sectionClassName="section-pro section-pro-bg-stripe border-t border-sm-gray-200/80"
          columns={4}
        />
      </div>

      <section id="mistakes" className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="RISKS"
            title="SOP mistakes that hurt files"
            description={<p>These patterns show up in refusals and deferrals — fix them before you submit.</p>}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {mistakeCards.map((m) => (
              <div key={m.title} className="rounded-2xl border border-sm-gray-100 bg-sm-off-white p-6 shadow-sm">
                <p className="font-bold text-sm-gray-900">{m.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="levels"
        className="scroll-mt-28 border-t border-sm-gray-200/80 bg-sm-off-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="BY LEVEL"
            title="Undergrad vs master’s — what changes?"
            description={
              <p className="text-sm-gray-700">
                Depth and vocabulary scale with program rigour — the spine stays the same: honest arc, program evidence,
                fund realism.
              </p>
            }
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {levelCards.map((c) => (
              <div key={c.title} className="card-pro grad-border p-6 md:p-7">
                <h3 className="text-lg font-bold text-sm-gray-900">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">{c.body}</p>
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
          title="Admissions & pathway questions"
          subtitle="Fit, timing, and credibility — the same themes that show up beside your SOP in a full file."
          tabs={[
            {
              id: "fit",
              label: "Programs & fit",
              faqs: [INTL_FAQS[4], INTL_FAQS[12], INTL_FAQS[16]],
            },
            {
              id: "timing",
              label: "Planning & tests",
              faqs: [INTL_FAQS[14], INTL_FAQS[5], INTL_FAQS[3]],
            },
            {
              id: "path",
              label: "Permits & support",
              faqs: [INTL_FAQS[8], INTL_FAQS[15], INTL_FAQS[13]],
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
