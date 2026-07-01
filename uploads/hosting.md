# Hosting

- Page name: Hosting
- URL path: /products/hosting
- Goal of page: Make the case for reselling the full hosting suite, powered by Oracle Cloud, to your customers under your own brand on wholesale terms, and drive reseller sign-ups. Hosting is framed as a deep attach product around domains, never as the company headline. No retail buy-now, no per-plan order now or checkout.
- Primary CTA: Become a reseller
- Secondary CTA: Explore the API

## Build spec

Build on the existing resellerclub-ds design system (accent #1E66FF, Space Grotesk display, Hanken Grotesk body, JetBrains Mono for prices and spec strings). Sentence-case headlines with an optional accent-blue highlighted noun. ALL-CAPS eyebrows with wide tracking. Lucide icons only. No retail buy-now anywhere, no per-plan order now, no add-to-cart, no checkout. No live signup or provisioning controls. Keep all agent and MCP language off this page.

1. Hero (resell hosting under your brand, powered by Oracle Cloud)
   - Layout: split hero, signature pattern. Copy column left, illustration panel right. Standard top nav above (Products | Platform & API | Who it's for | Pricing | Resources, right side Sign in, Become a reseller).
   - Left column: eyebrow, H1, subhead paragraph, two CTAs side by side (primary solid "Become a reseller", secondary outline "Explore the API"), and a thin trust line of two small inline items below the buttons (one "powered by Oracle Cloud" line, one heritage hard fact).
   - Right column: a NON-transacting illustration of a hosting control-panel concept. Render a static, clearly illustrative panel that looks like a reseller hosting dashboard row, not a retail plan picker. Show a sample site row in mono with status chips (e.g. Active, Provisioning, Suspended) as a styling concept only. Add a small caption label marking it as an interface illustration, not a live panel. Behind the panel, a soft radial blue glow on a light surface.
   - No plan selector, no "buy" button, no per-resource price-to-buy.

2. The hosting suite you can resell
   - Layout: section eyebrow + H2 + one-line intro, then a card grid (3 across on desktop, 2 on tablet, stacked on mobile). Thin 1px card borders, slate-tinted shadow, one Lucide icon per card.
   - Seven product cards, one per hosting type: Shared hosting (Linux and Windows), Reseller hosting, WordPress hosting, Cloud hosting, VPS hosting, Managed VPS, Dedicated servers. Each card: icon, card title, 2 to 3 sentence resell-framed blurb, and a single "from" wholesale price teaser in mono (marked placeholder) with a small "wholesale" label.
   - Below the grid: one volume note line and a single text/button link to the Pricing page. Make clear all numbers are representative placeholders. Prices in USD.
   - No per-card buy button, no order now, no plan-level controls. The only action in this section is "See hosting pricing" linking to /pricing.

3. Why resell hosting with ResellerClub
   - Layout: section eyebrow + H2 + one-line intro, then a 4-card grid (2x2 on desktop, stacked on mobile). Thin card borders, slate-tinted shadow, Lucide icon per card.
   - Four cards: Oracle Cloud infrastructure, white-label, margin you keep, one account with your domains. Each card: icon, short title, 2 to 3 sentence body. Any OCI spec, region, capability, or uptime figure must be a marked placeholder.
   - Below the grid: a single full-width "powered by Oracle Cloud" band on an ink (#0C1322) surface with one supporting line and an inline text link to Platform & API.

4. Built to attach to domains
   - Layout: section eyebrow + H2 + one intro line. Then a horizontal row of supporting points or a compact 2 to 3 item layout, framed around the attach economics: bundle domains, hosting, email, and SSL; recurring revenue; customer stickiness.
   - Keep this visually lighter than sections 2 and 3 so domains stay the lead. Include inline placeholder links to /products/domains, /products/email, and /products/ssl.
   - Optional small mono illustration: a non-transacting "customer stack" list mock showing a domain with hosting, email, and SSL attached. Static illustration only.

5. Management and support
   - Layout: section eyebrow + H2 + intro. Then a feature list rendered as a two-column checklist or a 2x2 icon-row grid. Each item: small Lucide icon, label, one-line description framed for the reseller running many customer sites.
   - Items: reseller control panel, migration help, support availability, technical support. Wrap support availability as a placeholder.

6. Ways to sell hosting
   - Layout: section eyebrow + H2 + intro. Then a 3-card grid, one card per channel: branded storefront, reseller control panel, API.
   - Each card: icon, channel name, 2 to 3 sentence body describing how the reseller uses it. The API card carries the secondary CTA "Explore the API" as an inline link. Describe the API for provisioning and managing hosting only. Do not mention agent or MCP support anywhere on this page.
   - Keep storefront described as a non-transacting concept here. Do not promise retail checkout copy.

7. Proof strip
   - Layout: full-width band, light or ink surface. A row of stat blocks: large mono number + label. Lead with the two hard facts verbatim, then placeholder stats.
   - Use exactly: "20+ years as a domain reseller platform" and "100+ ICANN-accredited registrars on OrderBox". All other figures, including any hosting-specific count or uptime, marked placeholders.

8. Closing CTA
   - Layout: full-width ink (#0C1322) CTA section with soft radial blue glow. Centered eyebrow + H2 + one-line subhead + two CTAs (primary "Become a reseller", secondary "Explore the API"). A small reassurance microcopy line beneath.
   - Standard footer below.

## Copy

### Section 1: Hero

Eyebrow: HOSTING, RESELL UNDER YOUR BRAND

H1: Resell hosting to your customers, powered by Oracle Cloud.

Subhead: Add a full hosting suite to the domains you already sell. Shared, reseller, WordPress, cloud, VPS, and dedicated servers, all white-label, all wholesale, all on one account. You set the retail price. You own the customer relationship. The infrastructure runs on Oracle Cloud, so you do not run data centers.

Primary CTA: Become a reseller
Secondary CTA: Explore the API

Trust line (below buttons): Powered by Oracle Cloud   ·   20+ years as a domain reseller platform

Illustration panel caption (microcopy): Interface illustration. Hosting is managed in your reseller control panel, not a public plan picker.

Illustration sample rows (mono, illustrative only):
- yourcustomer.com   ·   Active
- studio-site.app   ·   Provisioning
- legacy.site   ·   Suspended

### Section 2: The hosting suite you can resell

Eyebrow: THE HOSTING SUITE

H2: One hosting suite, resold under your brand.

Intro: Resell the hosting type each customer needs, from a first shared site to a dedicated server, all on the same wholesale account. Representative wholesale starting prices are shown below. All figures are placeholders for this prototype and are confirmed on the Pricing page. Prices in USD.

Card 1
Title: Shared hosting (Linux and Windows)
Body: Resell entry hosting for small sites and first projects, on Linux or Windows. A low starting point for customers who need a site online without managing a server. From [PLACEHOLDER price: from $X.XX/mo]   wholesale

Card 2
Title: Reseller hosting
Body: Resell hosting to customers who want to resell it themselves, with their own accounts and resource allocation under your brand. A way to serve sub-resellers and agencies in your base. From [PLACEHOLDER price: from $X.XX/mo]   wholesale

Card 3
Title: WordPress hosting
Body: Resell hosting tuned for WordPress sites, so your customers get a managed WordPress setup without configuring it themselves. Attaches naturally to the domains they register with you. From [PLACEHOLDER price: from $X.XX/mo]   wholesale

Card 4
Title: Cloud hosting
Body: Resell cloud hosting for customers who need room to grow, with resources that scale as their traffic does. Built on Oracle Cloud. [PLACEHOLDER: scaling or resource spec] From [PLACEHOLDER price: from $X.XX/mo]   wholesale

Card 5
Title: VPS hosting
Body: Resell virtual private servers for customers who want root access and control over their environment. They get an isolated server. You get the margin. From [PLACEHOLDER price: from $X.XX/mo]   wholesale

Card 6
Title: Managed VPS
Body: Resell VPS with management handled, so customers who want control but not server administration get both. A higher-value tier for your base. From [PLACEHOLDER price: from $X.XX/mo]   wholesale

Card 7
Title: Dedicated servers
Body: Resell single-tenant dedicated servers for customers with the heaviest workloads, with full resources and no neighbors. The top of the suite for your largest accounts. From [PLACEHOLDER price: from $X.XX/mo]   wholesale

Volume note: The more you sell, the more you save. Wholesale tiers step down as your volume grows. [PLACEHOLDER: representative tier example, to be signed off]

CTA (link to Pricing): See hosting pricing

Microcopy: Numbers shown are representative placeholders. Full plan list and current wholesale tiers live on the Pricing page. There is no retail checkout here.

### Section 3: Why resell hosting with ResellerClub

Eyebrow: WHY HOSTING WITH US

H2: Oracle Cloud infrastructure, white-label, and margin that stays with you.

Intro: Hosting is recurring revenue that attaches to the domains you already sell. Here is what you get when you resell it on ResellerClub.

Card 1
Title: Powered by Oracle Cloud
Body: The hosting suite runs on Oracle Cloud, so you resell on infrastructure you do not have to build or operate. No data centers to run, no hardware to buy. [PLACEHOLDER: OCI capability or performance detail, to be signed off]

Card 2
Title: White-label by default
Body: Resell hosting under your own brand. Your storefront, your control panel branding, your customer relationship. Your customers stay yours, and they never see ours.

Card 3
Title: Margin you keep
Body: You buy at wholesale and set your own retail price. Margin stays with you on every plan, every month, and every renewal. The more you sell, the more you save, with volume-based tiers.

Card 4
Title: One account with your domains
Body: Hosting sits on the same account as the domains you resell, so you manage both in one place and bill your customers for one stack. No new vendor, no second platform.

Oracle Cloud band (ink surface)
Band line: Powered by Oracle Cloud.
Supporting line: You resell hosting on Oracle Cloud infrastructure and manage it alongside your domains through the same platform and API. See how it works on Platform & API. [PLACEHOLDER: link to /platform-api]

### Section 4: Built to attach to domains

Eyebrow: ATTACH AND GROW

H2: Hosting that attaches to the domains your customers already buy.

Intro: A customer who buys a domain from you needs somewhere to put a site. Hosting is the next product in the same conversation, and it turns a one-time domain into a recurring relationship.

Attach points:
- Bundle the full stack: Sell domains, hosting, email, and SSL together as one offer, under your brand, on one account. [PLACEHOLDER: link to /products/domains] [PLACEHOLDER: link to /products/email] [PLACEHOLDER: link to /products/ssl]
- Recurring revenue: Hosting bills every month or every term, so each attach adds predictable revenue on top of the domain sale.
- Customer stickiness: The more of a customer's stack lives with you, the less reason they have to leave. A domain plus hosting plus email is a relationship, not a transaction.

Illustration caption (microcopy): Illustration of one customer stack: domain, hosting, email, and SSL on a single account.

### Section 5: Management and support

Eyebrow: RUN IT WITH SUPPORT

H2: Manage many customer sites, with help when you need it.

Intro: Resellers run hosting across many customers at once. The platform gives you the tools to manage it and the support to back you.

Management and support items:
- Reseller control panel: Provision, manage, and bill hosting across your customers from one panel, without writing code.
- Migration help: Move existing customer sites onto the platform with migration support, so you can bring a book of business with you. [PLACEHOLDER: migration scope and limits]
- Support availability: Reach a real team when your customers need you. [PLACEHOLDER: 24/7 support availability]
- Technical support: Technical questions go to people who understand a reseller hosting business, not a consumer help desk. [PLACEHOLDER: technical support scope]

### Section 6: Ways to sell hosting

Eyebrow: HOW YOU SELL

H2: Sell hosting the way that fits your business.

Intro: Use a ready storefront, work inside the reseller control panel, or build directly on the API. Many resellers use more than one.

Card 1
Title: Branded storefront
Body: A white-label storefront you sell hosting through, under your brand and your pricing. A fast way to start selling hosting without building a front end yourself. [PLACEHOLDER: storefront detail link]

Card 2
Title: Reseller control panel
Body: Provision and manage hosting, renewals, and customer accounts from one panel. Run day-to-day operations and bulk actions without writing code.

Card 3
Title: API
Body: Build hosting directly into your own platform, billing, and onboarding with a modern REST API, clean docs, and a sandbox. Provision, manage, and renew hosting programmatically alongside your domains.
Inline CTA: Explore the API

### Section 7: Proof strip

Eyebrow: PROOF

H2: A platform built for the channel for 20+ years.

Stat blocks:
- 20+ years as a domain reseller platform
- 100+ ICANN-accredited registrars on OrderBox
- [PLACEHOLDER stat: N+ sites hosted on the platform]
- [PLACEHOLDER stat: hosting uptime, to be signed off]

Logo row label: Trusted by resellers worldwide
Logos: [PLACEHOLDER logo: reseller customer] [PLACEHOLDER logo: reseller customer] [PLACEHOLDER logo: reseller customer] [PLACEHOLDER logo: reseller customer]

Testimonial (optional, below logos): [PLACEHOLDER testimonial: named reseller, role]

### Section 8: Closing CTA

Eyebrow: GET STARTED

H2: Start reselling hosting on a platform built for the channel.

Subhead: Become a reseller and sell hosting under your own brand, at wholesale, on Oracle Cloud infrastructure you do not have to run. Or look at the API first.

Primary CTA: Become a reseller
Secondary CTA: Explore the API

Microcopy: No retail checkout here. This is a wholesale reseller platform. [PLACEHOLDER: onboarding or contact detail]
