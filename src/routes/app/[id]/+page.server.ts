import { fetchAppDetail } from '$lib/flathub'
import { getSovereignty } from '$lib/sovereignty'
import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }) => {
  try {
    const app = await fetchAppDetail(params.id)
    const sovereignty = getSovereignty(params.id)
    return { app, sovereignty }
  } catch {
    throw error(404, 'App not found')
  }
}
