import Link from "next/link";
import { buildMetadata } from "@/lib/metadata-helpers";
import { SITE } from "@/lib/site";
import { UNSPLASH } from "@/lib/media/unsplash";
import { INTL_FAQS } from "@/lib/data/intl-faqs";
import { InternationalGuideBanner } from "@/components/sections/international-guide-banner";
import { intlBannerPostArrival } from "@/lib/data/intl-guide-banner-presets";
import { TrustBar } from "@/components/sections/trust-bar";
import { InPageNav } from "@/components/sections/in-page-nav";
import { StepList } from "@/components/sections/step-list";
import { TabbedFaq } from "@/components/sections/tabbed-faq";
import { RcicDisclaimer } from "@/components/sections/rcic-disclaimer";
import { CtaBlock } from "@/components/sections/cta-block";
import { InternationalSectionTitle } from "@/components/sections/international-section-title";
import { Info } from "lucide-react";

export const metadata = buildMetadata({
  title: "Post-Arrival Support for Students in Canada",
  description:
    "Airport pickup, housing, SIN, banking, health cards, phone plans, and orientation priorities. Toronto & GTA Study Master Canada coordination.",
  path: "/international/post-arrival",
});

function cardAnchor(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const cards = [
  {
    title: "Airport pickup",
    body: "Coordinate timing, baggage limits, and backup rideshare funds before wheels touch Pearson.",
  },
  {
    title: "Temporary housing",
    body: "Two to four weeks in furnished sublets while you tour long-term rentals in person.",
  },
  {
    title: "Long-term housing",
    body: "Lease review, roommate interviews, and landlord reference packages.",
  },
  {
    title: "SIN (Social Insurance Number)",
    body: "Book Service Canada early — on-campus and off-campus payroll both need a valid SIN.",
  },
  {
    title: "Bank account",
    body: "Unlock GIC payouts, set bill pay, and order debit cards before tuition deadlines.",
  },
  {
    title: "Health card (OHIP/MSP)",
    body: "Each province differs; bridge insurance until provincial coverage activates.",
  },
  {
    title: "Phone plan",
    body: "Compare prepaid vs postpaid; confirm eSIM support for your handset model.",
  },
  {
    title: "Campus orientation",
    body: "ID cards, course adds/drops, and international student office workshops.",
  },
] as const;

const foundationCards = [
  {
    title: "IRCC landing ≠ enrolled",
    body: "Keep study permit conditions visible: address updates, full-time registration, and work lines matter from day one.",
    href: "/international/visa",
    linkLabel: "Permit basics",
  },
  {
    title: "Sequence beats heroics",
    body: "Housing stability and banking unlock almost everything else — avoid random Friday queues without a plan.",
    href: "/international/banking",
    linkLabel: "Banking guide",
  },
  {
    title: "Bridge from pre-departure",
    body: "If you booked SIN and bank from home, week one is execution. If not, start appointments the morning after landing.",
    href: "/international/pre-departure",
    linkLabel: "Pre-departure checklist",
  },
] as const;

const postArrivalJourney = [
  {
    number: "01",
    title: "Land & loop home",
    description: "Clear customs with calm answers, message family, and activate a data path so you are not offline in a new city.",
  },
  {
    number: "02",
    title: "Lock short-term base",
    description: "Confirm temporary housing, save landlord contacts, and collect anything that counts as address proof for banks.",
  },
  {
    number: "03",
    title: "Run the ID & money pipe",
    description: "SIN appointment, bank onboarding, provincial health steps, and phone SIM — in the order your bookings allow.",
  },
  {
    number: "04",
    title: "Sync campus",
    description: "Orientation, ISO check-in, course timetable, and permit copies on your phone for employers.",
  },
] as const;

const mistakeCards = [
  {
    title: "Skipping SIN in week one",
    body: "Payroll waits on it — book Service Canada before classes consume your calendar.",
  },
  {
    title: "Wiring rent to a stranger’s DM",
    body: "Verify landlords and leases; use traceable methods and in-person tours when possible.",
  },
  {
    title: "Dropping bridge insurance too early",
    body: "Provincial cards have waiting periods — read the fine print for your province.",
  },
  {
    title: "Ignoring permit work lines",
    body: "Employers ask; officers later read the same story — align hours with current IRCC rules.",
  },
] as const;

export default function PostArrivalPage() {
  return (
    <main>
      <InternationalGuideBanner
        eyebrow="AFTER YOU LAND"
        title="Post-arrival support — week one is a project plan."
        lead="We help you sequence SIN, banking, phone, and housing tasks so you are not queueing randomly at 4 pm on a Friday."
        body={
          <>
            IRCC landing <strong>≠</strong> enrolled — prove address, get provincial ID steps right, and keep study-permit
            conditions visible. Next:{" "}
            <Link
              className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
              href="/international/accommodation"
            >
              Accommodation
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
              href="/international/gic"
            >
              GIC unlock
            </Link>
            .
          </>
        }
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Study in Canada", href: "/international" },
          { label: "Post-arrival" },
        ]}
        primaryCta={{
          label: "Book Free 20-Min Call",
          href: SITE.contactFormUrl,
        }}
        secondaryCta={{ label: "Accommodation guide", href: "/international/accommodation" }}
        stats={intlBannerPostArrival}
        heroImage={UNSPLASH.cityStreetcar}
        asideTitle="Post-arrival · snapshot"
        metaItems={[
          "Landing-week coordination · Study Master Canada",
          "Permit & work-condition questions · Visa Master Canada (RCIC) when retained",
          `${SITE.office.city}, ON · ${SITE.hours}`,
          "Verify provincial health and bank packages for your city",
        ]}
      />

      <TrustBar />

      <InPageNav
        items={[
          { label: "2026 context", href: "#context-2026", badge: "NEW" },
          { label: "Basics", href: "#basics" },
          { label: "Week-one grid", href: "#first-week" },
          { label: "Airport", href: "#airport-pickup" },
          { label: "Housing", href: "#temporary-housing" },
          { label: "SIN & bank", href: "#sin-social-insurance-number" },
          { label: "Journey", href: "#journey" },
          { label: "Mistakes", href: "#mistakes" },
          { label: "Coordination", href: "#coordination" },
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
              <p className="font-bold text-sm-gray-900">Parents see a calendar, not chaos</p>
              <p className="mt-1 text-sm leading-relaxed text-sm-gray-700 md:text-base">
                We coordinate these workflows before you land where possible — airport timing, short-term housing,
                appointment slots, and a sensible order for SIN, bank, phone, and health steps. Timelines flex by intake
                and city; the sequencing discipline stays constant.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="basics" className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="FOUNDATION"
            title="How to think about week one"
            description={
              <p>
                Order matters: a stable address and working debit card reduce friction for everything else — phone plans,
                employer paperwork, and campus ID lines.
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
        id="first-week"
        className="scroll-mt-28 border-t border-sm-gray-200/80 bg-sm-off-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="SEQUENCE"
            title="First-week task cards"
            description={
              <p className="text-sm-gray-700">
                Order matters: housing stability and banking unlock almost everything else. Tap a card topic in the nav to
                jump.
              </p>
            }
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {cards.map((c) => (
              <div
                key={c.title}
                id={cardAnchor(c.title)}
                className="card-pro grad-border scroll-mt-28 flex flex-col p-6"
              >
                <h3 className="text-lg font-bold text-sm-gray-900">{c.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-sm-gray-700">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="journey" className="scroll-mt-28">
        <StepList
          eyebrow="PROCESS"
          title="From touchdown to campus-ready"
          subtitle="Adapt timing to your intake — keep confirmations on your phone."
          steps={postArrivalJourney}
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
            title="Common landing-week mistakes"
            description={<p>Fix these early — they are cheaper than emergency cash or missed payroll.</p>}
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

      <section id="coordination" className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="SUPPORT"
            title="How we coordinate landing week"
            description={
              <p className="text-sm-gray-700">
                We coordinate these workflows before you land — so your parents see a calendar, not chaos. Timelines flex
                by intake, airport, and housing market, but the sequencing discipline stays constant.
              </p>
            }
          />
          <div className="relative mt-8 overflow-hidden rounded-2xl border border-sm-teal/20 bg-gradient-to-br from-sm-teal/5 via-white to-sm-orange/5 p-6 shadow-[0_12px_40px_-12px_rgba(30,90,165,0.18)] md:p-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sm-teal/10 via-transparent to-transparent" />
            <p className="relative text-sm font-medium text-sm-gray-800 md:text-base">
              Cross-link:{" "}
              <Link className="font-bold text-sm-teal-dark underline underline-offset-2" href="/international/financial-planning">
                Financial planning
              </Link>{" "}
              for tuition pull timing and{" "}
              <Link className="font-bold text-sm-teal-dark underline underline-offset-2" href="/international/cost">
                cost of studying
              </Link>{" "}
              for rent bands.
            </p>
          </div>
        </div>
      </section>

      <div
        id="faqs"
        className="scroll-mt-28 border-t border-sm-gray-200 bg-gradient-to-b from-white via-sm-off-white/50 to-white"
      >
        <TabbedFaq
          sectionPaddingClassName="py-14 md:py-16"
          title="Post-arrival questions"
          subtitle="Work, money, and next steps — verify IRCC and provincial sites for your case."
          tabs={[
            {
              id: "settle",
              label: "Settling in",
              faqs: [INTL_FAQS[16], INTL_FAQS[6], INTL_FAQS[0]],
            },
            {
              id: "money",
              label: "Money & GIC",
              faqs: [INTL_FAQS[7], INTL_FAQS[1], INTL_FAQS[4]],
            },
            {
              id: "next",
              label: "After study",
              faqs: [INTL_FAQS[10], INTL_FAQS[19], INTL_FAQS[15]],
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
