/* global React, Icon, Button, Badge, Logo, Mark, Code, StatusDot, MethodTag */
const { useState: useDashState } = React;

/* ---------- Usage area chart ---------- */
function UsageChart({ data, height = 150, accent = "var(--rc-accent)" }) {
  const W = 720, H = height, pad = 6;
  const max = Math.max(...data) * 1.12;
  const stepX = (W - pad * 2) / (data.length - 1);
  const pts = data.map((v, i) => [pad + i * stepX, H - pad - (v / max) * (H - pad * 2)]);
  const line = pts.map((p, i) => (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" ");
  const area = line + ` L ${pts[pts.length - 1][0].toFixed(1)} ${H} L ${pts[0][0].toFixed(1)} ${H} Z`;
  const last = pts[pts.length - 1];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height, display: "block" }} preserveAspectRatio="none">
      <defs>
        <linearGradient id="uc-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--rc-accent)" stopOpacity="0.18" />
          <stop offset="1" stopColor="var(--rc-accent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map((g) => (
        <line key={g} x1="0" y1={H * g} x2={W} y2={H * g} stroke="var(--rc-line-2)" strokeWidth="1" />
      ))}
      <path d={area} fill="url(#uc-fill)" />
      <path d={line} fill="none" stroke={accent} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx={last[0]} cy={last[1]} r="4.5" fill={accent} stroke="#fff" strokeWidth="2" />
    </svg>
  );
}

/* ---------- Dashboard chrome ---------- */
function DashSidebar({ active, setActive, nav }) {
  const items = [
    { id: "overview", icon: "layout-dashboard", label: "Overview" },
    { id: "keys", icon: "key-round", label: "API keys" },
    { id: "usage", icon: "activity", label: "Usage & limits" },
    { id: "orders", icon: "receipt", label: "Orders" },
    { id: "wallet", icon: "wallet", label: "Wallet" },
    { id: "webhooks", icon: "webhook", label: "Webhooks" },
  ];
  return (
    <aside style={{ width: 248, background: "var(--rc-ink)", color: "#fff", display: "flex", flexDirection: "column", height: "100vh", position: "sticky", top: 0, flexShrink: 0 }}>
      <div style={{ padding: "20px 22px 22px" }}>
        <button onClick={() => nav("home")} style={{ background: "none", border: 0, cursor: "pointer", padding: 0 }}>
          <Logo size={28} dark tag="Dev" />
        </button>
      </div>
      <nav style={{ flex: 1, display: "flex", flexDirection: "column", gap: 2, padding: "0 12px" }}>
        {items.map((it) => {
          const on = active === it.id;
          return (
            <button key={it.id} onClick={() => setActive(it.id)} style={{
              display: "flex", alignItems: "center", gap: 12, padding: "10px 13px", borderRadius: 9,
              border: 0, cursor: "pointer", textAlign: "left",
              background: on ? "rgba(255,255,255,.10)" : "transparent",
              color: on ? "#fff" : "var(--rc-on-dark-2)", fontFamily: "var(--rc-font-body)",
              fontWeight: on ? 600 : 500, fontSize: 14,
            }}>
              <Icon name={it.icon} size={17} color={on ? "var(--rc-accent)" : "var(--rc-on-dark-3)"} />
              {it.label}
            </button>
          );
        })}
      </nav>
      <div style={{ margin: "0 12px 14px", background: "linear-gradient(135deg,#3D82FF,#0F52E0)", borderRadius: 12, padding: 16 }}>
        <p style={{ fontFamily: "var(--rc-font-display)", fontWeight: 600, fontSize: 14.5, margin: "0 0 4px" }}>Docs & reference</p>
        <p style={{ fontSize: 12.5, color: "rgba(255,255,255,.9)", margin: "0 0 12px", lineHeight: 1.45 }}>Endpoints, guides and the MCP server.</p>
        <button onClick={() => nav("docs:introduction")} style={{ width: "100%", background: "#fff", color: "var(--rc-accent-700)", border: 0, borderRadius: 8, padding: "8px", fontWeight: 700, fontSize: 13, cursor: "pointer", fontFamily: "var(--rc-font-body)" }}>Open docs</button>
      </div>
      <div style={{ padding: "14px 18px", display: "flex", alignItems: "center", gap: 10, borderTop: "1px solid rgba(255,255,255,.08)" }}>
        <div style={{ width: 32, height: 32, borderRadius: 9, background: "var(--rc-accent)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--rc-font-display)", fontWeight: 700, fontSize: 13 }}>NH</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ margin: 0, fontSize: 13, fontWeight: 600 }}>Northwind Hosting</p>
          <p style={{ margin: 0, fontSize: 11, color: "var(--rc-on-dark-3)", fontFamily: "var(--rc-font-mono)" }}>rsl_41882</p>
        </div>
        <Icon name="chevron-up" size={14} color="var(--rc-on-dark-3)" />
      </div>
    </aside>
  );
}

