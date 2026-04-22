<script lang="ts">
  import type { PageData } from './$types'
  import { searchApps, type FlathubApp } from '$lib/flathub'
  import { getSovereignty } from '$lib/sovereignty'
  import AppCard from '$lib/AppCard.svelte'

  export let data: PageData

  let apps: FlathubApp[] = data.apps
  let searchQuery = ''
  let searchTimer: ReturnType<typeof setTimeout>
  let loading = false
  let error = ''
  let sovereigntyFilter: 'all' | 'safe-only' | 'no-risk' = 'all'

  $: filteredApps = apps.filter(app => {
    if (sovereigntyFilter === 'all') return true
    const s = getSovereignty(app.id)
    if (sovereigntyFilter === 'safe-only') return s?.level === 'safe'
    if (sovereigntyFilter === 'no-risk') return s !== null && s.level !== 'risk'
    return true
  })

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
  <title>Agora — Linux App Store</title>
  <meta name="description" content="Discover Linux apps with GDPR, EU-origin, and telemetry ratings. The sovereignty-aware app store for the EU Linux migration." />
  <meta property="og:title" content="Agora — Linux App Store" />
  <meta property="og:description" content="Browse and discover Linux Flatpak apps with sovereignty ratings. Built for the EU Linux migration." />
</svelte:head>

<div class="hero">
  <h1>Linux apps, <span class="accent">sovereignty rated</span></h1>
  <p class="hero-sub">Browse Flatpak apps with GDPR, EU-origin, and telemetry tags — built for the EU Linux migration.</p>
</div>

<div class="toolbar">
  <div class="search-wrap">
    <svg class="search-icon" viewBox="0 0 20 20" fill="none">
      <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" stroke-width="1.5"/>
      <path d="M13 13l3.5 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
    <input
      class="search"
      type="search"
      placeholder="Search apps…"
      bind:value={searchQuery}
      on:input={onSearch}
    />
  </div>
  <div class="filters">
    <button class="filter-btn" class:active={sovereigntyFilter === 'all'} on:click={() => sovereigntyFilter = 'all'}>All apps</button>
    <button class="filter-btn" class:active={sovereigntyFilter === 'no-risk'} on:click={() => sovereigntyFilter = 'no-risk'}>Hide risk</button>
    <button class="filter-btn" class:active={sovereigntyFilter === 'safe-only'} on:click={() => sovereigntyFilter = 'safe-only'}>Safe only</button>
  </div>
  <span class="count">{filteredApps.length} app{filteredApps.length !== 1 ? 's' : ''}</span>
</div>

{#if loading}
  <div class="state"><div class="spinner"></div><p>Searching…</p></div>
{:else if error}
  <div class="state error"><p>Failed to load: {error}</p></div>
{:else if filteredApps.length === 0}
  <div class="state"><p>No apps found{searchQuery ? ` for "${searchQuery}"` : ''}.</p></div>
{:else}
  <div class="grid">
    {#each filteredApps as app (app.id)}
      <AppCard {app} />
    {/each}
  </div>
{/if}

<style>
  .hero { margin-bottom: 32px; padding: 40px 0 0; }
  h1 { font-size: clamp(28px, 5vw, 42px); font-weight: 700; line-height: 1.2; margin-bottom: 12px; }
  .accent { color: var(--accent); }
  .hero-sub { font-size: 16px; color: var(--text-secondary); max-width: 560px; line-height: 1.6; }

  .toolbar { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; flex-wrap: wrap; }
  .search-wrap { position: relative; flex: 1; min-width: 200px; max-width: 480px; }
  .search-icon { position: absolute; left: 10px; top: 50%; transform: translateY(-50%); width: 16px; height: 16px; color: var(--text-muted); pointer-events: none; }
  .search { width: 100%; background: var(--bg-input); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 9px 12px 9px 34px; font-size: 14px; color: var(--text-primary); }
  .search:focus { border-color: var(--accent); }
  .search::placeholder { color: var(--text-muted); }

  .filters { display: flex; gap: 6px; }
  .filter-btn { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 7px 14px; font-size: 13px; color: var(--text-secondary); cursor: pointer; transition: all 0.1s; }
  .filter-btn:hover { border-color: var(--border-hover); color: var(--text-primary); }
  .filter-btn.active { background: rgba(91,126,247,0.15); border-color: var(--accent); color: var(--accent); font-weight: 600; }

  .count { font-size: 12px; color: var(--text-muted); white-space: nowrap; margin-left: auto; }

  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 12px; }

  .state { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; height: 200px; color: var(--text-muted); font-size: 14px; }
  .state.error { color: var(--risk); }
  .spinner { width: 24px; height: 24px; border: 2px solid var(--border); border-top-color: var(--accent); border-radius: 50%; animation: spin 0.7s linear infinite; }
  @keyframes spin { to { transform: rotate(360deg); } }
</style>
