import Link from "next/link";
import { buildMetadata } from "@/lib/metadata-helpers";
import { SITE } from "@/lib/site";
import { UNSPLASH } from "@/lib/media/unsplash";
import { INTL_FAQS } from "@/lib/data/intl-faqs";
import { InternationalGuideBanner } from "@/components/sections/international-guide-banner";
import { intlBannerBanking } from "@/lib/data/intl-guide-banner-presets";
import { TrustBar } from "@/components/sections/trust-bar";
import { InPageNav } from "@/components/sections/in-page-nav";
import { StepList } from "@/components/sections/step-list";
import { TabbedFaq } from "@/components/sections/tabbed-faq";
import { RcicDisclaimer } from "@/components/sections/rcic-disclaimer";
import { CtaBlock } from "@/components/sections/cta-block";
import { InternationalSectionTitle } from "@/components/sections/international-section-title";
import { Info } from "lucide-react";

export const metadata = buildMetadata({
  title: "Banking for International Students in Canada",
  description:
    "Newcomer bank packages from RBC, TD, Scotiabank, BMO, CIBC; student accounts; secured credit cards; building credit history. Study Master Canada - Toronto & GTA.",
  path: "/international/banking",
});

const bigFive = [
  { bank: "RBC", note: "Broad newcomer bundles plus strong mobile onboarding for digital natives." },
  { bank: "TD", note: "Branch-heavy network helpful if you want in-person troubleshooting during GIC releases." },
  { bank: "Scotiabank", note: "Mature international student GIC rails with established release schedules." },
  { bank: "BMO", note: "Competitive student marketing — compare fee waivers year by year." },
  { bank: "CIBC", note: "Smart start packages that pair chequing with everyday spend controls." },
] as const;

const foundationCards = [
  {
    title: "FINTRAC onboarding is real",
    body: "Bring study permit, passport, LOA, and proof of address — even temporary — to avoid endless back-and-forth when tuition deadlines loom.",
    href: "/international/gic",
    linkLabel: "GIC guide",
  },
  {
    title: "Tuition pulls need a working pipe",
    body: "Frozen wires and missing signature pages delay enrollment. Follow welcome-pack instructions literally and keep international wire receipts.",
    href: "/international/cost",
    linkLabel: "Cost of studying",
  },
  {
    title: "SIN unlocks payroll",
    body: "Employers need a Social Insurance Number — coordinate bank + SIN in your first week where possible.",
    href: "/international/post-arrival",
    linkLabel: "Post-arrival sequence",
  },
] as const;

const accountSpineCards = [
  {
    title: "Chequing + debit",
    body: "Most students pair a chequing account (debit, bill pay, e-transfer) with a student fee waiver while enrolled. Keep tuition pulls and rent pulls in one visible ledger.",
  },
  {
    title: "GIC bank alignment",
    body: "GIC issuers sometimes partner with specific chequing products — mismatched onboarding can delay staged releases after landing.",
  },
  {
    title: "Big Five vs digital",
    body: "Simplii and Tangerine appeal to spreadsheet-friendly students, but a branch network can save you when international wires need human troubleshooting.",
  },
] as const;

const bankingJourney = [
  {
    number: "01",
    title: "Gather document pack",
    description: "Passport, study permit, LOA, address proof, GIC letter if applicable — scans plus originals.",
  },
  {
    number: "02",
    title: "Book newcomer appointment",
    description: "Book branch or video slots before peak September weeks; ask which signatures must be wet ink.",
  },
  {
    number: "03",
    title: "Unlock GIC rhythm",
    description: "Confirm initial lump sum and monthly installment timing with the bank portal — set calendar reminders.",
  },
  {
    number: "04",
    title: "Credit discipline",
    description: "Secured or student cards report history — pay on time, low utilization, no five-card spree.",
  },
] as const;

