import { cn } from "@/lib/utils";

type StatCardProps = {
  value: string;
  label: string;
  variant?: "light" | "dark";
};

export function StatCard({
  value,
  label,
  variant = "light",
}: StatCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-6 shadow-sm",
        variant === "dark"
          ? "border-white/15 bg-white/5 text-white"
          : "border-sm-gray-100 bg-white text-sm-gray-900",
      )}
    >
      <p
        className={cn(
          "text-3xl font-extrabold tracking-tight md:text-4xl",
          variant === "dark" ? "text-white" : "text-sm-teal-dark",
        )}
      >
        {value}
      </p>
      <p
        className={cn(
          "mt-2 text-xs font-semibold uppercase tracking-widest",
          variant === "dark" ? "text-white/70" : "text-sm-gray-600",
        )}
      >
        {label}
      </p>
    </div>
  );
}
