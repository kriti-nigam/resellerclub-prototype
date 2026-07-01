/* global React, Icon, Button, Badge, Code, StatusDot, UsageChart, DashSidebar, DashTopbar, Card, CardHead, OrdersTable, KeysList, CodeBlock */
const { useState: useDVState } = React;

function StatCard({ s }) {
  return (
    <div style={{ background: "var(--rc-white)", border: "1px solid var(--rc-line)", borderRadius: "var(--rc-r-lg)", padding: "18px 20px" }}>
      <p style={{ fontSize: 13, color: "var(--rc-text-3)", margin: "0 0 8px", fontWeight: 500 }}>{s.label}</p>
      <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
        <span style={{ fontFamily: "var(--rc-font-display)", fontWeight: 700, fontSize: 27, letterSpacing: "-0.02em" }}>{s.value}</span>
        <span style={{ fontSize: 12.5, fontWeight: 600, color: "var(--rc-green)", display: "inline-flex", alignItems: "center", gap: 2 }}>
          <Icon name="trending-up" size={13} color="var(--rc-green)" />{s.delta}
        </span>
      </div>
    </div>
  );
}

function RateGauge({ used, limit }) {
  const pct = Math.round((used / limit) * 100);
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
        <span style={{ fontSize: 13.5, color: "var(--rc-text-2)" }}>Requests this minute</span>
        <span style={{ fontFamily: "var(--rc-font-mono)", fontSize: 13.5, fontWeight: 600 }}>{used.toLocaleString()} <span style={{ color: "var(--rc-text-3)" }}>/ {limit.toLocaleString()}</span></span>
      </div>
      <div style={{ height: 8, borderRadius: 999, background: "var(--rc-bg-subtle)", overflow: "hidden" }}>
        <div style={{ width: pct + "%", height: "100%", borderRadius: 999, background: pct > 85 ? "var(--rc-amber)" : "var(--rc-accent)" }} />
      </div>
      <p style={{ fontSize: 12.5, color: "var(--rc-text-3)", margin: "8px 0 0" }}>{100 - pct}% headroom · resets in 27s</p>
    </div>
  );
}

