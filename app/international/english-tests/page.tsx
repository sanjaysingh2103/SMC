import Link from "next/link";
import { buildMetadata } from "@/lib/metadata-helpers";
import { SITE } from "@/lib/site";
import { UNSPLASH } from "@/lib/media/unsplash";
import { ENGLISH_TESTS } from "@/lib/data/english-tests";
import { INTL_FAQS } from "@/lib/data/intl-faqs";
import { InternationalGuideBanner } from "@/components/sections/international-guide-banner";
import { intlBannerEnglishTests } from "@/lib/data/intl-guide-banner-presets";
import { TrustBar } from "@/components/sections/trust-bar";
import { InPageNav } from "@/components/sections/in-page-nav";
import { StepList } from "@/components/sections/step-list";
import { TabbedFaq } from "@/components/sections/tabbed-faq";
import { RcicDisclaimer } from "@/components/sections/rcic-disclaimer";
import { CtaBlock } from "@/components/sections/cta-block";
import { InternationalSectionTitle } from "@/components/sections/international-section-title";
import { Info } from "lucide-react";

export const metadata = buildMetadata({
  title: "IELTS, TOEFL, PTE & Duolingo for Canadian DLIs | Study Master Canada",
  description:
    "Compare IELTS Academic, TOEFL iBT, PTE Academic, and Duolingo for Canadian college & university admissions. Score bands, fees, retakes, CLB 7 / PGWP notes. GTA counselling — align tests with program pages before you book.",
  path: "/international/english-tests",
});

const foundationCards = [
  {
    title: "Program page is law",
    body: "Scholarship and faculty lines can demand higher subscores than general admission — screenshot the official PDF before you pay a test fee.",
    href: "/international/programs",
    linkLabel: "Program search",
  },
  {
    title: "One retake window",
    body: "Book your first date so a single retake still clears your earliest deadline — September cohorts exhaust IELTS and PTE slots worldwide.",
    href: "/international/admissions",
    linkLabel: "Admissions calendar",
  },
  {
    title: "Dual-use scores",
    body: "University graduates should track PGWP-related language expectations — admissions tests and later work-permit evidence can overlap.",
    href: "/international/pgwp",
    linkLabel: "PGWP guide",
  },
] as const;

const mistakeCards = [
  {
    title: "Booking the wrong test variant",
    body: "IELTS Academic vs General Training, at-home vs centre — wrong SKU wastes money and weeks.",
  },
  {
    title: "Ignoring subscore floors",
    body: "Overall 7.0 with speaking 5.5 can still fail health or teaching lines — read every band line.",
  },
  {
    title: "Letting scores expire",
    body: "Two-year validity is common — align expiry with permit and intake, not just offer letters.",
  },
  {
    title: "Name mismatch on send",
    body: "Passport spelling must match score reports and portals — fix before you pay.",
  },
] as const;

const testJourneySteps = [
  {
    number: "01",
    title: "Program page first",
    description:
      "Pull the official English requirement from your target program — not the faculty homepage. Scholarship rules may demand higher subscores than general admission.",
  },
  {
    number: "02",
    title: "Book with runway",
    description:
      "September cohorts exhaust IELTS and PTE slots worldwide — reserve a date that leaves one retake window before your earliest deadline.",
  },
  {
    number: "03",
    title: "Send scores cleanly",
    description:
      "INST codes, portal uploads, and validity windows (often two years for IELTS) must match the name on your passport.",
  },
  {
    number: "04",
    title: "Reuse for PGWP thinking",
    description:
      "University graduates should track CLB 7-style language expectations referenced in PGWP materials — admissions scores and future work-permit evidence can overlap.",
  },
];

