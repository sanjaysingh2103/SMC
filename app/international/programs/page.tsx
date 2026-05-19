import Link from "next/link";
import { buildMetadata } from "@/lib/metadata-helpers";
import { SITE } from "@/lib/site";
import { UNSPLASH } from "@/lib/media/unsplash";
import { INTL_FAQS } from "@/lib/data/intl-faqs";
import { intlBannerPrograms } from "@/lib/data/intl-guide-banner-presets";
import { InternationalGuideBanner } from "@/components/sections/international-guide-banner";
import { TrustBar } from "@/components/sections/trust-bar";
import { InPageNav } from "@/components/sections/in-page-nav";
import { ProgramSearchEmbed } from "@/components/marketing/program-search-embed";
import { StepList } from "@/components/sections/step-list";
import { TabbedFaq } from "@/components/sections/tabbed-faq";
import { RcicDisclaimer } from "@/components/sections/rcic-disclaimer";
import { CtaBlock } from "@/components/sections/cta-block";
import { InternationalSectionTitle } from "@/components/sections/international-section-title";
import { Info } from "lucide-react";

export const metadata = buildMetadata({
  title: "Search Canadian College & University Programs | Study Master Canada",
  description:
    "ApplyBoard-powered search across 1,500+ DLI programs: filter by province, credential, intake. Toronto & GTA counsellors add PAL timing, PGWP awareness, and deposit discipline — then admissions support and RCIC study permits via Visa Master Canada.",
  path: "/international/programs",
});

const foundationCards = [
  {
    title: "DLI ≠ automatic visa",
    body: "Only schools on IRCC’s designated learning institution list can issue the acceptance documentation study permits expect — still verify program-level PGWP and PAL rules.",
    href: "/international/study-in-canada",
    linkLabel: "Why Canada (2026)",
  },
  {
    title: "Field-of-study for college PGWP",
    body: "College credentials must be checked against current IRCC eligibility expectations — brochure language is not a permit.",
    href: "/international/pgwp",
    linkLabel: "PGWP guide",
  },
  {
    title: "Reach / match / safety",
    body: "Shortlist three to five programs across competitiveness bands before you chase non-refundable deposits.",
    href: "/international/admissions",
    linkLabel: "Admissions support",
  },
] as const;

const programMistakeCards = [
  {
    title: "Love at first brochure",
    body: "Ranking hype without prerequisite checks, fee schedules, and city rent math creates refusals and dropout risk.",
  },
  {
    title: "Ignoring PAL sequencing",
    body: "Some provinces batch PALs — an offer without a clear PAL path can strand you at the visa step.",
  },
  {
    title: "One English test date",
    body: "No buffer for a retake can blow every deadline — book early, especially for September cohorts.",
  },
  {
    title: "Mixing up credential codes",
    body: "PGWP and transfer rules attach to the exact program — confirm campus, credential length, and delivery mode.",
  },
] as const;

const quickFacts = [
  { label: "Discovery source", value: "ApplyBoard embed (DLI programs)" },
  { label: "Typical shortlist", value: "3–5 programs before deposits" },
  { label: "We verify", value: "PAL timing · PGWP pathway · fees" },
  { label: "Office", value: `${SITE.office.city}, ON · ${SITE.hours}` },
];

const programJourneySteps = [
  {
    number: "01",
    title: "Filter & explore",
    description:
      "Use province, credential, intake, and budget bands — rankings never paid rent; labour-market fit and PGWP rules matter more.",
  },
  {
    number: "02",
    title: "Save & send",
    description:
      "Shortlist 3–5 favourites and route them through our contact form so we can sanity-check realism before you chase deposits.",
  },
  {
    number: "03",
    title: "Counsellor review",
    description:
      "We check provincial cap / PAL implications, spouse-work rules where relevant, rent bands for your city list, and sequencing risk.",
  },
  {
    number: "04",
    title: "Application calendar",
    description:
      "We convert the agreed shortlist into deadlines for tests, referees, deposits, and — when you are ready — study permit timing with our RCIC partner.",
  },
];

