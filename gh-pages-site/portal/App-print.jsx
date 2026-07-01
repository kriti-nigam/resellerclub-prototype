/* global React, ReactDOM, TopNav, Footer, Landing, EndpointPage, Introduction, Quickstart, MCP, DashboardView, Onboarding */
const { useEffect: usePrintEffect } = React;

window.RC_DOCS_LAYOUT = "3-col";

function PrintPage({ children }) {
  return <section className="print-page">{children}</section>;
}

function DocsWrap({ children }) {
  return (
    <div style={{ maxWidth: 1180, margin: "0 auto", padding: "28px 32px 8px" }}>
      {children}
    </div>
  );
}

function SectionTag({ children }) {
  return (
    <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 32px" }}>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--rc-font-body)", fontSize: 11.5, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--rc-accent-700)", background: "var(--rc-accent-50)", border: "1px solid var(--rc-accent-100)", borderRadius: 999, padding: "5px 12px", marginBottom: 4 }}>
        {children}
      </div>
    </div>
  );
}

function PrintApp() {
  const nav = () => {};
  const register = window.RC.endpoints.find((e) => e.id === "register-domain");

  usePrintEffect(() => {
    let fired = false;
    const fire = () => {
      if (fired) return;
      fired = true;
      if (window.lucide) window.lucide.createIcons();
      setTimeout(() => window.print(), 700);
    };
    if (window.lucide) window.lucide.createIcons();
    const ready = (document.fonts && document.fonts.ready) ? document.fonts.ready : Promise.resolve();
    ready.then(() => {
      if (window.lucide) window.lucide.createIcons();
      setTimeout(fire, 600);
    });
    // safety net
    setTimeout(fire, 2600);
  }, []);

  return (
    <div className="rc">
      {/* 1 — Landing */}
      <PrintPage>
        <div className="print-static-header"><TopNav route="home" nav={nav} onOpenSearch={nav} /></div>
        <Landing nav={nav} heroVariant="split" />
      </PrintPage>

      {/* 2 — Introduction */}
      <PrintPage>
        <DocsWrap><Introduction nav={nav} /></DocsWrap>
      </PrintPage>

      {/* 3 — Quickstart */}
      <PrintPage>
        <DocsWrap><Quickstart /></DocsWrap>
      </PrintPage>

      {/* 4 — API reference + Try it */}
      <PrintPage>
        <DocsWrap><EndpointPage endpoint={register} /></DocsWrap>
      </PrintPage>

      {/* 5 — MCP */}
      <PrintPage>
        <DocsWrap><MCP /></DocsWrap>
      </PrintPage>

      {/* 6 — Dashboard */}
      <PrintPage>
        <div className="print-dash"><DashboardView nav={nav} /></div>
      </PrintPage>

      {/* 7 — Sign up */}
      <PrintPage>
        <div className="print-onb"><Onboarding nav={nav} /></div>
      </PrintPage>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<PrintApp />);
