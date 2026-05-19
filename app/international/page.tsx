import Link from "next/link";
import { buildMetadata } from "@/lib/metadata-helpers";
import { SITE } from "@/lib/site";
import { UNSPLASH } from "@/lib/media/unsplash";
import { INTL_SERVICES } from "@/lib/data/intl-services";
import { INTL_FAQS } from "@/lib/data/intl-faqs";
import { InternationalGuideBanner } from "@/components/sections/international-guide-banner";
import { TrustBar } from "@/components/sections/trust-bar";
import { ProgramSearchEmbed } from "@/components/marketing/program-search-embed";
import { ServiceGrid } from "@/components/sections/service-grid";
import { StepList } from "@/components/sections/step-list";
import { CountryGrid } from "@/components/sections/country-grid";
import { ProvinceGrid } from "@/components/sections/province-grid";
import { TabbedFaq } from "@/components/sections/tabbed-faq";
import { RcicDisclaimer } from "@/components/sections/rcic-disclaimer";
import { CtaBlock } from "@/components/sections/cta-block";
import { InPageNav } from "@/components/sections/in-page-nav";
import { InternationalSectionTitle } from "@/components/sections/international-section-title";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Heart, MapPin, ShieldCheck, Users } from "lucide-react";

export const metadata = buildMetadata({
  title: "Study in Canada - International Student Recruitment",
  description:
    "Toronto & Greater Toronto Area study-in-Canada consultants: admissions, GIC, PAL, study permits via RCIC partner Visa Master Canada. 1,500+ programs. Book a free call.",
  path: "/international",
});

const whyTiles = [
  {
    icon: MapPin,
    title: "Toronto & GTA · in-person",
    body: "Real office, real walk-ins, real accountability — 83 Kennedy Road South, Brampton, ON.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed RCIC partner",
    body: "Visa Master Canada handles regulated immigration filings when you retain them.",
  },
  {
    icon: BookOpen,
    title: "1,500+ Canadian programs",
    body: "ApplyBoard infrastructure quietly widens your shortlist.",
  },
  {
    icon: Users,
    title: "Real counsellors, not bots",
    body: "We read your story and defend it in front of an officer’s skepticism.",
  },
  {
    icon: Clock,
    title: "Replies within 1 business day",
    body: "PAL windows and deposit deadlines do not wait for slow inboxes.",
  },
  {
    icon: Heart,
    title: "Fair, honest pricing",
    body: "International counselling is staged; domestic aid remains free.",
  },
];

const steps = [
  {
    number: "01",
    title: "Free 20-minute consultation",
    description:
      "We clarify budget, timeline, target provinces, and whether a college or university pathway fits your PGWP goals.",
  },
  {
    number: "02",
    title: "Program shortlist (48 hours)",
    description:
      "Expect 3–5 curated options aligned to your grades, English scores, and finances — not a generic PDF dump.",
  },
  {
    number: "03",
    title: "Applications submitted",
    description:
      "Document control, portal hygiene, and referee coordination so nothing expires silently.",
  },
  {
    number: "04",
    title: "Offer letter received",
    description:
      "Deposit strategy, scholarship follow-ups, and PAL issuance through your institution.",
  },
  {
    number: "05",
    title: "Financial + visa preparation",
    description:
      "GIC purchase at CAD $22,895 minimum (Sept 1, 2025), proof of funds modeling, and RCIC-led study permit filing.",
  },
  {
    number: "06",
    title: "Arrive in Canada",
    description:
      "Pre-departure checklist, airport logistics, SIN/bank/phone sequencing, and first-week priorities.",
  },
];

