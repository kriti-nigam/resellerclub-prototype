/* global React, Logo, Mark, Button, Icon, Badge, MethodTag */
const { useState: useChromeState } = React;

/* ---------- Global main-menu dropdown (mirrors the marketing site) ---------- */
const HOMEPAGE = "ResellerClub Homepage.html";
function NavDropdown({ item, nav }) {
  const [open, setOpen] = useChromeState(false);
  const hasMenu = item.items && item.items.length;
  const go = (it) => {
    if (it.route) nav(it.route);
    else if (it.href) window.location.href = it.href;
  };
  const top = () => { if (item.href) window.location.href = item.href; };
  return (
    <div style={{ position: "relative" }} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button onClick={top} style={{
        display: "inline-flex", alignItems: "center", gap: 5, background: "none", border: 0, cursor: "pointer",
        padding: "8px 12px", borderRadius: 8, fontFamily: "var(--rc-font-body)", fontSize: 14.5,
        fontWeight: item.active ? 600 : 500, color: item.active ? "var(--rc-text)" : "var(--rc-text-2)",
      }}>
        {item.label}
        {hasMenu && <Icon name="chevron-down" size={15} style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform var(--rc-dur) var(--rc-ease)" }} />}
      </button>
      {hasMenu && open && (
        <div style={{
          position: "absolute", top: "calc(100% - 4px)", left: item.alignRight ? "auto" : 0, right: item.alignRight ? 0 : "auto",
          background: "#fff", border: "1px solid var(--rc-line)", borderRadius: "var(--rc-r-lg)", boxShadow: "var(--rc-shadow-lg)",
          padding: 10, zIndex: 60, display: "grid", gridTemplateColumns: item.items.length > 4 ? "1fr 1fr" : "1fr",
          width: item.items.length > 4 ? 540 : 300, gap: 2,
        }}>
          {item.items.map((it) => (
            <button key={it.label} onClick={() => go(it)} style={{
              display: "flex", gap: 11, alignItems: "flex-start", padding: "11px 12px", borderRadius: "var(--rc-r-md)",
              background: "none", border: 0, cursor: "pointer", textAlign: "left", width: "100%",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--rc-bg-subtle)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "none"; }}>
              <span style={{ width: 34, height: 34, borderRadius: "var(--rc-r-sm)", background: "var(--rc-accent-50)", color: "var(--rc-accent)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon name={it.icon} size={18} />
              </span>
              <span>
                <span style={{ display: "block", fontSize: 14.5, fontWeight: 600, color: "var(--rc-text)", letterSpacing: "-.01em" }}>{it.label}</span>
                <span style={{ display: "block", fontSize: 12.5, color: "var(--rc-text-3)", marginTop: 2, lineHeight: 1.4 }}>{it.desc}</span>
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ---------- Top navigation: tier 1 global main menu + tier 2 portal sub-nav ---------- */
function TopNav({ route, nav, onOpenSearch }) {
  const HP = HOMEPAGE;
  const mainMenu = [
    { label: "Products", href: HP + "#products", items: [
      { label: "Domains", icon: "globe", desc: "800+ TLDs at wholesale, white-labeled", href: HP + "#products" },
      { label: "Email", icon: "mail", desc: "Titan and Google Workspace", href: HP + "#products" },
      { label: "Hosting", icon: "server", desc: "Linux, WordPress and reseller plans", href: HP + "#products" },
      { label: "SSL certificates", icon: "shield-check", desc: "DV to EV, resold under your brand", href: HP + "#products" },
      { label: "DNS and Premium DNS", icon: "network", desc: "Managed, anycast resolution", href: HP + "#products" },
      { label: "Security add-ons", icon: "lock", desc: "SiteLock, backups, privacy", href: HP + "#products" },
      { label: "Website builder", icon: "layout-template", desc: "Sell sites alongside domains", href: HP + "#products" },
    ] },
    { label: "Platform", items: [
      { label: "Platform overview", icon: "layers", desc: "How you build and sell", href: "Platform & API.html" },
      { label: "Storefront (Supersite)", icon: "store", desc: "White-label store on the control panel", href: "Platform & API.html#ways" },
      { label: "API", icon: "terminal", desc: "Provision and sell through the API", href: "Platform & API.html#ways" },
      { label: "Integrations", icon: "plug", desc: "WHMCS and Plesk", href: "Platform & API.html#integrations" },
    ] },
    { label: "Pricing", href: HP + "#pricing" },
    { label: "API & Developer Portal", active: true, items: [
      { label: "Developer Portal home", icon: "layout-dashboard", desc: "The front door for builders", route: "home" },
      { label: "API overview", icon: "terminal", desc: "One REST API for the catalog", route: "docs:introduction" },
      { label: "Documentation", icon: "book-open", desc: "Guides, reference and SDKs", route: "docs:quickstart" },
      { label: "MCP and agents", icon: "sparkles", desc: "Provision wherever agents run", route: "docs:mcp" },
      { label: "Sandbox", icon: "flask-conical", desc: "Test against live-shaped data", route: "docs:check-availability" },
    ] },
    { label: "Who it's for", items: [
      { label: "Web hosts", icon: "server-cog", desc: "Bundle domains, email and SSL", href: HP + "#who" },
      { label: "Developers and agencies", icon: "code-2", desc: "Provision client domains fast", href: HP + "#who" },
      { label: "AI and website-builder platforms", icon: "bot", desc: "Embed registration in your flow", href: HP + "#who" },
    ] },
    { label: "Resources", alignRight: true, items: [
      { label: "Docs", icon: "book-open", desc: "Product and API documentation", route: "docs:introduction" },
      { label: "24/7 chat", icon: "life-buoy", desc: "Help centre", href: HP },
      { label: "Blog", icon: "newspaper", desc: "Product news and guides", href: HP },
      { label: "Case studies", icon: "award", desc: "How partners grow with us", href: HP },
      { label: "Changelog", icon: "activity", desc: "Recent platform changes", route: "docs:changelog" },
    ] },
  ];

  const subLinks = [
    { id: "docs:quickstart", label: "Guides" },
    { id: "docs:check-availability", label: "API Reference" },
    { id: "docs:mcp", label: "AI & MCP" },
    { id: "docs:changelog", label: "Changelog" },
  ];
  const isDocs = route.startsWith("docs");

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50, background: "rgba(255,255,255,.92)",
      backdropFilter: "saturate(180%) blur(12px)", WebkitBackdropFilter: "saturate(180%) blur(12px)",
      borderBottom: "1px solid var(--rc-line)",
    }}>
      {/* Tier 1 — global main menu (identical to the marketing site) */}
      <div style={{ maxWidth: 1320, margin: "0 auto", height: 64, padding: "0 28px", display: "flex", alignItems: "center", gap: 8 }}>
        <a href={HP} style={{ display: "inline-flex", padding: 0, marginRight: 10 }} aria-label="ResellerClub home">
          <Logo size={30} />
        </a>
        <nav style={{ display: "flex", alignItems: "center", gap: 2 }} aria-label="Primary">
          {mainMenu.map((m) => <NavDropdown key={m.label} item={m} nav={nav} />)}
        </nav>
        <div style={{ flex: 1 }} />
        <a href="Sign In.html" style={{ fontFamily: "var(--rc-font-body)", fontSize: 14.5, fontWeight: 600, color: "var(--rc-text-2)", padding: "8px 6px" }}>Sign in</a>
        <Button size="sm" onClick={() => { window.location.href = "Become a Reseller.html"; }}>Become a reseller</Button>
      </div>

      {/* Tier 2 — developer portal sub-nav */}
      <div style={{ borderTop: "1px solid var(--rc-line)", background: "rgba(247,248,250,.7)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", height: 50, padding: "0 28px", display: "flex", alignItems: "center", gap: 4 }}>
          <button onClick={() => nav("home")} style={{
            background: "none", border: 0, cursor: "pointer", padding: "6px 10px 6px 0", marginRight: 6,
            fontFamily: "var(--rc-font-display)", fontWeight: 600, fontSize: 14.5, color: "var(--rc-text)", letterSpacing: "-.01em",
            display: "inline-flex", alignItems: "center", gap: 7,
          }}>
            <Icon name="terminal" size={16} color="var(--rc-accent)" /> Developer Portal
          </button>
          <span style={{ width: 1, height: 20, background: "var(--rc-line)", margin: "0 6px" }} />
          <nav style={{ display: "flex", alignItems: "center", gap: 4 }} aria-label="Developer portal">
            {subLinks.map((l) => {
              const on = (l.id === "docs:check-availability" && isDocs && route !== "docs:quickstart" && route !== "docs:mcp" && route !== "docs:changelog") || route === l.id;
              return (
                <button key={l.id} onClick={() => nav(l.id)} style={{
                  background: on ? "var(--rc-accent-50)" : "none", border: 0, cursor: "pointer", padding: "7px 12px", borderRadius: 8,
                  fontFamily: "var(--rc-font-body)", fontSize: 14, fontWeight: on ? 600 : 500,
                  color: on ? "var(--rc-accent-700)" : "var(--rc-text-2)",
                }}>{l.label}</button>
              );
            })}
          </nav>
          <div style={{ flex: 1 }} />
          <button onClick={onOpenSearch} style={{
            display: "flex", alignItems: "center", gap: 10, background: "#fff",
            border: "1px solid var(--rc-line)", borderRadius: "var(--rc-r-md)", padding: "7px 12px",
            cursor: "pointer", minWidth: 190, color: "var(--rc-text-3)",
          }}>
            <Icon name="search" size={15} color="var(--rc-text-3)" />
            <span style={{ flex: 1, textAlign: "left", fontSize: 13, fontFamily: "var(--rc-font-body)" }}>Search docs</span>
            <span style={{ fontFamily: "var(--rc-font-mono)", fontSize: 11, background: "var(--rc-bg-subtle)", border: "1px solid var(--rc-line)", borderRadius: 5, padding: "1px 6px" }}>⌘K</span>
          </button>
          <Button size="sm" icon="key-round" variant="secondary" onClick={() => { window.location.href = "Start a Demo.html"; }}>Get API key</Button>
        </div>
      </div>
    </header>
  );
}

/* ---------- Docs sidebar tree ---------- */
const DOC_TREE = [
  {
    title: "Get Started",
    items: [
      { id: "docs:introduction", label: "Introduction" },
      { id: "docs:quickstart", label: "Quickstart" },
      { id: "docs:authentication", label: "Authentication" },
      { id: "docs:errors", label: "Errors & retries" },
      { id: "docs:rate-limits", label: "Rate limits" },
    ],
  },
  {
    title: "Domains API",
    endpoints: true, // filled from RC.endpoints
  },
  {
    title: "AI & MCP",
    items: [
      { id: "docs:mcp", label: "Model Context Protocol", badge: "NEW" },
      { id: "docs:llms", label: "llms.txt & context" },
    ],
  },
  {
    title: "Resources",
    items: [
      { id: "docs:changelog", label: "Changelog" },
      { id: "docs:sdks", label: "SDKs & libraries" },
    ],
  },
];

function DocsSidebar({ route, nav }) {
  return (
    <nav style={{ display: "flex", flexDirection: "column", gap: 26, paddingRight: 8 }}>
      {DOC_TREE.map((group) => {
        let items = group.items;
        if (group.endpoints) {
          items = window.RC.endpoints.map((e) => ({ id: "docs:" + e.id, label: e.title, method: e.method }));
        }
        return (
          <div key={group.title}>
            <p style={{
              fontFamily: "var(--rc-font-body)", fontSize: 11.5, fontWeight: 700, letterSpacing: "0.08em",
              textTransform: "uppercase", color: "var(--rc-text-3)", margin: "0 0 10px", paddingLeft: 10,
            }}>{group.title}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {items.map((it) => {
                const on = route === it.id;
                return (
                  <button key={it.id} onClick={() => nav(it.id)} style={{
                    display: "flex", alignItems: "center", gap: 9, textAlign: "left", cursor: "pointer",
                    background: on ? "var(--rc-accent-50)" : "transparent", border: 0,
                    borderRadius: 8, padding: "7px 10px", width: "100%",
                    fontFamily: "var(--rc-font-body)", fontSize: 13.5, fontWeight: on ? 600 : 500,
                    color: on ? "var(--rc-accent-700)" : "var(--rc-text-2)",
                  }}
                  onMouseEnter={(e) => { if (!on) e.currentTarget.style.background = "var(--rc-bg-subtle)"; }}
                  onMouseLeave={(e) => { if (!on) e.currentTarget.style.background = "transparent"; }}
                  >
                    {it.method && <MethodTag method={it.method} size="sm" />}
                    <span style={{ flex: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{it.label}</span>
                    {it.badge && <Badge tone="accent" style={{ fontSize: 9, padding: "1px 6px" }}>{it.badge}</Badge>}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </nav>
  );
}

/* ---------- Footer (global site footer via site/nav.js) ---------- */
function Footer() {
  React.useEffect(() => {
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
  });
  if (typeof window.RC_footerHTML !== "function") return null;
  return <div dangerouslySetInnerHTML={{ __html: window.RC_footerHTML() }} />;
}

Object.assign(window, { TopNav, DocsSidebar, Footer, DOC_TREE });
