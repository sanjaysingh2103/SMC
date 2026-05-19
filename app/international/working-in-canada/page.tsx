import Link from "next/link";
import { buildMetadata } from "@/lib/metadata-helpers";
import { SITE } from "@/lib/site";
import { UNSPLASH } from "@/lib/media/unsplash";
import { INTL_FAQS } from "@/lib/data/intl-faqs";
import { InternationalGuideBanner } from "@/components/sections/international-guide-banner";
import { intlBannerWorkingCanada } from "@/lib/data/intl-guide-banner-presets";
import { TrustBar } from "@/components/sections/trust-bar";
import { InPageNav } from "@/components/sections/in-page-nav";
import { StepList } from "@/components/sections/step-list";
import { TabbedFaq } from "@/components/sections/tabbed-faq";
import { RcicDisclaimer } from "@/components/sections/rcic-disclaimer";
import { CtaBlock } from "@/components/sections/cta-block";
import { InternationalSectionTitle } from "@/components/sections/international-section-title";
import { Info } from "lucide-react";

export const metadata = buildMetadata({
  title: "Working in Canada on a Study Permit (24 Hours / Week)",
  description:
    "24 hrs/week off-campus rule since Nov 2024, on-campus work, scheduled breaks, SIN, typical wages, taxes. Study Master Canada explains student work rights from Toronto & the GTA; complex filings via RCIC partner Visa Master Canada.",
  path: "/international/working-in-canada",
});

const foundationCards = [
  {
    title: "Permit conditions first",
    body: "Your IRCC portal letter and study permit text define what you may do — not blog posts or employer HR guesses. Screenshots go stale when policy shifts.",
    href: "/international/visa",
    linkLabel: "Study permit guide",
  },
  {
    title: "Why the cap matters",
    body: "Unauthorized work or misunderstood hours can show up later in PGWP reviews and PR files. Treat payroll like evidence, not pocket money.",
    href: "/international/pgwp",
    linkLabel: "PGWP overview",
  },
  {
    title: "Full-time study is the spine",
    body: "Most off-campus authorization assumes you remain a genuine full-time student in an eligible program. Part-time terms need registrar-approved reasons — verify before you stack shifts.",
    href: "/international/colleges",
    linkLabel: "College programs",
  },
] as const;

const offCampusCards = [
  {
    title: "24 hours / week (class weeks)",
    body: "Since November 2024, many study permits cap off-campus work at 24 hours per week during scheduled classes. Count all off-campus employers together toward that ceiling.",
  },
  {
    title: "Read the actual conditions",
    body: "Conditions vary by intake, program changes, and amendments. Export a fresh PDF from the portal before signing employment contracts.",
  },
  {
    title: "Multiple jobs still one cap",
    body: "Two 15-hour gigs are not “under the radar” — they are 30 hours. Track weekly totals like a budget line.",
  },
] as const;

const onCampusCards = [
  {
    title: "On-campus employment",
    body: "Work for the institution or eligible campus employers may follow different rules from off-campus caps in many cases. Confirm definitions with your international student office before overlapping roles.",
  },
  {
    title: "ISO before HR",
    body: "Book a quick compliance check when job offers stack — especially if you mix on-campus, off-campus, or research assistantships.",
  },
  {
    title: "Co-op is not automatic",
    body: "Paid co-op placements often need a co-op work permit or other authorization beyond generic study-permit work lines. Do not start until requirements are clear.",
    href: "/international/visa",
    linkLabel: "Permit & co-op context",
  },
] as const;

const breakCards = [
  {
    title: "Scheduled breaks",
    body: "Reading week, winter break, and summer gaps may allow more hours when your enrollment status and permit text align. Keep registrar letters and term dates on file.",
  },
  {
    title: "Document the window",
    body: "Employers may ask for proof you are between terms. A transcript showing no active courses beats a verbal promise.",
  },
] as const;

const sinChecklist = [
  "Study permit + passport (valid)",
  "Proof of address and eligibility to work in Canada (as required when you apply)",
  "Service Canada appointment — book early in week one where appointments exist",
  "Letter from DLI confirming enrollment if asked",
] as const;

const wageRows = [
  { role: "Retail / customer service", band: "CAD $15–19" },
  { role: "Food service", band: "CAD $15–18 (+ tips where applicable)" },
  { role: "On-campus clerical / lab", band: "CAD $17–23 (skill-dependent)" },
] as const;

