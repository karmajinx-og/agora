import { fetchByCategory } from '$lib/flathub'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }) => {
  try {
    const apps = await fetchByCategory(params.name)
    return { apps, category: params.name }
  } catch {
    return { apps: [], category: params.name }
  }
}
