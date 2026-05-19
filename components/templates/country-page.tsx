import Link from "next/link";
import type { SourceCountry } from "@/lib/data/source-countries";
import { UNSPLASH } from "@/lib/media/unsplash";
import { SITE } from "@/lib/site";
import { InternationalGuideBanner } from "@/components/sections/international-guide-banner";
import { RcicDisclaimer } from "@/components/sections/rcic-disclaimer";
import { CtaBlock } from "@/components/sections/cta-block";
import { TabbedFaq, type TabbedFaqItem } from "@/components/sections/tabbed-faq";
import { InternationalSectionTitle } from "@/components/sections/international-section-title";

type CountryPageProps = {
  country: SourceCountry;
};

export function CountryPageTemplate({ country }: CountryPageProps) {
  const months = Array.from({ length: country.timelineMonths }, (_, i) => i + 1);

  const faqs: TabbedFaqItem[] = [
    {
      question: `What makes Canadian study permit files different for ${country.name} applicants?`,
      answer: `${country.keyNote} Our Toronto & GTA team stress-tests financial evidence, academic continuity, and program fit before anything is submitted to IRCC.`,
    },
    {
      question: `How long should ${country.name} families plan from first call to arrival?`,
      answer: `Most students targeting a major September intake should assume roughly ${country.timelineMonths} months end-to-end when English testing, PAL-backed offers, GIC purchase, and biometrics are sequenced responsibly. Starting late compresses margins-book early.`,
    },
    {
      question: `Which English tests should ${country.name} students prioritize?`,
      answer: `Common choices include ${country.commonTests.join(", ")}. The right test is whichever your target institutions accept at the program level-and whichever timeline matches your PGWP planning if you are heading toward graduate school.`,
    },
  ];

  return (
    <main>
      <InternationalGuideBanner
        eyebrow={`FROM ${country.name.toUpperCase()}`}
        title={`Study in Canada — guidance built for ${country.name} students`}
        lead={`Ranked #${country.rank} among Canada’s top source countries in 2024.`}
        body={country.keyNote}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Study in Canada", href: "/international" },
          { label: country.name },
        ]}
        primaryCta={{
          label: "Book Free 20-Min Call",
          href: SITE.contactFormUrl,
        }}
        secondaryCta={{
          label: "International hub",
          href: "/international",
        }}
        asideTitle={`${country.name} · snapshot`}
        heroImage={UNSPLASH.studentsGroup}
        stats={[
          { value: `#${country.rank}`, label: "2024 source-country rank" },
          { value: `${country.timelineMonths} mo`, label: "Typical planning horizon" },
          { value: country.commonTests[0] ?? "IELTS", label: "Common English tests" },
          { value: "Standard", label: "Post-SDS stream (Nov 2024)" },
        ]}
      />

      <section className="section-pro border-t border-sm-gray-200/80">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="OVERVIEW"
            title={`Why Canada for ${country.name} students?`}
          />
          <div className="mt-6 w-full max-w-none space-y-4 text-sm leading-relaxed text-sm-gray-700 md:text-base">
            <p>{country.keyNote}</p>
            <p>
              Canada welcomed 997,820 international students by the end of 2024.
              Policy settings in 2025–2026 emphasize credible financing, PAL
              compliance, and genuine academic intent-especially after the SDS
              discontinuation in November 2024.
            </p>
            <p>
              Study Master Canada is not an offshore factory. We work from our
              Greater Toronto Area office at 83 Kennedy Road South, Brampton, ON,
              with document discipline modeled on what actually succeeds at
              Canadian visa posts for {country.name} applicants.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pro section-pro-bg-soft border-t border-sm-gray-200">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="POPULAR"
            title={`Popular programs for ${country.name} students`}
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {country.popularPrograms.map((p) => (
              <div
                key={p}
                className="card-pro grad-border p-5 text-sm font-semibold text-sm-gray-900"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-sm-gray-200/80 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle label="DESTINATIONS" title="Popular Canadian destinations" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {country.popularDestinations.map((d) => (
              <div
                key={d}
                className="rounded-2xl border border-sm-gray-100 bg-white p-5 shadow-sm"
              >
                <p className="font-semibold text-sm-gray-900">{d}</p>
                <p className="mt-2 text-sm text-sm-gray-700">
                  Explore provinces from the{" "}
                  <Link className="text-sm-teal-dark underline" href="/international">
                    international hub
                  </Link>
                  .
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-sm-gray-200 bg-sm-gray-50 py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle label="DOCUMENTS" title="Documents you will need" />
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-sm-gray-100 bg-white p-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-sm-teal-dark">
                General checklist
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-sm-gray-700">
                <li>Valid passport biometrics page</li>
                <li>Provincial Attestation Letter (PAL) when required</li>
                <li>Letter of acceptance from a DLI</li>
                <li>Proof of funds (often GIC CAD $22,895 + tuition pathway)</li>
                <li>English proficiency results aligned to program minima</li>
                <li>Academic transcripts and degree certificates</li>
                <li>Digital photo and biometrics appointment confirmation</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-sm-gray-100 bg-white p-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-sm-orange-dark">
                {country.name}-specific notes
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-sm-gray-700">
                {country.documentNotes}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-sm-gray-700">
                Intake preference: {country.intakePreference}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-sm-gray-200/80 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="TIMELINE"
            title={`Typical timeline from ${country.name}`}
            description={
              <p className="text-sm-gray-700">
                Month cards are a planning scaffold-not a guarantee. IRCC processing fluctuates; English test seats disappear
                in peak season; PAL issuance depends on your institution and province.
              </p>
            }
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {months.map((m) => (
              <div
                key={m}
                className="rounded-2xl border border-sm-gray-100 bg-white p-5 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-sm-gray-500">
                  Month {m}
                </p>
                <p className="mt-2 text-sm text-sm-gray-800">
                  {m <= 2
                    ? "Counselling, program shortlist, English test booking."
                    : m <= 4
                      ? "Applications, transcripts, referee outreach, offer strategy."
                      : m <= 6
                        ? "Offer acceptance, tuition deposit planning, GIC purchase."
                        : m <= 8
                          ? "PAL coordination, RCIC-led study permit prep, biometrics."
                          : "Pre-departure logistics, housing, banking appointments."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-sm-gray-200 bg-gradient-to-b from-white via-sm-off-white/50 to-white">
        <TabbedFaq
          sectionPaddingClassName="py-14 md:py-16"
          title={`Common questions from ${country.name} students`}
          subtitle="Short, practical answers before you commit to a program."
          tabs={[
            { id: "basics", label: "Basics", faqs: [faqs[0]] },
            { id: "timeline", label: "Timeline", faqs: [faqs[1]] },
            { id: "english", label: "English tests", faqs: [faqs[2]] },
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
