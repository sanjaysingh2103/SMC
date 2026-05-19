import { buildMetadata } from "@/lib/metadata-helpers";
import { SITE } from "@/lib/site";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { CtaBlock } from "@/components/sections/cta-block";

export const metadata = buildMetadata({
  title: "Privacy Policy (Draft Template)",
  description:
    "Draft Canadian privacy policy for Study Master Canada covering PIPEDA-style rights, Monday.com intake forms, and contact data. Lawyer review required before production.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main>
      <Hero
        category="default"
        eyebrow="LEGAL"
        title="Privacy Policy"
        subtitle="Transparency about how we collect, use, and safeguard personal information."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy" },
        ]}
      />

      <TrustBar />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6 text-sm leading-relaxed text-sm-gray-700 md:text-base">
          <p className="rounded-2xl border border-sm-orange/30 bg-sm-orange/5 p-4 text-xs text-sm-gray-800">
            {/* TODO: This is a template draft. Have a Canadian privacy lawyer review before publishing to production. */}
            <span className="font-semibold">Notice:</span> This template draft must be reviewed by qualified Canadian privacy counsel before production launch.
          </p>

          <h2 className="text-2xl font-extrabold text-sm-gray-900">Introduction</h2>
          <p>
            {SITE.name} (“SMC”, “we”, “us”) respects your privacy. This policy describes how we collect, use, disclose, and safeguard personal information in accordance with Canada’s Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable provincial laws.
          </p>

          <h2 className="text-2xl font-extrabold text-sm-gray-900">Information we collect</h2>
          <p>
            We collect contact details, academic history, immigration-related documents you voluntarily provide for counselling, payment information where applicable, and technical data such as IP address or device type when you browse our website.
          </p>

          <h2 className="text-2xl font-extrabold text-sm-gray-900">How we use information</h2>
          <p>
            We use information to deliver education consulting, coordinate referrals to our RCIC partner, improve our website, comply with legal obligations, and communicate about services you requested.
          </p>

          <h2 className="text-2xl font-extrabold text-sm-gray-900">Cookies</h2>
          <p>
            We may use essential cookies to operate the site and analytics cookies where enabled. You can control cookies through your browser settings.
          </p>

          <h2 className="text-2xl font-extrabold text-sm-gray-900">Third-party services</h2>
          <p>
            Our secure intake form is hosted on Monday.com ({SITE.contactFormUrl}). Data submitted there is subject to Monday.com’s privacy policy and security practices. Review their documentation before submitting sensitive documents.
          </p>

          <h2 className="text-2xl font-extrabold text-sm-gray-900">Your rights</h2>
          <p>
            You may request access to or correction of your personal information, subject to legal exceptions. Withdrawal of consent may limit our ability to continue services that require contact information.
          </p>

          <h2 className="text-2xl font-extrabold text-sm-gray-900">Privacy contact</h2>
          <p>
            Questions? Email{" "}
            <a className="text-sm-teal-dark underline" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
            .
          </p>

          <p className="text-xs text-sm-gray-500">Last updated: April 19, 2026</p>
        </div>
      </section>

      <CtaBlock
        eyebrow="QUESTIONS?"
        heading="Need help or want to book a call?"
        body="If you have privacy questions or want to start with a free consultation, our team is here."
      />
    </main>
  );
}
