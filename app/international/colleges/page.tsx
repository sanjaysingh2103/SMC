import Link from "next/link";
import { buildMetadata } from "@/lib/metadata-helpers";
import { SITE } from "@/lib/site";
import { UNSPLASH } from "@/lib/media/unsplash";
import { INTL_FAQS } from "@/lib/data/intl-faqs";
import { InternationalGuideBanner } from "@/components/sections/international-guide-banner";
import { intlBannerColleges } from "@/lib/data/intl-guide-banner-presets";
import { TrustBar } from "@/components/sections/trust-bar";
import { InPageNav } from "@/components/sections/in-page-nav";
import { StepList } from "@/components/sections/step-list";
import { TabbedFaq } from "@/components/sections/tabbed-faq";
import { RcicDisclaimer } from "@/components/sections/rcic-disclaimer";
import { CtaBlock } from "@/components/sections/cta-block";
import { InternationalSectionTitle } from "@/components/sections/international-section-title";
import { Info } from "lucide-react";

export const metadata = buildMetadata({
  title: "Canadian Colleges for International Students",
  description:
    "Canadian public colleges: diplomas, advanced diplomas, co-op, PGWP field-of-study rules, PAL timing, tuition bands. GTA counselling at Study Master Canada; study permits via Visa Master Canada (RCIC).",
  path: "/international/colleges",
});

const colleges = [
  "Conestoga College",
  "Seneca Polytechnic",
  "Sheridan College",
  "Humber Polytechnic",
  "Centennial College",
  "George Brown College",
  "Fanshawe College",
  "Algonquin College",
  "Mohawk College",
  "Niagara College",
  "Durham College",
  "Saskatchewan Polytechnic",
] as const;

const foundationCards = [
  {
    title: "Applied credentials",
    body: "Public colleges focus on job-ready skills: labs, clinics, studios, and work-integrated learning. Credentials are provincially regulated — not “easier,” parallel to degrees for different goals.",
    href: "/international/universities",
    linkLabel: "Compare universities",
  },
  {
    title: "PGWP is program-specific",
    body: "IRCC ties many college PGWP outcomes to field-of-study and program eligibility lists. Verify the exact program code before deposits — marketing PDFs are not immigration law.",
    href: "/international/pgwp",
    linkLabel: "PGWP overview",
  },
  {
    title: "Multiple intakes",
    body: "September, January, and May starts spread risk when you miss one test or transcript deadline — map backwards from your tightest constraint.",
    href: "/international/admissions",
    linkLabel: "Admissions calendar",
  },
] as const;

const facts = [
  {
    title: "Career-first curricula",
    body: "Programs mirror employer workflows — health, skilled trades, IT, business operations, and media production are common strengths.",
  },
  {
    title: "1–3 year credentials",
    body: "Certificates, diplomas, advanced diplomas, and graduate certificates stack for degree pathways where articulation agreements exist.",
  },
  {
    title: "Co-op where offered",
    body: "Paid work terms can offset living costs but may require co-op work permits — confirm authorization before day one on site.",
  },
  {
    title: "Tuition bands",
    body: "Many international diplomas land roughly CAD $15,000–25,000 annually before housing — health and specialized tech programs can exceed bands.",
  },
  {
    title: "GTA commutes",
    body: "Peel and York Region rooming costs differ sharply from downtown Toronto — we model rent with transit time to campus.",
  },
  {
    title: "Transfer ladders",
    body: "Formal pathways to universities exist but are not automatic — course selection in year one affects credit carry.",
  },
] as const;

const collegeJourney = [
  {
    number: "01",
    title: "Clarify outcome",
    description: "Credential goal, licensing needs, PGWP intent, and budget ceiling — written in one paragraph before you search.",
  },
  {
    number: "02",
    title: "Shortlist DLIs",
    description: "Filter by province, co-op availability, and field — then verify PAL issuance patterns for your intake.",
  },
  {
    number: "03",
    title: "Prove prerequisites",
    description: "Math, science, or portfolio gates — missing one course can silently disqualify you.",
  },
  {
    number: "04",
    title: "File + fund",
    description: "Admissions package aligned with GIC and study permit narrative — RCIC partner files permits when retained.",
  },
] as const;

