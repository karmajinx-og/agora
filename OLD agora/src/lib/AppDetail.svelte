<script lang="ts">
  import type { FlathubApp } from '$lib/flathub'
  import { iconUrl } from '$lib/flathub'
  import { getSovereignty } from '$lib/sovereignty'
  import { installFlatpak, isAppInstalled, type InstallStatus } from '$lib/installer'
  import SovereigntyBadge from '$lib/SovereigntyBadge.svelte'
  import { createEventDispatcher, onMount } from 'svelte'

  export let app: FlathubApp
  const dispatch = createEventDispatcher()
  const sovereignty = getSovereignty(app.id)

  let installStatus: InstallStatus = 'idle'
  let installMessage = ''
  let alreadyInstalled = false
  let checkingInstalled = true
  let imgError = false

  onMount(async () => {
    alreadyInstalled = await isAppInstalled(app.id)
    checkingInstalled = false
  })

  async function handleInstall() {
    installStatus = 'installing'
    installMessage = ''
    const result = await installFlatpak(app.id)
    installStatus = result.success ? 'success' : 'error'
    installMessage = result.message
    if (result.success) alreadyInstalled = true
  }

  function onKey(e: KeyboardEvent) {
    if (e.key === 'Escape') dispatch('close')
  }

  onMount(async () => {
    alreadyInstalled = await isAppInstalled(app.id)
    checkingInstalled = false
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })</script>

<div class="overlay" on:click|self={() => dispatch('close')} role="dialog" aria-modal="true">
  <div class="panel">
    <button class="close" on:click={() => dispatch('close')} aria-label="Close">✕</button>

    <div class="header">
      <div class="icon-wrap">
        {#if !imgError}
          <img src={iconUrl(app)} alt={app.name} on:error={() => imgError = true} />
        {:else}
          <div class="icon-fallback">{app.name[0]}</div>
        {/if}
      </div>
      <div class="app-meta">
        <h1>{app.name}</h1>
        {#if app.developer_name}
          <p class="dev">{app.developer_name}</p>
        {/if}
        <SovereigntyBadge {sovereignty} />
      </div>
    </div>

    <div class="summary-text">{app.summary}</div>

    {#if sovereignty?.tags.notes}
      <div class="note">{sovereignty.tags.notes}</div>
    {/if}

    <div class="install-row">
      {#if checkingInstalled}
        <button class="btn installing" disabled>Checking…</button>
      {:else if alreadyInstalled}
        <button class="btn installed" disabled>Already installed</button>
      {:else if installStatus === 'installing'}
        <button class="btn installing" disabled>Installing…</button>
      {:else if installStatus === 'success'}
        <button class="btn installed" disabled>Installed</button>
      {:else}
        <button class="btn primary" on:click={handleInstall}>
          Install via Flatpak
        </button>
      {/if}

      {#if app.project_url}
        <a class="btn secondary" href={app.project_url} target="_blank" rel="noreferrer">
          Project site
        </a>
      {/if}
    </div>

    {#if installMessage}
      <div class="install-msg" class:error={installStatus === 'error'}>
        {installMessage}
      </div>
    {/if}

    {#if app.categories?.length}
      <div class="categories">
        {#each app.categories as cat}
          <span class="cat-tag">{cat}</span>
        {/each}
      </div>
    {/if}
  </div>
</div>

<style>
  .overlay {
    position: fixed; inset: 0;
    background: rgba(0,0,0,0.7);
    display: flex; align-items: center; justify-content: center;
    z-index: 100;
    padding: 24px;
  }

  .panel {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 28px;
    max-width: 520px;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-height: 90vh;
    overflow-y: auto;
  }

  .close {
    position: absolute; top: 16px; right: 16px;
    background: var(--bg-input);
    color: var(--text-secondary);
    border: 1px solid var(--border);
    border-radius: 50%;
    width: 28px; height: 28px;
    font-size: 12px;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
  }

  .close:hover { color: var(--text-primary); border-color: var(--border-hover); }

  .header { display: flex; align-items: flex-start; gap: 16px; }

  .icon-wrap {
    width: 72px; height: 72px;
    border-radius: 14px; overflow: hidden; flex-shrink: 0;
    background: var(--bg-input);
  }

  .icon-wrap img { width: 100%; height: 100%; object-fit: cover; }

  .icon-fallback {
    width: 100%; height: 100%;
    display: flex; align-items: center; justify-content: center;
    font-size: 28px; font-weight: 700; color: var(--text-secondary);
    background: var(--border);
  }

  .app-meta { display: flex; flex-direction: column; gap: 4px; flex: 1; }

  h1 { font-size: 20px; font-weight: 700; color: var(--text-primary); }

  .dev { font-size: 13px; color: var(--text-secondary); }

  .summary-text { font-size: 14px; color: var(--text-secondary); line-height: 1.6; }

  .note {
    font-size: 12px; color: var(--caution);
    background: var(--caution-bg);
    border: 1px solid #f59e0b33;
    border-radius: var(--radius-sm);
    padding: 8px 12px;
  }

  .install-row { display: flex; gap: 10px; flex-wrap: wrap; }

  .btn {
    padding: 10px 20px; border-radius: var(--radius-sm);
    font-size: 14px; font-weight: 600; cursor: pointer;
    transition: all 0.15s;
  }

  .btn.primary {
    background: var(--accent); color: #fff; border: none;
  }
  .btn.primary:hover { background: var(--accent-hover); }

  .btn.secondary {
    background: transparent;
    color: var(--text-secondary);
    border: 1px solid var(--border);
    text-decoration: none; display: inline-flex; align-items: center;
  }
  .btn.secondary:hover { border-color: var(--border-hover); color: var(--text-primary); }

  .btn.installed { background: var(--safe-bg); color: var(--safe); border: 1px solid #22c55e44; }
  .btn.installing { background: var(--bg-input); color: var(--text-muted); border: 1px solid var(--border); }
  .btn:disabled { cursor: default; }

  .install-msg {
    font-size: 13px; color: var(--safe);
    background: var(--safe-bg); border: 1px solid #22c55e33;
    border-radius: var(--radius-sm); padding: 8px 12px;
  }
  .install-msg.error { color: var(--risk); background: var(--risk-bg); border-color: #ef444433; }

  .categories { display: flex; flex-wrap: wrap; gap: 6px; }

  .cat-tag {
    font-size: 11px; color: var(--text-muted);
    background: var(--bg-input); border: 1px solid var(--border);
    border-radius: 4px; padding: 2px 8px;
  }
</style>
