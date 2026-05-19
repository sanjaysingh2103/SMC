import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { SITE } from "@/lib/site";
import { UNSPLASH } from "@/lib/media/unsplash";

export type IntlGuideBannerStat = { value: string; label: string };

type Crumb = { label: string; href?: string };

/** Used when a page does not pass topic-specific stats — credible defaults aligned with site messaging. */
export const DEFAULT_INTL_GUIDE_STATS: IntlGuideBannerStat[] = [
  { value: SITE.stats.canadianPrograms, label: "Canadian programs (search)" },
  { value: "437k", label: "2025 national permit cap" },
  { value: "$22,895", label: "GIC minimum (Sept 2025)" },
  { value: SITE.stats.studentsHelped, label: "Students coached (all streams)" },
];

const DEFAULT_META = [
  `${SITE.stats.studentsHelped} students coached`,
  `${SITE.office.city}, ON office`,
  "Licensed RCIC · Visa Master Canada",
  SITE.hours,
];

function hashStringToIndex(input: string, modulo: number) {
  let h = 0;
  for (let i = 0; i < input.length; i++) {
    h = (h * 31 + input.charCodeAt(i)) >>> 0;
  }
  return modulo > 0 ? h % modulo : 0;
}

type Props = {
  eyebrow?: string;
  title: string;
  /** Large subtitle under the title (OSAP-style lead). */
  lead: string;
  /** Supporting paragraph under the lead. */
  body?: ReactNode;
  breadcrumbs: Crumb[];
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  /** Trust line under CTAs — defaults to office / RCIC / hours. */
  metaItems?: string[];
  asideTitle?: string;
  stats?: IntlGuideBannerStat[];
  heroImage?: { src: string; alt: string };
};

export function InternationalGuideBanner({
  eyebrow,
  title,
  lead,
  body,
  breadcrumbs,
  primaryCta,
  secondaryCta,
  metaItems = DEFAULT_META,
  asideTitle = "Canada study · at a glance",
  stats,
  heroImage,
}: Props) {
  const resolvedStats = stats?.length ? stats : DEFAULT_INTL_GUIDE_STATS;
  const pool = [
    UNSPLASH.studentsGroup,
    UNSPLASH.studentsCampusWalk,
    UNSPLASH.studentLaptop,
    UNSPLASH.campusModern,
  ];
  const resolvedImage = heroImage ?? pool[hashStringToIndex(title, pool.length)];

  const primaryExternal = /^https?:\/\//.test(primaryCta.href);
  const secondaryExternal = secondaryCta ? /^https?:\/\//.test(secondaryCta.href) : false;

  return (
    <section className="section-blue-grad relative overflow-hidden border-b border-white/15 text-white">
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-sm-orange/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-sm-teal/20 blur-3xl"
        aria-hidden
      />
      <div className="hero-mesh-dark" aria-hidden />
      <div className="hero-vignette-dark" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-12 lg:py-14">
        <nav className="text-xs text-white/80" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2">
            {breadcrumbs.map((b, i) => (
              <li key={`${b.label}-${i}`} className="flex items-center gap-2">
                {i > 0 ? <span className="opacity-50">/</span> : null}
                {b.href ? (
                  <Link className="text-white hover:underline" href={b.href}>
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-white/80">{b.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-4 grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(260px,320px)] lg:items-start lg:gap-9">
          <div className="min-w-0">
            {eyebrow ? (
              <p>
                <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-sm-orange-light backdrop-blur">
                  {eyebrow}
                </span>
              </p>
            ) : null}

            <h1
              className={
                eyebrow
                  ? "mt-4 break-words font-extrabold tracking-tight text-5xl leading-[1.05] text-white md:text-6xl lg:text-7xl"
                  : "mt-4 break-words font-extrabold tracking-tight text-5xl leading-[1.05] text-white md:text-6xl lg:text-7xl"
              }
            >
              {title}
            </h1>

            <p className="mt-5 max-w-2xl break-words text-xl leading-snug text-white/85 md:text-2xl">
              {lead}
            </p>

            {body ? (
              <div className="mt-3 max-w-2xl break-words text-sm leading-relaxed text-white/75 md:text-base">
                {body}
              </div>
            ) : null}

            <div className="mt-7 flex flex-wrap gap-3">
              {primaryExternal ? (
                <a
                  href={primaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-sm-orange px-7 py-3.5 font-bold text-white shadow-lg shadow-sm-orange/30 transition hover:bg-sm-orange-dark"
                >
                  {primaryCta.label}
                </a>
              ) : (
                <Link
                  href={primaryCta.href}
                  className="inline-flex rounded-full bg-sm-orange px-7 py-3.5 font-bold text-white shadow-lg shadow-sm-orange/30 transition hover:bg-sm-orange-dark"
                >
                  {primaryCta.label}
                </Link>
              )}

              {secondaryCta &&
                (secondaryExternal ? (
                  <a
                    href={secondaryCta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-full border border-white/20 bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur transition hover:bg-white/20"
                  >
                    {secondaryCta.label}
                  </a>
                ) : (
                  <Link
                    href={secondaryCta.href}
                    className="inline-flex rounded-full border border-white/20 bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur transition hover:bg-white/20"
                  >
                    {secondaryCta.label}
                  </Link>
                ))}
            </div>

            <div className="mt-6 flex max-w-full flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/70">
              {metaItems.flatMap((item, idx) =>
                idx === 0
                  ? [<span key={item} className="max-w-full break-words">{item}</span>]
                  : [
                      <span key={`dot-${item}`} aria-hidden className="hidden sm:inline opacity-50">
                        ·
                      </span>,
                      <span key={item} className="max-w-full break-words">
                        {item}
                      </span>,
                    ],
              )}
            </div>
          </div>

          <aside className="w-full min-w-0 max-w-full rounded-3xl border border-white/15 bg-white/5 p-4 backdrop-blur md:p-5 lg:max-w-[320px]">
            <div className="relative mb-4 aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-white/10">
              <Image
                src={resolvedImage.src}
                alt={resolvedImage.alt}
                fill
                sizes="(max-width: 1023px) 100vw, 320px"
                className="object-cover object-center"
                priority
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent"
                aria-hidden
              />
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-sm-orange-light">{asideTitle}</p>
            <dl className="mt-4 space-y-3">
              {resolvedStats.map((row) => (
                <div
                  key={`${row.value}-${row.label}`}
                  className="flex min-w-0 flex-wrap items-baseline justify-between gap-x-3 gap-y-1 border-b border-white/10 pb-3 last:border-0 last:pb-0"
                >
                  <dt className="min-w-0 max-w-[55%] shrink-0 text-2xl font-extrabold leading-none tracking-tight text-white">
                    {row.value}
                  </dt>
                  <dd className="min-w-0 flex-1 break-words text-right text-sm leading-snug text-white/75 sm:max-w-[45%]">
                    {row.label}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
