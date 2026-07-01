/* global React, Icon, Button, Badge, CodeBlock, Code, DocLayout, H2, P, MethodTag */
const { useState: useGuideState } = React;

/* ---------- On this page (TOC rail) ---------- */
function OnThisPage({ items }) {
  return (
    <div style={{ paddingLeft: 20, borderLeft: "1px solid var(--rc-line)" }}>
      <p style={{ fontFamily: "var(--rc-font-body)", fontSize: 11.5, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--rc-text-3)", margin: "0 0 14px" }}>On this page</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
        {items.map((it) => (
          <a key={it.id} href={"#" + it.id} style={{ fontSize: 13.5, color: "var(--rc-text-2)", lineHeight: 1.4 }}
            onClick={(e) => { e.preventDefault(); document.getElementById(it.id)?.scrollIntoView({ behavior: "smooth", block: "start" }); }}>
            {it.label}
          </a>
        ))}
      </div>
      <div style={{ marginTop: 26, paddingTop: 22, borderTop: "1px solid var(--rc-line)", display: "flex", flexDirection: "column", gap: 12 }}>
        <a href="#" onClick={(e) => e.preventDefault()} style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 13, color: "var(--rc-text-2)", fontWeight: 500 }}>
          <Icon name="github" size={14} color="var(--rc-text-3)" /> Edit on GitHub
        </a>
        <a href="#" onClick={(e) => e.preventDefault()} style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 13, color: "var(--rc-text-2)", fontWeight: 500 }}>
          <Icon name="message-circle-question" size={14} color="var(--rc-text-3)" /> Ask the community
        </a>
      </div>
    </div>
  );
}

function GuideHead({ eyebrow, title, sub }) {
  return (
    <div style={{ marginBottom: 8 }}>
      <p className="rc-eyebrow" style={{ marginBottom: 12 }}>{eyebrow}</p>
      <h1 style={{ fontSize: 38, fontWeight: 700, lineHeight: 1.08, marginBottom: 16 }}>{title}</h1>
      <p style={{ fontSize: 18.5, color: "var(--rc-text-2)", lineHeight: 1.6, maxWidth: 640 }}>{sub}</p>
    </div>
  );
}

function Callout({ icon = "info", tone = "accent", title, children }) {
  const tones = {
    accent: { bg: "var(--rc-accent-tint)", bd: "var(--rc-accent-100)", ic: "var(--rc-accent)" },
    teal: { bg: "var(--rc-teal-soft)", bd: "transparent", ic: "var(--rc-teal)" },
    warning: { bg: "var(--rc-amber-soft)", bd: "transparent", ic: "var(--rc-amber)" },
  }[tone];
  return (
    <div style={{ display: "flex", gap: 12, padding: "14px 16px", background: tones.bg, border: `1px solid ${tones.bd}`, borderRadius: "var(--rc-r-md)", margin: "8px 0 20px", maxWidth: 660 }}>
      <Icon name={icon} size={18} color={tones.ic} style={{ marginTop: 2 }} />
      <div style={{ fontSize: 14, color: "var(--rc-text-2)", lineHeight: 1.6 }}>
        {title && <strong style={{ color: "var(--rc-text)", fontWeight: 600 }}>{title} </strong>}
        {children}
      </div>
    </div>
  );
}

function StepNum({ n }) {
  return <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 26, height: 26, borderRadius: 8, background: "var(--rc-ink)", color: "#fff", fontFamily: "var(--rc-font-display)", fontWeight: 600, fontSize: 13, flexShrink: 0 }}>{n}</span>;
}

