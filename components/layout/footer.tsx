import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";
import { isExternalBrowserHref } from "@/lib/navigation";
import { Button } from "@/components/ui/button";

const intlLinks = [
  { href: "/international", label: "International hub" },
  { href: "/international/programs", label: "Programs" },
  { href: "/international/admissions", label: "Admissions" },
  { href: "/international/visa", label: "Study permit" },
  { href: "/international/gic", label: "GIC & funds" },
];

const domesticLinks = [
  { href: "/domestic", label: "Canadian students" },
  { href: "/domestic/osap", label: "OSAP" },
  { href: "/domestic/bc-aid", label: "StudentAid BC" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="footer mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 text-lg font-bold tracking-tight text-white hover:opacity-90"
            >
              <Image
                src="/logo.png"
                alt="Study Master Canada"
                width={180}
                height={44}
                className="h-11 w-auto rounded-md bg-white p-1 object-contain"
              />
            </Link>
            <p className="footer-muted mt-2 text-sm">
              {SITE.market.short} · {SITE.hours}
            </p>
            <div className="mt-5 flex flex-col gap-1.5 text-sm">
              <a
                className="footer-link w-fit hover:underline"
                href={`mailto:${SITE.email}`}
              >
                {SITE.email}
              </a>
              <a
                className="footer-link w-fit hover:underline"
                href={SITE.phoneHref}
              >
                {SITE.phoneDisplay}
              </a>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {isExternalBrowserHref(SITE.contactFormUrl) ? (
                <a
                  href={SITE.contactFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-red"
                >
                  Book free consultation
                </a>
              ) : (
                <Link href={SITE.contactFormUrl} className="btn-red">
                  Book free consultation
                </Link>
              )}
              <Button
                asChild
                size="sm"
                variant="outline"
                className="rounded-full border-white/25 bg-transparent text-white hover:bg-white/10"
              >
                <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8 lg:gap-8">
            <div>
              <p className="footer-col-head">
                International
              </p>
              <ul className="mt-4 space-y-2.5">
                {intlLinks.map((l) => (
                  <li key={l.href}>
                    <Link className="footer-link hover:underline" href={l.href}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="footer-col-head">
                Canadian aid
              </p>
              <ul className="mt-4 space-y-2.5">
                {domesticLinks.map((l) => (
                  <li key={l.href}>
                    <Link className="footer-link hover:underline" href={l.href}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="footer-col-head">
                Company
              </p>
              <ul className="mt-4 space-y-2.5">
                {companyLinks.map((l) => (
                  <li key={l.href}>
                    <Link className="footer-link hover:underline" href={l.href}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-6">
          <div className="footer-muted-dim flex flex-col gap-4 text-xs leading-relaxed md:flex-row md:items-start md:justify-between md:gap-8">
            <p className="footer-muted shrink-0">
              © {new Date().getFullYear()} {SITE.name}. All rights reserved.
            </p>
            <p className="max-w-2xl md:text-right">
              Regulated immigration services are provided only by{" "}
              <span className="footer-muted font-medium">{SITE.rcicPartner.name}</span>
              . {SITE.shortName} does not provide regulated immigration advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
