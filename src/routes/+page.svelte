<script lang="ts">
  import type { PageData } from './$types'
  import { flatpakRef, searchApps, type FlathubApp } from '$lib/flathub'
  import { getSovereignty } from '$lib/sovereignty'
  import { locale, getUi } from '$lib/i18n'
  import AppCard from '$lib/AppCard.svelte'

  export let data: PageData
  $: ui = getUi($locale)

  let apps: FlathubApp[] = data.apps
  let searchQuery = ''
  let searchTimer: ReturnType<typeof setTimeout>
  let loading = false
  let error = ''
  let sovereigntyFilter: 'all' | 'safe-only' | 'no-risk' = 'all'

  // "Hide risk": drop only apps explicitly tagged risk; keep untagged (not in DB yet).
  // "Safe only": apps explicitly tagged safe (small list until tag DB grows).
  $: filteredApps = apps.filter(app => {
    if (sovereigntyFilter === 'all') return true
    const s = getSovereignty(flatpakRef(app))
    if (sovereigntyFilter === 'safe-only') return s?.level === 'safe'
    if (sovereigntyFilter === 'no-risk') return !s || s.level !== 'risk'
    return true
  })

  $: filterHint =
    sovereigntyFilter === 'all' ? ui.filter_hint_all
    : sovereigntyFilter === 'no-risk' ? ui.filter_hint_hide
    : ui.filter_hint_safe

  async function onSearch() {
    clearTimeout(searchTimer)
    searchTimer = setTimeout(async () => {
      loading = true
      error = ''
      try {
        apps = await searchApps(searchQuery)
      } catch (e) {
        error = String(e)
      } finally {
        loading = false
      }
    }, 350)
  }
</script>

<svelte:head>
  <title>{ui.home_title}</title>
  <meta name="description" content="Discover Linux apps with GDPR, EU-origin, and telemetry ratings. Community-rated and privacy-tagged for the EU Linux migration." />
  <meta property="og:title" content={ui.home_title} />
  <meta property="og:description" content="Browse and discover Linux Flatpak apps — community-rated for privacy and trust. Built for the EU Linux migration." />
</svelte:head>

<div class="hero">
  <h1>{ui.hero_h1_main}<span class="accent">{ui.hero_h1_accent}</span></h1>
  <p class="hero-sub">{ui.hero_sub}</p>
  <p class="hero-help">
    <a href="/about#new-to-linux" class="hero-help-link">{ui.hero_help_link}</a>
    <span class="hero-help-hint">{ui.hero_help_hint}</span>
  </p>
</div>

<div class="toolbar-wrap">
  <div class="toolbar">
    <div class="search-wrap">
      <svg class="search-icon" viewBox="0 0 20 20" fill="none">
        <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" stroke-width="1.5"/>
        <path d="M13 13l3.5 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    <input
      class="search"
      type="search"
      placeholder={ui.search_placeholder}
      bind:value={searchQuery}
      on:input={onSearch}
    />
    </div>
    <div class="filter-block">
      <p class="filter-label" id="filter-heading">{ui.filter_label}</p>
      <div class="filters" role="group" aria-labelledby="filter-heading">
        <button
          type="button"
          class="filter-btn"
          class:active={sovereigntyFilter === 'all'}
          title="Show every app in the list. Badges on cards still show our tags when we have them."
          on:click={() => sovereigntyFilter = 'all'}
        >{ui.filter_all}</button>
        <button
          type="button"
          class="filter-btn"
          class:active={sovereigntyFilter === 'no-risk'}
          title="Removes only apps we’ve tagged as high risk (e.g. strong US-cloud / policy concerns). Unreviewed apps stay visible."
          on:click={() => sovereigntyFilter = 'no-risk'}
        >{ui.filter_hide}</button>
        <button
          type="button"
          class="filter-btn"
          class:active={sovereigntyFilter === 'safe-only'}
          title="Only apps we’ve fully tagged as safe. Not a guarantee — it means we’ve applied our ‘safe’ criteria in the database (small list for now)."
          on:click={() => sovereigntyFilter = 'safe-only'}
        >{ui.filter_safe}</button>
      </div>
    </div>
    <span class="count"
      >{filteredApps.length}
      {filteredApps.length === 1 ? ` ${ui.word_app}` : ` ${ui.word_apps}`}</span
    >
  </div>
  <p class="filter-hint">{filterHint}</p>
</div>

{#if loading}
  <div class="state"><div class="spinner"></div><p>{ui.state_searching}</p></div>
{:else if error}
  <div class="state error"><p>{ui.state_failed}: {error}</p></div>
{:else if filteredApps.length === 0}
  <div class="state">
    <p>
      {searchQuery ? `${ui.state_no_hits_for} "${searchQuery}".` : `${ui.state_no_hits}.`}
    </p>
  </div>
{:else}
  <div class="grid">
    {#each filteredApps as app (flatpakRef(app))}
      <AppCard {app} />
    {/each}
  </div>
{/if}

<style>
  .hero { margin-bottom: 32px; padding: 40px 0 0; }
  h1 { font-size: clamp(28px, 5vw, 42px); font-weight: 700; line-height: 1.2; margin-bottom: 12px; }
  .accent { color: var(--accent); }
  .hero-sub { font-size: 16px; color: var(--text-secondary); max-width: 560px; line-height: 1.6; }
  .hero-help { font-size: 14px; color: var(--text-muted); margin: 16px 0 0; line-height: 1.5; max-width: 560px; }
  .hero-help-link { color: var(--accent); font-weight: 500; text-decoration: none; }
  .hero-help-link:hover { text-decoration: underline; }
  .hero-help-hint { display: block; margin-top: 4px; font-size: 13px; }

  .toolbar-wrap { margin-bottom: 24px; }
  .toolbar { display: flex; align-items: flex-end; gap: 12px; flex-wrap: wrap; }
  .search-wrap { position: relative; flex: 1; min-width: 200px; max-width: 480px; }
  .filter-block { display: flex; flex-direction: column; gap: 6px; min-width: 0; }
  .filter-label { font-size: 11px; font-weight: 600; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.06em; margin: 0; }
  .filter-hint { font-size: 12px; color: var(--text-muted); line-height: 1.5; margin: 10px 0 0; max-width: 720px; }
  .search-icon { position: absolute; left: 10px; top: 50%; transform: translateY(-50%); width: 16px; height: 16px; color: var(--text-muted); pointer-events: none; }
  .search { width: 100%; background: var(--bg-input); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 9px 12px 9px 34px; font-size: 14px; color: var(--text-primary); }
  .search:focus { border-color: var(--accent); }
  .search::placeholder { color: var(--text-muted); }

  .filters { display: flex; gap: 6px; }
  .filter-btn { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 7px 14px; font-size: 13px; color: var(--text-secondary); cursor: pointer; transition: all 0.1s; }
  .filter-btn:hover { border-color: var(--border-hover); color: var(--text-primary); }
  .filter-btn.active {
    background: rgba(107, 136, 248, 0.18);
    border-color: var(--accent);
    color: var(--accent);
    font-weight: 600;
  }

  .count { font-size: 12px; color: var(--text-muted); white-space: nowrap; margin-left: auto; }

  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 12px; }

  .state { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; height: 200px; color: var(--text-muted); font-size: 14px; }
  .state.error { color: var(--risk); }
  .spinner { width: 24px; height: 24px; border: 2px solid var(--border); border-top-color: var(--accent); border-radius: 50%; animation: spin 0.7s linear infinite; }
  @keyframes spin { to { transform: rotate(360deg); } }
</style>
