import Link from "next/link";
import { buildMetadata } from "@/lib/metadata-helpers";
import { SITE } from "@/lib/site";
import { UNSPLASH } from "@/lib/media/unsplash";
import { INTL_FAQS } from "@/lib/data/intl-faqs";
import { InternationalGuideBanner } from "@/components/sections/international-guide-banner";
import { intlBannerGic } from "@/lib/data/intl-guide-banner-presets";
import { TrustBar } from "@/components/sections/trust-bar";
import { InPageNav } from "@/components/sections/in-page-nav";
import { StepList } from "@/components/sections/step-list";
import { TabbedFaq } from "@/components/sections/tabbed-faq";
import { RcicDisclaimer } from "@/components/sections/rcic-disclaimer";
import { CtaBlock } from "@/components/sections/cta-block";
import { InternationalSectionTitle } from "@/components/sections/international-section-title";
import { Info } from "lucide-react";

export const metadata = buildMetadata({
  title: "GIC for Canada Study Permit (CAD $22,895 minimum) | Study Master Canada",
  description:
    "Student GIC guide: IRCC minimum CAD $22,895 (Sept 1, 2025), typical ~CAD $200 bank fee, participating banks, wire buffers, release schedules. Proof of funds vs tuition — Toronto & GTA counselling; study permits via RCIC partner Visa Master Canada.",
  path: "/international/gic",
});

const banks = [
  { name: "Scotiabank StartRight", note: "Long-running newcomer program with broad international student familiarity." },
  { name: "TD New to Canada", note: "Branch-heavy network helpful if you want in-person support after landing." },
  { name: "CIBC Smart Account", note: "Often bundled with everyday banking for first-year cashflow management." },
  { name: "RBC Student GIC", note: "Mobile-first workflows for students who prefer app-driven onboarding." },
  { name: "BMO Newcomers", note: "Competitive promotional positioning — compare release schedules before signing." },
  { name: "ICICI Bank Canada GIC", note: "Popular routing for many Indian families already banking with ICICI networks." },
  { name: "SBI Canada Bank GIC", note: "Familiar brand for students coming from SBI-heavy household banking ecosystems." },
  { name: "HSBC Canada Newcomers", note: "Useful when you already maintain HSBC balances in multiple countries." },
  { name: "Simplii Financial", note: "Digital-first experience; confirm pickup steps if you want face-to-face reassurance." },
];

const keyNumbers = [
  { label: "IRCC minimum principal", value: "CAD $22,895", note: "Effective Sept 1, 2025" },
  { label: "Typical bank fee", value: "~CAD $200", note: "Confirm on wire instructions" },
  { label: "Suggested FX buffer", value: "~10%", note: "Avoid landing short after fees" },
  { label: "Illustrative wire total", value: "~CAD $25,384", note: "22,895 + ~200 fee + 10% buffer" },
];

const gicJourneySteps = [
  {
    number: "01",
    title: "Pick an issuer",
    description:
      "Choose a participating bank and open the international student GIC workflow — verify the institution on IRCC’s current list before you wire.",
  },
  {
    number: "02",
    title: "Wire principal + fees",
    description:
      "Transfer CAD $22,895 plus bank fees from an allowed account; use the bank’s wire PDF — decimals and reference codes matter.",
  },
  {
    number: "03",
    title: "Certificate for IRCC",
    description:
      "Receive the GIC certificate or reference letter required for your study permit application package.",
  },
  {
    number: "04",
    title: "Land & activate",
    description:
      "After arrival, complete Canadian account activation and identity verification per the bank’s newcomer steps.",
  },
  {
    number: "05",
    title: "Initial release",
    description:
      "Typical first lump sum (often roughly CAD $2,000–5,000) lands within the first couple of weeks after activation.",
  },
  {
    number: "06",
    title: "Monthly installments",
    description:
      "Remainder paid out over roughly 10–12 months per schedule — pacing rent and groceries without draining liquidity day one.",
  },
];

const mistakeCards = [
  {
    title: "Wrong principal amount",
    body: "Transferring pre–Sept 2025 amounts instead of the current CAD $22,895 minimum — verify IRCC before you wire.",
  },
  {
    title: "Non-participating product",
    body: "Retail investments mislabeled “GIC” or issuers off IRCC’s list — officers reject ambiguous certificates.",
  },
  {
    title: "Last-minute wire",
    body: "Waiting until the week before the visa deadline — holidays and SWIFT delays do not care about your intake.",
  },
  {
    title: "Name drift across documents",
    body: "Account holder spelling must match passport and study permit lines everywhere — fix before the transfer.",
  },
] as const;

