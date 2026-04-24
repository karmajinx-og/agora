<script lang="ts">
  import { locale, setLocale, LOCALES, type Locale, getUi } from './index'
  const names: Record<Locale, string> = {
    en: 'English',
    de: 'Deutsch',
    fr: 'Français',
    es: 'Español',
    it: 'Italiano',
    pl: 'Polski',
  }
  $: ui = getUi($locale)
  async function onChange(e: Event) {
    const v = (e.currentTarget as HTMLSelectElement).value
    if ((LOCALES as readonly string[]).includes(v)) await setLocale(v as Locale)
  }
</script>

<label class="lang">
  <span class="visually-hidden">{ui.lang_label}</span>
  <span class="lang-label" aria-hidden="true">{ui.lang_label}</span>
  <select class="lang-select" value={$locale} on:change={onChange}>
    {#each LOCALES as code}
      <option value={code}>{names[code]}</option>
    {/each}
  </select>
</label>

<style>
  .lang { display: inline-flex; align-items: center; gap: 6px; }
  .lang-label { font-size: 12px; color: var(--text-muted); }
  .lang-select {
    font-size: 12px; color: var(--text-secondary);
    background: var(--bg-input); border: 1px solid var(--border);
    border-radius: var(--radius-sm); padding: 4px 8px; cursor: pointer;
    max-width: 120px;
  }
  .lang-select:focus-visible { border-color: var(--accent); }
  .visually-hidden {
    position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
    overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;
  }
</style>