function DashTopbar({ title, sub, env, setEnv }) {
  return (
    <div style={{ padding: "20px 36px", background: "var(--rc-white)", borderBottom: "1px solid var(--rc-line)", display: "flex", alignItems: "center", gap: 20, position: "sticky", top: 0, zIndex: 10 }}>
      <div style={{ flex: 1 }}>
        <h1 style={{ fontFamily: "var(--rc-font-display)", fontWeight: 700, fontSize: 25, letterSpacing: "-0.02em", margin: 0 }}>{title}</h1>
        {sub && <p style={{ fontSize: 13.5, color: "var(--rc-text-3)", margin: "3px 0 0" }}>{sub}</p>}
      </div>
      <div style={{ display: "flex", alignItems: "center", background: "var(--rc-bg-subtle)", border: "1px solid var(--rc-line)", borderRadius: "var(--rc-r-pill)", padding: 3 }}>
        {["live", "test"].map((e) => (
          <button key={e} onClick={() => setEnv(e)} style={{
            border: 0, cursor: "pointer", borderRadius: 999, padding: "6px 16px", fontFamily: "var(--rc-font-body)",
            fontSize: 13, fontWeight: 600, textTransform: "capitalize",
            background: env === e ? "var(--rc-white)" : "transparent", color: env === e ? "var(--rc-text)" : "var(--rc-text-3)",
            boxShadow: env === e ? "var(--rc-shadow-xs)" : "none", display: "flex", alignItems: "center", gap: 6,
          }}>
            <StatusDot status={e} /> {e}
          </button>
        ))}
      </div>
      <button style={{ background: "transparent", border: 0, cursor: "pointer", position: "relative", padding: 8 }}>
        <Icon name="bell" size={18} color="var(--rc-text-2)" />
        <span style={{ position: "absolute", top: 6, right: 8, width: 7, height: 7, background: "var(--rc-accent)", borderRadius: 999, border: "2px solid #fff" }} />
      </button>
    </div>
  );
}

/* ---------- Reusable card ---------- */
function Card({ children, style, pad = 22 }) {
  return <div style={{ background: "var(--rc-white)", border: "1px solid var(--rc-line)", borderRadius: "var(--rc-r-lg)", padding: pad, ...style }}>{children}</div>;
}
function CardHead({ title, action }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
      <h3 style={{ fontFamily: "var(--rc-font-display)", fontWeight: 600, fontSize: 16.5, margin: 0 }}>{title}</h3>
      {action}
    </div>
  );
}

/* ---------- Orders table ---------- */
function OrdersTable({ rows, compact }) {
  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--rc-font-body)" }}>
        <thead>
          <tr style={{ textAlign: "left" }}>
            {["Order", "Type", "Domain", "Customer", "Amount", "Status", "Date"].map((h) => (
              <th key={h} style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: ".04em", textTransform: "uppercase", color: "var(--rc-text-3)", padding: "0 16px 12px 0", whiteSpace: "nowrap" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((o) => (
            <tr key={o.id} style={{ borderTop: "1px solid var(--rc-line-2)" }}>
              <td style={{ padding: "13px 16px 13px 0" }}><Code>{o.id}</Code></td>
              <td style={{ padding: "13px 16px 13px 0", fontSize: 14, color: "var(--rc-text-2)", whiteSpace: "nowrap" }}>{o.type}</td>
              <td style={{ padding: "13px 16px 13px 0", fontSize: 14, fontWeight: 600 }}>{o.domain}</td>
              <td style={{ padding: "13px 16px 13px 0", fontSize: 14, color: "var(--rc-text-2)", whiteSpace: "nowrap" }}>{o.customer}</td>
              <td style={{ padding: "13px 16px 13px 0", fontSize: 14, fontWeight: 600, fontFamily: "var(--rc-font-mono)" }}>${o.amount.toFixed(2)}</td>
              <td style={{ padding: "13px 16px 13px 0" }}>
                <Badge tone={o.status === "active" ? "success" : o.status === "pending" ? "warning" : "danger"} style={{ textTransform: "capitalize" }}>
                  <StatusDot status={o.status} /> {o.status}
                </Badge>
              </td>
              <td style={{ padding: "13px 0", fontSize: 13.5, color: "var(--rc-text-3)", whiteSpace: "nowrap" }}>{o.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ---------- Keys list ---------- */
function KeysList({ keys, onRevoke, env }) {
  const shown = keys.filter((k) => env === "all" || k.env === env);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      {shown.map((k, i) => (
        <div key={k.id} style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 0", borderTop: i ? "1px solid var(--rc-line-2)" : "none" }}>
          <div style={{ width: 38, height: 38, borderRadius: 9, background: k.env === "live" ? "var(--rc-accent-50)" : "var(--rc-amber-soft)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <Icon name="key-round" size={17} color={k.env === "live" ? "var(--rc-accent)" : "var(--rc-amber)"} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3 }}>
              <span style={{ fontSize: 14.5, fontWeight: 600 }}>{k.label}</span>
              <Badge tone={k.env === "live" ? "success" : "warning"}>{k.env}</Badge>
            </div>
            <code style={{ fontFamily: "var(--rc-font-mono)", fontSize: 12.5, color: "var(--rc-text-3)" }}>{k.prefix}••••••••••••</code>
          </div>
          <div style={{ textAlign: "right", minWidth: 92 }}>
            <p style={{ fontSize: 13, fontWeight: 600, margin: 0 }}>{k.calls}</p>
            <p style={{ fontSize: 11.5, color: "var(--rc-text-3)", margin: 0 }}>calls · {k.lastUsed}</p>
          </div>
          <button onClick={() => onRevoke(k.id)} style={{ background: "transparent", border: "1px solid var(--rc-line)", borderRadius: 8, padding: "7px 12px", cursor: "pointer", fontSize: 13, fontWeight: 600, color: "var(--rc-red)", fontFamily: "var(--rc-font-body)" }}>Revoke</button>
        </div>
      ))}
      {shown.length === 0 && <p style={{ fontSize: 14, color: "var(--rc-text-3)", padding: "20px 0", textAlign: "center" }}>No {env} keys yet.</p>}
    </div>
  );
}

Object.assign(window, { UsageChart, DashSidebar, DashTopbar, Card, CardHead, OrdersTable, KeysList });
