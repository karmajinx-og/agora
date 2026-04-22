<script lang="ts">
  import '../app.css'
</script>

<div class="site">
  <header class="nav">
    <div class="nav-inner">
      <a href="/" class="logo">
        <span class="logo-icon">A</span>
        <span class="logo-name">Agora</span>
        <span class="logo-tag">Linux App Store</span>
      </a>
      <nav class="nav-links">
        <a href="/category/Office">Office</a>
        <a href="/category/Development">Dev tools</a>
        <a href="/category/Graphics">Graphics</a>
        <a href="/category/Network">Network</a>
        <a href="/about">About</a>
      </nav>
    </div>
  </header>

  <main class="main">
    <slot />
  </main>

  <footer class="footer">
    <div class="footer-inner">
      <span>Agora — Linux App Store</span>
      <span class="sep">·</span>
      <span>Community-rated apps for EU Linux users</span>
      <span class="sep">·</span>
      <a href="https://github.com/karmajinx-og/agora" target="_blank" rel="noreferrer">GitHub</a>
      <span class="sep">·</span>
      <a href="https://flathub.org" target="_blank" rel="noreferrer">Powered by Flathub</a>
    </div>
  </footer>
</div>

<style>
  .site { display: flex; flex-direction: column; min-height: 100vh; }
  .nav { background: var(--bg-card); border-bottom: 1px solid var(--border); position: sticky; top: 0; z-index: 50; }
  .nav-inner { max-width: var(--max-width); margin: 0 auto; padding: 0 24px; height: 56px; display: flex; align-items: center; justify-content: space-between; }
  .logo { display: flex; align-items: center; gap: 8px; text-decoration: none; }
  .logo-icon { width: 28px; height: 28px; background: var(--accent); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 800; color: #fff; flex-shrink: 0; }
  .logo-name { font-size: 16px; font-weight: 700; color: var(--text-primary); }
  .logo-tag { font-size: 11px; color: var(--text-muted); padding: 2px 6px; background: var(--bg-input); border-radius: 4px; border: 1px solid var(--border); }
  .nav-links { display: flex; align-items: center; gap: 4px; }
  .nav-links a { font-size: 13px; color: var(--text-secondary); padding: 6px 10px; border-radius: var(--radius-sm); transition: all 0.1s; text-decoration: none; }
  .nav-links a:hover { background: var(--bg-card-hover); color: var(--text-primary); }
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
