import Link from "next/link";
import {
  BadgeCheck,
  BookOpen,
  ClipboardList,
  FileText,
  GraduationCap,
  Heart,
  Palette,
  Stethoscope,
  Users,
  Wallet,
  Wrench,
} from "lucide-react";
import { buildMetadata } from "@/lib/metadata-helpers";
import { SITE } from "@/lib/site";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { InPageNav } from "@/components/sections/in-page-nav";
import { TabbedFaq } from "@/components/sections/tabbed-faq";
import { CtaBlock } from "@/components/sections/cta-block";
import { INTL_FAQS } from "@/lib/data/intl-faqs";

export const metadata = buildMetadata({
  title: "Canadian Students - OSAP & StudentAid BC Help | Study Master Canada",
  description:
    "Free OSAP and StudentAid BC help from Study Master Canada — Toronto & GTA. 2,000+ Ontario students helped with grants, loans, and appeals. WhatsApp us free today.",
  path: "/domestic",
});

const domesticFaqs = INTL_FAQS.filter((f) =>
  ["How does Study Master Canada help differently?", "When should I start planning for Fall 2026?"].includes(
    f.question,
  ),
);

/** Legacy “Our Services” / homepage PDF - how the team works with Ontario students */
const howWeWorkSteps = [
  {
    n: "1",
    title: "Free consultation",
    desc: "We assess your goals, eligibility, and program fit - no pressure.",
  },
  {
    n: "2",
    title: "Personalized guidance",
    desc: "You get a checklist of documents and steps; we help you prep every detail.",
  },
  {
    n: "3",
    title: "Application submission",
    desc: "We walk you through the OSAP portal and forms for accuracy and completeness.",
  },
  {
    n: "4",
    title: "MSFAA + document upload",
    desc: "Loan agreement signing and clean uploads for income, ID, and school confirmations.",
  },
  {
    n: "5",
    title: "Monitoring & review",
    desc: "We track progress, assist with follow-ups, and respond to information requests.",
  },
  {
    n: "6",
    title: "Funding released",
    desc: "When OSAP approves, we help you understand disbursements - renewals and appeals too.",
  },
] as const;

const domesticServiceTiles = [
  {
    icon: Wallet,
    title: "OSAP support",
    body: "Applications, grants and loans, reviews, and appeals - free for Ontario students.",
  },
  {
    icon: GraduationCap,
    title: "College & university admission",
    body: "Help applying to Ontario institutions with clear advice on programs and prerequisites.",
  },
  {
    icon: BookOpen,
    title: "Course planning",
    body: "Subjects and programs aligned with OSAP eligibility and long-term goals.",
  },
  {
    icon: Heart,
    title: "Career support",
    body: "Guidance beyond school: program-to-job clarity, timelines, and realistic expectations.",
  },
  {
    icon: ClipboardList,
    title: "OSAP renewal",
    body: "Returning students: re-applications, income updates, and progress reviews.",
  },
  {
    icon: FileText,
    title: "Document review",
    body: "MSFAA readiness, ID, income documents, and enrolment letters checked for accuracy.",
  },
  {
    icon: Users,
    title: "One-on-one mentoring",
    body: "Direct time with consultants who know provincial aid and Ontario pathways.",
  },
] as const;

/** Legacy “Courses” page - program families we discuss most often with Ontario clients */
const programAreaTiles = [
  {
    icon: BookOpen,
    title: "Technology",
    body: "IT, software, networking, and credentials aligned with today’s labour market.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    body: "Nursing, medical office admin, and other regulated or high-demand health tracks.",
  },
  {
    icon: ClipboardList,
    title: "Business",
    body: "Accounting, HR, management, and entrepreneurship foundations.",
  },
  {
    icon: Palette,
    title: "Creative arts",
    body: "Design, media, animation, and portfolio-driven programs.",
  },
  {
    icon: Wrench,
    title: "Skilled trades",
    body: "Hands-on training in construction, electrical, mechanical, and related trades.",
  },
  {
    icon: Heart,
    title: "Community services",
    body: "Social work, education support, and community development programs.",
  },
] as const;

const domesticVoices = [
  {
    quote:
      "Study Master helped me secure $8,200 in OSAP grants. I couldn’t have done it without them!",
    name: "Sarah",
    place: "Toronto",
  },
  {
    quote:
      "The process felt overwhelming, but their team made it easy. My funding came on time for tuition.",
    name: "Ahmed",
    place: "Brampton",
  },
  {
    quote:
      "Thanks to their guidance, I graduated with less debt and more confidence about my future.",
    name: "Priya",
    place: "Mississauga",
  },
] as const;

