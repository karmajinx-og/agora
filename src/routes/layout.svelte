<script lang="ts">import'../app.css'</script>
<div class="site"><header class="nav"><div class="nav-inner"><a href="/" class="logo"><span class="li">A</span><span class="ln">Agora</span><span class="lt">Linux App Store</span></a><nav class="links"><a href="/category/Office">Office</a><a href="/category/Development">Dev tools</a><a href="/category/Graphics">Graphics</a><a href="/about">About</a></nav></div></header><main class="main"><slot/></main><footer class="footer"><div class="fi"><span>Agora — Linux App Store</span><span class="sep">·</span><span>Community-rated apps for Linux users</span><span class="sep">·</span><a href="https://github.com/karmajinx-og/agora" target="_blank" rel="noreferrer">GitHub</a><span class="sep">·</span><a href="https://flathub.org" target="_blank" rel="noreferrer">Powered by Flathub</a></div></footer></div>
<style>
.site{display:flex;flex-direction:column;min-height:100vh}
.nav{background:var(--bg-card);border-bottom:1px solid var(--border);position:sticky;top:0;z-index:50}
.nav-inner{max-width:var(--max-width);margin:0 auto;padding:0 24px;height:56px;display:flex;align-items:center;justify-content:space-between}
.logo{display:flex;align-items:center;gap:8px;text-decoration:none}
.li{width:28px;height:28px;background:var(--accent);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;color:#fff}
.ln{font-size:16px;font-weight:700;color:var(--text-primary)}.lt{font-size:11px;color:var(--text-muted);padding:2px 6px;background:var(--bg-input);border-radius:4px;border:1px solid var(--border)}
.links{display:flex;gap:4px}.links a{font-size:13px;color:var(--text-secondary);padding:6px 10px;border-radius:var(--radius-sm);transition:all .1s;text-decoration:none}
.links a:hover{background:var(--bg-card-hover);color:var(--text-primary)}
.main{flex:1;max-width:var(--max-width);margin:0 auto;width:100%;padding:24px}
.footer{border-top:1px solid var(--border);padding:20px 24px}
.fi{max-width:var(--max-width);margin:0 auto;display:flex;align-items:center;gap:8px;font-size:12px;color:var(--text-muted);flex-wrap:wrap}
.sep{color:var(--border-hover)}.fi a{color:var(--text-muted)}
@media(max-width:640px){.lt,.links{display:none}}
</style>
