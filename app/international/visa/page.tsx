import Link from "next/link";
import { buildMetadata } from "@/lib/metadata-helpers";
import { SITE } from "@/lib/site";
import { UNSPLASH } from "@/lib/media/unsplash";
import { INTL_FAQS } from "@/lib/data/intl-faqs";
import { intlBannerVisa } from "@/lib/data/intl-guide-banner-presets";
import { InternationalGuideBanner } from "@/components/sections/international-guide-banner";
import { TrustBar } from "@/components/sections/trust-bar";
import { InPageNav } from "@/components/sections/in-page-nav";
import { StepList } from "@/components/sections/step-list";
import { TabbedFaq } from "@/components/sections/tabbed-faq";
import { RcicDisclaimer } from "@/components/sections/rcic-disclaimer";
import { CtaBlock } from "@/components/sections/cta-block";
import { InternationalSectionTitle } from "@/components/sections/international-section-title";
import { AlertTriangle } from "lucide-react";

export const metadata = buildMetadata({
  title: "Canada Study Permit Requirements (2026 PAL & GIC)",
  description:
    "Study permit guide: PAL since Jan 2024, $22,895 GIC Sept 2025, SDS ended Nov 2024, refusal reasons, biometrics. Education help in Toronto & the GTA; RCIC filings via Visa Master Canada.",
  path: "/international/visa",
});

const permitJourneySteps = [
  {
    number: "01",
    title: "DLI offer + PAL",
    description:
      "Secure a genuine acceptance and provincial attestation when your stream requires it — without a valid PAL, many files never get past completeness checks.",
  },
  {
    number: "02",
    title: "Proof of funds + GIC",
    description:
      "Model liquid history, GIC at the current floor, and tuition pathway so the financial story matches your bank records — not a last-minute lump sum.",
  },
  {
    number: "03",
    title: "Biometrics + medical",
    description:
      "Book biometrics as soon as IRCC instructs you. Medicals follow country and program rules; delays here shrink your intake runway.",
  },
  {
    number: "04",
    title: "File + officer outcome",
    description:
      "Standard-stream processing after SDS ended Nov 2024. Refusals get GCMS-style themes — fix evidence before you refile or escalate with regulated counsel.",
  },
];

const refusalReasons = [
  { title: "Ties to home country", body: "Officers compare property, family, employment, and travel history. Thin ties need honest context-not forged assets." },
  { title: "Inadequate funds", body: "GIC alone may not rescue weak tuition liquidity. Show legitimate sources and history, not last-minute lump sums." },
  { title: "Genuine intent concerns", body: "Program fit must align with prior academics; random pivots trigger interviews." },
  { title: "Document issues", body: "Translations, notarization, and name spelling must match biometric passports." },
  { title: "Academic gaps", body: "Explain gap years with evidence-work, caregiving, health, repeat exams." },
  { title: "Program fit", body: "A computer science admit with zero math background raises questions." },
  { title: "Country-specific risks", body: "Some posts apply heightened scrutiny; files must be cleaner, not louder." },
];

const permitMistakeCards = [
  {
    title: "PAL optional thinking",
    body: "When your stream requires a Provincial Attestation Letter, missing it returns incomplete files — confirm with your DLI before you pay deposits.",
  },
  {
    title: "GIC-only funds story",
    body: "A correct GIC certificate does not replace weak tuition liquidity or unexplained large deposits in bank history.",
  },
  {
    title: "Biometrics procrastination",
    body: "Appointment scarcity is real — book the moment IRCC instructs you or you shrink runway before class start.",
  },
  {
    title: "Program fit hand-waving",
    body: "Random pivots far from prior academics trigger intent questions — align narrative, SOP, and transcripts.",
  },
] as const;

const keyFacts = [
  { label: "Who issues permits", value: "IRCC (Immigration, Refugees and Citizenship Canada)" },
  { label: "PAL in effect", value: "Since Jan 22, 2024 (provincial allocation)" },
  { label: "Typical files include", value: "Passport, DLI letter, funds, biometrics, medical (if listed)" },
  { label: "Our role vs RCIC", value: "SMC: education evidence · Visa Master Canada: regulated filings when retained" },
];

