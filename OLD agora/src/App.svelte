<script lang="ts">
  import './app.css'
  import { onMount } from 'svelte'
  import { fetchPopularApps, searchApps, fetchByCategory, type FlathubApp } from '$lib/flathub'
  import AppCard from '$lib/AppCard.svelte'
  import AppDetail from '$lib/AppDetail.svelte'

  // State
  let apps: FlathubApp[] = []
  let loading = true
  let error = ''
  let searchQuery = ''
  let searchTimer: ReturnType<typeof setTimeout>
  let selectedApp: FlathubApp | null = null
  let activeCategory = 'All'
  let sovereigntyFilter: 'all' | 'safe-only' | 'no-risk' = 'all'

  import { getSovereignty } from '$lib/sovereignty'

  const categories = [
    'All', 'Office', 'Development', 'Graphics', 'AudioVideo',
    'Network', 'Science', 'Education', 'Game', 'Utility'
  ]

  // Load apps
  async function loadApps() {
    loading = true
    error = ''
    try {
      if (searchQuery.trim()) {
        apps = await searchApps(searchQuery)
      } else if (activeCategory !== 'All') {
        apps = await fetchByCategory(activeCategory)
      } else {
        apps = await fetchPopularApps()
      }
    } catch (e) {
      error = String(e)
    } finally {
      loading = false
    }
  }

  // Filtered apps by sovereignty setting
  $: filteredApps = apps.filter(app => {
    if (sovereigntyFilter === 'all') return true
    const s = getSovereignty(app.id)
    if (sovereigntyFilter === 'safe-only') return s?.level === 'safe'
    if (sovereigntyFilter === 'no-risk') return s !== null && s.level !== 'risk'
    return true
  })

  // Debounced search
  function onSearch() {
    clearTimeout(searchTimer)
    searchTimer = setTimeout(loadApps, 350)
  }

  function selectCategory(cat: string) {
    activeCategory = cat
    searchQuery = ''
    loadApps()
  }

  onMount(loadApps)
</script>

