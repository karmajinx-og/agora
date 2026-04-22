# AGORA — Main Context

**Project:** Agora Linux App Store
**Status:** Phase 1 scaffold complete — audit done — SSH blocked — pre-fix
**Last updated:** 2026-04-19 (Session 4)
**Dev machine:** MacBook Air M4 — `rowelsardea` — `192.168.1.103`
**Test device:** Raspberry Pi 5 (4GB RAM) — `rspi` — `192.168.1.109`
**Pi SSH username:** rspi
**Project folder:** `/Users/rowelsardea/DEVELOPER/AGORA Linux/`
**Notion page:** https://www.notion.so/346b26705c4d81e49286e38f63dac0c9
**Domains purchased:** agoralinux.app / agoralinux.org / agoralinux.io ✅

---

## What this project is

Agora is a dual-surface Linux app discovery platform:

1. **Tauri desktop app** — native Linux app store with one-click Flatpak install (power user mode)
2. **SvelteKit web app** — browser-based app discovery for everyone, no install required

Every app is tagged for GDPR compliance, EU origin, open-source status, and telemetry behaviour.
The sovereignty tag database is the core differentiator — not the UI.
No backend. No user accounts. No community features in v1.

**Name:** Agora — Greek public square. Open, community-driven, European cultural roots.
**Primary domain:** agoralinux.app
**Target users:** EU government IT admins, Windows migrants to Linux, privacy-conscious developers.

---

## Strategic direction

Desktop + Web, web first.
- Web (SvelteKit) = primary discovery surface, any browser, any OS
- Desktop (Tauri) = power-user companion, one-click Flatpak install
- Same Svelte components, sovereignty data, Flathub API — zero duplication
- Web shows copy-paste install command; desktop triggers install natively

---

## Tech stack

| Layer | Choice | Reason |
|---|---|---|
| Desktop | Tauri v2 | ~5MB binary, Rust, Linux-native |
| Web | SvelteKit 2 + Svelte 5 | Best SEO, smallest bundles, reuses existing Svelte code |
| Frontend | Svelte + TypeScript | Same for both surfaces |
| App source | Flathub API v2 | Free catalogue, aarch64 confirmed |
| Tag DB | Static JSON bundled | No backend, no ops burden |
| Hosting | Cloudflare Pages | Free, EU CDN, native SvelteKit adapter |
| Domain | agoralinux.app (.org .io also owned) | All 3 purchased ✅ |

---

## PI 5 SSH ISSUE — unresolved, pick up here next session

Ubuntu 24.04 is running on the Pi. SSH is not working yet.

**What was tried:**
- `ssh rspi@192.168.1.109` from Mac → `Connection refused`
- `sudo systemctl enable ssh --now` on Pi → `service does not exist`
- `sudo systemctl enable sshd --now` on Pi → `service does not exist`
- `sudo apt install openssh-server -y` → `failed to fetch` (DNS issue)
- `echo "nameserver 8.8.8.8" | sudo tee /etc/resolv.conf` → user couldn't type `|` pipe character
- Pi IS connected to network (ethernet)
- Problem: DNS not resolving on first boot of Ubuntu 24.04

**Root cause:** Ubuntu 24.04 fresh install often has DNS not configured on first boot, blocking apt. openssh-server needs to be installed via apt before SSH service exists.

**Fix to try next session (pick ONE):**

Option A — Type the DNS fix properly on the Pi keyboard:
```bash
echo "nameserver 8.8.8.8" | sudo tee /etc/resolv.conf
sudo apt install openssh-server -y
sudo systemctl enable ssh --now
```
Note: `|` pipe = Shift + \ key

Option B — Use Ubuntu desktop GUI to set DNS then install SSH:
1. Open Settings → Network → gear icon on connection → IPv4
2. Set DNS to 8.8.8.8 manually
3. Apply, then retry: `sudo apt install openssh-server -y`

Option C — Use Raspberry Pi Imager to re-flash with SSH pre-enabled:
1. Open Raspberry Pi Imager on Mac
2. Click gear/settings icon before writing
3. Enable SSH, set username: rspi, set password
4. Re-flash — SSH will work on first boot without any commands

Option C is the most reliable for Ubuntu on Pi.

**Once SSH works, from Mac:**
```bash
ssh rspi@192.168.1.109
```

**Then run bootstrap:**
```bash
scp '/Users/rowelsardea/DEVELOPER/AGORA Linux/agora-pi-setup.sh' rspi@192.168.1.109:~/
ssh rspi@192.168.1.109 'bash agora-pi-setup.sh'
```

---

## AUDIT RESULTS — 17 issues, ALL UNFIXED

### 🔴 Critical (3) — will not compile

- **C1** Cargo.toml: Wrong Tauri v2 feature flags — `shell-execute`/`shell-open` are v1
  Fix: `tauri = { version = "2.0.0", features = [] }`
- **C2** tsconfig.json: `@tsconfig/svelte` not in devDependencies
  Fix: Add `"@tsconfig/svelte": "^5.0.0"` to devDependencies in package.json
- **C3** src-tauri/icons/: Empty — no PNG files
  Fix: `cargo tauri icon` with any 1024px image, or ImageMagick placeholders

### 🟠 High (5) — broken at runtime

- **H1** flathub.ts: All 3 API endpoints wrong
  Fix: `/popular`, `/search?q=`, `/apps/category/X`
- **H2** App.svelte: Logo shows "S" / "SovereignStore"
  Fix: Change to "A" / "Agora"
- **H3** tauri.conf.json: productName/identifier/title say SovereignStore
  Fix: Update to Agora / au.com.audiovisuality.agora
