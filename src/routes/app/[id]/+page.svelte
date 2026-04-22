<script lang="ts">
  import type { PageData } from './$types'
  import { iconUrl, installCommand } from '$lib/flathub'
  import SovereigntyBadge from '$lib/SovereigntyBadge.svelte'

  export let data: PageData
  $: app = data.app
  $: sovereignty = data.sovereignty
  $: command = installCommand(app.id)

  let copied = false
  let imgError = false

  async function copyCommand() {
    await navigator.clipboard.writeText(command)
    copied = true
    setTimeout(() => copied = false, 2000)
  }
</script>

<svelte:head>
  <title>{app.name} — Agora Linux App Store</title>
  <meta name="description" content="{app.summary}. Install {app.name} on Linux via Flatpak." />
</svelte:head>

<div class="page">
  <a href="/" class="back">← Back to apps</a>

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
      {#if app.developer_name}<p class="dev">{app.developer_name}</p>{/if}
      <SovereigntyBadge {sovereignty} />
    </div>
  </div>

  <p class="summary">{app.summary}</p>

  {#if sovereignty?.tags.notes}
    <div class="note">{sovereignty.tags.notes}</div>
  {/if}

  <div class="install-section">
    <p class="install-label">Install on Linux</p>
    <div class="install-box">
      <code class="command">{command}</code>
      <button class="copy-btn" class:copied on:click={copyCommand}>
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
    <p class="install-hint">
      Requires <a href="https://flatpak.org/setup/" target="_blank" rel="noreferrer">Flatpak</a> to be installed.
      Run the command in your terminal.
    </p>
  </div>

  {#if app.categories?.length}
    <div class="categories">
      {#each app.categories as cat}
        <a href="/category/{cat}" class="cat-tag">{cat}</a>
      {/each}
    </div>
  {/if}

  {#if app.project_url}
    <a class="project-link" href={app.project_url} target="_blank" rel="noreferrer">
      Visit project website →
    </a>
  {/if}
</div>

<style>
  .page { max-width: 680px; margin: 0 auto; padding: 32px 24px; }

  .back {
    display: inline-block; margin-bottom: 24px;
    font-size: 13px; color: var(--text-secondary); text-decoration: none;
  }
  .back:hover { color: var(--text-primary); }

  .header { display: flex; align-items: flex-start; gap: 20px; margin-bottom: 20px; }

  .icon-wrap {
    width: 80px; height: 80px; border-radius: 16px;
    overflow: hidden; flex-shrink: 0; background: var(--bg-input);
  }
  .icon-wrap img { width: 100%; height: 100%; object-fit: cover; }
  .icon-fallback {
    width: 100%; height: 100%; display: flex; align-items: center;
    justify-content: center; font-size: 32px; font-weight: 700;
    color: var(--text-secondary); background: var(--border);
  }

  .app-meta { display: flex; flex-direction: column; gap: 6px; }
  h1 { font-size: 24px; font-weight: 700; color: var(--text-primary); }
  .dev { font-size: 13px; color: var(--text-secondary); }

  .summary { font-size: 15px; color: var(--text-secondary); line-height: 1.7; margin-bottom: 16px; }

  .note {
    font-size: 13px; color: var(--caution); background: var(--caution-bg);
    border: 1px solid #f59e0b33; border-radius: var(--radius-sm);
    padding: 10px 14px; margin-bottom: 20px;
  }

  .install-section { margin: 24px 0; }
  .install-label { font-size: 12px; font-weight: 600; color: var(--text-muted); text-transform: uppercase; letter-spacing: .06em; margin-bottom: 8px; }

  .install-box {
    display: flex; align-items: center; gap: 0;
    background: var(--bg-input); border: 1px solid var(--border);
    border-radius: var(--radius-sm); overflow: hidden;
  }
  .command {
    flex: 1; padding: 12px 16px; font-family: 'SF Mono', 'Fira Code', monospace;
    font-size: 13px; color: var(--text-primary); user-select: all;
  }
  .copy-btn {
    padding: 12px 16px; background: var(--bg-card); color: var(--text-secondary);
    border: none; border-left: 1px solid var(--border); font-size: 13px;
    cursor: pointer; transition: all 0.15s; white-space: nowrap;
  }
  .copy-btn:hover { color: var(--text-primary); background: var(--bg-card-hover); }
  .copy-btn.copied { color: var(--safe); }

  .install-hint { font-size: 12px; color: var(--text-muted); margin-top: 8px; }
  .install-hint a { color: var(--accent); }

  .categories { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 20px; }
  .cat-tag {
    font-size: 12px; color: var(--text-muted); background: var(--bg-input);
    border: 1px solid var(--border); border-radius: 4px;
    padding: 4px 10px; text-decoration: none; transition: all 0.15s;
  }
  .cat-tag:hover { color: var(--text-primary); border-color: var(--border-hover); }

  .project-link {
    display: inline-block; margin-top: 20px;
    font-size: 13px; color: var(--accent);
  }
</style>
