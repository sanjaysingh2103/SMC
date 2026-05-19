import Link from "next/link";
import { buildMetadata } from "@/lib/metadata-helpers";
import { SITE } from "@/lib/site";
import { UNSPLASH } from "@/lib/media/unsplash";
import { INTL_FAQS } from "@/lib/data/intl-faqs";
import { InternationalGuideBanner } from "@/components/sections/international-guide-banner";
import { intlBannerPathwaysPr } from "@/lib/data/intl-guide-banner-presets";
import { TrustBar } from "@/components/sections/trust-bar";
import { InPageNav } from "@/components/sections/in-page-nav";
import { StepList } from "@/components/sections/step-list";
import { TabbedFaq } from "@/components/sections/tabbed-faq";
import { RcicDisclaimer } from "@/components/sections/rcic-disclaimer";
import { CtaBlock } from "@/components/sections/cta-block";
import { InternationalSectionTitle } from "@/components/sections/international-section-title";
import { Info } from "lucide-react";

export const metadata = buildMetadata({
  title: "Pathways to Canadian PR for International Graduates",
  description:
    "Express Entry CEC, PNPs (OINP, BC PNP, AAIP), Atlantic Immigration Program, category-based draws. Immigration advice via RCIC partner Visa Master Canada.",
  path: "/international/pathways-to-pr",
});

const stackCards = [
  {
    title: "PGWP → skilled Canadian experience",
    body: "Your PR runway usually starts with PGWP eligibility and compliant work history. If your program is not PGWP-eligible, the whole plan changes.",
    href: "/international/pgwp",
    linkLabel: "PGWP rules",
  },
  {
    title: "Express Entry (CEC) as the default backbone",
    body: "CEC rewards skilled Canadian work with CRS points — but cutoff scores move. Treat scores as a scenario model, not a promise.",
    href: "#cec",
    linkLabel: "CEC overview",
  },
  {
    title: "PNPs as strategic forks (not consolation prizes)",
    body: "OINP, BC PNP, AAIP, NS streams — each has wage, NOC, employer, and intake logic. Timing and documentation are everything.",
    href: "#pnp",
    linkLabel: "PNP overview",
  },
  {
    title: "Language strategy (English + French)",
    body: "Language tests are not just admissions. Retests can unlock points; French proficiency can materially shift competitiveness.",
    href: "/international/english-tests",
    linkLabel: "English tests guide",
  },
  {
    title: "NOC accuracy and employer hygiene",
    body: "PR files often fail on mismatched duties, sloppy letters, or non-compliant work history. Build evidence like an auditor.",
    href: "/international/working-in-canada",
    linkLabel: "Work rules",
  },
  {
    title: "Regulated advice when it becomes legal strategy",
    body: "When you are choosing NOC, responding to refusals, or taking a province-specific fork, regulated immigration advice belongs with an RCIC when retained.",
    href: "/international/visa",
    linkLabel: "Permit context",
  },
] as const;

const pathwayJourney = [
  {
    number: "01",
    title: "Pick a PGWP-aware program",
    description:
      "Choose credentials and provinces with eligibility and labour-market fit in mind — not just brand names.",
  },
  {
    number: "02",
    title: "Graduate + apply on time",
    description:
      "Apply for PGWP within 180 days of completion. Missing the clock is one of the most expensive mistakes we see.",
  },
  {
    number: "03",
    title: "Build skilled experience cleanly",
    description:
      "Work authorization, hours, and employer letters must match reality. NOC alignment depends on actual duties.",
  },
  {
    number: "04",
    title: "Choose CEC / PNP / AIP fork",
    description:
      "Model CRS scenarios, then take the best available pathway when it opens — policy and quotas change quickly.",
  },
] as const;

const mistakes = [
  {
    title: "Unauthorized work or status gaps",
    body: "Working outside permit conditions or letting status lapse can poison PGWP and future PR options.",
  },
  {
    title: "Wrong NOC (duties mismatch)",
    body: "NOC is about duties — not job titles. Letters that don’t match duties get flagged fast.",
  },
  {
    title: "Assuming “category draw” = guaranteed invite",
    body: "Categories still require base competitiveness. Treat categories as a tailwind, not a ticket.",
  },
  {
    title: "No language retest plan",
    body: "Language scores expire. A timely retest can unlock points; ignoring it can stall you for a full year.",
  },
] as const;

