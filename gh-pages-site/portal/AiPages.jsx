/* global React, Icon, Button, Badge, CodeBlock, Code, DocLayout, H2, P, OnThisPage, GuideHead, Callout, MethodTag */

/* ---------- Model Context Protocol ---------- */
function MCP() {
  const tools = [
    { name: "domains.check_availability", method: "GET", desc: "Check if domains can be registered" },
    { name: "domains.register", method: "POST", desc: "Register a domain for a customer" },
    { name: "domains.renew", method: "POST", desc: "Extend a domain's term" },
    { name: "domains.transfer_in", method: "POST", desc: "Start an inbound transfer" },
    { name: "domains.list", method: "GET", desc: "List domains under the account" },
    { name: "domains.update_nameservers", method: "PUT", desc: "Point a domain at new DNS" },
  ];
  const clients = [
    { name: "Claude Desktop", icon: "sparkles" },
    { name: "Cursor", icon: "code-2" },
    { name: "VS Code", icon: "code" },
    { name: "Any MCP client", icon: "plug" },
  ];
  return (
    <DocLayout rail={<OnThisPage items={[{ id: "m-what", label: "What is MCP?" }, { id: "m-connect", label: "Connect a client" }, { id: "m-tools", label: "Available tools" }, { id: "m-auth", label: "Agent auth & limits" }]} />}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
        <Badge tone="accent"><Icon name="sparkles" size={12} /> New</Badge>
        <span style={{ fontSize: 13, color: "var(--rc-text-3)", fontWeight: 600 }}>AI &amp; MCP</span>
      </div>
      <GuideHead eyebrow="" title="Model Context Protocol" sub="Give any AI agent safe, structured access to the ResellerClub platform. The MCP server exposes every Domains endpoint as a typed tool — no glue code required." />
      <Callout icon="terminal" tone="accent" title="One command.">Point your agent at <Code>https://mcp.resellerclub.com</Code> with your API key and it can search, register and manage domains on your behalf.</Callout>

      <H2 id="m-what">What is MCP?</H2>
      <P>The Model Context Protocol is an open standard for connecting AI assistants to external tools and data. Instead of teaching an agent to format raw HTTP requests, you give it a server that advertises a catalogue of tools with typed inputs and outputs. ResellerClub runs a hosted MCP server that mirrors this API one-to-one.</P>

      <H2 id="m-connect">Connect a client</H2>
      <P>Add the ResellerClub server to your MCP client's config. Here it is for Claude Desktop — Cursor and VS Code use the same block.</P>
      <CodeBlock lang="json" label="claude_desktop_config.json" code={'{\n  "mcpServers": {\n    "resellerclub": {\n      "url": "https://mcp.resellerclub.com",\n      "headers": {\n        "Authorization": "Bearer rc_live_8Kd0…"\n      }\n    }\n  }\n}'} style={{ maxWidth: 660 }} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, maxWidth: 660, margin: "8px 0 8px" }}>
        {clients.map((c) => (
          <div key={c.name} style={{ border: "1px solid var(--rc-line)", borderRadius: "var(--rc-r-md)", padding: "14px 12px", textAlign: "center", background: "var(--rc-white)" }}>
            <Icon name={c.icon} size={20} color="var(--rc-text-2)" style={{ marginBottom: 8 }} />
            <p style={{ fontSize: 12.5, fontWeight: 600, margin: 0 }}>{c.name}</p>
          </div>
        ))}
      </div>

      <H2 id="m-tools">Available tools</H2>
      <P>The server advertises one tool per endpoint. Inputs and outputs are validated against the same schema as the REST API, so an agent can't send a malformed request.</P>
      <div style={{ border: "1px solid var(--rc-line)", borderRadius: "var(--rc-r-lg)", overflow: "hidden", maxWidth: 660 }}>
        {tools.map((t, i) => (
          <div key={t.name} style={{ display: "grid", gridTemplateColumns: "54px 1fr", gap: 14, padding: "13px 16px", borderTop: i ? "1px solid var(--rc-line-2)" : "none", alignItems: "center" }}>
            <MethodTag method={t.method} size="sm" />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, minWidth: 0 }}>
              <Code>{t.name}</Code>
              <span style={{ fontSize: 13, color: "var(--rc-text-2)", textAlign: "right" }}>{t.desc}</span>
            </div>
          </div>
        ))}
      </div>

      <H2 id="m-auth">Agent auth &amp; limits</H2>
      <P>Agents authenticate with the same keys as the REST API. We recommend minting a dedicated key for agent use so you can scope and revoke it independently. Write tools like <Code>domains.register</Code> can be put behind a confirmation step, and per-agent spend caps keep automated workflows safe.</P>
    </DocLayout>
  );
}

