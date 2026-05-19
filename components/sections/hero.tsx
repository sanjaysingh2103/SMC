import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { UNSPLASH } from "@/lib/media/unsplash";

export type HeroCategory = "international" | "domestic" | "default";

export type HeroCta = {
  label: string;
  href: string;
  external?: boolean;
  variant?: "default" | "secondary" | "outline";
};

export type HeroStat = { label: string; value: string };

type Breadcrumb = { label: string; href?: string };

type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
  heroImage?: { src: string; alt: string };
  /** Set true on above-the-fold pages for faster LCP (e.g. About, key landings). */
  heroImagePriority?: boolean;
  breadcrumbs?: Breadcrumb[];
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  sidebarStats?: { heading?: string; stats: HeroStat[] };
  /** Optional title above the right-hand panel (defaults by category). */
  sidebarTitle?: string;
  /** Short bullet snippets on the right; merges with defaults unless `snippetsReplace` is true. */
  sidebarSnippets?: string[];
  /** When true, only `sidebarSnippets` are shown (no default merge). */
  snippetsReplace?: boolean;
  /** Hide the right panel entirely (rare). */
  hideSidebar?: boolean;
  category?: HeroCategory;
  /** Tighter layout for inner pages: less vertical padding, shorter image, full-width intro copy. */
  compact?: boolean;
  /** Image + sidebar stack as one card (less wasted gap between photo and facts). */
  unifiedAside?: boolean;
  /** 50/50 columns on large screens instead of a narrower aside. */
  balancedColumns?: boolean;
  /** Keep primary/secondary CTAs in the left column on desktop (no duplicate “Next step” in aside). */
  pinCtasToMain?: boolean;
  /** Remove max-width cap on subtitle / trust line (wide intros). */
  introFullWidth?: boolean;
  /** Less vertical padding above the fold. */
  snug?: boolean;
  trustHint?: string;
  children?: ReactNode;
};

function hashStringToIndex(input: string, modulo: number) {
  let h = 0;
  for (let i = 0; i < input.length; i++) {
    h = (h * 31 + input.charCodeAt(i)) >>> 0;
  }
  return modulo > 0 ? h % modulo : 0;
}

const INTL_SNIPPETS_DEFAULT = [
  "1,500+ programs · human shortlists",
  "Licensed RCIC · Visa Master Canada",
  "Walk-in GTA office · Mon–Fri 9:30–6:30",
  "2,000+ students coached across int’l & OSAP",
];

const INTL_SNIPPETS_COMPACT = [
  "Same-building RCIC · Visa Master Canada",
  "Document-first · no offshore script farm",
];

const DOM_SNIPPETS_DEFAULT = [
  "2,000+ Ontario OSAP files coached",
  "Free counselling · same GTA team as int’l",
  "StudentAid BC workflow mirroring OSAP rigor",
];

const LIGHT_SNIPPETS_DEFAULT = [
  `${SITE.market.short} · ${SITE.office.city}, ON office`,
  `${SITE.hours}`,
  "Phone, WhatsApp, email & walk-ins welcome",
];

function mergeSnippets(
  category: HeroCategory,
  custom: string[] | undefined,
  replace: boolean | undefined,
  hasStats: boolean,
): string[] {
  if (replace && custom?.length) return custom;
  if (replace && !custom?.length) return [];

  const defaults =
    category === "international"
      ? hasStats
        ? INTL_SNIPPETS_COMPACT
        : INTL_SNIPPETS_DEFAULT
      : category === "domestic"
        ? DOM_SNIPPETS_DEFAULT
        : LIGHT_SNIPPETS_DEFAULT;

  if (!custom?.length) return defaults;
  return [...custom, ...defaults.filter((d) => !custom.includes(d))].slice(
    0,
    hasStats ? 4 : 5,
  );
}

function defaultSidebarTitle(category: HeroCategory): string {
  if (category === "international") return "Why families pick SMC";
  if (category === "domestic") return "Canadian students";
  return "Quick facts";
}

