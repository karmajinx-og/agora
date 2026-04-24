# Agora — Reddit posts & logo spec

Internal reference: copy for launches and a brief for a real logo/icon when you are ready. Agora = [agoralinux.app](https://agoralinux.app). Repo: [github.com/karmajinx-og/agora](https://github.com/karmajinx-og/agora).

---

## Reddit posts

Use **one** variant per sub, tailored to the community. Read each sub’s rules (self-promo days, no direct links, etc.). Prefer a **text post** with the link in the body if the sub restricts link posts.

### Variant A — friendly / new-to-Linux + privacy (e.g. r/linux, r/flatpak)

**Suggested title**

> I made a small Flathub browser with **plain-language privacy notes** (EU-minded, not a legal audit)

**Body**

> Hi — I built **Agora** ([agoralinux.app](https://agoralinux.app)): a way to **browse Flatpak apps** with **short notes** on things like telemetry, data residency, and open source — plus simple **list filters** so you’re not wading through everything blind.
>
> I’m *not* claiming formal audits; the goal is **honest, practical hints** for people who are **new to Linux** or need something clearer than raw metadata. The full “how it works” explainer is on the site.
>
> It’s open source: [github.com/karmajinx-og/agora](https://github.com/karmajinx-og/agora) — if you have ideas, wrong labels, or want to help improve notes, [Discussions](https://github.com/karmajinx-og/agora/discussions) are open.
>
> What would make this actually useful for you — stricter notes, more apps covered, or better onboarding for first-time Linux users?

---

### Variant B — technical (e.g. r/opensource, r/privacy, technical r/linux threads)

**Suggested title**

> Agora: Flathub discovery with **sovereignty/privacy flags** + filters — feedback welcome

**Body**

> I published **Agora** ([agoralinux.app](https://agoralinux.app)), a SvelteKit front end on top of **public Flathub** listings, with a **separate open dataset** of simple sovereignty/privacy-style tags and short notes. It’s designed as **orientation**, not compliance or malware scanning.
>
> Stack: SvelteKit on Cloudflare Pages; tags are in-repo and intended to grow via contribution. I’m looking for **where the schema is wrong or too hand-wavy**, and what the minimum viable “signal” is before it misleads users.
>
> Repo: [karmajinx-og/agora](https://github.com/karmajinx-og/agora) — issues and [Discussions](https://github.com/karmajinx-og/agora/discussions) welcome.

---

### Posting tips

- Lurk the sub first; don’t post the same day across five communities.
- Reply quickly to the first comments; the opening hour shapes visibility.
- Lead with what it does and **clear limitations** (trust wins in privacy-adjacent subs).
- If challenged on accuracy, point to the on-site “how it works” and the open repo.

---

## Logo & icon — practical spec

**Do you need one?** Not to ship, but you will want a clear **brand mark** before long for recognition in feeds, GitHub, and any **PWA / installable** or **Open Graph** images. The current in-header “A” in a square is a fine placeholder.

### Deliverables to ask a designer (or a tight AI brief)

| Asset | Role |
|--------|------|
| **App icon** | Square mark, readable at **32×32** and **180×180** (PWA, favicon source). |
| **Wordmark (optional)** | “Agora” with optional subline; use in header, readme hero, share images. |
| **Dark + light** | Same mark on **dark navy/black** and **light** backgrounds (or one neutral that works on both). |

### Design constraints (aligned with the product)

- **Simple geometry** — one or two clear shapes; no fine detail that vanishes in small sizes.
- **Clarity, not “security theatre”** — avoid noisy clichés (huge padlocks, stock EU maps, 12 shields). The product is **plain-language orientation**, not a compliance seal.
- **Mood** — calm, tool-like, a bit “library / catalogue / forum” (the name *Agora*) rather than gaming RGB.
- **Colour** — tie to the live site: accent used in UI (e.g. the blue you use for the “A” badge and links); keep a **1-colour** version for print and monochrome contexts.

### Technical file hygiene

- Master in **SVG**; export **PNG** for social templates if needed.
- Safe padding: the mark should not touch the square edge at 32px (bleed for circular masks on some UIs).
- Name files predictably, e.g. `logo-mark.svg`, `icon-512.png`, `og-default.png` (for later OG meta).

### Favicon + Open Graph (when assets exist)

- Wire **favicon** (`/favicon.ico` or `icon.svg`) and any **apple-touch-icon** in `app.html` or SvelteKit `static/`.
- Add **og:image** (e.g. 1200×630) using the new mark + one-line value prop so link previews look intentional on Reddit, Slack, and Mastodon.

---

*Update this file when you settle on final post titles for a specific sub or when logo filenames/paths are fixed in the repo.*
