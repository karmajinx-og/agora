<script lang="ts">
  import { browser } from '$app/environment'
  import { page } from '$app/stores'
  import type { LayoutData } from './$types'
  import '../app.css'
  import { locale, getUi, type Locale } from '$lib/i18n'
  import LanguageSelect from '$lib/i18n/LanguageSelect.svelte'

  export let data: LayoutData
  $: if (data?.locale) locale.set(data.locale as Locale)
  $: ui = getUi($locale)
  $: if (browser) document.documentElement.lang = $locale
</script>

<div class="site">
  <header class="nav">
    <div class="nav-inner">
      <a href="/" class="logo" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
        <span class="logo-icon" aria-hidden="true">A</span>
        <span class="logo-name">Agora</span>
        <span class="logo-tag">{ui.logo_tag}</span>
      </a>
      <div class="nav-right">
        <nav class="nav-links" aria-label="Primary">
          <a
            href="/category/Office"
            aria-current={$page.url.pathname === '/category/Office' ? 'page' : undefined}>{ui.nav_office}</a>
          <a
            href="/category/Development"
            aria-current={$page.url.pathname === '/category/Development' ? 'page' : undefined}>{ui.nav_dev}</a>
          <a
            href="/category/Graphics"
            aria-current={$page.url.pathname === '/category/Graphics' ? 'page' : undefined}>{ui.nav_graphics}</a>
          <a
            href="/category/Network"
            aria-current={$page.url.pathname === '/category/Network' ? 'page' : undefined}>{ui.nav_network}</a>
          <a href="/about" aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>{ui.nav_how}</a>
          <a href="/updates" aria-current={$page.url.pathname === '/updates' ? 'page' : undefined}>{ui.nav_updates}</a>
        </nav>
        <div class="nav-lang">
          <LanguageSelect />
        </div>
      </div>
    </div>
  </header>

  <main id="main-content" class="main" tabindex="-1">
    <slot />
  </main>

  <footer class="footer">
    <div class="footer-inner">
      <span>{ui.foot_line1}</span>
      <span class="sep">·</span>
      <a href="/about#new-to-linux">{ui.foot_new}</a>
      <span class="sep">·</span>
      <span>{ui.foot_sub}</span>
      <span class="sep">·</span>
      <a href="https://github.com/karmajinx-og/agora" target="_blank" rel="noreferrer">{ui.foot_github}</a>
      <span class="sep">·</span>
      <a href="/updates">{ui.nav_updates}</a>
      <span class="sep">·</span>
      <a
        href="https://github.com/karmajinx-og/agora/discussions"
        target="_blank"
        rel="noreferrer">{ui.contribute_cta}</a>
      <span class="sep">·</span>
      <a href="https://flathub.org" target="_blank" rel="noreferrer">{ui.foot_flathub}</a>
    </div>
  </footer>
</div>

<style>
  .site { display: flex; flex-direction: column; min-height: 100vh; }
  .nav { background: var(--bg-card); border-bottom: 1px solid var(--border); position: sticky; top: 0; z-index: 50; }
  .nav-inner { max-width: var(--max-width); margin: 0 auto; padding: 0 24px; min-height: 56px; display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; }
  .nav-right { display: flex; align-items: center; gap: 12px; }
  .nav-lang { display: flex; align-items: center; }
  .logo { display: flex; align-items: center; gap: 8px; text-decoration: none; }
  .logo-icon { width: 28px; height: 28px; background: var(--accent); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 800; color: #fff; flex-shrink: 0; }
  .logo-name { font-size: 16px; font-weight: 700; color: var(--text-primary); }
  .logo-tag { font-size: 11px; color: var(--text-muted); padding: 2px 6px; background: var(--bg-input); border-radius: 4px; border: 1px solid var(--border); }
  .nav-links { display: flex; align-items: center; gap: 4px; }
  .nav-links a { font-size: 13px; color: var(--text-secondary); padding: 6px 10px; border-radius: var(--radius-sm); transition: all 0.1s; text-decoration: none; }
  .nav-links a:hover { background: var(--bg-card-hover); color: var(--text-primary); }
  .nav-links a[aria-current='page'] {
    background: rgba(107, 136, 248, 0.14);
    color: var(--accent);
    font-weight: 600;
  }
  .main { flex: 1; max-width: var(--max-width); margin: 0 auto; width: 100%; padding: 24px; }
  .footer { border-top: 1px solid var(--border); padding: 20px 24px; margin-top: 40px; }
  .footer-inner { max-width: var(--max-width); margin: 0 auto; display: flex; align-items: center; gap: 8px; font-size: 12px; color: var(--text-muted); flex-wrap: wrap; }
  .sep { color: var(--border-hover); }
  .footer-inner a { color: var(--text-muted); }
  .footer-inner a:hover { color: var(--text-secondary); }

  @media (max-width: 640px) {
    .logo-tag { display: none; }
    .nav-links { display: none; }
  }
</style>
