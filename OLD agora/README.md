# SovereignStore

A Flatpak browser for EU-conscious Linux users — with GDPR, EU-origin, telemetry,
and open-source tags on every app. No backend. No accounts. Ships as a native desktop
app via Tauri + Svelte.

---

## One-time setup (Mac dev machine)

### 1. Install Rust
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source $HOME/.cargo/env
```

### 2. Install Tauri CLI and system dependencies
```bash
cargo install tauri-cli --version "^2.0"
```

On macOS you also need Xcode Command Line Tools if not already installed:
```bash
xcode-select --install
```

### 3. Install Node dependencies
```bash
npm install
```

---

## Dev server (hot reload)

```bash
npm run tauri dev
```

This starts the Vite dev server on port 1420 and opens the Tauri window.
The UI hot-reloads on file save. The Rust backend recompiles on changes to `src-tauri/`.

---

## Build for production

```bash
npm run tauri build
```

Output is in `src-tauri/target/release/bundle/`.

---

## Project structure

```
SovereignStore/
├── src/                        # Svelte frontend
│   ├── App.svelte              # Root component — layout, search, grid
│   ├── app.css                 # Global styles / design tokens
│   ├── main.ts                 # Entry point
│   └── lib/
│       ├── flathub.ts          # Flathub API client
│       ├── sovereignty.ts      # Tag database — THE core differentiator
│       ├── installer.ts        # Flatpak install via Tauri invoke
│       ├── AppCard.svelte      # Grid card component
│       ├── AppDetail.svelte    # App detail modal + install button
│       └── SovereigntyBadge.svelte  # EU/GDPR badge component
├── src-tauri/                  # Rust / Tauri backend
│   ├── src/
│   │   ├── main.rs             # Entry point
│   │   └── lib.rs              # run_flatpak command + app setup
│   ├── tauri.conf.json         # Window config, CSP, bundle settings
│   ├── Cargo.toml              # Rust dependencies
│   └── build.rs                # Tauri build script
├── index.html                  # HTML shell
├── vite.config.ts              # Vite + Svelte config
├── svelte.config.js
├── tsconfig.json
└── package.json
```

---

## Phase 1 status

- [x] Tauri + Svelte + TypeScript scaffold
- [x] Flathub API integration (browse, search, category filter)
- [x] App grid with icon, name, summary
- [x] Sovereignty badge component (Safe / Caution / Risk / Unknown)
- [x] Sovereignty tag database (15 seed apps)
- [x] Sovereignty filter in sidebar (All / Hide risk / Safe only)
- [x] App detail modal with install button
- [x] Flatpak install via Tauri `run_flatpak` command
- [x] Dark theme with design tokens

## Phase 2 next (sovereignty layer)
- [ ] Expand tag database to top 200 apps
- [ ] Filter UI refinements
- [ ] Windows-replacement curated lists
- [ ] Tag contribution guide (for open sourcing the DB)

---

## Sovereignty tag schema

Each app in `src/lib/sovereignty.ts` gets:

| Field | Type | Meaning |
|---|---|---|
| `eu_origin` | bool / null | Developed or maintained in the EU |
| `gdpr_safe` | bool / null | No personal data sent to 3rd parties |
| `no_telemetry` | bool / null | Zero data phoned home by default |
| `open_source` | bool / null | OSI-approved licence |
| `us_cloud_dependency` | bool / null | Syncs to AWS / Azure / GCP |
| `verified_safe` | bool / null | Community or manual audit passed |
| `notes` | string | Human-readable context |

`null` = not yet reviewed. `level` is derived automatically.

---

## Target users

- **EU government IT admins** — vet apps for GDPR/sovereignty before deployment
- **New Linux users (Windows migrants)** — guided, trustworthy discovery
- **Privacy-conscious developers** — filter by open source + no telemetry

---

Built by Rowel Sardea / audiovisuality.com.au
