import Link from "next/link";
import { buildMetadata } from "@/lib/metadata-helpers";
import { SITE } from "@/lib/site";
import { UNSPLASH } from "@/lib/media/unsplash";
import { INTL_FAQS } from "@/lib/data/intl-faqs";
import { InternationalGuideBanner } from "@/components/sections/international-guide-banner";
import { intlBannerScholarships } from "@/lib/data/intl-guide-banner-presets";
import { TrustBar } from "@/components/sections/trust-bar";
import { InPageNav } from "@/components/sections/in-page-nav";
import { StepList } from "@/components/sections/step-list";
import { TabbedFaq } from "@/components/sections/tabbed-faq";
import { RcicDisclaimer } from "@/components/sections/rcic-disclaimer";
import { CtaBlock } from "@/components/sections/cta-block";
import { InternationalSectionTitle } from "@/components/sections/international-section-title";
import { Info } from "lucide-react";

export const metadata = buildMetadata({
  title: "Scholarships for International Students in Canada",
  description:
    "Merit vs need-based aid, institutional entrance awards, graduate funding, ISS offices, Vanier orientation, honest timelines. Study Master Canada GTA counselling; prove funds for permits separately.",
  path: "/international/scholarships",
});

const typeCards = [
  {
    title: "Institutional entrance awards",
    body: "Often merit-based at admission — may be automatic from grades or require a separate essay. Amounts are frequently partial; read stacking rules.",
  },
  {
    title: "Faculty / program scholarships",
    body: "Tied to specific departments — deadlines may precede general admissions portals.",
  },
  {
    title: "Government & bilateral programs",
    body: "Some countries run outbound scholarships with return-of-service clauses — declare honestly on visa-facing forms.",
  },
  {
    title: "Graduate funding packages",
    body: "TA/RA lines mix wages and fee reductions — distinguish guaranteed hours from “likely” ranges.",
  },
] as const;

const awardsCards = [
  {
    title: "Vanier Canada Graduate Scholarships",
    body: "Doctoral excellence stream — hyper-competitive; requires institutional nomination and research trajectory.",
  },
  {
    title: "Provincial graduate schemes",
    body: "Ontario and other provinces run merit programs — eligibility varies by citizenship and field.",
  },
  {
    title: "International student offices (ISS)",
    body: "Campus hubs list bursaries and emergency funds — often smaller awards but real deadlines.",
  },
] as const;

const tipCards = [
  {
    title: "One calendar across time zones",
    body: "EST vs IST matters — convert deadlines for referees abroad.",
  },
  {
    title: "Reuse evidence, not essays",
    body: "Tailor every paragraph to the award criteria — panels detect recycled SOPs.",
  },
  {
    title: "Referee lead time",
    body: "Ask four weeks ahead for faculty letters — peak seasons swamp inboxes.",
  },
  {
    title: "Word limits as hard gates",
    body: "Portal truncation can auto-disqualify — paste into plain text first.",
  },
] as const;

const calendarMilestones = [
  { phase: "Summer prior", detail: "Finalize award research list; align English retakes if scholarship demands higher bands." },
  { phase: "Sept–Nov", detail: "Many entrance deadlines for following September; parallel permit financial planning." },
  { phase: "Winter", detail: "Graduate departmental awards often route through supervisors — coordinate referee timing." },
  { phase: "Spring", detail: "Appeal responses and gap-fill with bursaries; avoid betting rent on uncertain aid." },
] as const;

const scholarshipJourney = [
  {
    number: "01",
    title: "Inventory profile",
    description: "Grades, leadership, research, financial need flags — map to award eligibility matrices.",
  },
  {
    number: "02",
    title: "Parallel budgets",
    description: "Core plan funds tuition + rent without scholarships — aid stays upside until deposited.",
  },
  {
    number: "03",
    title: "Align narratives",
    description: "Scholarship essays must match SOP and LORs — no competing origin stories.",
  },
  {
    number: "04",
    title: "Declare cleanly",
    description: "Report offers on institutional and permit-facing forms as rules require — integrity matters.",
  },
] as const;

const mistakeCards = [
  {
    title: "Living expenses from uncertain aid",
    body: "Until money hits the account, officers expect proof-of-funds that does not depend on unconfirmed awards.",
  },
  {
    title: "Hiding awards on forms",
    body: "Undeclared aid can clash with bursary rules and study permit credibility — follow each form’s instructions.",
  },
  {
    title: "Last-night uploads",
    body: "Portals crash — finish 48 hours early and keep PDF receipts.",
  },
  {
    title: "Generic “leadership” essays",
    body: "Replace adjectives with one dated example and one measurable outcome per paragraph.",
  },
] as const;

