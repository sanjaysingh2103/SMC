"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu } from "lucide-react";
import { SITE } from "@/lib/site";
import { isExternalBrowserHref } from "@/lib/navigation";
import { TOP_SOURCE_COUNTRIES } from "@/lib/data/source-countries";
import { PROVINCES } from "@/lib/data/provinces";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const intlColumn1 = [
  { href: "/international/study-in-canada", label: "Study in Canada" },
  { href: "/international/programs", label: "Program Search", badge: "1,500+ programs" },
  { href: "/international/colleges", label: "Canadian Colleges" },
  { href: "/international/universities", label: "Canadian Universities" },
  { href: "/international/graduate-studies", label: "Graduate Studies" },
  { href: "/international/scholarships", label: "Scholarships" },
];

const intlColumn2 = [
  { href: "/international/admissions", label: "Admissions Support" },
  { href: "/international/sop", label: "SOP Coaching" },
  { href: "/international/lor", label: "Letters of Recommendation" },
  { href: "/international/english-tests", label: "English Tests" },
  { href: "/international/gic", label: "GIC & Proof of Funds" },
  { href: "/international/cost", label: "Cost of Studying" },
  { href: "/international/visa", label: "Study Permit / Visa", badge: "via RCIC" },
];

const intlColumn3 = [
  { href: "/international/pre-departure", label: "Pre-Departure" },
  { href: "/international/post-arrival", label: "Post-Arrival Support" },
  { href: "/international/accommodation", label: "Accommodation" },
  { href: "/international/banking", label: "Banking" },
  { href: "/international/working-in-canada", label: "Working in Canada" },
];

const intlColumn4 = [
  { href: "/international/pgwp", label: "PGWP Work Permit" },
  { href: "/international/pathways-to-pr", label: "Pathways to PR" },
  { href: "/international/financial-planning", label: "Financial Planning" },
  { href: "/international/events", label: "Events & Fairs" },
  { href: "/tools/gic-calculator", label: "GIC Calculator" },
  { href: "/tools/cost-calculator", label: "Cost Calculator" },
];

