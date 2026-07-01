/* global React, Icon, Button, Badge, MethodTag, CodeBlock, Code, StatusDot */
const { useState: useDocState, useEffect: useDocEffect, useRef: useDocRef } = React;

/* ---------- Doc layout: center prose + sticky right rail ---------- */
function DocLayout({ children, rail }) {
  const twoCol = window.RC_DOCS_LAYOUT === "2-col";
  if (twoCol) {
    return (
      <div style={{ maxWidth: 720, animation: "rc-fade-up .4s var(--rc-ease) both" }}>
        <div style={{ minWidth: 0, paddingTop: 8 }}>{children}</div>
        <div style={{ marginTop: 36 }}>{rail}</div>
      </div>
    );
  }
  return (
    <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 380px", gap: 48, alignItems: "start" }}>
      <div style={{ minWidth: 0, paddingTop: 8, animation: "rc-fade-up .4s var(--rc-ease) both" }}>{children}</div>
      <div style={{ position: "sticky", top: 96, minWidth: 0 }}>{rail}</div>
    </div>
  );
}

/* ---------- Prose helpers ---------- */
function DocTitle({ eyebrow, children, sub }) {
  return (
    <div style={{ marginBottom: 28 }}>
      {eyebrow && <p className="rc-eyebrow" style={{ marginBottom: 12 }}>{eyebrow}</p>}
      <h1 style={{ fontSize: 38, fontWeight: 700, lineHeight: 1.08 }}>{children}</h1>
      {sub && <p style={{ fontSize: 18, color: "var(--rc-text-2)", margin: "16px 0 0", lineHeight: 1.6, maxWidth: 620 }}>{sub}</p>}
    </div>
  );
}
function H2({ children, id }) {
  return <h2 id={id} style={{ fontSize: 23, fontWeight: 700, margin: "44px 0 16px", scrollMarginTop: 90 }}>{children}</h2>;
}
function P({ children }) {
  return <p style={{ fontSize: 15.5, color: "var(--rc-text-2)", lineHeight: 1.72, margin: "0 0 16px", maxWidth: 660 }}>{children}</p>;
}

