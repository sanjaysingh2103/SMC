import Link from "next/link";
import { buildMetadata } from "@/lib/metadata-helpers";
import { SITE } from "@/lib/site";
import { UNSPLASH } from "@/lib/media/unsplash";
import { INTL_FAQS } from "@/lib/data/intl-faqs";
import { InternationalGuideBanner } from "@/components/sections/international-guide-banner";
import { intlBannerPreDeparture } from "@/lib/data/intl-guide-banner-presets";
import { TrustBar } from "@/components/sections/trust-bar";
import { InPageNav } from "@/components/sections/in-page-nav";
import { PreDepartureChecklist } from "@/components/international/pre-departure-checklist";
import { StepList } from "@/components/sections/step-list";
import { TabbedFaq } from "@/components/sections/tabbed-faq";
import { RcicDisclaimer } from "@/components/sections/rcic-disclaimer";
import { CtaBlock } from "@/components/sections/cta-block";
import { InternationalSectionTitle } from "@/components/sections/international-section-title";
import { Info } from "lucide-react";

export const metadata = buildMetadata({
  title: "Pre-Departure Checklist for International Students",
  description:
    "Printable pre-departure checklist: documents, packing, insurance, flights, first-week tasks. Study Master Canada helps international students land prepared.",
  path: "/international/pre-departure",
});

const foundationCards = [
  {
    title: "Visa is not the finish line",
    body: "After approval, the race is housing queues, bank onboarding, SIN appointments, and winter gear — sequence them like a project, not luck.",
    href: "/international/visa",
    linkLabel: "Study permit guide",
  },
  {
    title: "Book before you board",
    body: "Service Canada and bank branches spike in September. Reserve slots from home where possible so week one is execution, not discovery.",
    href: "/international/post-arrival",
    linkLabel: "Post-arrival support",
  },
  {
    title: "Proof-of-funds story continues",
    body: "Keep GIC letters, tuition receipts, and bank correspondence organized — you may need them at the border and again for housing guarantors.",
    href: "/international/gic",
    linkLabel: "GIC & funds",
  },
] as const;

const preDepartureJourney = [
  {
    number: "01",
    title: "Freeze the document set",
    description: "Passport validity, POE letter, LOA, GIC pack, transcripts, tests — scanned backup plus one paper folder for immigration and campus.",
  },
  {
    number: "02",
    title: "Pack for arrival week",
    description: "Winter shell in carry-on, meds + prescriptions, adapters, and enough cash/CAD for 48 hours if cards hiccup.",
  },
  {
    number: "03",
    title: "Bridge insurance & housing",
    description: "Travel cover for the flight date; plan provincial health gaps; confirm first address even if temporary.",
  },
  {
    number: "04",
    title: "Pre-book week-one pipes",
    description: "SIN + bank appointments, phone research, orientation dates — so landing day starts calm.",
  },
] as const;

const mistakeCards = [
  {
    title: "Assuming summer in Toronto = light jacket",
    body: "September evenings can bite — pack one serious layer in hand luggage.",
  },
  {
    title: "Skipping SIN until after classes start",
    body: "Payroll and some bank steps stall without it — book Service Canada early.",
  },
  {
    title: "One overstuffed checked bag",
    body: "Airlines charge fast for overweight winter gear — weigh bags at home.",
  },
  {
    title: "No printed backup contacts",
    body: "Dead phone + no Wi‑Fi at the airport = stress. Paper still wins.",
  },
] as const;

