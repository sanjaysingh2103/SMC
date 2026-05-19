import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type InternationalSectionTitleProps = {
  /** Small caps text (or fragment with icon) inside the orange bar */
  label: ReactNode;
  title: ReactNode;
  /** Intro below H2 — matches OSAP / study-in-canada body tone */
  description?: ReactNode;
  /** Main sections use default; compact for denser sub-blocks */
  size?: "default" | "compact";
  className?: string;
};

export function InternationalSectionTitle({
  label,
  title,
  description,
  size = "default",
  className,
}: InternationalSectionTitleProps) {
  return (
    <header className={cn(className)}>
      <div className="border-l-4 border-sm-orange pl-3">
        <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-bold uppercase tracking-widest text-sm-teal-dark">
          {label}
        </p>
      </div>
      <h2
        className={cn(
          "mt-3 font-extrabold tracking-tight text-sm-gray-900",
          size === "compact"
            ? "text-2xl md:text-3xl"
            : "text-3xl md:text-4xl",
        )}
      >
        {title}
      </h2>
      {description != null ? (
        <div className="mt-3 w-full max-w-none space-y-3 text-sm leading-relaxed text-sm-gray-600 md:text-base [&_a]:font-semibold [&_a]:text-sm-teal-dark [&_a]:underline [&_strong]:font-semibold [&_strong]:text-sm-gray-900">
          {description}
        </div>
      ) : null}
    </header>
  );
}
