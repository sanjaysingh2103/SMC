import Link from "next/link";
import { buildMetadata } from "@/lib/metadata-helpers";
import { SITE } from "@/lib/site";
import { UNSPLASH } from "@/lib/media/unsplash";
import { INTL_FAQS } from "@/lib/data/intl-faqs";
import { InternationalGuideBanner } from "@/components/sections/international-guide-banner";
import { intlBannerLor } from "@/lib/data/intl-guide-banner-presets";
import { TrustBar } from "@/components/sections/trust-bar";
import { InPageNav } from "@/components/sections/in-page-nav";
import { StepList } from "@/components/sections/step-list";
import { TabbedFaq } from "@/components/sections/tabbed-faq";
import { RcicDisclaimer } from "@/components/sections/rcic-disclaimer";
import { CtaBlock } from "@/components/sections/cta-block";
import { InternationalSectionTitle } from "@/components/sections/international-section-title";
import { Info } from "lucide-react";

export const metadata = buildMetadata({
  title: "Letters of Recommendation (LOR) Coaching",
  description:
    "Ethical LOR coaching for Canadian admissions: referee selection, briefing notes, and integrity guardrails. Study Master Canada - Toronto & GTA.",
  path: "/international/lor",
});

const foundationCards = [
  {
    title: "Committees want anecdotes",
    body: "Labs you led, code you shipped, budgets you managed — generic “hardworking” without evidence triggers skepticism.",
    href: "/international/sop",
    linkLabel: "SOP coaching",
  },
  {
    title: "We brief — we do not forge",
    body: "We never draft letters in a professor’s voice. That crosses integrity lines and can jeopardize admission and visa credibility if discovered.",
    href: "/international/admissions",
    linkLabel: "Admissions hub",
  },
  {
    title: "Institutional emails win",
    body: "Referees who know your transcript context beat famous titles who barely remember you — choose depth over vanity.",
    href: "/international/english-tests",
    linkLabel: "English tests",
  },
] as const;

const lorJourney = [
  {
    number: "01",
    title: "Select referees",
    description: "Academic depth, professional supervision, or blend — mapped to program rules and portal limits.",
  },
  {
    number: "02",
    title: "Build referee packet",
    description: "CV, transcript highlights, program bullets, deadlines, and upload instructions in one folder.",
  },
  {
    number: "03",
    title: "Respect their calendar",
    description: "Faculty need lead time — nudge ethically, never pressure for inflated claims.",
  },
  {
    number: "04",
    title: "Cross-read with SOP",
    description: "Align dates, degree titles, and stories before portals lock — inconsistencies flag fast.",
  },
] as const;

const refereeCards = [
  {
    title: "Academic referees",
    body: "Should know which courses challenged you, how you recovered from a low midterm, or how you mentored juniors — transcript context matters.",
  },
  {
    title: "Professional referees",
    body: "Strong for MBA, project management, or pivots — choose someone who supervised deliverables, not a family friend with a famous title.",
  },
] as const;

const countCard = {
  title: "How many LORs?",
  body: "Two academic or blended references are standard for most undergraduate and graduate coursework programs. Some competitive faculties request three — always read the portal fine print.",
} as const;

const flagCards = [
  {
    title: "Same paragraph structure twice",
    body: "Copy/paste laziness across two referees reads as coordinated fiction.",
  },
  {
    title: "Personal Gmail for active faculty",
    body: "Committees expect institutional email where the professor is still employed.",
  },
  {
    title: "Contradictions with your SOP",
    body: "Dates, degree titles, or role claims must match everywhere in the file.",
  },
  {
    title: "Exaggerated claims",
    body: "If you cannot defend it in an interview, do not let a referee write it.",
  },
] as const;

