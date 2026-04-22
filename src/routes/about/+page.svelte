<svelte:head>
  <title>About — Agora Linux App Store</title>
  <meta name="description" content="Agora is a Linux app discovery platform with community privacy ratings. Find GDPR-safe, open-source software." />
</svelte:head>

<div class="page">
  <h1>About Agora</h1>

  <p>Agora is a Linux app discovery platform built for the EU public-sector and privacy-conscious Linux wave. Every app is <strong>community-rated</strong> for GDPR, EU origin, telemetry, and open-source status.</p>

  <h2>Why Agora?</h2>
  <p>Millions of EU government workers are migrating from Windows to Linux in 2026. France, Germany, Denmark, and Switzerland have all announced major migrations. They need a way to discover trusted, privacy-respecting software — not just a package list.</p>

  <h2>Privacy &amp; community ratings</h2>
  <div class="ratings">
    <div class="rating">
      <span class="badge safe">Safe</span>
      <p>Open source, no telemetry, GDPR compliant. Safe to use in EU government environments.</p>
    </div>
    <div class="rating">
      <span class="badge caution">Caution</span>
      <p>Some tags not yet reviewed or minor concerns. Review before deploying in sensitive environments.</p>
    </div>
    <div class="rating">
      <span class="badge risk">Risk</span>
      <p>US cloud dependency, telemetry enabled, or GDPR concerns. Not recommended for EU govt use.</p>
    </div>
    <div class="rating">
      <span class="badge unknown">Not reviewed</span>
      <p>This app hasn't been tagged yet. Contributions welcome on GitHub.</p>
    </div>
  </div>

  <h2>How to install apps</h2>
  <p>Agora uses <a href="https://flatpak.org" target="_blank" rel="noreferrer">Flatpak</a> — a universal Linux app format that works across Ubuntu, Fedora, Debian, and most other distributions. Each app page shows the exact command to copy and run in your terminal.</p>

  <h2>Open source</h2>
  <p>Agora is open source. The privacy tag database is community-maintained. <a href="https://github.com/karmajinx-og/agora" target="_blank" rel="noreferrer">Contribute on GitHub →</a></p>
</div>

<style>
  .page { max-width: 640px; margin: 0 auto; padding: 40px 24px; }
  h1 { font-size: 28px; font-weight: 700; margin-bottom: 16px; color: var(--text-primary); }
  h2 { font-size: 16px; font-weight: 600; margin: 28px 0 10px; color: var(--text-primary); }
  p { font-size: 14px; color: var(--text-secondary); line-height: 1.7; margin-bottom: 12px; }
  a { color: var(--accent); }

  .ratings { display: flex; flex-direction: column; gap: 12px; margin: 12px 0; }
  .rating { display: flex; align-items: flex-start; gap: 12px; }

  .badge {
    display: inline-flex; align-items: center; flex-shrink: 0;
    font-size: 11px; font-weight: 600; padding: 3px 8px;
    border-radius: 20px; text-transform: uppercase; letter-spacing: .04em;
    margin-top: 2px;
  }
  .safe { background: var(--safe-bg); color: var(--safe); }
  .caution { background: var(--caution-bg); color: var(--caution); }
  .risk { background: var(--risk-bg); color: var(--risk); }
  .unknown { background: var(--unknown-bg); color: var(--unknown); }
</style>