export default function PreDeparturePage() {
  return (
    <main>
      <InternationalGuideBanner
        eyebrow="BEFORE YOU FLY"
        title="Pre-departure checklist — boring, lifesaving."
        lead="The visa is not the finish line. It is the starting pistol for housing, banking, and winter gear logistics."
        body={
          <>
            Book <strong>SIN</strong> and <strong>bank</strong> slots before you board — Service Canada queues in September
            are not theoretical. Next:{" "}
            <Link
              className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
              href="/international/post-arrival"
            >
              Post-arrival
            </Link>
            ,{" "}
            <Link
              className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
              href="/international/accommodation"
            >
              accommodation
            </Link>
            , and{" "}
            <Link
              className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
              href="/international/cost"
            >
              cost planning
            </Link>
            .
          </>
        }
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Study in Canada", href: "/international" },
          { label: "Pre-departure" },
        ]}
        primaryCta={{
          label: "Book Free 20-Min Call",
          href: SITE.contactFormUrl,
        }}
        secondaryCta={{ label: "Post-arrival", href: "/international/post-arrival" }}
        stats={intlBannerPreDeparture}
        heroImage={UNSPLASH.airportTravel}
        asideTitle="Pre-departure · snapshot"
        metaItems={[
          "Pre-departure sequencing · Study Master Canada",
          "Study permit & border questions · Visa Master Canada (RCIC) when retained",
          `${SITE.office.city}, ON · ${SITE.hours}`,
          "Verify airline and IRCC instructions for your intake",
        ]}
      />

      <TrustBar />

      <InPageNav
        items={[
          { label: "2026 context", href: "#context-2026", badge: "NEW" },
          { label: "Basics", href: "#basics" },
          { label: "Documents", href: "#documents" },
          { label: "Packing", href: "#packing" },
          { label: "Insurance", href: "#insurance" },
          { label: "Flights", href: "#flights" },
          { label: "First week", href: "#first-week-prep" },
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
              <p className="font-bold text-sm-gray-900">Week zero starts before the flight</p>
              <p className="mt-1 text-sm leading-relaxed text-sm-gray-700 md:text-base">
                Officers and landlords both read consistency: names on documents match, addresses make sense, and you can
                explain your first-month plan in plain language. Use the interactive checklist below in order — tick and
                print a copy for family at home.
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
            label="DISCIPLINE"
            title="Why this checklist exists"
            description={
              <p>
                Miss one document at check-in, one winter layer in your carry-on, or one bank appointment — and your first
                week becomes damage control. The sections below anchor independently; use the nav to jump while you pack.
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

      <section className="scroll-mt-28 border-t border-sm-gray-200 bg-white pb-11 pt-11 md:pb-14 md:pt-14">
        <div className="mx-auto max-w-7xl space-y-8 px-6 md:px-10">
          <InternationalSectionTitle
            label="CHECKLIST"
            title="Documents through first-week prep"
            description={
              <p className="text-sm-gray-700">
                Jump with the nav above — each block anchors independently inside the interactive list.
              </p>
            }
          />
          <PreDepartureChecklist />
        </div>
      </section>

      <div id="journey" className="scroll-mt-28">
        <StepList
          eyebrow="PROCESS"
          title="From approval letter to a calm landing week"
          subtitle="High-level sequencing — adapt dates to your intake and city."
          steps={preDepartureJourney}
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
            title="Common pre-departure mistakes"
            description={<p>Small misses compound — fix these before you lock your flight.</p>}
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
            <Link className="font-semibold text-sm-teal-dark underline" href="/international/banking">
              Banking
            </Link>{" "}
            ·{" "}
            <Link className="font-semibold text-sm-teal-dark underline" href="/international/working-in-canada">
              Working in Canada
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
          title="Pre-departure & arrival questions"
          subtitle="Money, timing, and documents — verify IRCC and your airline for your intake."
          tabs={[
            {
              id: "money",
              label: "Funds & GIC",
              faqs: [INTL_FAQS[0], INTL_FAQS[1], INTL_FAQS[7]],
            },
            {
              id: "timing",
              label: "Timing & permit",
              faqs: [INTL_FAQS[14], INTL_FAQS[5], INTL_FAQS[3]],
            },
            {
              id: "help",
              label: "Support",
              faqs: [INTL_FAQS[13], INTL_FAQS[15], INTL_FAQS[8]],
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
