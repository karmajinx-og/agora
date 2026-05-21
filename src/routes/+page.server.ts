import { fetchPopularApps, searchApps } from '$lib/flathub'
import type { PageServerLoad } from './$types'

// Static fallback shown when Flathub is unreachable.
// Prevents Google treating an empty grid as a Soft 404.
const FALLBACK_APP_IDS = [
  'org.libreoffice.LibreOffice',
  'org.mozilla.firefox',
  'org.gimp.GIMP',
  'org.videolan.VLC',
  'org.mozilla.Thunderbird',
  'org.inkscape.Inkscape',
  'org.blender.Blender',
  'org.kde.kdenlive',
]

export const load: PageServerLoad = async ({ url }) => {
  const initialQ = url.searchParams.get('q')?.trim() ?? ''
  try {
    const apps = initialQ ? await searchApps(initialQ) : await fetchPopularApps()
    return { apps, feedError: null as string | null, initialQ, usedFallback: false }
  } catch (e) {
    console.error('[Agora] home feed failed', e)
    const message = e instanceof Error ? e.message : 'Unknown error'
    // Return fallback stub entries so Google never sees an empty page.
    const fallback = FALLBACK_APP_IDS.map(id => ({
      id,
      app_id: id,
      name: id.split('.').pop() ?? id,
      summary: 'Popular Linux app — install details loading',
      icon: '',
      categories: [],
      is_free_license: true,
    }))
    return { apps: fallback, feedError: message, initialQ, usedFallback: true }
  }
}
