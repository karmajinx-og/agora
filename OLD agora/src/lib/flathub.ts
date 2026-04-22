// Flathub API types
export interface FlathubApp {
  id: string
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

// Fetch popular apps for the home feed
export async function fetchPopularApps(page = 1): Promise<FlathubApp[]> {
  const res = await fetch(`${BASE}/popular?page=${page}&per_page=36`)
  if (!res.ok) throw new Error(`Flathub API error: ${res.status}`)
  const data = await res.json()
  return data.hits ?? data ?? []
}

// Search apps by query
export async function searchApps(query: string): Promise<FlathubApp[]> {
  if (!query.trim()) return fetchPopularApps()
  const res = await fetch(`${BASE}/search?q=${encodeURIComponent(query)}&page=1&per_page=36`)
  if (!res.ok) throw new Error(`Flathub search error: ${res.status}`)
  const data = await res.json()
  return data.hits ?? []
}

// Fetch apps by category
export async function fetchByCategory(category: string): Promise<FlathubApp[]> {
  const res = await fetch(`${BASE}/apps/category/${encodeURIComponent(category)}?page=1&per_page=36`)
  if (!res.ok) throw new Error(`Flathub category error: ${res.status}`)
  const data = await res.json()
  return data.hits ?? data ?? []
}

// Build icon URL from app id
export function iconUrl(app: FlathubApp): string {
  if (app.icon?.startsWith('http')) return app.icon
  return `https://dl.flathub.org/repo/appstream/${app.id}/icons/128x128/${app.id}.png`
}
