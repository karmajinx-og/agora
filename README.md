# Agora (web)

SvelteKit + Cloudflare Pages. **Authoritative app copy for deployment:** this folder or the clone at `Agora Cursor/agora-github-sync` (GitHub `karmajinx-og/agora`).

## Requirements

- **Node 20** — use **`.nvmrc`** (`nvm use` / `fnm use`) so local matches **Cloudflare Pages** (the build image reads `.nvmrc` / `NODE_VERSION`).
- `npm ci` for reproducible installs (CI and deploys use this, not `npm install` for lockfile changes)

## Commands

| Command        | Purpose                          |
| -------------- | -------------------------------- |
| `npm run dev`  | Local dev server                 |
| `npm run check`| Typecheck + Svelte check         |
| `npm run build`| Production build → `.svelte-kit/cloudflare` |
| `npm run ci`   | `check` then `build` (same as CI) |

## Deploy workflow (Cloudflare Pages)

1. `npm run ci` must pass locally (or on GitHub Actions).
2. Push to **`main`** on `karmajinx-og/agora`.
3. Cloudflare **Build command:** `npm run build` — **Output directory:** `.svelte-kit/cloudflare` (see `wrangler.toml` `pages_build_output_dir`). **Build system:** use **v3** if available (**Settings → Build & deployments → Build system version**); Node is pinned via **`.nvmrc`** at the repo root.

**Sync from Cursor (two-folder workflow):** when you work in `Agora Cursor/web/`, copy sources into `agora-github-sync/` (exclude `node_modules/`, `.env`, `.svelte-kit`, `node_modules` — see `.gitignore`) before committing, or make `web/` the only clone and open it as the repo root.

## Environment

- **`.env`:** optional, for `wrangler`/Cloudflare API (not required for the static Pages build). Copy from `.env.example`. **Never commit secrets.**

## Locale / SSR

- UI language is chosen on the **server** from the `agora-locale` cookie and `Accept-Language`, so **SSR HTML and the browser stay in sync** (no translated-string hydration errors).
- Changing language in the header updates the cookie and refetches with `invalidateAll()`.

## Security

- `src/hooks.server.ts` sets baseline security headers on app responses.
- Cookies use `SameSite=Lax` and `Secure` on HTTPS.

## GitHub Actions (optional)

A workflow file lives in `.github/workflows/ci.yml` (Node 20, `npm ci`, `check`, `build`). If `git push` is rejected for “workflow scope”, add the [workflow `scope`](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#modifying-a-personal-access-token) to your PAT, push via SSH, or paste the YAML into **Actions → New workflow** in the repo. Until then, run `npm run ci` locally before every deploy.
