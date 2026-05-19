"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { InternationalSectionTitle } from "@/components/sections/international-section-title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type TabbedFaqItem = { question: string; answer: string };

export type TabbedFaqTab = {
  id: string;
  label: string;
  faqs: TabbedFaqItem[];
};

type Props = {
  title: string;
  subtitle?: string;
  /** Small caps label in the orange bar (default FAQ). */
  sectionLabel?: string;
  tabs: TabbedFaqTab[];
  /** Inject FAQPage JSON-LD schema for all FAQs across tabs. */
  includeJsonLd?: boolean;
  /** Default selected tab id (falls back to first tab). */
  defaultTabId?: string;
  /** Override outer section vertical padding (e.g. dense long guides). */
  sectionPaddingClassName?: string;
};

export function TabbedFaq({
  title,
  subtitle,
  sectionLabel = "FAQ",
  tabs,
  includeJsonLd = true,
  defaultTabId,
  sectionPaddingClassName = "py-16 md:py-20",
}: Props) {
  const initial =
    (defaultTabId && tabs.find((t) => t.id === defaultTabId)?.id) ||
    tabs[0]?.id ||
    "";
  const [active, setActive] = useState<string>(initial);

  const safeTabs = useMemo(() => {
    return tabs
      .map((t) => ({
        ...t,
        faqs: (t.faqs ?? []).filter(
          (f): f is TabbedFaqItem => Boolean(f && f.question && f.answer),
        ),
      }))
      .filter((t) => t.faqs.length > 0);
  }, [tabs]);

  const safeActiveTab = safeTabs.find((t) => t.id === active) ?? safeTabs[0];

  const allFaqs = useMemo(() => {
    const seen = new Set<string>();
    const merged: TabbedFaqItem[] = [];
    for (const tab of safeTabs) {
      for (const f of tab.faqs) {
        const key = `${f.question}__${f.answer}`;
        if (seen.has(key)) continue;
        seen.add(key);
        merged.push(f);
      }
    }
    return merged;
  }, [safeTabs]);

  const jsonLd =
    includeJsonLd && allFaqs.length
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: allFaqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }
      : null;

  if (!safeTabs.length) return null;

  return (
    <section className={sectionPaddingClassName}>
      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <InternationalSectionTitle
          label={sectionLabel}
          title={title}
          description={
            subtitle ? (
              <p className="text-sm-gray-700">{subtitle}</p>
            ) : undefined
          }
        />

        <div className="mt-8 flex justify-start">
          <div className="flex max-w-full flex-wrap justify-start gap-2 rounded-full bg-sm-off-white p-1.5 ring-1 ring-sm-gray-200">
            {tabs.map((t) => {
              const isActive = t.id === active;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActive(t.id)}
                  className={cn(
                    "rounded-full px-4 py-2 text-xs font-semibold transition md:px-5 md:text-sm",
                    isActive
                      ? "bg-sm-orange text-white shadow-sm"
                      : "text-sm-gray-800 hover:bg-sm-teal/10 hover:text-sm-teal-dark",
                  )}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-7 w-full rounded-2xl border border-sm-gray-200 bg-white p-4 md:p-6">
          <Accordion type="single" collapsible className="w-full">
            {(safeActiveTab?.faqs ?? []).map((faq, idx) => (
              <AccordionItem
                key={faq.question}
                value={`${safeActiveTab?.id ?? "tab"}-${idx}`}
                className="border-b border-sm-gray-100 last:border-0"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-sm-gray-900 hover:text-sm-teal-dark">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-justify text-sm text-sm-gray-700 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