export default function DomesticHubPage() {
  const reviewJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Student Reviews — OSAP & StudentAid BC Help",
    itemListElement: [
      {
        "@type": "Review",
        position: 1,
        author: { "@type": "Person", name: "Sarah, Toronto" },
        reviewBody: "Study Master helped me secure $8,200 in OSAP grants. I couldn't have done it without them!",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        itemReviewed: { "@type": "Service", name: "Free OSAP Help", provider: { "@type": "Organization", name: "Study Master Canada" } },
      },
      {
        "@type": "Review",
        position: 2,
        author: { "@type": "Person", name: "Ahmed, Brampton" },
        reviewBody: "The process felt overwhelming, but their team made it easy. My funding came on time for tuition.",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        itemReviewed: { "@type": "Service", name: "Free OSAP Help", provider: { "@type": "Organization", name: "Study Master Canada" } },
      },
      {
        "@type": "Review",
        position: 3,
        author: { "@type": "Person", name: "Priya, Mississauga" },
        reviewBody: "Thanks to their guidance, I graduated with less debt and more confidence about my future.",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        itemReviewed: { "@type": "Service", name: "Free OSAP Help", provider: { "@type": "Organization", name: "Study Master Canada" } },
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
      />
      <Hero
        category="domestic"
        eyebrow="CANADIAN STUDENTS"
        title="Provincial student aid, handled with the same rigor as visa files."
        subtitle="OSAP for Ontario. StudentAid BC for British Columbia. Free for students. Full deep-dive pages are rolling out through 2026."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Canadian students" },
        ]}
        primaryCta={{
          label: "Book Free Call",
          href: SITE.contactFormUrl,
        }}
        secondaryCta={{ label: "International hub", href: "/international" }}
        trustHint="2,000+ Ontario students helped · Same Toronto & GTA office as our international team · Free for students"
      />

      <InPageNav
        items={[
          { label: "Overview", href: "#overview" },
          { label: "How we help", href: "#how-we-help" },
          { label: "Voices", href: "#voices" },
          { label: "OSAP", href: "#osap" },
          { label: "BC Aid", href: "#bc" },
          { label: "Why Us", href: "#why" },
          { label: "FAQs", href: "#faqs" },
        ]}
        cta={{ label: "Book consultation", href: SITE.contactFormUrl }}
      />

      <section id="overview" className="scroll-mt-28">
        <TrustBar />
      </section>

      <section
        id="how-we-help"
        className="section-pro section-pro-bg-soft scroll-mt-28 border-t border-sm-gray-200"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="section-head">
            <p className="section-label">HOW IT WORKS</p>
            <h2 className="section-heading mt-3">A clear 6-step OSAP workflow</h2>
            <div className="accent-line accent-line-left mt-4" />
          </div>
          <p className="mt-4 max-w-3xl text-sm text-sm-gray-700 md:text-base">
            A clear six-stage flow from first call to funding—run by the same Brampton team that
            also handles StudentAid BC and international admissions, with the same document-first
            discipline everywhere.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {howWeWorkSteps.map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-sm-gray-200 bg-sm-off-white p-6 transition hover:border-sm-teal/40 hover:shadow-md"
              >
                <p className="font-extrabold text-5xl text-sm-orange/30">{s.n}</p>
                <h3 className="mt-3 text-lg font-bold text-sm-gray-900">{s.title}</h3>
                <p className="mt-2 text-sm text-sm-gray-700">{s.desc}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-14 text-2xl font-extrabold text-sm-gray-900">What we offer (domestic)</h3>
          <p className="mt-3 max-w-3xl text-sm text-sm-gray-700">
            OSAP, admissions, renewals, and mentoring for Ontario and BC students—free where we
            advertise it as free. For study-from-abroad-to-Canada, start at the{" "}
            <Link className="font-semibold text-sm-teal-dark underline" href="/international">
              international hub
            </Link>
            .
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {domesticServiceTiles.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-sm-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="inline-flex rounded-lg bg-sm-teal/10 p-2 text-sm-teal-dark">
                  <item.icon className="h-6 w-6" aria-hidden />
                </div>
                <h4 className="mt-4 text-lg font-bold text-sm-gray-900">{item.title}</h4>
                <p className="mt-2 text-sm text-sm-gray-700">{item.body}</p>
              </div>
            ))}
          </div>

          <div id="program-areas" className="scroll-mt-28">
            <h3 className="mt-14 text-2xl font-extrabold text-sm-gray-900">
              Popular program areas (Ontario)
            </h3>
            <p className="mt-3 max-w-3xl text-sm text-sm-gray-700">
              Common directions when pairing program choice with OSAP and career goals. Exploring
              Canada-wide options? Use our{" "}
              <Link
                className="font-semibold text-sm-teal-dark underline"
                href="/international/programs"
              >
                program search
              </Link>
              .
            </p>

            <div className="mt-6 grid gap-4 rounded-2xl border border-sm-gray-200 bg-white p-6 md:grid-cols-3">
              {[
                {
                  title: "Trusted programs",
                  body: "We prioritize recognized, OSAP-eligible routes so funding stays smooth.",
                },
                {
                  title: "Career-ready options",
                  body: "We highlight programs that map to stable, in-demand job outcomes.",
                },
                {
                  title: "Ongoing support",
                  body: "We don't just recommend—we guide the application and enrolment steps.",
                },
              ].map((b) => (
                <div key={b.title} className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sm-teal/10 text-sm-teal-dark">
                    <BadgeCheck className="h-4 w-4" aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-sm-gray-900">{b.title}</p>
                    <p className="mt-1 text-sm text-sm-gray-700">{b.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {programAreaTiles.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-sm-gray-200 bg-sm-off-white p-6"
              >
                <div className="inline-flex rounded-lg bg-sm-orange/10 p-2 text-sm-orange-dark">
                  <item.icon className="h-6 w-6" aria-hidden />
                </div>
                <h4 className="mt-4 text-lg font-bold text-sm-gray-900">{item.title}</h4>
                <p className="mt-2 text-sm text-sm-gray-700">{item.body}</p>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      <section id="voices" className="scroll-mt-28 bg-sm-off-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="border-l-4 border-sm-orange pl-3">
            <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">
              Ontario voices
            </p>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-sm-gray-900 md:text-4xl">
            What Ontario students say
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-sm-gray-600">
            Recent feedback from students we supported through OSAP and admissions planning.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {domesticVoices.map((v) => (
              <blockquote
                key={v.name}
                className="rounded-2xl border border-sm-gray-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm leading-relaxed text-sm-gray-800">&ldquo;{v.quote}&rdquo;</p>
                <footer className="mt-4 text-sm font-semibold text-sm-gray-900">
                  — {v.name}, {v.place}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="osap" className="scroll-mt-28 bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <h2 className="text-2xl font-extrabold text-sm-gray-900">OSAP (Ontario)</h2>
          <p className="mt-4 text-sm leading-relaxed text-sm-gray-700">
            We have processed more than 2,000 OSAP applications and appeals. Preview
            the dedicated OSAP page for timelines, February 2026 policy notes, and
            what to bring to your first call.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-sm-orange px-6 py-3 font-bold text-white shadow transition hover:bg-sm-orange-dark"
            >
              WhatsApp for Free OSAP Help
            </a>
            <Link
              href="/domestic/osap"
              className="inline-flex rounded-full border border-sm-gray-200 bg-sm-off-white px-6 py-3 font-bold text-sm-gray-900 transition hover:border-sm-teal/40 hover:shadow"
            >
              View OSAP Guide →
            </Link>
          </div>
        </div>
      </section>

      <section id="bc" className="scroll-mt-28 bg-sm-off-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <div className="rounded-2xl border border-sm-gray-200 bg-white p-8 shadow-sm">
            <span className="inline-block rounded-full bg-sm-teal px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
              LIVE
            </span>
            <h2 className="mt-4 text-2xl font-extrabold text-sm-gray-900">
              StudentAid BC
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-sm-gray-700">
              Full guide to StudentAid BC - eligibility, grants, BC Completion Grant,
              application process, and 14 FAQs. 10+ years of provincial aid expertise.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-sm-orange px-6 py-3 font-bold text-white shadow transition hover:bg-sm-orange-dark"
              >
                WhatsApp for Free BC Aid Help
              </a>
              <Link
                href="/domestic/bc-aid"
                className="inline-flex rounded-full border border-sm-gray-200 bg-sm-off-white px-6 py-3 font-bold text-sm-gray-900 transition hover:border-sm-teal/40 hover:shadow"
              >
                View BC Aid Guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="scroll-mt-28 bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <h2 className="text-2xl font-extrabold text-sm-gray-900">Why trust StudyMaster?</h2>
          <p className="mt-4 text-sm leading-relaxed text-sm-gray-700">
            We built our reputation in Toronto-area classrooms and Peel Region living rooms -
            helping families decode ministry letters without panic. International recruitment runs
            on the same transparent, document-first process.
          </p>
        </div>
      </section>

      <div id="faqs" className="scroll-mt-28">
        <TabbedFaq
          title="Questions that span domestic & international"
          subtitle="Fast answers for students and parents."
          tabs={[
            {
              id: "domestic",
              label: "Canadian aid",
              faqs: domesticFaqs.length ? domesticFaqs : INTL_FAQS.slice(13, 16),
            },
            {
              id: "international",
              label: "Study in Canada",
              faqs: INTL_FAQS.slice(0, 5),
            },
          ]}
        />
      </div>

      <CtaBlock />
    </main>
  );
}