function FundsCard({ d, onAdd }) {
  return (
    <div style={{ background: "var(--rc-ink)", color: "#fff", borderRadius: "var(--rc-r-lg)", padding: 22, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -50, right: -30, width: 180, height: 180, borderRadius: "50%", background: "radial-gradient(circle, rgba(30,102,255,.32), transparent 70%)" }} />
      <div style={{ position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
          <Icon name="wallet" size={16} color="var(--rc-accent)" />
          <span style={{ fontSize: 13, color: "var(--rc-on-dark-2)" }}>Reseller wallet</span>
        </div>
        <p style={{ fontFamily: "var(--rc-font-display)", fontWeight: 700, fontSize: 34, letterSpacing: "-0.02em", margin: 0 }}>${d.funds.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
        <p style={{ fontSize: 13, color: "var(--rc-on-dark-3)", margin: "4px 0 18px" }}>{d.currency} · {d.plan} plan</p>
        <div style={{ display: "flex", gap: 10 }}>
          <Button size="sm" onClick={onAdd} icon="plus">Add funds</Button>
          <Button size="sm" variant="onDark">Statements</Button>
        </div>
      </div>
    </div>
  );
}

function CreateKeyModal({ onClose }) {
  const [created, setCreated] = useDVState(false);
  const [label, setLabel] = useDVState("");
  const newKey = "rc_live_8Kd0" + "Qx72nLpV93mTbZa1RfWc";
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(12,19,34,.5)", backdropFilter: "blur(3px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, animation: "rc-fade .15s ease" }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: "#fff", borderRadius: "var(--rc-r-xl)", width: 460, maxWidth: "92vw", padding: 26, boxShadow: "var(--rc-shadow-lg)", animation: "rc-fade-up .2s var(--rc-ease) both" }}>
        {!created ? (
          <React.Fragment>
            <h3 style={{ fontFamily: "var(--rc-font-display)", fontWeight: 700, fontSize: 20, margin: "0 0 6px" }}>Create API key</h3>
            <p style={{ fontSize: 14, color: "var(--rc-text-2)", margin: "0 0 20px" }}>Name your key so you can recognise it later.</p>
            <label style={{ fontSize: 13, fontWeight: 600, display: "block", marginBottom: 7 }}>Key name</label>
            <input value={label} onChange={(e) => setLabel(e.target.value)} placeholder="e.g. Production server" autoFocus style={{ width: "100%", border: "1px solid var(--rc-line-strong)", borderRadius: 9, padding: "10px 13px", fontSize: 14, fontFamily: "var(--rc-font-body)", outline: "none", marginBottom: 22 }} />
            <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
              <Button variant="ghost" onClick={onClose}>Cancel</Button>
              <Button onClick={() => setCreated(true)} icon="key-round">Create key</Button>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div style={{ width: 46, height: 46, borderRadius: 12, background: "var(--rc-teal-soft)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
              <Icon name="check" size={22} color="var(--rc-teal)" />
            </div>
            <h3 style={{ fontFamily: "var(--rc-font-display)", fontWeight: 700, fontSize: 20, margin: "0 0 6px" }}>Key created</h3>
            <p style={{ fontSize: 14, color: "var(--rc-text-2)", margin: "0 0 16px" }}>Copy it now — for security we won't show it again.</p>
            <CodeBlock lang="js" label={label || "New key"} compact code={newKey} />
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 20 }}>
              <Button onClick={onClose}>Done</Button>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

function DashboardView({ nav }) {
  const D = window.RC.dashboard;
  const [active, setActive] = useDVState("overview");
  const [env, setEnv] = useDVState("live");
  const [keys, setKeys] = useDVState(D.apiKeys);
  const [modal, setModal] = useDVState(false);
  const titles = {
    overview: ["Overview", "Welcome back, Northwind Hosting"],
    keys: ["API keys", "Create, name and revoke keys for each environment"],
    usage: ["Usage & limits", "API traffic across the last 14 days"],
    orders: ["Orders", "Every order placed through your API keys"],
    wallet: ["Wallet", "Funds, statements and auto-recharge"],
    webhooks: ["Webhooks", "Real-time events delivered to your endpoints"],
  };
  const revoke = (id) => setKeys(keys.filter((k) => k.id !== id));

  return (
    <div style={{ display: "flex", background: "var(--rc-bg-subtle)", minHeight: "100vh" }}>
      <DashSidebar active={active} setActive={setActive} nav={nav} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <DashTopbar title={titles[active][0]} sub={titles[active][1]} env={env} setEnv={setEnv} />
        <div style={{ padding: "28px 36px 56px", maxWidth: 1120 }}>

          {active === "overview" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
                {D.stats.map((s) => <StatCard key={s.label} s={s} />)}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1.7fr 1fr", gap: 20 }}>
                <Card>
                  <CardHead title="API calls" action={<Badge tone="neutral">Last 14 days</Badge>} />
                  <UsageChart data={D.usageSeries} />
                  <div style={{ marginTop: 18, paddingTop: 18, borderTop: "1px solid var(--rc-line-2)" }}>
                    <RateGauge used={D.rateLimit.used} limit={D.rateLimit.limit} />
                  </div>
                </Card>
                <FundsCard d={D.account} onAdd={() => setActive("wallet")} />
              </div>
              <Card>
                <CardHead title="Recent orders" action={<button onClick={() => setActive("orders")} style={{ background: "none", border: 0, cursor: "pointer", color: "var(--rc-accent-700)", fontWeight: 600, fontSize: 13.5, fontFamily: "var(--rc-font-body)" }}>View all →</button>} />
                <OrdersTable rows={D.orders.slice(0, 5)} />
              </Card>
            </div>
          )}

          {active === "keys" && (
            <Card>
              <CardHead title="Your API keys" action={<Button size="sm" icon="plus" onClick={() => setModal(true)}>Create key</Button>} />
              <KeysList keys={keys} onRevoke={revoke} env="all" />
            </Card>
          )}

          {active === "usage" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <Card>
                <CardHead title="API calls" action={<Badge tone="neutral">Last 14 days</Badge>} />
                <UsageChart data={D.usageSeries} height={220} />
              </Card>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                <Card>
                  <CardHead title="Rate limit" />
                  <RateGauge used={D.rateLimit.used} limit={D.rateLimit.limit} />
                </Card>
                <Card>
                  <CardHead title="Top endpoints" />
                  <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
                    {[["GET", "/domains/available", 62], ["POST", "/domains", 21], ["GET", "/domains", 11], ["POST", "/domains/{domain}/renew", 6]].map(([m, p, pct]) => (
                      <div key={p} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <MethodTag method={m} size="sm" />
                        <code style={{ fontFamily: "var(--rc-font-mono)", fontSize: 12.5, color: "var(--rc-text-2)", flex: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p}</code>
                        <span style={{ fontSize: 13, fontWeight: 600, color: "var(--rc-text-3)" }}>{pct}%</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          )}

          {active === "orders" && (
            <Card>
              <CardHead title={`${D.orders.length} orders`} action={
                <div style={{ display: "flex", gap: 6 }}>
                  {["All", "Registration", "Renewal", "Transfer in"].map((f, i) => (
                    <span key={f} style={{ fontSize: 13, fontWeight: 600, padding: "5px 12px", borderRadius: 999, cursor: "pointer", background: i === 0 ? "var(--rc-accent-50)" : "transparent", color: i === 0 ? "var(--rc-accent-700)" : "var(--rc-text-3)", border: "1px solid " + (i === 0 ? "var(--rc-accent-100)" : "transparent") }}>{f}</span>
                  ))}
                </div>
              } />
              <OrdersTable rows={D.orders} />
            </Card>
          )}

          {active === "wallet" && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 20, alignItems: "start" }}>
              <FundsCard d={D.account} onAdd={() => {}} />
              <Card>
                <CardHead title="Recent transactions" />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {[["Domain registration", "acme.io", -64, "Jun 5"], ["Wallet top-up", "Visa ••42", 1000, "Jun 4"], ["Domain renewal", "lumen.dev", -38, "Jun 4"], ["Domain registration", "harborfreight.shop", -28, "Jun 4"], ["Wallet top-up", "Visa ••42", 2000, "Jun 1"]].map(([t, s, amt, date], i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "13px 0", borderTop: i ? "1px solid var(--rc-line-2)" : "none" }}>
                      <div style={{ width: 34, height: 34, borderRadius: 8, background: amt > 0 ? "var(--rc-green-soft)" : "var(--rc-bg-subtle)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Icon name={amt > 0 ? "arrow-down-left" : "arrow-up-right"} size={15} color={amt > 0 ? "var(--rc-green)" : "var(--rc-text-2)"} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <p style={{ fontSize: 14, fontWeight: 600, margin: 0 }}>{t}</p>
                        <p style={{ fontSize: 12.5, color: "var(--rc-text-3)", margin: 0 }}>{s} · {date}</p>
                      </div>
                      <span style={{ fontFamily: "var(--rc-font-mono)", fontSize: 14, fontWeight: 600, color: amt > 0 ? "var(--rc-green)" : "var(--rc-text)" }}>{amt > 0 ? "+" : "−"}${Math.abs(amt).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {active === "webhooks" && (
            <Card>
              <CardHead title="Endpoints" action={<Button size="sm" icon="plus">Add endpoint</Button>} />
              <div style={{ display: "flex", flexDirection: "column" }}>
                {[["https://hooks.northwind.io/rc", ["domain.registered", "transfer.completed", "domain.expiring"], "live"], ["https://staging.northwind.io/rc", ["domain.registered"], "test"]].map(([url, events, e], i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "16px 0", borderTop: i ? "1px solid var(--rc-line-2)" : "none" }}>
                    <div style={{ width: 38, height: 38, borderRadius: 9, background: "var(--rc-violet-soft)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="webhook" size={17} color="var(--rc-violet)" /></div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <code style={{ fontFamily: "var(--rc-font-mono)", fontSize: 13, fontWeight: 600 }}>{url}</code>
                      <div style={{ display: "flex", gap: 6, marginTop: 6, flexWrap: "wrap" }}>
                        {events.map((ev) => <Badge key={ev} tone="neutral" style={{ fontSize: 11 }}>{ev}</Badge>)}
                      </div>
                    </div>
                    <Badge tone={e === "live" ? "success" : "warning"}>{e}</Badge>
                  </div>
                ))}
              </div>
            </Card>
          )}

        </div>
      </div>
      {modal && <CreateKeyModal onClose={() => setModal(false)} />}
    </div>
  );
}

Object.assign(window, { DashboardView });
