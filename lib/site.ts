export const SITE = {
  name: "Study Master Canada",
  shortName: "SMC",
  tagline: "Your Education Partner",
  /** Primary market positioning (physical office remains Peel / Brampton in GTA). */
  market: {
    lead: "Toronto & Greater Toronto Area",
    short: "Toronto & GTA",
    servingLine:
      "Serving Toronto, Peel, York Region, and students across Canada - with a walk-in GTA office.",
  },
  description:
    "Toronto and Greater Toronto Area education consultants for studying in Canada: international recruitment, admissions, GIC, and study permits with a licensed RCIC partner. Free OSAP and StudentAid BC guidance for Canadians.",
  url: "https://studymastercanada.com",
  email: "sales@studymaster.ca",
  phone: "+1 (905) 671-4950",
  phoneDisplay: "(905) 671-4950",
  phoneHref: "tel:+19056714950",
  whatsapp: "https://wa.me/19056714950",
  /** Primary CTA destination (internal contact + intake). */
  contactFormUrl: "/contact-us",
  /** Legacy Monday.com intake (kept for reference / optional use). */
  mondayFormUrl: "https://wkf.ms/41V1qlk",
  office: {
    street: "Unit 1805, 83 Kennedy Road South",
    city: "Brampton",
    province: "ON",
    postalCode: "L6W 3N7",
    country: "Canada",
    /** Mailing / walk-in - Peel Region inside the GTA, ~20–35 min to downtown Toronto by highway. */
    full: "Unit 1805, 83 Kennedy Road South, Brampton, ON L6W 3N7",
    mapsUrl:
      "https://maps.google.com/?q=Unit+1805+83+Kennedy+Road+South+Brampton+ON+L6W+3N7",
  },
  hours: "Mon–Fri, 9:30am–6:30pm ET",
  rcicPartner: {
    name: "Visa Master Canada",
    description:
      "Licensed Regulated Canadian Immigration Consultant (RCIC)",
    location:
      "Visa Master Canada is a well-established licensed RCIC team. Regulated immigration services are provided only when you retain them.",
  },
  stats: {
    studentsHelped: "2,000+",
    servicesFree: "100%",
    canadianPrograms: "1,500+",
  },
} as const;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? SITE.url;
