<script lang="ts">
  import type { PageData } from './$types'
  import AppCard from '$lib/AppCard.svelte'
  import { getUi, locale } from '$lib/i18n'
  import { OG_IMAGE_URL, SITE_ORIGIN } from '$lib/site'
  export let data: PageData
  $: ui = getUi($locale)
  $: metaCategory = ui.meta_category.replace(/{category}/g, data.category)
  $: categoryH2 = ui.category_h2_grid.replace(/{category}/g, data.category)
  $: canonicalCategoryUrl = `${SITE_ORIGIN}/category/${encodeURIComponent(data.category)}`
</script>

<svelte:head>
  <title>{data.category} Apps — Agora Linux App Store</title>
  <meta name="description" content={metaCategory} />
  <link rel="canonical" href={canonicalCategoryUrl} />
  <meta property="og:title" content="{data.category} apps — Agora Linux App Store" />
  <meta property="og:description" content={metaCategory} />
  <meta property="og:url" content={canonicalCategoryUrl} />
  <meta property="og:image" content={OG_IMAGE_URL} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="{data.category} apps — Agora Linux App Store" />
  <meta name="twitter:description" content={metaCategory} />
  <meta name="twitter:image" content={OG_IMAGE_URL} />
</svelte:head>

<div class="page">
  <header class="topbar">
    <h1>{data.category}</h1>
    <span class="count">{data.apps.length} apps</span>
  </header>

  <div class="content">
    <h2 class="category-heading">{categoryH2}</h2>
    {#if data.apps.length === 0}
      <div class="state-msg"><p>No apps found in this category.</p></div>
    {:else}
      <div class="grid">
        {#each data.apps as app (app.app_id ?? app.id)}
          <AppCard {app} />
        {/each}
      </div>
    {/if}
  </div>
</div>

<style>
  .page { display: flex; flex-direction: column; min-height: 0; }
  .topbar {
    display: flex; align-items: center; gap: 12px;
    padding: 14px 20px; border-bottom: 1px solid var(--border);
    background: var(--bg-card); flex-shrink: 0;
  }
  h1 { font-size: 18px; font-weight: 600; color: var(--text-primary); }
  .count { font-size: 12px; color: var(--text-muted); }
  .content { padding: 20px; }
  .category-heading {
    font-size: 16px; font-weight: 600; color: var(--text-primary);
    margin: 0 0 16px; letter-spacing: -0.01em;
  }
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 12px; }
  .state-msg { display: flex; align-items: center; justify-content: center; height: 200px; color: var(--text-muted); font-size: 14px; }
</style>