<div class="layout">
  <!-- Sidebar -->
  <aside class="sidebar">
    <div class="logo">
      <span class="logo-icon">A</span>
      <span class="logo-text">Agora</span>
    </div>

    <nav>
      <p class="nav-label">Categories</p>
      {#each categories as cat}
        <button
          class="nav-item"
          class:active={activeCategory === cat}
          on:click={() => selectCategory(cat)}
        >
          {cat}
        </button>
      {/each}
    </nav>

    <div class="filter-section">
      <p class="nav-label">Sovereignty filter</p>
      <label class="radio-label">
        <input type="radio" bind:group={sovereigntyFilter} value="all" />
        Show all apps
      </label>
      <label class="radio-label">
        <input type="radio" bind:group={sovereigntyFilter} value="no-risk" />
        Hide risk apps
      </label>
      <label class="radio-label">
        <input type="radio" bind:group={sovereigntyFilter} value="safe-only" />
        Safe only
      </label>
    </div>

    <div class="sidebar-footer">
      <span>Powered by Flathub</span>
    </div>
  </aside>

  <!-- Main content -->
  <main class="main">
    <header class="topbar">
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
      <div class="result-count">
        {#if !loading}
          {filteredApps.length} app{filteredApps.length !== 1 ? 's' : ''}
          {sovereigntyFilter !== 'all' ? '· filtered' : ''}
        {/if}
      </div>
    </header>

    <div class="content">
      {#if loading}
        <div class="state-msg">
          <div class="spinner"></div>
          <p>Loading apps…</p>
        </div>
      {:else if error}
        <div class="state-msg error">
          <p>Failed to load: {error}</p>
          <button class="retry-btn" on:click={loadApps}>Retry</button>
        </div>
      {:else if filteredApps.length === 0}
        <div class="state-msg">
          <p>No apps found{searchQuery ? ` for "${searchQuery}"` : ''}.</p>
        </div>
      {:else}
        <div class="grid">
          {#each filteredApps as app (app.id)}
            <AppCard {app} on:select={e => selectedApp = e.detail} />
          {/each}
        </div>
      {/if}
    </div>
  </main>
</div>

{#if selectedApp}
  <AppDetail app={selectedApp} on:close={() => selectedApp = null} />
{/if}

<style>
  .layout {
    display: flex;
    height: 100vh;
    overflow: hidden;
  }

  /* Sidebar */
  .sidebar {
    width: 200px;
    flex-shrink: 0;
    background: var(--bg-card);
    border-right: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    padding: 16px 12px;
    gap: 8px;
    overflow-y: auto;
  }

  .logo {
    display: flex; align-items: center; gap: 8px;
    padding: 8px 4px 16px;
    border-bottom: 1px solid var(--border);
    margin-bottom: 4px;
  }

  .logo-icon {
    width: 28px; height: 28px;
    background: var(--accent);
    border-radius: 8px;
    display: flex; align-items: center; justify-content: center;
    font-size: 14px; font-weight: 800; color: #fff;
  }

  .logo-text {
    font-size: 14px; font-weight: 700; color: var(--text-primary);
  }

  .nav-label {
    font-size: 10px; font-weight: 600; letter-spacing: .08em;
    text-transform: uppercase; color: var(--text-muted);
    padding: 8px 8px 4px;
  }

  nav { display: flex; flex-direction: column; gap: 2px; }

  .nav-item {
    background: transparent;
    border: none;
    border-radius: var(--radius-sm);
    padding: 7px 10px;
    text-align: left;
    font-size: 13px;
    color: var(--text-secondary);
    cursor: pointer;
    transition: background 0.1s, color 0.1s;
  }

  .nav-item:hover { background: var(--bg-card-hover); color: var(--text-primary); }
  .nav-item.active { background: rgba(91, 126, 247, 0.15); color: var(--accent); font-weight: 600; }

  .filter-section {
    display: flex; flex-direction: column; gap: 4px;
    margin-top: 8px;
    border-top: 1px solid var(--border);
    padding-top: 8px;
  }

  .radio-label {
    display: flex; align-items: center; gap: 8px;
    font-size: 12px; color: var(--text-secondary);
    padding: 5px 8px; border-radius: var(--radius-sm);
    cursor: pointer;
  }

  .radio-label:hover { background: var(--bg-card-hover); color: var(--text-primary); }
  .radio-label input { accent-color: var(--accent); }

  .sidebar-footer {
    margin-top: auto;
    font-size: 11px; color: var(--text-muted);
    padding: 8px;
    border-top: 1px solid var(--border);
  }

  /* Main */
  .main {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    min-width: 0;
  }

  .topbar {
    display: flex; align-items: center; gap: 16px;
    padding: 14px 20px;
    border-bottom: 1px solid var(--border);
    background: var(--bg-card);
    flex-shrink: 0;
  }

  .search-wrap {
    position: relative; flex: 1; max-width: 480px;
  }

  .search-icon {
    position: absolute; left: 10px; top: 50%; transform: translateY(-50%);
    width: 16px; height: 16px; color: var(--text-muted);
    pointer-events: none;
  }

  .search {
    width: 100%;
    background: var(--bg-input);
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    padding: 8px 12px 8px 34px;
    font-size: 14px; color: var(--text-primary);
    transition: border-color 0.15s;
  }

  .search:focus { border-color: var(--accent); }
  .search::placeholder { color: var(--text-muted); }

  .result-count {
    font-size: 12px; color: var(--text-muted);
    white-space: nowrap;
  }

  .content { flex: 1; overflow-y: auto; padding: 20px; }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 12px;
  }

  /* States */
  .state-msg {
    display: flex; flex-direction: column; align-items: center;
    justify-content: center; gap: 12px;
    height: 300px; color: var(--text-muted); font-size: 14px;
  }

  .state-msg.error { color: var(--risk); }

  .spinner {
    width: 28px; height: 28px;
    border: 2px solid var(--border);
    border-top-color: var(--accent);
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
  }

  @keyframes spin { to { transform: rotate(360deg); } }

  .retry-btn {
    background: var(--bg-input); color: var(--text-secondary);
    border: 1px solid var(--border); border-radius: var(--radius-sm);
    padding: 6px 16px; font-size: 13px;
  }

  .retry-btn:hover { color: var(--text-primary); border-color: var(--border-hover); }
</style>
