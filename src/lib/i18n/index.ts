import { browser } from '$app/environment'
import { invalidateAll } from '$app/navigation'
import { writable } from 'svelte/store'
import { DEFAULT_LOCALE, type Locale, type UiStrings, getUi, LOCALES } from './locales'

/** Synced from root +layout.server (cookie + Accept-Language) to avoid SSR/client text mismatch. */
export const locale = writable<Locale>(DEFAULT_LOCALE)

const COOKIE = 'agora-locale'
const Y = 60 * 60 * 24 * 365

export async function setLocale(l: Locale): Promise<void> {
  if (!(LOCALES as readonly string[]).includes(l)) return
  locale.set(l)
  if (!browser) return
  const secure = location.protocol === 'https:' ? '; Secure' : ''
  try {
    document.cookie = `${COOKIE}=${l}; path=/; max-age=${Y}; SameSite=Lax${secure}`
  } catch {
    /* empty */
  }
  await invalidateAll()
}

export { getUi, LOCALES, DEFAULT_LOCALE, type Locale, type UiStrings }