- **H4** Cargo.toml + main.rs: sovereign-store / sovereign_store_lib names
  Fix: rename to agora / agora_lib consistently
- **H5** sovereignty.ts: deriveSovereigntyLevel dead branch
  Fix: remove `tags.eu_origin ? 'safe' : 'safe'` ternary

### 🟡 Medium (4)

- **M1** AppDetail.svelte: No loading state during isAppInstalled check
- **M2** App.svelte: no-risk filter passes null/unreviewed apps
- **M3** flathub.ts: iconUrl CDN path breaks for most apps
- **M4** AppDetail.svelte: Escape key doesn't close modal

### 🟢 Low + Info (5)

- **L1** fetchAppDetail defined but never called
- **L2** im.riot.Riot — wrong Flatpak ID for Element
- **L3** org.signal.Signal — not on Flathub
- **I1** Missing --user flag on flatpak install
- **I2** -apple-system font redundant on Linux

---

## FULL TASK LIST — pick up from here

### BLOCK 1 — File setup on Mac (not done)
- [ ] 1.1 Unzip SovereignStore.zip into `/Users/rowelsardea/DEVELOPER/AGORA Linux/`
- [ ] 1.2 Copy MAIN-CONTEXT.md, RECALL.md, agora-pi-setup.sh into folder
- [ ] 1.3 Run rename sed commands (SovereignStore → Agora in all source files)
- [ ] 1.4 Git init + first commit

### BLOCK 2 — Apply all 17 audit fixes (Mac)
- [ ] 2.1 C1: Fix Cargo.toml Tauri feature flags
- [ ] 2.2 C2: Add @tsconfig/svelte to package.json devDependencies
- [ ] 2.3 C3: Generate icons in src-tauri/icons/
- [ ] 2.4 H1: Fix 3 Flathub API endpoints in flathub.ts
- [ ] 2.5 H2: Fix App.svelte logo to show A / Agora
- [ ] 2.6 H3: Fix tauri.conf.json names
- [ ] 2.7 H4: Rename Cargo.toml + main.rs consistently
- [ ] 2.8 H5: Fix sovereignty.ts dead branch
- [ ] 2.9 M1–M4: AppDetail loading, filter null, iconUrl, Escape key
- [ ] 2.10 L1–L3, I1–I2: Dead code, bad IDs, --user flag, font stack
- [ ] 2.11 Commit: "fix: resolve all 17 audit issues"

### BLOCK 3 — Mac first run
- [ ] 3.1 Install Rust: `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`
- [ ] 3.2 `source $HOME/.cargo/env`
- [ ] 3.3 `cargo install tauri-cli --version "^2.0"`
- [ ] 3.4 `npm install`
- [ ] 3.5 `npm run tauri dev` — verify window, grid, search, badges
- [ ] 3.6 Install button will fail on Mac (no flatpak) — expected, not a bug

### BLOCK 4 — Fix Pi SSH (next session priority)
- [ ] 4.1 Try Option C: Re-flash with Raspberry Pi Imager with SSH pre-enabled
      OR try DNS fix on Pi: `echo "nameserver 8.8.8.8" | sudo tee /etc/resolv.conf`
      Then: `sudo apt install openssh-server -y && sudo systemctl enable ssh --now`
- [ ] 4.2 Confirm SSH works: `ssh rspi@192.168.1.109` from Mac
- [ ] 4.3 Run serveo tunnel so Claude can connect: `ssh -R 0:localhost:22 serveo.net`
- [ ] 4.4 Copy and run bootstrap script on Pi (~15 min)
- [ ] 4.5 Copy project, npm install, npm run tauri dev on Pi
- [ ] 4.6 Test real Flatpak install end-to-end

### BLOCK 5 — Phase 2: Sovereignty layer
- [ ] Fix 3 bad seed entries (Element, Signal, eu_origin)
- [ ] Expand tag DB: 15 → 100 → 200 apps
- [ ] Add Windows-replacement curated lists
- [ ] Per-tag filter UI refinements
- [ ] Tag contribution guide for GitHub

### BLOCK 6 — Phase 3: SvelteKit web app
- [ ] Scaffold SvelteKit, reuse all Svelte components
- [ ] Routes: /, /app/[id], /category/[name], /about
- [ ] Swap install button → copy-install-command UI
- [ ] Server-side Flathub API calls for SEO
- [ ] svelte:head meta tags
- [ ] Configure @sveltejs/adapter-cloudflare
- [ ] GitHub public repo + Cloudflare Pages deployment
- [ ] Point agoralinux.app domain to Cloudflare Pages
- [ ] Core Web Vitals all green

### BLOCK 7 — Phase 4: Launch
- [ ] Final QA pass
- [ ] Show HN post
- [ ] r/linux, r/selfhosted, r/opensource
- [ ] EU tech communities + govt open source forums
- [ ] Contact EU OS project about integration

---

## Environment reference

```bash
# Mac terminal
cd '/Users/rowelsardea/DEVELOPER/AGORA Linux'
npm run tauri dev

# Pi SSH (once working)
ssh rspi@192.168.1.109

# Pi bootstrap
scp '/Users/rowelsardea/DEVELOPER/AGORA Linux/agora-pi-setup.sh' rspi@192.168.1.109:~/
ssh rspi@192.168.1.109 'bash ~/agora-pi-setup.sh'

# Pi reverse tunnel for Claude
ssh -R 0:localhost:22 serveo.net

# Notion
https://www.notion.so/346b26705c4d81e49286e38f63dac0c9
```
