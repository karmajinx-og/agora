import type { Handle } from '@sveltejs/kit'

/** Baseline response headers (Pages may add/merge its own; still safe to set on app responses). */
export const handle: Handle = async ({ event, resolve }) => {
  const response = await resolve(event, {
    filterSerializedResponseHeaders: n =>
      n === 'content-type' || n.startsWith('x-') || n === 'set-cookie'
  })
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
  return response
}
