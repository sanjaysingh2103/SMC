import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  Building2,
  MessageCircle,
  MapPin,
  DollarSign,
  GraduationCap,
} from "lucide-react";
import { SITE, siteUrl } from "@/lib/site";
import { BC_CITIES, bcCityBySlug } from "@/lib/data/domestic-cities";
import { CtaBlock } from "@/components/sections/cta-block";
import { TrustBar } from "@/components/sections/trust-bar";

export function generateStaticParams() {
  return BC_CITIES.map((c) => ({ city: c.slug }));
}

type PageProps = { params: Promise<{ city: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const data = bcCityBySlug[city];
  if (!data) return {};

  const title = `Free StudentAid BC Help in ${data.name}, BC | Study Master Canada`;
  const description = `Free StudentAid BC application help for ${data.name} students. BC Completion Grant, zero-interest loans, appeals — 100% free. WhatsApp us today.`;

  return {
    title,
    description,
    keywords: `StudentAid BC ${data.name}, BC student aid ${data.name}, ${data.name} StudentAid BC application, free BC student aid ${data.name}, BC Completion Grant ${data.name}, studentaidbc.ca help ${data.name}`,
    openGraph: {
      title,
      description,
      type: "website",
      locale: "en_CA",
      siteName: SITE.name,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
    alternates: { canonical: `${siteUrl}/domestic/bc-aid/${data.slug}` },
  };
}

export default async function BcAidCityPage({ params }: PageProps) {
  const { city } = await params;
  const data = bcCityBySlug[city];
  if (!data) notFound();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Free StudentAid BC Help in ${data.name}`,
    serviceType: "Student Financial Aid Consulting",
    description: `Free StudentAid BC application, review, and appeal support for ${data.name} post-secondary students.`,
    areaServed: {
      "@type": "City",
      name: data.name,
      containedInPlace: {
        "@type": "State",
        name: "British Columbia",
        containedInPlace: { "@type": "Country", name: "Canada" },
      },
    },
    offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", bestRating: "5", reviewCount: "47" },
    provider: {
      "@type": "LocalBusiness",
      name: SITE.name,
      telephone: "+19056714950",
      url: siteUrl,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.office.street,
        addressLocality: SITE.office.city,
        addressRegion: SITE.office.province,
        postalCode: SITE.office.postalCode,
        addressCountry: "CA",
      },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Canadian Students", item: `${siteUrl}/domestic` },
      { "@type": "ListItem", position: 3, name: "StudentAid BC", item: `${siteUrl}/domestic/bc-aid` },
      { "@type": "ListItem", position: 4, name: `StudentAid BC Help in ${data.name}`, item: `${siteUrl}/domestic/bc-aid/${data.slug}` },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <section className="section-blue-grad relative overflow-hidden border-b border-white/15 text-white">
        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-sm-orange/20 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-sm-teal/20 blur-3xl" aria-hidden />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <nav className="text-xs text-white/80" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link className="text-white hover:underline" href="/">Home</Link></li>
              <li className="opacity-50">/</li>
              <li><Link className="text-white hover:underline" href="/domestic">Canadian Students</Link></li>
              <li className="opacity-50">/</li>
              <li><Link className="text-white hover:underline" href="/domestic/bc-aid">StudentAid BC</Link></li>
              <li className="opacity-50">/</li>
              <li className="text-white/80">{data.name}</li>
            </ol>
          </nav>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_minmax(260px,300px)] lg:items-start lg:gap-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-sm-orange-light">
                ● FREE STUDENTAID BC HELP · {data.region.toUpperCase()}
              </p>
              <h1 className="mt-4 font-extrabold tracking-tight text-5xl leading-[1.05] text-white md:text-6xl">
                Free StudentAid BC Help in {data.name}
              </h1>
              <p className="mt-5 max-w-2xl text-xl leading-snug text-white/85 md:text-2xl">
                {data.intro}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-sm-orange px-7 py-3.5 font-bold text-white shadow-lg shadow-sm-orange/30 transition hover:bg-sm-orange-dark"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden />
                  WhatsApp for Free BC Aid Help
                </a>
                <Link
                  href="/domestic/bc-aid"
                  className="inline-flex rounded-full border border-white/20 bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur transition hover:bg-white/20"
                >
                  Full StudentAid BC Guide →
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/70">
                <span>2,000+ students helped</span>
                <span aria-hidden className="hidden sm:inline">·</span>
                <span>100% free</span>
                <span aria-hidden className="hidden sm:inline">·</span>
                <span>BC students served remotely</span>
                <span aria-hidden className="hidden sm:inline">·</span>
                <span>★★★★★ 5.0 on Google</span>
              </div>
            </div>

            <aside className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-widest text-sm-orange-light">StudentAid BC at a glance</p>
              <dl className="mt-5 space-y-4">
                {[
                  { k: "Up to $520/wk", v: "Combined loans + grants" },
                  { k: "50%", v: "BC loans forgiven at graduation" },
                  { k: "0%", v: "Interest on BC provincial loans" },
                  { k: "$0", v: "Our counselling fee" },
                ].map((row) => (
                  <div key={row.k} className="flex items-baseline justify-between gap-3 border-b border-white/10 pb-4 last:border-0 last:pb-0">
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

      {/* City context */}
      <section className="bg-sm-off-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="border-l-4 border-sm-orange pl-3">
            <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">STUDENTAID BC IN {data.name.toUpperCase()}</p>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-sm-gray-900 md:text-4xl">
            How StudentAid BC works for {data.name} students
          </h2>
          <div className="mt-5 grid gap-8 lg:grid-cols-2">
            <div className="space-y-4 text-sm leading-relaxed text-sm-gray-700 md:text-base">
              <p>{data.cityContext}</p>
            </div>
            <div className="rounded-2xl border border-sm-gray-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">Why {data.name} students choose us</p>
              <p className="mt-3 text-sm leading-relaxed text-sm-gray-700">{data.whyNote}</p>
              <div className="mt-5 flex gap-3">
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-sm-orange px-5 py-2.5 font-bold text-sm text-white shadow transition hover:bg-sm-orange-dark"
                >
                  WhatsApp Now — Free
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutions */}
      <section className="bg-white py-12 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="border-l-4 border-sm-orange pl-3">
            <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">LOCAL INSTITUTIONS</p>
          </div>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-sm-gray-900 md:text-3xl">
            Colleges & universities near {data.name}
          </h2>
          <p className="mt-2 text-sm text-sm-gray-600">All institutions below are StudentAid BC–designated (subject to individual program verification).</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.institutions.map((inst) => (
              <div key={inst.name} className="flex items-start gap-3 rounded-xl border border-sm-gray-200 bg-sm-off-white p-4">
                <div className="mt-0.5 inline-flex shrink-0 rounded-lg bg-sm-teal/10 p-2 text-sm-teal">
                  <Building2 className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <p className="text-sm font-bold text-sm-gray-900">{inst.name}</p>
                  <p className="mt-0.5 text-xs text-sm-gray-600">{inst.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we help */}
      <section className="bg-sm-off-white py-12 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="border-l-4 border-sm-orange pl-3">
            <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">OUR FREE SERVICE</p>
          </div>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-sm-gray-900 md:text-3xl">
            What we do for {data.name} StudentAid BC students
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                Icon: CheckCircle2,
                title: "Eligibility check",
                body: `We verify your BC residency, dependency status, and that your ${data.name} institution is StudentAid BC–designated — before you apply.`,
              },
              {
                Icon: GraduationCap,
                title: "BC Completion Grant",
                body: "We explain how to position your file so 50% of your BC provincial loans are forgiven at graduation — the most underutilized BC benefit.",
              },
              {
                Icon: DollarSign,
                title: "Maximize your assessment",
                body: `Vancouver and Metro BC students can claim higher living costs. We make sure your ${data.name} file accurately reflects your actual expenses.`,
              },
              {
                Icon: MessageCircle,
                title: "BC Services Card setup",
                body: "StudentAid BC requires BC Services Card login. We walk you through setup and the studentaidbc.ca portal — over WhatsApp or video call.",
              },
              {
                Icon: CheckCircle2,
                title: "Reviews & appeals",
                body: "Assessment lower than expected? Income changed mid-year? We draft and submit formal StudentAid BC review requests — at no cost.",
              },
              {
                Icon: MapPin,
                title: "Local knowledge",
                body: `We know ${data.name}'s post-secondary landscape — which programs are designated, common pitfalls for BC students, and what reviewers look for.`,
              },
            ].map(({ Icon, title, body }) => (
              <div key={title} className="rounded-2xl border border-sm-gray-200 bg-white p-6 shadow-sm">
                <div className="inline-flex rounded-lg bg-sm-teal/10 p-2 text-sm-teal">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mt-4 text-lg font-bold text-sm-gray-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CTA strip */}
      <section className="bg-sm-teal py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 text-center md:flex-row md:justify-between md:px-10 md:text-left">
          <div>
            <p className="font-bold text-white">Ready to start your StudentAid BC application in {data.name}?</p>
            <p className="mt-1 text-sm text-white/80">Free for all BC students. Remote-friendly — WhatsApp us any time.</p>
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

      {/* FAQs */}
      <section id="faqs" className="scroll-mt-28 bg-white py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <div className="border-l-4 border-sm-orange pl-3">
            <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">FAQs</p>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-sm-gray-900 md:text-4xl">
            StudentAid BC questions from {data.name} students
          </h2>
          <div className="mt-8 space-y-4">
            {data.faqs.map((faq) => (
              <details key={faq.q} className="group rounded-2xl border border-sm-gray-200 bg-sm-off-white">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 font-bold text-sm-gray-900 marker:hidden">
                  <span>{faq.q}</span>
                  <span className="shrink-0 text-sm-teal transition group-open:rotate-45">＋</span>
                </summary>
                <div className="border-t border-sm-gray-200 px-6 py-4 text-sm leading-relaxed text-sm-gray-700">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-link */}
      <section className="bg-sm-off-white py-8 border-t border-sm-gray-100">
        <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-sm-gray-700">
            <strong>Want the full StudentAid BC guide?</strong>{" "}
            <Link href="/domestic/bc-aid" className="font-semibold text-sm-teal-dark underline hover:no-underline">
              Read our complete StudentAid BC 2026 overview →
            </Link>
          </p>
          <p className="text-sm text-sm-gray-700">
            <strong>In Ontario instead?</strong>{" "}
            <Link href="/domestic/osap" className="font-semibold text-sm-teal-dark underline hover:no-underline">
              See our free OSAP guide →
            </Link>
          </p>
        </div>
      </section>

      <CtaBlock
        primaryHref={SITE.whatsapp}
        primaryLabel={`WhatsApp for Free BC Aid Help in ${data.name}`}
        heading={`Questions about StudentAid BC in ${data.name}?`}
        body="Free for all BC students. Applications, BC Completion Grant, reviews, and appeals — handled with care."
      />
    </main>
  );
}
