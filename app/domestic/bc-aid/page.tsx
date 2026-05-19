import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import {
  DollarSign,
  FileText,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { SITE } from "@/lib/site";
import { UNSPLASH } from "@/lib/media/unsplash";
import { InPageNav } from "@/components/sections/in-page-nav";
import { TabbedFaq } from "@/components/sections/tabbed-faq";
import { CtaBlock } from "@/components/sections/cta-block";

export const metadata: Metadata = {
  title:
    "Free StudentAid BC Help 2026 - BC Completion Grant & Loans | Study Master Canada",
  description:
    "Free StudentAid BC application help for BC residents. Up to $520/week in grants and loans. BC Completion Grant forgives 50% of BC loans at graduation. WhatsApp our team free today.",
  keywords:
    "StudentAid BC, BC student aid, BC student financial assistance, BC Completion Grant, StudentAid BC application, BC student loans, free BC student aid help, studentaidbc.ca help, BC Access Grant, BC grants 2026, British Columbia student aid",
  openGraph: {
    title: "Free StudentAid BC Help 2026 | BC Completion Grant | 50% Loan Forgiveness",
    description:
      "Expert StudentAid BC help — applications, grants, BC Completion Grant, appeals. 100% free for BC students. Remote-friendly from our Brampton office.",
    type: "website",
    locale: "en_CA",
    siteName: "Study Master Canada",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free StudentAid BC Help 2026 | BC Completion Grant",
    description:
      "Expert StudentAid BC help — applications, grants, appeals. Free. Serving BC students remotely.",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  alternates: { canonical: "https://studymastercanada.com/domestic/bc-aid" },
};

type FaqItem = { question: string; answer: string };

const FAQS: FaqItem[] = [
  {
    question: "Who can apply for StudentAid BC?",
    answer:
      "Canadian citizens, permanent residents, or protected persons who have lived in British Columbia for at least 12 continuous months before their study period begins (not counting time spent in full-time post-secondary study). You also need a valid Canadian Social Insurance Number, a BC Services Card, and enrollment in an approved BC program at a designated institution.",
  },
  {
    question: "What is the BC Services Card and why do I need it?",
    answer:
      "As of 2025-26, all StudentAid BC logins require the BC Services Card app. It replaces the old password-based login. You download the app, verify your identity using your BC Services Card or BC photo ID, and link it to your StudentAid BC account. Set this up at least a week before you plan to apply - identity verification can take several days.",
  },
  {
    question: "What is the BC Completion Grant?",
    answer:
      "When you complete your program of study at an approved BC post-secondary institution, 50% of the BC student loan portion you borrowed is forgiven - up to $3,500 per year of study. It's automatic upon graduation. No separate application needed. This is one of the most generous graduation benefits of any provincial aid program in Canada.",
  },
  {
    question: "How is StudentAid BC different from OSAP?",
    answer:
      "The basics are similar - needs-based federal and provincial loans and grants for full-time and part-time students. Key differences: BC requires BC Services Card login; 12-month BC residency requirement; the BC Completion Grant forgives 50% of your BC loan at graduation; BC has fully eliminated interest on provincial student loans. OSAP has different weekly maximums and, as of Fall 2026, a new 25/75 grant-to-loan ratio that doesn't apply to BC.",
  },
  {
    question: "How much can I get per week?",
    answer:
      "Up to CAD $520 per week of full-time study if you're a single student, or up to CAD $740 per week if you have dependant children. These are maximums - your actual weekly amount is based on assessed financial need. These rates reflect a temporary increase to the Canada Student Loan limit, in place until July 31, 2026.",
  },
  {
    question: "Is there interest on BC student loans?",
    answer:
      "No. While you're in full-time studies, both the federal (Canada Student Loan) and provincial (BC Student Loan) portions are interest-free. After you leave full-time studies, the BC portion remains interest-free (BC eliminated interest on provincial loans entirely). The federal portion also remains at 0% interest (federal interest-free policy in effect since 2023).",
  },
  {
    question: "How long does StudentAid BC take to process?",
    answer:
      "6 weeks from the date you submit a complete application. If any documents are missing or income verification is delayed, processing takes longer. Apply at least 8 weeks before your tuition is due to ensure funds arrive on time.",
  },
  {
    question: "Can I apply for StudentAid BC if I'm studying in another province?",
    answer:
      "Yes. If you're a BC resident (12+ months before your study period) and your school in another Canadian province is designated for StudentAid BC funding, you can apply through studentaidbc.ca. The process works the same way - your school confirms enrollment through the NSLSC system. We help many BC students studying at Ontario or Alberta institutions.",
  },
  {
    question: "Do my parents' finances affect my StudentAid BC application?",
    answer:
      "If you're considered a dependent student (generally unmarried, under a certain age threshold, without enough independent work history), yes. Your parents' previous year's income is used to calculate expected family contribution. If you're an independent student, married, or a single parent, only your own income (and spouse's if applicable) is assessed.",
  },
  {
    question: "What if my family has had a major financial change?",
    answer:
      "If your family income has dropped significantly due to layoff, illness, separation, or similar circumstances, you can request a review with StudentAid BC. Bring supporting documentation - we help students prepare these income-change reviews. Don't apply with outdated income data if your situation has genuinely changed.",
  },
  {
    question: "What happens if I drop from full-time to part-time?",
    answer:
      "Your status triggers reassessment. You'll need to reapply for part-time StudentAid BC separately - they're different applications. You may also need to start repaying your previous loans after 6 months if your program status change is significant. Contact StudentAid BC as soon as you're considering the change.",
  },
  {
    question: "What is the MSFAA?",
    answer:
      "The Master Student Financial Assistance Agreement is your legal loan contract with the Government of Canada and Government of British Columbia. You sign it online through the National Student Loans Service Centre (NSLSC). It's a lifetime agreement - you sign it once (unless you have a 2+ year gap in studies) and it covers all your future student loan disbursements.",
  },
  {
    question: "What if I can't make loan payments after graduation?",
    answer:
      "You may qualify for the Repayment Assistance Plan (RAP), which adjusts your monthly payments based on your income. There's also a new policy allowing temporary minimum payments as low as $20 per month ($10 per loan type) for up to 12 months in a repayment period. If you default, loan rehabilitation is available - but you can only rehabilitate twice in a lifetime.",
  },
  {
    question: "Can part-time students apply for StudentAid BC?",
    answer:
      "Yes. StudentAid BC offers both full-time and part-time funding, but eligibility rules and amounts differ. If you're unsure which category your course load falls under, book a call and we'll tell you what to select and which documents to prepare.",
  },
  {
    question: "Can I appeal or request a review if my assessment looks wrong?",
    answer:
      "Yes. If your assessed need doesn't reflect your real situation, you can request reviews depending on the issue (family income changes, exceptional costs, dependants, and more). Bring any supporting documents - we help you assemble a clean review package so it doesn't get delayed.",
  },
  {
    question: "How can I check the status of my StudentAid BC application?",
    answer:
      "Log in through StudentAid BC using your BC Services Card and check your application status and outstanding document requests. Also monitor your messages because document requests can pause processing until they're submitted.",
  },
  {
    question: "When will I receive my StudentAid BC funding?",
    answer:
      "Disbursements typically line up with your study period start once your application is approved and your school confirms enrollment. Timing varies by school confirmation and any outstanding documents, so apply early to avoid last-minute tuition pressure.",
  },
  {
    question: "Does StudentAid BC cover all of my school costs?",
    answer:
      "Not always. Student aid is designed to contribute toward tuition and education-related costs based on assessed need. Most students still need a budget plan for rent, transportation, and other living expenses.",
  },
  {
    question: "Can I decline the loan portion and only take grants?",
    answer:
      "Often, yes - depending on your assessment and the way your aid is packaged. If you're grant-eligible but want to reduce debt, we can walk you through the options and any trade-offs before you accept funding.",
  },
  {
    question: "Can I update my banking or contact information?",
    answer:
      "Yes. Keep your address, banking details, and contact information current in the StudentAid BC system and any linked federal loan portals, because incorrect information can delay disbursements and notices.",
  },
  {
    question: "How do I start with StudyMaster for BC Aid?",
    answer:
      "Book a free 20-minute consultation. We'll verify your BC residency, walk you through BC Services Card setup, review your program eligibility, and discuss your expected grant package. Call (905) 671-4950, email sales@studymaster.ca, WhatsApp us, or use our online form. Our team provides BC Aid support remotely - our Brampton office isn't a barrier.",
  },
];

export default function BcAidPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Free StudentAid BC Application Help",
    serviceType: "Student Financial Aid Consulting",
    description:
      "Free StudentAid BC application, grant review, and appeal support for BC post-secondary students. Remote-friendly service.",
    areaServed: { "@type": "Province", name: "British Columbia", containedInPlace: { "@type": "Country", name: "Canada" } },
    offers: { "@type": "Offer", price: "0", priceCurrency: "CAD", description: "Free StudentAid BC consultation" },
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
        author: { "@type": "Person", name: "Priya, Mississauga" },
        reviewBody: "Thanks to their guidance, I graduated with less debt and more confidence about my future.",
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
    name: "How to Apply for StudentAid BC",
    description: "Step-by-step guide to applying for StudentAid BC with free help from Study Master Canada.",
    totalTime: "PT6W",
    estimatedCost: { "@type": "MonetaryAmount", currency: "CAD", value: "0" },
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Set up BC Services Card app",
        text: "Download the BC Services Card app, verify your identity, and link it to your StudentAid BC account before application season.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Create your StudentAid BC account",
        text: "Go to studentaidbc.ca, log in with your BC Services Card account, and set up your application dashboard.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Confirm your school's designation",
        text: "Verify your institution is designated for StudentAid BC funding before you apply.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Complete the application",
        text: "Fill in your school, program, study period, and personal/family information. Consent to CRA income verification.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Sign your MSFAA",
        text: "Sign the Master Student Financial Assistance Agreement online through the National Student Loans Service Centre (NSLSC).",
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "Wait for assessment",
        text: "StudentAid BC processes your application within 6 weeks. Your school confirms enrollment once classes start — funds are released 5-15 days after your first day.",
      },
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://studymastercanada.com" },
      { "@type": "ListItem", position: 2, name: "Canadian Students", item: "https://studymastercanada.com/domestic" },
      { "@type": "ListItem", position: 3, name: "StudentAid BC", item: "https://studymastercanada.com/domestic/bc-aid" },
    ],
  };

  return (
    <main>
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

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
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
              <li className="text-white/80">StudentAid BC</li>
            </ol>
          </nav>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_minmax(260px,320px)] lg:items-start lg:gap-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-sm-orange-light">
                ● BRITISH COLUMBIA STUDENT FINANCIAL ASSISTANCE
              </p>
              <h1 className="mt-6 font-extrabold tracking-tight text-5xl leading-[1.05] text-white md:text-6xl lg:text-7xl">
                StudentAid BC, handled with care.
              </h1>
              <p className="mt-6 max-w-3xl text-xl leading-snug text-white/85 md:text-2xl">
                Free StudentAid BC application help. Up to $520/week in combined
                loans and grants ($740 with dependants). Plus the BC Completion Grant
                - 50% loan forgiveness at graduation.
              </p>
              <p className="mt-4 max-w-2xl text-sm text-white/70 md:text-base">
                From Canada-BC integrated student loans to the BC Access Grant and the
                Adult Upgrading Grant - we know the ecosystem. No interest on BC
                loans. Six-week processing. Free for students.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-sm-orange px-7 py-3.5 font-bold text-white shadow-lg shadow-sm-orange/30 transition hover:bg-sm-orange-dark"
                >
                  WhatsApp for Free BC Aid Help
                </a>
                <a
                  href="#amounts"
                  className="inline-flex rounded-full border border-white/20 bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur transition hover:bg-white/20"
                >
                  View 2025-26 Funding
                </a>
              </div>
            </div>

            <aside className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur md:p-6">
              <div className="relative mb-5 overflow-hidden rounded-xl border border-white/10 bg-white/10">
                <Image
                  src={UNSPLASH.graduation.src}
                  alt={UNSPLASH.graduation.alt}
                  width={800}
                  height={520}
                  className="h-40 w-full object-cover"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 to-transparent"
                  aria-hidden
                />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-sm-orange-light">
                BC AID AT A GLANCE
              </p>
              <dl className="mt-6 space-y-4">
                {[
                  { k: "$520/wk", v: "Max single student" },
                  { k: "$740/wk", v: "Max with dependants" },
                  { k: "6 weeks", v: "Processing time" },
                  { k: "50%", v: "BC Completion Grant forgiveness" },
                ].map((row) => (
                  <div
                    key={row.k}
                    className="flex items-baseline justify-between gap-3 border-b border-white/10 pb-4 last:border-0 last:pb-0"
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

      <InPageNav
        items={[
          { label: "What Is It", href: "#what" },
          { label: "Who Qualifies", href: "#eligibility" },
          { label: "How Much", href: "#amounts" },
          { label: "Grants Available", href: "#grants", badge: "GRANTS" },
          { label: "How to Apply", href: "#apply" },
          { label: "Completion Grant", href: "#completion-grant" },
          { label: "How We Help", href: "#help" },
          { label: "FAQs", href: "#faqs" },
        ]}
        cta={{ label: "WhatsApp for Free BC Aid Help", href: SITE.whatsapp }}
      />

      <section className="border-y-2 border-sm-teal/30 bg-sm-teal/10 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 px-6 md:flex-row md:items-center md:px-10">
          <Sparkles
            className="h-8 w-8 shrink-0 text-sm-teal"
            aria-hidden
          />
          <div>
            <p className="font-bold text-sm-gray-900">
              Three big advantages of StudentAid BC in 2025-26
            </p>
            <p className="mt-1 text-sm text-sm-gray-700">
              BC has some of the most generous provincial aid in Canada.
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-sm-gray-700">
              <li>
                <strong>Zero interest</strong> on BC student loans (federal loans also
                interest-free)
              </li>
              <li>
                <strong>BC Completion Grant</strong> - 50% of your BC loan portion is
                forgiven upon graduation, up to $3,500/year
              </li>
              <li>
                <strong>Temporary funding boost</strong> - Canada Student Loan weekly
                max increased from $210 to $300, and Canada Student Grants temporarily
                increased 40% - both through July 31, 2026
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="what" className="scroll-mt-28 bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="border-l-4 border-sm-orange pl-3">
            <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">
              THE BASICS
            </p>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-sm-gray-900 md:text-4xl">
            StudentAid BC: British Columbia&apos;s Student Financial Assistance Program.
          </h2>

          <div className="mt-10 grid gap-10 md:grid-cols-3">
            <div className="md:col-span-2 space-y-4 text-sm leading-relaxed text-sm-gray-700 md:text-base">
              <p>
                StudentAid BC is British Columbia&apos;s provincial student financial aid
                program - jointly administered with the Government of Canada through
                Canada-BC integrated student loans. A single loan, two lenders
                (federal and provincial), one monthly payment when you start repaying.
                BC students apply once through studentaidbc.ca and are automatically
                assessed for federal loans and grants, provincial loans, and multiple
                provincial grants and bursaries.
              </p>
              <p>
                For most full-time BC post-secondary students, StudentAid BC covers
                tuition, books, living expenses, and program-related costs. Both the
                BC portion and the federal Canada Student Loan portion are
                interest-free while you&apos;re a full-time student. Repayment begins 6
                months after you leave full-time studies. BC also eliminated interest
                on provincial loans entirely, joining the federal government&apos;s
                interest-free policy.
              </p>
            </div>

            <div className="rounded-2xl border border-sm-gray-200 bg-sm-off-white p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">
                BC AID KEY FACTS
              </p>
              <div className="mt-4 space-y-3">
                {[
                  { label: "Who runs it", value: "Government of BC + Canada" },
                  { label: "Who it's for", value: "BC residents" },
                  { label: "Loan types", value: "Canada-BC integrated" },
                  { label: "Interest on BC loan", value: "$0 (zero)" },
                  { label: "Application portal", value: "studentaidbc.ca" },
                  { label: "Processing time", value: "6 weeks" },
                  { label: "Renewal", value: "Annual" },
                  { label: "Cost to you", value: "Free" },
                ].map((r) => (
                  <div
                    key={r.label}
                    className="flex items-center justify-between border-b border-sm-gray-200 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-sm text-sm-gray-600">{r.label}:</span>
                    <span className="text-sm font-bold text-sm-gray-900">
                      {r.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="eligibility" className="scroll-mt-28 bg-sm-off-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="border-l-4 border-sm-orange pl-3">
            <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">
              ELIGIBILITY
            </p>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-sm-gray-900 md:text-4xl">
            Do you qualify for StudentAid BC?
          </h2>
          <p className="mt-4 max-w-3xl text-sm text-sm-gray-700 md:text-base">
            Six core requirements - all must be met to receive BC student financial
            assistance.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                n: "1",
                title: "Canadian status",
                desc: "You must be a Canadian citizen, permanent resident of Canada, or protected person. International students are not eligible for StudentAid BC unless you have dual citizenship AND meet BC residency requirements.",
              },
              {
                n: "2",
                title: "BC residency (12 months)",
                desc: "You must have lived in British Columbia for 12 continuous months before your study period begins - not counting time spent in full-time post-secondary study. This is verified through tax records and supporting documentation.",
              },
              {
                n: "3",
                title: "Valid Canadian SIN",
                desc: "You need a valid Canadian Social Insurance Number. Your name, date of birth, and SIN must match Employment and Social Development Canada (ESDC) records.",
              },
              {
                n: "4",
                title: "BC Services Card account",
                desc: "Starting 2025-26, all applicants must set up a BC Services Card app to log in to StudentAid BC. The old password-based login is being phased out. Set yours up before applying.",
              },
              {
                n: "5",
                title: "Approved program, 60% course load",
                desc: "Your program must be at a designated BC post-secondary institution (public, most private, BCIT, Indigenous institutions). Full-time status requires enrollment in at least 60% of a full course load (40% if you have a permanent or prolonged disability).",
              },
              {
                n: "6",
                title: "Demonstrated financial need",
                desc: "StudentAid BC calculates your educational costs versus your resources. Family income (yours, your parents', or spouse's depending on student category), assets, scholarships, and expected contributions are all factored in. You must show genuine financial need.",
              },
            ].map((c) => (
              <div
                key={c.n}
                className="rounded-2xl border border-sm-gray-200 bg-white p-6"
              >
                <p className="font-extrabold text-4xl text-sm-teal/30">{c.n}</p>
                <h3 className="mt-3 text-lg font-bold text-sm-gray-900">{c.title}</h3>
                <p className="mt-2 text-sm text-sm-gray-700">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-r-lg border-l-4 border-sm-orange bg-sm-orange/5 p-5">
            <p className="font-bold text-sm-gray-900">Who is NOT eligible</p>
            <ul className="mt-3 space-y-1 text-sm text-sm-gray-700">
              <li>International students (study permit holders only)</li>
              <li>Residents of other provinces - apply through your home province</li>
              <li>
                Students in default on previous provincial or federal student loans
                (until rehabilitated)
              </li>
              <li>
                Students restricted from StudentAid BC due to overaward or
                non-compliance
              </li>
              <li>Apprenticeship students - see Canada Apprentice Loan (CAL) instead</li>
              <li>Students attending non-designated institutions</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="amounts" className="scroll-mt-28 bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="border-l-4 border-sm-orange pl-3">
            <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">
              FUNDING AMOUNTS
            </p>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-sm-gray-900 md:text-4xl">
            How much StudentAid BC can you get?
          </h2>
          <p className="mt-4 max-w-3xl text-sm text-sm-gray-700 md:text-base">
            2025-26 weekly maximums - temporary rates through July 31, 2026. Not all
            students receive the maximum; your amount depends on assessed financial
            need.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-sm-off-white p-6">
              <p className="font-bold text-sm-gray-900">Weekly Maximum (2025-26)</p>
              <p className="mt-2 text-xs text-sm-gray-600">
                Combined Canada Student Loan + BC Student Loan + grants for a typical
                full-time study week.
              </p>
              <div className="mt-6 overflow-x-auto rounded-xl border border-sm-gray-200 bg-white">
                <table className="w-full min-w-[280px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-sm-gray-200 bg-sm-gray-50">
                      <th className="px-4 py-3 font-bold text-sm-gray-900">
                        Student situation
                      </th>
                      <th className="px-4 py-3 font-bold text-sm-gray-900">
                        Weekly maximum
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-sm-gray-100">
                      <td className="px-4 py-3 text-sm-gray-700">Single student</td>
                      <td className="px-4 py-3 font-bold text-sm-gray-900">
                        CAD $520
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm-gray-700">
                        Student with dependant children
                      </td>
                      <td className="px-4 py-3 font-bold text-sm-gray-900">
                        CAD $740
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs italic text-sm-gray-600">
                These rates reflect a temporary increase to the Canada Student Loan
                weekly limit (from $210 to $300), in place until July 31, 2026. After
                that date, weekly maximums may be recalibrated.
              </p>
            </div>

            <div className="rounded-2xl bg-sm-dark p-6 text-white md:p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-sm-orange-light">
                ANNUAL ESTIMATES
              </p>
              <p className="mt-2 text-xs text-white/70">
                Typical 34-week academic year at a BC public institution:
              </p>
              <dl className="mt-4 space-y-4">
                {[
                  { k: "$17,680", v: "Single student maximum annual" },
                  { k: "$25,160", v: "Student with dependants maximum annual" },
                  { k: "Zero", v: "Interest on BC loan portion" },
                  { k: "Integrated", v: "One monthly payment for Canada + BC" },
                ].map((row) => (
                  <div
                    key={row.k}
                    className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0"
                  >
                    <dt className="text-2xl font-extrabold text-white">{row.k}</dt>
                    <dd className="text-right text-sm text-white/75">{row.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="mt-10 rounded-xl border border-sm-teal/20 bg-sm-teal/5 p-6">
            <p className="font-bold text-sm-gray-900">Lifetime limits to be aware of</p>
            <p className="mt-2 text-sm text-sm-gray-700">
              StudentAid BC has lifetime maximums for total weeks and total dollars of
              funding. If you approach these limits and are still in full-time study,
              you can appeal for extended funding - we help students prepare these
              appeals. Reach out if you&apos;re close to the lifetime cap.
            </p>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex font-bold text-sm-teal-dark underline hover:no-underline"
            >
              WhatsApp us about lifetime-limit appeals →
            </a>
          </div>
        </div>
      </section>

      <section id="grants" className="scroll-mt-28 bg-sm-dark py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <p className="text-xs font-bold uppercase tracking-widest text-sm-orange">
            GRANTS = MONEY YOU DON&apos;T REPAY
          </p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            BC has some of the most generous grants in Canada.
          </h2>
          <p className="mt-4 max-w-3xl text-sm text-white/70 md:text-base">
            When you apply for StudentAid BC, you&apos;re automatically assessed for all
            the grants below. No separate applications.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                badge: "FEDERAL",
                title: "Canada Student Grant for Full-Time Students",
                desc: "Needs-based federal grant for low- and middle-income students. Currently 40% higher than pre-pandemic levels through July 31, 2026.",
                amount: "Up to ~$4,200/year",
              },
              {
                badge: "PROVINCIAL",
                title: "BC Access Grant (Full-Time)",
                desc: "Upfront provincial grant for low- and middle-income BC students enrolled in full-time programs at BC public post-secondary institutions.",
                amount: "Up to $4,000/program year",
              },
              {
                badge: "COMPLETION",
                title: "BC Completion Grant",
                desc: "50% of your BC student loan portion is forgiven when you graduate. Not a separate application - it's automatic upon program completion.",
                amount: "Up to $3,500/year of study",
              },
              {
                badge: "PART-TIME",
                title: "Canada Student Grant for Part-Time Students",
                desc: "For low-income part-time students enrolled at eligible institutions. Automatically assessed when you apply for part-time aid.",
                amount: "Up to $1,800/year",
              },
              {
                badge: "DEPENDANTS",
                title: "Canada Student Grant for Students with Dependants",
                desc: "Additional grant for full-time students with dependant children. Assessed based on family size and income.",
                amount: "Up to $200/month per child",
              },
              {
                badge: "DISABILITY",
                title: "BC Access Grant for Students with Disabilities",
                desc: "For BC students with documented permanent or persistent/prolonged disabilities. Includes access to the BC Supplemental Bursary and Canada Student Grant for Services and Equipment.",
                amount: "Varies by need",
              },
            ].map((g) => (
              <div
                key={g.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <span className="inline-block rounded bg-sm-orange/20 px-2 py-1 text-xs font-bold uppercase tracking-wider text-sm-orange-light">
                  {g.badge}
                </span>
                <h3 className="mt-4 text-lg font-bold text-white">{g.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{g.desc}</p>
                <p className="mt-4 font-bold text-sm-orange-light">{g.amount}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-bold text-white">Other grants to know about</h3>
              <ul className="mt-3 space-y-2 text-sm text-white/75">
                <li>
                  Learning for Future Grant (Provincial Tuition Waiver students -
                  eligible for 2 grants per program year)
                </li>
                <li>
                  Youth Aged Out of Care Tuition Waiver (covers tuition for youth
                  formerly in government care)
                </li>
                <li>
                  Adult Upgrading Grant (for ABE, ESL, Workplace Essential Skills
                  Training)
                </li>
                <li>
                  BC Training and Education Savings Grant ($1,200 from the BC
                  government toward eligible children&apos;s RESPs)
                </li>
                <li>BC Scholarship Society programs</li>
              </ul>
            </div>
            <div className="flex flex-col justify-end gap-4">
              <div>
                <p className="font-bold text-white">Maximize every grant</p>
                <p className="mt-2 text-sm text-white/75">
                  Most students miss grants they qualify for because they don&apos;t
                  realize they&apos;ve been assessed. We review your full assessment and
                  flag missed grants in an appeal.
                </p>
              </div>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit rounded-full bg-sm-orange px-6 py-3 font-bold text-white transition hover:bg-sm-orange-dark"
              >
                WhatsApp to review my grant assessment →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="apply" className="scroll-mt-28 bg-sm-off-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="border-l-4 border-sm-orange pl-3">
            <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">
              APPLICATION WALKTHROUGH
            </p>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-sm-gray-900 md:text-4xl">
            How to Apply for StudentAid BC - 6 steps.
          </h2>
          <p className="mt-4 max-w-3xl text-sm text-sm-gray-700 md:text-base">
            The full-time StudentAid BC application takes about 30 minutes to complete.
            Here&apos;s what you&apos;ll do.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                n: "1",
                title: "Set up BC Services Card app",
                desc: "All applicants now log in with a BC Services Card. Download the app, verify your identity, and link it to your StudentAid BC account. Do this BEFORE application season - it can take several days to set up.",
              },
              {
                n: "2",
                title: "Create your StudentAid BC account",
                desc: "Go to studentaidbc.ca, click 'Login with a BC Services Card account,' and follow the prompts. Your dashboard is where you'll apply, upload documents, and track status.",
              },
              {
                n: "3",
                title: "Confirm your school's designation",
                desc: "Your institution must be designated for StudentAid BC funding. Most BC public colleges, universities, BCIT, and many private post-secondary schools are designated. Check before you apply.",
              },
              {
                n: "4",
                title: "Complete the application",
                desc: "Log in to your dashboard. Fill in your school, program, study period, and personal/family information. Most students finish in 30 minutes. You'll consent to income verification through CRA.",
              },
              {
                n: "5",
                title: "Sign your MSFAA",
                desc: "The Master Student Financial Assistance Agreement (MSFAA) is your lifetime loan contract with Canada and BC. Sign it online through the National Student Loans Service Centre (NSLSC). One-time unless you have a 2-year break in studies.",
              },
              {
                n: "6",
                title: "Wait for assessment (6 weeks)",
                desc: "StudentAid BC processes your application within 6 weeks. You'll see status updates on your dashboard. Your school confirms enrollment once classes start - that's when funds are released (typically 5-15 days after your first day of class).",
              },
            ].map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-sm-gray-200 bg-white p-6 transition hover:border-sm-teal/40 hover:shadow-md"
              >
                <p className="font-extrabold text-5xl text-sm-orange/30">{s.n}</p>
                <h3 className="mt-3 text-lg font-bold text-sm-gray-900">{s.title}</h3>
                <p className="mt-2 text-sm text-sm-gray-700">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-xl border-l-4 border-sm-orange bg-white p-6">
            <p className="font-bold text-sm-gray-900">Critical deadlines and timing</p>
            <ul className="mt-3 space-y-2 text-sm text-sm-gray-700">
              <li>
                2025-26 applications open: Early June for classes starting August 2025 -
                July 2026
              </li>
              <li>Latest to apply: 6 weeks before your study period ends</li>
              <li>
                Apply 8+ weeks before tuition is due to ensure funds arrive on time
              </li>
              <li>
                Part-time student loan applications: open approximately one month before
                fall term
              </li>
              <li>
                All income taxes (yours, and parents&apos;/spouse&apos;s if applicable)
                must be filed BEFORE applying - CRA income verification is required
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-sm-teal py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 text-center md:flex-row md:justify-between md:px-10 md:text-left">
          <div>
            <p className="font-bold text-white">Want help with your StudentAid BC application?</p>
            <p className="mt-1 text-sm text-white/80">
              Free for BC students. We walk you through BC Services Card setup, eligibility, and the full application.
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
        id="completion-grant"
        className="scroll-mt-28 bg-sm-orange/10 py-16 md:py-20"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <p className="text-xs font-bold uppercase tracking-widest text-sm-orange-dark">
            BC&apos;S SIGNATURE BENEFIT
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-sm-dark md:text-4xl">
            The BC Completion Grant - 50% of your BC loan, forgiven.
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-sm-gray-700">
            This is what makes StudentAid BC stand out. When you graduate from your
            approved BC program, half of your BC student loan portion is automatically
            forgiven.
          </p>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div className="space-y-4 text-sm leading-relaxed text-sm-gray-700 md:text-base">
              <p>
                After you complete your program of study, you receive a non-repayable
                grant equal to 50% of the BC student loan portion you borrowed - up to
                a maximum of $3,500 per year of study.
              </p>
              <p>
                A student who borrows $20,000 in BC provincial loans over a four-year
                degree could see up to $14,000 forgiven through the BC Completion Grant
                - cutting their provincial debt by half. It&apos;s automatic upon
                graduation. No separate application. No catch.
              </p>
              <p>
                Combined with zero interest on both the BC and federal portions of your
                integrated loan, this is one of the most student-friendly provincial aid
                programs in Canada. The federal portion still needs to be repaid, but at
                zero interest and with a 6-month grace period after graduation.
              </p>
            </div>

            <div className="rounded-2xl border border-sm-orange/20 bg-white p-8 shadow-lg">
              <p className="text-xl font-bold text-sm-gray-900">
                Example: A 4-year program
              </p>
              <dl className="mt-6 space-y-4 border-t border-sm-gray-100 pt-4 text-sm">
                {[
                  { k: "BC loans borrowed", v: "$20,000 (4 years × $5,000/yr)" },
                  { k: "BC Completion Grant", v: "–$14,000 (50% of BC portion)" },
                  { k: "BC debt after graduation", v: "$6,000" },
                  { k: "Federal loan", v: "Separate (amount varies)" },
                  { k: "Interest rate (BC)", v: "0%" },
                  { k: "Interest rate (Federal)", v: "0% (prime + 0% as of 2023)" },
                ].map((row) => (
                  <div
                    key={row.k}
                    className="flex flex-col gap-1 border-b border-sm-gray-100 pb-4 last:border-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <dt className="text-sm-gray-600">{row.k}</dt>
                    <dd className="font-bold text-sm-gray-900">{row.v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-xs text-sm-gray-500">
                Completion Grant maximum is $3,500 per year of study. Actual forgiveness
                depends on loan amount and program length.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-sm-orange px-7 py-3.5 font-bold text-white shadow-lg transition hover:bg-sm-orange-dark"
            >
              WhatsApp to see your grant package estimate
            </a>
            <p className="mt-3 text-sm text-sm-gray-600">
              Free 20-min consultation · We&apos;ll estimate your specific funding and
              grants
            </p>
          </div>
        </div>
      </section>

      <section id="help" className="scroll-mt-28 bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="border-l-4 border-sm-orange pl-3">
            <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">
              OUR SERVICE
            </p>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-sm-gray-900 md:text-4xl">
            Why BC students work with us.
          </h2>
          <p className="mt-4 max-w-3xl text-sm text-sm-gray-700 md:text-base">
            10+ years of provincial student aid expertise - now expanding to British
            Columbia. Free for Canadian BC students. Remote-friendly service from our
            Brampton office with BC-specific knowledge.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                Icon: Target,
                title: "Free eligibility check",
                body: "15-minute call. We review your BC residency, program eligibility, family income, and prior loans - and tell you exactly what StudentAid BC will likely offer.",
              },
              {
                Icon: FileText,
                title: "BC Services Card setup help",
                body: "The new BC Services Card login trips up many applicants. We walk you through the app setup, identity verification, and account linking.",
              },
              {
                Icon: ShieldCheck,
                title: "Document review",
                body: "Before you submit, we review your income documents, study period dates, and program details. The right data at step 1 prevents 6 weeks of back-and-forth.",
              },
              {
                Icon: Scale,
                title: "Appeals and reviews",
                body: "If your assessment feels wrong, we help you appeal - income changes, exceptional circumstances, lifetime-limit extensions. We've run hundreds of provincial aid appeals (OSAP + BC).",
              },
              {
                Icon: DollarSign,
                title: "100% free for BC students",
                body: "No consultation fees. No hidden costs. Our provincial aid work is free for Canadian residents, period.",
              },
              {
                Icon: Users,
                title: "Cross-province expertise",
                body: "We built our reputation on Ontario OSAP (2,000+ students). That same process - honest advice, real applications, real appeals - is now available for BC residents.",
              },
            ].map(({ Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-sm-gray-200 bg-sm-off-white p-7 transition hover:border-sm-teal/40"
              >
                <div className="inline-flex rounded-lg bg-sm-teal/10 p-2 text-sm-teal">
                  <Icon className="h-10 w-10" aria-hidden />
                </div>
                <h3 className="mt-4 text-lg font-bold text-sm-gray-900">{title}</h3>
                <p className="mt-2 text-sm text-sm-gray-700">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 grid grid-cols-2 gap-6 border-t border-sm-gray-200 pt-10 md:grid-cols-4">
            {[
              { n: "10+ yrs", l: "Provincial aid experience" },
              { n: "100%", l: "Free for students" },
              { n: "6 weeks", l: "Typical BC processing" },
              { n: "2", l: "Provinces covered (ON + BC)" },
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

      <section id="bc-vs-osap" className="scroll-mt-28 bg-sm-off-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="border-l-4 border-sm-orange pl-3">
            <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">
              BC VS ONTARIO
            </p>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-sm-gray-900 md:text-4xl">
            How StudentAid BC compares to OSAP.
          </h2>
          <p className="mt-4 max-w-3xl text-sm text-sm-gray-700 md:text-base">
            If you&apos;ve heard about OSAP from friends in Ontario, here&apos;s what&apos;s
            different in BC.
          </p>

          <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl border border-sm-gray-200 bg-white shadow-sm">
            <table className="w-full text-left text-sm text-sm-gray-800">
              <thead>
                <tr className="bg-sm-dark text-white">
                  <th className="px-6 py-4 font-bold">Feature</th>
                  <th className="px-6 py-4 font-bold">OSAP (Ontario)</th>
                  <th className="px-6 py-4 font-bold">StudentAid BC</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Program portal", "ontario.ca/osap", "studentaidbc.ca"],
                  [
                    "Login system",
                    "OSAP Access Number + password",
                    "BC Services Card app (required)",
                  ],
                  ["Residency requirement", "Ontario resident", "12 consecutive months in BC"],
                  ["Weekly max (single)", "$525", "$520"],
                  ["Weekly max (with dependants)", "$865", "$740"],
                  ["Processing time", "4-6 weeks", "6 weeks"],
                  [
                    "Grant forgiveness at graduation",
                    "None specific",
                    "BC Completion Grant: 50% of BC loans forgiven",
                  ],
                  [
                    "Interest on provincial loan",
                    "Ontario: 0% while in school; prime + variable after",
                    "BC: 0% while in school; 0% after (fully eliminated)",
                  ],
                  [
                    "Grant-to-loan ratio (Fall 2026+)",
                    "Max 25% grants, min 75% loans",
                    "Assessed case-by-case, no fixed ratio",
                  ],
                  [
                    "Tuition policy",
                    "Freeze ending, +2%/year for 3 years",
                    "Policy varies by institution type",
                  ],
                ].map((row, i) => (
                  <tr
                    key={row[0]}
                    className={i % 2 === 1 ? "bg-sm-gray-50" : "bg-white"}
                  >
                    <td className="px-6 py-4 font-medium text-sm-gray-900">{row[0]}</td>
                    <td className="px-6 py-4">{row[1]}</td>
                    <td className="px-6 py-4">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-8 text-center text-sm italic text-sm-gray-600">
            Moving between provinces, or have mixed residency? Book a call - we&apos;ll
            figure out which province you should apply to.
          </p>
        </div>
      </section>

      <section className="bg-white py-8 border-t border-sm-gray-100">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <p className="text-sm text-sm-gray-600">
            <strong>Ontario student instead?</strong>{" "}
            <Link href="/domestic/osap" className="font-semibold text-sm-teal-dark underline hover:no-underline">
              See our free OSAP help guide
            </Link>{" "}
            — 2,000+ Ontario students coached. Applications, reviews, and appeals handled free.
          </p>
        </div>
      </section>

      <section id="faqs" className="scroll-mt-28 bg-sm-off-white">
        <TabbedFaq
          title="Frequently Asked Questions"
          subtitle="StudentAid BC questions, answered. For anything else, book a free call."
          includeJsonLd
          tabs={[
            {
              id: "basics",
              label: "Basics",
              faqs: [FAQS[0], FAQS[1], FAQS[3]],
            },
            {
              id: "funding",
              label: "Funding",
              faqs: [FAQS[2], FAQS[4], FAQS[5], FAQS[18], FAQS[19], FAQS[20]],
            },
            {
              id: "eligibility",
              label: "Eligibility",
              faqs: [FAQS[7], FAQS[8], FAQS[9], FAQS[14]],
            },
            {
              id: "application",
              label: "Process",
              faqs: [FAQS[6], FAQS[10], FAQS[11], FAQS[16], FAQS[17], FAQS[21]],
            },
            {
              id: "repayment",
              label: "Repayment & help",
              faqs: [FAQS[12], FAQS[13], FAQS[15]],
            },
          ]}
        />
      </section>

      <CtaBlock
        primaryHref={SITE.whatsapp}
        primaryLabel="WhatsApp for Free BC Aid Help"
        heading="Ready to start your StudentAid BC application?"
        body="WhatsApp our team — free for BC students. Applications, BC Completion Grant, and appeals handled with care."
      />
    </main>
  );
}
