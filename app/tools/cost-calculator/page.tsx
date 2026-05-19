import { buildMetadata } from "@/lib/metadata-helpers";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { UNSPLASH } from "@/lib/media/unsplash";
import { InternationalGuideBanner } from "@/components/sections/international-guide-banner";
import { TrustBar } from "@/components/sections/trust-bar";
import { InPageNav } from "@/components/sections/in-page-nav";
import { CtaBlock } from "@/components/sections/cta-block";
import { CostCalculatorForm } from "@/components/tools/cost-calculator-form";

export const metadata = buildMetadata({
  title: "Cost of Studying in Canada Calculator",
  description:
    "Model first-year tuition, living costs by province/city, housing type, and lifestyle multipliers. Separate IRCC $22,895 GIC line. Study Master Canada - Toronto & GTA.",
  path: "/tools/cost-calculator",
});

export default function CostCalculatorPage() {
  return (
    <main>
      <InternationalGuideBanner
        eyebrow="TOOLS"
        title="First-year cost calculator"
        lead="Stress-test tuition + living + one-time expenses before you commit to deposits and flights."
        body="This is an illustrative planning model — not an offer of admission or visa approval. Use it to sanity-check city choice, housing type, and lifestyle assumptions, then pair it with the cost guide and GIC rules."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Tools", href: "/tools" },
          { label: "Cost calculator" },
        ]}
        primaryCta={{ label: "Book Free 20-Min Call", href: SITE.contactFormUrl }}
        secondaryCta={{ label: "Cost guide", href: "/international/cost" }}
        heroImage={UNSPLASH.financeDesk}
        asideTitle="Calculator · snapshot"
        stats={[
          { value: "8 cities", label: "Cost bands in the guide" },
          { value: "$22,895", label: "IRCC GIC floor (Sept 2025)" },
          { value: "~10%", label: "Buffer we recommend" },
          { value: "1–2 days", label: "Typical reply time" },
        ]}
        metaItems={[
          "Lifestyle vs proof-of-funds lines separated",
          "Built for family spreadsheets",
          `${SITE.office.city}, ON · ${SITE.hours}`,
          "Permits · Visa Master Canada (RCIC) when retained",
        ]}
      />

      <TrustBar />

      <InPageNav
        items={[
          { label: "Calculator", href: "#calculator" },
          { label: "How to use", href: "#how-to" },
          { label: "Next steps", href: "#next-steps" },
        ]}
        cta={{ label: "Book call", href: SITE.contactFormUrl }}
      />

      <section id="calculator" className="scroll-mt-28 border-t border-sm-gray-200/80 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <CostCalculatorForm />
        </div>
      </section>

      <section id="how-to" className="scroll-mt-28 border-t border-sm-gray-200 bg-sm-off-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="border-l-4 border-sm-orange pl-3">
            <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">WORKFLOW</p>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-sm-gray-900 md:text-4xl">
            How to use this calculator
          </h2>
          <ol className="mt-8 space-y-4 text-sm leading-relaxed text-sm-gray-700 md:text-base">
            {[
              "Pick your city and housing type first — rent drives most variance.",
              "Use program level as a rough tuition anchor, then replace with your offer letter when you have it.",
              "Treat the IRCC GIC line as regulatory proof-of-funds, not your lifestyle budget.",
              "Add a buffer for FX, wire fees, and intake-season spikes before you pay deposits.",
            ].map((s, idx) => (
              <li key={s} className="flex gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sm-teal text-xs font-bold text-white">
                  {idx + 1}
                </span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="next-steps" className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="rounded-3xl border border-sm-orange/30 bg-sm-orange/5 p-8 md:p-10">
            <div className="border-l-4 border-sm-orange pl-3">
              <p className="text-xs font-bold uppercase tracking-widest text-sm-teal-dark">NEXT</p>
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-sm-gray-900 md:text-4xl">
              Turn estimates into a real plan
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-sm-gray-700 md:text-base">
              Use the guide tables and the GIC rules to replace assumptions with receipts — then build your admissions and
              permit timeline.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                className="inline-flex rounded-full bg-sm-orange px-6 py-3 text-sm font-semibold text-white transition hover:bg-sm-orange-dark"
                href={SITE.contactFormUrl}
              >
                Book a free consultation
              </Link>
              <Link
                className="inline-flex rounded-full border border-sm-gray-200 bg-white px-6 py-3 text-sm font-semibold text-sm-gray-900 transition hover:bg-sm-off-white"
                href="/international/cost"
              >
                Read the cost guide
              </Link>
              <Link
                className="inline-flex rounded-full border border-sm-gray-200 bg-white px-6 py-3 text-sm font-semibold text-sm-gray-900 transition hover:bg-sm-off-white"
                href="/international/gic"
              >
                GIC guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBlock />
    </main>
  );
}
