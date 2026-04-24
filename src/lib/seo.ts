/** Safe JSON-LD for {@html} injection (blocks `</script>` breakouts). */
export function serializeJsonLd(data: object): string {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}

/** Build a single JSON-LD script element for svelte:head. */
export function jsonLdScript(data: object): string {
  return `<script type="application/ld+json">${serializeJsonLd(data)}</script>`
}
