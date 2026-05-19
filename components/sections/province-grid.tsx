import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { PROVINCES } from "@/lib/data/provinces";
import { cn } from "@/lib/utils";
import { InternationalSectionTitle } from "@/components/sections/international-section-title";

type ProvinceGridProps = {
  className?: string;
};

export function ProvinceGrid({ className }: ProvinceGridProps) {
  return (
    <section
      className={cn(
        "section-pro border-t border-sm-gray-200/80 bg-white",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <InternationalSectionTitle
          label={
            <>
              <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden />
              Provinces
            </>
          }
          title="Choose a province — then choose the right program"
          description={
            <p className="text-sm-gray-700">
              Ontario is our home base, but we place students across Canada where fit,
              budget, and PGWP logic align — each guide pulls tuition bands, rent planning,
              and city anchors at a glance.
            </p>
          }
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {PROVINCES.map((p) => (
            <Link
              key={p.slug}
              href={`/international/provinces/${p.slug}`}
              className="card-pro grad-border group relative overflow-hidden p-6 transition md:p-7"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-sm-teal/10 to-transparent" />

              <div className="relative flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <p className="text-xl font-extrabold text-sm-gray-900">
                    {p.name}{" "}
                    <span className="text-base font-bold text-sm-teal-dark">
                      {p.abbreviation}
                    </span>
                  </p>
                  <p className="mt-1.5 text-sm font-medium text-sm-gray-600">
                    {p.intlStudentShare}
                  </p>
                </div>
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-sm-gray-100 bg-white text-sm-gray-400 shadow-sm transition group-hover:border-sm-teal/30 group-hover:text-sm-teal-dark">
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-0.5" />
                </span>
              </div>

              <div className="relative mt-5 grid gap-3 rounded-2xl border border-sm-gray-100/80 bg-white/90 p-4 text-xs md:text-sm">
                <div className="flex flex-col gap-1 border-b border-sm-gray-100 pb-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <span className="shrink-0 font-semibold uppercase tracking-wide text-sm-gray-500">
                    Tuition (planning)
                  </span>
                  <span className="font-medium leading-snug text-sm-gray-800">
                    {p.averageTuitionCAD}
                  </span>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <span className="shrink-0 font-semibold uppercase tracking-wide text-sm-gray-500">
                    Living costs
                  </span>
                  <span className="font-medium leading-snug text-sm-gray-800">
                    {p.livingCostCAD}
                  </span>
                </div>
              </div>

              <div className="relative mt-4 flex flex-wrap gap-2">
                {p.majorCities.slice(0, 4).map((city) => (
                  <span
                    key={city}
                    className="rounded-full border border-sm-gray-100 bg-sm-off-white px-3 py-1 text-xs font-medium text-sm-gray-700"
                  >
                    {city}
                  </span>
                ))}
                {p.majorCities.length > 4 ? (
                  <span className="rounded-full bg-sm-gray-900/5 px-3 py-1 text-xs font-semibold text-sm-gray-600">
                    +{p.majorCities.length - 4} more
                  </span>
                ) : null}
              </div>

              <p className="relative mt-5 inline-flex items-center gap-1 text-sm font-bold text-sm-teal-dark">
                Open province guide
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