export default function ScholarshipsPage() {
  return (
    <main>
      <InternationalGuideBanner
        eyebrow="FUNDING"
        title="Scholarships — hope, with spreadsheets."
        lead="Merit aid exists, but partial awards dominate. We help you chase realistic funding without gambling rent — and keep visa-facing finances coherent."
        body={
          <>
            Report awards honestly on institutional and permit-facing forms — undeclared aid can clash with bursary rules
            and proof-of-funds credibility. Next:{" "}
            <Link
              className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
              href="/international/cost"
            >
              Cost of studying
            </Link>
            ,{" "}
            <Link
              className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
              href="/international/gic"
            >
              GIC guide
            </Link>
            , and{" "}
            <Link
              className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
              href="/international/financial-planning"
            >
              financial planning
            </Link>
            .
          </>
        }
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Study in Canada", href: "/international" },
          { label: "Scholarships" },
        ]}
        primaryCta={{
          label: "Book Free 20-Min Call",
          href: SITE.contactFormUrl,
        }}
        secondaryCta={{ label: "Cost guide", href: "/international/cost" }}
        stats={intlBannerScholarships}
        heroImage={UNSPLASH.graduation}
        asideTitle="Funding · snapshot"
        metaItems={[
          "Award literacy · Study Master Canada",
          "Proof-of-funds strategy separate from ‘wish’ budgets",
          `${SITE.office.city}, ON · ${SITE.hours}`,
          "Verify each institution’s stacking and disclosure rules",
        ]}
      />

      <TrustBar />

      <InPageNav
        items={[
          { label: "2026 context", href: "#context-2026", badge: "NEW" },
          { label: "Types", href: "#types" },
          { label: "Notable awards", href: "#awards" },
          { label: "How we help", href: "#help" },
          { label: "Tips", href: "#tips" },
          { label: "Calendar", href: "#calendar" },
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
              <p className="font-bold text-sm-gray-900">Scholarships complement budgets — they rarely replace proof of funds</p>
              <p className="mt-1 text-sm leading-relaxed text-sm-gray-700 md:text-base">
                Study permit officers expect credible liquidity independent of uncertain merit rounds. Build your core plan
                from tuition invoices, GIC floor where applicable, and documented family support — then layer scholarships as
                upside. International student offices publish bursaries and emergency funds with different rules than
                entrance marketing pages.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="types" className="scroll-mt-28 border-t border-sm-gray-200/80 bg-sm-off-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="LANDSCAPE"
            title="Types of scholarships & aid"
            description={
              <p className="text-sm-gray-600">
                Labels vary by campus — always read whether an award is automatic, competitive, need-aware, or stack-limited.
              </p>
            }
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {typeCards.map((c) => (
              <div key={c.title} className="card-pro grad-border p-6 md:p-7">
                <h3 className="text-lg font-bold text-sm-gray-900">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="awards" className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="NOTABLE AWARDS"
            title="Orientation list — not exhaustive"
            description={
              <p className="text-sm-gray-600">
                Names and criteria change — verify on the funder or university site before you budget.
              </p>
            }
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {awardsCards.map((c) => (
              <div key={c.title} className="card-pro grad-border p-6 md:p-7">
                <h3 className="text-lg font-bold text-sm-gray-900">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="help"
        className="scroll-mt-28 border-t border-sm-gray-200/80 bg-sm-off-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 text-sm leading-relaxed text-sm-gray-700 md:text-base">
          <InternationalSectionTitle
            label="OUR ROLE"
            title="How we help you find scholarships"
            description={
              <p className="text-sm-gray-700">
                We inventory your profile (grades, leadership, research, financial need flags), map deadlines beside
                admissions timelines, and stress-test essays so they align with your SOP — not contradict it. We do not
                guarantee awards; we increase clarity and reduce self-inflicted disqualifications.
              </p>
            }
          />
        </div>
      </section>

      <section id="tips" className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle label="PLAYBOOK" title="Practical tips" />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {tipCards.map((t) => (
              <div key={t.title} className="rounded-2xl border border-sm-gray-100 bg-sm-off-white p-6 shadow-sm">
                <p className="font-bold text-sm-gray-900">{t.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="calendar"
        className="scroll-mt-28 border-t border-sm-gray-200/80 bg-sm-off-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="TIMELINE"
            title="Sample scholarship calendar"
            description={
              <p className="text-sm-gray-700">
                Illustrative phases — Canadian institutions run multiple intakes; graduate awards often follow departmental
                committee cycles.
              </p>
            }
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {calendarMilestones.map((row) => (
              <div key={row.phase} className="card-pro grad-border p-6 md:p-7">
                <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">{row.phase}</p>
                <p className="mt-3 text-sm leading-relaxed text-sm-gray-700">{row.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="journey" className="scroll-mt-28">
        <StepList
          eyebrow="PROCESS"
          title="From profile inventory to clean disclosures"
          subtitle="Scholarships sit beside admissions and immigration evidence — one coherent story wins."
          steps={scholarshipJourney}
          sectionClassName="section-pro section-pro-bg-stripe border-t border-sm-gray-200/80"
          columns={4}
        />
      </div>

      <section id="mistakes" className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="PITFALLS"
            title="Scholarship mistakes that hurt files"
            description={<p>Financial and integrity themes overlap — fix these early.</p>}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {mistakeCards.map((m) => (
              <div key={m.title} className="rounded-2xl border border-sm-gray-100 bg-sm-off-white p-6 shadow-sm">
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
          title="Funding & study questions"
          subtitle="Merit aid is competitive — regulatory funds rules still apply to permits."
          tabs={[
            {
              id: "awards",
              label: "Scholarships & aid",
              faqs: [INTL_FAQS[18], INTL_FAQS[0], INTL_FAQS[14]],
            },
            {
              id: "funds",
              label: "Proof of funds",
              faqs: [INTL_FAQS[1], INTL_FAQS[7], INTL_FAQS[3]],
            },
            {
              id: "help",
              label: "Counselling & permits",
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
