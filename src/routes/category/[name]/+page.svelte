<script lang="ts">
  import type { PageData } from './$types'
  import AppCard from '$lib/AppCard.svelte'
  export let data: PageData
</script>

<svelte:head>
  <title>{data.category} Apps — Agora Linux App Store</title>
  <meta name="description" content="Browse {data.category} Linux apps with EU sovereignty ratings on Agora." />
</svelte:head>

<div class="page">
  <header class="topbar">
    <h1>{data.category}</h1>
    <span class="count">{data.apps.length} apps</span>
  </header>

  <div class="content">
    {#if data.apps.length === 0}
      <div class="state-msg"><p>No apps found in this category.</p></div>
    {:else}
      <div class="grid">
        {#each data.apps as app (app.id)}
          <AppCard {app} />
        {/each}
      </div>
    {/if}
  </div>
</div>

<style>
  .page { display: flex; flex-direction: column; height: 100vh; }
  .topbar {
    display: flex; align-items: center; gap: 12px;
    padding: 14px 20px; border-bottom: 1px solid var(--border);
    background: var(--bg-card); flex-shrink: 0;
  }
  h1 { font-size: 18px; font-weight: 600; color: var(--text-primary); }
  .count { font-size: 12px; color: var(--text-muted); }
  .content { flex: 1; overflow-y: auto; padding: 20px; }
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 12px; }
  .state-msg { display: flex; align-items: center; justify-content: center; height: 200px; color: var(--text-muted); font-size: 14px; }
</style>
