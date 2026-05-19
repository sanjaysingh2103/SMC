import type { LucideIcon } from "lucide-react";
import { DollarSign, MapPin, ShieldCheck, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site";

const defaultItems: { icon: LucideIcon; label: string }[] = [
  { icon: Users, label: "2,000+ students helped" },
  { icon: MapPin, label: `${SITE.market.short} · walk-in office` },
  { icon: ShieldCheck, label: "Licensed RCIC partner" },
  { icon: DollarSign, label: "Free consultation" },
];

type TrustBarProps = {
  items?: { icon: LucideIcon; label: string }[];
  className?: string;
};

export function TrustBar({ items = defaultItems, className }: TrustBarProps) {
  return (
    <div
      className={cn(
        "border-y border-sm-gray-100 bg-sm-off-white py-5",
        className,
      )}
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-around gap-6 px-6 md:px-10">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2 text-sm text-sm-gray-800"
          >
            <item.icon className="h-4 w-4 text-sm-teal-dark" />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