export default function ProgramsPage() {
  return (
    <main>
      <InternationalGuideBanner
        eyebrow="PROGRAM DISCOVERY"
        title="Find your Canadian program"
        lead="Combine machine search with GTA judgement — the embed gives official feeds; we add cap context, PAL timing, and a plan that survives IRCC scrutiny."
        body={
          <>
            When you are ready to apply, our{" "}
            <Link
              className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
              href="/international/admissions"
            >
              admissions team
            </Link>{" "}
            builds the file;{" "}
            <Link
              className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
              href="/international/visa"
            >
              study permits
            </Link>{" "}
            go through Visa Master Canada (RCIC) when you retain them. Model money honestly with our{" "}
            <Link
              className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
              href="/international/cost"
            >
              cost guide
            </Link>{" "}
            and{" "}
            <Link
              className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
              href="/tools/cost-calculator"
            >
              calculator
            </Link>
            .
          </>
        }
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Study in Canada", href: "/international" },
          { label: "Programs" },
        ]}
        primaryCta={{
          label: "Book Free 20-Min Call",
          href: SITE.contactFormUrl,
        }}
        secondaryCta={{ label: "Why Canada (2026)", href: "/international/study-in-canada" }}
        stats={intlBannerPrograms}
        heroImage={UNSPLASH.studentLaptop}
        asideTitle="Program search · snapshot"
        metaItems={[
          "ApplyBoard discovery · 1,500+ programs",
          "Human shortlists · Study Master Canada",
          `${SITE.office.city}, ON · ${SITE.hours}`,
          "Permits · Visa Master Canada (RCIC) when retained",
        ]}
      />

      <TrustBar />

      <InPageNav
        items={[
          { label: "2026 context", href: "#context-2026", badge: "NEW" },
          { label: "Basics", href: "#basics" },
          { label: "Live search", href: "#live-search" },
          { label: "How to use", href: "#how-to" },
          { label: "Journey", href: "#journey" },
          { label: "Mistakes", href: "#mistakes" },
          { label: "Get help", href: "#consult" },
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
              <p className="font-bold text-sm-gray-900">Discovery is not a deposit decision</p>
              <p className="mt-1 text-sm leading-relaxed text-sm-gray-700 md:text-base">
                National intake caps and <strong>provincial PAL quotas</strong> mean some programs pause offers mid-cycle.
                College routes must also be checked against <strong>PGWP field-of-study rules</strong> — a flashy diploma
                name is not proof of a work permit after graduation. Use the search to explore; use us to stress-test
                before you pay non-refundable deposits.
              </p>
            </div>
          </div>

          <p className="mt-8 text-xs font-bold uppercase tracking-widest text-sm-teal-dark">Before you scroll</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {quickFacts.map((f) => (
              <div
                key={f.label}
                className="card-pro grad-border rounded-2xl bg-white px-4 py-3 shadow-sm"
              >
                <p className="text-xs font-medium text-sm-gray-600">{f.label}</p>
                <p className="mt-1 text-sm font-bold text-sm-gray-900">{f.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="basics"
        className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="FOUNDATION"
            title="How program search fits the rest of your file"
            description={
              <p className="text-sm-gray-600">
                Canada hosts hundreds of post-secondary DLIs on IRCC’s official list — your job is to narrow to a small set
                where academics, budget, PGWP pathway, and PAL timing all align. We use ApplyBoard discovery feeds and then
                apply GTA judgement before money moves.
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
        id="live-search"
        className="scroll-mt-28 border-t border-sm-gray-200/80 bg-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="LIVE SEARCH"
            title="ApplyBoard program explorer"
            description={
              <p className="text-sm-gray-600">
                Results reflect institutional feeds — always confirm intake, fees, and admissions rules on the DLI portal
                before paying deposits. See our{" "}
                <Link className="font-semibold text-sm-teal-dark underline" href="/international/admissions">
                  admissions page
                </Link>{" "}
                for how we package applications.
              </p>
            }
          />
          <div className="mt-8">
            <ProgramSearchEmbed />
          </div>
        </div>
      </section>

      <section id="how-to" className="scroll-mt-28 border-t border-sm-gray-200 bg-sm-off-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="WORKFLOW"
            title="How to use this search"
            description={
              <p className="text-sm-gray-600">
                Four practical steps — the same spine we use when we move from favourites to a dated application calendar.
              </p>
            }
          />
          <ol className="mt-8 space-y-4 text-sm leading-relaxed text-sm-gray-700 md:text-base">
            {[
              "Filter by province, credential, intake, and budget band.",
              "Save 3–5 favourites and send them to us through our contact form.",
              "We sanity-check PGWP alignment, PAL implications, and deposit timing.",
              "We convert the shortlist into an application calendar with referee and test deadlines.",
            ].map((s, idx) => (
              <li key={s} className="flex gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sm-teal text-xs font-bold text-white">
                  {idx + 1}
                </span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div id="journey" className="scroll-mt-28">
        <StepList
          eyebrow="PROCESS"
          title="From search hits to a defensible shortlist"
          subtitle="Machines list options; officers judge coherence — we close the gap before money moves."
          steps={programJourneySteps}
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
            title="Shortlist mistakes that cost money"
            description={<p>We see these after midnight scrolling sessions — fix them in the planning call instead.</p>}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {programMistakeCards.map((m) => (
              <div key={m.title} className="rounded-2xl border border-sm-gray-100 bg-white p-6 shadow-sm">
                <p className="font-bold text-sm-gray-900">{m.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="consult"
        className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="rounded-3xl border border-sm-orange/30 bg-sm-orange/5 p-8 md:p-10">
            <InternationalSectionTitle
              size="compact"
              label="GET HELP"
              title="Not sure where to start?"
              description={
                <p className="text-sm-gray-700">
                  Send us your grade range, budget ceiling, preferred cities, and career goal — even if it is fuzzy. We
                  reply with a curated shortlist faster than scrolling dozens of tabs at midnight.
                </p>
              }
            />
            <Link
              className="mt-6 inline-flex rounded-full bg-sm-orange px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sm-orange-dark"
              href={SITE.contactFormUrl}
            >
              Book a free consultation
            </Link>
          </div>
        </div>
      </section>

      <div className="border-t border-sm-gray-200 bg-gradient-to-b from-white to-sm-off-white/40 py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <p className="text-center text-sm leading-relaxed text-sm-gray-700 md:text-base">
            Next steps after you shortlist:{" "}
            <Link className="font-bold text-sm-teal-dark underline underline-offset-2" href="/international/admissions">
              admissions support
            </Link>
            {" · "}
            <Link className="font-bold text-sm-teal-dark underline underline-offset-2" href="/international/english-tests">
              English tests
            </Link>
            {" · "}
            <Link className="font-bold text-sm-orange-dark underline underline-offset-2" href="/international/visa">
              study permit guide
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
          title="Program & pathway questions"
          subtitle="Straight answers before you fall in love with a credential name on a brochure."
          tabs={[
            {
              id: "fit",
              label: "Program fit",
              faqs: [INTL_FAQS[4], INTL_FAQS[16], INTL_FAQS[12], INTL_FAQS[11]],
            },
            {
              id: "costs",
              label: "Costs & timing",
              faqs: [INTL_FAQS[0], INTL_FAQS[14]],
            },
            {
              id: "permits",
              label: "PAL & permits",
              faqs: [INTL_FAQS[3], INTL_FAQS[5], INTL_FAQS[10]],
            },
            {
              id: "why-smc",
              label: "Why Study Master Canada",
              faqs: [INTL_FAQS[13], INTL_FAQS[18]],
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
