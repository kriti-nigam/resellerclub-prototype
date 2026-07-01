/* global React, Icon, Button, Badge, Logo, Mark, CodeBlock, Code, MethodTag */
const { useState: useLandState, useEffect: useLandEffect } = React;

const HERO_CODE = `import { ResellerClub } from "@resellerclub/sdk";

const rc = new ResellerClub({ apiKey: process.env.RC_API_KEY });

// Search, then register — in two calls.
const { results } = await rc.domains.checkAvailability({
  domains: ["acme.io"],
});

if (results[0].available) {
  await rc.domains.register({
    domain: "acme.io",
    years: 2,
    customer_id: "cus_8Kd02mQ",
  });
}`;

function HeroWindow() {
  return (
    <div style={{ background: "var(--rc-code-bg)", borderRadius: "var(--rc-r-xl)", overflow: "hidden", boxShadow: "var(--rc-shadow-lg)", border: "1px solid rgba(255,255,255,.08)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "13px 16px", background: "var(--rc-code-bg-2)", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
        <span style={{ width: 11, height: 11, borderRadius: 999, background: "#FF5F57" }} />
        <span style={{ width: 11, height: 11, borderRadius: 999, background: "#FEBC2E" }} />
        <span style={{ width: 11, height: 11, borderRadius: 999, background: "#28C840" }} />
        <span style={{ marginLeft: 10, fontFamily: "var(--rc-font-mono)", fontSize: 12.5, color: "var(--rc-on-dark-3)" }}>register.js</span>
        <span style={{ flex: 1 }} />
        <Badge tone="teal" style={{ background: "rgba(15,166,138,.16)", color: "#5FE0C2", border: "none" }}><span style={{ width: 6, height: 6, borderRadius: 999, background: "#5FE0C2", display: "inline-block" }} /> 126 ms</Badge>
      </div>
      <pre className="rc-scroll" style={{ margin: 0, padding: "18px 20px", overflowX: "auto", fontFamily: "var(--rc-font-mono)", fontSize: 13.5, lineHeight: 1.7, color: "#E7ECF5" }}>
        <code dangerouslySetInnerHTML={{ __html: window.highlight(HERO_CODE, "js") }} />
      </pre>
    </div>
  );
}

function HeroStat({ value, label }) {
  return (
    <div>
      <p style={{ fontFamily: "var(--rc-font-display)", fontWeight: 700, fontSize: 26, margin: 0, letterSpacing: "-0.02em" }}>{value}</p>
      <p style={{ fontSize: 13, color: "var(--rc-text-3)", margin: "2px 0 0" }}>{label}</p>
    </div>
  );
}

function Hero({ variant, nav }) {
  const headline = (dark) => (
    <h1 style={{ fontSize: "clamp(40px, 5vw, 62px)", fontWeight: 700, lineHeight: 1.02, letterSpacing: "-0.03em", color: dark ? "#fff" : "var(--rc-text)" }}>
      The domains API<br />built for <span style={{ color: "var(--rc-accent)" }}>resellers</span><br />&amp; their agents.
    </h1>
  );
  const sub = (dark) => (
    <p style={{ fontSize: 19, lineHeight: 1.6, color: dark ? "var(--rc-on-dark-2)" : "var(--rc-text-2)", maxWidth: 480, margin: "22px 0 0" }}>
      Search, register, renew and transfer across 800+ TLDs with one clean REST API — now exposed to AI agents over MCP.
    </p>
  );
  const ctas = (
    <div style={{ display: "flex", gap: 12, marginTop: 30, flexWrap: "wrap" }}>
      <Button size="lg" icon="key-round" onClick={() => { window.location.href = "Start a Demo.html"; }}>Get your API key</Button>
      <Button size="lg" variant={variant === "dark" ? "onDark" : "secondary"} iconRight="arrow-right" onClick={() => nav("docs:quickstart")}>Read the quickstart</Button>
    </div>
  );
  const stats = (
    <div style={{ display: "flex", gap: 40, marginTop: 44, flexWrap: "wrap" }}>
      <HeroStat value="800+" label="TLDs supported" />
      <HeroStat value="99.99%" label="API uptime" />
      <HeroStat value="200k+" label="Resellers" />
    </div>
  );

  if (variant === "centered") {
    return (
      <section style={{ padding: "80px 28px 56px", textAlign: "center" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <Badge tone="accent" style={{ marginBottom: 22 }}><Icon name="sparkles" size={12} /> Now MCP-ready for AI agents</Badge>
          <div style={{ display: "flex", justifyContent: "center" }}>{headline(false)}</div>
          <div style={{ display: "flex", justifyContent: "center" }}>{sub(false)}</div>
          <div style={{ display: "flex", justifyContent: "center" }}>{ctas}</div>
        </div>
        <div style={{ maxWidth: 760, margin: "52px auto 0" }}><HeroWindow /></div>
      </section>
    );
  }

  const dark = variant === "dark";
  return (
    <section style={{ background: dark ? "var(--rc-ink)" : "transparent", padding: "72px 28px 64px", position: "relative", overflow: "hidden" }}>
      {dark && <div style={{ position: "absolute", top: -120, right: -80, width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(30,102,255,.30), transparent 70%)", pointerEvents: "none" }} />}
      <div style={{ maxWidth: 1320, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center", position: "relative" }}>
        <div>
          <Badge tone="accent" style={dark ? { background: "rgba(30,102,255,.18)", color: "#9DC0FF", border: "none", marginBottom: 22 } : { marginBottom: 22 }}>
            <Icon name="sparkles" size={12} /> Now MCP-ready for AI agents
          </Badge>
          {headline(dark)}
          {sub(dark)}
          {ctas}
          {stats}
        </div>
        <div>{<HeroWindow />}</div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = ["Northwind Hosting", "Pixel & Co", "Harbor Goods", "Studio Eleven", "Cloudpeak", "Vantage Web"];
  return (
    <section style={{ padding: "8px 28px 16px" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <p style={{ textAlign: "center", fontSize: 12.5, fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--rc-text-3)", marginBottom: 24 }}>Powering domain automation for resellers worldwide</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap", opacity: .75 }}>
          {items.map((i) => (
            <span key={i} style={{ fontFamily: "var(--rc-font-display)", fontWeight: 600, fontSize: 18, color: "var(--rc-text-3)" }}>{i}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureGrid({ nav }) {
  const feats = [
    { icon: "search", title: "Availability & suggestions", desc: "Bulk-check up to 500 names and get premium pricing and smart alternatives inline." },
    { icon: "globe", title: "Register & manage", desc: "Register, configure DNS, toggle privacy and auto-renew across 800+ TLDs." },
    { icon: "repeat", title: "Renewals & transfers", desc: "Automate renewals from your wallet and run inbound transfers with EPP codes." },
    { icon: "webhook", title: "Webhooks", desc: "Get notified the instant a transfer completes or a domain nears expiry." },
    { icon: "shield-check", title: "Built-in safety", desc: "Idempotency keys, sandbox keys and spend caps keep automation predictable." },
    { icon: "sparkles", title: "Agent-native", desc: "Every endpoint is an MCP tool, so your AI assistant can act with guardrails." },
  ];
  return (
    <section style={{ padding: "72px 28px", background: "var(--rc-bg-subtle)" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <div style={{ maxWidth: 580, marginBottom: 44 }}>
          <p className="rc-eyebrow" style={{ marginBottom: 12 }}>The Domains API</p>
          <h2 style={{ fontSize: "clamp(30px,3.4vw,42px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.08 }}>Everything you need to resell domains, programmatically.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
          {feats.map((f) => (
            <div key={f.title} style={{ background: "var(--rc-white)", border: "1px solid var(--rc-line)", borderRadius: "var(--rc-r-lg)", padding: 24 }}>
              <div style={{ width: 44, height: 44, borderRadius: 11, background: "var(--rc-accent-50)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <Icon name={f.icon} size={21} color="var(--rc-accent)" />
              </div>
              <h3 style={{ fontSize: 17.5, fontWeight: 600, marginBottom: 7 }}>{f.title}</h3>
              <p style={{ fontSize: 14.5, color: "var(--rc-text-2)", margin: 0, lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const MCP_CONFIG = `{
  "mcpServers": {
    "resellerclub": {
      "url": "https://mcp.resellerclub.com",
      "headers": { "Authorization": "Bearer rc_live_…" }
    }
  }
}`;

function AgentSection({ nav }) {
  return (
    <section style={{ padding: "80px 28px", background: "var(--rc-ink)", color: "#fff", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", bottom: -140, left: -60, width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(30,102,255,.24), transparent 70%)" }} />
      <div style={{ maxWidth: 1320, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center", position: "relative" }}>
        <div>
          <Badge tone="accent" style={{ background: "rgba(30,102,255,.18)", color: "#9DC0FF", border: "none", marginBottom: 20 }}><Icon name="sparkles" size={12} /> AI-ready</Badge>
          <h2 style={{ fontSize: "clamp(30px,3.4vw,44px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.06, color: "#fff" }}>Let your agents register domains — safely.</h2>
          <p style={{ fontSize: 18, color: "var(--rc-on-dark-2)", lineHeight: 1.6, margin: "20px 0 0", maxWidth: 460 }}>
            Connect Claude, Cursor or any MCP client to the ResellerClub server. Every endpoint becomes a typed tool with built-in validation, scoped keys and spend caps.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
            <Button size="lg" onClick={() => nav("docs:mcp")} icon="plug">Connect an agent</Button>
            <Button size="lg" variant="onDark" iconRight="arrow-right" onClick={() => nav("docs:mcp")}>Browse MCP tools</Button>
          </div>
        </div>
        <div>
          <div style={{ background: "var(--rc-code-bg)", borderRadius: "var(--rc-r-xl)", border: "1px solid rgba(255,255,255,.08)", overflow: "hidden", boxShadow: "var(--rc-shadow-lg)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 16px", background: "var(--rc-code-bg-2)", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
              <Icon name="sparkles" size={15} color="var(--rc-accent)" />
              <span style={{ fontFamily: "var(--rc-font-mono)", fontSize: 12.5, color: "var(--rc-on-dark-2)" }}>claude_desktop_config.json</span>
            </div>
            <pre className="rc-scroll" style={{ margin: 0, padding: "16px 18px", overflowX: "auto", fontFamily: "var(--rc-font-mono)", fontSize: 13, lineHeight: 1.7, color: "#E7ECF5" }}>
              <code dangerouslySetInnerHTML={{ __html: window.highlight(MCP_CONFIG, "json") }} />
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA({ nav }) {
  return (
    <section style={{ padding: "84px 28px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center", background: "var(--rc-accent-tint)", border: "1px solid var(--rc-accent-100)", borderRadius: "var(--rc-r-2xl)", padding: "56px 40px" }}>
        <Mark size={48} />
        <h2 style={{ fontSize: "clamp(28px,3.2vw,40px)", fontWeight: 700, letterSpacing: "-0.02em", margin: "20px 0 0" }}>Start building in five minutes.</h2>
        <p style={{ fontSize: 18, color: "var(--rc-text-2)", margin: "14px auto 0", maxWidth: 520, lineHeight: 1.6 }}>Create a free developer account, grab a sandbox key, and make your first call today.</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 30, flexWrap: "wrap" }}>
          <Button size="lg" icon="key-round" onClick={() => { window.location.href = "Start a Demo.html"; }}>Get your API key</Button>
          <Button size="lg" variant="secondary" iconRight="arrow-right" onClick={() => nav("docs:introduction")}>Explore the docs</Button>
        </div>
      </div>
    </section>
  );
}

function Landing({ nav, heroVariant }) {
  return (
    <div>
      <Hero variant={heroVariant} nav={nav} />
      <TrustStrip />
      <FeatureGrid nav={nav} />
      <AgentSection nav={nav} />
      <FinalCTA nav={nav} />
    </div>
  );
}

Object.assign(window, { Landing });
