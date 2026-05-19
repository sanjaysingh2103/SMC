/**
 * Shared visual layers for marketing pages that use a dark gradient hero
 * (not the {@link Hero} component). Keeps texture in sync with international Hero.
 */
export function DarkHeroBackdrop() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_100%_-10%,rgba(249,115,22,0.22),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_0%_100%,rgba(13,148,136,0.2),transparent_50%)]"
        aria-hidden
      />
      <div className="hero-mesh-dark" aria-hidden />
      <div className="hero-vignette-dark" aria-hidden />
      <div className="hero-sheen" aria-hidden />
      <div
        className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-sm-orange/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-sm-teal/15 blur-3xl"
        aria-hidden
      />
      <div className="grain-overlay" aria-hidden />
      <div className="hero-grain-strong" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
        aria-hidden
      />
    </>
  );
}
