import { withTimeout } from '$lib/abort'
import { fetchPopularApps, flatpakRef } from '$lib/flathub'
import { NAV_CATEGORIES, SITE_ORIGIN } from '$lib/site'
import type { RequestHandler } from './$types'

const STATIC_PATHS = ['/', '/about', '/updates']

/** Stay under typical worker limits; always return static URLs even if Flathub fails. */
const SITEMAP_TOTAL_BUDGET_MS = 22_000
const SITEMAP_PER_PAGE_MS = 6_000
const SITEMAP_MAX_PAGES = 8

function escapeXml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function buildXml(urls: Set<string>): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...urls]
  .sort()
  .map((loc) => `  <url><loc>${escapeXml(loc)}</loc></url>`)
  .join('\n')}
</urlset>`
}

export const GET: RequestHandler = async () => {
  const urls = new Set<string>()
  for (const p of STATIC_PATHS) urls.add(`${SITE_ORIGIN}${p}`)
  for (const c of NAV_CATEGORIES) {
    urls.add(`${SITE_ORIGIN}/category/${encodeURIComponent(c)}`)
  }

  const seenRefs = new Set<string>()
  const started = Date.now()

  for (let page = 1; page <= SITEMAP_MAX_PAGES; page++) {
    const elapsed = Date.now() - started
    if (elapsed >= SITEMAP_TOTAL_BUDGET_MS - 500) break

    const budget = Math.max(1500, SITEMAP_TOTAL_BUDGET_MS - elapsed)
    const perPage = Math.min(SITEMAP_PER_PAGE_MS, budget)

    try {
      const apps = await fetchPopularApps(page, withTimeout(undefined, perPage))
      if (!apps.length) break
      for (const app of apps) {
        const ref = flatpakRef(app)
        if (seenRefs.has(ref)) continue
        seenRefs.add(ref)
        urls.add(`${SITE_ORIGIN}/app/${encodeURIComponent(ref)}`)
      }
    } catch (e) {
      console.error('[Agora sitemap] page fetch failed', page, e)
      break
    }
  }

  const body = buildXml(urls)

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      // CDN can cache; regenerate periodically so new apps appear without hammering Flathub.
      'Cache-Control': 'public, max-age=7200, s-maxage=7200, stale-while-revalidate=86400',
    },
  })
}
