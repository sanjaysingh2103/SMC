import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PROVINCES, provinceBySlug } from "@/lib/data/provinces";
import { buildMetadata } from "@/lib/metadata-helpers";
import { ProvincePageTemplate } from "@/components/templates/province-page";

export function generateStaticParams() {
  return PROVINCES.map((p) => ({ slug: p.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const province = provinceBySlug[slug];
  if (!province) {
    return {};
  }
  return buildMetadata({
    title: `Study in ${province.name}, Canada`,
    description: `${province.name} (${province.abbreviation}) guide: ${province.highlight.slice(0, 130)}… Study Master Canada.`,
    path: `/international/provinces/${province.slug}`,
  });
}

export default async function ProvincePage({ params }: PageProps) {
  const { slug } = await params;
  const province = provinceBySlug[slug];
  if (!province) notFound();
  return <ProvincePageTemplate province={province} />;
}
