import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { TOP_SOURCE_COUNTRIES } from "@/lib/data/source-countries";
import { cn } from "@/lib/utils";
import { InternationalSectionTitle } from "@/components/sections/international-section-title";

type CountryGridProps = {
  className?: string;
};

export function CountryGrid({ className }: CountryGridProps) {
  return (
    <section
      className={cn(
        "section-pro section-pro-bg-soft border-t border-sm-gray-200/60",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <InternationalSectionTitle
          label="SOURCE COUNTRIES"
          title="Guidance tuned to where you are applying from"
          description={
            <p className="text-sm-gray-700">
              Canada hosted <strong className="font-semibold text-sm-gray-800">997,820</strong>{" "}
              international students at year-end 2024. These markets drive most new
              enrolments — and the document nuances officers expect from each post.
            </p>
          }
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TOP_SOURCE_COUNTRIES.map((c) => (
            <Link
              key={c.slug}
              href={`/international/from/${c.slug}`}
              className="card-pro grad-border group relative flex gap-4 overflow-hidden p-5 md:p-6"
            >
              <span
                className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-sm-gray-100 bg-gradient-to-br from-white to-sm-off-white shadow-sm"
                aria-hidden
              >
                <span className={`fi fi-${c.code} fis !leading-none text-2xl rounded-md`} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <p className="truncate text-lg font-bold text-sm-gray-900">{c.name}</p>
                  <span className="flex shrink-0 items-center gap-0.5 rounded-lg bg-gradient-to-br from-sm-gray-900 to-sm-gray-700 px-2 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-sm">
                    #{c.rank}
                  </span>
                </div>
                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-sm-gray-600">
                  {c.population2024}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-sm-teal-dark opacity-90 transition group-hover:opacity-100">
                  Country guide
                  <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-px group-hover:-translate-y-px" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
