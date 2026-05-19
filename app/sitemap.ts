import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { TOP_SOURCE_COUNTRIES } from "@/lib/data/source-countries";
import { PROVINCES } from "@/lib/data/provinces";
import { OSAP_CITIES, BC_CITIES } from "@/lib/data/domestic-cities";

const pillarPaths = [
  "/international",
  "/international/study-in-canada",
  "/international/programs",
  "/international/colleges",
  "/international/universities",
  "/international/graduate-studies",
  "/international/gic",
  "/international/cost",
  "/international/visa",
  "/international/pgwp",
  "/international/pathways-to-pr",
  "/tools/gic-calculator",
  "/tools/cost-calculator",
];

const domesticPillarPaths = [
  "/domestic/osap",
  "/domestic/bc-aid",
];

const supportingPaths = [
  "/international/admissions",
  "/international/sop",
  "/international/lor",
  "/international/english-tests",
  "/international/financial-planning",
  "/international/pre-departure",
  "/international/post-arrival",
  "/international/accommodation",
  "/international/banking",
  "/international/working-in-canada",
  "/international/scholarships",
  "/international/events",
  "/about",
  "/contact",
  "/domestic",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const home: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified, changeFrequency: "weekly", priority: 1 },
  ];

  const hubs: MetadataRoute.Sitemap = pillarPaths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: path.startsWith("/tools") ? 0.85 : 0.9,
  }));

  const domesticPillars: MetadataRoute.Sitemap = domesticPillarPaths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const supporting: MetadataRoute.Sitemap = supportingPaths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const countries: MetadataRoute.Sitemap = TOP_SOURCE_COUNTRIES.map((c) => ({
    url: `${siteUrl}/international/from/${c.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const provinces: MetadataRoute.Sitemap = PROVINCES.map((p) => ({
    url: `${siteUrl}/international/provinces/${p.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const osapCities: MetadataRoute.Sitemap = OSAP_CITIES.map((c) => ({
    url: `${siteUrl}/domestic/osap/${c.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const bcCities: MetadataRoute.Sitemap = BC_CITIES.map((c) => ({
    url: `${siteUrl}/domestic/bc-aid/${c.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...home, ...hubs, ...domesticPillars, ...supporting, ...countries, ...provinces, ...osapCities, ...bcCities];
}