/* ---------- Introduction ---------- */
function Introduction({ nav }) {
  const cards = [
    { icon: "rocket", title: "Quickstart", desc: "Make your first live API call in under five minutes.", to: "docs:quickstart" },
    { icon: "key-round", title: "Authentication", desc: "Generate keys and sign every request securely.", to: "docs:authentication" },
    { icon: "globe", title: "Domains API", desc: "Search, register, renew and transfer across 800+ TLDs.", to: "docs:check-availability" },
    { icon: "sparkles", title: "AI & MCP", desc: "Expose the whole platform to your AI agents.", to: "docs:mcp" },
  ];
  return (
    <DocLayout rail={<OnThisPage items={[{ id: "g-base", label: "Base URL" }, { id: "g-explore", label: "Explore the API" }, { id: "g-design", label: "API design" }]} />}>
      <GuideHead eyebrow="Get Started" title="The ResellerClub API" sub="A modern REST API for domains, hosting, SSL and email — built so resellers can automate everything from availability checks to renewals, and so AI agents can do it for them." />
      <H2 id="g-base">Base URL</H2>
      <P>Every endpoint lives under a single versioned base URL. All requests are made over HTTPS; calls made over plain HTTP are rejected.</P>
      <CodeBlock lang="js" label="Base URL" compact code={'https://api.resellerclub.com/v2'} style={{ maxWidth: 660 }} />
      <H2 id="g-explore">Explore the API</H2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, maxWidth: 660, marginTop: 4 }}>
        {cards.map((c) => (
          <button key={c.title} onClick={() => nav(c.to)} style={{
            textAlign: "left", cursor: "pointer", background: "var(--rc-white)", border: "1px solid var(--rc-line)",
            borderRadius: "var(--rc-r-lg)", padding: 18, transition: "all var(--rc-dur) var(--rc-ease)",
          }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "var(--rc-shadow-md)"; e.currentTarget.style.borderColor = "var(--rc-line-strong)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "var(--rc-line)"; e.currentTarget.style.transform = "none"; }}>
            <div style={{ width: 38, height: 38, borderRadius: 10, background: "var(--rc-accent-50)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
              <Icon name={c.icon} size={19} color="var(--rc-accent)" />
            </div>
            <p style={{ fontFamily: "var(--rc-font-display)", fontWeight: 600, fontSize: 16, margin: "0 0 5px" }}>{c.title}</p>
            <p style={{ fontSize: 13.5, color: "var(--rc-text-2)", margin: 0, lineHeight: 1.5 }}>{c.desc}</p>
          </button>
        ))}
      </div>
      <H2 id="g-design">API design</H2>
      <P>The API is resource-oriented, uses predictable URLs, returns JSON for every response, and uses standard HTTP verbs and status codes. Authentication is via bearer keys, errors come back in a consistent envelope, and every list endpoint is cursor-paginated.</P>
    </DocLayout>
  );
}

/* ---------- Quickstart ---------- */
function Quickstart() {
  const steps = [
    { n: 1, title: "Install the SDK", body: <P>The official Node.js SDK wraps every endpoint with full TypeScript types. Install it from npm.</P>, code: { lang: "js", label: "Terminal", code: "npm install @resellerclub/sdk" } },
    { n: 2, title: "Authenticate", body: <P>Create a key in the dashboard and pass it when constructing the client. Never hard-code keys — read them from the environment.</P>, code: { lang: "js", label: "client.js", code: 'import { ResellerClub } from "@resellerclub/sdk";\n\nconst rc = new ResellerClub({\n  apiKey: process.env.RC_API_KEY,\n});' } },
    { n: 3, title: "Make your first call", body: <P>Check whether a domain is available. This is a read-only call and never debits your wallet.</P>, code: { lang: "js", label: "check.js", code: 'const { results } = await rc.domains.checkAvailability({\n  domains: ["acme.io"],\n});\n\nconsole.log(results[0].available); // true' } },
    { n: 4, title: "Register it", body: <P>Found one that's free? Register it for a customer in a single call. The fee is debited from your reseller wallet.</P>, code: { lang: "js", label: "register.js", code: 'const order = await rc.domains.register({\n  domain: "acme.io",\n  years: 2,\n  customer_id: "cus_8Kd02mQ",\n  privacy: true,\n});\n\nconsole.log(order.status); // "active"' } },
  ];
  return (
    <DocLayout rail={<OnThisPage items={steps.map((s) => ({ id: "qs-" + s.n, label: `${s.n}. ${s.title}` }))} />}>
      <GuideHead eyebrow="Get Started" title="Quickstart" sub="From zero to a registered domain in four steps. You'll need a developer account and an API key — grab both from the dashboard." />
      <Callout icon="zap" tone="teal" title="Heads up.">Test keys (<Code>rc_test_…</Code>) hit a sandbox that mimics the registry without spending real money. Switch to a live key when you're ready.</Callout>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 12 }}>
        {steps.map((s) => (
          <div key={s.n} id={"qs-" + s.n} style={{ scrollMarginTop: 90, paddingTop: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <StepNum n={s.n} />
              <h2 style={{ fontSize: 21, fontWeight: 700 }}>{s.title}</h2>
            </div>
            {s.body}
            <CodeBlock {...s.code} style={{ maxWidth: 660, marginTop: 4 }} />
          </div>
        ))}
      </div>
    </DocLayout>
  );
}

/* ---------- Authentication ---------- */
function Authentication() {
  return (
    <DocLayout rail={<OnThisPage items={[{ id: "a-keys", label: "API keys" }, { id: "a-bearer", label: "Bearer authentication" }, { id: "a-env", label: "Live vs test" }, { id: "a-rotate", label: "Rotating keys" }]} />}>
      <GuideHead eyebrow="Get Started" title="Authentication" sub="The API authenticates every request with a secret key sent as a bearer token. Keys carry your reseller identity and scopes." />
      <H2 id="a-keys">API keys</H2>
      <P>Generate keys from the dashboard under Developers → API keys. Each key is shown once at creation — store it somewhere safe. Keys can be scoped per environment and revoked at any time without affecting your others.</P>
      <H2 id="a-bearer">Bearer authentication</H2>
      <P>Pass your key in the <Code>Authorization</Code> header. The SDK does this for you when you set <Code>apiKey</Code>.</P>
      <CodeBlock lang="js" label="Authorization header" code={'curl https://api.resellerclub.com/v2/domains \\\n  -H "Authorization: Bearer rc_live_8Kd0…"'} style={{ maxWidth: 660 }} />
      <Callout icon="shield-alert" tone="warning" title="Keep keys server-side.">Live keys can register domains and spend your wallet balance. Never ship them in browser code, mobile apps, or public repositories.</Callout>
      <H2 id="a-env">Live vs test</H2>
      <P>Keys prefixed <Code>rc_live_</Code> operate on the real registry and your real wallet. Keys prefixed <Code>rc_test_</Code> hit an isolated sandbox with fake funds — ideal for CI and local development.</P>
      <H2 id="a-rotate">Rotating keys</H2>
      <P>Create a new key, deploy it, then revoke the old one. Revocation is instant. The dashboard shows the last-used time for every key so you can confirm nothing still depends on it before you revoke.</P>
    </DocLayout>
  );
}

/* ---------- Errors ---------- */
function Errors() {
  const codes = [
    { code: "400", name: "invalid_request", desc: "A parameter is missing or malformed." },
    { code: "401", name: "unauthenticated", desc: "Missing, invalid or revoked API key." },
    { code: "402", name: "insufficient_funds", desc: "Your reseller wallet can't cover the order." },
    { code: "404", name: "not_found", desc: "The domain or resource doesn't exist." },
    { code: "409", name: "domain_unavailable", desc: "The domain is taken or in an incompatible state." },
    { code: "429", name: "rate_limited", desc: "Too many requests — back off and retry." },
  ];
  return (
    <DocLayout rail={<OnThisPage items={[{ id: "e-shape", label: "Error shape" }, { id: "e-codes", label: "Status codes" }, { id: "e-retry", label: "Retries" }]} />}>
      <GuideHead eyebrow="Get Started" title="Errors & retries" sub="Errors return a consistent JSON envelope with a machine-readable code, a human message and a request ID for support." />
      <H2 id="e-shape">Error shape</H2>
      <CodeBlock lang="json" label="402 Payment Required" code={'{\n  "error": {\n    "code": "insufficient_funds",\n    "message": "Wallet balance 4.20 USD is below order total 32.00 USD.",\n    "request_id": "req_9Fe10sW3Qe",\n    "docs": "https://developers.resellerclub.com/errors#insufficient_funds"\n  }\n}'} style={{ maxWidth: 660 }} />
      <H2 id="e-codes">Status codes</H2>
      <div style={{ border: "1px solid var(--rc-line)", borderRadius: "var(--rc-r-lg)", overflow: "hidden", maxWidth: 660 }}>
        {codes.map((c, i) => (
          <div key={c.code} style={{ display: "grid", gridTemplateColumns: "60px 200px 1fr", gap: 16, padding: "13px 18px", borderTop: i ? "1px solid var(--rc-line-2)" : "none", alignItems: "center" }}>
            <span style={{ fontFamily: "var(--rc-font-mono)", fontSize: 14, fontWeight: 600, color: c.code.startsWith("4") ? "var(--rc-amber)" : "var(--rc-red)" }}>{c.code}</span>
            <Code>{c.name}</Code>
            <span style={{ fontSize: 14, color: "var(--rc-text-2)" }}>{c.desc}</span>
          </div>
        ))}
      </div>
      <H2 id="e-retry">Retries</H2>
      <P>Retry <Code>429</Code> and <Code>5xx</Code> responses with exponential backoff and jitter. The SDK retries idempotent calls automatically (up to 3 attempts) and honours the <Code>Retry-After</Code> header.</P>
    </DocLayout>
  );
}

/* ---------- Rate limits ---------- */
function RateLimits() {
  return (
    <DocLayout rail={<OnThisPage items={[{ id: "r-limits", label: "Default limits" }, { id: "r-headers", label: "Response headers" }, { id: "r-tiers", label: "Higher limits" }]} />}>
      <GuideHead eyebrow="Get Started" title="Rate limits" sub="Limits protect the platform and are generous enough for almost any reseller workload. They scale with your plan." />
      <H2 id="r-limits">Default limits</H2>
      <P>The Growth plan allows <strong style={{ color: "var(--rc-text)" }}>5,000 requests per minute</strong> per key, with a burst allowance of 200 requests per second. Read endpoints (availability, list) are counted at a fifth of the weight of write endpoints.</P>
      <H2 id="r-headers">Response headers</H2>
      <CodeBlock lang="js" label="Every response" code={'RateLimit-Limit:     5000\nRateLimit-Remaining: 4982\nRateLimit-Reset:     27'} style={{ maxWidth: 660 }} />
      <Callout icon="gauge" tone="accent" title="Watch the headers.">Don't hard-code a delay. Read <Code>RateLimit-Remaining</Code> and slow down as it approaches zero, then resume after <Code>RateLimit-Reset</Code> seconds.</Callout>
      <H2 id="r-tiers">Higher limits</H2>
      <P>Agencies and high-volume resellers can request dedicated limits. Reach out from the dashboard and we'll provision per-key ceilings tailored to your traffic.</P>
    </DocLayout>
  );
}

Object.assign(window, { OnThisPage, GuideHead, Callout, StepNum, Introduction, Quickstart, Authentication, Errors, RateLimits });
