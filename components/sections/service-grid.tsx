import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { IntlService } from "@/lib/data/intl-services";
import { InternationalSectionTitle } from "@/components/sections/international-section-title";

type ServiceGridProps = {
  services: IntlService[];
  title?: string;
  subtitle?: string;
};

export function ServiceGrid({
  services,
  title = "How we support international students",
  subtitle = "Structured services from shortlisting to settlement-with regulated immigration handled by our RCIC partner when you need it.",
}: ServiceGridProps) {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <InternationalSectionTitle
          label="SERVICES"
          title={title}
          description={
            <p className="text-sm-gray-700">{subtitle}</p>
          }
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.slug}
                className="group rounded-2xl border border-sm-gray-100 bg-white p-6 shadow-[0_20px_50px_-15px_rgba(11,22,40,0.15)] transition hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="rounded-xl bg-sm-teal-light p-3 text-sm-teal-dark">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-sm-gray-100 px-3 py-1 text-xs font-medium text-sm-gray-700">
                    {s.estimatedDuration}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-sm-gray-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">
                  {s.shortDescription}
                </p>
                <Link
                  href={s.href}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sm-teal-dark hover:text-sm-orange-dark"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
