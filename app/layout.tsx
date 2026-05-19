import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "flag-icons/css/flag-icons.min.css";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { StickyCta } from "@/components/layout/sticky-cta";
import { SITE, siteUrl } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  themeColor: "#1E5AA5",
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords:
    "study in Canada, study master Canada, OSAP help, StudentAid BC, free OSAP help, Ontario student aid, BC student aid, international student Canada, education consultant Toronto, education consultant Brampton, RCIC partner, study permit Canada",
  openGraph: {
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
    url: siteUrl,
    siteName: SITE.name,
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  other: {
    "geo.region": "CA-ON",
    "geo.placename": "Brampton, Ontario, Canada",
    "geo.position": "43.6835;-79.7663",
    "ICBM": "43.6835, -79.7663",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "LocalBusiness"],
  name: SITE.name,
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/logo.png`,
  description: SITE.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.office.street,
    addressLocality: SITE.office.city,
    addressRegion: SITE.office.province,
    postalCode: SITE.office.postalCode,
    addressCountry: SITE.office.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.6835,
    longitude: -79.7663,
  },
  telephone: SITE.phoneHref.replace("tel:", ""),
  email: SITE.email,
  priceRange: "Free",
  currenciesAccepted: "CAD",
  areaServed: [
    { "@type": "State", name: "Ontario" },
    { "@type": "Province", name: "British Columbia" },
    { "@type": "Country", name: "Canada" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Student Aid & Education Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Free OSAP Application Help",
          description: "Free OSAP applications, reviews, and appeals for Ontario students",
        },
        price: "0",
        priceCurrency: "CAD",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Free StudentAid BC Help",
          description: "Free StudentAid BC applications, BC Completion Grant, and appeals for BC students",
        },
        price: "0",
        priceCurrency: "CAD",
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    worstRating: "1",
    reviewCount: "47",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:30",
      closes: "18:30",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/studymastercanada",
    "https://www.instagram.com/studymastercanada",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={`${jakarta.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white font-sans text-sm-gray-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <StickyCta />
      </body>
    </html>
  );
}