export default function EnglishTestsPage() {
  return (
    <main>
      <InternationalGuideBanner
        eyebrow="ENGLISH TESTS"
        title="English tests — pick the right door, not the cheapest seat."
        lead="Canada accepts multiple tests, but your DLI picks the menu. We align score targets with admissions, scholarships, and PGWP language expectations."
        body={
          <>
            Book tests early — September intake cohorts exhaust IELTS seats worldwide. One Skill Retake (IELTS) or PTE slot
            discipline can save thousands versus panic retakes. Tie scores to your{" "}
            <Link
              className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
              href="/international/programs"
            >
              program shortlist
            </Link>{" "}
            and{" "}
            <Link
              className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
              href="/international/admissions"
            >
              admissions calendar
            </Link>
            .
          </>
        }
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Study in Canada", href: "/international" },
          { label: "English tests" },
        ]}
        primaryCta={{
          label: "Book Free 20-Min Call",
          href: SITE.contactFormUrl,
        }}
        secondaryCta={{ label: "Admissions support", href: "/international/admissions" }}
        stats={intlBannerEnglishTests}
        heroImage={UNSPLASH.libraryStudy}
        asideTitle="Testing · snapshot"
        metaItems={[
          "Score targets per DLI program page",
          `${SITE.office.city}, ON · ${SITE.hours}`,
          "Admissions coaching · Study Master Canada",
          "Study permits · Visa Master Canada (RCIC) when retained",
        ]}
      />

      <TrustBar />

      <InPageNav
        items={[
          { label: "2026 context", href: "#context-2026", badge: "NEW" },
          { label: "Basics", href: "#basics" },
          { label: "Compare tests", href: "#compare" },
          { label: "Strategy", href: "#strategy" },
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
              <p className="font-bold text-sm-gray-900">The test you like ≠ the test your program accepts</p>
              <p className="mt-1 text-sm leading-relaxed text-sm-gray-700 md:text-base">
                Duolingo is convenient but not universal; TOEFL dominates some faculties while colleges publish PTE bands.
                Institution lists change — always screenshot the{" "}
                <strong>program-level</strong> requirement before you pay a non-refundable test fee. Leave enough runway for
                a single retake without blowing your{" "}
                <Link className="font-semibold text-sm-teal-dark underline" href="/international/visa">
                  study permit
                </Link>{" "}
                timeline.
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
            title="How to pick and time your English test"
            description={
              <p>
                The test you like is not always the test your DLI accepts. Start from the program requirement, then work
                backwards through booking, retakes, and portal uploads.
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

      <section id="compare" className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="overflow-x-auto">
            <InternationalSectionTitle
              label="COMPARISON"
              title="Tests at a glance"
              description={
                <p className="text-sm-gray-600">
                  Fees and formats shift — confirm on the official test operator site before you pay. Typical ranges are
                  illustrative, not admission guarantees.
                </p>
              }
            />
            <table className="mt-8 min-w-[900px] w-full border-collapse overflow-hidden rounded-2xl border border-sm-gray-200 bg-white text-sm shadow-sm">
              <thead className="bg-sm-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-sm-gray-600">
                <tr>
                  <th className="px-4 py-3">Test</th>
                  <th className="px-4 py-3">Format</th>
                  <th className="px-4 py-3">Accepted by</th>
                  <th className="px-4 py-3">Typical score</th>
                  <th className="px-4 py-3">Fee</th>
                  <th className="px-4 py-3">Notes</th>
                </tr>
              </thead>
              <tbody>
                {ENGLISH_TESTS.map((t) => (
                  <tr key={t.id} className="border-t border-sm-gray-100">
                    <td className="px-4 py-4 font-semibold text-sm-gray-900">{t.name}</td>
                    <td className="px-4 py-4 text-sm-gray-700">{t.format}</td>
                    <td className="px-4 py-4 text-sm-gray-700">{t.acceptingInstitutions}</td>
                    <td className="px-4 py-4 text-sm-gray-700">{t.typicalScores}</td>
                    <td className="px-4 py-4 text-sm-gray-700">{t.fee}</td>
                    <td className="px-4 py-4 text-sm-gray-700">{t.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-sm-gray-500 md:hidden">
            Swipe horizontally to see the full comparison table.
          </p>
        </div>
      </section>

      <section id="strategy" className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl space-y-10 px-6 text-sm leading-relaxed text-sm-gray-700 md:px-10 md:text-base">
          <InternationalSectionTitle
            label="STRATEGY"
            title="Which test does your target school accept?"
            description={
              <p className="text-sm-gray-600">
                Start at the <strong>program</strong> page — not the main university homepage. Some faculties accept
                Duolingo while others insist on IELTS Academic. Scholarship committees may impose higher subscores than
                general admission.
              </p>
            }
          />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-pro grad-border p-6 shadow-sm md:p-7">
              <h3 className="text-lg font-extrabold text-sm-gray-900">Typical score requirements by level</h3>
              <p className="mt-3 text-sm leading-relaxed md:text-base">
                <span className="font-semibold text-sm-gray-800">College diplomas:</span> IELTS 6.0+ bands common; some
                health programs demand higher speaking scores.
                <br />
                <br />
                <span className="font-semibold text-sm-gray-800">Undergraduate degrees:</span> IELTS 6.5 overall frequent;
                competitive majors push to 7.0+.
                <br />
                <br />
                <span className="font-semibold text-sm-gray-800">Graduate coursework:</span> IELTS 6.5–7.5 or PTE 65+
                ranges appear often; verify faculty notes.
              </p>
            </div>
            <div className="card-pro grad-border p-6 shadow-sm md:p-7">
              <h3 className="text-lg font-extrabold text-sm-gray-900">Self-study vs coaching</h3>
              <p className="mt-3 text-sm leading-relaxed md:text-base">
                Self-study works when you are close to target and only need timing discipline. Coaching helps when writing
                and speaking scores lag despite strong reading. Budget for at least one official mock speaking session
                before expensive retakes.
              </p>
            </div>
            <div className="card-pro grad-border p-6 shadow-sm md:p-7">
              <h3 className="text-lg font-extrabold text-sm-gray-900">Retake policies</h3>
              <p className="mt-3 text-sm leading-relaxed md:text-base">
                IELTS One Skill Retake is available in many Canadian centres — useful if only one band failed. Duolingo
                allows frequent attempts but institutions may freeze the highest valid score from a date window.
              </p>
            </div>
            <div className="card-pro grad-border p-6 shadow-sm md:p-7">
              <h3 className="text-lg font-extrabold text-sm-gray-900">CLB 7 and PGWP</h3>
              <p className="mt-3 text-sm leading-relaxed md:text-base">
                University graduates should pay attention to CLB 7 language expectations referenced in PGWP policy
                materials. Treat English testing as a dual-use asset: admissions today, work permit eligibility tomorrow.
                Deep dive:{" "}
                <Link className="font-semibold text-sm-teal-dark underline" href="/international/pgwp">
                  PGWP guide
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <div id="journey" className="scroll-mt-28">
        <StepList
          eyebrow="PROCESS"
          title="From requirement PDF to valid score report"
          subtitle="No substitute for reading the program fine print — then we help you sequence booking, retakes, and portal uploads."
          steps={testJourneySteps}
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
            title="Common English-test mistakes"
            description={<p>Preventable errors burn money and narrow your permit runway — fix them in the planning stage.</p>}
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

      <div className="border-t border-sm-gray-200 bg-gradient-to-b from-white to-sm-off-white/40 py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <p className="text-center text-sm leading-relaxed text-sm-gray-700 md:text-base">
            Build the rest of the file in parallel:{" "}
            <Link className="font-bold text-sm-teal-dark underline underline-offset-2" href="/international/admissions">
              admissions documents
            </Link>
            {" · "}
            <Link className="font-bold text-sm-teal-dark underline underline-offset-2" href="/international/sop">
              SOP coaching
            </Link>
            {" · "}
            <Link className="font-bold text-sm-orange-dark underline underline-offset-2" href="/international/gic">
              GIC & funds
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
          title="Pathway questions linked to English testing"
          subtitle="Reading, timing, and credibility — the same themes that show up when DLIs and officers review your file."
          tabs={[
            {
              id: "timing",
              label: "Planning & timing",
              faqs: [INTL_FAQS[14], INTL_FAQS[5]],
            },
            {
              id: "fit",
              label: "Programs & readiness",
              faqs: [INTL_FAQS[4], INTL_FAQS[12], INTL_FAQS[16]],
            },
            {
              id: "pathways",
              label: "Transfers & PGWP",
              faqs: [INTL_FAQS[11], INTL_FAQS[10]],
            },
            {
              id: "support",
              label: "Counselling & awards",
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
