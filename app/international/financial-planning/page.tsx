import Link from "next/link";
import { buildMetadata } from "@/lib/metadata-helpers";
import { SITE } from "@/lib/site";
import { UNSPLASH } from "@/lib/media/unsplash";
import { InternationalGuideBanner } from "@/components/sections/international-guide-banner";
import { intlBannerFinancialPlanning } from "@/lib/data/intl-guide-banner-presets";
import { TrustBar } from "@/components/sections/trust-bar";
import { InPageNav } from "@/components/sections/in-page-nav";
import { CtaBlock } from "@/components/sections/cta-block";
import { InternationalSectionTitle } from "@/components/sections/international-section-title";

export const metadata = buildMetadata({
  title: "Financial Planning for International Students in Canada",
  description:
    "Budget framework, newcomer bank accounts, tuition payment rails, credit cards, taxes, and remittances. Practical Toronto & GTA guidance from Study Master Canada.",
  path: "/international/financial-planning",
});

export default function FinancialPlanningPage() {
  return (
    <main>
      <InternationalGuideBanner
        eyebrow="FINANCE"
        title="Financial planning that survives your first winter."
        lead="Tuition + rent + buffer. Three numbers your family should agree on before anyone signs a deposit."
        body="Layer the CAD $22,895 GIC regulatory line (Sept 2025), tuition invoices, and a 10% contingency — then stress-test against your real city’s rent band on our cost page."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Study in Canada", href: "/international" },
          { label: "Financial planning" },
        ]}
        primaryCta={{
          label: "Book Free 20-Min Call",
          href: SITE.contactFormUrl,
        }}
        secondaryCta={{ label: "GIC guide", href: "/international/gic" }}
        stats={intlBannerFinancialPlanning}
        heroImage={UNSPLASH.financeDesk}
        asideTitle="Finance · snapshot"
      />

      <TrustBar />

      <InPageNav
        items={[
          { label: "Budget", href: "#budget" },
          { label: "Banking", href: "#banking" },
          { label: "Tuition rails", href: "#tuition" },
          { label: "Credit", href: "#credit" },
          { label: "Tax", href: "#tax" },
          { label: "Remit", href: "#remit" },
        ]}
        cta={{ label: "Book call", href: SITE.contactFormUrl }}
      />

      <section
        id="budget"
        className="scroll-mt-28 border-t border-sm-gray-200/80 bg-sm-off-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 text-sm leading-relaxed text-sm-gray-700 md:text-base">
          <InternationalSectionTitle
            label="SPINE"
            title="Budget framework: tuition + living + buffer"
            description={
              <p className="text-sm-gray-700">
                Start with institution invoices — not brochure estimates. Add rent using neighbourhood-realistic numbers
                (see our{" "}
                <Link href="/international/cost" className="font-semibold text-sm-teal-dark underline">
                  cost page
                </Link>
                ). Add CAD $22,895 GIC compliance if that is your pathway, then add a 10% contingency for currency
                swings and surprise fees.
              </p>
            }
          />
        </div>
      </section>

      <section id="banking" className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10 text-sm leading-relaxed text-sm-gray-700 md:text-base">
          <InternationalSectionTitle
            label="ACCOUNTS"
            title="Bank accounts for newcomers"
            description={
              <p className="text-sm-gray-700">
                Big Five banks (RBC, TD, Scotiabank, BMO, CIBC) offer newcomer packages bundling chequing credits, fee
                waivers, and credit card referrals. Digital banks like Simplii appeal to students comfortable with online
                onboarding. Book appointments in your first week — walk-ins during orientation week overflow fast.
              </p>
            }
          />
        </div>
      </section>

      <section
        id="tuition"
        className="scroll-mt-28 border-t border-sm-gray-200/80 bg-sm-off-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 text-sm leading-relaxed text-sm-gray-700 md:text-base">
          <InternationalSectionTitle
            label="TUITION"
            title="Tuition payment services"
            description={
              <p className="text-sm-gray-700">
                Flywire and Western Union for Students integrate with many registrar offices. Always screenshot confirmation
                numbers and verify posting in your student portal — do not assume wires self-reconcile during peak
                September traffic.
              </p>
            }
          />
        </div>
      </section>

      <section id="credit" className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10 text-sm leading-relaxed text-sm-gray-700 md:text-base">
          <InternationalSectionTitle
            label="CARDS"
            title="Student credit cards"
            description={
              <p className="text-sm-gray-700">
                Secured cards help when you have no Canadian credit history; unsecured student cards appear once banking
                relationships stabilize. Pay statements in full — utilization affects future rental applications.
              </p>
            }
          />
        </div>
      </section>

      <section
        id="tax"
        className="scroll-mt-28 border-t border-sm-gray-200/80 bg-sm-off-white py-11 md:py-14"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 text-sm leading-relaxed text-sm-gray-700 md:text-base">
          <InternationalSectionTitle
            label="TAX"
            title="Tax basics"
            description={
              <p className="text-sm-gray-700">
                Residents file a T1 return annually; tuition credits may exist depending on status and institution
                reporting. RRSP contributions are uncommon for brand-new students with no earned income — focus on
                compliance before optimization.
              </p>
            }
          />
        </div>
      </section>

      <section id="remit" className="scroll-mt-28 border-t border-sm-gray-200 bg-white py-11 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10 text-sm leading-relaxed text-sm-gray-700 md:text-base">
          <InternationalSectionTitle
            label="REMIT"
            title="Sending money home"
            description={
              <p className="text-sm-gray-700">
                Compare specialist remittance providers versus bank wires on total delivered currency, not headline FX
                rates. Schedule transfers away from tuition due weeks to avoid cash crunches.
              </p>
            }
          />
        </div>
      </section>

      <CtaBlock />
    </main>
  );
}
