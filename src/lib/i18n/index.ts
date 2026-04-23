import { browser } from '$app/environment'
import { writable } from 'svelte/store'
import { DEFAULT_LOCALE, LOCALES, type Locale, type UiStrings, getUi, UI } from './locales'

const STORAGE = 'agora-locale'

function readInitial(): Locale {
  if (!browser) return DEFAULT_LOCALE
  try {
    const s = localStorage.getItem(STORAGE) as Locale | null
    if (s && (LOCALES as readonly string[]).includes(s)) return s
  } catch {
    /* empty */
  }
  const want = browser ? navigator.languages?.[0] ?? navigator.language : ''
  const short = want.slice(0, 2).toLowerCase()
  if ((LOCALES as readonly string[]).includes(short)) return short as Locale
  return DEFAULT_LOCALE
}

/** Current UI language (en, de, fr, es, it, pl). */
export const locale = writable<Locale>(readInitial())

if (browser) {
  locale.set(readInitial())
}

export function setLocale(l: Locale): void {
  locale.set(l)
  try {
    localStorage.setItem(STORAGE, l)
  } catch {
    /* empty */
  }
}

export { getUi, UI, LOCALES, DEFAULT_LOCALE, type Locale, type UiStrings }
