import { pickLocale } from '$lib/i18n/detect'
import type { Handle } from '@sveltejs/kit'

/** Baseline response headers (Pages may add/merge its own; still safe to set on app responses). */
export const handle: Handle = async ({ event, resolve }) => {
  const htmlLang = pickLocale(
    event.cookies.get('agora-locale'),
    event.request.headers.get('accept-language')
  )
  const response = await resolve(event, {
    // Default is content-type only; do not forward arbitrary x-* or set-cookie to serialized payloads.
    filterSerializedResponseHeaders: name => name === 'content-type',
    transformPageChunk: ({ html }) =>
      html.replace('<html lang="en">', `<html lang="${htmlLang}">`),
  })
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
  return response
}