export default function GicPage() {
  return (
    <main>
      <InternationalGuideBanner
        eyebrow="PROOF OF FUNDS"
        title="GIC: Guaranteed Investment Certificate for students"
        lead="A bank-regulated deposit product that satisfies IRCC’s minimum financial threshold while pacing your spending after arrival."
        body={
          <>
            SDS ended Nov 8, 2024 — standard-stream files need credible liquidity and clean banking trails. The GIC is one
            pillar; tuition payments and study-plan coherence still matter. Pair this page with the{" "}
            <Link
              className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
              href="/international/visa"
            >
              study permit guide
            </Link>
            ,{" "}
            <Link
              className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
              href="/international/cost"
            >
              cost overview
            </Link>
            , and{" "}
            <Link
              className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
              href="/tools/gic-calculator"
            >
              GIC calculator
            </Link>
            .
          </>
        }
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Study in Canada", href: "/international" },
          { label: "GIC" },
        ]}
        primaryCta={{
          label: "Book Free 20-Min Call",
          href: SITE.contactFormUrl,
        }}
        secondaryCta={{ label: "GIC calculator", href: "/tools/gic-calculator" }}
        stats={intlBannerGic}
        heroImage={UNSPLASH.financeDesk}
        asideTitle="GIC · snapshot"
        metaItems={[
          "CAD $22,895 IRCC floor (Sept 1, 2025)",
          "Financial planning · Study Master Canada",
          `${SITE.office.city}, ON · ${SITE.hours}`,
          "Permits · Visa Master Canada (RCIC) when retained",
        ]}
      />

      <TrustBar />

      <InPageNav
        items={[
          { label: "2026 context", href: "#context-2026", badge: "NEW" },
          { label: "Overview", href: "#overview" },
          { label: "Key numbers", href: "#key-numbers" },
          { label: "Banks", href: "#banks" },
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
              <p className="font-bold text-sm-gray-900">GIC proves access — not genius budgeting</p>
              <p className="mt-1 text-sm leading-relaxed text-sm-gray-700 md:text-base">
                Officers still read <strong>tuition pathways</strong>, <strong>liquid history</strong>, and{" "}
                <strong>study intent</strong>. A correct GIC certificate reduces ambiguity on living costs, but it does not
                replace inconsistent bank statements or a program that does not match your transcript. Plan the wire early —
                PAL queues and peak-season{" "}
                <Link className="font-semibold text-sm-teal-dark underline" href="/international/visa">
                  visa processing
                </Link>{" "}
                will not wait for a stuck SWIFT transfer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="overview"
        className="scroll-mt-28 border-t border-sm-gray-200/80 bg-sm-off-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl space-y-6 px-6 text-sm leading-relaxed text-sm-gray-700 md:px-10 md:text-base">
          <InternationalSectionTitle
            label="OVERVIEW"
            title="What is a GIC?"
            description={
              <p className="text-sm-gray-600">
                Conservative bank deposit mechanics — not a stock tip — with staged releases designed for newcomer cashflow.
              </p>
            }
          />
          <p>
            A Guaranteed Investment Certificate is a Canadian bank deposit product with a defined principal and issuer
            protections appropriate for conservative savings. For study permit purposes, IRCC treats an eligible GIC from a
            participating financial institution as strong evidence you can access living costs after landing — because
            funds unlock gradually rather than vanishing on day one.
          </p>
          <p>
            Think of the GIC as both compliance and cashflow training: you must prove liquidity up front, but you also
            avoid blowing an entire year’s rent in the first jet-lagged week. Banks document releases so you can show
            landlords, schools, and future employers that you are managing money responsibly.
          </p>

          <h3 className="text-xl font-extrabold text-sm-gray-900">Why IRCC accepts it</h3>
          <p>
            Officers see thousands of bank statement PDFs — some pristine, some creatively edited. A participating GIC
            reduces ambiguity: the funds are real, locked with a regulated issuer, and tied to your student profile. It does
            not replace tuition payment obligations or remove the need for a credible study plan, but it anchors the
            financial spine of many standard-stream applications post-SDS.
          </p>

          <h3 className="text-xl font-extrabold text-sm-gray-900">How much money?</h3>
          <p>
            Effective September 1, 2025, IRCC’s minimum GIC amount is{" "}
            <span className="font-semibold text-sm-gray-900">CAD $22,895</span>. Major banks typically charge roughly{" "}
            <span className="font-semibold text-sm-gray-900">CAD $200</span> in setup fees. We recommend wiring an
            additional <span className="font-semibold text-sm-gray-900">10% buffer</span> on the principal (about CAD
            $2,289) so exchange-rate swings do not leave you short after fees.
          </p>
          <p>
            Illustrative total using buffer + fee: 22,895 + 200 + 2,289 ={" "}
            <span className="font-semibold">CAD $25,384</span> (rounded). Always confirm the exact total with your bank’s
            wire instructions PDF — decimals matter.
          </p>
        </div>
      </section>

      <section id="key-numbers" className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="AT A GLANCE"
            title="Numbers to wire into the family spreadsheet"
            description={
              <p className="text-sm-gray-600">
                The illustrative wire total is for family planning only — your bank’s SWIFT fields are the source of truth.
              </p>
            }
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {keyNumbers.map((row) => (
              <div key={row.label} className="rounded-2xl border border-sm-gray-100 bg-sm-off-white/80 p-5 shadow-sm">
                <p className="text-xs font-medium text-sm-gray-600">{row.label}</p>
                <p className="mt-2 text-xl font-extrabold text-sm-gray-900">{row.value}</p>
                <p className="mt-2 text-xs text-sm-gray-600">{row.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="banks"
        className="scroll-mt-28 border-t border-sm-gray-200/80 bg-sm-off-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="PARTICIPATING ISSUERS"
            title="Banks families commonly use (verify IRCC list)"
            description={
              <p className="text-sm-gray-600">
                Issuers and student-GIC product names change — confirm your bank appears on IRCC’s current list before you
                transfer.
              </p>
            }
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {banks.map((b) => (
              <div key={b.name} className="card-pro grad-border p-6 shadow-sm">
                <p className="font-bold text-sm-gray-900">{b.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">{b.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="journey" className="scroll-mt-28">
        <StepList
          eyebrow="PROCESS"
          title="From issuer choice to monthly installments"
          subtitle="Six milestones most families hit — exact wording follows your bank’s portal and IRCC forms."
          steps={gicJourneySteps}
          sectionClassName="section-pro section-pro-bg-stripe border-t border-sm-gray-200/80"
          columns={3}
        />
      </div>

      <section id="mistakes" className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl space-y-8 px-6 md:px-10">
          <InternationalSectionTitle
            label="PROOF OF FUNDS"
            title="GIC vs alternative proof of funds"
            description={
              <p className="text-sm-gray-600">
                Some students combine liquid savings, education loans, and scholarships instead of a GIC. That path can work
                but invites deeper scrutiny: source of funds, large deposits, and loan sanction letters must align cleanly.
                SDS is gone — standard-stream diligence is the norm.
              </p>
            }
          />

          <div>
            <h3 className="text-lg font-extrabold text-sm-gray-900">Common GIC mistakes</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {mistakeCards.map((m) => (
                <div key={m.title} className="rounded-2xl border border-sm-gray-100 bg-white p-6 shadow-sm">
                  <p className="font-bold text-sm-gray-900">{m.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">{m.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-sm-gray-200 bg-gradient-to-b from-white to-sm-off-white/40 py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <p className="text-center text-sm leading-relaxed text-sm-gray-700 md:text-base">
            Model first-year spend holistically:{" "}
            <Link className="font-bold text-sm-teal-dark underline underline-offset-2" href="/international/cost">
              cost of studying in Canada
            </Link>
            {" · "}
            <Link className="font-bold text-sm-orange-dark underline underline-offset-2" href="/tools/cost-calculator">
              first-year cost calculator
            </Link>
            {" · "}
            <Link className="font-bold text-sm-teal-dark underline underline-offset-2" href="/international/financial-planning">
              financial planning guide
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
          title="Funds, GIC & pathway questions"
          subtitle="Regulatory minimums change — always verify IRCC and your bank’s wire instructions for your intake."
          tabs={[
            {
              id: "gic-funds",
              label: "GIC & minimum funds",
              faqs: [INTL_FAQS[7], INTL_FAQS[1], INTL_FAQS[0]],
            },
            {
              id: "timing",
              label: "Planning & timing",
              faqs: [INTL_FAQS[14], INTL_FAQS[5]],
            },
            {
              id: "permits",
              label: "Permits & outcomes",
              faqs: [INTL_FAQS[3], INTL_FAQS[8]],
            },
            {
              id: "support",
              label: "Counselling",
              faqs: [INTL_FAQS[13], INTL_FAQS[15]],
            },
          ]}
        />
      </div>

      <section className="border-t border-sm-gray-100 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <RcicDisclaimer />
          <p className="mt-6 text-center text-sm text-sm-gray-600">
            Want a printable model?{" "}
            <Link className="font-semibold text-sm-teal-dark underline" href="/tools/gic-calculator">
              Open the GIC calculator
            </Link>
            .
          </p>
        </div>
      </section>

      <CtaBlock />
    </main>
  );
}
