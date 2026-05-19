import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import {
  AlertTriangle,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  DollarSign,
} from "lucide-react";
import { SITE } from "@/lib/site";
import { UNSPLASH } from "@/lib/media/unsplash";
import { TrustBar } from "@/components/sections/trust-bar";
import { InPageNav } from "@/components/sections/in-page-nav";
import { TabbedFaq } from "@/components/sections/tabbed-faq";
import { CtaBlock } from "@/components/sections/cta-block";

export const metadata: Metadata = {
  title: "Free OSAP Help 2026 - Ontario Student Aid | Brampton & GTA | Study Master Canada",
  description:
    "Free OSAP application help for Ontario students from Toronto & GTA experts. 2,000+ students helped with OSAP grants, loans, appeals, and renewals. WhatsApp us free today.",
  keywords:
    "OSAP, OSAP help, OSAP 2026, Ontario student aid, OSAP application, OSAP grants, OSAP loans, OSAP appeal, OSAP renewal, free OSAP help, Ontario student financial aid, OSAP Brampton, OSAP Toronto, OSAP GTA",
  openGraph: {
    title: "Free OSAP Help 2026 | 2,000+ Students Helped | Toronto & GTA",
    description:
      "Expert OSAP help for Ontario students — applications, reviews, and appeals. 100% free. Brampton office serving all of GTA.",
    type: "website",
    locale: "en_CA",
    siteName: "Study Master Canada",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free OSAP Help 2026 | 2,000+ Students Helped",
    description:
      "Expert OSAP help for Ontario students — applications, reviews, appeals. Free. Toronto & GTA.",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  alternates: { canonical: "https://studymastercanada.com/domestic/osap" },
};

type FaqItem = { question: string; answer: string };

const FAQS: FaqItem[] = [
  {
    question: "Who can apply for OSAP?",
    answer:
      "OSAP is for Canadian citizens, permanent residents, or protected persons who meet Ontario residency rules and are enrolled (or accepted) in an approved full-time or part-time program at a designated institution. You must declare your status accurately - errors on citizenship or residency are common reasons for reassessment or clawbacks.",
  },
  {
    question: "Can part-time students apply?",
    answer:
      "Yes. Part-time OSAP uses different assessment rules and typically lower funding caps than full-time. Your institution confirms whether your course load counts as part-time for OSAP in each term. Misclassifying full-time versus part-time can delay funding or create incorrect assessments.",
  },
  {
    question: "Does my credit history affect OSAP?",
    answer:
      "Ordinary credit scores do not drive eligibility for most students. Serious issues such as prior student loan default or certain bankruptcies can restrict aid until resolved. If you have concerns, disclose them early so your application matches NSLSC records.",
  },
  {
    question: "How do I repay my OSAP loan?",
    answer:
      "Loan repayment generally begins after a grace period once you stop full-time studies (often six months). During grace you may owe no payments yet interest may still apply to loan portions depending on current federal and provincial rules. Federal amounts are managed through NSLSC; follow Ontario guidance for any provincial loan servicing alongside integrated loans.",
  },
  {
    question: "What if I don't complete my studies?",
    answer:
      "Withdrawals or dropping below OSAP's course-load thresholds can trigger reassessment. You might owe overpayments, face earlier repayment, or lose future eligibility depending on how much aid you received versus weeks completed. Report changes through OSAP as soon as your plans change.",
  },
  {
    question: "What happens if I can't make payments?",
    answer:
      "Repayment Assistance can lower monthly payments or pause them when income is low relative to family size. Apply through NSLSC with proof of income and keep recertifying when asked. Ignoring missed payments affects credit - contact NSLSC before you fall behind.",
  },
  {
    question: "Can I appeal my OSAP assessment?",
    answer:
      "Yes. Reviews address situations where income, family structure, or extraordinary costs were misread or missing from your file. You submit forms plus evidence such as layoff notices, medical bills, or dependency proof. Deadlines are strict - assemble documents quickly.",
  },
  {
    question: "What is the maximum OSAP funding I can get?",
    answer:
      "Maximums depend on study-period length, program costs, living allowance category, and assessed need. Ontario publishes caps that change over time; Fall 2026 shifts more aid into loans because grant share is capped lower. Read every line of your Notice of Assessment rather than relying on last year's amounts.",
  },
  {
    question: "Can I get OSAP and scholarships at the same time?",
    answer:
      "Usually yes. Scholarships and bursaries count as resources and may reduce assessed need, but they rarely eliminate OSAP for eligible students. Report awards honestly - undeclared aid can create overpayments when OSAP reconciles with your school.",
  },
  {
    question: "Do my parents' finances affect OSAP?",
    answer:
      "If you are assessed as dependent, parental income and assets factor into expected contribution. Independent status depends on age, marriage, dependants, or time out of high school - rules shift, so verify each year. Choosing the wrong dependency category is a frequent fix during review.",
  },
  {
    question: "How long does it take to get OSAP?",
    answer:
      "Budget roughly four to six weeks after your file is complete (all signatures and documents received). Income verification or school delays add time. Aim to finish your application at least eight weeks before tuition due dates so disbursements can align with enrolment confirmation.",
  },
  {
    question: "What if I change schools or programs?",
    answer:
      "Submit an updated OSAP application reflecting new institution, program length, and tuition. Funding is reassessed and dates may shift. Mid-year switches without telling OSAP are a leading cause of overpayments.",
  },
  {
    question: "Do I need to apply for OSAP every year?",
    answer:
      "Yes. Each academic year requires a new application with updated income, costs, and study dates. Continuing students should calendar a spring or summer reminder so fall instalments are not held up.",
  },
  {
    question: "How can I check the status of my application?",
    answer:
      "Use your Ontario OSAP account online for status, messages, and outstanding tasks. Also monitor email from OSAP and your school's financial aid office - missed document requests pause processing.",
  },
  {
    question: "What is the MSFAA?",
    answer:
      "The Master Student Financial Assistance Agreement is your legal agreement for Canada-Ontario integrated loans and grants. Complete it online with accurate banking information so funds deposit. One agreement typically covers multiple years unless you have a long gap in studies.",
  },
  {
    question: "When will I receive my OSAP funding?",
    answer:
      "Most students see money within one to two weeks before classes once enrolment is confirmed, subject to banking timelines. Instalments may split across terms - read your Notice of Assessment for each release amount and date.",
  },
  {
    question: "Does OSAP cover all of my school costs?",
    answer:
      "No. OSAP bridges the gap between recognized costs and what you and your family are expected to contribute. Living allowances are modest relative to GTA rents - expect to combine OSAP with savings, work, or other aid.",
  },
  {
    question: "Will OSAP pay my tuition directly?",
    answer:
      "Typically the tuition portion is sent to your school and the remainder for authorized costs goes to you. Exact splits appear on your assessment; never assume the full loan amount is cash in hand for rent.",
  },
  {
    question: "Can I decline the loan portion and just take grants?",
    answer:
      "When your assessment arrives you can often accept grants only and decline loans. That reduces debt but also reduces cash available for expenses - model your budget before accepting.",
  },
  {
    question: "What happens if I drop or withdraw from courses?",
    answer:
      "Your enrolment status may change from full-time to part-time or withdrawn. OSAP may recover funds for weeks you did not complete or restrict future eligibility until overpayments are cleared. Speak with financial aid before crossing enrolment thresholds.",
  },
  {
    question: "What does OSAP Academic Probation mean?",
    answer:
      "If you fail too many credits relative to attempts, OSAP flags unsatisfactory progress. Probation can block further funding until you recover good standing. Plan course loads with academic advising if you are near the threshold.",
  },
  {
    question: "When do I start repaying student loans?",
    answer:
      "Timing ties to your confirmed end-of-study date with NSLSC, not convocation. Interest rules differ between federal and provincial portions - read NSLSC notices carefully after you leave full-time studies.",
  },
  {
    question: "Can I update my bank or address information?",
    answer:
      "Yes. Keep banking and mailing details current in both your OSAP profile and NSLSC account for loans. Incorrect banking delays deposits; outdated addresses mean you miss critical letters.",
  },
  {
    question: "What if I need more funding?",
    answer:
      "First verify your assessment matches real costs and income. Then explore formal reviews for income changes, disability-related costs, or extraordinary expenses where permitted. School bursaries and part-time work often fill gaps OSAP cannot increase.",
  },
];

export default function OsapPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Free OSAP Application Help",
    serviceType: "Student Financial Aid Consulting",
    description:
      "Free OSAP application, review, and appeal support for Ontario post-secondary students. 2,000+ students helped.",
    areaServed: { "@type": "State", name: "Ontario", containedInPlace: { "@type": "Country", name: "Canada" } },
    offers: { "@type": "Offer", price: "0", priceCurrency: "CAD", description: "Free OSAP consultation" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      worstRating: "1",
      reviewCount: "47",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Sarah, Toronto" },
        reviewBody: "Study Master helped me secure $8,200 in OSAP grants. I couldn't have done it without them!",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Ahmed, Brampton" },
        reviewBody: "The process felt overwhelming, but their team made it easy. My funding came on time for tuition.",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      },
    ],
    provider: {
      "@type": "LocalBusiness",
      name: "Study Master Canada",
      telephone: "+19056714950",
      url: "https://studymastercanada.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Unit 1805, 83 Kennedy Road South",
        addressLocality: "Brampton",
        addressRegion: "ON",
        postalCode: "L6W 3N7",
        addressCountry: "CA",
      },
    },
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Apply for OSAP in Ontario",
    description: "Step-by-step guide to applying for OSAP with free help from Study Master Canada.",
    totalTime: "PT8W",
    estimatedCost: { "@type": "MonetaryAmount", currency: "CAD", value: "0" },
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Check Eligibility",
        text: "Confirm citizenship, Ontario residency, dependency status, and that your program and institution are designated for OSAP.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Gather Documents",
        text: "Collect ID, Social Insurance Number, income proof, parental or spouse info if applicable, and admission or enrolment letters.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Apply on OSAP Portal",
        text: "Enter study dates and costs accurately at ontario.ca/osap — mistakes here ripple through your entire assessment.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Sign Your MSFAA",
        text: "Complete the Master Student Financial Assistance Agreement online so deposits can flow to your bank and tuition to your school.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Follow Up",
        text: "Respond to document requests quickly. Study Master tracks status and helps with reviews or appeals if amounts look wrong.",
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "Receive Funding",
        text: "Once approved and enrolled, funds split per your notice — watch instalment dates for fall and winter.",
      },
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://studymastercanada.com" },
      { "@type": "ListItem", position: 2, name: "Canadian Students", item: "https://studymastercanada.com/domestic" },
      { "@type": "ListItem", position: 3, name: "OSAP Help", item: "https://studymastercanada.com/domestic/osap" },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      <section className="section-blue-grad relative overflow-hidden border-b border-white/15 text-white">
        <div
          className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-sm-orange/20 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-sm-teal/20 blur-3xl"
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-12 lg:py-14">
          <nav className="text-xs text-white/80" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link className="text-white hover:underline" href="/">
                  Home
                </Link>
              </li>
              <li className="opacity-50">/</li>
              <li>
                <Link className="text-white hover:underline" href="/domestic">
                  Canadian Students
                </Link>
              </li>
              <li className="opacity-50">/</li>
              <li className="text-white/80">OSAP</li>
            </ol>
          </nav>

          <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_minmax(260px,320px)] lg:items-start lg:gap-9">
            <div>
              <h1 className="mt-4 font-extrabold tracking-tight text-5xl leading-[1.05] text-white md:text-6xl lg:text-7xl">
                Get OSAP Help - 100% Free
              </h1>
              <p className="mt-5 max-w-none text-xl leading-snug text-white/85 md:text-2xl">
                We help Ontario residents maximize grants and loans through OSAP.
              </p>
              <p className="mt-3 max-w-none text-sm leading-relaxed text-white/75 md:text-base">
                OSAP blends provincial grants and loans with federal Canada Student Loans and Grants where you qualify. We
                help with the Ontario application, income and dependency questions, document uploads, MSFAA completion,
                reviews, and appeals - always free for Ontario students. Same Brampton team that supports our
                international clients; 2,000+ Ontario files coached.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-sm-orange px-7 py-3.5 font-bold text-white shadow-lg shadow-sm-orange/30 transition hover:bg-sm-orange-dark"
                >
                  WhatsApp for Free OSAP Help
                </a>
                <a
                  href="#changes-2026"
                  className="inline-flex rounded-full border border-white/20 bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur transition hover:bg-white/20"
                >
                  View 2026 Changes
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/70">
                <span>2,000+ students</span>
                <span aria-hidden className="hidden sm:inline">
                  ·
                </span>
                <span>Brampton, ON</span>
                <span aria-hidden className="hidden sm:inline">
                  ·
                </span>
                <span>Free consultation</span>
                <span aria-hidden className="hidden sm:inline">
                  ·
                </span>
                <span>Mon–Fri 9:30–6:30 ET</span>
              </div>
            </div>

            <aside className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur md:p-5">
              <div className="relative mb-4 overflow-hidden rounded-xl border border-white/10 bg-white/10">
                <Image
                  src={UNSPLASH.counselling.src}
                  alt={UNSPLASH.counselling.alt}
                  width={800}
                  height={520}
                  className="h-44 w-full object-cover sm:h-48"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 to-transparent"
                  aria-hidden
                />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-sm-orange-light">
                OSAP at a glance
              </p>
              <dl className="mt-4 space-y-3">
                {[
                  { k: "4–6 wks", v: "Typical processing" },
                  { k: "25% max", v: "Grant portion (Fall 2026+)" },
                  { k: "$0", v: "Our counselling fee" },
                  { k: "2,000+", v: "Ontario students coached" },
                ].map((row) => (
                  <div
                    key={row.k}
                    className="flex items-baseline justify-between gap-3 border-b border-white/10 pb-3 last:border-0 last:pb-0"
                  >
                    <dt className="text-2xl font-extrabold text-white">{row.k}</dt>
                    <dd className="text-right text-sm text-white/75">{row.v}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <TrustBar />

      <InPageNav
        items={[
          { label: "What is OSAP", href: "#what" },
          { label: "2026 Changes", href: "#changes-2026", badge: "NEW" },
          { label: "Who Can Apply", href: "#eligibility" },
          { label: "How to Apply", href: "#apply" },
          { label: "During Study", href: "#during-study" },
          { label: "Repayment", href: "#repayment" },
          { label: "Why Choose Us", href: "#why" },
          { label: "Student Tips", href: "#tips" },
          { label: "FAQs", href: "#faqs" },
        ]}
        cta={{ label: "WhatsApp for Free OSAP Help", href: SITE.whatsapp }}
      />

      <section
        id="changes-2026"
        className="border-y-2 border-sm-orange/30 bg-sm-orange/10 py-5 md:py-6"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 px-6 md:flex-row md:items-center md:px-10">
          <AlertTriangle className="h-8 w-8 shrink-0 text-sm-orange" aria-hidden />
          <div>
            <p className="font-bold text-sm-gray-900">
              Major OSAP changes starting Fall 2026
            </p>
            <p className="mt-1 text-sm leading-relaxed text-sm-gray-700">
              On February 12, 2026, Ontario announced that OSAP is shifting from up
              to 85% grants to a maximum of 25% grants starting Fall 2026. That
              means more of your funding will come as repayable loans; your exact mix
              still depends on income and costs. Policy can evolve - always confirm the
              latest on Ontario.ca before you accept an assessment.{" "}
              <strong>
                We&apos;ll walk you through exactly what this means for your funding - free.
              </strong>
            </p>
            <div className="mt-3 text-sm leading-relaxed text-sm-gray-700">
              <strong>What&apos;s changing Fall 2026:</strong>
              <ul className="mt-2 list-inside list-disc space-y-1.5">
                <li>Maximum grant portion: 25% (previously up to 85%)</li>
                <li>Minimum loan portion: 75% (previously as low as 15%)</li>
                <li>
                  Tuition freeze ends - institutions may raise tuition up to 2% per year for three years (caps apply by
                  sector)
                </li>
                <li>
                  Students at private career colleges: no provincial grants (loan-only provincial aid where eligible)
                </li>
              </ul>
              <p className="mt-3 text-sm text-sm-gray-600">
                Planning ahead matters more than ever: compare total borrowing under the new ratio, explore bursaries at
                your school, and apply early so you have time to adjust course load or budget before classes start.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="what"
        className="scroll-mt-28 bg-sm-off-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="border-l-4 border-sm-orange pl-3">
            <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">
              THE BASICS
            </p>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-sm-gray-900 md:text-4xl">
            What is OSAP?
          </h2>
          <p className="mt-3 w-full max-w-none text-sm leading-relaxed text-sm-gray-600 md:text-base">
            OSAP is Ontario&apos;s primary aid program for post-secondary study. It combines{" "}
            <strong>provincial</strong> grants and loans with <strong>federal</strong> Canada Student Loans and Grants
            for eligible students in one assessment when you qualify for both.
          </p>

          <div className="mt-7 space-y-5">
              <p className="w-full max-w-none text-sm leading-relaxed text-sm-gray-700 md:text-base">
                Grants do not need to be repaid if you meet program rules. Loans enter repayment after school subject to
                grace periods and relief programs. Your Notice of Assessment breaks down Canada-Ontario integrated aid,
                weekly or study-period amounts, and what goes to tuition versus your bank account.
              </p>
              <p className="w-full max-w-none text-sm leading-relaxed text-sm-gray-700 md:text-base">
                Financial <em>need</em> is calculated from costs (tuition, fees, books, living allowance where applicable)
                minus expected contributions from you, your spouse, and sometimes your parents if you are dependent.
                Assets and other funding (scholarships, RESPs) can adjust the result.
              </p>

              <div className="rounded-r-lg border-l-4 border-sm-teal bg-gradient-to-r from-sm-teal-light/60 to-sm-off-white p-4 text-justify text-sm leading-relaxed text-sm-gray-800 md:p-5">
                How we help: document checklists, portal walkthroughs, dependency questions, reviews when income changes,
                and appeals - always at zero cost to Ontario students.
              </div>
          </div>

          <div className="mt-8 rounded-2xl border border-sm-gray-200 bg-white p-5 shadow-sm md:p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">
                OSAP KEY FACTS
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { label: "Who runs it", value: "Government of Ontario" },
                  { label: "Who it's for", value: "Ontario residents" },
                  { label: "Funding types", value: "Grants + loans" },
                  { label: "Application portal", value: "ontario.ca/osap" },
                  { label: "Processing time", value: "4-6 weeks" },
                  { label: "Renewal", value: "Annual" },
                  { label: "Cost to you", value: "Free" },
                ].map((r) => (
                  <div
                    key={r.label}
                    className="flex flex-col gap-0.5 rounded-xl border border-sm-gray-100 bg-sm-off-white/80 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span className="text-sm text-sm-gray-600">{r.label}</span>
                    <span className="text-sm font-bold text-sm-gray-900 sm:text-right">{r.value}</span>
                  </div>
                ))}
              </div>
          </div>
        </div>
      </section>

      <section
        id="eligibility"
        className="scroll-mt-28 bg-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="border-l-4 border-sm-orange pl-3">
            <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">
              ELIGIBILITY
            </p>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-sm-gray-900 md:text-4xl">
            Who Can Apply?
          </h2>
          <p className="mt-3 w-full max-w-none text-sm leading-relaxed text-sm-gray-600 md:text-base">
            Eligibility mixes citizenship, Ontario residency, approved school and program, course load, and satisfactory
            academic progress. &quot;Dependent&quot; vs &quot;independent&quot; student rules decide whether parent income
            is included - definitions update over time, so verify each year on Ontario.ca.
          </p>

          <div className="mt-7 grid gap-6 md:grid-cols-2 md:gap-8">
            <div className="rounded-2xl border border-sm-gray-200 bg-sm-off-white p-6 md:p-7">
              <h3 className="text-xl font-bold text-sm-gray-900">
                ✅ You&apos;re eligible if you...
              </h3>
              <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-sm-gray-800">
                {[
                  "Canadian citizen, permanent resident, or protected person (with acceptable documentation)",
                  "Ontario resident for aid purposes and enrolled in an OSAP-approved program at a designated institution",
                  "Full-time or part-time load that meets OSAP thresholds for your study period",
                  "Demonstrated financial need after expected contributions (student, spouse, parents if dependent)",
                  "Satisfactory academic progress - withdraws or failed courses can trigger probation or restriction",
                ].map((line) => (
                  <li key={line} className="flex gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-sm-teal"
                      aria-hidden
                    />
                    <span className="min-w-0 flex-1 text-justify">{line}</span>
                  </li>
                ))}
              </ul>

              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex rounded-full bg-sm-orange px-6 py-3 font-bold text-white transition hover:bg-sm-orange-dark"
              >
                WhatsApp for Free OSAP Help
              </a>
            </div>

            <div className="flex flex-col justify-center rounded-2xl bg-sm-teal-light p-6 md:p-8">
              <ClipboardCheck
                className="mx-auto h-28 w-28 text-sm-teal-dark opacity-80 md:h-32 md:w-32"
                aria-hidden
              />
              <p className="mt-4 text-center text-sm leading-relaxed text-sm-teal-dark">
                Bring your notice of admission, tax documents summary, and any prior student loan letters - we&apos;ll map
                them to OSAP&apos;s checklist before you submit.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-r-lg border-l-4 border-sm-orange bg-sm-orange/5 p-4 md:p-5">
            <p className="font-bold text-sm-gray-900">Not sure if you qualify?</p>
            <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">
              Book a free 20-minute call. We review residency, dependency status, program designation, prior defaults or
              probation flags, and family income assumptions - then give you a straight answer plus what to fix before you
              apply.
            </p>
          </div>
        </div>
      </section>

      <section
        id="apply"
        className="scroll-mt-28 bg-sm-off-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="border-l-4 border-sm-orange pl-3">
            <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">
              APPLICATION WALKTHROUGH
            </p>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-sm-gray-900 md:text-4xl">
            How to Apply
          </h2>
          <p className="mt-3 w-full max-w-none text-sm leading-relaxed text-sm-gray-700 md:text-base">
            Apply through the Ontario OSAP portal with dates aligned to your study period. Missing documents are the main
            cause of delays - we map what you need (tax links, school confirmations, proof of income) before you hit
            submit. Aim for at least eight weeks before tuition is due.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
            {[
              {
                n: "1",
                title: "Check Eligibility",
                desc: "Confirm citizenship, Ontario residency, dependency status, and that your program and institution are designated for OSAP.",
              },
              {
                n: "2",
                title: "Gather Documents",
                desc: "ID, Social Insurance Number, income proof, parental or spouse info if applicable, and admission or enrolment letters.",
              },
              {
                n: "3",
                title: "Apply on OSAP Portal",
                desc: "Enter study dates and costs accurately - mistakes here ripple through your entire assessment.",
              },
              {
                n: "4",
                title: "Sign Your MSFAA",
                desc: "Complete the Master Student Financial Assistance Agreement online so deposits can flow to your bank and tuition to your school.",
              },
              {
                n: "5",
                title: "Follow Up",
                desc: "Respond to document requests quickly; we track status and help with reviews or appeals if amounts look wrong.",
              },
              {
                n: "6",
                title: "Funding released",
                desc: "Once approved and enrolled, funds split per your notice - watch instalment dates for fall and winter.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-sm-gray-200 bg-white p-5 transition hover:border-sm-teal/40 hover:shadow-md md:p-6"
              >
                <p className="font-extrabold text-5xl text-sm-orange/30">{s.n}</p>
                <h3 className="mt-3 text-lg font-bold text-sm-gray-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-justify text-sm text-sm-gray-700">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sm-teal py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 text-center md:flex-row md:justify-between md:px-10 md:text-left">
          <div>
            <p className="font-bold text-white">Ready to start your OSAP application?</p>
            <p className="mt-1 text-sm text-white/80">
              WhatsApp our team — free for Ontario students. We handle everything from portal to approval.
            </p>
          </div>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex rounded-full bg-white px-6 py-3 font-bold text-sm-teal-dark shadow transition hover:bg-sm-off-white"
          >
            WhatsApp Us Free →
          </a>
        </div>
      </section>

      <section
        id="during-study"
        className="scroll-mt-28 bg-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="border-l-4 border-sm-orange pl-3">
            <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">
              While you study
            </p>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-sm-gray-900 md:text-4xl">
            Funding & responsibilities during your program
          </h2>
          <p className="mt-3 w-full max-w-none text-sm leading-relaxed text-sm-gray-700 md:text-base">
            Once OSAP is approved, staying funded means keeping your application accurate and your course load on track.
            Tuition is typically sent to your school; living costs go to your bank after your school confirms enrolment.
            Most disbursements arrive one to two weeks before classes if your file is complete. Second instalments often
            arrive later in the term - budget so you are not short if banking or confirmation delays happen.
          </p>

          <div className="mt-7 grid gap-5 md:grid-cols-2 md:gap-6">
            {[
              {
                title: "Disbursements & enrolment",
                body: "Your institution confirms enrolment each study period. OSAP releases funds on a schedule tied to your assessment - watch for messages about amounts, release dates, holds for missing signatures, or conflicts between your course load and application.",
              },
              {
                title: "MSFAA (loan agreement)",
                body: "Complete your Master Student Financial Assistance Agreement online with correct banking details. Without a completed MSFAA, deposits cannot reach your account even when you have been assessed. Update banking through NSLSC if you switch banks.",
              },
              {
                title: "Report changes promptly",
                body: "Income, address, marital status, dependants, course load, program length, or institution changes can change your assessment. Report through OSAP as soon as you know - late updates often cause overpayments you must repay or missed funding.",
              },
              {
                title: "Academic progress",
                body: "OSAP tracks completion of attempted credits. Academic probation, repeated withdrawals, or dropping below full-time without updating OSAP can restrict future aid. Meet your registrar and us early if you are considering a reduced load.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-sm-gray-200 bg-sm-off-white p-5 shadow-sm md:p-6"
              >
                <div className="flex items-center gap-3">
                  <ClipboardList className="h-8 w-8 shrink-0 text-sm-teal" aria-hidden />
                  <h3 className="text-lg font-bold text-sm-gray-900">{card.title}</h3>
                </div>
                <p className="mt-4 text-justify text-sm leading-relaxed text-sm-gray-700">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="repayment"
        className="scroll-mt-28 bg-sm-off-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="border-l-4 border-sm-orange pl-3">
            <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">
              After graduation
            </p>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-sm-gray-900 md:text-4xl">
            Repayment, grace periods & relief
          </h2>
          <p className="mt-3 w-full max-w-none text-sm leading-relaxed text-sm-gray-700 md:text-base">
            Grants do not need to be repaid if you remain eligible. Loans enter repayment after you leave full-time
            studies - usually after a six-month grace period where payments may not be required but interest may still
            accrue on the loan portion depending on current federal and provincial rules. Ontario and Canada portions can
            follow slightly different rules; read every letter from NSLSC and your provincial loan service.
          </p>

          <div className="mt-7 grid gap-5 md:grid-cols-2 md:gap-6">
            {[
              {
                title: "Grace period",
                body: "Your confirmed end-of-study date on NSLSC drives the clock - not convocation. If you return to full-time studies before grace ends, notify NSLSC so repayment does not start incorrectly.",
              },
              {
                title: "Repayment Assistance (RAP)",
                body: "If income after school is low, RAP can reduce monthly payments or pause them for a period. You must apply and provide income proof; recertify when requested or you could lose protection.",
              },
              {
                title: "Grant-only at assessment",
                body: "When your assessment arrives you can often accept grants only and decline loans if you want less debt - understand how much cash that leaves for tuition and living costs before you choose.",
              },
              {
                title: "NSLSC account",
                body: "Use NSLSC for federal loan repayment tools, banking updates, one-time assistance options, and some MSFAA tasks. Keep passwords secure and read mail - missed deadlines default you to standard repayment.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-sm-gray-200 bg-white p-5 shadow-sm md:p-6"
              >
                <div className="flex items-center gap-3">
                  <ClipboardCheck className="h-8 w-8 shrink-0 text-sm-orange" aria-hidden />
                  <h3 className="text-lg font-bold text-sm-gray-900">{card.title}</h3>
                </div>
                <p className="mt-4 text-justify text-sm leading-relaxed text-sm-gray-700">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="scroll-mt-28 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="border-l-4 border-sm-orange pl-3">
            <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">
              WHY STUDENTS TRUST US
            </p>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-sm-gray-900 md:text-4xl">
            Why Choose Study Master?
          </h2>
          <p className="mt-3 w-full max-w-none text-sm leading-relaxed text-sm-gray-700 md:text-base">
            We are a Brampton-based team that handles both international study journeys and domestic aid - same office,
            same standards. OSAP help stays 100% free for Ontario students: we make money on regulated immigration and
            admissions services elsewhere, not on provincial aid coaching.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3 md:gap-6">
            <div className="rounded-2xl border border-sm-gray-200 bg-sm-off-white p-6 transition hover:border-sm-teal/40 hover:shadow-lg md:p-7">
              <div className="inline-flex rounded-xl bg-sm-teal/10 p-3 text-sm-teal">
                <DollarSign className="h-8 w-8" aria-hidden />
              </div>
              <h3 className="mt-4 text-xl font-bold text-sm-gray-900">
                Maximize grants first
              </h3>
              <p className="mt-3 text-justify text-sm leading-relaxed text-sm-gray-700">
                We structure your story so eligible grant dollars show up before unnecessary borrowing - especially
                important as the Fall 2026 grant share shrinks.
              </p>
            </div>
            <div className="rounded-2xl border border-sm-gray-200 bg-sm-off-white p-6 transition hover:border-sm-teal/40 hover:shadow-lg md:p-7">
              <div className="inline-flex rounded-xl bg-sm-teal/10 p-3 text-sm-teal">
                <ClipboardList className="h-8 w-8" aria-hidden />
              </div>
              <h3 className="mt-4 text-xl font-bold text-sm-gray-900">
                End-to-end paperwork
              </h3>
              <p className="mt-3 text-justify text-sm leading-relaxed text-sm-gray-700">
                From portal fields to document uploads, MSFAA follow-up, and written reviews when something looks wrong -
                you are not alone in the queue.
              </p>
            </div>
            <div className="rounded-2xl border border-sm-gray-200 bg-sm-off-white p-6 transition hover:border-sm-teal/40 hover:shadow-lg md:p-7">
              <div className="inline-flex rounded-xl bg-sm-teal/10 p-3 text-sm-teal">
                <CheckCircle2 className="h-8 w-8" aria-hidden />
              </div>
              <h3 className="mt-4 text-xl font-bold text-sm-gray-900">
                Proven volume
              </h3>
              <p className="mt-3 text-justify text-sm leading-relaxed text-sm-gray-700">
                2,000+ Ontario students coached across colleges, universities, and career programs - same patterns,
                fewer surprises.
              </p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-5 border-t border-sm-gray-200 pt-8 md:grid-cols-4 md:gap-6 md:pt-9">
            {[
              { n: "2,000+", l: "Students served" },
              { n: "10+ yrs", l: "OSAP experience" },
              { n: "100%", l: "Free for students" },
              { n: "4-6 wks", l: "Typical processing" },
            ].map((s) => (
              <div key={s.l}>
                <p className="text-4xl font-extrabold text-sm-teal-dark md:text-5xl">
                  {s.n}
                </p>
                <p className="mt-2 text-sm text-sm-gray-600">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tips" className="scroll-mt-28 bg-sm-dark py-11 text-white md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <p className="text-xs font-bold uppercase tracking-widest text-sm-orange">
            TOP STUDENT TIPS
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            8 tips from 10+ years of OSAP work
          </h2>
          <p className="mt-3 w-full max-w-none text-sm leading-relaxed text-white/75 md:text-base">
            OSAP mistakes are usually boring ones: wrong dates, missing signatures, or outdated income. These habits keep
            funding moving.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 md:gap-4 lg:grid-cols-4">
            {[
              {
                e: "📅",
                t: "Apply early",
                d: "Submit weeks before tuition deadlines so reviews and school confirmations finish before money must move.",
              },
              {
                e: "📄",
                t: "Keep documents ready",
                d: "PDF bank statements, CRA consent if requested, and enrolment letters - upload clean scans with readable margins.",
              },
              {
                e: "💳",
                t: "Protect your credit",
                d: "After school, pay at least the minimum on schedule - payment history feeds credit reports NSLSC checks.",
              },
              {
                e: "📊",
                t: "Budget realistically",
                d: "Rent and transit eat OSAP fast - align spending with your notice, not the maximum headline loan amount.",
              },
              {
                e: "🔁",
                t: "Report changes",
                d: "Income drops or family emergencies sometimes unlock reviews - silence does not fix your file.",
              },
              {
                e: "📞",
                t: "Stay in touch",
                d: "Check OSAP email and portal weekly during peak periods; unanswered requests pause disbursements.",
              },
              {
                e: "📚",
                t: "Verify designation",
                d: "Confirm each campus and program intake is OSAP-eligible before you commit tuition deposits.",
              },
              {
                e: "⏳",
                t: "Know grace rules",
                d: "Six-month grace is typical after full-time ends - confirm whether interest still runs during grace on your loan portions.",
              },
            ].map((tip) => (
              <div
                key={tip.t}
                className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur md:p-5"
              >
                <div className="text-2xl" aria-hidden>
                  {tip.e}
                </div>
                <p className="mt-3 font-bold text-white">{tip.t}</p>
                <p className="mt-2 text-justify text-sm text-white/75">{tip.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-8 border-t border-sm-gray-100">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <p className="text-sm text-sm-gray-600">
            <strong>Studying in British Columbia instead?</strong>{" "}
            <Link href="/domestic/bc-aid" className="font-semibold text-sm-teal-dark underline hover:no-underline">
              See our free StudentAid BC guide
            </Link>{" "}
            — different portal, zero interest on BC loans, and the BC Completion Grant forgives 50% of your provincial loan at graduation.
          </p>
        </div>
      </section>

      <section id="faqs" className="scroll-mt-28 bg-sm-off-white">
        <TabbedFaq
          title="Frequently Asked Questions"
          subtitle="24 detailed OSAP answers below - plus JSON-LD on this page for search engines. Book a free call for your exact file."
          includeJsonLd={false}
          sectionPaddingClassName="py-11 md:py-14"
          tabs={[
            {
              id: "basics",
              label: "Basics",
              faqs: [FAQS[0], FAQS[1], FAQS[12], FAQS[15], FAQS[16]],
            },
            {
              id: "eligibility",
              label: "Eligibility",
              faqs: [FAQS[9], FAQS[20], FAQS[21]],
            },
            {
              id: "application",
              label: "Process",
              faqs: [FAQS[13], FAQS[14], FAQS[10], FAQS[11]],
            },
            {
              id: "funding",
              label: "Funding",
              faqs: [FAQS[7], FAQS[8], FAQS[17], FAQS[18], FAQS[19], FAQS[23]],
            },
            {
              id: "repayment",
              label: "Repayment",
              faqs: [FAQS[2], FAQS[3], FAQS[5], FAQS[6], FAQS[22]],
            },
          ]}
        />
      </section>

      <CtaBlock
        primaryHref={SITE.whatsapp}
        primaryLabel="WhatsApp for Free OSAP Help"
        heading="Questions about your OSAP file?"
        body="WhatsApp our team — free for Ontario students. We handle applications, reviews, and appeals."
      />
    </main>
  );
}
