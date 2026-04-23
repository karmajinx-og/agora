import { browser } from '$app/environment'
import { invalidateAll } from '$app/navigation'
import { LOCALES } from '$lib/i18n/locales'

/** One-time: migrate pre-cookie `localStorage` locale to the cookie used for SSR. */
if (browser) {
  const legacy = (() => {
    try {
      return localStorage.getItem('agora-locale')
    } catch {
      return null
    }
  })()
  if (
    legacy &&
    (LOCALES as readonly string[]).includes(legacy as (typeof LOCALES)[number]) &&
    !document.cookie.split(';').some(s => s.trim().startsWith('agora-locale='))
  ) {
    const secure = location.protocol === 'https:' ? '; Secure' : ''
    document.cookie = `agora-locale=${legacy}; path=/; max-age=31536000; SameSite=Lax${secure}`
    try {
      localStorage.removeItem('agora-locale')
    } catch {
      /* empty */
    }
    void invalidateAll()
  }
}
