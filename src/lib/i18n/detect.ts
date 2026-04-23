import { DEFAULT_LOCALE, LOCALES, type Locale } from './locales'

/** Picks a supported UI locale from cookie (user choice) or Accept-Language, else default. */
export function pickLocale(
  cookie: string | null | undefined,
  acceptLanguage: string | null | undefined
): Locale {
  if (cookie) {
    const c = cookie.trim()
    if ((LOCALES as readonly string[]).includes(c)) return c as Locale
  }
  if (acceptLanguage) {
    for (const part of acceptLanguage.split(',')) {
      const code = part.trim().split(';')[0].trim().toLowerCase().slice(0, 2)
      if (code && (LOCALES as readonly string[]).includes(code)) return code as Locale
    }
  }
  return DEFAULT_LOCALE
}