function MegaLink({
  href,
  label,
  badge,
}: {
  href: string;
  label: string;
  badge?: string;
}) {
  return (
    <NavigationMenuLink asChild>
      <Link
        href={href}
        className="group block rounded-lg px-2 py-2 text-sm text-sm-gray-800 hover:bg-sm-gray-50"
      >
        <span className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1">
          <span className="min-w-0 flex-1 font-medium leading-snug">{label}</span>
          {badge ? (
            <span className="shrink-0 rounded-full bg-sm-teal-light px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-sm-teal-dark">
              {badge}
            </span>
          ) : null}
        </span>
      </Link>
    </NavigationMenuLink>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar sticky top-0 z-50 flex h-16 items-center">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3 rounded-lg px-1 py-0.5 transition-colors hover:bg-black/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sm-teal/40 focus-visible:ring-offset-2"
        >
          <Image
            src="/logo.png"
            alt="Study Master Canada"
            width={320}
            height={64}
            priority
            className="h-12 w-auto origin-left scale-[1.32] object-contain mix-blend-multiply"
          />
        </Link>

        <div className="relative hidden min-w-0 flex-1 justify-center lg:flex">
          <div className="relative w-full min-w-0 max-w-none">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center gap-1">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/"
                      className={cn(
                        "nav-link inline-flex h-10 items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-sm-gray-100",
                      )}
                    >
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>International</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-full min-w-0 max-w-[min(100vw-2rem,84rem)] rounded-xl bg-white p-4 sm:p-5">
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="min-w-0">
                          <p className="text-xs font-semibold uppercase tracking-widest text-sm-gray-500">
                            Find your program
                          </p>
                          <div className="mt-3 grid gap-1">
                            {intlColumn1.map((item) => (
                              <MegaLink key={item.href} {...item} />
                            ))}
                          </div>
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold uppercase tracking-widest text-sm-gray-500">
                            Apply & prepare
                          </p>
                          <div className="mt-3 grid gap-1">
                            {intlColumn2.map((item) => (
                              <MegaLink key={item.href} {...item} />
                            ))}
                          </div>
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold uppercase tracking-widest text-sm-gray-500">
                            Arrive & thrive
                          </p>
                          <div className="mt-3 grid gap-1">
                            {intlColumn3.map((item) => (
                              <MegaLink key={item.href} {...item} />
                            ))}
                          </div>
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold uppercase tracking-widest text-sm-gray-500">
                            After graduation
                          </p>
                          <div className="mt-3 grid gap-1">
                            {intlColumn4.map((item) => (
                              <MegaLink key={item.href} {...item} />
                            ))}
                          </div>
                        </div>
                      </div>

                      <details className="mt-5 rounded-xl border border-sm-gray-100 bg-sm-off-white p-4">
                        <summary className="cursor-pointer list-none text-xs font-semibold uppercase tracking-widest text-sm-gray-600">
                          By country & province
                        </summary>
                        <div className="mt-4 grid gap-4 lg:grid-cols-2">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-widest text-sm-gray-600">
                              By country
                            </p>
                            <div className="mt-3 flex flex-wrap gap-2">
                              {TOP_SOURCE_COUNTRIES.map((c) => (
                                <Link
                                  key={c.slug}
                                  href={`/international/from/${c.slug}`}
                                  className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-sm-gray-800 shadow-sm ring-1 ring-sm-gray-100 hover:ring-sm-teal/30"
                                >
                                  <span className={cn("fi", `fi-${c.code}`, "fis text-sm")} aria-hidden />
                                  {c.name}
                                </Link>
                              ))}
                            </div>
                          </div>

                          <div>
                            <p className="text-xs font-semibold uppercase tracking-widest text-sm-gray-600">
                              By province
                            </p>
                            <div className="mt-3 flex flex-wrap gap-2">
                              {PROVINCES.map((p) => (
                                <Link
                                  key={p.slug}
                                  href={`/international/provinces/${p.slug}`}
                                  className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-sm-gray-800 shadow-sm ring-1 ring-sm-gray-100 hover:ring-sm-teal/30"
                                >
                                  {p.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </details>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Canadian Students</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-full min-w-0 max-w-[min(100vw-2rem,40rem)] rounded-xl bg-white p-5 sm:p-6">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-widest text-sm-gray-500">
                            OSAP (Ontario)
                          </p>
                          <div className="mt-3 grid gap-1">
                            <MegaLink href="/domestic/osap" label="OSAP Overview" badge="Free help" />
                          </div>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-widest text-sm-gray-500">
                            StudentAid BC
                          </p>
                          <div className="mt-3 grid gap-1">
                            <MegaLink href="/domestic/bc-aid" label="StudentAid BC Overview" badge="Free help" />
                          </div>
                        </div>
                      </div>
                      <div className="mt-5 border-t border-sm-gray-100 pt-4">
                        <a
                          href={SITE.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-sm-orange px-5 py-2.5 text-sm font-bold text-white shadow transition hover:bg-sm-orange-dark"
                        >
                          WhatsApp for Free OSAP / BC Aid Help →
                        </a>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/about"
                      className={cn(
                        "nav-link inline-flex h-10 items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-sm-gray-100",
                      )}
                    >
                      About
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/why-canada"
                      className={cn(
                        "nav-link inline-flex h-10 items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-sm-gray-100",
                      )}
                    >
                      Why Canada
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>

              <NavigationMenuViewport />
            </NavigationMenu>
          </div>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild>
            {isExternalBrowserHref(SITE.contactFormUrl) ? (
              <a href={SITE.contactFormUrl} target="_blank" rel="noopener noreferrer">
                Book Free Call
              </a>
            ) : (
              <Link href={SITE.contactFormUrl}>Book Free Call</Link>
            )}
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100vw-2rem,24rem)] overflow-y-auto">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>

              <Accordion type="single" collapsible className="mt-4">
                <AccordionItem value="intl">
                  <AccordionTrigger>International</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid gap-3 pb-2">
                      <Accordion type="single" collapsible>
                        <AccordionItem value="c1">
                          <AccordionTrigger className="py-2 text-sm">
                            Find your program
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="grid gap-2">
                              {intlColumn1.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className="text-sm text-sm-teal-dark hover:underline"
                                  onClick={() => setOpen(false)}
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="c2">
                          <AccordionTrigger className="py-2 text-sm">
                            Apply & prepare
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="grid gap-2">
                              {intlColumn2.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className="text-sm text-sm-teal-dark hover:underline"
                                  onClick={() => setOpen(false)}
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="c3">
                          <AccordionTrigger className="py-2 text-sm">
                            Arrive & thrive
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="grid gap-2">
                              {intlColumn3.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className="text-sm text-sm-teal-dark hover:underline"
                                  onClick={() => setOpen(false)}
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="c4">
                          <AccordionTrigger className="py-2 text-sm">
                            After graduation
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="grid gap-2">
                              {intlColumn4.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className="text-sm text-sm-teal-dark hover:underline"
                                  onClick={() => setOpen(false)}
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="domestic">
                  <AccordionTrigger>Canadian Students</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid gap-2 pb-2">
                      <Link
                        href="/domestic/osap"
                        className="text-sm font-semibold text-sm-gray-900 hover:underline"
                        onClick={() => setOpen(false)}
                      >
                        OSAP Overview
                      </Link>
                      <Link
                        href="/domestic/bc-aid"
                        className="text-sm font-semibold text-sm-gray-900 hover:underline"
                        onClick={() => setOpen(false)}
                      >
                        StudentAid BC Overview
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="mt-4 grid gap-2 border-t border-sm-gray-100 pt-4">
                <Link
                  href="/"
                  className="nav-link text-sm font-semibold"
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="nav-link text-sm font-semibold"
                  onClick={() => setOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/why-canada"
                  className="nav-link text-sm font-semibold"
                  onClick={() => setOpen(false)}
                >
                  Why Canada
                </Link>
                <Link
                  href="/contact"
                  className="nav-link text-sm font-semibold"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </Link>
              </div>

              <Button asChild className="mt-6 w-full">
                {isExternalBrowserHref(SITE.contactFormUrl) ? (
                  <a
                    href={SITE.contactFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                  >
                    Book Free Call
                  </a>
                ) : (
                  <Link href={SITE.contactFormUrl} onClick={() => setOpen(false)}>
                    Book Free Call
                  </Link>
                )}
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