const workJourney = [
  {
    number: "01",
    title: "Export permit conditions",
    description: "Screenshot or PDF the current portal letter — know off-campus, on-campus, and co-op lines before you job hunt.",
  },
  {
    number: "02",
    title: "Confirm enrollment status",
    description: "Full-time registration, authorized reduced course load, or gap term — each changes what work is defensible.",
  },
  {
    number: "03",
    title: "SIN + first shift",
    description: "Apply for a Social Insurance Number early; payroll cannot run cleanly without it.",
  },
  {
    number: "04",
    title: "Track hours toward goals",
    description: "Stay inside caps during class weeks; bank compliant experience that supports PGWP and later PR conversations.",
  },
] as const;

const mistakeCards = [
  {
    title: "Trusting Reddit over your portal",
    body: "Policy and permit text change — verify your own document set every term.",
  },
  {
    title: "Stacking jobs past the cap",
    body: "All off-campus hours count together. Employers do not coordinate for you.",
  },
  {
    title: "Working while not a full-time student",
    body: "Dropping below full-time without an authorized reason can break both work authorization and PGWP eligibility.",
  },
  {
    title: "Starting co-op without the right permit",
    body: "Treat co-op offers like immigration events — confirm authorization before day one on site.",
  },
] as const;

export default function WorkingPage() {
  return (
    <main>
      <InternationalGuideBanner
        eyebrow="WORK RIGHTS"
        title="Working in Canada as a student — know your cap."
        lead="Work can subsidize rent, but breaking permit conditions jeopardizes PGWP and future PR files."
        body={
          <>
            Since Nov 2024, off-campus work during scheduled classes is often capped at{" "}
            <strong>24 hours/week</strong> — read your portal letter, not forum screenshots. Next:{" "}
            <Link
              className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
              href="/international/pgwp"
            >
              PGWP
            </Link>
            ,{" "}
            <Link
              className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
              href="/international/pathways-to-pr"
            >
              PR pathways
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
          { label: "Working in Canada" },
        ]}
        primaryCta={{
          label: "Book Free 20-Min Call",
          href: SITE.contactFormUrl,
        }}
        secondaryCta={{ label: "PGWP overview", href: "/international/pgwp" }}
        stats={intlBannerWorkingCanada}
        heroImage={UNSPLASH.cityStreetcar}
        asideTitle="Work rules · snapshot"
        metaItems={[
          "Work compliance coaching · Study Master Canada",
          "Complex permits & co-op filings · Visa Master Canada (RCIC) when retained",
          `${SITE.office.city}, ON · ${SITE.hours}`,
          "Verify IRCC instructions for your permit text",
        ]}
      />

      <TrustBar />

      <InPageNav
        items={[
          { label: "2026 context", href: "#context-2026", badge: "NEW" },
          { label: "Basics", href: "#basics" },
          { label: "Off-campus", href: "#off-campus" },
          { label: "On-campus", href: "#on-campus" },
          { label: "Breaks", href: "#breaks" },
          { label: "SIN", href: "#sin" },
          { label: "Pay & tax", href: "#pay" },
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
              <p className="font-bold text-sm-gray-900">Compliance is part of your immigration file</p>
              <p className="mt-1 text-sm leading-relaxed text-sm-gray-700 md:text-base">
                Officers connect dots across study permits, work history, and PGWP applications. Keep a simple weekly log
                of hours and employers during school terms — it costs almost nothing and can save months of stress if
                questions arise later.
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
            title="Student work in Canada — how to think about it"
            description={
              <p>
                Work authorization on a study permit is a bundle of conditions: where you work, how many hours, when you
                are allowed to be full-time, and whether co-op needs a separate permit. Treat each job offer as a
                compliance check, not just a paycheque.
              </p>
            }
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {foundationCards.map((c) => (
              <div key={c.title} className="card-pro grad-border relative flex flex-col p-6 md:p-7">
                <h3 className="text-lg font-bold leading-snug text-sm-gray-900">{c.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-sm-gray-700">{c.body}</p>
                {"href" in c && c.href ? (
                  <Link className="mt-4 text-sm font-semibold text-sm-teal-dark underline underline-offset-2" href={c.href}>
                    {c.linkLabel}
                  </Link>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="off-campus" className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="OFF-CAMPUS"
            title="24 hours/week during scheduled classes"
            description={
              <p>
                During scheduled classes, many study permits authorize off-campus work up to 24 hours per week total across
                all employers. Always match your plan to the permit in your name today — not a friend’s intake from last
                year.
              </p>
            }
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {offCampusCards.map((c) => (
              <div key={c.title} className="card-pro grad-border p-6 md:p-7">
                <h3 className="text-lg font-bold text-sm-gray-900">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="on-campus"
        className="scroll-mt-28 border-t border-sm-gray-200/80 bg-sm-off-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="ON-CAMPUS"
            title="Campus jobs & co-op"
            description={
              <p>
                On-campus roles may sit outside the weekly off-campus cap in many cases while you maintain eligible
                full-time status. Co-op placements are different — confirm whether a co-op work permit or other
                authorization applies before you start.
              </p>
            }
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {onCampusCards.map((c) => (
              <div key={c.title} className="card-pro grad-border relative flex flex-col p-6 md:p-7">
                <h3 className="text-lg font-bold text-sm-gray-900">{c.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-sm-gray-700">{c.body}</p>
                {"href" in c && c.href ? (
                  <Link className="mt-4 text-sm font-semibold text-sm-teal-dark underline underline-offset-2" href={c.href}>
                    {c.linkLabel}
                  </Link>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="breaks" className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="BREAKS"
            title="Full-time during scheduled breaks"
            description={
              <p>
                Scheduled breaks may allow more hours when your enrollment status and permit conditions align. Keep
                official term dates so employers and you share the same calendar.
              </p>
            }
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {breakCards.map((c) => (
              <div key={c.title} className="card-pro grad-border p-6 md:p-7">
                <h3 className="text-lg font-bold text-sm-gray-900">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="sin"
        className="scroll-mt-28 border-t border-sm-gray-200/80 bg-sm-off-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="SIN"
            title="Social Insurance Number"
            description={
              <p>
                Apply for a SIN before your first shift. Service Canada appointments can book quickly in larger cities —
                schedule early in your first week where possible.
              </p>
            }
          />
          <div className="mt-8 rounded-2xl border border-sm-gray-100 bg-white p-6 shadow-sm md:p-8">
            <h3 className="text-lg font-bold text-sm-gray-900">Practical checklist</h3>
            <ul className="mt-4 space-y-2 text-sm text-sm-gray-700">
              {sinChecklist.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sm-teal" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="pay" className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="WAGES"
            title="Typical student jobs & hourly bands (2026 planning)"
            description={
              <p>
                Rates vary by province minimum wage, city, and role — use these as planning bands, not job offers. Cross-check
                your budget in{" "}
                <Link className="font-semibold text-sm-teal-dark underline underline-offset-2" href="/international/cost">
                  cost of studying
                </Link>{" "}
                and{" "}
                <Link className="font-semibold text-sm-teal-dark underline underline-offset-2" href="/tools/cost-calculator">
                  cost calculator
                </Link>
                .
              </p>
            }
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {wageRows.map((w) => (
              <div key={w.role} className="rounded-2xl border border-sm-gray-100 bg-sm-off-white/80 p-6 shadow-sm">
                <p className="font-bold text-sm-gray-900">{w.role}</p>
                <p className="mt-2 text-sm text-sm-gray-700">{w.band}</p>
              </div>
            ))}
          </div>
          <div className="relative mt-10 overflow-hidden rounded-2xl border border-sm-teal/20 bg-gradient-to-br from-sm-teal/5 via-white to-sm-orange/5 p-6 shadow-[0_12px_40px_-12px_rgba(30,90,165,0.18)] md:p-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sm-teal/10 via-transparent to-transparent" />
            <div className="relative">
              <h3 className="text-lg font-bold text-sm-gray-900">Tax implications</h3>
              <p className="mt-2 text-sm leading-relaxed text-sm-gray-700 md:text-base">
                Employers issue T4 slips; file a T1 return even if income is modest — you may recover withholdings or claim
                tuition credits depending on eligibility. Cross-border or US citizen cases should involve a tax
                professional; we do not provide tax advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div id="journey" className="scroll-mt-28">
        <StepList
          eyebrow="PROCESS"
          title="From permit read to compliant paycheques"
          subtitle="High-level sequencing — confirm every step against your current permit and registrar records."
          steps={workJourney}
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
            title="Common work mistakes"
            description={<p>Fix these early — they are cheaper than rebuilding a study narrative after a compliance hit.</p>}
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
            <Link className="font-semibold text-sm-teal-dark underline" href="/international/post-arrival">
              Post-arrival
            </Link>{" "}
            ·{" "}
            <Link className="font-semibold text-sm-teal-dark underline" href="/international/banking">
              Banking
            </Link>{" "}
            ·{" "}
            <Link className="font-semibold text-sm-teal-dark underline" href="/international/financial-planning">
              Financial planning
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
          title="Work & study questions"
          subtitle="Grounded in how students actually balance jobs, permits, and long-term goals — verify IRCC for your permit text."
          tabs={[
            {
              id: "work",
              label: "Hours & conditions",
              faqs: [INTL_FAQS[6], INTL_FAQS[17], INTL_FAQS[16]],
            },
            {
              id: "programs",
              label: "Programs & money",
              faqs: [INTL_FAQS[4], INTL_FAQS[0], INTL_FAQS[7]],
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
