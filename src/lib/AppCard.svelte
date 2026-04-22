<script lang="ts">
  import type { FlathubApp } from '$lib/flathub'
  import { iconUrl } from '$lib/flathub'
  import { getPrivacy } from '$lib/privacy'
  import PrivacyBadge from '$lib/PrivacyBadge.svelte'
  export let app: FlathubApp
  const privacy = getPrivacy(app.id)
  let imgError = false
</script>

<a href="/app/{app.id}" class="card">
  <div class="icon-wrap">
    {#if !imgError}
      <img src={iconUrl(app)} alt={app.name} on:error={() => imgError = true} />
    {:else}
      <div class="icon-fallback">{app.name[0]}</div>
    {/if}
  </div>
  <div class="info">
    <div class="name">{app.name}</div>
    <div class="summary">{app.summary}</div>
    <div class="meta">
      <PrivacyBadge {privacy} compact />
      {#if app.is_free_license}<span class="free">Free</span>{/if}
    </div>
  </div>
</a>

<style>
  .card { display: flex; flex-direction: column; background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius); padding: 16px; gap: 10px; text-decoration: none; color: inherit; transition: all 0.15s; }
  .card:hover { background: var(--bg-card-hover); border-color: var(--border-hover); transform: translateY(-1px); }
  .icon-wrap { width: 56px; height: 56px; border-radius: 12px; overflow: hidden; flex-shrink: 0; background: var(--bg-input); }
  .icon-wrap img { width: 100%; height: 100%; object-fit: cover; }
  .icon-fallback { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 22px; font-weight: 700; color: var(--text-secondary); }
  .info { display: flex; flex-direction: column; gap: 4px; width: 100%; }
  .name { font-size: 14px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .summary { font-size: 12px; color: var(--text-secondary); line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
  .meta { display: flex; align-items: center; gap: 6px; margin-top: 4px; flex-wrap: wrap; }
  .free { font-size: 10px; font-weight: 600; color: var(--text-muted); text-transform: uppercase; letter-spacing: .04em; }
</style>