/* ---------- llms.txt ---------- */
function Llms() {
  return (
    <DocLayout rail={<OnThisPage items={[{ id: "l-what", label: "llms.txt" }, { id: "l-md", label: "Markdown views" }, { id: "l-use", label: "Feeding context" }]} />}>
      <GuideHead eyebrow="AI & MCP" title="llms.txt & context" sub="Every page in these docs is machine-readable. Point an LLM at our context files and it can answer questions about the API without guessing." />
      <H2 id="l-what">llms.txt</H2>
      <P>We publish an <Code>llms.txt</Code> index and a full <Code>llms-full.txt</Code> dump at the domain root. Both follow the emerging llms.txt convention so coding assistants can discover and ingest the entire reference in one fetch.</P>
      <CodeBlock lang="js" label="Context endpoints" code={'https://developers.resellerclub.com/llms.txt        # curated index\nhttps://developers.resellerclub.com/llms-full.txt   # everything, inlined'} style={{ maxWidth: 660 }} />
      <H2 id="l-md">Markdown views</H2>
      <P>Append <Code>.md</Code> to any docs URL to get the raw Markdown source of that page — clean context with no navigation chrome, perfect for retrieval pipelines.</P>
      <H2 id="l-use">Feeding context</H2>
      <P>For agentic coding, drop the <Code>llms-full.txt</Code> URL into your assistant's context. For chat support bots, index the per-page Markdown so answers can cite the exact section.</P>
    </DocLayout>
  );
}

/* ---------- Changelog ---------- */
function Changelog() {
  const entries = [
    { date: "Jun 2, 2026", tag: "MCP", tone: "accent", title: "ResellerClub MCP server is live", body: "Connect Claude, Cursor or any MCP client to the platform. Every Domains endpoint is now an agent tool." },
    { date: "May 18, 2026", tag: "Added", tone: "teal", title: "Bulk availability checks", body: "checkAvailability now accepts up to 500 domains per call, returning premium pricing inline." },
    { date: "Apr 30, 2026", tag: "Improved", tone: "violet", title: "Faster transfers", body: "Inbound transfer status now updates in near real-time via webhooks instead of hourly polling." },
    { date: "Apr 9, 2026", tag: "Added", tone: "teal", title: "Node.js SDK 2.0", body: "Full TypeScript types, automatic retries with backoff, and first-class cursor pagination." },
    { date: "Mar 21, 2026", tag: "Fixed", tone: "warning", title: "Idempotency keys on renewals", body: "Renewals now accept an Idempotency-Key header to make retries safe." },
  ];
  return (
    <DocLayout rail={<OnThisPage items={[{ id: "c-feed", label: "Recent updates" }, { id: "c-sub", label: "Subscribe" }]} />}>
      <GuideHead eyebrow="Resources" title="Changelog" sub="Every meaningful change to the API, SDKs and platform. Backwards-incompatible changes are always announced in advance." />
      <div id="c-feed" style={{ position: "relative", marginTop: 16, paddingLeft: 26, maxWidth: 660 }}>
        <div style={{ position: "absolute", left: 4, top: 8, bottom: 8, width: 2, background: "var(--rc-line)" }} />
        {entries.map((e, i) => (
          <div key={i} style={{ position: "relative", paddingBottom: 28 }}>
            <span style={{ position: "absolute", left: -26, top: 5, width: 10, height: 10, borderRadius: 999, background: "var(--rc-accent)", border: "2px solid var(--rc-white)", boxShadow: "0 0 0 3px var(--rc-accent-50)" }} />
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 7 }}>
              <Badge tone={e.tone}>{e.tag}</Badge>
              <span style={{ fontSize: 13, color: "var(--rc-text-3)", fontFamily: "var(--rc-font-mono)" }}>{e.date}</span>
            </div>
            <p style={{ fontFamily: "var(--rc-font-display)", fontWeight: 600, fontSize: 17, margin: "0 0 5px" }}>{e.title}</p>
            <p style={{ fontSize: 14.5, color: "var(--rc-text-2)", margin: 0, lineHeight: 1.6 }}>{e.body}</p>
          </div>
        ))}
      </div>
      <div id="c-sub" style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 18px", border: "1px solid var(--rc-line)", borderRadius: "var(--rc-r-lg)", background: "var(--rc-bg-subtle)", maxWidth: 660, marginTop: 8 }}>
        <Icon name="rss" size={18} color="var(--rc-accent)" />
        <span style={{ flex: 1, fontSize: 14, color: "var(--rc-text-2)" }}>Subscribe to the changelog via RSS or the developer newsletter.</span>
        <Button size="sm" variant="secondary">Subscribe</Button>
      </div>
    </DocLayout>
  );
}

