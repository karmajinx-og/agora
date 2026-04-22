import { fetchPopularApps } from '$lib/flathub'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
  try {
    const apps = await fetchPopularApps()
    return { apps }
  } catch {
    return { apps: [] }
  }
}
