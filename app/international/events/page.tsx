import Link from "next/link";
import { buildMetadata } from "@/lib/metadata-helpers";
import { SITE } from "@/lib/site";
import { UNSPLASH } from "@/lib/media/unsplash";
import { InternationalGuideBanner } from "@/components/sections/international-guide-banner";
import { intlBannerEvents } from "@/lib/data/intl-guide-banner-presets";
import { TrustBar } from "@/components/sections/trust-bar";
import { InPageNav } from "@/components/sections/in-page-nav";
import { CtaBlock } from "@/components/sections/cta-block";
import { InternationalSectionTitle } from "@/components/sections/international-section-title";

export const metadata = buildMetadata({
  title: "Study in Canada Events & Webinars",
  description:
    "Study Master Canada hosts Toronto & GTA info sessions, webinars, and fairs. Book a call for next month’s schedule while our events calendar finalizes.",
  path: "/international/events",
});

export default function EventsPage() {
  return (
    <main>
      <InternationalGuideBanner
        eyebrow="EVENTS"
        title="Events, webinars & fairs"
        lead="We believe in face-to-face questions. When halls are full, we still aim to reply within one business day."
        body={`Walk-in weekdays ${SITE.hours} · ${SITE.office.full}`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Study in Canada", href: "/international" },
          { label: "Events" },
        ]}
        primaryCta={{
          label: "Book Free 20-Min Call",
          href: SITE.contactFormUrl,
        }}
        secondaryCta={{ label: "Contact us", href: SITE.contactFormUrl }}
        stats={intlBannerEvents}
        heroImage={UNSPLASH.counselling}
        asideTitle="Events · snapshot"
      />

      <TrustBar />

      <InPageNav
        items={[
          { label: "Schedule", href: "#schedule" },
          { label: "At fairs", href: "#fairs" },
          { label: "Formats", href: "#formats" },
        ]}
        cta={{ label: "Book call", href: SITE.contactFormUrl }}
      />

      <section
        id="schedule"
        className="scroll-mt-28 border-t border-sm-gray-200/80 bg-sm-off-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="CALENDAR"
            title="Upcoming sessions"
            description={
              <p className="text-sm-gray-700">
                We publish intake-specific webinars (PAL, GIC, PGWP updates) as IRCC policy shifts. Until a live feed is
                embedded here, use our contact form — include your target intake so invites stay relevant.
              </p>
            }
          />
          <div className="mt-8 rounded-3xl border border-dashed border-sm-gray-300 bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-sm-gray-500">Next sessions</p>
            <p className="mt-3 text-lg font-semibold text-sm-gray-900">
              Next sessions announced monthly — book a call and we’ll flag you for the next GTA topic night.
            </p>
          </div>
        </div>
      </section>

      <section id="fairs" className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10 text-sm leading-relaxed text-sm-gray-700 md:text-base">
          <InternationalSectionTitle
            label="FAIRS"
            title="What to expect at a university fair"
            description={
              <p className="text-sm-gray-700">
                Bring transcripts, test scores, and a prioritized question list. Ask about PAL issuance timing, deposit
                refund policies, and co-op placement geography — not just ranking stickers.
              </p>
            }
          />
        </div>
      </section>

      <section
        id="formats"
        className="scroll-mt-28 border-t border-sm-gray-200/80 bg-sm-off-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl space-y-6 px-6 text-sm leading-relaxed text-sm-gray-700 md:px-10 md:text-base">
          <InternationalSectionTitle label="FORMATS" title="Types of events we host" />
          <ul className="mt-8 list-disc space-y-2 pl-5">
            <li>Topic webinars (GIC, PAL, PGWP policy updates)</li>
            <li>1:1 document diagnostics for families who already have a file started</li>
            <li>In-person GTA sessions at {SITE.office.full}</li>
            <li>Partner sessions with Visa Master Canada RCIC when immigration topics dominate</li>
          </ul>

          <p className="rounded-2xl border border-sm-orange/30 bg-sm-orange/5 p-5 text-sm text-sm-gray-800">
            Want the next invite?{" "}
            <Link className="font-semibold text-sm-orange-dark underline" href={SITE.contactFormUrl}>
              Contact us through the secure intake form
            </Link>
            .
          </p>
        </div>
      </section>

      <CtaBlock />
    </main>
  );
}
