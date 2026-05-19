import { buildMetadata } from "@/lib/metadata-helpers";
import { SITE, siteUrl } from "@/lib/site";
import { UNSPLASH } from "@/lib/media/unsplash";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { CtaBlock } from "@/components/sections/cta-block";
import { ContactForm } from "@/components/forms/contact-form";
import {
  Building2,
  CalendarClock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Clock,
} from "lucide-react";

export const metadata = buildMetadata({
  title: "Contact Us - Free OSAP & StudentAid BC Help | Study Master Canada",
  description:
    "WhatsApp, call, or email Study Master Canada for free OSAP help, free StudentAid BC guidance, and study-in-Canada admissions. Brampton walk-in office, Mon–Fri 9:30am–6:30pm ET.",
  path: "/contact-us",
});

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  image: `${siteUrl}/logo.png`,
  "@id": `${siteUrl}/contact-us`,
  url: `${siteUrl}/contact-us`,
  telephone: SITE.phoneHref.replace("tel:", ""),
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.office.street,
    addressLocality: SITE.office.city,
    addressRegion: SITE.office.province,
    postalCode: SITE.office.postalCode,
    addressCountry: SITE.office.country,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:30",
      closes: "18:30",
    },
  ],
};

const trustContact = [
  { icon: Clock, label: "Replies within 1 business day" },
  { icon: MapPin, label: `${SITE.office.city}, ON · walk-in welcome` },
  { icon: ShieldCheck, label: "Licensed RCIC partner for regulated filings" },
  { icon: Phone, label: SITE.phoneDisplay },
] as const;

const channels = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    body: "Fast scheduling and quick questions.",
    href: SITE.whatsapp,
    cta: "Message us",
  },
  {
    icon: Phone,
    title: "Call",
    body: "Speak with our team directly.",
    href: SITE.phoneHref,
    cta: `Call ${SITE.phoneDisplay}`,
  },
  {
    icon: Mail,
    title: "Email",
    body: "Best for attachments and detailed questions.",
    href: `mailto:${SITE.email}`,
    cta: SITE.email,
  },
  {
    icon: Building2,
    title: "Walk-in office",
    body: "Brampton — same building as our RCIC partner.",
    href: SITE.office.mapsUrl,
    cta: "Open in Maps",
  },
] as const;

export default function ContactUsPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      <Hero
        category="default"
        heroImage={UNSPLASH.counsellingDesk}
        heroImagePriority
        unifiedAside
        balancedColumns
        pinCtasToMain
        introFullWidth
        snug
        eyebrow="Contact"
        title="Get in touch"
        subtitle="Talk to a real counsellor — admissions, OSAP, StudentAid BC, and next steps. Fast replies; walk-ins welcome during office hours."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact us" },
        ]}
        primaryCta={{
          label: "Send a message",
          href: "#message",
        }}
        secondaryCta={{ label: "WhatsApp", href: SITE.whatsapp, external: true }}
        trustHint={`Walk-in ${SITE.office.city} office · ${SITE.hours} · Replies within 1 business day`}
        sidebarTitle="Contact options"
        snippetsReplace
        sidebarSnippets={[
          "Fastest: use the form below",
          `Email: ${SITE.email}`,
          `Phone: ${SITE.phoneDisplay}`,
          "Walk-ins welcome — bring documents if you have them",
        ]}
      />

      <TrustBar items={[...trustContact]} />

      <section className="border-b border-sm-gray-100 bg-white py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {channels.map((c) => {
              const Icon = c.icon;
              const openNewTab = c.href.startsWith("http");
              return (
                <a
                  key={c.title}
                  href={c.href}
                  target={openNewTab ? "_blank" : undefined}
                  rel={openNewTab ? "noopener noreferrer" : undefined}
                  className="group flex h-full flex-col rounded-2xl border border-sm-gray-200 bg-white p-6 shadow-sm transition hover:border-sm-teal/35 hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="icon-box-blue">
                      <Icon className="h-5 w-5 shrink-0" aria-hidden />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-bold text-sm-gray-900">{c.title}</div>
                      <div className="mt-1 text-sm leading-relaxed text-sm-gray-600">{c.body}</div>
                      <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sm-teal-dark transition group-hover:text-sm-orange">
                        {c.cta} <span aria-hidden>→</span>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section id="message" className="scroll-mt-[calc(var(--navbar-height)+1rem)] bg-sm-off-white py-14 pb-16 md:py-16 md:pb-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:gap-12 lg:px-8 xl:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <ContactForm page="/contact-us" />

          <aside className="flex flex-col gap-6 lg:sticky lg:top-[calc(var(--navbar-height)+1rem)]">
            <div className="rounded-2xl border border-sm-gray-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">Office details</p>
              <div className="mt-4 space-y-4 text-sm text-sm-gray-700">
                <div className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-sm-teal" aria-hidden />
                  <div>
                    <div className="font-semibold text-sm-gray-900">Address</div>
                    <div className="mt-0.5 leading-relaxed">{SITE.office.full}</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CalendarClock className="mt-0.5 h-5 w-5 shrink-0 text-sm-teal" aria-hidden />
                  <div>
                    <div className="font-semibold text-sm-gray-900">Hours</div>
                    <div className="mt-0.5">{SITE.hours}</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-sm-teal" aria-hidden />
                  <div>
                    <div className="font-semibold text-sm-gray-900">Privacy</div>
                    <div className="mt-0.5 leading-relaxed">
                      We only use your details to respond to this inquiry — never sold or spammed.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-sm-gray-200 bg-white shadow-sm ring-1 ring-sm-gray-100">
              <iframe
                title="Google Maps — Study Master Canada, Brampton"
                src="https://www.google.com/maps?q=83+Kennedy+Road+South+Brampton+ON+L6W+3N7&output=embed"
                className="aspect-[4/3] min-h-[240px] w-full lg:min-h-[280px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </div>
      </section>

      <CtaBlock
        eyebrow="Need guidance?"
        heading="Book free consultation"
        body="Whether you’re applying for OSAP, choosing a program, or planning study in Canada — we’re here to help."
      />
    </main>
  );
}
