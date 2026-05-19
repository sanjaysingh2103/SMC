import Link from "next/link";
import { buildMetadata } from "@/lib/metadata-helpers";
import { SITE } from "@/lib/site";
import { UNSPLASH } from "@/lib/media/unsplash";
import { INTL_FAQS } from "@/lib/data/intl-faqs";
import { InternationalGuideBanner } from "@/components/sections/international-guide-banner";
import { intlBannerPgwp } from "@/lib/data/intl-guide-banner-presets";
import { TrustBar } from "@/components/sections/trust-bar";
import { InPageNav } from "@/components/sections/in-page-nav";
import { StepList } from "@/components/sections/step-list";
import { TabbedFaq } from "@/components/sections/tabbed-faq";
import { RcicDisclaimer } from "@/components/sections/rcic-disclaimer";
import { CtaBlock } from "@/components/sections/cta-block";
import { InternationalSectionTitle } from "@/components/sections/international-section-title";
import { Info } from "lucide-react";

export const metadata = buildMetadata({
  title: "Post-Graduation Work Permit (PGWP) in Canada | Study Master Canada",
  description:
    "PGWP eligibility for 2026: DLI completion, CLB 7 for university grads where required, college field-of-study rules, 180-day application window, duration tied to program length. Toronto & GTA guidance; regulated filings via RCIC partner Visa Master Canada.",
  path: "/international/pgwp",
});

const foundationCards = [
  {
    title: "What it is",
    body: "An open work permit for eligible graduates of Canadian designated learning institutions — not automatic, and not a substitute for study permit compliance.",
  },
  {
    title: "Why it matters for PR",
    body: "PGWP employment feeds Canadian Experience Class points, PNPs, and employer conversations. Program choice in year one shapes what work you can legally build.",
    href: "/international/pathways-to-pr",
    linkLabel: "PR pathways overview",
  },
  {
    title: "Tied to your study story",
    body: "Officers read continuity: transcripts, completion letters, and permit history must align with the program you claim you finished.",
    href: "/international/visa",
    linkLabel: "Study permit context",
  },
] as const;

const eligibilityCards = [
  {
    title: "DLI + eligible program",
    body: "Complete an eligible program at a DLI. College routes must be checked against IRCC field-of-study eligibility expectations — assumptions cause refusals.",
    href: "/international/colleges",
    linkLabel: "College guide",
  },
  {
    title: "Full-time status (with exceptions)",
    body: "Maintain full-time student status where required; part-time terms need to fall within authorized exceptions or you risk PGWP eligibility.",
    href: "/international/working-in-canada",
    linkLabel: "Work while studying",
  },
  {
    title: "University language expectations",
    body: "When instructions require it, plan for CLB 7 language proof for university streams — expired scores are a common last-minute failure.",
    href: "/international/english-tests",
    linkLabel: "English tests",
  },
  {
    title: "180-day application window",
    body: "Apply within 180 days of completing program requirements while maintaining status or transitioning per IRCC instructions — missing the clock is a top preventable loss.",
  },
] as const;

const durationCards = [
  {
    title: "Length mirrors study",
    body: "Validity generally aligns with program length, capped at three years for longer programs. IRCC instructions define edge cases.",
  },
  {
    title: "Combined credentials",
    body: "Stacked diplomas or degree + certificate combinations have special rules — document every credential and completion date cleanly.",
  },
] as const;

const applyChecklist = [
  "Written completion letter + transcripts aligned to the DLI program",
  "Valid passport and biometrics (reuse when permitted)",
  "Digital application with accurate program dates and DLI numbers",
  "Language test upload only when your stream triggers CLB requirements",
  "Status plan if you are between study and work (follow current IRCC instructions)",
] as const;

const pgwpJourney = [
  {
    number: "01",
    title: "Pick a PGWP-aware program",
    description:
      "Shortlist DLIs and credentials with field-of-study and duration rules in mind — not just ranking lists.",
  },
  {
    number: "02",
    title: "Finish clean",
    description:
      "Complete requirements, keep full-time compliance, and collect completion evidence the week grades finalize.",
  },
  {
    number: "03",
    title: "File within 180 days",
    description:
      "Start the online application early; biometrics and uploads take longer during September peaks.",
  },
  {
    number: "04",
    title: "Build PR-ready work",
    description:
      "Use open work to gather NOC-aligned experience — then choose CEC / PNP / AIP forks with regulated counsel when needed.",
  },
] as const;

