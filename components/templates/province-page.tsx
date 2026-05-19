import type { CanadianProvince } from "@/lib/data/provinces";
import { UNSPLASH } from "@/lib/media/unsplash";
import { INTL_SERVICES } from "@/lib/data/intl-services";
import { SITE } from "@/lib/site";
import { InternationalGuideBanner } from "@/components/sections/international-guide-banner";
import { ServiceGrid } from "@/components/sections/service-grid";
import { RcicDisclaimer } from "@/components/sections/rcic-disclaimer";
import { CtaBlock } from "@/components/sections/cta-block";
import { InternationalSectionTitle } from "@/components/sections/international-section-title";

type ProvincePageProps = {
  province: CanadianProvince;
};

function provinceHeroImage(slug: string) {
  switch (slug) {
    case "ontario":
      return UNSPLASH.toronto;
    case "british-columbia":
      return UNSPLASH.vancouver;
    case "quebec":
      return UNSPLASH.campusModern;
    case "alberta":
      return UNSPLASH.cityStreetcar;
    case "nova-scotia":
      return UNSPLASH.libraryStudy;
    default:
      return UNSPLASH.campusModern;
  }
}

export function ProvincePageTemplate({ province }: ProvincePageProps) {
  return (
    <main>
      <InternationalGuideBanner
        eyebrow="STUDY BY PROVINCE"
        title={`${province.name} — tuition, life & PGWP in one plan`}
        lead={province.highlight}
        body={`International student share (illustrative): ${province.intlStudentShare}.`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Study in Canada", href: "/international" },
          { label: province.name },
        ]}
        primaryCta={{
          label: "Book Free 20-Min Call",
          href: SITE.contactFormUrl,
        }}
        secondaryCta={{
          label: "Explore programs",
          href: "/international/programs",
        }}
        asideTitle="Province snapshot"
        heroImage={provinceHeroImage(province.slug)}
        stats={[
          { value: province.averageTuitionCAD, label: "Avg tuition (intl band)" },
          { value: province.livingCostCAD, label: "Living costs (planning)" },
          { value: province.abbreviation, label: "Province code" },
          { value: `${province.majorCities.length}`, label: "Cities in this guide" },
        ]}
      />

      <section className="section-pro border-t border-sm-gray-200/80">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle
            label="OVERVIEW"
            title={`Why ${province.name}?`}
          />
          <div className="mt-6 w-full max-w-none space-y-4 text-sm leading-relaxed text-sm-gray-700 md:text-base">
            <p>{province.highlight}</p>
            <p>
              Selecting a province is not a popularity contest-it is a decision
              about tuition, rent, transportation, campus culture, and your
              long-term immigration strategy. We help you translate those variables
              into a shortlist you can defend to your family and to a visa officer.
            </p>
            <p>
              {province.name} graduates remain eligible for the Post-Graduation Work
              Permit when program and institution rules are met. {province.pgwpNotes}
            </p>
          </div>
        </div>
      </section>

      <section className="section-pro section-pro-bg-soft border-t border-sm-gray-200">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle label="CITIES" title="Major cities" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {province.majorCities.map((city) => (
              <div
                key={city}
                className="card-pro grad-border p-5 font-semibold text-sm-gray-900"
              >
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-sm-gray-200/80 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <InternationalSectionTitle label="SCHOOLS" title="Top institutions (starter list)" />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {province.topInstitutions.map((i) => (
              <div
                key={i}
                className="rounded-xl border border-sm-gray-100 bg-white p-4 text-sm text-sm-gray-800 shadow-sm"
              >
                {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-sm-gray-200 bg-sm-gray-50 py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
            <div className="rounded-3xl border border-sm-gray-100 bg-white p-8 shadow-sm">
              <InternationalSectionTitle
                size="compact"
                label="BUDGET"
                title={`Cost of studying in ${province.name}`}
              />
              <p className="mt-3 text-sm text-sm-gray-700 md:text-base">
                Tuition and rent move every year. Use these figures as planning
                anchors, then refine with your offer letters and our cost
                calculator.
              </p>
              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between gap-4 border-b border-sm-gray-100 pb-3">
                  <dt className="text-sm-gray-600">Average tuition (intl, broad)</dt>
                  <dd className="font-semibold text-sm-gray-900">
                    {province.averageTuitionCAD}
                  </dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-sm-gray-100 pb-3">
                  <dt className="text-sm-gray-600">Living costs (planning band)</dt>
                  <dd className="font-semibold text-sm-gray-900">
                    {province.livingCostCAD}
                  </dd>
                </div>
              </dl>
            </div>
            <div className="rounded-3xl border border-sm-gray-100 bg-white p-8 shadow-sm">
              <InternationalSectionTitle size="compact" label="PGWP" title="PGWP & immigration notes" />
              <p className="mt-3 text-sm leading-relaxed text-sm-gray-700 md:text-base">
                {province.pgwpNotes}
              </p>
              <div className="mt-6">
                <RcicDisclaimer />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceGrid services={INTL_SERVICES} />

      <CtaBlock />
    </main>
  );
}
