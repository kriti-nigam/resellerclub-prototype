/* ResellerClub Developer Platform — mock data (global RC) */
(function () {
  const BASE = "https://api.resellerclub.com/v2";

  // ---------- API REFERENCE (Domains) ----------
  const endpoints = [
    {
      id: "check-availability",
      group: "Domains",
      method: "GET",
      path: "/domains/available",
      title: "Check availability",
      summary: "Check whether one or more domain names are available to register, across any of the 800+ supported TLDs.",
      params: [
        { name: "domains", in: "query", type: "string[]", required: true, desc: "Comma-separated list of fully-qualified domain names to check." },
        { name: "currency", in: "query", type: "string", required: false, desc: "ISO currency for returned pricing. Defaults to your reseller currency." },
      ],
      node: `import { ResellerClub } from "@resellerclub/sdk";

const rc = new ResellerClub({ apiKey: process.env.RC_API_KEY });

const result = await rc.domains.checkAvailability({
  domains: ["acme.com", "acme.io", "acme.dev"],
  currency: "USD",
});

console.log(result.available);`,
      response: `{
  "results": [
    { "domain": "acme.com", "available": false, "premium": false },
    { "domain": "acme.io",  "available": true,  "premium": false,
      "price": { "register": 32.00, "renew": 38.00, "currency": "USD" } },
    { "domain": "acme.dev", "available": true,  "premium": true,
      "price": { "register": 12.50, "renew": 14.00, "currency": "USD" } }
  ],
  "checked_at": "2026-06-05T09:12:44Z"
}`,
      status: 200,
    },
    {
      id: "register-domain",
      group: "Domains",
      method: "POST",
      path: "/domains",
      title: "Register a domain",
      summary: "Register an available domain on behalf of one of your customers. Contacts, nameservers and add-ons are set in a single call.",
      params: [
        { name: "domain", in: "body", type: "string", required: true, desc: "The domain name to register." },
        { name: "years", in: "body", type: "integer", required: true, desc: "Registration term in years (1–10)." },
        { name: "customer_id", in: "body", type: "string", required: true, desc: "ID of the customer this domain belongs to." },
        { name: "nameservers", in: "body", type: "string[]", required: false, desc: "Up to 13 nameservers. Defaults to your reseller DNS." },
        { name: "privacy", in: "body", type: "boolean", required: false, desc: "Enable free WHOIS privacy protection." },
        { name: "auto_renew", in: "body", type: "boolean", required: false, desc: "Charge your wallet automatically before expiry." },
      ],
      node: `import { ResellerClub } from "@resellerclub/sdk";

const rc = new ResellerClub({ apiKey: process.env.RC_API_KEY });

const order = await rc.domains.register({
  domain: "acme.io",
  years: 2,
  customer_id: "cus_8Kd02mQ",
  privacy: true,
  auto_renew: true,
});

console.log(order.id, order.status);`,
      response: `{
  "id": "ord_3mP9aQ7Lx",
  "domain": "acme.io",
  "status": "active",
  "registered_at": "2026-06-05T09:13:10Z",
  "expires_at": "2028-06-05T09:13:10Z",
  "privacy": true,
  "auto_renew": true,
  "amount": { "value": 64.00, "currency": "USD" },
  "nameservers": ["ns1.resellerclub.net", "ns2.resellerclub.net"]
}`,
      status: 201,
    },
    {
      id: "renew-domain",
      group: "Domains",
      method: "POST",
      path: "/domains/{domain}/renew",
      title: "Renew a domain",
      summary: "Extend the registration term of an existing domain. The renewal fee is debited from your reseller wallet.",
      params: [
        { name: "domain", in: "path", type: "string", required: true, desc: "The domain to renew." },
        { name: "years", in: "body", type: "integer", required: true, desc: "Number of years to add (1–10)." },
      ],
      node: `import { ResellerClub } from "@resellerclub/sdk";

const rc = new ResellerClub({ apiKey: process.env.RC_API_KEY });

const order = await rc.domains.renew("acme.io", { years: 1 });

console.log(order.expires_at);`,
      response: `{
  "id": "ord_7Qw1nL2Vx",
  "domain": "acme.io",
  "status": "active",
  "renewed_at": "2026-06-05T09:14:02Z",
  "expires_at": "2029-06-05T09:13:10Z",
  "amount": { "value": 38.00, "currency": "USD" }
}`,
      status: 200,
    },
    {
      id: "transfer-domain",
      group: "Domains",
      method: "POST",
      path: "/domains/transfers",
      title: "Transfer a domain in",
      summary: "Initiate an inbound transfer using the domain's authorization (EPP) code. Returns a transfer order you can poll for status.",
      params: [
        { name: "domain", in: "body", type: "string", required: true, desc: "The domain being transferred in." },
        { name: "auth_code", in: "body", type: "string", required: true, desc: "EPP / authorization code from the losing registrar." },
        { name: "customer_id", in: "body", type: "string", required: true, desc: "Customer who will own the domain." },
      ],
      node: `import { ResellerClub } from "@resellerclub/sdk";

const rc = new ResellerClub({ apiKey: process.env.RC_API_KEY });

const transfer = await rc.domains.transferIn({
  domain: "acme.org",
  auth_code: "x7-Kd2!pQ9",
  customer_id: "cus_8Kd02mQ",
});

console.log(transfer.status); // "pending_admin_approval"`,
      response: `{
  "id": "trf_5Hn8kR0Zt",
  "domain": "acme.org",
  "status": "pending_admin_approval",
  "initiated_at": "2026-06-05T09:15:20Z",
  "estimated_completion": "2026-06-10T09:15:20Z",
  "amount": { "value": 11.00, "currency": "USD" }
}`,
      status: 202,
    },
    {
      id: "list-domains",
      group: "Domains",
      method: "GET",
      path: "/domains",
      title: "List domains",
      summary: "Page through every domain under your reseller account, filtered by status, customer or expiry window.",
      params: [
        { name: "status", in: "query", type: "string", required: false, desc: "active · expired · pending_transfer · suspended" },
        { name: "customer_id", in: "query", type: "string", required: false, desc: "Filter to a single customer." },
        { name: "limit", in: "query", type: "integer", required: false, desc: "Page size, 1–100. Defaults to 25." },
      ],
      node: `import { ResellerClub } from "@resellerclub/sdk";

const rc = new ResellerClub({ apiKey: process.env.RC_API_KEY });

const page = await rc.domains.list({ status: "active", limit: 25 });

for (const d of page.data) {
  console.log(d.domain, d.expires_at);
}`,
      response: `{
  "data": [
    { "domain": "acme.io",  "status": "active", "expires_at": "2028-06-05T09:13:10Z" },
    { "domain": "acme.dev", "status": "active", "expires_at": "2027-02-19T11:04:00Z" }
  ],
  "has_more": true,
  "next_cursor": "dmt_QZ8a1"
}`,
      status: 200,
    },
    {
      id: "update-nameservers",
      group: "Domains",
      method: "PUT",
      path: "/domains/{domain}/nameservers",
      title: "Update nameservers",
      summary: "Replace the nameservers for a domain. Changes propagate to the registry within minutes.",
      params: [
        { name: "domain", in: "path", type: "string", required: true, desc: "The domain to update." },
        { name: "nameservers", in: "body", type: "string[]", required: true, desc: "1–13 nameserver hostnames." },
      ],
      node: `import { ResellerClub } from "@resellerclub/sdk";

const rc = new ResellerClub({ apiKey: process.env.RC_API_KEY });

await rc.domains.updateNameservers("acme.io", {
  nameservers: ["ns1.cloudhost.com", "ns2.cloudhost.com"],
});`,
      response: `{
  "domain": "acme.io",
  "nameservers": ["ns1.cloudhost.com", "ns2.cloudhost.com"],
  "updated_at": "2026-06-05T09:16:41Z"
}`,
      status: 200,
    },
  ];

  // ---------- DASHBOARD ----------
  const usageSeries = [
    1840, 2210, 1990, 2470, 2680, 2310, 1520, 1380, 2590, 3120, 2980, 3340, 3610, 3180,
  ];
  const orders = [
    { id: "ord_3mP9aQ7Lx", type: "Registration", domain: "acme.io", customer: "Northwind Studio", amount: 64.0, status: "active", date: "Jun 5, 2026" },
    { id: "trf_5Hn8kR0Zt", type: "Transfer in", domain: "acme.org", customer: "Northwind Studio", amount: 11.0, status: "pending", date: "Jun 5, 2026" },
    { id: "ord_7Qw1nL2Vx", type: "Renewal", domain: "lumen.dev", customer: "Pixel & Co", amount: 38.0, status: "active", date: "Jun 4, 2026" },
    { id: "ord_2Bd44kP1Mn", type: "Registration", domain: "harborfreight.shop", customer: "Harbor Goods", amount: 28.0, status: "active", date: "Jun 4, 2026" },
    { id: "ord_9Fe10sW3Qe", type: "Registration", domain: "studioeleven.co", customer: "Studio Eleven", amount: 24.0, status: "active", date: "Jun 3, 2026" },
    { id: "ord_4Gh72bN8Tu", type: "Renewal", domain: "northwind.io", customer: "Northwind Studio", amount: 38.0, status: "failed", date: "Jun 3, 2026" },
  ];
  const apiKeys = [
    { id: "k1", label: "Production", prefix: "rc_live_8Kd0", created: "Jan 12, 2026", lastUsed: "2 min ago", env: "live", calls: "1.2M" },
    { id: "k2", label: "Staging", prefix: "rc_test_2mQ9", created: "Mar 02, 2026", lastUsed: "Yesterday", env: "test", calls: "44.1K" },
    { id: "k3", label: "CI / GitHub Actions", prefix: "rc_live_Pq71", created: "Apr 21, 2026", lastUsed: "6 days ago", env: "live", calls: "9.8K" },
  ];

  const RC = {
    BASE,
    endpoints,
    groups: ["Domains"],
    languages: ["Node.js"],
    dashboard: {
      account: { name: "Northwind Hosting", resellerId: "rsl_41882", plan: "Growth", funds: 4820.55, currency: "USD" },
      stats: [
        { label: "API calls (30d)", value: "412.9K", delta: "+18.2%", trend: "up" },
        { label: "Success rate", value: "99.94%", delta: "+0.03%", trend: "up" },
        { label: "Avg latency", value: "126ms", delta: "−14ms", trend: "up" },
        { label: "Active domains", value: "8,241", delta: "+126", trend: "up" },
      ],
      usageSeries,
      rateLimit: { used: 3180, limit: 5000 },
      orders,
      apiKeys,
    },
  };

  window.RC = RC;
})();
