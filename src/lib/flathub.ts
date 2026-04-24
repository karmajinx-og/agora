import { withTimeout } from '$lib/abort'

// Flathub API types
export interface FlathubApp {
  /** v2 index key, often underscored (e.g. org_mozilla_firefox) */
  id: string
  /** Real Flatpak ref (e.g. org.mozilla.firefox) — use for API detail, install, and tag DB */
  app_id?: string
  name: string
  summary: string
  description?: string
  icon: string
  categories: string[]
  developer_name?: string
  project_url?: string
  screenshots?: { thumbhref: string; imgMobileUrl: string }[]
  installs_last_month?: number
  is_free_license: boolean
  verification?: { verified: boolean; method?: string }
}

export interface FlathubSearchResult {
  hits: FlathubApp[]
  query: string
}

const BASE = 'https://flathub.org/api/v2'

/** Per-request ceiling so Cloudflare / browsers don’t hang on Flathub. */
const FLATHUB_TIMEOUT_MS = 14_000

function flathubSignal(signal?: AbortSignal): AbortSignal {
  return withTimeout(signal, FLATHUB_TIMEOUT_MS)
}

async function parseJsonHits(res: Response): Promise<FlathubApp[]> {
  let data: unknown
  try {
    data = await res.json()
  } catch {
    throw new Error('Flathub returned non-JSON body')
  }
  if (data && typeof data === 'object' && 'hits' in data && Array.isArray((data as { hits: unknown }).hits)) {
    return (data as { hits: FlathubApp[] }).hits
  }
  if (Array.isArray(data)) return data as FlathubApp[]
  return []
}

// Fetch popular apps for the home feed (Flathub v2 uses /collection/popular, not /popular)
export async function fetchPopularApps(
  page = 1,
  signal?: AbortSignal
): Promise<FlathubApp[]> {
  const res = await fetch(`${BASE}/collection/popular?page=${page}&per_page=36`, {
    signal: flathubSignal(signal),
    headers: { Accept: 'application/json' },
  })
  if (!res.ok) throw new Error(`Flathub API error: ${res.status}`)
  return parseJsonHits(res)
}

// Search apps by query (v2 expects POST + JSON body)
export async function searchApps(query: string, signal?: AbortSignal): Promise<FlathubApp[]> {
  if (!query.trim()) return fetchPopularApps(1, signal)
  const res = await fetch(`${BASE}/search`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ query, filters: [], page: 1, hitsPerPage: 36 }),
    signal: flathubSignal(signal),
  })
  if (!res.ok) throw new Error(`Flathub search error: ${res.status}`)
  return parseJsonHits(res)
}

// Fetch apps by category
export async function fetchByCategory(category: string, signal?: AbortSignal): Promise<FlathubApp[]> {
  const res = await fetch(
    `${BASE}/collection/category/${encodeURIComponent(category)}?page=1&per_page=36`,
    { signal: flathubSignal(signal), headers: { Accept: 'application/json' } }
  )
  if (!res.ok) throw new Error(`Flathub category error: ${res.status}`)
  return parseJsonHits(res)
}

export async function fetchAppDetail(id: string, signal?: AbortSignal): Promise<FlathubApp> {
  const res = await fetch(`${BASE}/appstream/${encodeURIComponent(id)}`, {
    signal: flathubSignal(signal),
    headers: { Accept: 'application/json' },
  })
  if (!res.ok) throw new Error(`App detail error: ${res.status}`)
  try {
    return (await res.json()) as FlathubApp
  } catch {
    throw new Error('App detail returned non-JSON')
  }
}

/** Flatpak app ref for APIs, install commands, and sovereignty DB (dotted id). */
export function flatpakRef(app: FlathubApp): string {
  if (app.app_id) return app.app_id
  // v1-style or edge cases: internal id uses underscores instead of dots
  return app.id.includes('.') ? app.id : app.id.replace(/_/g, '.')
}

/** Normalise a route or query param to a Flatpak ref (v2 /appstream accepts dotted id only). */
export function flatpakRefFromParam(id: string): string {
  if (id.includes('.')) return id
  return id.replace(/_/g, '.')
}

// Build icon URL from app id
export function iconUrl(app: FlathubApp): string {
  if (app.icon?.startsWith('http')) return app.icon
  const ref = flatpakRef(app)
  return `https://dl.flathub.org/repo/appstream/${ref}/icons/128x128/${ref}.png`
}

/** Copy-paste install line for web / docs (matches common Flathub usage). */
export function installCommand(appId: string): string {
  return `flatpak install flathub ${appId}`
}
