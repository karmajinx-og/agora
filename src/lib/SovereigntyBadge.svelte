<script lang="ts">
  import type { AppSovereignty } from '$lib/sovereignty'
  export let sovereignty: AppSovereignty | null = null
  export let compact = false
</script>

{#if sovereignty}
  <div class="badge level-{sovereignty.level}" class:compact>
    <span class="dot"></span>
    {#if sovereignty.level === 'safe'}
      {compact ? 'Safe' : 'Sovereignty safe'}
    {:else if sovereignty.level === 'caution'}
      {compact ? 'Caution' : 'Review advised'}
    {:else if sovereignty.level === 'risk'}
      {compact ? 'Risk' : 'Sovereignty risk'}
    {:else}
      {compact ? '?' : 'Not reviewed'}
    {/if}
  </div>

  {#if !compact && sovereignty.tags}
    <div class="tags">
      {#if sovereignty.tags.eu_origin !== null}
        <span class="tag" class:on={sovereignty.tags.eu_origin} class:off={!sovereignty.tags.eu_origin}>EU origin</span>
      {/if}
      {#if sovereignty.tags.gdpr_safe !== null}
        <span class="tag" class:on={sovereignty.tags.gdpr_safe} class:off={!sovereignty.tags.gdpr_safe}>GDPR safe</span>
      {/if}
      {#if sovereignty.tags.no_telemetry !== null}
        <span class="tag" class:on={sovereignty.tags.no_telemetry} class:off={!sovereignty.tags.no_telemetry}>No telemetry</span>
      {/if}
      {#if sovereignty.tags.open_source !== null}
        <span class="tag" class:on={sovereignty.tags.open_source} class:off={!sovereignty.tags.open_source}>Open source</span>
      {/if}
      {#if sovereignty.tags.us_cloud_dependency}
        <span class="tag off">US cloud</span>
      {/if}
    </div>
  {/if}
{:else if !compact}
  <div class="badge level-unknown"><span class="dot"></span>Not reviewed</div>
{/if}

<style>
  .badge {
    display: inline-flex; align-items: center; gap: 6px;
    font-size: 11px; font-weight: 600; letter-spacing: .04em;
    padding: 3px 8px; border-radius: 20px; text-transform: uppercase;
  }
  .badge.compact { font-size: 10px; padding: 2px 6px; }
  .dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
  .level-safe { background: var(--safe-bg); color: var(--safe); }
  .level-safe .dot { background: var(--safe); }
  .level-caution { background: var(--caution-bg); color: var(--caution); }
  .level-caution .dot { background: var(--caution); }
  .level-risk { background: var(--risk-bg); color: var(--risk); }
  .level-risk .dot { background: var(--risk); }
  .level-unknown { background: var(--unknown-bg); color: var(--unknown); }
  .level-unknown .dot { background: var(--unknown); }
  .tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px; }
  .tag { font-size: 11px; padding: 2px 8px; border-radius: 4px; font-weight: 500; }
  .tag.on { background: var(--safe-bg); color: var(--safe); border: 1px solid #22c55e33; }
  .tag.off { background: var(--risk-bg); color: var(--risk); border: 1px solid #ef444433; }
</style>