export default function InternationalHubPage() {
  return (
    <main>
      <InternationalGuideBanner
        eyebrow="STUDY IN CANADA · 2026"
        title="Your Canadian education, guided from Toronto & the GTA."
        lead="Access to 1,500+ Canadian colleges and universities. Regulated immigration through our RCIC partner. One GTA office. One team — from first consultation to first Canadian winter."
        body="Document-first counselling, not offshore scripts. When you are ready to file, our RCIC partner handles regulated immigration work in the same building."
        asideTitle="2026 reality"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Study in Canada" },
        ]}
        primaryCta={{
          label: "Book Free 20-Min Call",
          href: SITE.contactFormUrl,
        }}
        secondaryCta={{ label: "Search Programs", href: "/international/programs" }}
        stats={[
          { value: "1,500+", label: "Canadian programs (ApplyBoard)" },
          { value: "437,000", label: "2025 study permit cap (national)" },
          { value: "CAD $22,895", label: "GIC minimum (Sept 1, 2025)" },
          { value: "24 hrs / week", label: "Off-campus work cap" },
        ]}
        heroImage={UNSPLASH.toronto}
        metaItems={[
          "★★★★★ 5.0 on Google",
          `${SITE.office.city}, ON walk-in office`,
          "Licensed RCIC · Visa Master Canada",
          "Replies within 1 business day",
        ]}
      />

      <TrustBar />

      <InPageNav
        items={[
          { label: "Overview", href: "#overview" },
          { label: "Find program", href: "#programs" },
          { label: "Your path", href: "#paths" },
          { label: "Services", href: "#services" },
          { label: "How we help", href: "#process" },
          { label: "Why us", href: "#why-us" },
          { label: "Regions", href: "#countries" },
          { label: "FAQs", href: "#faqs" },
        ]}
        cta={{ label: "Book consultation", href: SITE.contactFormUrl }}
      />

      <section
        id="overview"
        className="scroll-mt-28 border-t border-sm-gray-200/80 bg-sm-off-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
            <InternationalSectionTitle
              label="OVERVIEW"
              title="International students — same GTA team, document-first"
              description={
                <p className="text-sm-gray-700">
                  We shortlist programs, tighten admissions packages, and model costs against current IRCC expectations (PAL,
                  GIC floor, caps). New to the 2026 policy picture? Start with{" "}
                  <Link className="font-semibold text-sm-teal-dark underline" href="/international/study-in-canada">
                    Why Canada — 2026 snapshot
                  </Link>
                  . When you need a study permit filed, we coordinate with{" "}
                  <Link className="font-semibold text-sm-teal-dark underline" href="/international/visa">
                    Visa Master Canada
                  </Link>
                  , our licensed RCIC partner in the same building — education evidence on our side, regulated submissions
                  on theirs.
                </p>
              }
            />
            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: "Provinces & programs",
                  body: "College, university, and grad routes matched to budget and PGWP-aware goals.",
                },
                {
                  title: "Numbers you can defend",
                  body: "GIC, tuition, and living costs framed for family meetings and credible study plans.",
                },
                {
                  title: "After the offer",
                  body: "Pre-departure, housing, banking, and first-week sequencing so landing is boring.",
                },
              ].map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-sm-gray-100 bg-white p-5 text-sm text-sm-gray-700 shadow-sm"
                >
                  <span className="font-bold text-sm-gray-900">{item.title}</span>
                  <span className="mt-2 block leading-relaxed">{item.body}</span>
                </li>
              ))}
            </ul>
        </div>
      </section>

      <section
        id="programs"
        className="section-pro section-pro-bg-soft scroll-mt-28 border-t border-sm-gray-200"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <ProgramSearchEmbed />
        </div>
      </section>

      <section id="paths" className="section-pro scroll-mt-28 border-t border-sm-gray-200/80">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="PATHS"
            title="Choose your best-fit pathway"
            description={
              <p className="max-w-full">
                Canada is not one-size-fits-all. Start with the credential that matches your budget, timeline,
                and post-graduation plan.
              </p>
            }
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="card-pro grad-border p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-sm-teal-dark">Colleges</p>
              <h3 className="mt-3 text-2xl font-extrabold text-sm-gray-900">Diplomas & certificates</h3>
              <p className="mt-3 text-sm text-sm-gray-700">
                1–3 year programs, co-op options, and career-first credentials. PGWP eligibility now intersects with field-of-study rules — choose carefully.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-sm-gray-800">
                <li>Typical tuition: CAD $12,000–25,000</li>
                <li>Hands-on labs & employer partnerships</li>
                <li>PGWP-eligible when program rules align</li>
              </ul>
              <Button asChild className="mt-6" variant="secondary">
                <Link href="/international/colleges">Explore colleges</Link>
              </Button>
            </div>

            <div className="card-pro grad-border p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-sm-teal-dark">Universities</p>
              <h3 className="mt-3 text-2xl font-extrabold text-sm-gray-900">Bachelor&apos;s degrees</h3>
              <p className="mt-3 text-sm text-sm-gray-700">
                Research-intensive pathways, co-op degrees, and global rankings that still require a credible study plan.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-sm-gray-800">
                <li>Typical tuition: CAD $20,000–48,000</li>
                <li>3–4 year programs common</li>
                <li>PGWP language thresholds at graduation</li>
              </ul>
              <Button asChild className="mt-6" variant="secondary">
                <Link href="/international/universities">Explore universities</Link>
              </Button>
            </div>

            <div className="card-pro grad-border p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-sm-orange-dark">Graduate studies</p>
              <h3 className="mt-3 text-2xl font-extrabold text-sm-gray-900">Master&apos;s & doctoral</h3>
              <p className="mt-3 text-sm text-sm-gray-700">
                Advanced credentials with research funding possibilities — and tighter language expectations for PGWP at the university level (CLB 7).
              </p>
              <ul className="mt-4 space-y-2 text-sm text-sm-gray-800">
                <li>1–5 year ranges by credential</li>
                <li>Spouse open work permits in limited cases</li>
                <li>Field-specific scholarships</li>
              </ul>
              <Button asChild className="mt-6">
                <Link href="/international/graduate-studies">Explore graduate options</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div id="services" className="scroll-mt-28 border-t border-sm-gray-200 bg-white">
        <ServiceGrid services={INTL_SERVICES} />
      </div>

      <div id="process" className="scroll-mt-28">
        <StepList
          eyebrow="PROCESS"
          title="Our six-step launch sequence"
          subtitle="Predictable milestones so parents, sponsors, and visa officers see the same timeline."
          steps={steps}
          sectionClassName="section-pro section-pro-bg-stripe border-t border-sm-gray-200/80"
        />
      </div>

      <section id="why-us" className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="WHY US"
            title="Why Study Master Canada"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyTiles.map((t) => (
              <div
                key={t.title}
                className="rounded-2xl border border-sm-gray-100 bg-sm-off-white p-6"
              >
                <t.icon className="h-6 w-6 text-sm-teal-dark" />
                <h3 className="mt-3 text-lg font-bold text-sm-gray-900">{t.title}</h3>
                <p className="mt-2 text-sm text-sm-gray-700">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="countries" className="scroll-mt-28 border-t border-sm-gray-200/80 bg-sm-off-white">
        <CountryGrid />
        <ProvinceGrid />
      </section>

      <section className="section-blue-grad relative overflow-hidden border-t border-white/15 py-11 text-white md:py-14">
        <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-6 md:px-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Your study permit — handled by a licensed RCIC team.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
              Study Master Canada stays in its lane: admissions strategy, program fit, financial planning, and pre-departure logistics. When you need a study permit application, extension, or complex refusal analysis, we introduce you to Visa Master Canada — a well-established licensed RCIC team that handles regulated submissions when retained.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
              This gives you a clear separation of roles: education counselling on our side, and regulated immigration representation on theirs.
            </p>
          </div>
          <div className="rounded-3xl border border-white/25 bg-white/10 p-6 backdrop-blur md:p-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-sm-orange">
              What they handle (RCIC scope)
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/85">
              <li>Study permit applications & extensions</li>
              <li>Spouse open work permits where policy allows</li>
              <li>PGWP filings and eligibility reviews</li>
              <li>Refusals, reconsiderations, and appeals strategy</li>
              <li>PR pathway mapping tied to regulated advice</li>
            </ul>
            <Button
              asChild
              className="mt-6 border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
              variant="outline"
            >
              <Link href="/international/visa">Read study permit overview</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-sm-gray-200 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="TOOLS"
            title="Planning calculators"
            description={
              <p className="text-sm-gray-700">
                Stress-test GIC wires and first-year budgets before you commit deposits — numbers your family can defend.
              </p>
            }
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Link
              href="/tools/gic-calculator"
              className="rounded-3xl border border-sm-gray-100 bg-white p-8 shadow-[0_20px_50px_-15px_rgba(11,22,40,0.15)] transition hover:-translate-y-0.5"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-sm-teal-dark">
                Tool
              </p>
              <h3 className="mt-3 text-2xl font-extrabold">GIC calculator</h3>
              <p className="mt-3 text-sm text-sm-gray-700">
                Model CAD $22,895 + fees + buffer before you instruct your bank.
              </p>
              <span className="mt-6 inline-flex text-sm font-semibold text-sm-teal-dark">
                Open calculator →
              </span>
            </Link>
            <Link
              href="/tools/cost-calculator"
              className="rounded-3xl border border-sm-gray-100 bg-white p-8 shadow-[0_20px_50px_-15px_rgba(11,22,40,0.15)] transition hover:-translate-y-0.5"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-sm-orange-dark">
                Tool
              </p>
              <h3 className="mt-3 text-2xl font-extrabold">First-year cost calculator</h3>
              <p className="mt-3 text-sm text-sm-gray-700">
                Blend tuition, rent multipliers, lifestyle, and one-time expenses for a defensible budget conversation at home.
              </p>
              <span className="mt-6 inline-flex text-sm font-semibold text-sm-orange-dark">
                Open calculator →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <div
        id="faqs"
        className="scroll-mt-28 border-t border-sm-gray-200 bg-gradient-to-b from-white via-sm-off-white/50 to-white"
      >
        <TabbedFaq
          sectionPaddingClassName="py-14 md:py-16"
          title="Frequently Asked Questions"
          subtitle="Fast answers for study permits, programs, costs, and timelines."
          tabs={[
            {
              id: "basics",
              label: "Basics",
              faqs: [
                INTL_FAQS[18], // DLI
                INTL_FAQS[3], // PAL
                INTL_FAQS[2], // SDS
              ],
            },
            {
              id: "programs",
              label: "Programs",
              faqs: [
                INTL_FAQS[4], // college vs university
                INTL_FAQS[11], // transfer
                INTL_FAQS[12], // grades
              ],
            },
            {
              id: "money",
              label: "Money",
              faqs: [
                INTL_FAQS[0], // cost 2026
                INTL_FAQS[1], // minimum bank balance
                INTL_FAQS[7], // GIC
                INTL_FAQS[20], // scholarships
              ],
            },
            {
              id: "visa",
              label: "Visa & work",
              faqs: [
                INTL_FAQS[5], // processing time
                INTL_FAQS[6], // work while studying
                INTL_FAQS[9], // spouse
                INTL_FAQS[8], // refusals
              ],
            },
            {
              id: "after",
              label: "After graduation",
              faqs: [
                INTL_FAQS[10], // PGWP
                INTL_FAQS[22], // stay after graduation
              ],
            },
            {
              id: "why-us",
              label: "Why us",
              faqs: [
                INTL_FAQS[13], // how SMC helps
                INTL_FAQS[15], // immigration consultant
                INTL_FAQS[14], // when to start
              ],
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
