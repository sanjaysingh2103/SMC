import {
  Award,
  BookOpen,
  Building2,
  FileText,
  GraduationCap,
  Heart,
  Lock,
  Shield,
  Target,
  TrendingUp,
  Users,
  Wallet,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata-helpers";
import { SITE } from "@/lib/site";
import { UNSPLASH } from "@/lib/media/unsplash";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { RcicDisclaimer } from "@/components/sections/rcic-disclaimer";
import { CtaBlock } from "@/components/sections/cta-block";

export const metadata = buildMetadata({
  title: "About Study Master Canada - Free OSAP & StudentAid BC Help | Toronto & GTA",
  description:
    "Study Master Canada — Brampton-based education consultants offering free OSAP help, free StudentAid BC guidance, and international admissions support. 2,000+ students helped. Licensed RCIC partner on-site.",
  path: "/about",
});

const trustBarAbout = [
  { icon: Users, label: `${SITE.stats.studentsHelped} students coached` },
  { icon: Building2, label: `${SITE.office.city}, ON walk-in office` },
  { icon: Shield, label: "Licensed RCIC partner (regulated filings)" },
  { icon: Heart, label: "Free consultation" },
] as const;

const whatWeDoItems = [
  {
    icon: BookOpen,
    title: "Education planning",
    body: "Choose paths that match your goals — whether that is an Ontario program and OSAP, or a Canadian offer from abroad.",
    box: "icon-box-blue",
  },
  {
    icon: Wallet,
    title: "OSAP & provincial aid",
    body: "We simplify grants, loans, renewals, reviews, and appeals — free for eligible Canadian students.",
    box: "icon-box-green",
  },
  {
    icon: FileText,
    title: "Application support",
    body: "From forms to follow-ups — organized submissions and portal hygiene so nothing slips.",
    box: "icon-box-blue",
  },
  {
    icon: Target,
    title: "Program matching",
    body: "Shortlists aligned to your skills, budget, and career intent — Ontario institutions and, for international clients, cross-Canada options.",
    box: "icon-box-green",
  },
  {
    icon: GraduationCap,
    title: "Post-admission help",
    body: "After the offer: deposits, enrolment confirmations, funding timing, and next-step checklists.",
    box: "icon-box-red",
  },
  {
    icon: Award,
    title: "Scholarship tips",
    body: "Practical ways to stack bursaries and awards alongside government aid where policy allows.",
    box: "icon-box-green",
  },
] as const;

const whyTrustItems = [
  { icon: Heart, title: "No fees for domestic aid", body: "OSAP and StudentAid BC guidance stay 100% free for students." },
  { icon: Users, title: "Personalized support", body: "Advice and steps tailored to your situation — not generic scripts." },
  { icon: TrendingUp, title: "Proven track record", body: "2,000+ successful OSAP journeys and counting." },
  { icon: Zap, title: "Fast turnaround", body: "We respond quickly so you do not miss ministry deadlines." },
  { icon: Shield, title: "Expert advisors", body: "Specialists in student aid and Canadian admissions." },
  { icon: Lock, title: "Confidential & secure", body: "Your information is handled carefully and never sold." },
] as const;

const teamPillars = [
  {
    title: "Admissions & education planning",
    body: "Program shortlists, applications, SOP/LOR support, and document discipline for international and domestic students.",
  },
  {
    title: "Provincial aid (OSAP & StudentAid BC)",
    body: "Free guidance on applications, reviews, and appeals — the same rigour we use for education files.",
  },
  {
    title: "RCIC partner coordination",
    body: `Regulated study permit and immigration filings are handled only by our licensed partner, ${SITE.rcicPartner.name}, when you retain them.`,
  },
] as const;

export default function AboutPage() {
  return (
    <main>
      <Hero
        category="default"
        heroImage={UNSPLASH.counselling}
        heroImagePriority
        unifiedAside
        balancedColumns
        pinCtasToMain
        introFullWidth
        snug
        eyebrow="About SMC"
        title="About Study Master Canada"
        subtitle="Student-first counselling for Canadian admissions and provincial aid. One GTA office. One team. No offshore script farm."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
        primaryCta={{
          label: "Book free call",
          href: SITE.contactFormUrl,
        }}
        secondaryCta={{ label: "Contact", href: "/contact-us" }}
        trustHint="★★★★★ 5.0 on Google · Walk-in Brampton office · 2,000+ students supported · Licensed RCIC partner for regulated filings"
        sidebarTitle="At a glance"
        snippetsReplace
        sidebarSnippets={[
          "Ontario roots · domestic aid stays free",
          "International admissions across 1,500+ programs",
          "Document-first process (same discipline as OSAP files)",
          "Regulated immigration only via licensed RCIC partner",
        ]}
      />

      <TrustBar items={[...trustBarAbout]} />

      <section className="border-b border-sm-gray-100 bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:gap-14 md:px-8 lg:grid-cols-2 lg:gap-16">
          <div className="min-w-0">
            <p className="section-label mb-3 text-[color:var(--green-dark)]">Who we are</p>
            <h2 className="section-heading text-left text-[color:var(--blue-dark)]">
              Student-first. Ontario-rooted. Genuinely local.
            </h2>
            <div className="accent-line accent-line-left mt-3 mb-6" />
            <p className="mb-4 leading-relaxed text-sm-gray-700 md:text-base">
              Study Master Canada is a Brampton-based education consultancy built on one idea: students deserve honest
              guidance, not sales scripts. We&apos;ve helped 2,000+ Ontario students navigate OSAP, and we bring that same
              document discipline to international admissions.
            </p>
            <p className="mb-8 leading-relaxed text-sm-gray-700 md:text-base">
              When immigration steps are needed, our licensed RCIC partner — {SITE.rcicPartner.name} — handles regulated
              filings from the same building. One address. Two expert teams.
            </p>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { n: SITE.stats.studentsHelped, l: "Students helped", c: "text-[color:var(--red)]" },
                { n: "10+", l: "Years in Ontario", c: "text-[color:var(--blue)]" },
                { n: "5.0", l: "Google rating", c: "text-[color:var(--green-dark)]" },
                { n: "Free", l: "OSAP guidance", c: "text-[color:var(--red)]" },
              ].map((s) => (
                <div key={s.l} className="card rounded-2xl p-4 shadow-sm">
                  <div className={`text-2xl font-extrabold tabular-nums ${s.c}`}>{s.n}</div>
                  <div className="mt-0.5 text-sm text-sm-gray-600">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Image
              src={UNSPLASH.counselling.src}
              alt={UNSPLASH.counselling.alt}
              width={900}
              height={500}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="col-span-2 h-[220px] w-full rounded-2xl object-cover shadow-md ring-1 ring-sm-gray-100"
            />
            <Image
              src={UNSPLASH.studentLaptop.src}
              alt={UNSPLASH.studentLaptop.alt}
              width={800}
              height={520}
              sizes="(min-width: 1024px) 20vw, 50vw"
              className="h-[160px] w-full rounded-2xl object-cover shadow-md ring-1 ring-sm-gray-100"
            />
            <Image
              src={UNSPLASH.graduation.src}
              alt={UNSPLASH.graduation.alt}
              width={800}
              height={520}
              sizes="(min-width: 1024px) 20vw, 50vw"
              className="h-[160px] w-full rounded-2xl object-cover shadow-md ring-1 ring-sm-gray-100"
            />
          </div>
        </div>
      </section>

      <section className="bg-sm-off-white py-16 md:py-20">
        <div className="mx-auto w-full max-w-7xl space-y-16 px-4 sm:px-6 md:space-y-20 lg:px-8">
          <div className="w-full">
            <h2 className="text-2xl font-extrabold tracking-tight text-sm-gray-900 md:text-3xl">What we do</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-sm-gray-600 md:text-base">
              What Ontario families already relied on us for — extended today with study-in-Canada support for students
              abroad.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
              {whatWeDoItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex h-full flex-col rounded-2xl border border-sm-gray-200 bg-white p-6 shadow-sm transition hover:border-sm-teal/35 hover:shadow-md"
                  >
                    <div className={item.box}>
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="mt-4 font-bold text-sm-gray-900">{item.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-sm-gray-700">{item.body}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-3xl border border-sm-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold text-sm-gray-900">Why students trust us</h2>
            <p className="mt-2 text-sm text-sm-gray-600">
              The same commitments we built on OSAP work — unchanged for domestic aid, with clear roles when immigration
              steps involve our licensed RCIC partner.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {whyTrustItems.map((t) => {
                const Icon = t.icon;
                return (
                  <li
                    key={t.title}
                    className="flex gap-3 rounded-2xl border border-sm-gray-200 bg-sm-off-white/60 p-5 transition hover:border-sm-orange/30"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sm-orange/10 text-sm-orange-dark">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span>
                      <span className="font-bold text-sm-gray-900">{t.title}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-sm-gray-700">{t.body}</span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                h: "Mission",
                p: "Make higher education accessible through the right guidance — admissions support, planning, and financial aid navigation.",
              },
              {
                h: "Vision",
                p: "A community of confident students who choose programs with intent, fund school responsibly, and graduate with options.",
              },
              {
                h: "Promise",
                p: "Free, personalized help from advisors who care — and honest feedback when a plan needs improving.",
              },
            ].map((m) => (
              <div
                key={m.h}
                className="rounded-2xl border border-sm-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-sm-gray-900">{m.h}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">{m.p}</p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-sm-gray-100 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold text-sm-gray-900">What we help with</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-sm-gray-200 bg-sm-off-white/80 p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">
                  International students (abroad)
                </p>
                <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-sm-gray-700">
                  <li>Program matching for colleges and universities</li>
                  <li>Applications, transcripts, and portal submissions</li>
                  <li>SOP/LOR coaching and document organization</li>
                  <li>GIC & proof-of-funds planning</li>
                  <li>Pre-departure and post-arrival checklists</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-sm-gray-200 bg-sm-off-white/80 p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-sm-orange-dark">
                  Canadian students (domestic)
                </p>
                <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-sm-gray-700">
                  <li>
                    <Link href="/domestic/osap" className="font-semibold text-sm-teal-dark underline">OSAP guidance</Link>: applications, documents, reviews, appeals — free for Ontario students
                  </li>
                  <li>
                    <Link href="/domestic/bc-aid" className="font-semibold text-sm-teal-dark underline">StudentAid BC guidance</Link>: BC Completion Grant, applications, and appeals — free for BC students
                  </li>
                  <li>Deadlines, document checklists, and common mistakes</li>
                  <li>Funding conversations for families</li>
                </ul>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={SITE.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-full bg-sm-orange px-5 py-2.5 text-sm font-bold text-white shadow transition hover:bg-sm-orange-dark"
                  >
                    WhatsApp for Free OSAP / BC Aid Help
                  </a>
                </div>
              </div>
            </div>
            <p className="mt-6 text-xs leading-relaxed text-sm-gray-600">
              Note: Regulated immigration representation (study permit filings and related legal submissions) is provided
              only by our licensed RCIC partner, {SITE.rcicPartner.name}, when you retain them.
            </p>
          </div>

          <div className="rounded-3xl border border-sm-gray-100 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold text-sm-gray-900">Where we work</h2>
            <p className="mt-3 text-sm leading-relaxed text-sm-gray-700">
              {SITE.office.full}, {SITE.office.country}
            </p>
            <p className="mt-2 text-sm text-sm-gray-700">{SITE.hours}</p>
            <a
              className="mt-4 inline-flex text-sm font-semibold text-sm-teal-dark underline underline-offset-4 hover:text-sm-teal"
              href={SITE.office.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Google Maps
            </a>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-sm-gray-900">How we&apos;re organized</h2>
            <p className="mt-2 max-w-2xl text-sm text-sm-gray-600">
              Three pillars — one intake desk. You always know what we handle in-house versus what the RCIC partner does
              under retainer.
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {teamPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-2xl border border-sm-gray-100 bg-white p-6 text-left shadow-sm transition hover:border-sm-teal/30"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sm-teal/10 text-sm-teal-dark">
                    <Building2 className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-sm-gray-900">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">{pillar.body}</p>
                </div>
              ))}
            </div>
          </div>

          <RcicDisclaimer />
        </div>
      </section>

      <CtaBlock />
    </main>
  );
}