const mistakeCards = [
  {
    title: "Skipping address proof planning",
    body: "Temporary housing letters still need to match bank rules — ask what format they accept before you fly.",
  },
  {
    title: "Ignoring GIC email steps",
    body: "Missing one attachment can pause releases — treat bank mail as homework.",
  },
  {
    title: "Carrying card balances “for credit”",
    body: "Interest erodes budget — on-time zero-balance behavior builds history without 20% APR pain.",
  },
  {
    title: "Five applications at once",
    body: "Hard checks cluster — pick one primary bank path first.",
  },
] as const;

export default function BankingPage() {
  return (
    <main>
      <InternationalGuideBanner
        eyebrow="BANKING"
        title="Banking for international students — credibility starts locally."
        lead="Paying tuition late because of a frozen wire is a preventable disaster. We help you open accounts, unlock GIC payouts, and understand Canadian credit norms."
        body={
          <>
            Bring study permit, passport, LOA, and proof of address — even temporary — to satisfy{" "}
            <strong>FINTRAC</strong> onboarding without endless back-and-forth. Next:{" "}
            <Link
              className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
              href="/international/post-arrival"
            >
              Post-arrival
            </Link>
            ,{" "}
            <Link
              className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
              href="/international/financial-planning"
            >
              financial planning
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
          { label: "Banking" },
        ]}
        primaryCta={{
          label: "Book Free 20-Min Call",
          href: SITE.contactFormUrl,
        }}
        secondaryCta={{ label: "GIC guide", href: "/international/gic" }}
        stats={intlBannerBanking}
        heroImage={UNSPLASH.toronto}
        asideTitle="Banking · snapshot"
        metaItems={[
          "Banking & GIC sequencing · Study Master Canada",
          "Immigration filings are separate from bank advice · Visa Master Canada (RCIC) when retained",
          `${SITE.office.city}, ON · ${SITE.hours}`,
          "Compare current student packages at each bank",
        ]}
      />

      <TrustBar />

      <InPageNav
        items={[
          { label: "2026 context", href: "#context-2026", badge: "NEW" },
          { label: "Basics", href: "#basics" },
          { label: "Accounts", href: "#accounts" },
          { label: "Big Five", href: "#bigfive" },
          { label: "Student tier", href: "#student" },
          { label: "Credit", href: "#credit" },
          { label: "History", href: "#history" },
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
              <p className="font-bold text-sm-gray-900">Banking is how tuition actually clears</p>
              <p className="mt-1 text-sm leading-relaxed text-sm-gray-700 md:text-base">
                International students juggle wires, GIC staged releases, debit for daily spend, and later payroll. One
                weak link — missing documents, wrong account type, or ignored secure messages — can cascade into late fees
                or blocked enrollment. Treat onboarding like a permit application: complete, legible, and on time.
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
            title="Why Canadian banking matters on day one"
            description={
              <p>
                Credibility with landlords, employers, and schools often flows through local accounts and payment history.
                We are not a bank — we help you sequence documents and ask the right questions before appointments.
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

      <section id="accounts" className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="FIRST STEPS"
            title="Newcomer account spine"
            description={
              <p>
                Most students anchor on a chequing account with a student fee waiver while enrolled. Align GIC bank
                instructions with the chequing product you actually open.
              </p>
            }
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {accountSpineCards.map((c) => (
              <div key={c.title} className="card-pro grad-border p-6 md:p-7">
                <h3 className="text-lg font-bold text-sm-gray-900">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="bigfive" className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="BIG FIVE"
            title="Newcomer packages (one-line distinctions)"
            description={
              <p className="text-sm-gray-700">
                Offers change annually — confirm fee waivers, e-transfer limits, and USD account options at booking time.
              </p>
            }
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {bigFive.map((b) => (
              <div key={b.bank} className="card-pro grad-border p-6 shadow-sm">
                <p className="font-bold text-sm-gray-900">{b.bank}</p>
                <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">{b.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="student"
        className="scroll-mt-28 border-t border-sm-gray-200/80 bg-sm-off-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="STUDENT TIER"
            title="Student bank accounts"
            description={
              <p className="text-sm-gray-700">
                Look for monthly fee waivers while studying, unlimited e-transfers, and free Interac debit for retail. Ask
                whether US-dollar accounts exist if you later earn USD internships.
              </p>
            }
          />
          <div className="mt-8 rounded-2xl border border-sm-gray-100 bg-white p-6 shadow-sm md:p-8">
            <ul className="space-y-2 text-sm text-sm-gray-700">
              <li className="flex gap-3">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sm-teal" />
                <span>Confirm how long fee waivers last after graduation or if you drop below full-time study.</span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sm-teal" />
                <span>Set low-balance alerts to avoid NSF surprises when tuition auto-pulls.</span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sm-teal" />
                <span>Ask how international wires display — name match issues delay crediting.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="credit" className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="CREDIT"
            title="Credit cards as a newcomer"
            description={
              <p className="text-sm-gray-700">
                Secured cards require a deposit but report history to credit bureaus. Unsecured student cards may appear
                after a few months of responsible debit usage. Never carry balances at 20%+ APR just to “build credit.”
              </p>
            }
          />
          <div className="mt-8 card-pro grad-border p-6 md:p-7">
            <p className="text-sm leading-relaxed text-sm-gray-700">
              Landlords and carriers eventually check credit files. Start with one product, pay statement balances on time,
              and keep utilization low. We do not sell bank products — we help you ask banks the right questions.
            </p>
          </div>
        </div>
      </section>

      <section
        id="history"
        className="scroll-mt-28 border-t border-sm-gray-200/80 bg-sm-off-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="CREDIT FILE"
            title="Building Canadian credit history"
            description={
              <p className="text-sm-gray-700">
                Pay cards on time, keep utilization low, and avoid applying for five cards at once. Patience beats gimmicks.
              </p>
            }
          />
          <div className="relative mt-8 overflow-hidden rounded-2xl border border-sm-teal/20 bg-gradient-to-br from-sm-teal/5 via-white to-sm-orange/5 p-6 shadow-[0_12px_40px_-12px_rgba(30,90,165,0.18)] md:p-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sm-teal/10 via-transparent to-transparent" />
            <p className="relative text-sm font-medium text-sm-gray-800 md:text-base">
              Tie banking to your wider budget in{" "}
              <Link className="font-bold text-sm-teal-dark underline underline-offset-2" href="/tools/cost-calculator">
                cost calculator
              </Link>{" "}
              and{" "}
              <Link className="font-bold text-sm-teal-dark underline underline-offset-2" href="/international/financial-planning">
                financial planning
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <div id="journey" className="scroll-mt-28">
        <StepList
          eyebrow="PROCESS"
          title="From document pack to healthy credit"
          subtitle="Bank-specific steps vary — follow your appointment checklist literally."
          steps={bankingJourney}
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
            title="Common banking mistakes"
            description={<p>Preventable paperwork beats weeks of secure-message ping-pong.</p>}
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

      <div
        id="faqs"
        className="scroll-mt-28 border-t border-sm-gray-200 bg-gradient-to-b from-white via-sm-off-white/50 to-white"
      >
        <TabbedFaq
          sectionPaddingClassName="py-14 md:py-16"
          title="Money & study questions"
          subtitle="GIC, funds, and programs — banks set product rules; IRCC sets immigration rules."
          tabs={[
            {
              id: "funds",
              label: "Funds & GIC",
              faqs: [INTL_FAQS[7], INTL_FAQS[1], INTL_FAQS[0]],
            },
            {
              id: "study",
              label: "Study & permits",
              faqs: [INTL_FAQS[3], INTL_FAQS[5], INTL_FAQS[16]],
            },
            {
              id: "help",
              label: "Support & refusals",
              faqs: [INTL_FAQS[15], INTL_FAQS[13], INTL_FAQS[8]],
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
