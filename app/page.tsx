import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  BookOpen,
  Calculator,
  Check,
  Clock,
  Compass,
  DollarSign,
  Heart,
  MapPin,
  Search,
  ShieldCheck,
  Users,
  Wallet,
} from "lucide-react";
import { buildMetadata } from "@/lib/metadata-helpers";
import { UNSPLASH } from "@/lib/media/unsplash";
import { SITE } from "@/lib/site";
import { InPageNav } from "@/components/sections/in-page-nav";
import { AudienceSwitcher } from "@/components/sections/audience-switcher";
import { CtaBlock } from "@/components/sections/cta-block";

export const metadata: Metadata = buildMetadata({
  title: "Free OSAP & StudentAid BC Help + Study in Canada | Toronto & GTA",
  description:
    "Study Master Canada — Toronto & GTA education consultants. Free OSAP help for Ontario students. Free StudentAid BC guidance for BC students. International admissions + study permits via licensed RCIC partner. Brampton, ON.",
  path: "/",
});

const processSteps = [
  {
    num: "01",
    title: "Free 20-min consultation",
    description:
      "We understand your academic profile, budget, goals, and timeline. No pressure, no fee.",
  },
  {
    num: "02",
    title: "Program shortlist",
    description: "3-5 Canadian programs matching your profile.",
  },
  {
    num: "03",
    title: "Applications submitted",
    description:
      "Transcripts, references, English test scores, SOP, LORs - we prepare and submit.",
  },
  {
    num: "04",
    title: "Offer letter",
    description:
      "Most offers arrive 4-8 weeks. We celebrate, help you choose, plan deposit.",
  },
  {
    num: "05",
    title: "Financial + visa prep",
    description:
      "GIC ($22,895), proof of funds, PAL, study permit via RCIC partner.",
  },
  {
    num: "06",
    title: "Arrive in Canada",
    description:
      "Airport pickup, SIN, bank, phone, health card - your first week coordinated.",
  },
];

const whyTiles = [
  {
    icon: MapPin,
    title: "Brampton-based, in-person",
    body: "Walk into a real office at 83 Kennedy Road South - not a chatbot queue.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed RCIC partner",
    body: "Visa Master Canada handles regulated immigration filings when you retain them.",
  },
  {
    icon: BookOpen,
    title: "1,500+ Canadian programs",
    body: "ApplyBoard partnership quietly expands your shortlist beyond a single brochure.",
  },
  {
    icon: Users,
    title: "Real counsellors, not bots",
    body: "We answer the phone, read your documents, and tell you the truth.",
  },
  {
    icon: Clock,
    title: "Replies within 1 business day",
    body: "We respect deadlines - PAL windows, deposit dates, visa biometrics.",
  },
  {
    icon: Heart,
    title: "Education-first counselling",
    body: "Program fit, timelines, and document discipline - we guide you from shortlist to arrival.",
  },
];

const hubCards = [
  {
    icon: Compass,
    accent: "bg-sm-teal",
    iconColor: "text-sm-teal",
    bg: "bg-sm-teal/10",
    title: "Study in Canada",
    description:
      "Every international route indexed. Colleges, universities, graduate studies, country guides.",
    href: "/international/study-in-canada",
  },
  {
    icon: MapPin,
    accent: "bg-sm-dark",
    iconColor: "text-sm-dark",
    bg: "bg-sm-gray-200",
    title: "Provinces & Territories",
    description:
      "Compare tuition, cost of living, institutions across 5 Canadian provinces.",
    href: "/international/provinces/ontario",
  },
  {
    icon: Search,
    accent: "bg-sm-orange",
    iconColor: "text-sm-orange",
    bg: "bg-sm-orange/10",
    title: "Program Search",
    description:
      "Search 1,500+ Canadian colleges and universities. Filter by province, type, cost.",
    href: "/international/programs",
  },
  {
    icon: Calculator,
    accent: "bg-sm-teal",
    iconColor: "text-sm-teal",
    bg: "bg-sm-teal/10",
    title: "Tools",
    description:
      "GIC deposit calculator and cost-of-studying calculator - real 2026 numbers.",
    href: "/tools/gic-calculator",
  },
  {
    icon: DollarSign,
    accent: "bg-sm-teal",
    iconColor: "text-sm-teal",
    bg: "bg-sm-teal/10",
    title: "Canadian Aid Programs",
    description: "OSAP for Ontario residents. StudentAid BC for BC. Free for students.",
    href: "/domestic/osap",
    whatsappNudge: true,
  },
];