function CtaPair({
  primaryCta,
  secondaryCta,
  className,
}: {
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  className?: string;
}) {
  if (!primaryCta && !secondaryCta) return null;

  const primaryExternal = primaryCta ? /^https?:\/\//.test(primaryCta.href) : false;
  const secondaryExternal = secondaryCta ? /^https?:\/\//.test(secondaryCta.href) : false;

  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:flex-col", className)}>
      {primaryCta &&
        (primaryExternal ? (
          <Button asChild variant={primaryCta.variant ?? "default"} size="lg" className="w-full sm:w-auto lg:w-full">
            <a href={primaryCta.href} target="_blank" rel="noopener noreferrer">
              {primaryCta.label}
            </a>
          </Button>
        ) : (
          <Button asChild variant={primaryCta.variant ?? "default"} size="lg" className="w-full sm:w-auto lg:w-full">
            <Link href={primaryCta.href}>{primaryCta.label}</Link>
          </Button>
        ))}
      {secondaryCta &&
        (secondaryExternal ? (
          <Button
            asChild
            variant={secondaryCta.variant ?? "outline"}
            size="lg"
            className={cn("w-full sm:w-auto lg:w-full")}
          >
            <a href={secondaryCta.href} target="_blank" rel="noopener noreferrer">
              {secondaryCta.label}
            </a>
          </Button>
        ) : (
          <Button
            asChild
            variant={secondaryCta.variant ?? "outline"}
            size="lg"
            className={cn("w-full sm:w-auto lg:w-full")}
          >
            <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
          </Button>
        ))}
    </div>
  );
}