/* ---------- SDKs ---------- */
function SDKs() {
  const sdks = [
    { name: "Node.js", icon: "hexagon", status: "Stable", tone: "success", v: "v2.0.1", cmd: "npm install @resellerclub/sdk" },
    { name: "Python", icon: "circle-dot", status: "Beta", tone: "warning", v: "v0.9.0", cmd: "pip install resellerclub" },
    { name: "PHP", icon: "code", status: "Beta", tone: "warning", v: "v0.8.2", cmd: "composer require resellerclub/sdk" },
    { name: "Go", icon: "binary", status: "Coming soon", tone: "neutral", v: "—", cmd: "// on the roadmap" },
  ];
  return (
    <DocLayout rail={<OnThisPage items={[{ id: "s-official", label: "Official SDKs" }, { id: "s-tools", label: "Tools" }]} />}>
      <GuideHead eyebrow="Resources" title="SDKs & libraries" sub="Use an official SDK to skip the boilerplate. They handle auth, retries, pagination and typing for you." />
      <H2 id="s-official">Official SDKs</H2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, maxWidth: 660 }}>
        {sdks.map((s) => (
          <div key={s.name} style={{ border: "1px solid var(--rc-line)", borderRadius: "var(--rc-r-lg)", padding: 18, background: "var(--rc-white)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <div style={{ width: 36, height: 36, borderRadius: 9, background: "var(--rc-bg-subtle)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name={s.icon} size={18} color="var(--rc-text-2)" />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontFamily: "var(--rc-font-display)", fontWeight: 600, fontSize: 15.5, margin: 0 }}>{s.name}</p>
                <span style={{ fontFamily: "var(--rc-font-mono)", fontSize: 11.5, color: "var(--rc-text-3)" }}>{s.v}</span>
              </div>
              <Badge tone={s.tone}>{s.status}</Badge>
            </div>
            <code style={{ display: "block", fontFamily: "var(--rc-font-mono)", fontSize: 12, color: "var(--rc-text-2)", background: "var(--rc-bg-subtle)", border: "1px solid var(--rc-line)", borderRadius: 8, padding: "9px 11px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{s.cmd}</code>
          </div>
        ))}
      </div>
      <H2 id="s-tools">Tools</H2>
      <P>Beyond the SDKs we publish a Postman collection, an OpenAPI 3.1 spec, and the MCP server — so whatever your stack, there's a typed way in.</P>
    </DocLayout>
  );
}

Object.assign(window, { MCP, Llms, Changelog, SDKs });
