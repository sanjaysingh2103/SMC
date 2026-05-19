import Link from "next/link";
import { buildMetadata } from "@/lib/metadata-helpers";
import { SITE } from "@/lib/site";
import { UNSPLASH } from "@/lib/media/unsplash";
import { INTL_FAQS } from "@/lib/data/intl-faqs";
import { InternationalGuideBanner } from "@/components/sections/international-guide-banner";
import { intlBannerAccommodation } from "@/lib/data/intl-guide-banner-presets";
import { TrustBar } from "@/components/sections/trust-bar";
import { InPageNav } from "@/components/sections/in-page-nav";
import { StepList } from "@/components/sections/step-list";
import { TabbedFaq } from "@/components/sections/tabbed-faq";
import { RcicDisclaimer } from "@/components/sections/rcic-disclaimer";
import { CtaBlock } from "@/components/sections/cta-block";
import { InternationalSectionTitle } from "@/components/sections/international-section-title";
import { Info } from "lucide-react";

export const metadata = buildMetadata({
  title: "Student Accommodation in Canada (On vs Off Campus)",
  description:
    "On-campus vs off-campus housing, short-term arrival stays, rent by city, leases vs sublets, tenant rights. Practical Toronto & GTA advice from Study Master Canada.",
  path: "/international/accommodation",
});

const rents = [
  { city: "Toronto", range: "$1,800–2,800 studio" },
  { city: "Vancouver", range: "$2,000–3,000 studio" },
  { city: "Montreal", range: "$1,200–1,800 studio" },
  { city: "Calgary", range: "$1,400–1,900 studio" },
  { city: "Halifax", range: "$1,300–1,700 studio" },
] as const;

const foundationCards = [
  {
    title: "Scams spike every August",
    body: "Never wire deposits to strangers from marketplace DMs — verify IDs, leases, and in-person or corporate fallbacks for your first weeks.",
    href: "/international/post-arrival",
    linkLabel: "Post-arrival housing flow",
  },
  {
    title: "Rent ≠ total housing cost",
    body: "Heat, hydro, internet, and contents insurance stack on top of headline rent — model a monthly spine, not a listing photo.",
    href: "/international/cost",
    linkLabel: "Cost of studying",
  },
  {
    title: "City choice is a budget choice",
    body: "Toronto and Vancouver demand higher deposits and competition; smaller cities can still have tight Sept windows — start search early.",
    href: "/international/programs",
    linkLabel: "Program search",
  },
] as const;

const campusCards = [
  {
    title: "On-campus",
    body: "Predictable commute, built-in community, meal plans — but limited privacy, summer closure rules, and lottery-style demand at some schools.",
  },
  {
    title: "Off-campus",
    body: "Roommate savings and independence — but landlord risk, transit passes, utilities you must track, and guarantor friction for newcomers.",
  },
] as const;

const shortTermCards = [
  {
    title: "Buy 2–4 weeks of runway",
    body: "Airbnb, student hostels, and verified corporate blocks near Pearson or campus hubs buy time while you tour rentals in person.",
  },
  {
    title: "Verify before you e-transfer",
    body: "Legitimate landlords show ID, leases, and keys handoff plans. Pressure to pay “today only” is a red flag.",
  },
] as const;

const longTermCards = [
  {
    title: "Leases & deposits",
    body: "Expect credit checks, guarantor requests, and first/last month deposits. Without Canadian credit, larger deposits or guarantor services are common — budget for it.",
  },
  {
    title: "Roommate culture",
    body: "Shared apartments are normal in Toronto and Vancouver. Write house rules early: cleaning rotation, quiet hours, guest policy — good roommates reduce dropout risk.",
  },
] as const;

const legalCards = [
  {
    title: "Lease vs sublet",
    body: "Leases grant stability; sublets offer flexibility but weaker protections. Read Ontario’s Standard Lease (or your province’s equivalent) before signing.",
  },
  {
    title: "Tenant rights basics",
    body: "Ontario, BC, Quebec, Alberta, and Nova Scotia use different tribunals. Know who pays heat, legal rent increase rules, and how to document maintenance in writing.",
  },
] as const;

const housingJourney = [
  {
    number: "01",
    title: "Shortlist neighbourhoods",
    description: "Transit time to campus, grocery access, and night safety — map them before you fly.",
  },
  {
    number: "02",
    title: "Tour in person",
    description: "Virtual tours help narrow lists; in-person catches mould, noise, and landlord vibe.",
  },
  {
    number: "03",
    title: "Sign with eyes open",
    description: "Illegal clauses happen — compare against provincial standard leases and ask your ISO when unsure.",
  },
  {
    number: "04",
    title: "Document everything",
    description: "Photo condition at move-in, save rent receipts, and log maintenance requests in email threads.",
  },
] as const;

const mistakeCards = [
  {
    title: "Paying deposit before keys logic checks out",
    body: "If it feels rushed, pause — verify ownership and possession dates.",
  },
  {
    title: "Ignoring utilities in the math",
    body: "A “cheap” rent with brutal hydro can erase savings — ask for typical monthly bills.",
  },
  {
    title: "Skipping roommate interview",
    body: "Bad fit is expensive — ask lifestyle questions before you co-sign.",
  },
  {
    title: "No contents insurance",
    body: "Theft and leaks happen — student policies are cheaper than replacing a laptop.",
  },
] as const;