export function Hero({
  eyebrow,
  title,
  subtitle,
  description,
  heroImage,
  heroImagePriority = false,
  breadcrumbs,
  primaryCta,
  secondaryCta,
  sidebarStats,
  sidebarTitle,
  sidebarSnippets,
  snippetsReplace,
  hideSidebar,
  category = "default",
  compact = false,
  unifiedAside = false,
  balancedColumns = false,
  pinCtasToMain = false,
  introFullWidth = false,
  snug = false,
  trustHint,
  children,
}: HeroProps) {
  // SMC Vibrant Theme: inner page heroes are always light.
  const isLight = true;
  const hasStats = Boolean(sidebarStats?.stats.length);

  const lightAsideEligible =
    isLight &&
    (hasStats ||
      (sidebarSnippets != null && sidebarSnippets.length > 0) ||
      Boolean(primaryCta || secondaryCta));

  const showAside =
    !hideSidebar &&
    (category === "international" ||
      category === "domestic" ||
      hasStats ||
      lightAsideEligible);

  const snippetList = showAside
    ? mergeSnippets(category, sidebarSnippets, snippetsReplace, hasStats)
    : [];

  const panelHeader =
    sidebarTitle ??
    (hasStats && sidebarStats?.heading ? sidebarStats.heading : undefined) ??
    (showAside ? defaultSidebarTitle(category) : undefined);

  const isQuickFactsPanel =
    (panelHeader ?? "").trim().toLowerCase() === "quick facts";

  const resolvedHeroImage =
    heroImage ??
    (() => {
      const pool =
        category === "international"
          ? [
              UNSPLASH.studentsGroup,
              UNSPLASH.studentsCampusWalk,
              UNSPLASH.studentLaptop,
              UNSPLASH.campusModern,
            ]
          : category === "domestic"
            ? [UNSPLASH.counselling, UNSPLASH.counsellingDesk, UNSPLASH.libraryStudy, UNSPLASH.graduation]
            : [UNSPLASH.toronto, UNSPLASH.vancouver, UNSPLASH.ottawa, UNSPLASH.cityStreetcar];

      return pool[hashStringToIndex(title, pool.length)];
    })();

  const ctasExist = Boolean(primaryCta || secondaryCta);
  /** Desktop: tuck CTAs under “Next step” in the aside unless pinned to main. */
  const asideShowsCtasDesktop = showAside && ctasExist && !pinCtasToMain;
  const showAsidePanel = showAside && (snippetList.length > 0 || hasStats || ctasExist);
  const canUnifiedAside = unifiedAside && Boolean(resolvedHeroImage) && showAsidePanel;

  const shell = cn(
    "relative overflow-hidden border-b border-[var(--border-light)] text-[color:var(--text-body)]",
  );

  return (
    <section
      className={cn(shell, "relative")}
      style={{
        background:
          category === "domestic"
            ? "linear-gradient(135deg, #F0F9E8 0%, #FFFFFF 100%)"
            : "linear-gradient(135deg, #EBF3FF 0%, #F0F9E8 50%, #FFFFFF 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(30,90,165,0.08) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(90,135,48,0.08) 0%, transparent 70%)",
          transform: "translate(-30%, 30%)",
        }}
        aria-hidden
      />

      <div
        className={cn(
          "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
          snug ? "py-10 md:py-14 lg:py-16" : compact ? "py-10 md:py-14 lg:py-16" : "py-16 md:py-24",
        )}
      >
        <div
          className={cn(
            "grid",
            compact ? "gap-6 lg:gap-8 xl:gap-10" : "gap-8 lg:gap-8 xl:gap-10",
            showAside && balancedColumns && "lg:grid-cols-2",
            showAside && !balancedColumns && "lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)]",
            showAside && "lg:items-stretch",
          )}
        >
          <div
            className={cn(
              "flex flex-col",
              "relative border-l-4 border-[color:var(--red)] pl-5 md:pl-6",
            )}
          >
            {breadcrumbs?.length ? (
              <nav
                className={cn(
                  "mb-4 flex flex-wrap items-center gap-2 text-xs",
                  "text-[color:var(--text-muted)]",
                )}
                aria-label="Breadcrumb"
              >
                {breadcrumbs.map((b, i) => (
                  <span key={b.label} className="flex items-center gap-2">
                    {i > 0 && <span className="opacity-50">/</span>}
                    {b.href ? (
                      <Link
                        href={b.href}
                        className={cn(
                          "transition hover:underline",
                          "text-[color:var(--blue)] hover:text-[color:var(--blue-dark)]",
                        )}
                      >
                        {b.label}
                      </Link>
                    ) : (
                      <span>{b.label}</span>
                    )}
                  </span>
                ))}
              </nav>
            ) : null}

            {eyebrow ? (
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[color:var(--blue)]">
                {eyebrow}
              </p>
            ) : null}

            <h1
              className={cn(
                compact ? "mt-3" : "mt-4",
                "font-extrabold tracking-tight text-[color:var(--blue-dark)]",
                compact ? "text-3xl md:text-4xl lg:text-5xl" : "text-4xl md:text-5xl lg:text-6xl",
              )}
            >
              {title}
            </h1>

            {subtitle ? (
              <p
                className={cn(
                  compact ? "mt-3" : "mt-4",
                  compact || introFullWidth ? "max-w-none" : "max-w-2xl",
                  "text-lg leading-snug md:text-xl",
                  "text-[color:var(--text-muted)]",
                )}
              >
                {subtitle}
              </p>
            ) : null}

            {description ? (
              <p
                className={cn(
                  "mt-3 text-base leading-relaxed md:text-lg",
                  compact || introFullWidth ? "max-w-none" : "max-w-2xl",
                  "text-[color:var(--text-muted)]",
                )}
              >
                {description}
              </p>
            ) : null}

            {ctasExist ? (
              <div
                className={cn(
                  compact ? "mt-5" : "mt-7",
                  asideShowsCtasDesktop ? "lg:hidden" : "",
                )}
              >
                <CtaPair
                  primaryCta={primaryCta}
                  secondaryCta={secondaryCta}

                />
              </div>
            ) : null}

            {trustHint ? (
              <p
                className={cn(
                  "mt-5 border-t pt-4 text-sm",
                  compact || introFullWidth ? "max-w-none" : "max-w-2xl",
                  isLight
                    ? "border-sm-gray-200 text-sm-gray-600"
                    : "border-white/10 text-white/65",
                )}
              >
                {trustHint}
              </p>
            ) : null}

            {children}
          </div>

          <aside
            className={cn(
              "relative flex min-h-0 flex-col",
              canUnifiedAside ? "lg:justify-stretch" : "gap-4 lg:justify-center",
            )}
            aria-label="Page highlights"
          >
            {canUnifiedAside ? (
              <div
                className={cn(
                  "flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border shadow-lg",
                  isQuickFactsPanel
                    ? "border-[#C8DCFF]"
                    : "border-sm-gray-200/90 bg-white ring-1 ring-sm-gray-100/80",
                )}
              >
                <div className="relative h-[200px] w-full shrink-0 sm:h-[220px] lg:h-[min(280px,30vh)] xl:h-[min(300px,32vh)]">
                  <Image
                    src={resolvedHeroImage!.src}
                    alt={resolvedHeroImage!.alt}
                    fill
                    className="object-cover"
                    priority={heroImagePriority}
                    sizes="(min-width: 1280px) 40vw, (min-width: 1024px) 50vw, 100vw"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#163F78]/40 to-transparent"
                    aria-hidden
                  />
                </div>

                <div
                  className={cn(
                    "relative flex min-h-0 flex-1 flex-col border-t p-5 md:p-6",
                    isQuickFactsPanel
                      ? "border-white/10 text-white"
                      : "border-sm-gray-100 bg-gradient-to-br from-white via-white to-sm-off-white/90",
                  )}
                  style={
                    isQuickFactsPanel
                      ? { background: "linear-gradient(180deg, #1E5AA5 0%, #163F78 100%)" }
                      : undefined
                  }
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-40 hero-mesh-light"
                    aria-hidden
                  />

                  <div className="relative">
                    {panelHeader ? (
                      <p
                        className={cn(
                          "text-xs font-bold uppercase tracking-[0.2em]",
                          isQuickFactsPanel ? "text-[#A8CAFE]" : "text-sm-teal-dark",
                        )}
                      >
                        {panelHeader}
                      </p>
                    ) : null}

                    {hasStats && sidebarStats ? (
                      <div
                        className={cn(
                          "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1",
                          snippetList.length > 0 && "mb-5 border-b border-sm-gray-200 pb-5",
                        )}
                      >
                        {sidebarStats.stats.map((s) => (
                          <div
                            key={s.label}
                            className={cn(
                              "rounded-2xl border p-4",
                              isQuickFactsPanel ? "border-white/15 bg-white/10" : "border-sm-gray-200 bg-sm-gray-50/80",
                            )}
                          >
                            <p className={cn("text-xs font-medium leading-snug", isQuickFactsPanel ? "text-white/70" : "text-sm-gray-600")}>
                              {s.label}
                            </p>
                            <p className={cn("mt-1.5 text-lg font-extrabold tracking-tight md:text-xl", isQuickFactsPanel ? "text-white" : "text-sm-gray-900")}>
                              {s.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : null}

                    {snippetList.length > 0 ? (
                      <ul className="space-y-2.5">
                        {snippetList.map((line) => (
                          <li key={line} className="flex gap-3 text-sm leading-snug">
                            <span
                              className={cn(
                                "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                                isQuickFactsPanel
                                  ? "bg-[color:var(--green)]/20 text-[color:var(--green-light)]"
                                  : "bg-sm-teal/15 text-sm-teal-dark",
                              )}
                              aria-hidden
                            >
                              <Check className="h-3 w-3" strokeWidth={3} />
                            </span>
                            <span className={cn(isQuickFactsPanel ? "text-white" : "text-sm-gray-700")}>{line}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    {asideShowsCtasDesktop ? (
                      <div className="mt-6 border-t border-sm-gray-200 pt-5 hidden lg:block">
                        <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-sm-gray-500">
                          Next step
                        </p>
                        <CtaPair primaryCta={primaryCta} secondaryCta={secondaryCta} />
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            ) : (
              <>
                {resolvedHeroImage ? (
                  <div className="relative overflow-hidden rounded-3xl border border-[var(--border-light)] bg-white shadow-[var(--shadow-md)]">
                    <Image
                      src={resolvedHeroImage.src}
                      alt={resolvedHeroImage.alt}
                      width={900}
                      height={700}
                      className={
                        compact
                          ? "h-[200px] w-full object-cover sm:h-[240px] lg:h-[280px]"
                          : "h-[260px] w-full object-cover sm:h-[320px] lg:h-[380px]"
                      }
                      priority={heroImagePriority}
                      sizes={
                        balancedColumns
                          ? "(min-width: 1024px) 46vw, 100vw"
                          : "(min-width: 1024px) 420px, 100vw"
                      }
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#163F78]/35 to-transparent"
                      aria-hidden
                    />
                  </div>
                ) : null}

                {showAsidePanel ? (
                  <div
                    className={cn(
                      "relative overflow-hidden rounded-3xl border shadow-2xl",
                      compact ? "p-4 md:p-5" : "p-5 md:p-7",
                      isQuickFactsPanel
                        ? "border-[#C8DCFF] text-white"
                        : "border-sm-gray-200/90 bg-gradient-to-br from-white via-white to-sm-off-white/80 ring-1 ring-sm-gray-100/80 shadow-[0_28px_80px_-24px_rgba(15,23,42,0.18)]",
                    )}
                    style={
                      isQuickFactsPanel
                        ? { background: "linear-gradient(135deg, #1E5AA5 0%, #163F78 100%)" }
                        : undefined
                    }
                  >
                    <div
                      className="pointer-events-none absolute inset-0 opacity-40 hero-mesh-light rounded-3xl"
                      aria-hidden
                    />

                    <div className="relative">
                      {panelHeader ? (
                        <p
                          className={cn(
                            "text-xs font-bold uppercase tracking-[0.2em]",
                            isQuickFactsPanel ? "text-[#A8CAFE]" : "text-sm-teal-dark",
                          )}
                        >
                          {panelHeader}
                        </p>
                      ) : null}

                      {hasStats && sidebarStats ? (
                        <div
                          className={cn(
                            "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1",
                            snippetList.length > 0 && "mb-5 border-b border-sm-gray-200 pb-5",
                          )}
                        >
                          {sidebarStats.stats.map((s) => (
                            <div
                              key={s.label}
                              className={cn(
                                "rounded-2xl border p-4",
                                isQuickFactsPanel ? "border-white/15 bg-white/10" : "border-sm-gray-200 bg-sm-gray-50/80",
                              )}
                            >
                              <p className={cn("text-xs font-medium leading-snug", isQuickFactsPanel ? "text-white/70" : "text-sm-gray-600")}>
                                {s.label}
                              </p>
                              <p className={cn("mt-1.5 text-lg font-extrabold tracking-tight md:text-xl", isQuickFactsPanel ? "text-white" : "text-sm-gray-900")}>
                                {s.value}
                              </p>
                            </div>
                          ))}
                        </div>
                      ) : null}

                      {snippetList.length > 0 ? (
                        <ul className="space-y-2.5">
                          {snippetList.map((line) => (
                            <li key={line} className="flex gap-3 text-sm leading-snug">
                              <span
                                className={cn(
                                  "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                                  isQuickFactsPanel
                                    ? "bg-[color:var(--green)]/20 text-[color:var(--green-light)]"
                                    : "bg-sm-teal/15 text-sm-teal-dark",
                                )}
                                aria-hidden
                              >
                                <Check className="h-3 w-3" strokeWidth={3} />
                              </span>
                              <span className={cn(isQuickFactsPanel ? "text-white" : "text-sm-gray-700")}>{line}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}

                      {asideShowsCtasDesktop ? (
                        <div className="mt-6 border-t border-sm-gray-200 pt-5 hidden lg:block">
                          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-sm-gray-500">
                            Next step
                          </p>
                          <CtaPair primaryCta={primaryCta} secondaryCta={secondaryCta} />
                        </div>
                      ) : null}
                    </div>
                  </div>
                ) : null}
              </>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
