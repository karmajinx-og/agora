<script lang="ts">
  import { getUi, locale } from '$lib/i18n'
  $: ui = getUi($locale)
</script>

<svelte:head>
  <title>{ui.updates_title}</title>
  <meta name="description" content={ui.meta_updates_description} />
  <meta property="og:title" content={ui.updates_title} />
  <meta property="og:description" content={ui.meta_updates_description} />
</svelte:head>

<div class="page">
  <h1>{ui.updates_h1}</h1>
  <p class="lede">
    New features, copy changes, and how to help <strong>improve privacy labels</strong> for apps on the list. Bigger
    product news will land here and on
    <a href="https://github.com/karmajinx-og/agora/discussions" target="_blank" rel="noreferrer">GitHub Discussions</a>.
  </p>

  {#if $locale !== 'en'}
    <div class="callout translate-note" role="status">
      <p>{ui.updates_stays_en}</p>
    </div>
  {/if}

  <article class="entry" aria-labelledby="entry-2026-04">
    <h2 id="entry-2026-04">April 2026</h2>
    <ul class="plain-list">
      <li>
        <strong>Home &amp; SEO:</strong> Per-locale meta descriptions and Open Graph text on key routes (home, about, categories, this
        page).
      </li>
      <li>
        <strong>Positioning:</strong> Voice C copy on the home page — apps are described as <strong>labelled for privacy</strong>, with
        filters and short notes, not as “ratings” from the community.
      </li>
      <li>
        <strong>Community:</strong> A clear CTA in the site footer to
        <a href="https://github.com/karmajinx-og/agora/discussions" target="_blank" rel="noreferrer">Discussions on GitHub</a> — suggest
        or refine labels, ask questions, or help translate.
      </li>
    </ul>
  </article>
</div>

<style>
  .page { max-width: 640px; margin: 0 auto; padding: 40px 24px; }
  h1 { font-size: 28px; font-weight: 700; margin-bottom: 12px; color: var(--text-primary); }
  .lede { font-size: 16px; color: var(--text-secondary); line-height: 1.65; margin-bottom: 20px; }
  h2 { font-size: 17px; font-weight: 600; margin: 32px 0 12px; color: var(--text-primary); }
  p, .plain-list { font-size: 14px; color: var(--text-secondary); line-height: 1.7; }
  a { color: var(--accent); }
  .plain-list { margin: 8px 0 0; padding: 0 0 0 1.1em; }
  .plain-list li { margin-bottom: 10px; }
  .plain-list strong { color: var(--text-primary); }
  .callout { background: var(--bg-input); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 12px 14px; margin: 0 0 20px; }
  .callout p { font-size: 13px; margin: 0; }
  .translate-note p { font-size: 13px; }
  .entry { margin-top: 8px; }
</style>