const mistakeCards = [
  {
    title: "Missing the 180-day clock",
    body: "Treat completion day as day zero on a calendar — not “when I feel ready.”",
  },
  {
    title: "Unauthorized part-time study",
    body: "Part-time terms without an authorized reason can break eligibility — verify with your registrar before you drop below full-time.",
  },
  {
    title: "Assuming college = automatic PGWP",
    body: "Field-of-study lists and program eligibility change — verify against current IRCC instructions for your credential.",
  },
  {
    title: "Expired language scores",
    body: "If CLB proof is required, upload valid scores — retests need lead time.",
  },
] as const;

export default function PgwpPage() {
  return (
    <main>
      <InternationalGuideBanner
        eyebrow="PGWP"
        title="Post-Graduation Work Permit (PGWP)"
        lead="An open work permit that lets eligible graduates build Canadian experience — when program, language, and timelines align with IRCC rules."
        body={
          <>
            Apply within <strong>180 days</strong> of completing program requirements — missing the clock is one of the top
            preventable losses we see after graduation. Next:{" "}
            <Link
              className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
              href="/international/pathways-to-pr"
            >
              PR pathways
            </Link>
            ,{" "}
            <Link
              className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
              href="/international/working-in-canada"
            >
              work rules (24 hrs/week cap)
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
          { label: "PGWP" },
        ]}
        primaryCta={{
          label: "Book Free 20-Min Call",
          href: SITE.contactFormUrl,
        }}
        secondaryCta={{ label: "PR pathways", href: "/international/pathways-to-pr" }}
        stats={intlBannerPgwp}
        heroImage={UNSPLASH.graduation}
        asideTitle="PGWP · snapshot"
        metaItems={[
          "Education sequencing · Study Master Canada",
          "PGWP filing strategy · Visa Master Canada (RCIC) when retained",
          `${SITE.office.city}, ON · ${SITE.hours}`,
          "Verify IRCC instructions for your intake",
        ]}
      />

      <TrustBar />

      <InPageNav
        items={[
          { label: "2026 context", href: "#context-2026", badge: "NEW" },
          { label: "Basics", href: "#basics" },
          { label: "Eligibility", href: "#eligibility" },
          { label: "Duration", href: "#duration" },
          { label: "Apply", href: "#apply" },
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
              <p className="font-bold text-sm-gray-900">PGWP is a bridge — not a backup plan</p>
              <p className="mt-1 text-sm leading-relaxed text-sm-gray-700 md:text-base">
                Eligibility tightened around <strong>program type</strong>, <strong>field-of-study</strong> (many college
                routes), <strong>language proof</strong> where required, and <strong>status continuity</strong>. Build your
                file like an officer will read it in one sitting: transcripts, completion letters, and permit history in
                one coherent story.
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
            title="What is the PGWP?"
            description={
              <p>
                The Post-Graduation Work Permit is an open work permit issued to eligible graduates of Canadian designated
                learning institutions. Length and eligibility depend on program, compliance, and current IRCC instructions
                — not on hope.
              </p>
            }
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {foundationCards.map((c) => (
              <div key={c.title} className="card-pro grad-border relative flex flex-col p-6 md:p-7">
                <h3 className="text-lg font-bold leading-snug text-sm-gray-900">{c.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-sm-gray-700">{c.body}</p>
                {"href" in c && c.href ? (
                  <Link className="mt-4 text-sm font-semibold text-sm-teal-dark underline underline-offset-2" href={c.href}>
                    {c.linkLabel}
                  </Link>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="eligibility" className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="2026 RULES"
            title="PGWP eligibility snapshot"
            description={
              <p>
                You must complete an eligible program at a DLI, maintain valid study status where required, and apply within
                180 days of completing program requirements. University graduates should plan for CLB 7 language proof
                when instructions demand it. College graduates must cross-check field-of-study eligibility lists — non-eligible
                credentials may yield refusals.
              </p>
            }
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {eligibilityCards.map((c) => (
              <div key={c.title} className="card-pro grad-border relative flex flex-col p-6 md:p-7">
                <h3 className="text-lg font-bold text-sm-gray-900">{c.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-sm-gray-700">{c.body}</p>
                {"href" in c && c.href ? (
                  <Link className="mt-4 text-sm font-semibold text-sm-teal-dark underline underline-offset-2" href={c.href}>
                    {c.linkLabel}
                  </Link>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="duration"
        className="scroll-mt-28 border-t border-sm-gray-200/80 bg-sm-off-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="LENGTH"
            title="PGWP duration"
            description={
              <p>
                Validity generally mirrors the length of your study program, capped at three years for longer degrees.
                Combined program rules exist — document every credential carefully.
              </p>
            }
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {durationCards.map((c) => (
              <div key={c.title} className="card-pro grad-border p-6 md:p-7">
                <h3 className="text-lg font-bold text-sm-gray-900">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="TIMING"
            title="When and how to apply"
            description={
              <p>
                Apply online within 180 days of receiving written completion while maintaining status or transitioning per
                IRCC instructions. Late applications are a top preventable loss.
              </p>
            }
          />
          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div className="rounded-2xl border border-sm-gray-100 bg-sm-off-white/80 p-6 shadow-sm md:p-7">
              <h3 className="text-lg font-bold text-sm-gray-900">Application spine</h3>
              <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">
                Digital forms, biometrics reuse in some cases, transcripts, completion letters, and language uploads when
                triggered. Our RCIC partner manages legal strategy; we keep education documents aligned.
              </p>
            </div>
            <div className="rounded-2xl border border-sm-gray-100 bg-white p-6 shadow-sm md:p-7">
              <h3 className="text-lg font-bold text-sm-gray-900">Checklist</h3>
              <ul className="mt-4 space-y-2 text-sm text-sm-gray-700">
                {applyChecklist.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sm-teal" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative mt-10 overflow-hidden rounded-2xl border border-sm-teal/20 bg-gradient-to-br from-sm-teal/5 via-white to-sm-orange/5 p-6 shadow-[0_12px_40px_-12px_rgba(30,90,165,0.18)] md:p-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sm-teal/10 via-transparent to-transparent" />
            <p className="relative text-sm font-medium text-sm-gray-800 md:text-base">
              After PGWP: map work to PR options in{" "}
              <Link className="font-bold text-sm-teal-dark underline underline-offset-2" href="/international/pathways-to-pr">
                Pathways to PR
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <div id="journey" className="scroll-mt-28">
        <StepList
          eyebrow="PROCESS"
          title="From program choice to PR-ready work"
          subtitle="High-level sequencing — always verify IRCC instructions for your credential and intake."
          steps={pgwpJourney}
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
            title="Common PGWP mistakes"
            description={<p>Fix these early — they are cheaper than refiling or rebuilding a study narrative.</p>}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {mistakeCards.map((m) => (
              <div key={m.title} className="rounded-2xl border border-sm-gray-100 bg-white p-6 shadow-sm">
                <p className="font-bold text-sm-gray-900">{m.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">{m.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-sm-gray-600">
            Related:{" "}
            <Link className="font-semibold text-sm-teal-dark underline" href="/international/pathways-to-pr">
              Pathways to PR
            </Link>{" "}
            ·{" "}
            <Link className="font-semibold text-sm-teal-dark underline" href="/international/universities">
              Universities
            </Link>{" "}
            ·{" "}
            <Link className="font-semibold text-sm-teal-dark underline" href="/international/colleges">
              Colleges
            </Link>
            .
          </p>
        </div>
      </section>

      <div
        id="faqs"
        className="scroll-mt-28 border-t border-sm-gray-200 bg-gradient-to-b from-white via-sm-off-white/50 to-white"
      >
        <TabbedFaq
          sectionPaddingClassName="py-14 md:py-16"
          title="PGWP & next-step questions"
          subtitle="Grounded in how graduates actually move from study to work — verify IRCC for your program and intake."
          tabs={[
            {
              id: "pgwp",
              label: "PGWP & timing",
              faqs: [INTL_FAQS[10], INTL_FAQS[14], INTL_FAQS[17]],
            },
            {
              id: "compliance",
              label: "Work & DLI",
              faqs: [INTL_FAQS[6], INTL_FAQS[16], INTL_FAQS[4]],
            },
            {
              id: "path",
              label: "PR & support",
              faqs: [INTL_FAQS[19], INTL_FAQS[15], INTL_FAQS[13]],
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
