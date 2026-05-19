import type { Metadata } from "next";
import { SITE, siteUrl } from "@/lib/site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
};

export function buildMetadata({
  title,
  description,
  path,
}: PageMeta): Metadata {
  const url = `${siteUrl}${path === "/" ? "" : path}`;
  const fullTitle = `${title} | Study Master Canada`;
  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE.name,
      locale: "en_CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}
