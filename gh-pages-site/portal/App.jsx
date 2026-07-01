/* global React, ReactDOM, TopNav, Footer, DocsSidebar, Landing, EndpointPage, Introduction, Quickstart, Authentication, Errors, RateLimits, MCP, Llms, Changelog, SDKs, DashboardView, Onboarding, Icon, MethodTag, useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakColor */
const { useState: useAppState, useEffect: useAppEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "split",
  "docsLayout": "3-col",
  "accent": ["#1E66FF", "#0F52E0", "#0A3FB0", "#D7E4FF", "#EDF3FF", "#F4F7FE"]
}/*EDITMODE-END*/;

function applyAccent(p) {
  if (!Array.isArray(p)) return;
  const root = document.documentElement;
  const names = ["--rc-accent", "--rc-accent-600", "--rc-accent-700", "--rc-accent-100", "--rc-accent-50", "--rc-accent-tint"];
  p.forEach((c, i) => root.style.setProperty(names[i], c));
}

/* ---------- Command palette ---------- */
function SearchPalette({ open, onClose, nav }) {
  const [q, setQ] = useAppState("");
  const items = [
    { id: "docs:introduction", label: "Introduction", group: "Guides" },
    { id: "docs:quickstart", label: "Quickstart", group: "Guides" },
    { id: "docs:authentication", label: "Authentication", group: "Guides" },
    { id: "docs:errors", label: "Errors & retries", group: "Guides" },
    { id: "docs:rate-limits", label: "Rate limits", group: "Guides" },
    { id: "docs:mcp", label: "Model Context Protocol", group: "AI & MCP" },
    { id: "docs:llms", label: "llms.txt & context", group: "AI & MCP" },
    { id: "docs:changelog", label: "Changelog", group: "Resources" },
    ...window.RC.endpoints.map((e) => ({ id: "docs:" + e.id, label: e.title, group: "Domains API", method: e.method })),
    { id: "dashboard", label: "Dashboard", group: "Account" },
  ];
  const filtered = q ? items.filter((i) => i.label.toLowerCase().includes(q.toLowerCase()) || i.group.toLowerCase().includes(q.toLowerCase())) : items;
  useAppEffect(() => { if (open) setQ(""); }, [open]);
  if (!open) return null;
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(12,19,34,.45)", backdropFilter: "blur(3px)", display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: "12vh", zIndex: 200, animation: "rc-fade .12s ease" }}>
      <div onClick={(e) => e.stopPropagation()} style={{ width: 560, maxWidth: "92vw", background: "#fff", borderRadius: "var(--rc-r-xl)", boxShadow: "var(--rc-shadow-lg)", overflow: "hidden", animation: "rc-fade-up .18s var(--rc-ease) both" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 20px", borderBottom: "1px solid var(--rc-line)" }}>
          <Icon name="search" size={18} color="var(--rc-text-3)" />
          <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search docs, endpoints…" style={{ flex: 1, border: 0, outline: 0, fontSize: 16, fontFamily: "var(--rc-font-body)", background: "transparent" }} />
          <span style={{ fontFamily: "var(--rc-font-mono)", fontSize: 11, color: "var(--rc-text-3)", border: "1px solid var(--rc-line)", borderRadius: 5, padding: "2px 7px" }}>ESC</span>
        </div>
        <div className="rc-scroll" style={{ maxHeight: 380, overflowY: "auto", padding: 8 }}>
          {filtered.length === 0 && <p style={{ padding: 24, textAlign: "center", color: "var(--rc-text-3)", fontSize: 14 }}>No results for "{q}"</p>}
          {filtered.map((it) => (
            <button key={it.id} onClick={() => { nav(it.id); onClose(); }} style={{
              display: "flex", alignItems: "center", gap: 12, width: "100%", textAlign: "left", border: 0, cursor: "pointer",
              background: "transparent", borderRadius: 9, padding: "10px 12px", fontFamily: "var(--rc-font-body)",
            }} onMouseEnter={(e) => e.currentTarget.style.background = "var(--rc-bg-subtle)"} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
              {it.method ? <MethodTag method={it.method} size="sm" /> : <Icon name="file-text" size={15} color="var(--rc-text-3)" />}
              <span style={{ flex: 1, fontSize: 14.5, fontWeight: 500 }}>{it.label}</span>
              <span style={{ fontSize: 12, color: "var(--rc-text-3)" }}>{it.group}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- Docs router ---------- */
function DocsRouter({ route, nav }) {
  const id = route.replace("docs:", "");
  const ep = window.RC.endpoints.find((e) => e.id === id);
  if (ep) return <EndpointPage endpoint={ep} />;
  const map = {
    introduction: <Introduction nav={nav} />,
    quickstart: <Quickstart />,
    authentication: <Authentication />,
    errors: <Errors />,
    "rate-limits": <RateLimits />,
    mcp: <MCP />,
    llms: <Llms />,
    changelog: <Changelog />,
    sdks: <SDKs />,
  };
  return map[id] || <Introduction nav={nav} />;
}

function DocsShell({ route, nav }) {
  return (
    <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 28px", display: "grid", gridTemplateColumns: "232px minmax(0,1fr)", gap: 44, alignItems: "start" }}>
      <div style={{ position: "sticky", top: 64, height: "calc(100vh - 64px)", overflowY: "auto", padding: "32px 0 40px" }} className="rc-scroll">
        <DocsSidebar route={route} nav={nav} />
      </div>
      <div style={{ padding: "32px 0 80px", minWidth: 0 }}>
        <DocsRouter route={route} nav={nav} />
      </div>
    </div>
  );
}

/* ---------- App ---------- */
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [route, setRoute] = useAppState(() => {
    const h = (window.location.hash || "").replace(/^#/, "");
    if (h && (h.startsWith("docs:") || ["home", "dashboard", "signup"].includes(h))) return h;
    return localStorage.getItem("rc_route") || "home";
  });
  const [search, setSearch] = useAppState(false);

  const nav = (r) => {
    setRoute(r);
    localStorage.setItem("rc_route", r);
    window.scrollTo({ top: 0 });
  };

  useAppEffect(() => { applyAccent(t.accent); }, [t.accent]);
  useAppEffect(() => { window.RC_DOCS_LAYOUT = t.docsLayout; }, [t.docsLayout]);
  window.RC_DOCS_LAYOUT = t.docsLayout;

  useAppEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") { e.preventDefault(); setSearch(true); }
      if (e.key === "Escape") setSearch(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useAppEffect(() => { if (window.lucide) window.lucide.createIcons(); });

  const isDocs = route.startsWith("docs");
  const isFull = route === "dashboard" || route === "signup";

  return (
    <div className="rc">
      {!isFull && <TopNav route={route} nav={nav} onOpenSearch={() => setSearch(true)} />}

      {route === "home" && <Landing nav={nav} heroVariant={t.heroVariant} />}
      {isDocs && <DocsShell route={route} nav={nav} />}
      {route === "dashboard" && <DashboardView nav={nav} />}
      {route === "signup" && <Onboarding nav={nav} />}

      {!isFull && <Footer nav={nav} />}

      <SearchPalette open={search} onClose={() => setSearch(false)} nav={nav} />

      <TweaksPanel>
        <TweakSection label="Landing hero" />
        <TweakRadio label="Direction" value={t.heroVariant} options={["split", "centered", "dark"]} onChange={(v) => { setTweak("heroVariant", v); nav("home"); }} />
        <TweakSection label="Docs layout" />
        <TweakRadio label="Columns" value={t.docsLayout} options={["3-col", "2-col"]} onChange={(v) => setTweak("docsLayout", v)} />
        <TweakSection label="Brand accent" />
        <TweakColor label="Accent" value={t.accent}
          options={[
            ["#1E66FF", "#0F52E0", "#0A3FB0", "#D7E4FF", "#EDF3FF", "#F4F7FE"],
            ["#FF5A1F", "#ED4310", "#C5350B", "#FFE2D5", "#FFF1EA", "#FBF6F3"],
            ["#F43F5E", "#E11D48", "#BE123C", "#FFE0E6", "#FFF1F3", "#FBF4F5"],
            ["#0FA68A", "#0C8A72", "#0A6E5B", "#CFEFE8", "#EAF8F4", "#F2F8F6"],
            ["#6D5EF6", "#5A48E8", "#4836C4", "#E0DBFE", "#F1EEFE", "#F6F5FB"]
          ]}
          onChange={(v) => setTweak("accent", v)} />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