const mistakeCards = [
  {
    title: "Assuming all diplomas get PGWP",
    body: "Eligibility depends on program, length, DLI status, and current IRCC instructions — verify before you pay.",
  },
  {
    title: "Ignoring co-op permit rules",
    body: "Co-op is not generic off-campus work — wrong authorization can break compliance.",
  },
  {
    title: "Rent math from Instagram",
    body: "Budget real neighbourhoods with deposits, utilities, and winter transit — not brochure skylines.",
  },
  {
    title: "Skipping English subscore lines",
    body: "Nursing and allied health often demand higher speaking bands — read program fine print.",
  },
] as const;

export default function CollegesPage() {
  return (
    <main>
      <InternationalGuideBanner
        eyebrow="CANADIAN COLLEGES"
        title="Canadian colleges — skills, speed, and honest PGWP math."
        lead="Colleges are not “easier universities.” They are applied credentials built for labour-market entry — with tighter PGWP guardrails on many routes than generic degrees."
        body={
          <>
            International tuition often lands <strong>CAD $15k–25k / year</strong> before housing — verify field-of-study PGWP
            lists for your exact program code. Next:{" "}
            <Link
              className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
              href="/international/programs"
            >
              Program search
            </Link>
            ,{" "}
            <Link
              className="font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
              href="/international/working-in-canada"
            >
              work while studying
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
          { label: "Colleges" },
        ]}
        primaryCta={{
          label: "Book Free 20-Min Call",
          href: SITE.contactFormUrl,
        }}
        secondaryCta={{ label: "Program search", href: "/international/programs" }}
        stats={intlBannerColleges}
        heroImage={UNSPLASH.studentsCampusWalk}
        asideTitle="Colleges · snapshot"
        metaItems={[
          "College & polytechnic shortlists · Study Master Canada",
          "Study permits · Visa Master Canada (RCIC) when retained",
          `${SITE.office.city}, ON · ${SITE.hours}`,
          "Verify IRCC DLI list and program-level PGWP rules",
        ]}
      />

      <TrustBar />

      <InPageNav
        items={[
          { label: "2026 context", href: "#context-2026", badge: "NEW" },
          { label: "Basics", href: "#basics" },
          { label: "Overview", href: "#overview" },
          { label: "Six facts", href: "#facts" },
          { label: "Schools", href: "#schools" },
          { label: "Uni vs college", href: "#tradeoffs" },
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
              <p className="font-bold text-sm-gray-900">College choice is now an immigration-aware choice</p>
              <p className="mt-1 text-sm leading-relaxed text-sm-gray-700 md:text-base">
                Provincial attestation letters (PALs) gate many new study permits; national intake caps made offer timing
                noisier. For colleges, post-graduation work permits increasingly depend on{" "}
                <strong>program-level eligibility</strong> — not just the institution brand. Build your shortlist like an
                officer will read it: credential, length, DLI number, and how you fund year one.
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
            title="What “Canadian college” means for international students"
            description={
              <p>
                Public colleges are designated learning institutions (DLIs) authorized by provinces to host international
                students. They deliver Ontario CAAT-style applied degrees and diplomas, polytechnic credentials in several
                provinces, and occupation-focused certificates — always confirm your campus and program on IRCC’s current
                DLI list.
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
        id="overview"
        className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl space-y-6 px-6 text-sm leading-relaxed text-sm-gray-700 md:px-10 md:text-base">
          <InternationalSectionTitle label="OVERVIEW" title="What is a Canadian college?" />
          <p>
            Canadian public colleges deliver diplomas, advanced diplomas, certificates, and graduate certificates with
            intense applied learning. Programs often run one to three years, integrate co-operative education where
            available, and maintain ties with regional employers in healthcare, skilled trades, information technology, and
            business operations.
          </p>
          <p>
            International tuition is typically lower than flagship research universities but still material — plan a
            realistic band before housing. Living costs swing between outer-GTA shared housing and downtown high-rises, so
            we model both with transit time to class.
          </p>
          <div className="relative overflow-hidden rounded-2xl border border-sm-teal/20 bg-gradient-to-br from-sm-teal/5 via-white to-sm-orange/5 p-6 shadow-[0_12px_40px_-12px_rgba(30,90,165,0.18)] md:p-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sm-teal/10 via-transparent to-transparent" />
            <p className="relative text-sm font-medium text-sm-gray-800 md:text-base">
              Cross-check finances in{" "}
              <Link className="font-bold text-sm-teal-dark underline underline-offset-2" href="/international/gic">
                GIC & proof of funds
              </Link>{" "}
              and{" "}
              <Link className="font-bold text-sm-teal-dark underline underline-offset-2" href="/tools/cost-calculator">
                first-year cost calculator
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section id="facts" className="scroll-mt-28 border-t border-sm-gray-200/80 bg-sm-off-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="REALITY CHECK"
            title="Six facts international families miss"
            description={<p>Orientation only — always verify the program page and IRCC instructions for your intake.</p>}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {facts.map((f) => (
              <div key={f.title} className="card-pro grad-border p-6 md:p-7">
                <h3 className="text-lg font-bold text-sm-gray-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="schools" className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="STARTING POINT"
            title="Twelve powerhouse names to research"
            description={
              <p className="text-sm-gray-600">
                Not a ranking — a GTA- and Canada-wide orientation list. Admission competitiveness, co-op depth, and PGWP
                eligibility vary by campus and credential.
              </p>
            }
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {colleges.map((c) => (
              <div key={c} className="card-pro grad-border p-4 text-sm font-semibold text-sm-gray-900 shadow-sm">
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="tradeoffs"
        className="scroll-mt-28 border-t border-sm-gray-200/80 bg-sm-off-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle label="DECISION GRID" title="College vs university — quick trade-offs" />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="card-pro grad-border p-6 md:p-7">
              <h3 className="text-lg font-bold text-sm-teal-dark">College is a good fit when…</h3>
              <ul className="mt-4 space-y-2 text-sm text-sm-gray-700">
                <li>You want employer-ready skills in 1–3 years.</li>
                <li>You value co-op income to offset living costs (with correct permits).</li>
                <li>You accept field-of-study PGWP scrutiny for your credential.</li>
              </ul>
            </div>
            <div className="card-pro grad-border p-6 md:p-7">
              <h3 className="text-lg font-bold text-sm-orange-dark">Consider a university instead when…</h3>
              <ul className="mt-4 space-y-2 text-sm text-sm-gray-700">
                <li>You need a degree for licensing or graduate school abroad.</li>
                <li>You want deep theory, research labs, or an academic track.</li>
                <li>You are targeting scholarships tied primarily to degree programs.</li>
              </ul>
            </div>
          </div>
          <p className="mt-8 text-sm text-sm-gray-700">
            Still torn? Read{" "}
            <Link className="font-semibold text-sm-teal-dark underline" href="/international/universities">
              Canadian universities
            </Link>{" "}
            and{" "}
            <Link className="font-semibold text-sm-teal-dark underline" href="/international/pgwp">
              PGWP overview
            </Link>
            .
          </p>
        </div>
      </section>

      <div id="journey" className="scroll-mt-28">
        <StepList
          eyebrow="PROCESS"
          title="From career goal to enrolment-ready"
          subtitle="Sequencing discipline — officers reward the same spine you need for admissions."
          steps={collegeJourney}
          sectionClassName="section-pro section-pro-bg-stripe border-t border-sm-gray-200/80"
          columns={4}
        />
      </div>

      <section id="mistakes" className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="PITFALLS"
            title="Common college planning mistakes"
            description={<p>Fix these in counselling — cheaper than refiling or switching credentials mid-stream.</p>}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {mistakeCards.map((m) => (
              <div key={m.title} className="rounded-2xl border border-sm-gray-100 bg-sm-off-white/90 p-6 shadow-sm">
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
          title="College & pathway questions"
          subtitle="Program fit, money, and permits — verify DLI pages and IRCC for your case."
          tabs={[
            {
              id: "fit",
              label: "Programs & PGWP",
              faqs: [INTL_FAQS[4], INTL_FAQS[10], INTL_FAQS[16]],
            },
            {
              id: "money",
              label: "Costs & funds",
              faqs: [INTL_FAQS[0], INTL_FAQS[7], INTL_FAQS[1]],
            },
            {
              id: "path",
              label: "Permits & help",
              faqs: [INTL_FAQS[3], INTL_FAQS[5], INTL_FAQS[15]],
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
