import { fetchPopularApps, searchApps } from '$lib/flathub'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ url }) => {
  const initialQ = url.searchParams.get('q')?.trim() ?? ''
  try {
    const apps = initialQ ? await searchApps(initialQ) : await fetchPopularApps()
    return { apps, feedError: null as string | null, initialQ }
  } catch (e) {
    console.error('[Agora] home feed failed', e)
    const message = e instanceof Error ? e.message : 'Unknown error'
    return { apps: [], feedError: message, initialQ }
  }
}
