import { cn } from "@/lib/utils";
import { InternationalSectionTitle } from "@/components/sections/international-section-title";

type Step = { number: string; title: string; description: string };

type StepListProps = {
  title?: string;
  subtitle?: string;
  /** Small uppercase label above the title (pro sections). */
  eyebrow?: string;
  /** Wraps the section (padding/background). */
  sectionClassName?: string;
  /** Default 3 — use 4 when you have four short steps in one row. */
  columns?: 3 | 4;
  steps: Step[];
};

export function StepList({
  title,
  subtitle,
  eyebrow,
  sectionClassName,
  columns = 3,
  steps,
}: StepListProps) {
  return (
    <section
      className={cn("py-16 md:py-20", sectionClassName)}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {title ? (
          <InternationalSectionTitle
            label={eyebrow ?? "PROCESS"}
            title={title}
            description={
              subtitle ? (
                <p className="text-sm-gray-700">{subtitle}</p>
              ) : undefined
            }
          />
        ) : subtitle || eyebrow ? (
          <div className="text-sm leading-relaxed text-sm-gray-700 md:text-base">
            {eyebrow ? (
              <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">
                {eyebrow}
              </p>
            ) : null}
            {subtitle ? <p className={cn(eyebrow && "mt-3")}>{subtitle}</p> : null}
          </div>
        ) : null}

        <div
          className={cn(
            "mt-10 grid gap-6 md:grid-cols-2",
            columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3",
          )}
        >
          {steps.map((step) => (
            <div
              key={step.number}
              className="card-pro grad-border relative p-6"
            >
              <p className="font-extrabold text-4xl text-sm-orange/40">
                {step.number}
              </p>
              <h3 className="mt-2 text-lg font-bold text-sm-gray-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-sm-gray-700">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