export default function LorPage() {
  return (
    <main>
      <InternationalGuideBanner
        eyebrow="LETTERS OF RECOMMENDATION"
        title="LORs that sound like humans — not templates."
        lead="We coach you to brief your referees ethically. We do not ghostwrite faculty letters."
        body={
          <>
            Committees cross-read your SOP, transcripts, and LORs —{" "}
            <strong>inconsistencies</strong> flag integrity risk faster than weak GPA. Next:{" "}
            <Link
              className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
              href="/international/sop"
            >
              SOP coaching
            </Link>
            ,{" "}
            <Link
              className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
              href="/international/admissions"
            >
              admissions support
            </Link>
            , and{" "}
            <Link
              className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
              href="/international/programs"
            >
              program search
            </Link>
            .
          </>
        }
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Study in Canada", href: "/international" },
          { label: "LOR" },
        ]}
        primaryCta={{
          label: "Book Free 20-Min Call",
          href: SITE.contactFormUrl,
        }}
        secondaryCta={{ label: "Admissions hub", href: "/international/admissions" }}
        stats={intlBannerLor}
        heroImage={UNSPLASH.counsellingDesk}
        asideTitle="LOR · snapshot"
        metaItems={[
          "Ethical LOR briefing · Study Master Canada",
          "Study permits · Visa Master Canada (RCIC) when retained",
          `${SITE.office.city}, ON · ${SITE.hours}`,
          "We do not ghostwrite in a referee’s voice",
        ]}
      />

      <TrustBar />

      <InPageNav
        items={[
          { label: "2026 context", href: "#context-2026", badge: "NEW" },
          { label: "Basics", href: "#basics" },
          { label: "Committees", href: "#committees" },
          { label: "Who writes", href: "#referees" },
          { label: "How many", href: "#count" },
          { label: "Process", href: "#process" },
          { label: "Red flags", href: "#flags" },
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
              <p className="font-bold text-sm-gray-900">LORs are integrity documents</p>
              <p className="mt-1 text-sm leading-relaxed text-sm-gray-700 md:text-base">
                Portals log uploads, timestamps, and sometimes IP metadata. Brief referees with facts and deadlines — never
                ask them to sign fiction. A coherent file beats a “star” referee who barely knows you.
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
            title="Ethical LOR coaching — what we do"
            description={
              <p>
                We help you choose referees, package materials, and manage timelines. Letters stay in the referee’s voice
                and judgment.
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
        id="committees"
        className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 text-sm leading-relaxed text-sm-gray-700 md:text-base">
          <InternationalSectionTitle
            label="COMMITTEES"
            title="What Canadian committees want"
            description={
              <p className="text-sm-gray-700">
                Specific anecdotes beat adjectives. Committees compare LORs to your SOP — alignment matters as much as
                praise.
              </p>
            }
          />
        </div>
      </section>

      <section id="referees" className="scroll-mt-28 border-t border-sm-gray-200/80 bg-sm-off-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="REFEREES"
            title="Who should write your LORs?"
            description={
              <p className="text-sm-gray-700">
                Academic referees should know your transcript context. Professional referees matter when they supervised real
                work output.
              </p>
            }
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {refereeCards.map((c) => (
              <div key={c.title} className="card-pro grad-border p-6 md:p-7">
                <h3 className="text-lg font-bold text-sm-gray-900">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="count" className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle label="COUNT" title="How many LORs?" />
          <div className="mt-8 max-w-3xl card-pro grad-border p-6 md:p-7">
            <p className="text-sm leading-relaxed text-sm-gray-700">{countCard.body}</p>
          </div>
        </div>
      </section>

      <div id="process" className="scroll-mt-28">
        <StepList
          eyebrow="PROCESS"
          title="From referee choice to aligned uploads"
          subtitle="Exact portal steps vary by DLI — we keep your side organized and respectful of faculty time."
          steps={lorJourney}
          sectionClassName="section-pro section-pro-bg-stripe border-t border-sm-gray-200/80"
          columns={4}
        />
      </div>

      <section
        id="flags"
        className="scroll-mt-28 border-t border-sm-gray-200/80 bg-sm-off-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="RED FLAGS"
            title="What admissions officers catch"
            description={<p>Fix these before submit — they are cheaper than integrity questions mid-cycle.</p>}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {flagCards.map((f) => (
              <div key={f.title} className="rounded-2xl border border-sm-gray-100 bg-white p-6 shadow-sm">
                <p className="font-bold text-sm-gray-900">{f.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">{f.body}</p>
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
          title="Admissions & fit questions"
          subtitle="Grades, programs, and timing — context that sits beside LOR strategy in a full application."
          tabs={[
            {
              id: "fit",
              label: "Programs & grades",
              faqs: [INTL_FAQS[4], INTL_FAQS[12], INTL_FAQS[16]],
            },
            {
              id: "timing",
              label: "Planning",
              faqs: [INTL_FAQS[14], INTL_FAQS[5]],
            },
            {
              id: "help",
              label: "Support & permits",
              faqs: [INTL_FAQS[13], INTL_FAQS[15], INTL_FAQS[3]],
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
