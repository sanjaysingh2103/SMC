"use client";

import Link from "next/link";
import { Calendar } from "lucide-react";

export type InPageNavItem = { label: string; href: string; badge?: string };

type Props = {
  items: InPageNavItem[];
  cta?: { label: string; href: string };
};

export function InPageNav({ items, cta }: Props) {
  const ctaExternal = cta?.href.startsWith("http");

  return (
    <nav
      className="sticky top-16 z-40 border-y border-sm-gray-200 bg-white/95 backdrop-blur"
      aria-label="On this page"
    >
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-6 py-3 md:px-10">
        <div className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex shrink-0 items-center rounded-full px-4 py-2 text-sm font-semibold text-sm-gray-700 transition hover:bg-sm-teal/10 hover:text-sm-teal-dark"
            >
              {item.label}
              {item.badge ? (
                <span className="ml-2 rounded-full bg-sm-orange px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                  {item.badge}
                </span>
              ) : null}
            </Link>
          ))}
        </div>
        {cta ? (
          <Link
            href={cta.href}
            target={ctaExternal ? "_blank" : undefined}
            rel={ctaExternal ? "noopener noreferrer" : undefined}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-sm-orange px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-sm-orange-dark"
          >
            <Calendar className="h-4 w-4 shrink-0" aria-hidden />
            {cta.label}
          </Link>
        ) : null}
      </div>
    </nav>
  );
}
