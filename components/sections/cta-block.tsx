import Link from "next/link";
import { SITE } from "@/lib/site";

type CtaBlockProps = {
  eyebrow?: string;
  heading?: string;
  body?: string;
  showSecondary?: boolean;
  primaryHref?: string;
  primaryLabel?: string;
};

export function CtaBlock({
  eyebrow = "LET'S TALK",
  heading = "Ready to start your Canadian education?",
  body = "Free 20-minute consultation. No obligations. Real advice from real counsellors.",
  showSecondary = true,
  primaryHref,
  primaryLabel,
}: CtaBlockProps) {
  const resolvedHref = primaryHref ?? SITE.contactFormUrl;
  const resolvedLabel = primaryLabel ?? "Book Free Consultation";
  const isExternal = resolvedHref.startsWith("http");
  return (
    <section
      className="relative overflow-hidden py-20 text-white"
      style={{
        background:
          "linear-gradient(135deg, #1E5AA5 0%, #163F78 60%, #122850 100%)",
      }}
    >
      <div
        className="absolute top-0 right-0 h-72 w-72 rounded-full pointer-events-none opacity-10"
        style={{
          background: "radial-gradient(circle, #E52D1E 0%, transparent 70%)",
          transform: "translate(20%, -20%)",
        }}
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-0 h-48 w-48 rounded-full pointer-events-none opacity-10"
        style={{
          background: "radial-gradient(circle, #5A8730 0%, transparent 70%)",
          transform: "translate(-20%, 20%)",
        }}
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="section-label mb-3 text-[#FFB3AC]">
          {eyebrow}
        </p>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
          {heading}
        </h2>
        <p className="mt-4 text-lg text-[#A8CAFE]">{body}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={resolvedHref}
            className="btn-red"
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
          >
            {resolvedLabel}
          </a>
          {showSecondary ? (
            <>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/15 px-6 py-3 font-semibold transition-all hover:bg-white/25"
              >
                WhatsApp Us
              </a>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold transition-all hover:bg-white/20"
              >
                Call {SITE.phoneDisplay}
              </a>
            </>
          ) : null}
        </div>
        <p className="mt-8 text-sm text-[#7BA8D8]">
          {SITE.hours} · {SITE.market.short} · {SITE.office.full}
        </p>
        <p className="mt-2 text-sm text-[#7BA8D8]">
          Prefer email?{" "}
          <Link className="text-white underline hover:text-[#A8CAFE]" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </Link>
        </p>
      </div>
    </section>
  );
}