export default function PathwaysPage() {
  return (
    <main>
      <InternationalGuideBanner
        eyebrow="PERMANENT RESIDENCY"
        title="Pathways to permanent residency — long game, sober plan."
        lead="Study → PGWP → skilled work → PR application is the headline. The footnotes are NOC codes, language tests, employer compliance, and provincial policy shifts."
        body={
          <>
            Study Master Canada maps education and work sequencing; regulated PR strategy lives with Visa Master Canada when
            you retain them. Start with{" "}
            <Link className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white" href="/international/pgwp">
              PGWP eligibility
            </Link>{" "}
            and{" "}
            <Link className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white" href="/international/working-in-canada">
              compliant work rules
            </Link>
            . CRS cutoffs and PNP lists change — never treat a blog post as law.
          </>
        }
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Study in Canada", href: "/international" },
          { label: "Pathways to PR" },
        ]}
        primaryCta={{
          label: "Book Free 20-Min Call",
          href: SITE.contactFormUrl,
        }}
        secondaryCta={{ label: "PGWP overview", href: "/international/pgwp" }}
        stats={intlBannerPathwaysPr}
        heroImage={UNSPLASH.toronto}
        asideTitle="PR planning · snapshot"
      />

      <TrustBar />

      <InPageNav
        items={[
          { label: "2026 context", href: "#context-2026", badge: "NEW" },
          { label: "Overview", href: "#overview" },
          { label: "CEC", href: "#cec" },
          { label: "PNPs", href: "#pnp" },
          { label: "AIP", href: "#aip" },
          { label: "Draws", href: "#draws" },
          { label: "Journey", href: "#journey" },
          { label: "Timeline", href: "#timeline" },
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
              <p className="font-bold text-sm-gray-900">PR planning is a sequencing problem</p>
              <p className="mt-1 text-sm leading-relaxed text-sm-gray-700 md:text-base">
                In 2025–2026, the biggest failures we see are not “bad luck” — they are timeline and compliance failures:
                picking non-eligible programs, missing the PGWP clock, building messy work letters, and ignoring language
                retest windows. Use this page to understand the forks; use regulated counsel when decisions become legal
                strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="overview"
        className="scroll-mt-28 border-t border-sm-gray-200/80 bg-sm-off-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="STACK"
            title="Common pathways for graduates"
            description={
              <>
                <p>
                  Most graduates stack Canadian education, PGWP employment, and language points into Express Entry’s
                  Canadian Experience Class (CEC) or a Provincial Nominee Program (PNP) enhanced with 600 CRS points when
                  approved.
                </p>
                <p>
                  Atlantic Canada continues to promote employer-driven Atlantic Immigration Program (AIP) routes for
                  designated employers — especially relevant if you study in Nova Scotia or have a designated employer
                  offer.
                </p>
              </>
            }
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {stackCards.map((c) => (
              <div key={c.title} className="card-pro grad-border relative flex flex-col p-6 md:p-7">
                <h3 className="text-lg font-bold leading-snug text-sm-gray-900">{c.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-sm-gray-700">{c.body}</p>
                <Link className="mt-4 text-sm font-semibold text-sm-teal-dark underline underline-offset-2" href={c.href}>
                  {c.linkLabel}
                </Link>
              </div>
            ))}
          </div>

          <div className="relative mt-10 w-full overflow-hidden rounded-2xl border border-sm-teal/20 bg-gradient-to-br from-sm-teal/5 via-white to-sm-orange/5 p-6 shadow-[0_12px_40px_-12px_rgba(30,90,165,0.18)] md:p-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sm-teal/10 via-transparent to-transparent" />
            <p className="relative text-sm font-medium text-sm-gray-800 md:text-base">
              Before you chase PR, confirm you have the right foundation:{" "}
              <Link className="font-bold text-sm-teal-dark underline underline-offset-2" href="/international/pgwp">
                PGWP eligibility
              </Link>{" "}
              and{" "}
              <Link className="font-bold text-sm-orange-dark underline underline-offset-2" href="/international/working-in-canada">
                work compliance (24 hrs/week rules)
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section id="cec" className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="CEC"
            title="Express Entry & CEC"
            description={
              <p>
                CEC rewards skilled Canadian work experience with CRS points for age, education, language, and arranged
                employment. Cutoff scores move with each draw — never promise a number to your parents; model scenarios
                instead.
              </p>
            }
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="card-pro grad-border p-6 md:p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">CRS</p>
              <h3 className="mt-3 text-lg font-bold text-sm-gray-900">Points are a moving target</h3>
              <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">
                CRS cutoffs shift with draw sizes and category focus. Build a plan that survives a higher cutoff rather
                than betting on one number.
              </p>
            </div>
            <div className="card-pro grad-border p-6 md:p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">WORK</p>
              <h3 className="mt-3 text-lg font-bold text-sm-gray-900">Skilled experience must be provable</h3>
              <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">
                Your duties, hours, and employer letter must align. NOC is about duties — not job titles.
              </p>
            </div>
            <div className="card-pro grad-border p-6 md:p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">LANGUAGE</p>
              <h3 className="mt-3 text-lg font-bold text-sm-gray-900">Retests can unlock points</h3>
              <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">
                Language scores expire. A scheduled retest window is often the cheapest “score increase” available.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="pnp"
        className="scroll-mt-28 border-t border-sm-gray-200/80 bg-sm-off-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="PNP"
            title="Provincial Nominee Programs"
            description={
              <p>
                Ontario (OINP), British Columbia (BC PNP), Alberta (AAIP), and Nova Scotia streams each attach different
                job-offer, wage, and NOC rules. PNPs are not consolation prizes — they are strategic forks requiring
                legal advice.
              </p>
            }
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="card-pro grad-border p-6 md:p-7">
              <h3 className="text-lg font-bold text-sm-gray-900">Enhanced vs base nominations</h3>
              <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">
                Some PNPs link to Express Entry (enhanced), others are base streams. The paperwork and timelines differ —
                don’t assume one path when you’re on the other.
              </p>
            </div>
            <div className="card-pro grad-border p-6 md:p-7">
              <h3 className="text-lg font-bold text-sm-gray-900">Employer-driven streams</h3>
              <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">
                Many streams require an eligible employer, wage band, and role classification. Your job letter quality
                becomes make-or-break evidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="aip" className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="ATLANTIC"
            title="Atlantic Immigration Program"
            description={
              <p>
                AIP links designated employers in NS, NB, PEI, and NL to settlement plans for newcomers. Graduates with
                local offers should explore AIP alongside federal options.
              </p>
            }
          />
        </div>
      </section>

      <section
        id="draws"
        className="scroll-mt-28 border-t border-sm-gray-200/80 bg-sm-off-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="DRAWS"
            title="Category-based draws (2025–2026 context)"
            description={
              <p>
                IRCC has run category-based Express Entry rounds targeting STEM, healthcare, French proficiency, trades,
                transport, and agriculture. Eligibility still requires core CRS competitiveness — categories are not
                automatic invites.
              </p>
            }
          />
        </div>
      </section>

      <div id="journey" className="scroll-mt-28">
        <StepList
          eyebrow="PROCESS"
          title="A defensible PR journey (high level)"
          subtitle="Not legal advice — a planning spine showing how education choices become PR options."
          steps={pathwayJourney}
          sectionClassName="section-pro section-pro-bg-stripe border-t border-sm-gray-200/80"
          columns={4}
        />
      </div>

      <section id="timeline" className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="TIMELINE"
            title="Typical timeline (illustrative)"
            description={<p>Real timelines vary by province, intake, work history, and draw patterns — use this as a mental model.</p>}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-sm-gray-100 bg-sm-off-white/80 p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">Phase 1</p>
              <p className="mt-3 text-lg font-extrabold text-sm-gray-900">Study</p>
              <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">
                Full-time compliance + strong transcripts. Early awareness of PGWP eligibility and your intended career
                direction.
              </p>
            </div>
            <div className="rounded-2xl border border-sm-gray-100 bg-sm-off-white/80 p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">Phase 2</p>
              <p className="mt-3 text-lg font-extrabold text-sm-gray-900">PGWP + skilled work</p>
              <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">
                Apply within 180 days, then build clean NOC-aligned experience with proper letters and tax records.
              </p>
            </div>
            <div className="rounded-2xl border border-sm-gray-100 bg-sm-off-white/80 p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">Phase 3</p>
              <p className="mt-3 text-lg font-extrabold text-sm-gray-900">PR filing</p>
              <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">
                CEC / PNP / AIP fork. Medicals + police certs + document consistency. Regulated strategy belongs with an
                RCIC when retained.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="mistakes"
        className="scroll-mt-28 border-t border-sm-gray-200/80 bg-sm-off-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="RISKS"
            title="PR mistakes to avoid"
            description={<p>These are the avoidable errors that cost people a full year — or force a more complex legal strategy later.</p>}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {mistakes.map((m) => (
              <div key={m.title} className="rounded-2xl border border-sm-gray-100 bg-white p-6 shadow-sm">
                <p className="font-bold text-sm-gray-900">{m.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">{m.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-sm-gray-600">
            Related reading:{" "}
            <Link className="font-semibold text-sm-teal-dark underline" href="/international/pgwp">
              PGWP
            </Link>{" "}
            ·{" "}
            <Link className="font-semibold text-sm-teal-dark underline" href="/international/working-in-canada">
              Working in Canada rules
            </Link>{" "}
            ·{" "}
            <Link className="font-semibold text-sm-teal-dark underline" href="/international/visa">
              Study permit guide
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
          title="Questions we hear about PR pathways"
          subtitle="Straight answers — and a reminder that regulated immigration advice is provided only by an RCIC when retained."
          tabs={[
            {
              id: "basics",
              label: "Basics",
              faqs: [INTL_FAQS[10], INTL_FAQS[19], INTL_FAQS[15]],
            },
            {
              id: "work",
              label: "Work & compliance",
              faqs: [INTL_FAQS[6], INTL_FAQS[17]],
            },
            {
              id: "choices",
              label: "College vs uni",
              faqs: [INTL_FAQS[4], INTL_FAQS[11]],
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