export default function AccommodationPage() {
  return (
    <main>
      <InternationalGuideBanner
        eyebrow="HOUSING"
        title="Accommodation in Canada — sign leases with eyes open."
        lead="Housing scams spike every August. We teach you how to read listings, verify landlords, and budget heat/hydro surprises."
        body={
          <>
            Never wire deposits to strangers from marketplace DMs — inspect units or use verified corporate housing for
            your first weeks. Next:{" "}
            <Link
              className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
              href="/international/post-arrival"
            >
              Post-arrival
            </Link>
            ,{" "}
            <Link
              className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
              href="/international/banking"
            >
              banking
            </Link>
            , and{" "}
            <Link
              className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
              href="/tools/cost-calculator"
            >
              cost calculator
            </Link>
            .
          </>
        }
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Study in Canada", href: "/international" },
          { label: "Accommodation" },
        ]}
        primaryCta={{
          label: "Book Free 20-Min Call",
          href: SITE.contactFormUrl,
        }}
        secondaryCta={{ label: "Post-arrival", href: "/international/post-arrival" }}
        stats={intlBannerAccommodation}
        heroImage={UNSPLASH.apartmentKeys}
        asideTitle="Housing · snapshot"
        metaItems={[
          "Housing & lease literacy · Study Master Canada",
          "Immigration status tied to study address updates · Visa Master Canada (RCIC) when retained",
          `${SITE.office.city}, ON · ${SITE.hours}`,
          "Verify landlord and provincial tenant rules locally",
        ]}
      />

      <TrustBar />

      <InPageNav
        items={[
          { label: "2026 context", href: "#context-2026", badge: "NEW" },
          { label: "Basics", href: "#basics" },
          { label: "On vs off", href: "#campus" },
          { label: "Short-term", href: "#short" },
          { label: "Long-term", href: "#long" },
          { label: "Rent bands", href: "#rents" },
          { label: "Lease law", href: "#legal" },
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
              <p className="font-bold text-sm-gray-900">Your address is part of your student story</p>
              <p className="mt-1 text-sm leading-relaxed text-sm-gray-700 md:text-base">
                Banks, schools, and immigration updates all care that your address trail makes sense. Short-term →
                long-term is normal; unexplained gaps or scam losses are not. Build a paper and email trail from day one.
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
            title="Housing is a fraud and budget problem first"
            description={
              <p>
                Treat listings like due diligence: verify landlords, read utility clauses, and keep deposits traceable.
                Good housing supports study permits and mental health; bad housing drains both.
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

      <section id="campus" className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="CHOICE"
            title="On-campus vs off-campus"
            description={
              <p>
                Match housing type to your budget, privacy needs, and how much admin you want the school to handle versus
                what you will manage with roommates and landlords.
              </p>
            }
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {campusCards.map((c) => (
              <div key={c.title} className="card-pro grad-border p-6 md:p-7">
                <h3 className="text-lg font-bold text-sm-gray-900">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="short" className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="ARRIVAL"
            title="Short-term options (2–4 weeks)"
            description={
              <p className="text-sm-gray-700">
                Buy runway while you tour long-term rentals in person — never send e-transfer deposits to strangers on
                Facebook without verified IDs.
              </p>
            }
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {shortTermCards.map((c) => (
              <div key={c.title} className="card-pro grad-border p-6 md:p-7">
                <h3 className="text-lg font-bold text-sm-gray-900">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="long"
        className="scroll-mt-28 border-t border-sm-gray-200/80 bg-sm-off-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle label="LEASE UP" title="Long-term renting" />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {longTermCards.map((c) => (
              <div key={c.title} className="card-pro grad-border p-6 md:p-7">
                <h3 className="text-lg font-bold text-sm-gray-900">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="rents" className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="PLANNING"
            title="Typical monthly rent (studio planning bands)"
            description={
              <p className="text-sm-gray-700">Illustrative CAD ranges — verify listings before you budget flights.</p>
            }
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rents.map((r) => (
              <div
                key={r.city}
                className="rounded-2xl border border-sm-gray-100 bg-sm-off-white/80 p-6 text-center shadow-sm md:p-7"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">{r.city}</p>
                <p className="mt-3 text-sm font-semibold text-sm-gray-900">{r.range}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="legal"
        className="scroll-mt-28 border-t border-sm-gray-200/80 bg-sm-off-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle label="LEGAL" title="Lease vs sublet & tenant basics" />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {legalCards.map((c) => (
              <div key={c.title} className="card-pro grad-border p-6 md:p-7">
                <h3 className="text-lg font-bold text-sm-gray-900">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="journey" className="scroll-mt-28">
        <StepList
          eyebrow="PROCESS"
          title="From search to keys in hand"
          subtitle="Practical sequencing — ISO and local tenant resources can fill gaps we do not cover."
          steps={housingJourney}
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
            title="Common housing mistakes"
            description={<p>Prevention beats fighting a bad lease after you have moved in.</p>}
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
          title="Housing & money questions"
          subtitle="Budget, location, and study choices intersect — verify institutions and listings independently."
          tabs={[
            {
              id: "budget",
              label: "Budget & funds",
              faqs: [INTL_FAQS[0], INTL_FAQS[1], INTL_FAQS[7]],
            },
            {
              id: "study",
              label: "Programs & place",
              faqs: [INTL_FAQS[4], INTL_FAQS[16], INTL_FAQS[17]],
            },
            {
              id: "help",
              label: "Support & next steps",
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