/* ---------- Parameter table ---------- */
function ParamTable({ params }) {
  const inOrder = { path: 0, query: 1, body: 2 };
  const sorted = [...params].sort((a, b) => inOrder[a.in] - inOrder[b.in]);
  return (
    <div style={{ border: "1px solid var(--rc-line)", borderRadius: "var(--rc-r-lg)", overflow: "hidden" }}>
      {sorted.map((p, i) => (
        <div key={p.name} style={{
          display: "grid", gridTemplateColumns: "200px 1fr", gap: 20, padding: "16px 20px",
          borderTop: i ? "1px solid var(--rc-line-2)" : "none", alignItems: "start",
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <Code>{p.name}</Code>
            <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
              <span style={{ fontFamily: "var(--rc-font-mono)", fontSize: 11.5, color: "var(--rc-text-3)" }}>{p.type}</span>
              <span style={{ fontSize: 10.5, color: "var(--rc-text-3)", textTransform: "uppercase", letterSpacing: ".05em", fontWeight: 600 }}>{p.in}</span>
            </div>
            {p.required
              ? <span style={{ fontSize: 11, fontWeight: 600, color: "var(--rc-accent-700)" }}>Required</span>
              : <span style={{ fontSize: 11, color: "var(--rc-text-3)" }}>Optional</span>}
          </div>
          <p style={{ fontSize: 14.5, color: "var(--rc-text-2)", lineHeight: 1.6, margin: 0, paddingTop: 2 }}>{p.desc}</p>
        </div>
      ))}
    </div>
  );
}

/* ---------- Try-it console (right rail) ---------- */
function TryItConsole({ endpoint }) {
  const [tab, setTab] = useDocState("request");
  const [running, setRunning] = useDocState(false);
  const [result, setResult] = useDocState(null);
  const [values, setValues] = useDocState(() => {
    const v = {};
    endpoint.params.forEach((p) => {
      v[p.name] = p.in === "path" ? endpoint.path.match(/\{(\w+)\}/) ? "acme.io" : "" :
        p.name === "domains" ? "acme.com, acme.io, acme.dev" :
        p.name === "years" ? "2" : p.name === "currency" ? "USD" :
        p.name === "customer_id" ? "cus_8Kd02mQ" : p.name === "limit" ? "25" :
        p.name === "nameservers" ? "ns1.cloudhost.com, ns2.cloudhost.com" :
        p.name === "auth_code" ? "x7-Kd2!pQ9" : p.type === "boolean" ? "true" : "";
    });
    return v;
  });
  useDocEffect(() => { setResult(null); setTab("request"); }, [endpoint.id]);

  const run = () => {
    setRunning(true);
    setResult(null);
    setTab("response");
    const latency = 90 + Math.round(Math.random() * 110);
    setTimeout(() => {
      setRunning(false);
      setResult({ status: endpoint.status, time: latency, body: endpoint.response });
    }, 620);
  };

  const statusTone = (s) => (s >= 200 && s < 300) ? "var(--rc-teal)" : "var(--rc-amber)";

  return (
    <div style={{ borderRadius: "var(--rc-r-lg)", overflow: "hidden", boxShadow: "var(--rc-shadow-md)", border: "1px solid var(--rc-line)" }}>
      {/* endpoint bar */}
      <div style={{ background: "var(--rc-code-bg)", padding: "12px 14px", display: "flex", alignItems: "center", gap: 10 }}>
        <MethodTag method={endpoint.method} />
        <span className="rc-scroll" style={{ flex: 1, fontFamily: "var(--rc-font-mono)", fontSize: 12.5, color: "#E7ECF5", overflowX: "auto", whiteSpace: "nowrap" }}>
          {endpoint.path}
        </span>
        <button onClick={run} disabled={running} style={{
          display: "inline-flex", alignItems: "center", gap: 6, background: running ? "rgba(255,255,255,.12)" : "var(--rc-teal)",
          color: "#fff", border: 0, borderRadius: 8, padding: "7px 14px", cursor: running ? "default" : "pointer",
          fontFamily: "var(--rc-font-body)", fontSize: 13, fontWeight: 700,
        }}>
          {running ? <Icon name="loader-2" size={14} style={{ animation: "rc-spin .8s linear infinite" }} /> : <Icon name="play" size={13} />}
          {running ? "Running" : "Run"}
        </button>
      </div>

      {/* params editor */}
      <div style={{ background: "var(--rc-code-bg-2)", padding: "12px 14px 14px", borderTop: "1px solid rgba(255,255,255,.06)" }}>
        <p style={{ fontFamily: "var(--rc-font-body)", fontSize: 10.5, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--rc-on-dark-3)", margin: "0 0 10px" }}>Parameters</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {endpoint.params.map((p) => (
            <label key={p.name} style={{ display: "grid", gridTemplateColumns: "118px 1fr", gap: 10, alignItems: "center" }}>
              <span style={{ fontFamily: "var(--rc-font-mono)", fontSize: 12, color: "var(--rc-on-dark-2)", display: "flex", alignItems: "center", gap: 4, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {p.name}{p.required && <span style={{ color: "var(--rc-accent)" }}>*</span>}
              </span>
              <input
                value={values[p.name]}
                onChange={(e) => setValues({ ...values, [p.name]: e.target.value })}
                placeholder={p.type}
                style={{
                  background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 7,
                  padding: "7px 10px", color: "#fff", fontFamily: "var(--rc-font-mono)", fontSize: 12, outline: "none", minWidth: 0,
                }}
                onFocus={(e) => e.target.style.borderColor = "var(--rc-accent)"}
                onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,.12)"}
              />
            </label>
          ))}
        </div>
      </div>

      {/* tabs */}
      <div style={{ background: "var(--rc-code-bg)", display: "flex", alignItems: "center", borderTop: "1px solid rgba(255,255,255,.06)", padding: "0 6px" }}>
        {[{ k: "request", l: "Node.js" }, { k: "response", l: "Response" }].map((t) => (
          <button key={t.k} onClick={() => setTab(t.k)} style={{
            background: "transparent", border: 0, cursor: "pointer", padding: "11px 14px",
            fontFamily: "var(--rc-font-body)", fontSize: 12.5, fontWeight: 600,
            color: tab === t.k ? "#fff" : "var(--rc-on-dark-3)",
            borderBottom: tab === t.k ? "2px solid var(--rc-accent)" : "2px solid transparent",
          }}>{t.l}</button>
        ))}
        <div style={{ flex: 1 }} />
        {result && (
          <span style={{ display: "inline-flex", alignItems: "center", gap: 7, marginRight: 12, fontFamily: "var(--rc-font-mono)", fontSize: 11.5 }}>
            <span style={{ width: 7, height: 7, borderRadius: 999, background: statusTone(result.status) }} />
            <span style={{ color: statusTone(result.status), fontWeight: 600 }}>{result.status}</span>
            <span style={{ color: "var(--rc-on-dark-3)" }}>· {result.time} ms</span>
          </span>
        )}
      </div>

      {/* body */}
      <pre className="rc-scroll" style={{
        margin: 0, padding: "16px", background: "var(--rc-code-bg)", overflowX: "auto",
        fontFamily: "var(--rc-font-mono)", fontSize: 12.5, lineHeight: 1.65, color: "#E7ECF5",
        minHeight: 140, maxHeight: 360, overflowY: "auto",
      }}>
        {tab === "request" && <code dangerouslySetInnerHTML={{ __html: window.highlight(endpoint.node, "js") }} />}
        {tab === "response" && running && (
          <span style={{ color: "var(--rc-on-dark-3)", display: "inline-flex", alignItems: "center", gap: 8 }}>
            <Icon name="loader-2" size={14} style={{ animation: "rc-spin .8s linear infinite" }} /> Awaiting response…
          </span>
        )}
        {tab === "response" && !running && result && <code dangerouslySetInnerHTML={{ __html: window.highlight(result.body, "json") }} />}
        {tab === "response" && !running && !result && (
          <span style={{ color: "var(--rc-on-dark-3)" }}>{"// Press Run to send a live request"}</span>
        )}
      </pre>
    </div>
  );
}

/* ---------- Endpoint reference page ---------- */
function EndpointPage({ endpoint }) {
  return (
    <DocLayout rail={<TryItConsole endpoint={endpoint} />}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: "var(--rc-text-3)" }}>{endpoint.group}</span>
        <Icon name="chevron-right" size={13} color="var(--rc-text-3)" />
        <span style={{ fontSize: 13, fontWeight: 600, color: "var(--rc-text-2)" }}>{endpoint.title}</span>
      </div>
      <h1 style={{ fontSize: 34, fontWeight: 700, marginBottom: 14 }}>{endpoint.title}</h1>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 22, padding: "10px 14px", background: "var(--rc-bg-subtle)", border: "1px solid var(--rc-line)", borderRadius: "var(--rc-r-md)", maxWidth: 660 }}>
        <MethodTag method={endpoint.method} />
        <code style={{ fontFamily: "var(--rc-font-mono)", fontSize: 13.5, color: "var(--rc-text)", fontWeight: 500 }}>
          <span style={{ color: "var(--rc-text-3)" }}>{window.RC.BASE}</span>{endpoint.path}
        </code>
      </div>
      <p style={{ fontSize: 17, color: "var(--rc-text-2)", lineHeight: 1.65, margin: "0 0 8px", maxWidth: 660 }}>{endpoint.summary}</p>

      <H2 id="parameters">Parameters</H2>
      <ParamTable params={endpoint.params} />

      <H2 id="response">Response</H2>
      <P>A successful call returns <Code>{endpoint.status}</Code> with the resource body shown on the right. All timestamps are ISO-8601 UTC, and monetary amounts are debited from your reseller wallet in your account currency.</P>

      <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 32, padding: "16px 18px", border: "1px solid var(--rc-line)", borderRadius: "var(--rc-r-lg)", background: "var(--rc-accent-tint)", maxWidth: 660 }}>
        <div style={{ width: 38, height: 38, borderRadius: 10, background: "var(--rc-white)", border: "1px solid var(--rc-line)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <Icon name="sparkles" size={18} color="var(--rc-accent)" />
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: 14.5, fontWeight: 600, margin: "0 0 2px" }}>Available as an MCP tool</p>
          <p style={{ fontSize: 13.5, color: "var(--rc-text-2)", margin: 0 }}>This endpoint is exposed to AI agents as <Code>domains.{endpoint.id.replace(/-/g, "_")}</Code> via the ResellerClub MCP server.</p>
        </div>
      </div>
    </DocLayout>
  );
}

Object.assign(window, { DocLayout, DocTitle, H2, P, ParamTable, TryItConsole, EndpointPage });
