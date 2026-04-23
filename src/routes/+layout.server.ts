import { pickLocale } from '$lib/i18n/detect'
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async ({ request, cookies }) => {
  const c = cookies.get('agora-locale')
  const accept = request.headers.get('accept-language')
  return { locale: pickLocale(c, accept) }
}
