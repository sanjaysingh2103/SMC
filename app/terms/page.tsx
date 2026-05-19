import { buildMetadata } from "@/lib/metadata-helpers";
import { SITE } from "@/lib/site";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { CtaBlock } from "@/components/sections/cta-block";

export const metadata = buildMetadata({
  title: "Terms of Service (Draft Template)",
  description:
    "Draft terms for Study Master Canada: services, fees, RCIC scope separation, disclaimers, and liability. Lawyer review required before production.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main>
      <Hero
        category="default"
        eyebrow="LEGAL"
        title="Terms of Service"
        subtitle="Please read these terms carefully before using our services or website."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms" },
        ]}
      />

      <TrustBar />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6 text-sm leading-relaxed text-sm-gray-700 md:text-base">
          <p className="rounded-2xl border border-sm-orange/30 bg-sm-orange/5 p-4 text-xs text-sm-gray-800">
            {/* TODO: This is a template draft. Have a Canadian lawyer review before publishing to production. */}
            <span className="font-semibold">Notice:</span> This template draft must be reviewed by qualified counsel before production launch.
          </p>

          <h2 className="text-2xl font-extrabold text-sm-gray-900">Acceptance</h2>
          <p>
            By accessing {SITE.url}, visiting our office, or using our services, you agree to these terms. If you disagree, do not use our services.
          </p>

          <h2 className="text-2xl font-extrabold text-sm-gray-900">Services description</h2>
          <p>
            {SITE.name} provides education consulting, admissions coaching, and related non-regulated support. Regulated Canadian immigration advice and representation is provided exclusively by Visa Master Canada when you separately engage them as a licensed RCIC.
          </p>

          <h2 className="text-2xl font-extrabold text-sm-gray-900">Service fees</h2>
          <p>
            Domestic student aid support described on this website may be offered without charge depending on campaign rules. International recruitment services may involve staged professional fees-your agreement will specify amounts before work begins.
          </p>

          <h2 className="text-2xl font-extrabold text-sm-gray-900">Disclaimers</h2>
          <p>
            Studying in Canada does not guarantee admission, visa issuance, employment, or permanent residency. Government policies change. Information on this site is for general guidance and may become outdated.
          </p>

          <h2 className="text-2xl font-extrabold text-sm-gray-900">RCIC scope separation</h2>
          <p>
            {SITE.name} does not provide regulated immigration advice. Any immigration strategy, form preparation, or representation before IRCC is handled by Visa Master Canada when you retain them under a separate engagement governed by their retainer agreement.
          </p>

          <h2 className="text-2xl font-extrabold text-sm-gray-900">Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, {SITE.name} is not liable for indirect, incidental, or consequential damages arising from reliance on website content or counselling conversations. Some jurisdictions do not allow certain limitations; in those cases, limits apply to the maximum extent allowed.
          </p>

          <h2 className="text-2xl font-extrabold text-sm-gray-900">Contact</h2>
          <p>
            {SITE.office.full} ·{" "}
            <a className="text-sm-teal-dark underline" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
          </p>

          <p className="text-xs text-sm-gray-500">Last updated: April 19, 2026</p>
        </div>
      </section>

      <CtaBlock
        eyebrow="LET'S TALK"
        heading="Have a question before you start?"
        body="Book a free consultation and we’ll explain scope clearly—education counselling vs regulated immigration via our licensed RCIC partner."
      />
    </main>
  );
}