const homeHeroSnippets = [
  "1,500+ programs · human shortlists",
  "Licensed RCIC · Visa Master Canada",
  "Walk-in Brampton office · Mon–Fri 9:30–6:30",
  "2,000+ students coached across int’l & OSAP",
];

export default function HomePage() {
  return (
    <main>
      <section className="hero-bg relative overflow-hidden border-b border-[var(--border-light)] py-16 md:py-20">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:items-stretch lg:gap-10">
            <div className="flex min-w-0 flex-col">
              <p className="badge badge-blue mb-4">
                Canada education support
              </p>

              <h1 className="mt-2 font-extrabold tracking-tight text-5xl leading-[1.05] text-[color:var(--blue-dark)] md:text-6xl lg:text-7xl">
                Study in Canada,
                <br />
                <span className="text-[color:var(--red)]">guided end-to-end.</span>
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-snug text-[color:var(--text-muted)] md:text-xl">
                International admissions for colleges and universities. Program matching, applications, SOP/LOR coaching, financial planning, and study permit filing via our licensed RCIC partner.
              </p>
              <p className="mt-3 max-w-2xl text-base text-[color:var(--text-muted)]">
                Built for students abroad: clarity first, paperwork discipline, and realistic timelines - not sales scripts.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={SITE.contactFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-red"
                >
                  Book Free 20-Min Call
                </a>
                <Link
                  href="/international"
                  className="btn-outline-blue"
                >
                  Explore International
                </Link>
              </div>
            </div>

            <aside
              className="relative flex min-w-0 flex-col lg:justify-center"
              aria-label="Why families pick StudyMaster"
            >
              <div className="relative overflow-hidden rounded-3xl border border-[var(--border-light)] bg-white p-5 shadow-[var(--shadow-md)] md:p-7">
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-sm-orange/25 blur-3xl"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-sm-teal/20 blur-3xl"
                  aria-hidden
                />

                <div className="relative">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--red)]">
                    At a glance
                  </p>

                  <dl className="mt-4 grid grid-cols-2 gap-3">
                    {[
                      { value: "1,500+", label: "Canadian programs" },
                      { value: "2,000+", label: "Students coached" },
                      { value: "5.0", label: "Google reviews" },
                      { value: "RCIC", label: "Visa partner" },
                    ].map((s) => (
                      <div
                        key={s.label}
                        className="rounded-2xl border border-[var(--border-light)] bg-[color:var(--bg-soft)] p-3.5"
                      >
                        <dt className="text-lg font-extrabold tracking-tight text-[color:var(--blue-dark)] md:text-xl">
                          {s.value}
                        </dt>
                        <dd className="mt-0.5 text-xs font-medium leading-snug text-[color:var(--text-muted)]">
                          {s.label}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <ul className="mt-5 space-y-2.5 border-t border-[var(--border-light)] pt-5">
                    {homeHeroSnippets.map((line) => (
                      <li key={line} className="flex gap-2.5 text-sm leading-snug text-[color:var(--text-body)]">
                        <span
                          className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[color:var(--green-light)] text-[color:var(--green-dark)]"
                          aria-hidden
                        >
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[var(--border-light)] pt-6 md:gap-x-8">
            <div className="flex items-center gap-1.5 text-[color:var(--blue-dark)]">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className="text-sm-gold" aria-hidden>
                  ★
                </span>
              ))}
              <span className="ml-2 font-semibold">5.0 · Google</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[color:var(--text-muted)]">
              <Users className="h-4 w-4 shrink-0 text-[color:var(--blue)]" aria-hidden />
              2,000+ students
            </div>
            <div className="flex items-center gap-2 text-sm text-[color:var(--text-muted)]">
              <MapPin className="h-4 w-4 shrink-0 text-[color:var(--blue)]" aria-hidden />
              Brampton, ON
            </div>
            <div className="flex items-center gap-2 text-sm text-[color:var(--text-muted)]">
              <ShieldCheck className="h-4 w-4 shrink-0 text-[color:var(--blue)]" aria-hidden />
              Licensed RCIC partner
            </div>
            <div className="flex items-center gap-2 text-sm text-[color:var(--text-muted)]">
              <Heart className="h-4 w-4 shrink-0 text-[color:var(--blue)]" aria-hidden />
              Free consultation
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          WHY CANADA SECTION
          Position: after hero, before services
      ═════════════════════════════════════════ */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <p className="section-label text-[#5A8730] mb-2">WHY CANADA</p>
            <h2 className="section-heading">The world&apos;s most student-friendly country</h2>
            <div className="accent-line accent-line-center mt-3" />
            <p className="section-subheading mt-4 mx-auto max-w-4xl">
              Canada consistently ranks high for quality of life, immigration pathways, and post-graduation work rights.
              Here&apos;s why 1M+ students chose it.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "#3", label: "Global Quality of Life", sub: "U.S. News & World Report 2024", color: "red" },
                { number: "3yr", label: "Post-Grad Work Permit", sub: "PGWP after graduation", color: "blue" },
                { number: "8", label: "Top 200 Universities", sub: "Times Higher Education 2024", color: "green" },
                { number: "60%", label: "Pursue PR", sub: "International grads stay", color: "red" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="card p-6 text-center"
                  style={{
                    borderTop: `4px solid ${
                      stat.color === "red" ? "#E52D1E" : stat.color === "green" ? "#5A8730" : "#1E5AA5"
                    }`,
                  }}
                >
                  <div
                    className={`text-3xl font-extrabold mb-1 ${
                      stat.color === "red"
                        ? "text-[#E52D1E]"
                        : stat.color === "green"
                          ? "text-[#5A8730]"
                          : "text-[#1E5AA5]"
                    }`}
                  >
                    {stat.number}
                  </div>
                  <div className="font-semibold text-[#163F78] text-sm">{stat.label}</div>
                  <div className="text-[#8AAAD0] text-xs mt-1">{stat.sub}</div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: "linear-gradient(135deg, #1E5AA5 0%, #5A8730 100%)",
                  transform: "rotate(2deg)",
                  opacity: 0.12,
                }}
                aria-hidden
              />
              <Image
                src={UNSPLASH.studentsGroup.src}
                alt={UNSPLASH.studentsGroup.alt}
                width={1200}
                height={800}
                className="relative h-[380px] w-full rounded-3xl object-cover shadow-lg"
                priority
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-5 py-3 border border-[#E4EEFF]">
                <div className="text-2xl font-extrabold text-[#E52D1E]">1M+</div>
                <div className="text-xs text-[#5A7AA0] font-medium">International students in Canada</div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "🏥 Free public healthcare for students",
              "💼 Work 24hrs/week on-campus",
              "🏠 Safe, multicultural cities",
              "🎓 World-ranked degrees recognized globally",
              "🇨🇦 Path to Permanent Residency",
              "💰 Affordable vs USA/UK/Australia",
            ].map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 bg-[#F5F9FF] border border-[#E4EEFF] text-[#1E5AA5] text-sm font-medium px-4 py-2 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <InPageNav
        items={[
          { label: "Our Services", href: "#services" },
          { label: "Our Verticals", href: "#verticals" },
          { label: "How We Help", href: "#process" },
          { label: "Why Us", href: "#why" },
          { label: "Tools", href: "#tools" },
          { label: "Contact", href: "#contact" },
        ]}
        cta={{ label: "Book a consultation", href: SITE.contactFormUrl }}
      />

      <section id="services">
        <AudienceSwitcher />
      </section>

      {/* ════════════════════════════════════════
          GTA UNIVERSITY SPOTLIGHT
          Position: after services section
      ═════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <p className="section-label text-[#1E5AA5] mb-2">TOP INSTITUTIONS</p>
              <h2 className="section-heading">GTA & Ontario colleges we work with</h2>
              <div className="accent-line mt-3" />
            </div>
            <Link
              href="/international/programs"
              className="btn-outline-blue self-start md:self-auto whitespace-nowrap"
            >
              Browse all 1,500+ programs →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                name: "Humber College",
                location: "Toronto, ON",
                type: "College",
                programs: "200+ programs",
                highlight: "Co-op & work-integrated learning",
                img: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=600&q=80&auto=format&fit=crop",
                badge: "Popular",
                badgeColor: "#E52D1E",
              },
              {
                name: "Sheridan College",
                location: "Brampton & Mississauga, ON",
                type: "College",
                programs: "160+ programs",
                highlight: "Top-ranked for animation, design",
                img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80&auto=format&fit=crop",
                badge: "Near Our Office",
                badgeColor: "#5A8730",
              },
              {
                name: "Seneca College",
                location: "Toronto & Markham, ON",
                type: "College",
                programs: "250+ programs",
                highlight: "Strong PGWP pathway",
                img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80&auto=format&fit=crop",
                badge: "OSAP-eligible",
                badgeColor: "#1E5AA5",
              },
              {
                name: "UTM — University of Toronto",
                location: "Mississauga, ON",
                type: "University",
                programs: "140+ programs",
                highlight: "Top 25 globally ranked",
                img: UNSPLASH.campusModernCard.src,
                badge: "Research University",
                badgeColor: "#163F78",
              },
              {
                name: "Centennial College",
                location: "Toronto, ON",
                type: "College",
                programs: "130+ programs",
                highlight: "High acceptance, diverse intake",
                img: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&q=80&auto=format&fit=crop",
                badge: "Fast Offer",
                badgeColor: "#5A8730",
              },
              {
                name: "George Brown College",
                location: "Toronto, ON",
                type: "College",
                programs: "170+ programs",
                highlight: "Downtown Toronto campus",
                img: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&q=80&auto=format&fit=crop",
                badge: "Hospitality & Business",
                badgeColor: "#E52D1E",
              },
            ].map((uni, i) => (
              <div key={i} className="card overflow-hidden group">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={uni.img}
                    alt={uni.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#163F78]/60 to-transparent" />
                  <span
                    className="absolute top-3 right-3 text-white text-xs font-bold px-3 py-1 rounded-full"
                    style={{ background: uni.badgeColor }}
                  >
                    {uni.badge}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-bold text-[#163F78] text-base leading-tight">{uni.name}</h3>
                    <span className="text-xs text-[#8AAAD0] shrink-0 bg-[#F5F9FF] px-2 py-0.5 rounded">
                      {uni.type}
                    </span>
                  </div>
                  <p className="text-[#8AAAD0] text-xs mb-2">📍 {uni.location}</p>
                  <p className="text-[#5A7AA0] text-sm mb-1">{uni.programs}</p>
                  <p className="text-[#5A7AA0] text-xs">{uni.highlight}</p>
                  <a
                    href={SITE.contactFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-[#E52D1E] font-semibold text-sm hover:text-[#C21E11]"
                  >
                    Apply with our help →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="verticals" className="bg-sm-off-white py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="border-l-4 border-sm-orange pl-3">
            <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">
              Plan your pathway
            </p>
          </div>
          <h2 className="mt-4 font-extrabold tracking-tight text-3xl text-sm-gray-900 md:text-4xl">
            Read the guides, then decide.
          </h2>
          <p className="mt-4 max-w-5xl text-justify hyphens-auto text-sm text-sm-gray-700 md:text-base">
            The service grid above is for quick entry. These hubs are for when you
            want to understand how programs fit together - so when you book a
            call, you already know the right questions to ask.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/international"
              className="inline-flex rounded-full border border-sm-gray-300 bg-white px-6 py-3 font-bold text-sm-gray-900 transition hover:border-sm-teal hover:bg-sm-teal/5"
            >
              International Hub →
            </Link>
            <Link
              href="/domestic"
              className="inline-flex rounded-full bg-sm-dark px-6 py-3 font-bold text-white transition hover:bg-sm-darker"
            >
              Canadian Students Hub →
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {hubCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.href}
                  className="rounded-2xl border border-sm-gray-200 bg-white p-6 transition hover:shadow-md"
                >
                  <Link href={card.href} className="group block">
                    <div className={`h-1 w-10 rounded-full ${card.accent}`} />
                    <div className={`mt-4 inline-flex rounded-lg ${card.bg} p-2 ${card.iconColor}`}>
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-sm-gray-900">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm text-sm-gray-700">{card.description}</p>
                    <span className="mt-5 block text-sm font-semibold text-sm-teal-dark group-hover:underline">
                      Open page →
                    </span>
                  </Link>
                  {"whatsappNudge" in card && card.whatsappNudge && (
                    <a
                      href={SITE.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-sm-teal/10 px-4 py-2 text-sm font-semibold text-sm-teal-dark transition hover:bg-sm-teal/20"
                    >
                      WhatsApp for free help →
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="process" className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="border-l-4 border-sm-orange pl-3">
            <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">
              Our process
            </p>
          </div>
          <h2 className="mt-4 font-extrabold tracking-tight text-3xl text-sm-gray-900 md:text-4xl">
            From your first call to your first Canadian winter.
          </h2>
          <p className="mt-4 max-w-5xl text-justify hyphens-auto text-sm text-sm-gray-700 md:text-base">
            We&apos;re your single point of contact for admissions and education planning.
            Regulated immigration steps are handled by Visa Master Canada - a well-established licensed RCIC team - when you retain them.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <div
                key={step.num}
                className="rounded-2xl border border-sm-gray-200 bg-sm-off-white p-6"
              >
                <p className="font-extrabold text-5xl text-sm-orange/30">{step.num}</p>
                <h3 className="mt-3 text-lg font-bold text-sm-gray-900">{step.title}</h3>
                <p className="mt-2 text-sm text-sm-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          INTAKE CALENDAR
          Position: after process steps
      ═════════════════════════════════════════ */}
      <section className="py-16" style={{ background: "linear-gradient(180deg, #F0F9E8, #FFFFFF)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <p className="section-label text-[#5A8730] mb-2">2026 INTAKES</p>
            <h2 className="section-heading">When to apply — Canadian intake calendar</h2>
            <div className="accent-line accent-line-center mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                intake: "Fall Intake",
                months: "September 2026",
                applyBy: "Apply by: April–May 2026",
                status: "⚠️ Deadline Soon",
                statusColor: "#E52D1E",
                description: "Largest intake. Most programs open. Best for first-timers.",
                features: ["Most programs available", "Largest peer community", "Best scholarship pool"],
                border: "#E52D1E",
              },
              {
                intake: "Winter Intake",
                months: "January 2027",
                applyBy: "Apply by: September–October 2026",
                status: "✅ Open Now",
                statusColor: "#5A8730",
                description: "Secondary intake. Fewer programs but less competition.",
                features: ["Less competitive", "Good for second attempts", "Limited programs"],
                border: "#5A8730",
              },
              {
                intake: "Spring/Summer Intake",
                months: "May 2027",
                applyBy: "Apply by: January–February 2027",
                status: "📅 Plan Ahead",
                statusColor: "#1E5AA5",
                description: "Smallest intake. Not all institutions participate.",
                features: ["Select institutions only", "Shorter programs", "Good for upgrades"],
                border: "#1E5AA5",
              },
            ].map((intake, i) => (
              <div key={i} className="card p-6" style={{ borderTop: `4px solid ${intake.border}` }}>
                <span
                  className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3"
                  style={{ background: `${intake.statusColor}18`, color: intake.statusColor }}
                >
                  {intake.status}
                </span>
                <h3 className="font-bold text-[#163F78] text-lg mb-1">{intake.intake}</h3>
                <p className="text-[#1E5AA5] font-semibold text-sm mb-1">{intake.months}</p>
                <p className="text-[#E52D1E] text-xs font-medium mb-3">{intake.applyBy}</p>
                <p className="text-[#5A7AA0] text-sm mb-4">{intake.description}</p>
                <ul className="space-y-1.5">
                  {intake.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[#1A2E4A]">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: intake.border }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={SITE.contactFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 btn-red w-full justify-center text-sm py-2.5"
                  style={{ display: "flex" }}
                >
                  Book consultation for this intake
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-blue-grad relative overflow-hidden py-14 text-white md:py-16">
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
          <p className="text-xs font-bold uppercase tracking-widest text-sm-orange">
            Our track record
          </p>
          <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { n: "2,000+", l: "Students served" },
              { n: "1,500+", l: "Canadian programs" },
              { n: "10+", l: "Years in business" },
              { n: "1", l: "Licensed RCIC partner" },
            ].map((s) => (
              <div key={s.l}>
                <div className="h-px w-12 bg-sm-orange/50" />
                <p className="mt-3 font-extrabold text-4xl md:text-5xl">{s.n}</p>
                <p className="mt-1 text-sm text-white/70">{s.l}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-sm-orange">
                What we handle
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white/85">
                <li>International admissions & recruitment</li>
                <li>SOP & LOR coaching</li>
                <li>GIC & financial planning</li>
                <li>Study permits via RCIC partner</li>
                <li>Pre- & post-arrival coordination</li>
              </ul>
            </div>
            <div className="flex items-end justify-start md:justify-end">
              <a
                href={SITE.contactFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-sm-orange px-6 py-3 font-bold text-white transition hover:bg-sm-orange-dark"
              >
                Talk to our team →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          STUDENT TESTIMONIALS
          Position: after track record section
      ═════════════════════════════════════════ */}
      <section
        className="py-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #F0F9E8 0%, #F5F9FF 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <p className="section-label text-[#E52D1E] mb-2">STUDENT STORIES</p>
            <h2 className="section-heading">Real students. Real results.</h2>
            <div className="accent-line accent-line-center mt-3" />
            <div className="flex items-center justify-center gap-1 mt-5">
              <span className="text-yellow-400 text-xl">★★★★★</span>
              <span className="font-bold text-[#163F78] ml-2">5.0</span>
              <span className="text-[#5A7AA0] ml-1">· Google Reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Priya S.",
                origin: "India → Humber College, Toronto",
                program: "Business Analytics",
                photo: UNSPLASH.testimonialPortraitWoman.src,
                quote:
                  "Study Master helped me get into Humber with a partial scholarship. They handled everything — SOP, transcripts, and my study permit through their RCIC partner. I arrived in Toronto stress-free.",
                tag: "Study Permit + Admissions",
                tagColor: "#1E5AA5",
              },
              {
                name: "Femi A.",
                origin: "Nigeria → Sheridan College, Brampton",
                program: "Animation & Design",
                photo:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80&auto=format&fit=crop&crop=face",
                quote:
                  "I came to their Brampton office not knowing anything about GIC or PAL. They walked me through every step. Got my offer in 5 weeks. Best decision I made.",
                tag: "GIC + Program Matching",
                tagColor: "#5A8730",
              },
              {
                name: "Aisha M.",
                origin: "Ontario resident → Seneca College",
                program: "Early Childhood Education",
                photo:
                  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80&auto=format&fit=crop&crop=face",
                quote:
                  "I was confused about OSAP and missed the deadline once before. Study Master helped me appeal and get my full grant reinstated. Free service, amazing team.",
                tag: "OSAP Appeal ✓",
                tagColor: "#E52D1E",
              },
            ].map((t, i) => (
              <div key={i} className="card p-6 flex flex-col gap-4">
                <div className="text-[#1E5AA5] text-3xl font-serif leading-none">&quot;</div>
                <p className="text-[#1A2E4A] text-sm leading-relaxed flex-1 -mt-3">{t.quote}</p>
                <span
                  className="inline-flex self-start items-center text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: `${t.tagColor}18`, color: t.tagColor }}
                >
                  {t.tag}
                </span>
                <div className="flex items-center gap-3 pt-3 border-t border-[#E4EEFF]">
                  <Image
                    src={t.photo}
                    alt={t.name}
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full object-cover border-2 border-[#E4EEFF]"
                  />
                  <div>
                    <div className="font-semibold text-[#163F78] text-sm">{t.name}</div>
                    <div className="text-[#8AAAD0] text-xs">{t.origin}</div>
                    <div className="text-[#5A7AA0] text-xs">{t.program}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="bg-sm-off-white py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="border-l-4 border-sm-orange pl-3">
            <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">
              Why StudyMaster
            </p>
          </div>
          <h2 className="mt-4 font-extrabold tracking-tight text-3xl text-sm-gray-900 md:text-4xl">
            Built on Ontario students and OSAP integrity.
          </h2>
          <p className="mt-4 max-w-5xl text-justify hyphens-auto text-sm text-sm-gray-700 md:text-base">
            International recruitment runs on the same ethos.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whyTiles.map((t) => (
              <div
                key={t.title}
                className="rounded-2xl border border-sm-gray-200 bg-white p-7 transition hover:border-sm-teal/40 hover:shadow-md"
              >
                <div className="inline-flex rounded-lg bg-sm-teal/10 p-2 text-sm-teal">
                  <t.icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mt-4 text-lg font-bold text-sm-gray-900">{t.title}</h3>
                <p className="mt-2 text-sm text-sm-gray-700">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tools" className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="border-l-4 border-sm-orange pl-3">
            <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">
              Free tools
            </p>
          </div>
          <h2 className="mt-4 font-extrabold tracking-tight text-3xl text-sm-gray-900 md:text-4xl">
            Plan before you pay.
          </h2>
          <p className="mt-4 max-w-5xl text-justify hyphens-auto text-sm text-sm-gray-700 md:text-base">
            Two calculators built for 2026 Canadian education planning. Free. No
            email required.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Link
              href="/tools/gic-calculator"
              className="group rounded-2xl border-2 border-sm-teal/10 bg-sm-off-white p-8 transition hover:border-sm-teal/40 hover:bg-sm-teal/5"
            >
              <Calculator className="h-12 w-12 text-sm-teal" aria-hidden />
              <h3 className="mt-4 font-extrabold text-2xl text-sm-gray-900">
                GIC Calculator
              </h3>
              <p className="mt-3 text-sm-gray-700">
                Calculate your CAD $22,895 GIC deposit with bank fees, setup costs,
                and recommended buffer.
              </p>
              <ul className="mt-5 space-y-1.5 text-sm text-sm-gray-800">
                <li>✓ All 9 participating banks</li>
                <li>✓ Setup fee breakdown</li>
                <li>✓ 10% buffer recommendation</li>
              </ul>
              <span className="mt-6 inline-block font-semibold text-sm-teal-dark group-hover:underline">
                Open calculator →
              </span>
            </Link>

            <Link
              href="/tools/cost-calculator"
              className="group rounded-2xl border-2 border-sm-orange/10 bg-sm-off-white p-8 transition hover:border-sm-orange/40 hover:bg-sm-orange/5"
            >
              <Wallet className="h-12 w-12 text-sm-orange" aria-hidden />
              <h3 className="mt-4 font-extrabold text-2xl text-sm-gray-900">
                Cost of Studying Calculator
              </h3>
              <p className="mt-3 text-sm-gray-700">
                Estimate your first-year Canadian education budget by province,
                program level, housing, and lifestyle.
              </p>
              <ul className="mt-5 space-y-1.5 text-sm text-sm-gray-800">
                <li>✓ 5 major provinces</li>
                <li>✓ 4 program levels</li>
                <li>✓ 3 housing options</li>
              </ul>
              <span className="mt-6 inline-block font-semibold text-sm-orange-dark group-hover:underline">
                Open calculator →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          RESOURCES PREVIEW
          Position: before contact CTA
      ═════════════════════════════════════════ */}
      <section className="py-20 bg-[#F5F9FF]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <p className="section-label text-[#E52D1E] mb-2">FREE GUIDES</p>
              <h2 className="section-heading">Read before you apply</h2>
              <div className="accent-line mt-3" />
            </div>
            <Link href="/why-canada" className="btn-outline-blue self-start">
              Why Canada →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "IELTS vs TOEFL vs Duolingo — Which test for Canada 2026?",
                tag: "English Tests",
                tagColor: "#1E5AA5",
                readTime: "5 min read",
                img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80&auto=format&fit=crop",
                href: "/international/english-tests",
              },
              {
                title: "GIC Explained: Which bank, how much, step-by-step 2026",
                tag: "Financial Planning",
                tagColor: "#5A8730",
                readTime: "7 min read",
                img: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&q=80&auto=format&fit=crop",
                href: "/international/gic",
              },
              {
                title: "OSAP 2026: New grant rules, what changed, and how to appeal",
                tag: "OSAP",
                tagColor: "#E52D1E",
                readTime: "8 min read",
                img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80&auto=format&fit=crop",
                href: "/domestic/osap",
              },
            ].map((post) => (
              <Link key={post.href} href={post.href} className="card overflow-hidden group block">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{ background: `${post.tagColor}18`, color: post.tagColor }}
                    >
                      {post.tag}
                    </span>
                    <span className="text-xs text-[#8AAAD0]">{post.readTime}</span>
                  </div>
                  <h3 className="font-semibold text-[#163F78] text-sm leading-snug group-hover:text-[#E52D1E] transition-colors">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <CtaBlock />
      </section>
    </main>
  );
}