export default function VisaPage() {
  return (
    <main>
      <InternationalGuideBanner
        eyebrow="STUDY PERMIT"
        title="Canada study permit — clear lanes for 2026"
        lead="We prepare education-side credibility: program fit, finances narrative, and document discipline. Visa Master Canada, our licensed RCIC partner in the same office, handles regulated immigration submissions when you retain them."
        body={
          <>
            Policy moves fast after the SDS shutdown (Nov 2024) and provincial PAL systems — plan for deeper scrutiny, not
            shortcut marketing.             For the full 2026 policy picture, read{" "}
            <Link className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white" href="/international/study-in-canada">
              Why Canada — 2026 snapshot
            </Link>
            . Layer{" "}
            <Link className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white" href="/international/admissions">
              admissions evidence
            </Link>{" "}
            and{" "}
            <Link className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white" href="/international/cost">
              cost realism
            </Link>{" "}
            before you file.
          </>
        }
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Study in Canada", href: "/international" },
          { label: "Study permit" },
        ]}
        primaryCta={{
          label: "Book Free 20-Min Call",
          href: SITE.contactFormUrl,
        }}
        secondaryCta={{ label: "GIC requirements", href: "/international/gic" }}
        stats={intlBannerVisa}
        heroImage={UNSPLASH.visaPassport}
        asideTitle="Permit snapshot"
        metaItems={[
          "Education evidence · Study Master Canada",
          "Regulated filings · Visa Master Canada (RCIC)",
          `${SITE.office.city}, ON office`,
          SITE.hours,
        ]}
      />

      <TrustBar />

      <InPageNav
        items={[
          { label: "2026 policy", href: "#policy-2026", badge: "NEW" },
          { label: "Roles", href: "#roles" },
          { label: "Requirements", href: "#requirements" },
          { label: "Refusals", href: "#refusals" },
          { label: "After refusal", href: "#after-refusal" },
          { label: "Bio & medical", href: "#bio-medical" },
          { label: "Mistakes", href: "#mistakes" },
          { label: "Journey", href: "#journey" },
          { label: "FAQs", href: "#faqs" },
        ]}
        cta={{ label: "Book call", href: SITE.contactFormUrl }}
      />

      <section
        id="policy-2026"
        className="scroll-mt-28 border-t border-sm-gray-200/80 bg-sm-off-white py-8 md:py-10"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-col gap-4 rounded-2xl border border-sm-orange/30 bg-gradient-to-r from-sm-orange/12 via-white to-sm-off-white/40 p-5 shadow-sm md:flex-row md:items-start md:gap-5 md:p-6">
            <AlertTriangle className="h-8 w-8 shrink-0 text-sm-orange" aria-hidden />
            <div>
              <p className="font-bold text-sm-gray-900">What changed heading into 2026</p>
              <p className="mt-1 text-sm leading-relaxed text-sm-gray-700 md:text-base">
                The <strong>SDS stream ended November 8, 2024</strong> — files now follow standard streams with variable
                processing by country. The <strong>national study permit cap for 2025 was 437,000</strong> new permits;
                provinces ration PAL-backed study spots — start offers and deposits early. The{" "}
                <strong>GIC minimum rose to CAD $22,895 effective September 1, 2025</strong>. Always confirm current IRCC
                instructions before you pay banks or submit forms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="roles"
        className="scroll-mt-28 border-t border-sm-gray-200/80 bg-sm-off-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="THE SPLIT"
            title="What Study Master Canada handles vs Visa Master Canada (RCIC)"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
            <div className="rounded-2xl border border-sm-gray-200 bg-white p-6 shadow-sm md:p-7">
              <h3 className="text-lg font-bold text-sm-gray-900">Study Master Canada</h3>
              <p className="mt-3 text-sm leading-relaxed text-sm-gray-700 md:text-base">
                Program shortlisting, admissions packaging, financial planning narratives, English test sequencing,
                pre-departure logistics, and document organization so your education story matches what IRCC sees.
              </p>
            </div>
            <div className="rounded-2xl border border-sm-gray-200 bg-white p-6 shadow-sm md:p-7">
              <h3 className="text-lg font-bold text-sm-gray-900">Visa Master Canada (RCIC)</h3>
              <p className="mt-3 text-sm leading-relaxed text-sm-gray-700 md:text-base">
                Study permit and visa strategy, forms, GCMS interpretation where available, reconsiderations within legal
                scope, spouse open work permit eligibility, and PR pathway advice — when you retain them as your
                regulated representative.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-sm-gray-200 bg-white p-5 shadow-sm md:p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">KEY FACTS · STUDY PERMIT</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
              {keyFacts.map((r) => (
                <div
                  key={r.label}
                  className="flex flex-col gap-0.5 rounded-xl border border-sm-gray-100 bg-sm-off-white/80 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="text-sm text-sm-gray-600">{r.label}</span>
                  <span className="text-sm font-bold text-sm-gray-900 sm:text-right">{r.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="requirements" className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl space-y-8 px-6 text-sm leading-relaxed text-sm-gray-700 md:px-10 md:text-base">
          <InternationalSectionTitle
            label="FILE BASICS"
            title="Study permit requirements for 2026"
            description={
              <p className="text-sm-gray-700">
                Expect a valid passport, PAL when required, DLI acceptance letter, proof of funds (commonly CAD $22,895
                GIC effective Sept 1, 2025, plus tuition pathway), biometrics, and any country-specific medical exams.
                Provincial Attestation Letters tie your study permit to provincial allocation — institutions explain how
                PALs are issued for each intake. Missing PALs when required yield incomplete applications.
              </p>
            }
          />

          <div className="grid gap-8 md:grid-cols-2">
            <div className="card-pro grad-border p-6 md:p-7">
              <h3 className="text-xl font-bold text-sm-gray-900">Proof of funds</h3>
              <p className="mt-3">
                IRCC expects credible evidence you can pay tuition, living expenses, and travel for yourself and
                accompanying family members. The GIC minimum is one pillar — not a substitute for coherent banking
                history.
              </p>
            </div>
            <div className="card-pro grad-border p-6 md:p-7">
              <h3 className="text-xl font-bold text-sm-gray-900">Processing times</h3>
              <p className="mt-3">
                IRCC publishes rolling estimates by country. India, Nigeria, and high-volume posts may stretch during
                September peaks. Book biometrics the moment you receive the instruction letter — appointment scarcity is
                a real bottleneck.
              </p>
            </div>
          </div>

          <div className="rounded-r-lg border-l-4 border-sm-teal bg-gradient-to-r from-sm-teal-light/60 to-sm-off-white p-4 text-sm leading-relaxed text-sm-gray-800 md:p-5">
            <strong>Remember:</strong> SDS is inactive. Marketing that promises “fast SDS” is outdated. Standard stream
            rules apply — plan for longer queues and deeper financial scrutiny by post.
          </div>
        </div>
      </section>

      <section
        id="refusals"
        className="scroll-mt-28 border-t border-sm-gray-200/80 bg-sm-off-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="OFFICER LOGIC"
            title="Common refusal themes"
            description={
              <p className="text-sm-gray-700">
                Refusals usually cite one or more of these — your GCMS notes should map to concrete fixes, not generic
                rewrites.
              </p>
            }
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {refusalReasons.map((r) => (
              <div key={r.title} className="rounded-2xl border border-sm-gray-100 bg-white p-5 shadow-sm">
                <p className="font-semibold text-sm-gray-900">{r.title}</p>
                <p className="mt-2 text-sm text-sm-gray-700">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="after-refusal" className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10 text-sm leading-relaxed text-sm-gray-700 md:text-base">
          <InternationalSectionTitle
            label="NEXT STEPS"
            title="If you are refused"
            description={
              <p className="text-sm-gray-700">
                Read the GCMS-style reasons carefully. Sometimes the fix is better financial evidence; sometimes it is a
                different program level; sometimes it is regulated representation for a refile or judicial review. We
                coordinate education fixes; Visa Master Canada advises on immigration law options when retained.
              </p>
            }
          />
        </div>
      </section>

      <section
        id="bio-medical"
        className="scroll-mt-28 border-t border-sm-gray-200/80 bg-sm-off-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 text-sm leading-relaxed text-sm-gray-700 md:text-base">
          <InternationalSectionTitle
            label="SCREENINGS"
            title="Biometrics and medical exams"
            description={
              <p className="text-sm-gray-700">
                Biometrics appointments fill quickly — book early. Medical exams depend on country of residence and
                intended length of stay; follow IRCC instructions tied to your profile.
              </p>
            }
          />
        </div>
      </section>

      <section id="mistakes" className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="PITFALLS"
            title="Common study-permit filing mistakes"
            description={
              <p className="text-sm-gray-700">
                These sit beside refusal themes — fix them on first file where possible; refills cost months.
              </p>
            }
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {permitMistakeCards.map((m) => (
              <div key={m.title} className="rounded-2xl border border-sm-gray-100 bg-sm-off-white p-6 shadow-sm">
                <p className="font-bold text-sm-gray-900">{m.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="journey" className="scroll-mt-28">
        <StepList
          eyebrow="PROCESS"
          title="Study permit spine — how the pieces lock together"
          subtitle="Every case differs, but officers reward the same sequence: genuine offer, credible funds, clean biometrics, coherent narrative."
          steps={permitJourneySteps}
          sectionClassName="section-pro section-pro-bg-stripe border-t border-sm-gray-200/80"
          columns={4}
        />
      </div>

      <div
        id="faqs"
        className="scroll-mt-28 border-t border-sm-gray-200 bg-gradient-to-b from-white via-sm-off-white/50 to-white"
      >
        <TabbedFaq
          sectionPaddingClassName="py-14 md:py-16"
          title="Study permit questions"
          subtitle="Answers grounded in current public guidance — verify IRCC for your country and intake before you pay fees."
          tabs={[
            {
              id: "basics",
              label: "Permit basics",
              faqs: [INTL_FAQS[16], INTL_FAQS[3], INTL_FAQS[2], INTL_FAQS[5]],
            },
            {
              id: "funds",
              label: "Funds & GIC",
              faqs: [INTL_FAQS[1], INTL_FAQS[7], INTL_FAQS[0]],
            },
            {
              id: "refusal",
              label: "Refusals & help",
              faqs: [INTL_FAQS[8], INTL_FAQS[15]],
            },
            {
              id: "work-family",
              label: "Work & family",
              faqs: [INTL_FAQS[6], INTL_FAQS[9]],
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
