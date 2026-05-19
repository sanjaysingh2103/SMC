import Link from "next/link";
import { buildMetadata } from "@/lib/metadata-helpers";
import { SITE } from "@/lib/site";
import { UNSPLASH } from "@/lib/media/unsplash";
import { INTL_FAQS } from "@/lib/data/intl-faqs";
import { InternationalGuideBanner } from "@/components/sections/international-guide-banner";
import { intlBannerCost } from "@/lib/data/intl-guide-banner-presets";
import { TrustBar } from "@/components/sections/trust-bar";
import { InPageNav } from "@/components/sections/in-page-nav";
import { StepList } from "@/components/sections/step-list";
import { TabbedFaq } from "@/components/sections/tabbed-faq";
import { RcicDisclaimer } from "@/components/sections/rcic-disclaimer";
import { CtaBlock } from "@/components/sections/cta-block";
import { InternationalSectionTitle } from "@/components/sections/international-section-title";
import { Info } from "lucide-react";

export const metadata = buildMetadata({
  title: "Cost of Studying in Canada 2026 (Tuition, Rent & GIC) | Study Master Canada",
  description:
    "2026 planning bands: international tuition tiers, monthly living costs in 8 cities, one-time settlement spend, and IRCC GIC minimum CAD $22,895 (Sept 1, 2025). Separate lifestyle budgets from proof-of-funds. Toronto & GTA; link to cost calculator, GIC guide, and study permits via RCIC partner.",
  path: "/international/cost",
});

const tuitionTiers = [
  { tier: "College certificate (1 year)", range: "CAD $15,000–20,000", notes: "Highly variable by credential and co-op fees." },
  { tier: "College diploma (2–3 years)", range: "CAD $15,000–25,000 / year", notes: "Health programs may exceed band." },
  { tier: "University undergraduate (arts/science)", range: "CAD $25,000–40,000 / year", notes: "International grid pricing." },
  { tier: "University undergraduate (eng/cs/business)", range: "CAD $35,000–55,000 / year", notes: "Co-op terms may add ancillary fees." },
  { tier: "Coursework master’s", range: "CAD $25,000–45,000 / year", notes: "MBA/professional streams can exceed." },
];

const living = [
  { city: "Toronto", housing: "$1,400–2,200", food: "$450–650", transport: "$150–200", total: "$2,500–3,800" },
  { city: "Vancouver", housing: "$1,600–2,400", food: "$450–700", transport: "$120–180", total: "$2,700–4,000" },
  { city: "Montreal", housing: "$900–1,500", food: "$400–600", transport: "$95–120", total: "$2,000–3,000" },
  { city: "Calgary", housing: "$1,100–1,800", food: "$400–600", transport: "$110–150", total: "$2,100–3,200" },
  { city: "Ottawa", housing: "$1,200–1,900", food: "$400–600", transport: "$120–170", total: "$2,200–3,400" },
  { city: "Halifax", housing: "$1,000–1,600", food: "$400–550", transport: "$90–130", total: "$2,000–3,000" },
  { city: "Winnipeg", housing: "$900–1,400", food: "$380–520", transport: "$100–140", total: "$1,900–2,800" },
  { city: "Edmonton", housing: "$1,000–1,600", food: "$400–560", transport: "$100–150", total: "$2,000–3,100" },
];

const budgetSpine = [
  { label: "Regulatory GIC floor", value: "CAD $22,895", detail: "Sept 1, 2025 minimum — not your Toronto rent budget" },
  { label: "National permit cap (2025)", value: "437,000", detail: "New study permits — provinces ration via PAL" },
  { label: "Intl students (2024 YE)", value: "~997,820", detail: "Housing competition near major campuses" },
  { label: "Wire buffer we suggest", value: "~10%", detail: "FX + fee slippage on GIC transfers" },
];

const costMistakeCards = [
  {
    title: "Confusing Instagram rent with IRCC math",
    body: "Lifestyle aesthetics are not proof-of-funds — keep regulatory lines in a separate column from your real monthly spend.",
  },
  {
    title: "Ignoring co-op and ancillary fees",
    body: "Offer letters hide lab, health, and co-op charges — build from the fee schedule, not headline tuition.",
  },
  {
    title: "One FX rate forever",
    body: "Model wires with fees and a buffer — currency swings between planning and payment are normal.",
  },
  {
    title: "Betting living costs on uncertain scholarships",
    body: "Treat awards as upside until confirmed in writing — budget tuition + rent without them first.",
  },
] as const;

