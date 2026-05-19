import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { siteUrl } from "@/lib/site";

export type FaqItem = { question: string; answer: string };

type FaqAccordionProps = {
  id?: string;
  sectionClassName?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  /** Replaces the default IRCC-focused disclaimer when set. */
  footnote?: string;
  faqs: FaqItem[];
  includeJsonLd?: boolean;
  idPrefix?: string;
};

export function FaqAccordion({
  id,
  sectionClassName,
  eyebrow,
  title = "Frequently asked questions",
  subtitle,
  footnote,
  faqs,
  includeJsonLd = true,
  idPrefix = "faq",
}: FaqAccordionProps) {
  const jsonLd =
    includeJsonLd && faqs.length
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.answer,
            },
          })),
        }
      : null;

  const disclaimer =
    footnote ??
    `Answers reflect general guidance and may change with IRCC and institutional updates. Canonical site: ${siteUrl}`;

  return (
    <section
      id={id}
      className={cn("py-16 md:py-20", sectionClassName)}
    >
      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {eyebrow ? (
            <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">
              {eyebrow}
            </p>
          ) : null}
          <h2
            className={cn(
              "text-3xl font-extrabold tracking-tight text-sm-gray-900 md:text-4xl",
              eyebrow ? "mt-3" : undefined,
            )}
          >
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-3 text-sm text-sm-gray-600 md:text-base">
              {subtitle}
            </p>
          ) : null}
        </div>

        <div className="mt-10 rounded-2xl border border-sm-gray-200 bg-white p-4 md:p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={faq.question}
                value={`${idPrefix}-${idx}`}
                className="border-b border-sm-gray-100 last:border-0"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-sm-gray-900 hover:text-sm-teal-dark">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm text-sm-gray-700 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <p className="mt-6 text-center text-xs text-sm-gray-500">{disclaimer}</p>
      </div>
    </section>
  );
}
