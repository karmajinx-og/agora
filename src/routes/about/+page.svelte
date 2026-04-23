<script lang="ts">
  import { locale, getUi } from '$lib/i18n'
  $: ui = getUi($locale)
</script>

<svelte:head>
  <title>{ui.about_title}</title>
  <meta name="description" content={ui.meta_about_description} />
</svelte:head>

<div class="page">
  <h1>How Agora works</h1>
  <p class="lede">
    This page is for people who are <strong>new to Linux</strong> or who don’t work in IT. You can use the rest of the site without reading
    this — but if the words “Flatpak” or “telemetry” are unfamiliar, start here.
  </p>

  {#if $locale !== 'en'}
    <div class="callout translate-note" role="status">
      <p>{ui.about_stays_en}</p>
    </div>
  {/if}

  <nav class="toc" aria-label="On this page">
    <span class="toc-title">On this page</span>
    <a href="#new-to-linux">New to Linux?</a>
    <a href="#what-agora-does">What Agora is (and isn’t)</a>
    <a href="#filters-explained">The three list filters</a>
    <a href="#badges">What the colour badges mean</a>
    <a href="#glossary">Words we use (plain English)</a>
    <a href="#install-help">How you actually install an app</a>
    <a href="#open-source">Open source &amp; improve the list</a>
  </nav>

  <h2 id="new-to-linux">New to Linux?</h2>
  <p>
    <strong>Linux</strong> is an operating system, like Windows or macOS, but it’s free and comes in many “flavours” (Ubuntu, Fedora, and others).
    <strong>Apps</strong> here are <strong>programs you install on Linux</strong> — browsers, office tools, chat apps, and so on.
  </p>
  <p>
    This website does <strong>not</strong> install software for you automatically. It helps you <strong>choose</strong> an app, then
    <strong>copy a short command</strong> you (or a helper) can run on your computer. That’s normal on Linux, even if it feels new at first.
  </p>

  <h2 id="what-agora-does">What Agora is (and isn’t)</h2>
  <p>
    <strong>Agora is a guide</strong> on top of <a href="https://flathub.org" target="_blank" rel="noreferrer">Flathub</a> — a big public catalogue
    of Linux applications. We add a <strong>privacy lens</strong>: short notes and tags from our project (contributions welcome on GitHub), aimed at people who care where data goes
    and whether software is open and trustworthy. That’s especially relevant as more schools, governments, and businesses in Europe move to Linux.
  </p>
  <div class="callout" role="note">
    <p><strong>Important:</strong> We are <strong>not</strong> an official government service, <strong>not</strong> antivirus, and <strong>not</strong> a
    guarantee that an app is “approved” for your workplace. We’re a volunteer-style project. When in doubt, follow your IT department’s rules.</p>
  </div>

  <h2 id="filters-explained">The three list filters (Privacy filter)</h2>
  <p>On the home page you can narrow the <strong>list</strong> of apps. That does not change how safe an app is on your machine — it only
    <strong>changes which rows we show you</strong>, using our small, growing list of community notes.</p>
  <ul class="plain-list">
    <li>
      <strong>All apps</strong> — Show everything in the list (same as no filter). You may still see small privacy badges on each card
      <em>if</em> we have added notes for that app.
    </li>
    <li>
      <strong>Hide strongest-warning apps</strong> — <em>Hides</em> only the apps we gave our <strong>strongest</strong> privacy
      warnings to (for example, serious cloud or data-flow concerns we wrote down in plain terms). Apps we <strong>have not written up
      yet</strong> <em>still appear</em>, because “no note from us” means “unknown to us” — not “OK” and not “bad”, just “we have not
      checked yet”.
    </li>
    <li>
      <strong>Only our “all clear” list</strong> — <em>Only</em> shows apps we have <strong>fully</strong> checked and marked
      <strong>“all clear”</strong> for our criteria. That is a <strong>short, strict list</strong> that will grow as more apps are
      reviewed. It is <strong>not</strong> a promise that the software is perfect for every person or organisation.
    </li>
  </ul>

  <h2 id="badges">What the colour badges mean</h2>
  <p>Badges on app cards and app pages are <strong>short summaries</strong> of our community notes — things like open source, telemetry, and
    where data may go. They help you <strong>compare at a glance</strong>; the details are still yours to check.</p>
  <p>
    <strong>Who sets “Safe”, “Caution”, and “Risk” here?</strong> These are <strong>maintainer-curated labels from Agora</strong> (open to
    community contribution on GitHub) — not a
    government body, not your IT department, and not an official grade from Flathub. We write them in everyday language; they are a guide, not a
    legal certificate.
  </p>
  <div class="ratings">
    <div class="rating">
      <span class="badge safe">Safe</span>
      <p>We’ve tagged the app to match our “safe” rules in the database (e.g. open and sensible for privacy in our view). <strong>Not a legal
        certificate</strong> — a curated label.</p>
    </div>
    <div class="rating">
      <span class="badge caution">Caution</span>
      <p>Some information is missing, or there are <strong>mixed</strong> signals. Worth a second look before use in a sensitive environment.</p>
    </div>
    <div class="rating">
      <span class="badge risk">Risk</span>
      <p>We’ve flagged <strong>serious concern</strong> for our audience (e.g. cloud or data issues we want you to know about). Not “malware” by default
        — it’s a <strong>policy / privacy</strong> warning from us.</p>
    </div>
    <div class="rating">
      <span class="badge unknown">Not reviewed</span>
      <p>We don’t have a full tag entry for this app yet. The app can still be popular and fine — we simply haven’t written it up.</p>
    </div>
  </div>

  <h2 id="glossary">Words we use (plain English)</h2>
  <p>Short definitions — the kind of thing IT people forget to explain.</p>
  <dl class="glossary">
    <div class="gloss">
      <dt>Linux</dt>
      <dd>An <strong>operating system</strong> (the main software that runs the computer) — like Windows or macOS, but often free. Ubuntu and Fedora are examples.</dd>
    </div>
    <div class="gloss">
      <dt>App / application</dt>
      <dd>A <strong>program you install</strong>: browser, chat, game, word processor, and so on.</dd>
    </div>
    <div class="gloss">
      <dt>Flatpak</dt>
      <dd>A <strong>common way to install apps on Linux</strong> so the same app can work on many Linux “flavours”. We show a <code>flatpak</code> line you can copy. Flathub is the public shop window that hosts many of these apps.</dd>
    </div>
    <div class="gloss">
      <dt>Terminal</dt>
      <dd>A <strong>text window</strong> where you type commands. On Linux it’s a normal way to install software, even if you’re not a programmer. Copy, paste, press Enter, follow prompts — or ask someone to help the first time.</dd>
    </div>
    <div class="gloss">
      <dt>Open source</dt>
      <dd>The <strong>recipe of the program</strong> (source code) is public and can be checked by the community. It does <strong>not</strong> automatically mean “100% private” or “no mistakes” — it means more transparency about how the software is built.</dd>
    </div>
    <div class="gloss">
      <dt>Telemetry</dt>
      <dd><strong>Usage or health data</strong> the app may send to its maker or servers — for example crash reports, version checks, or optional analytics. We care whether that’s off by default or easy to turn off.</dd>
    </div>
    <div class="gloss">
      <dt>GDPR (EU data rules)</dt>
      <dd>Strict <strong>EU law</strong> about how personal data is collected and used. We mention it because schools, hospitals, and offices often need tools that don’t send personal data the wrong way. Agora is <strong>not</strong> a legal audit — we use simple flags and notes.</dd>
    </div>
    <div class="gloss">
      <dt>“EU origin” (our tag)</dt>
      <dd>A rough label for <strong>where the project is mainly made or run</strong> from (for example, team in the EU). It’s a practical hint for buyers and IT buyers, <strong>not</strong> an official “made in the EU” certificate.</dd>
    </div>
    <div class="gloss">
      <dt>US cloud / “risk” in our list</dt>
      <dd>We may flag <strong>strong cloud or data location concerns</strong> (for example data habitually on US company servers) when that matters for our audience. It’s a <strong>policy-style warning</strong>, not the same as a virus.</dd>
    </div>
  </dl>

  <h2 id="install-help">How you actually install an app</h2>
  <p>
    Agora uses <a href="https://flatpak.org" target="_blank" rel="noreferrer">Flatpak</a> — a common way to install the <strong>same app</strong> on
    many Linux distributions. Each app’s page has a <strong>command</strong> you can copy, for example: <code>flatpak install flathub com.example.App</code>.
  </p>
  <ol class="steps">
    <li>Open a <strong>terminal</strong> (an app on your computer where you type text commands — often called “Terminal” or “Console”).</li>
    <li>Paste the command from Agora and press Enter.</li>
    <li>Follow any prompts. If you’re on a work machine, <strong>ask IT first</strong> — they may have their own way to install software.</li>
  </ol>
  <p>If the word “terminal” is daunting, ask a friend, family member, or your support desk to help the first time. It gets easier quickly.</p>

  <h2 id="open-source">Open source &amp; improve the list</h2>
  <p>
    Agora and its tag data are <strong>open to contribution</strong>. If you spot an error or want to help tag more apps, you’re welcome to join on
    <a href="https://github.com/karmajinx-og/agora" target="_blank" rel="noreferrer">GitHub</a>. Many teams moving to Linux will also benefit as the list grows.
  </p>
</div>

<style>
  .page { max-width: 640px; margin: 0 auto; padding: 40px 24px; }
  h1 { font-size: 28px; font-weight: 700; margin-bottom: 12px; color: var(--text-primary); }
  .lede { font-size: 16px; color: var(--text-secondary); line-height: 1.65; margin-bottom: 20px; }
  h2 { font-size: 17px; font-weight: 600; margin: 32px 0 12px; color: var(--text-primary); scroll-margin-top: 72px; }
  p { font-size: 14px; color: var(--text-secondary); line-height: 1.7; margin-bottom: 12px; }
  a { color: var(--accent); }
  code {
    font-size: 12px; background: var(--bg-input); border: 1px solid var(--border);
    padding: 2px 6px; border-radius: 4px; color: var(--text-primary);
  }

  .toc {
    display: flex; flex-wrap: wrap; align-items: baseline; gap: 8px 12px;
    padding: 14px 16px; background: var(--bg-card); border: 1px solid var(--border);
    border-radius: var(--radius); margin: 0 0 8px; font-size: 13px;
  }
  .toc-title { font-weight: 600; color: var(--text-primary); width: 100%; margin-bottom: 4px; }
  .toc a { text-decoration: none; color: var(--text-secondary); }
  .toc a:hover { color: var(--accent); text-decoration: underline; }

  .callout { background: var(--bg-input); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 12px 14px; margin: 12px 0 0; }
  .callout p { font-size: 13px; margin: 0; }
  .translate-note { margin-bottom: 16px; }
  .translate-note p { font-size: 13px; }

  .glossary { margin: 8px 0 0; }
  .gloss { margin: 0 0 16px; }
  .gloss dt { font-size: 14px; font-weight: 600; color: var(--text-primary); margin: 0 0 4px; }
  .gloss dd { font-size: 14px; color: var(--text-secondary); line-height: 1.65; margin: 0; }

  .plain-list { margin: 8px 0 0; padding: 0 0 0 1.1em; color: var(--text-secondary); font-size: 14px; line-height: 1.65; }
  .plain-list li { margin-bottom: 10px; }
  .plain-list strong { color: var(--text-primary); }

  .steps { margin: 8px 0 12px; padding: 0 0 0 1.1em; color: var(--text-secondary); font-size: 14px; line-height: 1.65; }
  .steps li { margin-bottom: 8px; }

  .ratings { display: flex; flex-direction: column; gap: 12px; margin: 12px 0; }
  .rating { display: flex; align-items: flex-start; gap: 12px; }
  .rating p { margin: 0; }

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