const budgetJourneySteps = [
  {
    number: "01",
    title: "Anchor the city",
    description:
      "Use the living-cost bands for your real neighbourhood shortlist — monthly rent drives more fights than tuition instalments.",
  },
  {
    number: "02",
    title: "Layer offer-letter tuition",
    description:
      "International grids and co-op fees change — build from the DLI schedule, not a blog post from three years ago.",
  },
  {
    number: "03",
    title: "Split lifestyle vs IRCC lines",
    description:
      "Regulatory proof (GIC minimum, tuition pathway, liquid history) is not the same as your actual coffee-and-transit budget.",
  },
  {
    number: "04",
    title: "Stress-test FX + spikes",
    description:
      "Model wires with fees, September flight peaks, and a contingency line — credibility beats optimism in front of an officer.",
  },
];

export default function CostPage() {
  return (
    <main>
      <InternationalGuideBanner
        eyebrow="BUDGETING"
        title="Cost of studying in Canada (2026)"
        lead="Honest mode: if someone quotes one number for “Canada,” they are selling something. We split tuition, rent, and proof-of-funds so families can plan without surprises."
        body={
          <span className="block max-w-2xl">
            Pair the tables below with the IRCC GIC floor, DLI tuition invoices, and a currency buffer. Next:{" "}
            <Link
              className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
              href="/international/gic"
            >
              GIC guide
            </Link>
            {" · "}
            <Link
              className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
              href="/international/visa"
            >
              Study permits
            </Link>
            {" · "}
            <Link
              className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
              href="/tools/cost-calculator"
            >
              First-year calculator
            </Link>
            .
          </span>
        }
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Study in Canada", href: "/international" },
          { label: "Cost" },
        ]}
        primaryCta={{
          label: "Book Free 20-Min Call",
          href: SITE.contactFormUrl,
        }}
        secondaryCta={{ label: "Cost calculator", href: "/tools/cost-calculator" }}
        stats={intlBannerCost}
        heroImage={UNSPLASH.financeDesk}
        asideTitle="Budget · snapshot"
        metaItems={[
          "Realistic city bands · not visa theatre",
          "Financial planning · Study Master Canada",
          `${SITE.office.city}, ON · ${SITE.hours}`,
          "Permits · Visa Master Canada (RCIC) when retained",
        ]}
      />

      <TrustBar />

      <InPageNav
        items={[
          { label: "2026 context", href: "#context-2026", badge: "NEW" },
          { label: "Data spine", href: "#spine" },
          { label: "First year", href: "#first-year" },
          { label: "Tuition", href: "#tuition" },
          { label: "Living", href: "#living" },
          { label: "One-time", href: "#extra" },
          { label: "Mistakes", href: "#mistakes" },
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
              <p className="font-bold text-sm-gray-900">Two budgets: life in Canada vs proof on paper</p>
              <p className="mt-1 text-sm leading-relaxed text-sm-gray-700 md:text-base">
                Monthly rent tables help you <strong>live</strong>; the GIC floor and tuition pathway help you{" "}
                <strong>pass completeness checks</strong>. Never confuse Instagram rent aesthetics with the liquidity story
                your study permit file must defend. Policy snapshot:{" "}
                <Link className="font-semibold text-sm-teal-dark underline" href="/international/study-in-canada">
                  Why Canada — 2026
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="spine" className="scroll-mt-28 border-t border-sm-gray-200/80 bg-sm-off-white py-8 md:py-10">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="border-l-4 border-sm-orange pl-3">
            <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">DATA SPINE</p>
          </div>
          <p className="mt-3 text-sm text-sm-gray-600 md:text-base">
            Anchor numbers for family spreadsheets — pair with programme fees and your city shortlist.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {budgetSpine.map((row) => (
              <div key={row.label} className="rounded-2xl border border-sm-gray-100 bg-white px-4 py-4 shadow-sm">
                <p className="text-xs font-medium text-sm-gray-600">{row.label}</p>
                <p className="mt-2 text-lg font-extrabold text-sm-gray-900">{row.value}</p>
                <p className="mt-2 text-xs leading-snug text-sm-gray-600">{row.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="first-year"
        className="scroll-mt-28 border-t border-sm-gray-200/80 bg-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="FIRST YEAR"
            title="The honest first-year budget"
            description={
              <>
                <p>
                  Treat your first year like three separate buckets: <strong>tuition</strong>, <strong>housing</strong>, and{" "}
                  <strong>proof-of-funds</strong>. Mixing them is how families overspend and still look “thin” to an officer.
                </p>
              </>
            }
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="card-pro grad-border relative p-6 md:p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">Bucket 1</p>
              <h3 className="mt-3 text-lg font-bold text-sm-gray-900">Tuition + deposit reality</h3>
              <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">
                Offer letters drive real numbers: deposits, first-semester balance, ancillary fees, and co-op charges. Use
                the school’s fee schedule — not “average tuition” headlines.
              </p>
            </div>
            <div className="card-pro grad-border relative p-6 md:p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">Bucket 2</p>
              <h3 className="mt-3 text-lg font-bold text-sm-gray-900">Housing + settlement spend</h3>
              <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">
                Rent deposits, temporary stays, winter clothing, phone SIM, transit pass, and small setup items (bedding,
                cookware) hit fast. Toronto/Vancouver spikes are real; book a safe landing plan first.
              </p>
            </div>
            <div className="card-pro grad-border relative p-6 md:p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">Bucket 3</p>
              <h3 className="mt-3 text-lg font-bold text-sm-gray-900">Proof-of-funds discipline</h3>
              <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">
                Visa math includes the <strong>CAD $22,895</strong> GIC line (Sept 1, 2025) plus tuition pathway and liquid
                history. Lifestyle tables help you live; IRCC lines help you pass checks.
              </p>
            </div>
          </div>

          <div className="relative mt-10 w-full overflow-hidden rounded-2xl border border-sm-teal/20 bg-gradient-to-br from-sm-teal/5 via-white to-sm-orange/5 p-6 shadow-[0_12px_40px_-12px_rgba(30,90,165,0.18)] md:p-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sm-teal/10 via-transparent to-transparent" />
            <p className="relative text-sm font-medium text-sm-gray-800 md:text-base">
              Want a printable “parent spreadsheet” version? Use the{" "}
              <Link className="font-bold text-sm-teal-dark underline underline-offset-2" href="/tools/cost-calculator">
                first-year cost calculator
              </Link>{" "}
              and pair it with the{" "}
              <Link className="font-bold text-sm-orange-dark underline underline-offset-2" href="/international/gic">
                GIC guide
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section id="tuition" className="scroll-mt-28 border-t border-sm-gray-200 bg-sm-off-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="overflow-x-auto">
            <InternationalSectionTitle
              label="TUITION"
              title="Tuition by program tier"
              description={
                <p className="text-sm-gray-600">
                  Ranges are indicative for counselling conversations — always use the offer letter and institutional fee
                  schedule.
                </p>
              }
            />
            <table className="mt-8 min-w-[800px] w-full border-collapse overflow-hidden rounded-2xl border border-sm-gray-200 bg-white text-sm shadow-sm">
              <thead className="bg-sm-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-sm-gray-600">
                <tr>
                  <th className="px-4 py-3">Program tier</th>
                  <th className="px-4 py-3">Typical international range</th>
                  <th className="px-4 py-3">Notes</th>
                </tr>
              </thead>
              <tbody>
                {tuitionTiers.map((row) => (
                  <tr key={row.tier} className="border-t border-sm-gray-100">
                    <td className="px-4 py-4 font-semibold text-sm-gray-900">{row.tier}</td>
                    <td className="px-4 py-4 text-sm-gray-700">{row.range}</td>
                    <td className="px-4 py-4 text-sm-gray-700">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-sm-gray-500 md:hidden">Swipe horizontally for the full tuition table.</p>
        </div>
      </section>

      <section id="living" className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="overflow-x-auto">
            <InternationalSectionTitle
              label="LIVING COSTS"
              title="Living costs by city (monthly bands)"
              description={
                <p className="text-sm-gray-600">
                  Figures are rounded CAD estimates for planning — actual rent varies by neighbourhood and roommates.
                </p>
              }
            />
            <table className="mt-8 min-w-[900px] w-full border-collapse overflow-hidden rounded-2xl border border-sm-gray-200 bg-sm-off-white/50 text-sm shadow-sm">
              <thead className="bg-sm-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-sm-gray-600">
                <tr>
                  <th className="px-4 py-3">City</th>
                  <th className="px-4 py-3">Housing</th>
                  <th className="px-4 py-3">Food</th>
                  <th className="px-4 py-3">Transport</th>
                  <th className="px-4 py-3">Total (rounded)</th>
                </tr>
              </thead>
              <tbody>
                {living.map((row) => (
                  <tr key={row.city} className="border-t border-sm-gray-100">
                    <td className="px-4 py-4 font-semibold text-sm-gray-900">{row.city}</td>
                    <td className="px-4 py-4 text-sm-gray-700">{row.housing}</td>
                    <td className="px-4 py-4 text-sm-gray-700">{row.food}</td>
                    <td className="px-4 py-4 text-sm-gray-700">{row.transport}</td>
                    <td className="px-4 py-4 text-sm-gray-700">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-sm-gray-500 md:hidden">Swipe horizontally for the full living-cost table.</p>
        </div>
      </section>

      <section id="extra" className="scroll-mt-28 border-t border-sm-gray-200/80 bg-sm-gray-50 py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="ONE-TIME"
            title="One-time costs & regulatory lines"
            description={
              <p className="text-sm-gray-600">
                Settlement spend sits beside IRCC fees and medical rules — none of this replaces tuition or GIC evidence.
              </p>
            }
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <div className="card-pro grad-border relative p-6 md:p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">ONE-TIME</p>
              <h3 className="mt-3 text-lg font-bold text-sm-gray-900">Settlement & setup</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-sm-gray-700">
                <li className="flex gap-3">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-sm-teal" />
                  <span>Flights — September pricing spikes are real.</span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-sm-teal" />
                  <span>Winter gear if you land in November — don’t cheap out on boots.</span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-sm-teal" />
                  <span>Temporary housing + deposits before you find long-term rent.</span>
                </li>
              </ul>
            </div>

            <div className="card-pro grad-border relative p-6 md:p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">IRCC LINES</p>
              <h3 className="mt-3 text-lg font-bold text-sm-gray-900">Fees, medicals, and the GIC floor</h3>
              <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">
                Study permit fees + biometrics are separate from your lifestyle budget (budget roughly <strong>CAD $235</strong>{" "}
                combined using IRCC published fees as anchors — confirm current amounts). Medical exams depend on your
                country and program length.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-sm-gray-700">
                The <strong>CAD $22,895</strong> figure is the minimum GIC principal effective Sept 1, 2025. It is not your
                Toronto rent budget — it’s regulatory proof of access to living funds. Details:{" "}
                <Link className="font-semibold text-sm-teal-dark underline" href="/international/gic">
                  GIC guide
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <div className="card-pro grad-border relative p-6 md:p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">MONEY IN MOTION</p>
              <h3 className="mt-3 text-lg font-bold text-sm-gray-900">Tuition payment options</h3>
              <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">
                Schools accept Flywire, Western Union pay modes, or direct wires. Each route has fees and posting timelines
                — late posting can jeopardize enrollment even if the money left your account.
              </p>
            </div>
            <div className="card-pro grad-border relative p-6 md:p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">UPSIDE</p>
              <h3 className="mt-3 text-lg font-bold text-sm-gray-900">Scholarships for international students</h3>
              <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">
                Treat scholarships as upside. Institutional entrance awards exist but are competitive; country-specific
                sponsor programs may add options. We catalogue what you’re eligible for, but we never advise betting living
                expenses on uncertain aid.
              </p>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-sm-gray-600 md:text-base">
            Model scenarios in the{" "}
            <Link className="font-bold text-sm-teal-dark underline underline-offset-2" href="/tools/cost-calculator">
              cost calculator
            </Link>{" "}
            and then sanity-check wires and buffers in{" "}
            <Link className="font-bold text-sm-teal-dark underline underline-offset-2" href="/international/financial-planning">
              financial planning
            </Link>
            .
          </p>
        </div>
      </section>

      <section
        id="mistakes"
        className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="PITFALLS"
            title="Budget mistakes that hurt families"
            description={<p>Separate planning errors from immigration risk — both are expensive.</p>}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {costMistakeCards.map((m) => (
              <div key={m.title} className="rounded-2xl border border-sm-gray-100 bg-sm-off-white/90 p-6 shadow-sm">
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
          title="Build a budget your officer can follow"
          subtitle="Same figures should appear in admissions proof, GIC wiring, and study-plan narrative — contradictions cost refusals."
          steps={budgetJourneySteps}
          sectionClassName="section-pro section-pro-bg-stripe border-t border-sm-gray-200/80"
          columns={4}
        />
      </div>

      <div className="border-t border-sm-gray-200 bg-gradient-to-b from-white to-sm-off-white/40 py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <p className="text-center text-sm leading-relaxed text-sm-gray-700 md:text-base">
            Next numbers stops:{" "}
            <Link className="font-bold text-sm-teal-dark underline underline-offset-2" href="/international/gic">
              GIC & proof of funds
            </Link>
            {" · "}
            <Link className="font-bold text-sm-orange-dark underline underline-offset-2" href="/international/visa">
              study permit requirements
            </Link>
            {" · "}
            <Link className="font-bold text-sm-teal-dark underline underline-offset-2" href="/international/programs">
              program search
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
          title="Cost & money questions"
          subtitle="Lifestyle math and regulatory minimums are different conversations — we keep both honest."
          tabs={[
            {
              id: "costs",
              label: "Costs & planning",
              faqs: [INTL_FAQS[0], INTL_FAQS[14]],
            },
            {
              id: "funds",
              label: "Proof of funds & GIC",
              faqs: [INTL_FAQS[1], INTL_FAQS[7]],
            },
            {
              id: "programs",
              label: "Programs & awards",
              faqs: [INTL_FAQS[4], INTL_FAQS[18]],
            },
            {
              id: "path",
              label: "Permits & help",
              faqs: [INTL_FAQS[3], INTL_FAQS[13], INTL_FAQS[8]],
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
