import { fetchPopularApps } from '$lib/flathub'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
  try {
    const apps = await fetchPopularApps()
    return { apps, feedError: null as string | null }
  } catch (e) {
    console.error('[Agora] fetchPopularApps failed', e)
    const message = e instanceof Error ? e.message : 'Unknown error'
    return { apps: [], feedError: message }
  }
}
