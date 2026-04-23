import { fetchAppDetail, flatpakRefFromParam } from '$lib/flathub'
import { getSovereignty } from '$lib/sovereignty'
import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }) => {
  const ref = flatpakRefFromParam(params.id)
  try {
    const app = await fetchAppDetail(ref)
    const sovereignty = getSovereignty(ref)
    return { app, sovereignty }
  } catch {
    throw error(404, 'App not found')
  }
}
