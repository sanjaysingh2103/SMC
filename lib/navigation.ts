/**
 * Returns true when `href` should use a normal anchor with optional `target="_blank"`
 * (absolute http(s) URLs). Same-site paths use Next.js `<Link>`.
 */
export function isExternalBrowserHref(href: string): boolean {
  return /^https?:\/\//i.test(href.trim());
}
