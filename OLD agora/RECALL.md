# AGORA — Session Recall Log

Most recent session at top. Paste MAIN-CONTEXT.md into new session to restore full context.

---

## Session 4 — 2026-04-19

**Summary:** Pi SSH troubleshooting. Domains purchased. Docs updated.

**Completed:**
- Ubuntu 24.04 LTS confirmed running on Raspberry Pi 5
- SSH troubleshooting attempted — not yet resolved
- Domains purchased: agoralinux.app, agoralinux.org, agoralinux.io ✅
- Primary domain: agoralinux.app
- MAIN-CONTEXT.md and RECALL.md fully updated for handoff

**SSH issue detail:**
- Pi username confirmed: rspi (not rowel)
- `ssh rspi@192.168.1.109` → Connection refused (SSH service not running)
- `sudo systemctl enable ssh --now` → service does not exist (openssh-server not installed)
- `sudo apt install openssh-server -y` → failed to fetch (DNS not resolving on first boot)
- DNS fix attempted: `echo "nameserver 8.8.8.8" | sudo tee /etc/resolv.conf`
- User couldn't type pipe `|` character (Shift+\ on keyboard)
- Session ended — to be resolved next session

**Best fix for next session:**
Re-flash microSD using Raspberry Pi Imager with SSH pre-enabled in OS Customisation settings. This avoids all the manual SSH setup entirely.

**Not completed this session:**
- All 17 audit fixes still pending
- npm install / first Mac run not done
- Pi not accessible via SSH

---

## Session 3 — 2026-04-19

**Summary:** Deep code audit, web stack research, dual-surface strategy decision.

**Completed:**
- Full code audit — 17 issues found across 12 files (3 critical, 5 high, 4 medium, 5 low/info)
- Web stack audit: SvelteKit vs Next.js vs Astro — SvelteKit wins (29/30 score)
- Hosting decision: Cloudflare Pages (free, EU CDN, native adapter)
- Strategic decision: build both desktop (Tauri) AND web (SvelteKit) — web first
- Pi 5 confirmed viable test device (Ubuntu 24.04, ARM64 matches EU govt deployments)
- Pi bootstrap script (agora-pi-setup.sh) generated
- Comprehensive task list created across 7 blocks
- MAIN-CONTEXT.md and RECALL.md written

**Key decisions:**
- Dual surface: SvelteKit web + Tauri desktop
- SvelteKit over Next.js (performance, code reuse, simplicity)
- Cloudflare Pages for hosting
- agoralinux.app as primary domain

---

## Session 2 — 2026-04-19

**Summary:** Phase 1 code scaffold generated. Renamed SovereignStore → Agora.

**Completed:**
- Full Tauri + Svelte + TypeScript project scaffolded
- Flathub API client, sovereignty tag DB (15 seed apps), all Svelte components
- Tauri backend with run_flatpak command
- Project zipped as SovereignStore.zip (downloaded)
- Notion page created
- Initial MAIN-CONTEXT.md and RECALL.md written

**Not completed:**
- SovereignStore → Agora rename not applied inside files
- Rust/Tauri CLI not installed on Mac
- App not launched
- Pi OS not installed at time of session

---

## Session 1 — 2026-04-19

**Summary:** Research, concept, scoping.

**Completed:**
- Linux app store landscape researched
- EU Linux migration wave researched (France 2.5M workstations April 2026)
- Full Reddit-style concept developed then scoped down to sovereignty-tagged MVP
- Sovereignty tag system designed (6 tag types)
- Notion page created, architecture diagram built

**Key decisions:**
- Tauri + Svelte, static JSON tag DB, Flatpak only v1
- Name: Agora, target: EU govt IT admins

---

## Rollback snapshots

| Version | File | Date | Notes |
|---|---|---|---|
| v0.1.0 | SovereignStore.zip | 2026-04-19 | Initial Phase 1 scaffold — pre-rename, pre-audit-fixes |
