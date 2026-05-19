import { buildMetadata } from "@/lib/metadata-helpers";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { UNSPLASH } from "@/lib/media/unsplash";
import { InternationalGuideBanner } from "@/components/sections/international-guide-banner";
import { TrustBar } from "@/components/sections/trust-bar";
import { InPageNav } from "@/components/sections/in-page-nav";
import { CtaBlock } from "@/components/sections/cta-block";
import { GicCalculatorForm } from "@/components/tools/gic-calculator-form";

export const metadata = buildMetadata({
  title: "GIC Calculator for Canada Study Permits",
  description:
    "Estimate your total GIC transfer including the CAD $22,895 IRCC minimum (Sept 2025), bank fees, and a 10% buffer. Toronto & GTA Study Master Canada.",
  path: "/tools/gic-calculator",
});

export default function GicCalculatorPage() {
  return (
    <main>
      <InternationalGuideBanner
        eyebrow="TOOLS"
        title="GIC transfer calculator"
        lead="Model the CAD $22,895 minimum, typical bank fees, and a prudent buffer before you wire funds."
        body="This tool estimates a safe transfer total for planning. Always follow your bank’s official wire PDF (fields and reference codes matter), and verify the current IRCC minimum for your intake."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Tools", href: "/tools" },
          { label: "GIC calculator" },
        ]}
        primaryCta={{ label: "Book Free 20-Min Call", href: SITE.contactFormUrl }}
        secondaryCta={{ label: "Read the GIC guide", href: "/international/gic" }}
        heroImage={UNSPLASH.financeDesk}
        asideTitle="Calculator · snapshot"
        stats={[
          { value: "$22,895", label: "IRCC GIC floor (Sept 2025)" },
          { value: "~$200", label: "Typical setup fee" },
          { value: "~10%", label: "Buffer option" },
          { value: "10–12 mo", label: "Common release pacing" },
        ]}
        metaItems={[
          "Transfer planning · not legal advice",
          "Wire fields from bank PDF",
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
          <GicCalculatorForm />
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
              "Verify the current IRCC GIC minimum (policy can change).",
              "Pick your bank, then decide whether to include the typical setup fee and a buffer.",
              "Use the result as a planning total — then follow the bank’s wire instructions exactly.",
              "Pair GIC planning with your tuition pathway and broader proof-of-funds story for the permit file.",
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
              Connect GIC to the rest of your plan
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-sm-gray-700 md:text-base">
              A correct GIC amount helps, but officers still evaluate tuition payment evidence, liquid history, and study
              intent. Use the guide pages to avoid “paper-perfect but story-thin” files.
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
                href="/international/gic"
              >
                Read the GIC guide
              </Link>
              <Link
                className="inline-flex rounded-full border border-sm-gray-200 bg-white px-6 py-3 text-sm font-semibold text-sm-gray-900 transition hover:bg-sm-off-white"
                href="/international/visa"
              >
                Study permit guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBlock />
    </main>
  );
}
