import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { TOP_SOURCE_COUNTRIES, countryBySlug } from "@/lib/data/source-countries";
import { buildMetadata } from "@/lib/metadata-helpers";
import { CountryPageTemplate } from "@/components/templates/country-page";

export function generateStaticParams() {
  return TOP_SOURCE_COUNTRIES.map((c) => ({ slug: c.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const country = countryBySlug[slug];
  if (!country) {
    return {};
  }
  return buildMetadata({
    title: `Study in Canada from ${country.name}`,
    description: `${country.name} students: ${country.keyNote.slice(0, 140)}… Study Master Canada - Toronto & GTA.`,
    path: `/international/from/${country.slug}`,
  });
}

export default async function CountryPage({ params }: PageProps) {
  const { slug } = await params;
  const country = countryBySlug[slug];
  if (!country) notFound();
  return <CountryPageTemplate country={country} />;
}
