# ResellerClub Wholesale Website: Claude Design Build Brief

Consolidated, self-contained brief for building the ResellerClub wholesale website prototype in Claude Design. Everything needed is in this one document: design system, global components, navigation, guardrails, and every page's structure and copy. Generated 2026-06-19.

## What you are building

A prototype of the repositioned ResellerClub public website. ResellerClub is moving from a retail, hosting-led, buy-now site to a wholesale, lead-generation site led by domains. The audience is businesses that resell to their own customers: web hosts, developers and agencies, and AI and website-builder platforms. Reference models for tone and structure are OpenSRS (transparent wholesale pricing) and Realtime Register (partner and solution structure).

The job of the site is to drive partners to "Become a reseller" and developers to "Explore the API". It is lead generation, not a store.

## Scope

8 pages on the resellerclub-ds design system:

1. Homepage, /
2. Domains, /products/domains
3. Hosting, /products/hosting
4. Email, /products/email
5. SSL Certificates, /products/ssl
6. Pricing, /pricing
7. Platform & API, /platform
8. Who it's for: Web hosts and agencies, /who-its-for/web-hosts-agencies

Plus the signup and login experience, built on one shared Auth component (global components Section 9) and detailed in the "Signup and login flows" part:

9. Developer Portal landing, /developers (offers both Start a demo and Become a reseller)
10. Become a reseller, production signup flow, /signup
11. Start a demo, developer and API signup flow, then the existing control panel
12. Sign in and recovery, /login

Reseller and demo are separate accounts with separate API keys. Google and GitHub plus email sign-in apply to both. The repositioning improves the signup and login experience, not only the marketing pages.

This is a prototype. Placeholders marked in square brackets are expected for prices, counts, logos, and testimonials. Do not invent real numbers.

## How to use this brief

1. Build the design system and global components first (the two sections after this one). They are shared across every page.
2. Then build each page in the order below. For each page, use its Build spec for structure and its Copy for the exact text. Apply the global components and guardrails to every page.
3. Build order: Home, Domains, Hosting, Email, SSL, Pricing, Platform & API, Who it's for.
4. Then build the signup and login flows (the "Signup and login flows" part), reusing the Auth component from global components Section 9. Build the Developer Portal landing too, since it is the shared entry to both signups.

## Non-negotiable rules (apply on every page)

- Pure lead generation. No domain search box, no add-to-cart, no checkout, no order-now, no per-plan purchase controls. Use "No retail checkout here. This is a wholesale reseller platform." where a purchase moment would be expected.
- Primary CTA label "Become a reseller" (opens the Auth component, reseller variant). Secondary CTA label "Explore the API" (to the Developer Portal landing, which offers both Start a demo and Become a reseller). On the Platform & API page only, the page-level CTA order reverses; the header chrome stays the same.
- Anchor claim "The wholesale domain registrar built for the people who build the web." appears only on Home and Domains. Other pages use their own H1.
- LogicBoxes is never named. OrderBox is the only platform named, used as a credibility signal (powers 100+ ICANN-accredited registrars, nearly 25 years of domain expertise, compliance handled).
- Agent and MCP language is future-tense only. Keep the "MCP and agents" nav item hidden until it ships.
- Global and geo-neutral. USD pricing. No India or regional lean.
- Only two reseller-heritage facts are stated as fact: "20+ years as a domain reseller platform" and "100+ ICANN-accredited registrars on OrderBox", plus "nearly 25 years of domain expertise" for the OrderBox platform. Everything else is a marked placeholder. No unapproved superlatives.
- No em-dashes, no en-dashes, no emojis, no buzzwords.

---

# Design system and global components

## Global components spec

Shared building blocks used across all 8 pages. Build each once on resellerclub-ds and reuse, so the pages stay consistent and the build is faster.

### Design system

resellerclub-ds. Accent #1E66FF, ink #0C1322. Display font Space Grotesk, body Hanken Grotesk, mono JetBrains Mono (prices, code teasers, spec strings). 10px control radius, pill badges, slate-tinted shadows, accent focus ring. Sentence-case headlines with an optional accent-blue highlighted noun. ALL-CAPS eyebrows with wide tracking. Lucide icons only. No emojis.

### 1. Top navigation (sticky header)

- Left: ResellerClub logo, links to /.
- Links in order: Products | Platform & API | Who it's for | Pricing | Resources. Dropdown contents per sitemap.md.
- Right: Sign in (quiet text link), then Become a reseller (solid accent button).
- Fixed on scroll. Mobile collapses to a hamburger that preserves link order.

### 2. Footer

- Columns mirror the nav: Products | Platform & API | Who it's for | Pricing | Resources | Company.
- Logo and a short descriptor at top-left. Bottom utility row: legal links, region and currency note (USD), Sign in.
- Global and geo-neutral. No India or regional lean.

### 3. CTA bands

- Primary CTA label: Become a reseller. Destination: the Auth component, reseller variant (Section 9), which creates a production reseller account.
- Secondary CTA label: Explore the API. Destination: the Developer Portal landing (/developers), which offers both Start a demo and Become a reseller.
- Sign in (quiet nav link): the Auth component, sign-in variant (/login).
- Closing CTA pattern: full-width ink (#0C1322) band with a soft radial blue glow, eyebrow + H2 + one supporting line + the CTA pair.
- Exception: on /platform the page-level CTA order reverses (Explore the API primary, Become a reseller secondary). The header chrome stays canonical.

### 4. Proof strip

- Full-width band, a row of stat blocks (large mono number or label on top, short descriptor below).
- Canonical credibility cluster: "Nearly 25 years of domain expertise", "100+ ICANN-accredited registrars on OrderBox", a compliance-handled capability block, plus one clearly marked placeholder stat.
- State hard facts verbatim. Never place "20+ years" and "nearly 25 years" as competing stats in the same row; tie them into one statement.

### 5. Card patterns

- Product card: icon, title, 2 to 3 sentence resell-framed blurb, a standalone "from" price teaser line (lowercase "from", marked [PLACEHOLDER price], trailing "wholesale" label), and a "See pricing" link to /pricing.
- Pillar and credibility card: icon, short title, 2 to 3 sentences.
- Thin 1px borders, slate-tinted shadow, one Lucide icon per card.

### 6. Trust line

- Format: short items separated by a spaced middot, for example: item   .   item. Used under hero CTAs and in illustration captions.

### 7. Shared guardrails (apply on every page)

- Pure lead-gen. No domain search box, no add-to-cart, no checkout, no order-now, no per-plan purchase controls. Use "No retail checkout here. This is a wholesale reseller platform." where a purchase moment would be expected.
- Agent and MCP language is future-tense only. The "MCP and agents" nav item stays hidden until Phase 2 ships.
- LogicBoxes is never named. OrderBox is the only platform named, used as a credibility signal.
- All prices, counts, logos, and testimonials are marked [PLACEHOLDER]. Only the approved facts are stated as fact.
- No em-dashes, no en-dashes, no emojis, no buzzwords.

### 8. Oracle Cloud co-brand mark

A single reusable "Powered by Oracle Cloud" lockup, built once and reused everywhere hosting infrastructure is referenced, so the cloud story reads consistently. The mark asserts the partnership only. It never carries an OCI specific (region, uptime, performance, certification); those stay marked placeholders in body copy.

- Composition: an Oracle Cloud logo asset plus the words "Powered by Oracle Cloud" in body font (Hanken Grotesk), set quietly. Keep it visually lighter than the ResellerClub logo, never competing with it.
- Logo asset: render a marked placeholder lockup until the official Oracle Cloud logo is cleared for use. [PLACEHOLDER asset: official Oracle Cloud logo, pending brand-usage clearance]. As a fallback before clearance, use a Lucide cloud icon in the accent color in place of the logo.
- Two renderings, same wording:
  - Inline mark: icon or logo plus "Powered by Oracle Cloud", no container. Used as a trust-line item under hero CTAs and inside captions.
  - Badge pill: the lockup inside a pill, white on ink (#0C1322) or accent text on light. Used on hero illustration panels, the hosting Oracle Cloud band, and product cards that name hosting.
- Placement: hosting hero, hosting Oracle Cloud band (Section 3), the homepage hero trust line, and any product card that names hosting. Use the identical lockup in every spot.
- Color: accent (#1E66FF) or ink text on light surfaces, white on ink. Quiet weight, not a loud badge.

### 9. Authentication (signup and sign in)

One shared auth pattern, used for every entry into an account, so signup and sign-in look and behave the same everywhere. Build it once and reuse it. This replaces the current bare two-step signup, the long legacy OrderBox demo form, and the legacy control-panel login and recovery screens, all of which are inconsistent today.

Shared layout: a centered single-column card on a light surface with a soft radial blue glow, ResellerClub logo above, slim auth header (logo only, not the full marketing nav). 10px radius, slate-tinted shadow, accent focus ring. No third-party push-notification prompt and no auto-opening chat widget over the card.

Auth methods, identical in every variant:

- Primary, stacked at the top, each full width with its brand glyph: Continue with Google, Continue with GitHub. Both active.
- A quiet "or use email" divider.
- Email and Password (show and hide toggle). Use Email as the only identity label everywhere; do not use "Username".
- Signup adds a single consent checkbox (Terms Of Service, Cancellation Policy, Privacy Notice, Reseller Master Agreement) as inline accent links. Sign-in adds Remember me and a Forgot password link.

Two account variants, same pattern, different label and destination:

- Reseller (production), label "Become a reseller". Eyebrow CREATE YOUR RESELLER ACCOUNT. Creates a live reseller account, then the simplified signup (see the Signup and login flows part). Used by the homepage, the marketing pages, and the Developer Portal.
- Demo (developer and API), label "Start a demo". Eyebrow START A DEMO ACCOUNT. Creates a demo reseller account, then deep-links into the existing control panel API page. Used on the Developer Portal and Platform & API.

Account-model rule: a demo account and a live account are separate accounts, each with its own details, API key, and orders. A demo API key does not work on a live account, and going live is a separate signup, not an upgrade. Do not render a test-to-live toggle, and keep the two variants visibly distinct.

Cross-links: signup card footer "Already have an account? Sign in"; sign-in card footer "New here? Become a reseller" and "Just exploring the API? Start a demo". After sign-in, deep-link to the control panel API page for a demo account, or the dashboard for a live account.

### Anchor claim

"The wholesale domain registrar built for the people who build the web." Use only on Home and Domains (it is the company-level claim). Product and segment pages use their own H1.

---

# Sitemap and navigation

## Sitemap and navigation map

Prototype scope: 8 live pages on the resellerclub-ds design system. The navigation also contains links to pages not built in this prototype; those are marked Placeholder. Build the header and footer once as shared components (see global-components.md).

### Live pages (built in this package)

| Page | Path | File |
|---|---|---|
| Homepage | / | home.md |
| Domains | /products/domains | domains.md |
| Hosting | /products/hosting | hosting.md |
| Email | /products/email | email.md |
| SSL Certificates | /products/ssl | ssl.md |
| Pricing | /pricing | pricing.md |
| Platform & API | /platform | platform-api.md |
| Who it's for: Web hosts and agencies | /who-its-for/web-hosts-agencies | who-web-hosts-agencies.md |

### Top navigation structure

Global header, identical on every page.

- Products (dropdown)
  - Domains, /products/domains, LIVE
  - Email (Titan, Google Workspace), /products/email, LIVE
  - SSL certificates, /products/ssl, LIVE
  - Hosting, /products/hosting, LIVE
  - DNS and Premium DNS, /products/dns, PLACEHOLDER (homepage card only)
  - Security add-ons, /products/security, PLACEHOLDER (homepage card only)
  - Website builder, /products/website-builder, PLACEHOLDER (homepage card only)
- Platform & API (dropdown)
  - Platform & API marketing page, /platform, LIVE
  - API overview, Documentation, Sandbox, Integrations (WHMCS, Plesk), Storefront (Supersite), Control panel, EXTERNAL deep-links to the Developer Portal (separate project)
  - MCP and agents, hidden until Phase 2 ships (agentic guardrail; do not show as live)
- Who it's for (dropdown)
  - Web hosts, /who-its-for/web-hosts-agencies, LIVE
  - Developers and agencies, /who-its-for/web-hosts-agencies, LIVE (shares the segment page in this prototype)
  - AI and website-builder platforms, /who-its-for/ai-platforms, PLACEHOLDER
- Pricing, /pricing, LIVE
- Resources (dropdown): Docs, Help center, Blog, Case studies, Status, PLACEHOLDER links
- Right side: Sign in, /login, PLACEHOLDER. Become a reseller, reseller signup form, LIVE CTA.

### Primary destinations

- Become a reseller (primary CTA everywhere): the reseller signup form (builds/Reseller Signup Form v1.html).
- Explore the API (secondary CTA): the Developer Portal (separate project; the marketing site hosts no API docs).

### Cross-page internal link map (live pages only)

- Home links to: domains, email, ssl, hosting, pricing, platform, who-its-for/web-hosts-agencies.
- Domains links to: pricing, platform, email, ssl, hosting.
- Hosting links to: domains, email, ssl, pricing, platform.
- Email links to: domains, pricing.
- SSL links to: domains, hosting, pricing.
- Pricing links to: signup (CTAs).
- Platform & API links to: Developer Portal, signup.
- Who it's for links to: domains and the product ecosystem, signup.

### Audit (2026-06-19)

Verified across all 8 live pages: top-nav string, both hard facts, and CTA labels consistent; anchor claim only on Home and Domains; no em or en dashes; no buzzwords; no unapproved superlatives; LogicBoxes never named; all internal links resolve to live pages. The Pricing page does not restate the nav in its own spec because the header is a global component.

---

# Pages (build in this order)


---

# Page 1 of 8: Homepage

## ResellerClub Homepage

- **Page name:** Homepage
- **URL path:** /
- **Goal of page:** Convince a reseller or partner (web hosts, agencies, developers, AI and website-builder platforms) that ResellerClub is the wholesale registrar to build their business on, and drive "Become a reseller" leads.
- **Primary CTA:** Become a reseller
- **Secondary CTA:** Explore the API

### Build spec

Build on the existing resellerclub-ds design system (accent #1E66FF, Space Grotesk display, Hanken Grotesk body). Page is pure lead-gen. No domain search box, no add-to-cart, no checkout, no buy-now anywhere.

1. **Top nav (sticky).** Left: ResellerClub logo mark. Center or left-aligned nav links in order: Products | Platform & API | Who it's for | Pricing | Resources. Right side: a quiet text "Sign in" link, then a solid accent button "Become a reseller". Nav stays fixed on scroll. Mobile collapses to a hamburger that preserves link order.

2. **Hero.** Full-width section, generous vertical space, off-white or light ink background. Stack, left-aligned or centered: small uppercase eyebrow label, large display headline, supporting line, subhead paragraph, then a CTA pair (solid accent primary + outline or ghost secondary). To the right or below, a restrained visual placeholder (product surface or abstract domain-record motif). No search input of any kind. Include a thin trust line of micro-stats beneath the CTAs that leads with the "Powered by Oracle Cloud" co-brand mark (inline rendering, per global components Section 8) and then carries the two hard facts.

3. **Reseller logo wall (social proof).** Short centered heading, then a muted grid of 6 to 8 logo placeholders in a single tidy row or two rows. Logos rendered in a uniform grayscale treatment. One line of context above or below.

4. **Proof strip (scale).** Horizontal band, accent or dark background for contrast. 4 blocks side by side: each a large number or short label on top and a short descriptor below. Three of the four carry the OrderBox credibility cluster (nearly 25 years of domain expertise, 100+ ICANN-accredited registrars on OrderBox, and a compliance-handled block where the top line is a short capability label rather than a number); one is a clearly marked placeholder. No CTA in this strip.

5. **Why ResellerClub (four pillar cards).** Section heading + one-line intro. Four equal cards in a 2x2 (desktop) or single column (mobile) grid, each with a small icon placeholder, a card headline, and 2 to 3 sentences. Cards map one-to-one to the four message pillars. The heritage pillar (Card 1) reads as building on a proven platform, tying ResellerClub's 20+ years serving resellers to the OrderBox platform's nearly 25 years of domain expertise as a single tied statement, not as two competing stats.

6. **Built on OrderBox (credibility section).** Place directly after the four-pillar "Why ResellerClub" section. Calm, reassurance-toned band that contrasts gently with the pillar cards above. Section heading naming OrderBox, a short lead paragraph, then 3 to 4 proof points (registrar scale, nearly 25 years of domain expertise, ICANN and registry compliance handled, stable and proven infrastructure) rendered as compact items or small cards with an icon placeholder and one short line each. Framed as reassurance that partners build on proven, expert infrastructure. No new CTA required; if a CTA is wanted, reuse "Become a reseller". Do not introduce a reseller-years number in this section.

7. **Product ecosystem (domains-led).** Section heading + one-line intro that establishes domains lead and the rest attach. A prominent Domains feature card (visually larger, top of the grid), then a grid of attach-product cards: Email, SSL certificates, Hosting, DNS and Premium DNS, Security (SiteLock and Xcitium), Website builder. Each card: name, one short blurb, a bracketed "from" price teaser, and a "See pricing" text link to /pricing. Hosting card framed strictly as resell-to-your-customers, Oracle Cloud powered. No buy-now language.

8. **Built for builders (deeper API block).** Two-column section. Left: heading, body on the modern REST API, clean docs, and sandbox, plus a clearly future-tense note on agent/MCP readiness, then a single "Explore the API" button linking to the Developer Portal. Right: a code-teaser visual placeholder (a stylized terminal/editor frame showing a short illustrative request-and-response shape; describe only, do not ship real code). Include a microcopy line stating full API docs live in the Developer Portal, not on this site.

9. **Who it's for (three tiles).** Section heading + one-line intro. Three equal tiles in order: Web hosts; Developers and agencies; AI and website-builder platforms. Each tile: title, one short pitch, and a "Learn more" link to its segment page. Web hosts tile sits first.

10. **Ways to sell.** Section heading + one-line intro. Four compact items (row of 4 on desktop, stacked on mobile): Storefront (Supersite), Control panel, API, Integrations. One line each. Integrations line names WHMCS and Plesk.

11. **Pricing snapshot.** Section heading + one-line intro on transparent wholesale tiers. A simple 3-tier teaser band (illustrative volume tiers) with bracketed placeholder "from" numbers and a volume message, then a "See full pricing" button linking to /pricing. No checkout, no per-seat configurator.

12. **Support.** Section heading + one-line intro. Four support items in a row: 24/7 support; Dedicated account management; Migration and onboarding; Technical and API support. One line each.

13. **Closing CTA.** Full-width accent band. Short headline that carries the anchor claim verbatim, one supporting line, and the CTA pair: primary "Become a reseller", secondary "Explore the API".

14. **Footer.** Multi-column footer mirroring nav. Columns: Products | Platform & API | Who it's for | Pricing | Resources, plus a Company column and a bottom utility row (legal, region/currency note). Logo and short descriptor at top-left of footer.

### Copy

#### Section 1: Top nav

- Nav links: Products | Platform & API | Who it's for | Pricing | Resources
- Right side: Sign in
- Button: Become a reseller

#### Section 2: Hero

- **Eyebrow:** Wholesale domain registrar
- **Headline (selected):** Launch, sell, and scale domains, fast.
- **Alternate headline A:** The domain platform you resell from, not the one you compete with.
- **Alternate headline B:** Sell domains under your brand. Scale as you grow.
- **Supporting line (carries anchor claim, verbatim):** The wholesale domain registrar built for the people who build the web.
- **Subhead:** Built for web hosts, developers and agencies, and AI and website-builder platforms. Resell domains, email, SSL, and hosting to your customers from one wholesale account, with pricing that rewards you for selling more.
- **Primary CTA:** Become a reseller
- **Secondary CTA:** Explore the API
- **Trust micro-line (under CTAs):** Powered by Oracle Cloud   ·   20+ years as a domain reseller platform   ·   100+ ICANN-accredited registrars on OrderBox.
  - Render "Powered by Oracle Cloud" as the inline co-brand mark from global components Section 8, leading the line, followed by the two hard facts. Items separated by a spaced middot.

#### Section 3: Reseller logo wall

- **Heading:** Resellers around the world build on ResellerClub.
- **Subline:** Hosting companies, agencies, and platforms resell domains and adjacent services to their customers on our wholesale account.
- **Logos:** [PLACEHOLDER logo: reseller customer 1] · [PLACEHOLDER logo: reseller customer 2] · [PLACEHOLDER logo: reseller customer 3] · [PLACEHOLDER logo: reseller customer 4] · [PLACEHOLDER logo: reseller customer 5] · [PLACEHOLDER logo: reseller customer 6] · [PLACEHOLDER logo: reseller customer 7] · [PLACEHOLDER logo: reseller customer 8]

#### Section 4: Proof strip (scale)

- **Stat 1 (credibility, verbatim):** Nearly 25 years of domain expertise
  - Descriptor: The heritage of the OrderBox platform behind ResellerClub, proven across registrations, renewals, and transfers.
- **Stat 2 (credibility, verbatim):** 100+ ICANN-accredited registrars on OrderBox
  - Descriptor: Resellers run their business on the same platform that powers accredited registrars.
- **Stat 3 (credibility, capability label not a number):** ICANN and registry compliance handled for you
  - Descriptor: The platform manages accreditation and registry requirements, so you sell without carrying that burden.
- **Stat 4 (placeholder):** [PLACEHOLDER stat: N+ TLDs available]
  - Descriptor: Legacy, country-code, and new TLDs you can offer your customers from one account.

#### Section 5: Why ResellerClub (four pillar cards)

- **Section heading:** Why resellers build on ResellerClub
- **Section intro:** Four reasons partners stay with us for years.

- **Card 1: Wholesale, on a proven platform**
  - We have served resellers for 20+ years, on a platform with nearly 25 years of domain expertise. Pricing, terms, and tooling are built for people who resell, not for end customers buying one name. You stay the brand your customers see, and your customers stay yours.

- **Card 2: Built for builders**
  - A modern REST API, clean documentation, and a sandbox let your team integrate domains into your product on your timeline. Whether you sell through a storefront, a control panel, or your own application, the platform fits how you already build.

- **Card 3: Everything your customers need**
  - Domains lead, and the rest attaches without new vendors. Add email, SSL, hosting, DNS, security, and a website builder to the same account, so your customers get a full set of services and you keep the relationship.

- **Card 4: Support built for partners**
  - You get 24/7 support, a dedicated account manager, and help with migration and onboarding. Technical and API questions go to people who understand a reseller business, not a consumer help desk.

#### Section 6: Built on OrderBox

- **Section heading:** Built on OrderBox
- **Section lead:** ResellerClub runs on OrderBox, the platform that powers accredited registrars at scale. When you sell with us, you build on proven infrastructure and decades of domain expertise, not a new and untested system.

- **Proof point 1: Registrar scale**
  - 100+ ICANN-accredited registrars run on OrderBox, so you operate on a platform built and hardened at registrar scale.

- **Proof point 2: Nearly 25 years of domain expertise**
  - OrderBox brings nearly 25 years of domain expertise, with registrations, renewals, and transfers handled the same way every day.

- **Proof point 3: Compliance handled for you**
  - ICANN and registry compliance is handled on the platform, so you can sell domains without carrying the accreditation and registry burden yourself.

- **Proof point 4: Stable, proven infrastructure**
  - Stable, proven infrastructure trusted at registrar scale keeps your domains, DNS, and customer records running so you can focus on selling.

- **Optional CTA (reuse only, no new CTA needed):** Become a reseller

#### Section 7: Product ecosystem (domains-led)

- **Section heading:** One wholesale account. Everything your customers need.
- **Section intro:** Domains lead. Email, SSL, hosting, and the rest attach to the same account, so you sell more to each customer without adding vendors.

- **Domains (lead card)**
  - The core of your business. Register, renew, and transfer across [PLACEHOLDER: N+ TLDs] at wholesale rates, with bulk tools and DNS built in.
  - Price teaser: From [PLACEHOLDER price: .com from $X.XX/yr]
  - Link: See pricing

- **Email (Titan, Google Workspace)**
  - Attach professional email to every domain you sell. Offer Titan or Google Workspace from the same account.
  - Price teaser: From [PLACEHOLDER price: email from $X.XX/mailbox/mo]
  - Link: See pricing

- **SSL certificates**
  - Add trusted certificates so your customers' sites stay secure. From single-domain to wildcard coverage.
  - Price teaser: From [PLACEHOLDER price: SSL from $X.XX/yr]
  - Link: See pricing

- **Hosting (Oracle Cloud, resell)**
  - Resell hosting to your customers, powered by Oracle Cloud. Enterprise cloud your customers feel, with no servers for you to run. Attaches to the domains you already sell.
  - Price teaser: From [PLACEHOLDER price: hosting from $X.XX/mo]
  - Link: See pricing

- **DNS and Premium DNS**
  - Reliable DNS comes standard. Upgrade your customers to Premium DNS for higher performance and resilience.
  - Price teaser: From [PLACEHOLDER price: Premium DNS from $X.XX/yr]
  - Link: See pricing

- **Security (SiteLock and Xcitium)**
  - Resell website security and backup so your customers' sites stay protected and recoverable. SiteLock for website security and malware scanning, Xcitium for backup and restore.
  - Price teaser: From [PLACEHOLDER price: security from $X.XX/yr]
  - Link: See pricing

- **Website builder**
  - Give customers a fast way to put a site on the domain they just bought, sold under your brand.
  - Price teaser: From [PLACEHOLDER price: website builder from $X.XX/mo]
  - Link: See pricing

#### Section 8: Built for builders (deeper API block)

- **Heading:** A modern API built for your team.
- **Body:** Integrate domains, email, SSL, and more into your product with a modern REST API, clean documentation, and a sandbox to test against before you go live. Predictable JSON, clear errors, and consistent endpoints mean less guesswork for your developers and faster time to launch.
- **Roadmap note (future tense only):** Agent and MCP readiness is on the roadmap, so the platform is ready for how software will buy and manage domains next. This is coming, not a capability available today.
- **Code teaser (concept, do not ship code):** A stylized editor frame showing the shape of a single request to check or register a domain and a short JSON response, signaling clean and predictable structure without printing real endpoints.
- **Microcopy:** Full API reference, guides, and sandbox keys live in the Developer Portal, not on this marketing site.
- **CTA:** Explore the API

#### Section 9: Who it's for (three tiles)

- **Section heading:** Who it's for
- **Section intro:** Different businesses, one wholesale platform. Start where you sell.

- **Tile 1: Web hosts**
  - Pitch: Add domains, email, and SSL to your hosting plans and keep the whole customer relationship on one account.
  - Link: Learn more

- **Tile 2: Developers and agencies**
  - Pitch: Build domains into client sites and your own products with a modern API, a sandbox, and clean docs.
  - Link: Learn more

- **Tile 3: AI and website-builder platforms**
  - Pitch: Offer domains inside your product so users register and connect a name without leaving your flow.
  - Link: Learn more

#### Section 10: Ways to sell

- **Section heading:** Sell the way that fits your business
- **Section intro:** Start fast with a storefront, or build deep with the API. Most partners use more than one.

- **Storefront (Supersite):** A ready-to-sell storefront under your brand, live quickly with no development work.
- **Control panel:** Manage domains, renewals, and customer accounts from one web console.
- **API:** A modern REST API to build domains and adjacent products directly into your platform.
- **Integrations:** Connect to the tools you already run, including WHMCS and Plesk.

#### Section 11: Pricing snapshot

- **Section heading:** Transparent wholesale pricing
- **Section intro:** Clear "from" rates, no hidden fees, and volume tiers that reward growth. The more you sell, the more you save.

- **Tier 1: Starter:** [PLACEHOLDER price: .com from $X.XX/yr] · for partners getting started
- **Tier 2: Growth:** [PLACEHOLDER price: .com from $X.XX/yr] · better rates as your volume grows
- **Tier 3: Scale:** [PLACEHOLDER price: .com from $X.XX/yr] · our deepest wholesale discounts for high-volume partners
- **Volume note:** Rates shown are representative placeholders. Final wholesale pricing scales with the volume you sell.
- **CTA:** See full pricing

#### Section 12: Support

- **Section heading:** Support built for partners
- **Section intro:** Real help from people who understand a reseller business.

- **24/7 support:** Reach us any hour, any day, by the channels your team prefers.
- **Dedicated account management:** A named account manager who knows your business and helps you grow it.
- **Migration and onboarding:** Hands-on help moving your domains and customers onto the platform.
- **Technical and API support:** Direct answers for your developers on integrations, the API, and the sandbox.

#### Section 13: Closing CTA

- **Headline (anchor claim, verbatim):** The wholesale domain registrar built for the people who build the web.
- **Supporting line:** Open a wholesale account and start selling domains under your brand. Talk to us about volume pricing, migration, and the integration that fits how you build.
- **Primary CTA:** Become a reseller
- **Secondary CTA:** Explore the API

#### Section 14: Footer

- **Logo + descriptor:** ResellerClub. The wholesale domain registrar built for the people who build the web.

- **Column 1: Products:** Domains · Email · SSL certificates · Hosting · DNS and Premium DNS · Security add-ons · Website builder
- **Column 2: Platform & API:** API overview · Developer Portal · Sandbox · Ways to sell · Integrations (WHMCS, Plesk)
- **Column 3: Who it's for:** Web hosts · Developers and agencies · AI and website-builder platforms
- **Column 4: Pricing:** Wholesale pricing · Volume tiers · TLD price list
- **Column 5: Resources:** Documentation · Help center · Status · Blog
- **Column 6: Company:** About · Contact · Become a reseller · Sign in
- **Utility row:** [PLACEHOLDER: legal links] · Pricing shown in USD · [PLACEHOLDER: region and currency note]

---

# Page 2 of 8: Domains

## Domains

- Page name: Domains
- URL path: /products/domains
- Goal of page: Make the case for reselling domains through ResellerClub as the lead wholesale product, and drive reseller sign-ups. This is the hero product, so the page should feel substantial: heritage, economics, lifecycle depth, and ways to sell, all framed for the channel.
- Primary CTA: Become a reseller
- Secondary CTA: Explore the API

### Build spec

Build on the existing resellerclub-ds design system (accent #1E66FF, Space Grotesk display, Hanken Grotesk body, JetBrains Mono for prices and TLD strings). Sentence-case headlines with an optional accent-blue highlighted noun. ALL-CAPS eyebrows with wide tracking. No retail buy-now anywhere. No live domain search box.

1. Hero (domains as the core wholesale product)
   - Layout: split hero, signature pattern. Copy column left, illustration panel right. Standard top nav above (Products | Platform & API | Who it's for | Pricing | Resources, right side Sign in, Become a reseller).
   - Left column: eyebrow, H1, subhead paragraph, two CTAs side by side (primary solid "Become a reseller", secondary outline "Explore the API"), and a thin trust line of two small inline stats below the buttons.
   - Right column: a NON-transacting availability illustration. Render a static, clearly illustrative panel that looks like a control-panel domain row, not a retail search bar. Show a sample domain string in mono with status chips (e.g. Available, Registered, Premium) as a styling/illustration concept only. Add a small caption label marking it as an interface illustration, not a live search. Behind the panel, a soft radial blue glow on a light surface.
   - No domain search input. No "Search" button. No price-to-buy.

2. Why resell domains with ResellerClub
   - Layout: section eyebrow + H2 + one-line intro, then a 4-card grid (2x2 on desktop, stacked on mobile). Thin 1px card borders, slate-tinted shadow, Lucide icon per card.
   - Four cards, one per benefit: wholesale economics, white-label, registrar backbone run for you on OrderBox, broad TLD coverage. Each card: icon, short card title, 2 to 3 sentence body. Card 3 names OrderBox as the platform behind the registrar backbone and carries the OrderBox credibility proof inline (operates at registrar scale with 100+ ICANN-accredited registrars, nearly 25 years of domain expertise, ICANN and registry compliance handled for you). Do not add nearly-25 as a separate stat block elsewhere on the page; keep it in this card prose only.
   - Below the grid: a single full-width "by heritage" band on an ink (#0C1322) surface with the heritage hard fact and one supporting line, plus an inline text link to Platform & API.

3. TLD coverage + wholesale "from" price teasers
   - Layout: section eyebrow + H2 + intro line. Then a price teaser grid: 4 to 6 small price-teaser cards in a row (wrap on mobile). Each card shows a TLD in mono, a "from" wholesale price (marked placeholder), and a tiny "wholesale" label.
   - Below the grid: a short "the more you sell, the more you save" volume note and a prominent text/button link to the Pricing page. Make clear these are representative placeholder numbers.
   - A small TLD coverage stat callout (placeholder count) sits beside or above the grid.
   - No add-to-cart, no per-card buy button. The only action is "See wholesale pricing" linking to /pricing.

4. Lifecycle management you get (for resellers)
   - Layout: section eyebrow + H2 + intro. Then a feature list rendered as a two-column checklist or a 3x2 / 4x2 icon-row grid. Each item: small Lucide icon, label, one-line description framed for the reseller managing customer domains at scale.
   - Items: register, transfer, renew (incl. auto-renew), DNS management, WHOIS privacy, registrar and transfer locks, bulk tools, expiry and grace handling.
   - Optional right-side mono illustration: a compact "control panel" list mock (non-transacting) reinforcing bulk management. Static illustration only.

5. Ways to sell domains
   - Layout: section eyebrow + H2 + intro. Then a 3-card grid, one card per channel: branded storefront, reseller control panel, API.
   - Each card: icon, channel name, 2 to 3 sentence body describing how the reseller uses it. The API card carries the secondary CTA "Explore the API" as an inline link. Include a clearly future-tense one-line note on agent/MCP readiness on the API card only (e.g. "Agent and MCP support is on the roadmap").
   - Keep storefront described as a non-transacting concept here; do not promise retail checkout copy.

6. Attach products around domains (cross-sell)
   - Layout: compact section, eyebrow + H2 + one intro line. Then a horizontal row of 3 short attach cards: Email, SSL certificates, Hosting. Smaller than the main product cards.
   - Each card: icon, product name, one line on the reseller upside (attach to domain sales, more revenue per customer). Hosting line framed as "resell hosting to your customers", Oracle Cloud powered. Each card links to its own product page placeholder.
   - This is a supporting strip. Domains stay the lead; do not let this section visually compete with sections 2 to 5.

7. Proof strip
   - Layout: full-width band, light or ink surface. A row of stat blocks: large mono number + label. Lead with the two hard facts, then placeholder stats. Optionally a single placeholder reseller logo row beneath.
   - Use exactly: "20+ years as a domain reseller platform" and "100+ ICANN-accredited registrars on OrderBox". All other figures marked placeholders.

8. Closing CTA
   - Layout: full-width ink (#0C1322) CTA section with soft radial blue glow. Centered eyebrow + H2 + one-line subhead + two CTAs (primary "Become a reseller", secondary "Explore the API"). A small reassurance microcopy line beneath.
   - Standard footer below.

### Copy

#### Section 1: Hero

Eyebrow: DOMAINS, THE LEAD PRODUCT

H1: The wholesale domain registrar built for the people who build the web.

Subhead: Domains are the product your customers start with, and the product that keeps them with you. Resell registration, transfer, renewal, and DNS on a registrar backbone we run for you. You set the retail price. You own the customer relationship.

Primary CTA: Become a reseller
Secondary CTA: Explore the API

Trust line (below buttons): 20+ years as a domain reseller platform   ·   100+ ICANN-accredited registrars on OrderBox

Illustration panel caption (microcopy): Interface illustration. Domain management runs in your control panel, not a public search.

Illustration sample rows (mono, illustrative only):
- yourcustomer.com   ·   Registered
- buildwith.dev   ·   Available
- studio.agency   ·   Premium

#### Section 2: Why resell domains with ResellerClub

Eyebrow: WHY DOMAINS WITH US

H2: Wholesale economics, white-label, and a registrar backbone you do not have to run.

Intro: Domains are a high-frequency, recurring product. The margin is in the platform behind them. Here is what you get when you resell on ResellerClub.

Card 1
Title: Wholesale pricing that scales with you
Body: You buy at wholesale and set your own retail price. Margin stays with you on every registration, transfer, and renewal. The more you sell, the more you save, with volume-based tiers. [PLACEHOLDER: link to volume tier detail]

Card 2
Title: White-label by default
Body: Sell domains under your own brand. Your storefront, your control panel branding, your customer relationship. Your customers stay yours, and they never see ours.

Card 3
Title: The registrar backbone, run for you on OrderBox
Body: ResellerClub runs on OrderBox, the same stable, proven platform behind 100+ ICANN-accredited registrars and nearly 25 years of domain expertise. Registry connections, accreditation, billing, renewals, and ICANN and registry compliance are handled for you. You do not build or maintain registrar infrastructure. You sell.

Card 4
Title: Broad TLD coverage
Body: Offer the extensions your customers actually ask for, from legacy gTLDs to country codes and newer namespaces. [PLACEHOLDER: count] TLDs available to resell across [PLACEHOLDER: count] registries.

Heritage band (ink surface)
Heritage line: 20+ years as a domain reseller platform.
Supporting line: The same platform now ships a modern REST API, clean docs, and a sandbox for the teams building on it. See how it works on Platform & API. [PLACEHOLDER: link to /platform-api]

#### Section 3: TLD coverage and wholesale price teasers

Eyebrow: COVERAGE AND PRICING

H2: Transparent wholesale pricing, from day one.

Intro: Representative wholesale starting prices are shown below. All figures are placeholders for this prototype and are confirmed on the Pricing page. Prices in USD.

Coverage callout: [PLACEHOLDER: count]+ TLDs available to resell.

Price teaser cards (TLD in mono, "from" price, "wholesale" label):
- .com   from [PLACEHOLDER price: $X.XX/yr]   wholesale
- .net   from [PLACEHOLDER price: $X.XX/yr]   wholesale
- .org   from [PLACEHOLDER price: $X.XX/yr]   wholesale
- .io   from [PLACEHOLDER price: $X.XX/yr]   wholesale
- .dev   from [PLACEHOLDER price: $X.XX/yr]   wholesale
- .co   from [PLACEHOLDER price: $X.XX/yr]   wholesale

Volume note: The more you sell, the more you save. Wholesale tiers step down as your volume grows. [PLACEHOLDER: representative tier example, to be signed off]

CTA (link to Pricing): See wholesale pricing

Microcopy: Numbers shown are representative placeholders. Full TLD list and current wholesale tiers live on the Pricing page.

#### Section 4: Lifecycle management you get

Eyebrow: DOMAIN LIFECYCLE

H2: The full domain lifecycle, managed for the customers you serve.

Intro: Resellers manage domains at scale, across many customers, for years at a time. The platform gives you the full lifecycle in one place.

Lifecycle items:
- Register: Register domains across your supported TLDs in single or bulk operations.
- Transfer: Bring domains in and move them out with standard transfer and auth-code handling.
- Renew: Manual and auto-renew, with expiry and grace-period handling so customer domains do not lapse by accident.
- DNS management: Full DNS records per domain, with Premium DNS available as an upgrade. [PLACEHOLDER: link to DNS product]
- WHOIS privacy: Offer privacy protection on supported TLDs to keep customer contact details out of public records.
- Registrar and transfer locks: Apply locks to protect customer domains against unauthorized transfers.
- Bulk tools: Search, register, renew, and update records across many domains at once, built for portfolios, not single names.
- Expiry and grace handling: Clear status through expiry, grace, and redemption windows, so you and your customers always know where a domain stands.

Illustration caption (microcopy): Control-panel illustration. Bulk actions run inside your reseller panel.

#### Section 5: Ways to sell domains

Eyebrow: HOW YOU SELL

H2: Sell domains the way that fits your business.

Intro: Use a ready storefront, work inside the reseller control panel, or build directly on the API. Many resellers use more than one.

Card 1
Title: Branded storefront
Body: A white-label storefront you sell through, under your brand and your pricing. A fast way to start selling domains without building a front end yourself. [PLACEHOLDER: storefront detail link]

Card 2
Title: Reseller control panel
Body: Manage customers, domains, renewals, and DNS from one panel. Run day-to-day operations and bulk actions without writing code.

Card 3
Title: API
Body: Build domains directly into your own platform, billing, and onboarding with a modern REST API, clean docs, and a sandbox. Provision, manage, and renew programmatically. Agent and MCP support is on the roadmap.
Inline CTA: Explore the API

#### Section 6: Attach products around domains

Eyebrow: ATTACH AND GROW

H2: Add the products your customers need next.

Intro: Domains open the relationship. Attach products raise revenue per customer and keep more of their stack on your platform.

Attach card 1
Name: Email
Body: Attach professional email (Titan and Google Workspace) to every domain you sell. [PLACEHOLDER: link to /products/email]

Attach card 2
Name: SSL certificates
Body: Add SSL to secure your customers' sites and lift trust on every domain. [PLACEHOLDER: link to /products/ssl]

Attach card 3
Name: Hosting
Body: Resell hosting to your customers, powered by Oracle Cloud, attached to the domains they already buy from you. [PLACEHOLDER: link to /products/hosting]

#### Section 7: Proof strip

Eyebrow: PROOF

H2: A platform built for the channel for 20+ years.

Stat blocks:
- 20+ years as a domain reseller platform
- 100+ ICANN-accredited registrars on OrderBox
- [PLACEHOLDER stat: ~N million domains under management]
- [PLACEHOLDER stat: N+ resellers on the platform]

Logo row label: Trusted by resellers worldwide
Logos: [PLACEHOLDER logo: reseller customer] [PLACEHOLDER logo: reseller customer] [PLACEHOLDER logo: reseller customer] [PLACEHOLDER logo: reseller customer]

Testimonial (optional, below logos): [PLACEHOLDER testimonial: named reseller, role]

#### Section 8: Closing CTA

Eyebrow: GET STARTED

H2: Start reselling domains on a platform built for the channel.

Subhead: Become a reseller and sell domains under your own brand, at wholesale, with the backbone run for you. Or look at the API first.

Primary CTA: Become a reseller
Secondary CTA: Explore the API

Microcopy: No retail checkout here. This is a wholesale reseller platform. [PLACEHOLDER: onboarding or contact detail]

---

# Page 3 of 8: Hosting

## Hosting

- Page name: Hosting
- URL path: /products/hosting
- Goal of page: Make the case for reselling the full hosting suite, powered by Oracle Cloud, to your customers under your own brand on wholesale terms, and drive reseller sign-ups. Hosting is framed as a deep attach product around domains, never as the company headline. No retail buy-now, no per-plan order now or checkout.
- Primary CTA: Become a reseller
- Secondary CTA: Explore the API

### Build spec

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

4. Why Oracle Cloud (the power of cloud)
   - Layout: section eyebrow + H2 + one-line intro, then a 3 or 4 card grid of cloud advantages. Thin card borders, slate-tinted shadow, one Lucide icon per card. This section sells the strength of the underlying cloud, the advantages a reseller passes to customers, distinct from the reseller-economics cards in the section above. Place it directly after Section 3.
   - Cards: enterprise-grade performance, global reach, security and compliance built in, elastic scale. Every specific figure (regions, uptime, performance numbers, certifications) must be a marked placeholder.
   - Close with one line that the reseller gives customers hyperscaler-grade hosting without operating any of it.

5. Built to attach to domains
   - Layout: section eyebrow + H2 + one intro line. Then a horizontal row of supporting points or a compact 2 to 3 item layout, framed around the attach economics: bundle domains, hosting, email, and SSL; recurring revenue; customer stickiness.
   - Keep this visually lighter than sections 2 and 3 so domains stay the lead. Include inline placeholder links to /products/domains, /products/email, and /products/ssl.
   - Optional small mono illustration: a non-transacting "customer stack" list mock showing a domain with hosting, email, and SSL attached. Static illustration only.

6. Management and support
   - Layout: section eyebrow + H2 + intro. Then a feature list rendered as a two-column checklist or a 2x2 icon-row grid. Each item: small Lucide icon, label, one-line description framed for the reseller running many customer sites.
   - Items: reseller control panel, migration help, support availability, technical support. Wrap support availability as a placeholder.

7. Ways to sell hosting
   - Layout: section eyebrow + H2 + intro. Then a 3-card grid, one card per channel: branded storefront, reseller control panel, API.
   - Each card: icon, channel name, 2 to 3 sentence body describing how the reseller uses it. The API card carries the secondary CTA "Explore the API" as an inline link. Describe the API for provisioning and managing hosting only. Do not mention agent or MCP support anywhere on this page.
   - Keep storefront described as a non-transacting concept here. Do not promise retail checkout copy.

8. Proof strip
   - Layout: full-width band, light or ink surface. A row of stat blocks: large mono number + label. Lead with the two hard facts verbatim, then placeholder stats.
   - Use exactly: "20+ years as a domain reseller platform" and "100+ ICANN-accredited registrars on OrderBox". All other figures, including any hosting-specific count or uptime, marked placeholders.

9. Closing CTA
   - Layout: full-width ink (#0C1322) CTA section with soft radial blue glow. Centered eyebrow + H2 + one-line subhead + two CTAs (primary "Become a reseller", secondary "Explore the API"). A small reassurance microcopy line beneath.
   - Standard footer below.

### Copy

#### Section 1: Hero

Eyebrow: HOSTING, RESELL UNDER YOUR BRAND

H1: Resell hosting to your customers, powered by Oracle Cloud.

Tagline (under H1): We run it on Oracle Cloud. You sell it as yours.

Subhead: Add a full hosting suite to the domains you already sell. Shared, reseller, WordPress, cloud, VPS, and dedicated servers, all white-label, all wholesale, all on one account. You set the retail price. You own the customer relationship. The infrastructure runs on Oracle Cloud, so you do not run data centers.

Primary CTA: Become a reseller
Secondary CTA: Explore the API

Trust line (below buttons): Powered by Oracle Cloud   ·   20+ years as a domain reseller platform

Illustration panel caption (microcopy): Interface illustration. Hosting is managed in your reseller control panel, not a public plan picker.

Illustration sample rows (mono, illustrative only):
- yourcustomer.com   ·   Active
- studio-site.app   ·   Provisioning
- legacy.site   ·   Suspended

#### Section 2: The hosting suite you can resell

Eyebrow: THE HOSTING SUITE

H2: One hosting suite, resold under your brand.

Intro: Resell the hosting type each customer needs, from a first shared site to a dedicated server, all on the same wholesale account. Representative wholesale starting prices are shown below. All figures are placeholders for this prototype and are confirmed on the Pricing page. Prices in USD.

Card 1
Title: Shared hosting (Linux and Windows)
Body: Resell entry hosting for small sites and first projects, on Linux or Windows. A low starting point for customers who need a site online without managing a server. from [PLACEHOLDER price: $X.XX/mo]   wholesale

Card 2
Title: Reseller hosting
Body: Resell hosting to customers who want to resell it themselves, with their own accounts and resource allocation under your brand. A way to serve sub-resellers and agencies in your base. from [PLACEHOLDER price: $X.XX/mo]   wholesale

Card 3
Title: WordPress hosting
Body: Resell hosting tuned for WordPress sites, so your customers get a managed WordPress setup without configuring it themselves. Attaches naturally to the domains they register with you. from [PLACEHOLDER price: $X.XX/mo]   wholesale

Card 4
Title: Cloud hosting
Body: Resell cloud hosting for customers who need room to grow, with resources that scale as their traffic does. Built on Oracle Cloud. [PLACEHOLDER: scaling or resource spec] from [PLACEHOLDER price: $X.XX/mo]   wholesale

Card 5
Title: VPS hosting
Body: Resell virtual private servers for customers who want root access and control over their environment. They get an isolated server. You get the margin. from [PLACEHOLDER price: $X.XX/mo]   wholesale

Card 6
Title: Managed VPS
Body: Resell VPS with management handled, so customers who want control but not server administration get both. A higher-value tier for your base. from [PLACEHOLDER price: $X.XX/mo]   wholesale

Card 7
Title: Dedicated servers
Body: Resell single-tenant dedicated servers for customers with the heaviest workloads, with full resources and no neighbors. The top of the suite for your largest accounts. from [PLACEHOLDER price: $X.XX/mo]   wholesale

Volume note: The more you sell, the more you save. Wholesale tiers step down as your volume grows. [PLACEHOLDER: representative tier example, to be signed off]

CTA (link to Pricing): See hosting pricing

Microcopy: Numbers shown are representative placeholders. Full plan list and current wholesale tiers live on the Pricing page. There is no retail checkout here.

#### Section 3: Why resell hosting with ResellerClub

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

#### Section 4: Why Oracle Cloud (the power of cloud)

Eyebrow: THE POWER OF CLOUD

H2: Hyperscaler-grade hosting your customers feel, infrastructure you never run.

Intro: Hosting on Oracle Cloud means your customers get the performance, reach, and resilience of enterprise cloud, while you sell it under your brand and operate none of it.

Card 1
Title: Enterprise-grade performance
Body: Sites run on Oracle Cloud compute built for production workloads, so your customers get speed and reliability a small host cannot match. [PLACEHOLDER: performance or instance detail, to be signed off]

Card 2
Title: Global reach
Body: Serve customers close to their users with cloud regions around the world. [PLACEHOLDER: Oracle Cloud regions and locations, to be signed off]

Card 3
Title: Security and compliance built in
Body: Oracle Cloud handles the hard parts of infrastructure security and compliance, so you resell hosting that is protected at the platform level without running a security team. [PLACEHOLDER: certifications or compliance scope, to be signed off]

Card 4
Title: Scales with your customers, not your hardware
Body: Capacity grows with demand, so a customer can start on one small site and scale to heavy traffic without you buying a server. You add customers, not data centers.

Closing line: You give customers hyperscaler-grade hosting. You operate none of it. That is the trade cloud makes possible, and it is the heart of the wholesale hosting offer.

#### Section 5: Built to attach to domains

Eyebrow: ATTACH AND GROW

H2: Hosting that attaches to the domains your customers already buy.

Intro: A customer who buys a domain from you needs somewhere to put a site. Hosting is the next product in the same conversation, and it turns a one-time domain into a recurring relationship.

Attach points:
- Bundle the full stack: Sell domains, hosting, email, and SSL together as one offer, under your brand, on one account. [PLACEHOLDER: link to /products/domains] [PLACEHOLDER: link to /products/email] [PLACEHOLDER: link to /products/ssl]
- Recurring revenue: Hosting bills every month or every term, so each attach adds predictable revenue on top of the domain sale.
- Customer stickiness: The more of a customer's stack lives with you, the less reason they have to leave. A domain plus hosting plus email is a relationship, not a transaction.

Illustration caption (microcopy): Illustration of one customer stack: domain, hosting, email, and SSL on a single account.

#### Section 6: Management and support

Eyebrow: RUN IT WITH SUPPORT

H2: Manage many customer sites, with help when you need it.

Intro: Resellers run hosting across many customers at once. The platform gives you the tools to manage it and the support to back you.

Management and support items:
- Reseller control panel: Provision, manage, and bill hosting across your customers from one panel, without writing code.
- Migration help: Move existing customer sites onto the platform with migration support, so you can bring a book of business with you. [PLACEHOLDER: migration scope and limits]
- Support availability: Reach a real team when your customers need you. [PLACEHOLDER: 24/7 support availability]
- Technical support: Technical questions go to people who understand a reseller hosting business, not a consumer help desk. [PLACEHOLDER: technical support scope]

#### Section 7: Ways to sell hosting

Eyebrow: HOW YOU SELL

H2: Sell hosting the way that fits your business.

Intro: Use a ready storefront, work inside the reseller control panel, or build directly on the API. Many resellers use more than one.

Card 1
Title: Storefront (Supersite)
Body: A white-label storefront you sell hosting through, under your brand and your pricing. A fast way to start selling hosting without building a front end yourself. [PLACEHOLDER: storefront detail link]

Card 2
Title: Reseller control panel
Body: Provision and manage hosting, renewals, and customer accounts from one panel. Run day-to-day operations and bulk actions without writing code.

Card 3
Title: API
Body: Build hosting directly into your own platform, billing, and onboarding with a REST API, documentation, and a sandbox [PLACEHOLDER: confirm API style, docs, and sandbox availability]. Provision, manage, and renew hosting programmatically alongside your domains.
Inline CTA: Explore the API

#### Section 8: Proof strip

Eyebrow: PROOF

H2: Why resellers build on the platform.

Stat blocks:
- 20+ years as a domain reseller platform
- 100+ ICANN-accredited registrars on OrderBox
- [PLACEHOLDER stat: N+ sites hosted on the platform]
- [PLACEHOLDER stat: hosting uptime, to be signed off]

Logo row label: Resellers building on the platform [PLACEHOLDER: reseller customer logos]
Logos: [PLACEHOLDER logo: reseller customer] [PLACEHOLDER logo: reseller customer] [PLACEHOLDER logo: reseller customer] [PLACEHOLDER logo: reseller customer]

Testimonial (optional, below logos): [PLACEHOLDER testimonial: named reseller, role]

#### Section 9: Closing CTA

Eyebrow: GET STARTED

H2: Start reselling hosting on a platform built for the channel.

Subhead: Become a reseller and sell hosting under your own brand, at wholesale, on Oracle Cloud infrastructure you do not have to run. Or look at the API first.

Primary CTA: Become a reseller
Secondary CTA: Explore the API

Microcopy: No retail checkout here. This is a wholesale reseller platform. [PLACEHOLDER: onboarding or contact detail]

---

# Page 4 of 8: Email

## Email

- Page name: Email
- URL path: /products/email
- Goal of page: Make the case for reselling professional email (Business Email by Titan) and Google Workspace to your customers, wholesale, and drive reseller sign-ups. Email attaches to every domain a reseller sells, so frame it as recurring revenue and stickiness around the domain, not as a standalone headline product.
- Primary CTA: Become a reseller
- Secondary CTA: Explore the API

### Build spec

Build on the existing resellerclub-ds design system (accent #1E66FF, Space Grotesk display, Hanken Grotesk body, JetBrains Mono for prices and any address strings). Sentence-case headlines with an optional accent-blue highlighted noun. ALL-CAPS eyebrows with wide tracking. Lucide icons only. No retail buy-now, no add-to-cart, no per-plan purchase or select-plan controls anywhere. The only actions on the page are "Become a reseller" and "Explore the API". Keep all bracketed placeholders visible.

1. Hero (resell professional email and Google Workspace)
   - Layout: split hero, signature pattern. Copy column left, illustration panel right. Standard top nav above (Products | Platform & API | Who it's for | Pricing | Resources, right side Sign in, Become a reseller).
   - Left column: eyebrow, H1, subhead paragraph, two CTAs side by side (primary solid "Become a reseller", secondary outline "Explore the API"), and a thin trust line of two small inline stats below the buttons.
   - Right column: a NON-transacting illustration of a webmail or control-panel inbox row. Show a sample mailbox address in mono (e.g. you@yourcustomer.com) with a couple of illustrative inbox rows and a small caption marking it as an interface illustration, not a live inbox. Soft radial blue glow on a light surface behind the panel.
   - No mailbox signup form, no price-to-buy.

2. Two offerings (Business Email by Titan and Google Workspace)
   - Layout: section eyebrow + H2 + one-line intro, then two large side-by-side offering cards (stack on mobile). Equal visual weight. Thin 1px card borders, slate-tinted shadow, a Lucide icon and product name at the top of each card.
   - Each card carries: product name, a one-line "what it is", a "who it is for" line framed as the reseller's customer fit, a short body, and a wholesale "from" price teaser in mono marked as a placeholder. NO select-plan, buy, or order control on either card.
   - Card A (Business Email by Titan) may carry a small white-label note as a placeholder to confirm. Card B (Google Workspace) must NOT carry any white-label claim. On the Google Workspace card, add a short, neutral note that it is a Google product resold as-is.
   - Optional small footnote under the two cards reinforcing that both are billed and managed through your reseller account.

3. Why resell email
   - Layout: section eyebrow + H2 + one-line intro, then a 4-card grid (2x2 on desktop, stacked on mobile). Lucide icon per card, short title, 2 to 3 sentence body.
   - Four cards: recurring revenue, attaches to every domain you sell, customer stickiness, margin you keep. Frame brand ownership carefully: the reseller owns the customer and billing relationship in all cases; product-level branding applies to Titan only, not Google Workspace.

4. Feature highlights
   - Layout: section eyebrow + H2 + intro. Feature list rendered as a two-column checklist or a 3x2 icon-row grid. Each item: small Lucide icon, label, one-line description. Keep features generic; specific numbers are placeholders.
   - Items: mailbox storage (placeholder), spam and virus filtering, migration tool, webmail, mobile access, calendars and contacts. Add a short note that exact features and limits vary by product and plan, confirmed on Pricing.

5. Built to attach to domains
   - Layout: compact band, eyebrow + H2 + short intro, then a simple 3-step horizontal flow or a left-copy / right-illustration split. Static, non-transacting control-panel illustration showing email attached to a domain row.
   - Copy frames email as the natural add-on at the point a customer buys or renews a domain. Reference the Domains page as a placeholder link. No checkout language.

6. Management and support
   - Layout: section eyebrow + H2 + intro, then a small 3-card row or icon list: one control panel and management, one provisioning at scale (API + bulk), one support. The API card or line carries the secondary CTA "Explore the API" as an inline link.
   - Keep agent/MCP note future-tense and on the API line only if used.

7. Proof strip
   - Layout: full-width band, light or ink surface. A row of stat blocks: large mono number + label. Lead with the two hard facts, then placeholder stats. Optional single placeholder reseller logo row beneath.
   - Use exactly: "20+ years as a domain reseller platform" and "100+ ICANN-accredited registrars on OrderBox". All other figures are marked placeholders. Do not invent an email-specific hard fact.

8. Closing CTA
   - Layout: full-width ink (#0C1322) CTA section with soft radial blue glow. Centered eyebrow + H2 + one-line subhead + two CTAs (primary "Become a reseller", secondary "Explore the API"). Small reassurance microcopy beneath. Standard footer below.

### Copy

#### Section 1: Hero

Eyebrow: PRODUCTS, EMAIL

H1: Resell professional email and Google Workspace to your customers.

Subhead: Email attaches to every domain you sell, and it renews every month. Resell Business Email by Titan and Google Workspace through your ResellerClub account, set your own retail price, and keep the customer relationship. You add a recurring product around domains your customers already buy from you.

Primary CTA: Become a reseller
Secondary CTA: Explore the API

Trust line (below buttons): 20+ years as a domain reseller platform   ·   100+ ICANN-accredited registrars on OrderBox

Illustration panel caption (microcopy): Interface illustration. Mailboxes are managed in your control panel, not a public signup form.

Illustration sample rows (mono, illustrative only):
- you@yourcustomer.com   ·   Active
- sales@studio.agency   ·   Active
- billing@buildwith.dev   ·   Active

#### Section 2: Two offerings

Eyebrow: WHAT YOU CAN RESELL

H2: Two email products, one reseller account.

Intro: Offer the email product that fits each customer. Both are billed and managed through your ResellerClub account, so you keep one relationship and one bill per customer. Prices in USD.

Offering card A
Name: Business Email by Titan
What it is: Professional email built for small businesses, with mailboxes on your customer's own domain.
Who it is for: Resellers selling to businesses that want straightforward, professional mailboxes on their domain, without the wider productivity suite.
Body: A clean, business-grade mailbox product you attach to the domains you sell. Your customers get professional addresses on their own domain, and you keep the recurring revenue. Storage and feature limits vary by plan. [PLACEHOLDER: confirm plan tiers]
White-label note (microcopy): [PLACEHOLDER: confirm white-label capability for Business Email by Titan]
Price teaser (mono): from [PLACEHOLDER price: $X.XX/mailbox/mo]   wholesale

Offering card B
Name: Google Workspace
What it is: Google's productivity suite, including Gmail on your customer's domain, plus Docs, Drive, Meet, and Calendar.
Who it is for: Resellers selling to teams that want Google's collaboration and productivity tools alongside email on their domain.
Body: Resell Google Workspace through your ResellerClub account. You own the customer and billing relationship. The product itself is a Google product, resold as-is and Google-branded. Plans and limits are set by Google. [PLACEHOLDER: confirm available Workspace editions]
Note (microcopy): Google Workspace is a Google product, resold as-is. It is not white-labeled.
Price teaser (mono): from [PLACEHOLDER price: $X.XX/mailbox/mo]   wholesale

Footnote (below both cards): Both products are provisioned, billed, and managed through your reseller account. Representative placeholder prices shown. Current wholesale tiers live on the Pricing page. [PLACEHOLDER: link to /pricing]

#### Section 3: Why resell email

Eyebrow: WHY EMAIL

H2: Email turns a one-time domain sale into recurring revenue.

Intro: Domains open the relationship. Email keeps it active and billing every month. Here is what email adds to your channel business.

Card 1
Title: Recurring revenue
Body: Email bills on a recurring basis, per mailbox. It turns a domain customer into a steady monthly revenue line, on top of the registration you already sell. [PLACEHOLDER: representative ARPU example, to be signed off]

Card 2
Title: Attaches to every domain you sell
Body: Every domain is a reason to sell a mailbox. Email is the most natural add-on at the moment a customer registers or renews a domain, so attach rates can be high when you offer it at that point.

Card 3
Title: Customer stickiness
Body: A customer who runs their email through you is far harder to move. Mailboxes hold years of mail, contacts, and calendars, so the relationship stays with you across renewals.

Card 4
Title: Margin you keep
Body: You buy at wholesale and set your own retail price, so the margin stays with you on every mailbox. You own the customer and the billing relationship in all cases. Business Email by Titan can be sold under your own brand [PLACEHOLDER: confirm], while Google Workspace is resold as a Google-branded product.

#### Section 4: Feature highlights

Eyebrow: WHAT IS INCLUDED

H2: The features customers expect from professional email.

Intro: Exact features and limits vary by product and plan, confirmed on the Pricing page. The essentials below are what your customers get with professional email.

Feature items:
- Mailbox storage: Storage per mailbox so customers are not constantly clearing space. [PLACEHOLDER: storage per mailbox, e.g. N GB]
- Spam and virus filtering: Inbound filtering to keep spam and malicious mail out of customer inboxes.
- Migration tool: Move existing mail into the new mailbox so customers do not lose history when they switch. [PLACEHOLDER: confirm migration tool availability per product]
- Webmail: A browser-based inbox customers can reach from any device, with no setup.
- Mobile access: Standard mobile and desktop client support, so mail works on the devices customers already use.
- Calendars and contacts: Shared calendars and contacts for everyday coordination across a team.

Microcopy (below grid): Features and limits differ between Business Email by Titan and Google Workspace, and by plan. See the Pricing page for current details. [PLACEHOLDER: link to /pricing]

#### Section 5: Built to attach to domains

Eyebrow: ATTACH AND GROW

H2: Sell the mailbox at the same moment you sell the domain.

Intro: Email is the add-on that fits domains the most naturally. A customer who just bought a domain needs a mailbox on it, so the easiest time to sell email is at registration or renewal.

Attach flow (3 steps):
- Step 1: Customer buys or renews a domain through you.
- Step 2: You offer a mailbox on that same domain, at your retail price.
- Step 3: Email bills on a recurring basis, and you keep the customer and the margin.

Supporting line: Domains stay the lead product. Email is one of the add-ons you attach around them to raise revenue per customer. See the Domains page for the lead product. [PLACEHOLDER: link to /products/domains]

Illustration caption (microcopy): Control-panel illustration. Email is attached to a domain inside your reseller panel, not at a retail checkout.

#### Section 6: Management and support

Eyebrow: HOW YOU RUN IT

H2: Provision and manage mailboxes from one place.

Intro: Whether you manage a handful of mailboxes or thousands across many customers, you run email from the same account you use for domains.

Card 1
Title: Reseller control panel
Body: Create, manage, and bill mailboxes from one panel, alongside the domains they sit on. Run day-to-day mailbox operations without writing code.

Card 2
Title: Provisioning at scale
Body: Provision and manage mailboxes programmatically through the API, and run bulk actions across many customers at once. Built for portfolios, not single mailboxes.
Inline CTA: Explore the API

Card 3
Title: Support
Body: Platform and reseller support stands behind the email products you sell, so you are not the only line of help for your customers. [PLACEHOLDER: support scope and hours]

#### Section 7: Proof strip

Eyebrow: PROOF

H2: Built for the channel, proven over time.

Stat blocks:
- 20+ years as a domain reseller platform
- 100+ ICANN-accredited registrars on OrderBox
- [PLACEHOLDER stat: N+ mailboxes under management]
- [PLACEHOLDER stat: N+ resellers on the platform]

Logo row label: Resellers on the platform [PLACEHOLDER: confirm logo usage]
Logos: [PLACEHOLDER logo: reseller customer] [PLACEHOLDER logo: reseller customer] [PLACEHOLDER logo: reseller customer] [PLACEHOLDER logo: reseller customer]

#### Section 8: Closing CTA

Eyebrow: GET STARTED

H2: Add recurring email revenue to every domain you sell.

Subhead: Become a reseller and resell Business Email by Titan and Google Workspace under your account, at wholesale, attached to the domains your customers already buy. Or look at the API first.

Primary CTA: Become a reseller
Secondary CTA: Explore the API

Microcopy: No retail checkout here. This is a wholesale reseller platform. [PLACEHOLDER: onboarding or contact detail]

---

# Page 5 of 8: SSL Certificates

## SSL Certificates

- Page name: SSL Certificates
- URL path: /products/ssl
- Goal of page: Make the case for reselling SSL/TLS certificates through ResellerClub as a high-attach, recurring add-on around every domain and hosting plan, and drive reseller sign-ups. Frame SSL as the security layer the partner sells to their own customers, under their own brand, at wholesale.
- Primary CTA: Become a reseller
- Secondary CTA: Explore the API

### Build spec

Build on the existing resellerclub-ds design system (accent #1E66FF, Space Grotesk display, Hanken Grotesk body, JetBrains Mono for prices and certificate strings). Sentence-case headlines with an optional accent-blue highlighted noun. ALL-CAPS eyebrows with wide tracking. Lucide icons only, no emoji. No retail buy-now anywhere: no add-to-cart, no checkout, no per-certificate purchase control. The only actions on the page are "Become a reseller" and "Explore the API". Every price, count, term, warranty figure, and CA/brand name renders as a visible bracketed placeholder.

1. Hero (resell trust under your brand)
   - Layout: split hero, signature pattern. Copy column left, illustration panel right. Standard top nav above (Products | Platform & API | Who it's for | Pricing | Resources, right side Sign in, Become a reseller).
   - Left column: eyebrow, H1 (SSL-specific, not the company anchor claim), subhead paragraph, two CTAs side by side (primary solid "Become a reseller", secondary outline "Explore the API"), and a thin trust line of the two hard facts below the buttons.
   - Right column: a NON-transacting illustration of a secured site state. Render a static, clearly illustrative browser-style panel showing a lock glyph and a sample HTTPS address in mono, with a small set of certificate-type chips (DV, OV, EV, Wildcard, SAN) shown as a styling concept only. Add a small caption marking it as an interface illustration. Behind the panel, a soft radial blue glow on a light surface.
   - No certificate configurator, no "buy now", no price-to-buy.

2. Certificate types you can resell
   - Layout: section eyebrow + H2 + one-line intro, then a 5-card grid (3-up then 2-up wrap on desktop, stacked on mobile). Thin 1px card borders, slate-tinted shadow, a Lucide icon per card. Treat the price line exactly like the TLD price teasers on the Domains page: a "from" wholesale placeholder with a small "wholesale" label, no buy button.
   - Five cards, one per type: Domain Validation (DV), Organization Validation (OV), Extended Validation (EV), Wildcard, Multi-domain (SAN). Each card: icon, type name with its short code in mono, a 2 to 3 sentence generic blurb, and a "from" placeholder price with "wholesale" label.
   - Microcopy under the grid: prices are representative placeholders, USD, confirmed on the Pricing page.

3. Certificate authorities and brands available
   - Layout: compact band, eyebrow + H2 + one intro line, then a quiet placeholder logo/brand row (4 to 6 slots) marked clearly as placeholders. No CA named as fact anywhere on the page.
   - Contains: a single line stating the catalogue spans multiple certificate authorities, with the actual list bracketed for sign-off. A short reassurance line that issuance and validation are handled through the platform.

4. Why resell SSL
   - Layout: section eyebrow + H2 + one-line intro, then a 4-card grid (2x2 desktop, stacked mobile). Lucide icon per card.
   - Four cards: every site needs HTTPS, recurring revenue, natural attach to domains and hosting, wholesale margin. Each card: icon, short title, 2 to 3 sentence body framed for the reseller.

5. Issuance and lifecycle
   - Layout: section eyebrow + H2 + intro, then a horizontal step row or numbered list of four stages: validate, issue and install, renew, reissue. Each stage: small Lucide icon, label, one-line description. Any speed, validity term, or warranty figure stays a bracketed placeholder.
   - Optional right-side mono illustration: a compact non-transacting status list (Issued, Pending validation, Renewing) as a styling concept only, with an illustration caption.

6. Built to attach to domains and hosting
   - Layout: compact section, eyebrow + H2 + one intro line, then a horizontal row of 2 short attach cards: Domains, Hosting. Smaller than the main cards.
   - Each card: icon, name, one line on how SSL attaches and lifts revenue per customer. Hosting line framed as "resell hosting to your customers", powered by Oracle Cloud. Each card links to its own product page placeholder. Supporting strip only; do not let it compete with sections 2 to 5.

7. Proof strip
   - Layout: full-width band, light or ink surface. A row of stat blocks: large mono number + label. Lead with the two hard facts, then placeholder stats. Optional single placeholder reseller logo row beneath.
   - Use exactly: "20+ years as a domain reseller platform" and "100+ ICANN-accredited registrars on OrderBox". All other figures marked placeholders.

8. Closing CTA
   - Layout: full-width ink (#0C1322) CTA section with soft radial blue glow. Centered eyebrow + H2 + one-line subhead + two CTAs (primary "Become a reseller", secondary "Explore the API"). A small reassurance microcopy line beneath. Standard footer below.

### Copy

#### Section 1: Hero

Eyebrow: SSL/TLS CERTIFICATES

H1: Resell the certificates that put every customer site on HTTPS.

Subhead: Every site you touch needs SSL. Attach it to the domains and hosting you already sell, under your own brand and your own pricing. You buy at wholesale, you set the retail price, and you keep the customer relationship. Validation and issuance run on the platform.

Primary CTA: Become a reseller
Secondary CTA: Explore the API

Trust line (below buttons): 20+ years as a domain reseller platform   ·   100+ ICANN-accredited registrars on OrderBox

Illustration panel caption (microcopy): Interface illustration. A secured site state, shown for styling only. Not a live certificate order.

Illustration sample (mono, illustrative only):
- https://yourcustomer.com   ·   Secured
- Certificate types: DV · OV · EV · Wildcard · SAN

#### Section 2: Certificate types you can resell

Eyebrow: WHAT YOU CAN RESELL

H2: One catalogue, every certificate type your customers ask for.

Intro: From a quick domain-validated certificate to organization and extended validation, plus Wildcard and multi-domain coverage. Resell the full range under your brand.

Card 1
Type: Domain Validation (DV)
Body: Validates control of the domain only, so it issues quickly. A practical fit for blogs, small sites, and any project that needs HTTPS without organization checks. [PLACEHOLDER: issuance time]
Price line: from [PLACEHOLDER price: $X.XX/yr]   wholesale

Card 2
Type: Organization Validation (OV)
Body: Validates the registered organization behind the site, not just the domain. A stronger trust signal for business and commercial sites where the customer wants verified identity. [PLACEHOLDER: validation steps]
Price line: from [PLACEHOLDER price: $X.XX/yr]   wholesale

Card 3
Type: Extended Validation (EV)
Body: A rigorous level of organization vetting. Suited to customers who want the highest assurance review for high-trust and transactional sites. [PLACEHOLDER: any site-seal or visual-trust benefit, confirm]
Price line: from [PLACEHOLDER price: $X.XX/yr]   wholesale

Card 4
Type: Wildcard
Body: Secures one domain and all of its subdomains under a single certificate. Practical for customers running many subdomains who do not want to manage a certificate for each one.
Price line: from [PLACEHOLDER price: $X.XX/yr]   wholesale

Card 5
Type: Multi-domain (SAN)
Body: Secures several distinct domains on one certificate using Subject Alternative Names. A clean fit for customers consolidating multiple properties under a single certificate to manage.
Price line: from [PLACEHOLDER price: $X.XX/yr]   wholesale

Microcopy: Prices shown are representative placeholders, in USD. Validity terms and current wholesale tiers live on the Pricing page. [PLACEHOLDER: link to /pricing]

#### Section 3: Certificate authorities and brands available

Eyebrow: AUTHORITIES AND BRANDS

H2: A catalogue that spans multiple certificate authorities.

Intro: Resell certificates from a range of authorities and product brands through one platform. Issuance, validation, and renewals are handled in one place, so you do not manage a separate account per authority.

Brand row label: Certificate authorities and brands available
Brand row: [PLACEHOLDER: CA/brand, e.g. ...] [PLACEHOLDER: CA/brand, e.g. ...] [PLACEHOLDER: CA/brand, e.g. ...] [PLACEHOLDER: CA/brand, e.g. ...] [PLACEHOLDER: CA/brand, e.g. ...]

Microcopy: The authority and brand list is a placeholder for this prototype and is confirmed before launch.

#### Section 4: Why resell SSL

Eyebrow: WHY SSL WITH US

H2: SSL is the add-on that attaches to almost everything you sell.

Intro: Certificates are recurring, near-universal, and a natural companion to the domains and hosting already on your platform. Here is why resellers attach SSL.

Card 1
Title: Every site needs HTTPS
Body: Browsers expect a valid certificate, and customers expect the lock. SSL is no longer optional for a serious site, so it attaches to almost every domain and hosting plan you sell.

Card 2
Title: Recurring by nature
Body: Certificates renew on a fixed cycle, so SSL adds predictable, repeating revenue on top of one-time setup. You sell once and earn on every renewal that follows.

Card 3
Title: A natural attach to domains and hosting
Body: A customer buying a domain or a hosting plan is the same customer who needs a certificate. Offer SSL at the same moment and raise revenue per customer without finding a new lead.

Card 4
Title: Wholesale margin you keep
Body: You buy certificates at wholesale and set your own retail price. Margin stays with you on the first sale and on every renewal. [PLACEHOLDER: representative margin example, to be signed off]

#### Section 5: Issuance and lifecycle

Eyebrow: ISSUANCE AND LIFECYCLE

H2: From validation to renewal, managed in one place.

Intro: Resellers manage certificates across many customers over years. The platform covers the full lifecycle so a customer site does not lose its certificate by accident.

Stage 1
Label: Validate
Body: Domain, organization, or extended validation, depending on the certificate type the customer chooses. [PLACEHOLDER: validation methods supported]

Stage 2
Label: Issue and install
Body: The certificate is issued and ready to install on the customer site, with installation guidance available. [PLACEHOLDER: installation guidance and supported servers]

Stage 3
Label: Renew
Body: Track renewal dates and renew before expiry, so customer sites stay on a valid certificate. [PLACEHOLDER: renewal window and auto-renew detail]

Stage 4
Label: Reissue
Body: Reissue a certificate when a customer changes keys or needs a correction within the certificate term. [PLACEHOLDER: reissue terms]

Illustration caption (microcopy): Status illustration. Certificate management runs inside your reseller panel and the API.

#### Section 6: Built to attach to domains and hosting

Eyebrow: ATTACH AND GROW

H2: Built to sit next to the products your customers already buy.

Intro: SSL is most valuable at the moment a customer sets up a site. Attach it to the domains and hosting on your platform.

Attach card 1
Name: Domains
Body: Offer a certificate with every domain you sell, so a customer who registers a name leaves with a way to secure it. [PLACEHOLDER: link to /products/domains]

Attach card 2
Name: Hosting
Body: Resell hosting to your customers, powered by Oracle Cloud, and attach SSL so every hosted site goes live on HTTPS. [PLACEHOLDER: link to /products/hosting]

#### Section 7: Proof strip

Eyebrow: PROOF

H2: A platform built for the channel.

Stat blocks:
- 20+ years as a domain reseller platform
- 100+ ICANN-accredited registrars on OrderBox
- [PLACEHOLDER stat: N+ certificate authorities and brands available]
- [PLACEHOLDER stat: N+ certificates issued for resellers]

Logo row label: [PLACEHOLDER: reseller logos, confirm before launch] Trusted by resellers worldwide
Logos: [PLACEHOLDER logo: reseller customer] [PLACEHOLDER logo: reseller customer] [PLACEHOLDER logo: reseller customer] [PLACEHOLDER logo: reseller customer]

#### Section 8: Closing CTA

Eyebrow: GET STARTED

H2: Attach SSL to every site you sell.

Subhead: Become a reseller and sell certificates under your own brand, at wholesale, around the domains and hosting your customers already buy from you. Or look at the API first.

Primary CTA: Become a reseller
Secondary CTA: Explore the API

Microcopy: No retail checkout here. This is a wholesale reseller platform. [PLACEHOLDER: onboarding or contact detail]

---

# Page 6 of 8: Pricing

Page name: Pricing
URL path: /pricing
Goal of page: Build trust through transparent wholesale pricing and move qualified resellers to apply. Show real "from" prices in the open, explain how volume tiers lower cost, and answer the billing questions that hold people back, all without a retail buy flow.
Primary CTA: Become a reseller
Secondary CTA: Explore the API

### Build spec

Build with the resellerclub-ds design system (accent #1E66FF, Space Grotesk for display, Hanken Grotesk for body). Layout is wholesale and lead-gen. There is no domain search box, no add to cart, no checkout, and no login wall in front of pricing. Every number rendered must read as a placeholder.

1. Hero (transparent pricing intro)
   - Layout: centered or left-aligned hero, single column, generous top spacing. No search field.
   - Components: eyebrow label, H1, subhead paragraph, two proof chips inline (the two hard facts), primary and secondary CTA buttons.
   - Contains: the positioning that pricing is public and wholesale, and the volume principle stated plainly. Primary button "Become a reseller", secondary text link or outline button "Explore the API".

2. Domain "from" price table
   - Layout: full-width card or bordered table block, one row per TLD, columns for TLD, wholesale register from, renew from, transfer from. Sticky header row on scroll for longer tables.
   - Components: section heading, short intro line, table, footnote line for the placeholder and currency disclaimer.
   - Contains: the nine-TLD set (.com, .net, .org, .io, .ai, .co, .store, .online, .xyz) with placeholder prices in every cell. A note that prices shown are entry tier and drop with volume, with a jump link to the tier section.

3. Volume tier explainer
   - Layout: two parts. A short explainer block on the left or top, then a tier table or set of tier cards.
   - Components: heading, explainer paragraph, tier table with columns for tier name, annual volume band, indicative discount. A reassessment note below.
   - Contains: how tiers are assigned by annual volume, that they are reviewed yearly, and that movement is automatic when volume grows. All bands and discounts are placeholders. Use the word "to" for ranges, never a dash.

4. Adjacent product pricing teasers
   - Layout: four cards in a row, collapsing to one column on mobile. (If a three-up grid is preferred, place Premium DNS as a fourth card below the first row.)
   - Components: card title, one-line description, "from" price placeholder, a quiet link to the relevant product page.
   - Contains: Email per mailbox, SSL certificates, Hosting, and Premium DNS. Each framed as resell-to-your-customers wholesale pricing. No buy buttons.

5. What is included free
   - Layout: list block, two columns of items on desktop, single column on mobile, with check icons.
   - Components: heading, intro line, icon list.
   - Contains: managed DNS, domain name suggestions, ICANN compliance handling, domain parking, and the remaining listed inclusions. Concrete, no marketing inflation.

6. No hidden fees statement
   - Layout: short banner or callout strip, centered text, light accent background.
   - Components: heading, one or two supporting lines. The fee claims are marked placeholders pending sign-off.
   - Contains: the intent that pricing is the price, with the specific "no monthly fees, no minimums" lines bracketed as claims to verify.

7. FAQ
   - Layout: accordion or stacked Q and A list, single column, comfortable width.
   - Components: section heading, five expandable items.
   - Contains: questions on how wholesale pricing works, how tiers are set and changed, billing and currency, whether a deposit or minimum is required, and what happens to pricing at renewal. Answers in plain prose, no contractions.

8. Closing CTA
   - Layout: full-width band with accent background, centered content.
   - Components: H2, one supporting line, primary and secondary CTA buttons, the two hard facts repeated as small proof text beneath.
   - Contains: the apply prompt. Primary "Become a reseller", secondary "Explore the API".

### Copy

#### Section 1: Hero

Eyebrow: Wholesale pricing, in the open

H1: Wholesale domain pricing you can see before you sign up.

Subhead: We publish our entry wholesale prices so you can plan margins on day one. The more you sell, the more you save. No login wall, no sales call required to see a number.

Proof chip 1: 20+ years as a domain reseller platform
Proof chip 2: 100+ ICANN-accredited registrars on OrderBox

Primary CTA: Become a reseller
Secondary CTA: Explore the API

#### Section 2: Domain "from" price table

Heading: Domain wholesale prices

Intro: These are entry-tier wholesale prices in USD. Prices fall as your annual volume grows. See how tiers work below.

Table header row: TLD | Register from | Renew from | Transfer from

Rows:
- .com | [PLACEHOLDER price: .com register from $X.XX/yr] | [PLACEHOLDER price: .com renew from $X.XX/yr] | [PLACEHOLDER price: .com transfer from $X.XX/yr]
- .net | [PLACEHOLDER price: .net register from $X.XX/yr] | [PLACEHOLDER price: .net renew from $X.XX/yr] | [PLACEHOLDER price: .net transfer from $X.XX/yr]
- .org | [PLACEHOLDER price: .org register from $X.XX/yr] | [PLACEHOLDER price: .org renew from $X.XX/yr] | [PLACEHOLDER price: .org transfer from $X.XX/yr]
- .io | [PLACEHOLDER price: .io register from $X.XX/yr] | [PLACEHOLDER price: .io renew from $X.XX/yr] | [PLACEHOLDER price: .io transfer from $X.XX/yr]
- .ai | [PLACEHOLDER price: .ai register from $X.XX/yr] | [PLACEHOLDER price: .ai renew from $X.XX/yr] | [PLACEHOLDER price: .ai transfer from $X.XX/yr]
- .co | [PLACEHOLDER price: .co register from $X.XX/yr] | [PLACEHOLDER price: .co renew from $X.XX/yr] | [PLACEHOLDER price: .co transfer from $X.XX/yr]
- .store | [PLACEHOLDER price: .store register from $X.XX/yr] | [PLACEHOLDER price: .store renew from $X.XX/yr] | [PLACEHOLDER price: .store transfer from $X.XX/yr]
- .online | [PLACEHOLDER price: .online register from $X.XX/yr] | [PLACEHOLDER price: .online renew from $X.XX/yr] | [PLACEHOLDER price: .online transfer from $X.XX/yr]
- .xyz | [PLACEHOLDER price: .xyz register from $X.XX/yr] | [PLACEHOLDER price: .xyz renew from $X.XX/yr] | [PLACEHOLDER price: .xyz transfer from $X.XX/yr]

Footnote: Prices shown are the entry wholesale tier in USD and are representative placeholders for this prototype. Final prices and the full TLD list are confirmed at sign-up. [PLACEHOLDER: full TLD count]

#### Section 3: Volume tier explainer

Heading: The more you sell, the more you save

Explainer: Your wholesale prices are set by how much you sell in a year. Higher annual volume moves you to a lower-cost tier across the catalog, not just on one TLD. Tiers are reviewed every year. When your volume grows, your tier moves with it, so you do not have to renegotiate.

Tier table header row: Tier | Annual volume | Indicative discount

Rows:
- [PLACEHOLDER tier name: Starter] | [PLACEHOLDER band: 0 to N domains/yr] | [PLACEHOLDER discount: entry pricing]
- [PLACEHOLDER tier name: Growth] | [PLACEHOLDER band: N to N domains/yr] | [PLACEHOLDER discount: ~X% off entry]
- [PLACEHOLDER tier name: Scale] | [PLACEHOLDER band: N to N domains/yr] | [PLACEHOLDER discount: ~X% off entry]
- [PLACEHOLDER tier name: Partner] | [PLACEHOLDER band: N+ domains/yr] | [PLACEHOLDER discount: custom wholesale pricing]

Reassessment note: Tiers are reassessed annually based on your trailing volume. There is no penalty for moving up, and your customers stay yours throughout.

#### Section 4: Adjacent product pricing teasers

Heading: Price the rest of the stack

Intro: Domains lead. When your customers need more, you resell the rest from the same account at wholesale.

Card 1
- Title: Email
- Description: Per-mailbox wholesale pricing for Titan and Google Workspace, billed to you, sold by you.
- Price: [PLACEHOLDER price: email from $X.XX per mailbox/mo]
- Link: See email pricing

Card 2
- Title: SSL certificates
- Description: Wholesale certificates to secure the sites you and your customers run.
- Price: [PLACEHOLDER price: SSL from $X.XX/yr]
- Link: See SSL pricing

Card 3
- Title: Hosting
- Description: Oracle Cloud powered hosting you resell to your customers, [PLACEHOLDER claim, pending sign-off: white-label / under your brand].
- Price: [PLACEHOLDER price: hosting from $X.XX/mo]
- Link: See hosting pricing

Card 4
- Title: Premium DNS
- Description: Higher-performance managed DNS you can resell to customers who need faster resolution and added resilience.
- Price: [PLACEHOLDER price: Premium DNS from $X.XX/yr]
- Link: See Premium DNS pricing

#### Section 5: What is included free

Heading: Included at no extra cost

Intro: The items below are included with a reseller account.

List:
- Managed DNS for every domain
- Domain name suggestions for upsell and search
- ICANN compliance handling, including verification and WHOIS requirements
- Domain parking with a default landing page
- [PLACEHOLDER inclusion: bulk management tools]
- [PLACEHOLDER inclusion: reseller control panel access]
- [PLACEHOLDER inclusion: REST API and sandbox access]

#### Section 6: No hidden fees statement

Heading: The price is the price

Line 1: What you see here is what you pay at wholesale. No surprise line items at sign-up.

Line 2: [PLACEHOLDER claim, pending sign-off: no monthly platform fees]
Line 3: [PLACEHOLDER claim, pending sign-off: no minimum spend or minimum order]
Line 4: [PLACEHOLDER claim, pending sign-off: no charge to open or maintain a reseller account]

#### Section 7: FAQ

Heading: Pricing questions

Q1: How does wholesale pricing work here?
A1: You buy at wholesale and set your own retail prices for your customers. The prices on this page are what you pay us. Your margin is the difference between your retail price and your wholesale cost.

Q2: How are volume tiers set, and how do they change?
A2: Tiers are based on how much you sell in a year. As your annual volume grows, you move to a lower-cost tier across the catalog. Tiers are reviewed every year, and you move up automatically when your volume supports it.

Q3: What currency is pricing in, and how am I billed?
A3: Prices are shown in USD. [PLACEHOLDER: billing cycle, for example prepaid wallet or monthly invoice]. [PLACEHOLDER: accepted payment methods].

Q4: Is there a deposit, minimum order, or commitment to start?
A4: [PLACEHOLDER answer, pending sign-off: state any required opening deposit or minimum, or confirm there is none]. You can review the current terms during sign-up before you commit.

Q5: What happens to my price at renewal?
A5: Renewal prices follow the same wholesale tiers as registration and reflect any registry price changes [PLACEHOLDER claim, pending sign-off: registry changes passed through at cost]. We give advance notice of registry-driven changes so you can update your retail pricing. [PLACEHOLDER: notice period for price changes].

#### Section 8: Closing CTA

H2: See the full price list inside.

Supporting line: Apply for a reseller account to view every TLD, your starting tier, and the wholesale rates across email, SSL, and hosting.

Primary CTA: Become a reseller
Secondary CTA: Explore the API

Proof line: 20+ years as a domain reseller platform. 100+ ICANN-accredited registrars on OrderBox.

---

# Page 7 of 8: Platform & API

Page name: Platform & API
URL path: /platform
Goal of page: Convince technical resellers and platforms that integrating with ResellerClub is modern and easy, and drive them into the Developer Portal. Lead generation, not retail. No domain search, no cart, no buy-now.
Primary CTA: Explore the API (deep-links to the Developer Portal)
Secondary CTA: Become a reseller

> CTA note for build: This page intentionally reverses the sitewide CTA order. Per the page goal, the page-level Primary action is "Explore the API" and the page-level Secondary is "Become a reseller." This applies to the hero buttons and the closing CTA only. The sitewide top-nav chrome stays canonical and is NOT reversed: right-side nav remains "Sign in" then "Become a reseller". The top nav is Products | Platform & API | Who it's for | Pricing | Resources.

> Guardrail note for build: The modern REST API, OpenAPI/Swagger docs, sandbox, header authentication, and structured responses are present-tense, live capabilities (committed Q3 2026 work). Agent and MCP readiness appears ONLY in section 6 and ONLY in future tense ("coming", "on the roadmap"). Do not let agent/MCP language appear in the hero, in section 3, or in integrations. Only the two hard facts may be stated as fact; every other number is a marked placeholder.

### Build spec

Reference the existing resellerclub-ds design system: accent #1E66FF, Space Grotesk display, Hanken Grotesk body, JetBrains Mono for code and method tags, deep-slate "ink" (#0C1322) for dark CTA surfaces, near-black code panels (#0B1020) with a lifted header. Use the existing core components: Button, Badge, MethodTag, StatusDot, Code, Icon (Lucide). Sentence-case headlines with an occasional accent-blue highlighted noun. Eyebrows ALL CAPS, wide tracking. No CSS specified here; match the system.

1. **Hero (split layout, signature landing pattern).**
   - Two columns. Left: eyebrow, headline, subhead, two buttons, a thin trust line. Right: a near-black code panel showing a single live API call and its structured response, with a MethodTag (GET) and a small "Sandbox" StatusDot to signal this is runnable in the sandbox.
   - Buttons: page-level Primary "Explore the API" (accent fill), page-level Secondary "Become a reseller" (outline). No domain search box. No cart language.
   - Optional thin strip directly under the hero buttons: a compact proof line carrying the two hard facts.

2. **Three ways to sell and integrate (comparison-style, three columns).**
   - Section eyebrow and a short intro line framing this as "choose how much you build." Then a three-column comparison: Storefront (no code), Control panel, API (full integration). Each column is a card with a title, a one-line "best for," a short "what it is," and a "you control" line. Add a thin comparison footer row (e.g., "Time to launch," "Code required," "Best for") so it reads as a comparison, not three loose cards. Frame every column as how the reseller sells to THEIR customers. No checkout or add-to-cart wording.
   - The API column is visually emphasized (accent border or badge "Most control") to point toward the page CTA.

3. **What the modern API gives you (feature grid, 5 or 6 cells).**
   - Section eyebrow and headline. A grid of small feature cards, each with a Lucide icon, a short title, and one or two plain sentences. Cells: REST over HTTPS; OpenAPI / Swagger docs; Sandbox; Header authentication; Structured JSON responses; Predictable errors and rate-limit headers. Present tense only. No agent/MCP here.
   - Pair the grid with a slim code panel or inline code samples (request and a structured response snippet) to show, not tell.
   - Below the grid and code sample, add a quiet platform-credibility reassurance strip for technical buyers. A single line, set apart (thin rule above, muted type, no icons competing with the grid), stating that the API runs on OrderBox. Carry the three pillars in one stroke: OrderBox heritage (nearly 25 years of domain expertise), registrar scale (100+ ICANN-accredited registrars), and compliance handled for you. Keep it stability and scale and compliance only. No agent/MCP language here.

4. **Integrations (logo-style row plus short cards).**
   - Section eyebrow and headline. A row for WHMCS and Plesk as named integrations, plus a "third-party plugins and modules" card. Use placeholder logo tiles for any vendor marks. One short line each describing what the integration lets the reseller do. A quiet link to the integrations list in the Developer Portal.

5. **First 10 minutes quickstart (teaser, horizontal step rail).**
   - Section eyebrow and headline ("Your first 10 minutes"). A five-step horizontal rail with numbered steps: 1 Check availability, 2 Create a customer, 3 Add a contact, 4 Register the domain, 5 Look up the order. Each step has a one-line label and a tiny code hint (method + path) using MethodTag. Beside or below the rail, one compact code panel showing a single representative call from the journey. Make explicit this is a teaser and the full, runnable walkthrough lives in the Developer Portal. CTA inline: "Read the quickstart" linking to the portal.

6. **On the roadmap: agent and MCP readiness (forward-looking note, visually distinct).**
   - A single, clearly future-tense panel. Use the design system sparkle icon to flag it as AI/MCP, and a Badge reading "On the roadmap" so it cannot be mistaken for a live feature. Short copy: what is coming and that it is not yet available. No code sample that implies it works today. Keep this the ONLY place agents/MCP appear.

7. **Everything lives in the Developer Portal (handoff band).**
   - A focused band stating that all API documentation, reference, sandbox details, SDKs, and the changelog live in the Developer Portal, not on this marketing page. Short list of what they will find there. Primary action: "Explore the API."

8. **Closing CTA (ink / dark surface with soft radial glow).**
   - Full-width dark slate section. Headline, one supporting line. Page-level Primary button "Explore the API" (accent), page-level Secondary "Become a reseller" (outline on dark). No search, no cart.

### Copy

#### 1. Hero

Eyebrow: ONE API FOR DOMAINS

Headline: A modern domain API for technical resellers and **platforms**.

Subhead: A clean REST API, OpenAPI docs, and a full sandbox, backed by 20+ years as a domain reseller platform. The API is new, and it is built to be easy to integrate.

Primary CTA (page-level): Explore the API
Secondary CTA (page-level): Become a reseller

Trust line under buttons: 20+ years as a domain reseller platform. 100+ ICANN-accredited registrars on OrderBox.

Code panel (right), header label: SANDBOX
MethodTag: GET
Request line: `GET /v2/domains/available?name=studio.dev`
Response (structured, marked as representative):
```
{
  "domain": "studio.dev",
  "available": true,
  "price": "[PLACEHOLDER price: .dev from $X.XX/yr]",
  "currency": "USD"
}
```
Panel caption: Representative call. Run it yourself in the sandbox.

#### 2. Three ways to sell and integrate

Eyebrow: HOW YOU SELL

Headline: Choose how much you build.

Intro: Sell domains to your customers your way. Start with a ready storefront, manage through the control panel, or integrate the API into your own product. You can mix all three.

Column 1 card:
- Title: Storefront
- Tag: No code
- Best for: Start selling fast with no engineering.
- What it is: A hosted, branded storefront for your customers. You set pricing and branding. We run the registrar backbone behind it.
- You control: Branding and pricing.

Column 2 card:
- Title: Control panel
- Tag: Low code
- Best for: Day-to-day management without building software.
- What it is: A web panel to manage domains, customers, orders, and DNS by hand. Good for support teams and smaller volumes.
- You control: Operations and customer management.

Column 3 card (emphasized):
- Title: API
- Tag: Full integration
- Badge: Most control
- Best for: Building domains directly into your own product or platform.
- What it is: A modern REST API to register, manage, and renew domains inside your own site, app, or workflow. Your interface, our backbone.
- You control: The entire customer experience.

Comparison footer rows (microcopy):
- Time to launch: Storefront, fastest. Control panel, fast. API, depends on your build.
- Code required: Storefront, none. Control panel, none. API, yes.
- Best for: Storefront, resellers starting out. Control panel, hands-on operators. API, builders and platforms.

#### 3. What the modern API gives you

Eyebrow: THE API

Headline: A REST API that is easy to read and easy to ship.

Cell 1:
- Title: REST over HTTPS
- Body: Predictable resources and verbs. Standard status codes. If you have used a modern API, you already know how this one works.

Cell 2:
- Title: OpenAPI and Swagger docs
- Body: A published OpenAPI spec drives the reference. Generate clients, import into your tools, and read interactive docs in the Developer Portal.

Cell 3:
- Title: Sandbox
- Body: A full test environment with test credentials. Build and verify the whole flow before you touch production or spend a cent.

Cell 4:
- Title: Header authentication
- Body: Authenticate with credentials in the request header. No tokens in the query string. Clean to rotate, clean to manage.

Cell 5:
- Title: Structured responses
- Body: Consistent JSON on every call. Typed fields and clear shapes, so parsing stays simple as you scale.

Cell 6:
- Title: Predictable errors and limits
- Body: Errors return a clear code and message you can act on. Rate-limit headers tell you where you stand, so your integration stays stable.

Inline code sample (request):
```
GET /v2/domains/studio.dev
Authorization: ApiKey [PLACEHOLDER: your sandbox key]
```
Inline code sample (structured response, representative):
```
{
  "domain": "studio.dev",
  "status": "active",
  "expires_at": "[PLACEHOLDER: 2027-06-19]",
  "auto_renew": true
}
```

Platform-credibility reassurance strip (below the grid and code sample): The API is new, but the platform under it is not. It runs on OrderBox, a platform with nearly 25 years of domain expertise that powers 100+ ICANN-accredited registrars and handles ICANN and registry compliance for you. You build on stable, proven infrastructure that already operates at registrar scale.

#### 4. Integrations

Eyebrow: INTEGRATIONS

Headline: Plug into the tools you already run.

WHMCS card:
- Title: WHMCS
- [PLACEHOLDER logo: WHMCS]
- Body: Sell and provision domains directly from your WHMCS billing system. [PLACEHOLDER: link to WHMCS module in Developer Portal]

Plesk card:
- Title: Plesk
- [PLACEHOLDER logo: Plesk]
- Body: Manage domains alongside hosting from inside Plesk. [PLACEHOLDER: link to Plesk integration in Developer Portal]

Third-party card:
- Title: Plugins and modules
- Body: Connect through community and third-party plugins, or build your own on the API. [PLACEHOLDER: list of supported plugins]

Link: See all integrations in the Developer Portal.

#### 5. First 10 minutes quickstart

Eyebrow: QUICKSTART

Headline: Your first 10 minutes.

Intro: Here is the path from nothing to a registered domain. This is a teaser. The full, runnable walkthrough lives in the Developer Portal.

Step 1:
- Label: Check availability
- Hint: GET /v2/domains/available

Step 2:
- Label: Create a customer
- Hint: POST /v2/customers

Step 3:
- Label: Add a contact
- Hint: POST /v2/contacts

Step 4:
- Label: Register the domain
- Hint: POST /v2/domains

Step 5:
- Label: Look up the order
- Hint: GET /v2/orders/{id}

Code panel (one representative call from the journey):
```
POST /v2/domains
Authorization: ApiKey [PLACEHOLDER: your sandbox key]

{
  "name": "studio.dev",
  "years": 1,
  "customer_id": "[PLACEHOLDER: customer id]",
  "contact_id": "[PLACEHOLDER: contact id]"
}
```
Panel caption: Representative call. Run the full sequence in the sandbox.

Inline CTA: Read the quickstart (links to the Developer Portal)

#### 6. On the roadmap: agent and MCP readiness

Eyebrow: COMING SOON
Badge: On the roadmap

Headline: Agent and MCP readiness is coming.

Body: We are building toward an MCP server so AI agents can work with domains through guarded, structured tools. This is on the roadmap and is not available yet. The current API is the foundation we are building it on. We will share details in the Developer Portal as the work lands.

Microcopy under the panel: Future capability. Not live today.

#### 7. Everything lives in the Developer Portal

Eyebrow: DEVELOPER PORTAL

Headline: The docs, the sandbox, the spec. All in one place.

Body: This page is the overview. Everything you need to integrate lives in the Developer Portal, not here.

What you will find there:
- Interactive API reference, driven by the OpenAPI spec
- The full quickstart and integration guides
- Sandbox credentials and testing notes
- SDKs and tooling [PLACEHOLDER: confirm which SDKs ship]
- A versioned, dated changelog

Primary CTA (page-level): Explore the API

#### 8. Closing CTA

Headline: Build domains into your product.

Supporting line: Start in the Developer Portal, or become a reseller and get your credentials.

Primary CTA (page-level): Explore the API
Secondary CTA (page-level): Become a reseller

---

# Page 8 of 8: Who it's for: Web hosts and agencies

Page name: Who it's for, Web hosts and agencies
URL path: /who-its-for/web-hosts-agencies
Goal of page: Speak directly to web hosts, and developers and agencies, the lead audience, about reselling domains and adjacent services to their own customers, and drive qualified reseller signups. This is the flagship segment page.
Primary CTA: Become a reseller
Secondary CTA: Explore the API

### Build spec

Build against the existing resellerclub-ds design system. Accent is the single bright blue #1E66FF, used only for primary action and key emphasis. Display type is Space Grotesk, body is Hanken Grotesk, code is JetBrains Mono. Use Lucide icons only, no emoji, no unicode glyphs. Pill badges for eyebrows and tags, 10px control radius, slate ink for dark surfaces and any code panel, slate-tinted shadows with a blue glow on primary-button hover. No CSS is specified here, only layout and component intent. Wrap page content in the standard `rc` container and the shared site shell.

Use the standard site shell, do not re-spec it:
- Top nav (verbatim): Products | Platform & API | Who it's for | Pricing | Resources. Right side: Sign in, and a primary button, Become a reseller. The "Who it's for" item is the active parent of this page.
- Footer: reuse the global footer with columns mirroring the nav. No bespoke footer on this page.

Page sections in order:

#### 1. Hero (tailored to hosts and agencies)
- Layout: left-aligned text column with a supporting visual panel on the right at desktop, stacked on mobile. Dark or light surface per the homepage hero treatment, kept consistent with resellerclub-ds.
- Components: pill eyebrow badge, large display headline, one-line subhead, primary and secondary CTA buttons side by side, and a thin proof strip directly beneath the CTAs.
- Proof strip: two stat blocks, both hard facts, plus space for one or two marked placeholder stats. Use small Lucide icons (for example a shield for accreditation, a clock or calendar for heritage).
- No domain search box. No buy-now or pricing-entry control. This is a lead-gen page.

#### 2. The problem we solve
- Layout: short intro line, then a two-column problem-to-outcome layout. Left column states the situation hosts and agencies face, right column states what changes with ResellerClub. Alternatively render as a "without / with" pair of cards.
- Components: two stacked cards or a split panel, each with a short heading and two to three lines of body. One closing line reinforces "you do not need to become a registrar."
- Keep concrete: bundling, retention, margin, no registrar accreditation burden.

#### 3. What you can resell (domains lead, ecosystem attaches)
- Layout: a lead block for Domains given visual primacy (larger card or full-width band at the top of the section), followed by a grid of smaller cards for the attach products.
- Components: one prominent Domains card, then a 3-up or 4-up grid: Email (Titan, Google Workspace), SSL certificates, Hosting (Oracle Cloud, resell), DNS and Premium DNS, Security add-ons, Website builder. Each card has a Lucide icon, a short heading, and one line of body.
- Microcopy line under the section: everything your customers need, under one account.
- Optional transparent "from" price teasers per card, each a clearly marked placeholder, linking to the Pricing page. Do not show cart or buy controls.

#### 4. How you sell
- Layout: 4-up grid of channel cards, equal weight, with a one-line intro above.
- Components: four cards, each with a Lucide icon, heading, and one to two lines: Storefront (Supersite), Control panel, REST API, Integrations (WHMCS, Plesk). The API card carries the secondary CTA "Explore the API" as a text link.
- Note for build: storefront means the reseller's own branded storefront selling to their customers, not a ResellerClub retail checkout.

#### 5. Margin and white-label control
- Layout: split section. Left side carries the wholesale economics message with a compact volume-tier visual (representative, marked placeholder numbers). Right side carries the white-label and ownership message as a short list.
- Components: a small tiered-pricing teaser table or stepped bars labeled as placeholders, and a 3-item list with Lucide check icons for brand control, customer ownership, and wholesale economics. Include a text link to the full Pricing page.
- Reinforce the line: the more you sell, the more you save.

#### 6. Support built for partners
- Layout: 4-up icon grid or a horizontal feature row.
- Components: four items with Lucide icons and one line each: 24/7 support, dedicated account management, migration and onboarding, technical and API support.

#### 7. A stable, proven platform behind you
- Layout: a reassurance band set apart from the surrounding sections, for example a tinted or dark surface consistent with resellerclub-ds. Short heading and one or two lines of intro prose, followed by a 3-up row of credibility points.
- Components: a 3-up row of items, each with a Lucide icon (for example a server or shield-check for platform stability, a building or landmark for registrar scale, a file-check or scale icon for compliance) and one line of body. Credibility figures are woven into the intro prose and the points, not repeated as the hero stat blocks.
- Intent: this section addresses the partner's own business risk. Hosts and agencies run many customer sites on top of us, so the platform underneath has to be stable and proven. Name only OrderBox as the platform. Do not place a bare "20+ years" next to "nearly 25 years" here; this section uses "nearly 25 years of domain expertise" only.

#### 8. Customer story (placeholder)
- Layout: single highlighted quote block, centered or left-aligned, on a tinted or dark surface to set it apart.
- Components: large pull-quote, attribution line, optional logo slot. All content is placeholder. Light contractions are acceptable inside the quote only.

#### 9. Closing CTA
- Layout: full-width band, centered, accent-forward.
- Components: short headline, one supporting line, primary button Become a reseller, secondary button or text link Explore the API.
- See-also line beneath the CTAs: a single text link out to the AI and website-builder platforms segment page. This is a link only, never featured here.

### Copy

#### 1. Hero

Eyebrow (pill badge): Wholesale domain registrar

Headline: Resell domains your customers already need.

Subhead: For web hosts, and developers and agencies. Add domains, email, SSL, and hosting to what you already sell, under your own brand, on wholesale terms.

Primary CTA: Become a reseller
Secondary CTA: Explore the API

Proof strip:
- 20+ years as a domain reseller platform
- 100+ ICANN-accredited registrars on OrderBox
- [PLACEHOLDER stat: ~N million domains under management]

#### 2. The problem we solve

Section intro: Your customers buy hosting, sites, and apps from you. Many of them buy domains, email, and SSL somewhere else. Every one of those is margin you do not capture and a reason for a customer to look elsewhere.

Card A heading: Today, without a reseller account
Card A body: You either send customers to a third party for their domain and email, or you take on the cost and compliance of becoming a registrar yourself. The first loses margin and weakens the relationship. The second is slow and expensive.

Card B heading: With ResellerClub
Card B body: You resell domains and the services around them under your own brand, on wholesale pricing. Your customers get everything in one place. You keep the margin and the relationship.

Closing line: You do not need to become a registrar. We are the registrar platform behind you.

#### 3. What you can resell

Section heading: Domains first, and everything that attaches to them.
Section intro: Lead with domains. Add the services your customers ask for next, all under one account.

Lead card, Domains:
- Heading: Domains
- Body: Register, transfer, and manage domains across a wide range of TLDs at wholesale prices. This is the core of what you resell.
- Price teaser: [PLACEHOLDER price: .com from $X.XX/yr wholesale]

Attach cards:
- Email: Sell professional email with Titan and Google Workspace alongside every domain. [PLACEHOLDER price: email from $X.XX/mailbox/mo]
- SSL certificates: Add trusted SSL so your customers' sites load secure from day one.
- Hosting: Resell hosting to your customers, powered by Oracle Cloud, attached to the domains you already sell.
- DNS and Premium DNS: Manage records at scale, with Premium DNS for performance and resilience.
- Security add-ons: Offer privacy protection and security extras as easy upsells.
- Website builder: Give customers a fast way to get a site live on the domain they just bought.

Microcopy: Everything your customers need, under one account.

#### 4. How you sell

Section heading: Sell the way that fits your business.
Section intro: Use a ready storefront, a control panel, the API, or your existing tools. Most partners use more than one.

Cards:
- Storefront (Supersite): Launch a branded storefront and start selling without building anything. Your customers buy from you, under your name.
- Control panel: Manage domains, services, and customers from one dashboard. Good for hands-on teams and day-to-day operations.
- REST API: Provision and manage domains directly inside your own site, app, or workflow with a modern REST API, clean docs, and a sandbox to build against. (Link: Explore the API)
- Integrations: Connect the tools you already run, including WHMCS and Plesk, so domains and services fit into your current billing and provisioning.

#### 5. Margin and white-label control

Section heading: Your brand. Your customers. Wholesale economics.

Left block heading: The more you sell, the more you save.
Left block body: Pricing is wholesale and volume-based. As your volume grows, your cost per domain comes down, so your margin grows with you. Tiers are transparent and published, no negotiation required to see your price.

Tier teaser (representative, marked placeholder):
- Tier 1: [PLACEHOLDER price: .com from $X.XX/yr]
- Tier 2: [PLACEHOLDER price: .com from $X.XX/yr at higher volume]
- Tier 3: [PLACEHOLDER price: .com from $X.XX/yr at top volume]
- Link: See full wholesale pricing

Right block heading: White-label, end to end.
Right block list:
- Sell under your own brand. Your customers see you, not us.
- Your customers stay yours. We do not market to them or compete for them.
- Wholesale margin you set. You control the retail price your customers pay.

#### 6. Support built for partners

Section heading: Support built for partners, not end users.
Section intro: You are running a business on top of us. We support it like one.

Items:
- [PLACEHOLDER: 24/7 support availability]: Reach a real team when your customers need you.
- Dedicated account management: A named contact who knows your account and helps you grow it.
- Migration and onboarding: Hands-on help moving domains and customers over, with no scramble.
- Technical and API support: Engineering-aware help for integrations, provisioning, and the API.

#### 7. A stable, proven platform behind you

Section heading: A stable, proven platform behind you.
Section intro: You run many customer sites on a platform proven at registrar scale. ResellerClub runs on OrderBox, the same infrastructure that supports 100+ ICANN-accredited registrars, with nearly 25 years of domain expertise behind it. When your customers depend on you, you depend on a platform that has done this for a long time.

Items:
- Proven at registrar scale: OrderBox carries 100+ ICANN-accredited registrars on stable, proven infrastructure, so the platform under your customer sites holds up as you grow.
- Nearly 25 years of domain expertise: The OrderBox platform has run domains for almost 25 years. That heritage is the experience your business sits on.
- Compliance handled for you: ICANN and registry compliance is managed on the platform, so you sell domains without carrying registrar accreditation or the rules that come with it.

#### 8. Customer story (placeholder)

Pull-quote: "[PLACEHOLDER testimonial: Moving our domains and email onto ResellerClub let us bundle everything our customers needed under one brand. We've grown the margin on every account and we're not sending anyone elsewhere.]"

Attribution: [PLACEHOLDER testimonial: named reseller, role and company]
Logo slot: [PLACEHOLDER logo: reseller customer]

#### 9. Closing CTA

Headline: Start reselling domains under your own brand.
Supporting line: Add domains, email, SSL, and hosting to what you already sell, on wholesale terms, with the registrar platform run for you.

Primary CTA: Become a reseller
Secondary CTA: Explore the API

See-also line: Building an AI or website-builder platform that needs domains inside the product? See AI and website-builder platforms.

---

# Signup and login flows (build after the pages)

These four flows share the Auth component (see Design system and global components, Section 9: Authentication). Build the Auth component once, then reuse it across all of them. Two account types: production reseller ("Become a reseller") and demo ("Start a demo"). They are separate accounts with separate API keys; never show a test-to-live toggle. Google and GitHub plus email appear on every signup and sign-in screen, with Email as the only identity label.

## Flow A: Become a reseller (production signup)

Goal: one screen to a production reseller account, then collect currency, billing, and tax just in time, never before. URL /signup. From signup-flow.md.

### A1: Create account (the only signup step)

- Shared Auth component, reseller variant. Eyebrow CREATE YOUR RESELLER ACCOUNT. H1: One step to your wholesale account. Subhead: Create your account and you are in. We ask for billing and pricing details later, only when you need them.
- Primary auth, active and stacked: Continue with Google, Continue with GitHub. Then an "or use email" divider, then Email and Password (show and hide).
- Consent: single checkbox (Terms Of Service, Cancellation Policy, Privacy Notice, Reseller Master Agreement) as inline accent links.
- Primary button: Create account. Google, GitHub, and Create account all advance to A2.
- Footer: "Already have an account? Sign in" (Flow B). Microcopy: No payment needed to create your account. You add funds when you are ready to start selling.

### A2: Dashboard landing (proof the user is in immediately)

- A simple reseller dashboard shell: slim left rail (Dashboard, Products, Pricing, Customers, Add funds, Settings) and a top bar with logo and avatar.
- Welcome panel, H2: You are in. Here is your reseller dashboard. A light, dismissible "Finish setting up" strip with three quiet items (Set your selling currency, Add billing details, Secure your account), each linking to the matching just-in-time screen. Never blocking.
- Demo entry points the presenter can click: Pricing goes to A3, Add funds goes to A4.

### A3: Just-in-time selling currency (at first pricing view)

- A focused prompt over a pricing view. Eyebrow SET YOUR SELLING CURRENCY. H2: Pick the currency your customers see. A currency dropdown defaulted to the visitor region ("Detected from your region") and a Save button. Reason line: We ask now because you are about to set prices. Save returns to A2 with the item marked done.

### A4: Just-in-time add funds with billing and tax (at first Add Funds)

- Two parts: billing details (Name or Business name, Country defaulted to region, Address, Tax or GST identifier shown only for countries that use one) and an amount-to-add field with preset chips in the region currency. Reason line: We collect billing details here because adding funds activates your account and we need them for your invoice. Primary button Continue to payment (non-functional, payment out of scope). Back returns to A2.

### A5 (optional): Secure your account (mobile number)

- Eyebrow SECURE YOUR ACCOUNT. A country dialing code defaulted to region and a number field, with Save and Skip for now. Reason: used to secure your account and reach you about your orders.

## Flow B: Sign in and recovery

Goal: a modern on-brand sign-in that replaces the legacy control-panel login and recovery. URL /login. From login.md.

### B1: Sign in

- Shared Auth component, sign-in variant. Eyebrow SIGN IN. H1: Sign in to your account.
- Primary auth, active: Continue with Google, Continue with GitHub. Then "or use email", then Email and Password, a Remember me checkbox, and a Forgot password link (opens B2). Email is the only identity label.
- Primary button: Sign in securely. All paths advance to B3.
- Footer: "New here? Become a reseller" (Flow A) and "Just exploring the API? Start a demo" (Flow C).

### B2: Forgot password

- Eyebrow RESET PASSWORD. One field: Email. Primary button Send reset instructions, then a confirmation state in the same card. Back returns to B1. Do not reproduce the current account-type fork or the legacy unstyled recovery page; ask only for the email, on-brand.

### B3: Signed-in destination (deep link)

- For a demo account, deep-link to the existing control panel API page (legacy style, captioned "existing control panel, not part of this redesign"). For a live account, the reseller dashboard (as A2). Default the prototype to the dashboard, with a note that a demo sign-in lands on the control panel API page instead.

## Flow C: Start a demo and API key

Goal: a developer signs up simply and is taken straight to the existing control panel API page, where the key already lives. The key is issued only in the control panel (Settings then API, View API key, Regenerate). Do not build a new post-login key screen. URL /signup demo. From api-access-signup.md.

### C1: Simple signup (new design)

- Shared Auth component, demo variant. Eyebrow START A DEMO ACCOUNT. H1: Create your demo account and get your API key.
- Primary auth, active: Continue with Google, Continue with GitHub. Then "or use email", then Email and Password.
- Consent: single checkbox as in Flow A. Primary button Create account. All paths advance to C2. Footer: "Already have an account? Sign in" (Flow B). Microcopy: Your API key is issued in your control panel. We take you straight there.

### C2: Sign in (new design)

- Same card pattern. Active Google and GitHub plus an email and password path. Microcopy: After sign-in you are taken directly to Settings then API in your control panel. Advances to C3.

### C3: Existing control panel API page (representation, not redesigned)

- Render in the plain legacy control-panel style, not resellerclub-ds, captioned "Existing reseller control panel. Shown for context. Not part of this redesign." Show a Settings then API page with a View API key link (popup with a masked fake key in JetBrains Mono and a copy control) and a Regenerate link. Note the key is used with the Reseller Id (auth-userid) from Manage Profile and the API base https://httpapi.com/. Caption: this is the demo account key, for the demo or test API only; it does not work on a live account; going live is a separate signup. No test-to-live toggle. Never show a real key.

## Flow D: Developer Portal landing

Goal: the front door for builders, offering both doors into an account. URL /developers. Uses the standard marketing nav and footer (unlike the focused auth cards). From developer-portal.md.

### D1: Hero (two doors)

- Split hero, left copy, right a captioned non-transacting code illustration (request plus JSON in JetBrains Mono). Eyebrow DEVELOPER PORTAL. H1: Build domains into your product. Subhead: Try the API in a sandbox in minutes, or open a production reseller account when you are ready.
- Two CTAs: page-level Primary "Start a demo" (opens Flow C), page-level Secondary "Become a reseller" (opens Flow A). A quiet "Already have an account? Sign in" (Flow B). One line each making the two doors explicit.

### D2: What you get with a demo

- A 3-card row: a sandbox API key in your control panel, test data with no funds needed, full API reference and quickstart. Make clear the demo account and key are sandbox only and separate from a live account.

### D3: Quickstart teaser

- A compact "your first call" panel (request plus short JSON in JetBrains Mono) and a "Read the quickstart" link; full runnable walkthrough lives in the portal docs.

### D4: Demo and live are separate (clarity band)

- A short band: a demo account is for testing and its key works only against the sandbox; a live reseller account is a separate signup with its own key for real orders. Do not imply a single account with a toggle.

### D5: Closing CTA

- Full-width ink band with radial blue glow. CTA pair: page-level Primary "Start a demo", page-level Secondary "Become a reseller". Standard footer below.

---

# Appendix: change list (what changed from the current site)

### Change List for Claude Design

> This supersedes the old Homepage v2 change list. Use this document as the single source of truth for the ResellerClub reposition build.

This is an ordered delta from the current live retail-feeling, hosting-led, buy-now ResellerClub site to the new wholesale, lead-gen, domains-led site. Build all five pages on the resellerclub-ds design system.

#### Global changes (apply to every page)

1. **New top nav (verbatim, every page):** Products | Platform & API | Who it's for | Pricing | Resources. Right side: "Sign in" (quiet text link) then "Become a reseller" (solid accent button). Sticky; mobile hamburger preserves order. This puts Platform & API in primary nav (name.com model).
2. **Remove all retail conversion mechanics:** no domain search box, no availability-to-buy search bar, no add-to-cart, no checkout, no buy-now copy anywhere. Any domain-row visual is a clearly captioned non-transacting interface illustration only.
3. **Single primary action everywhere:** "Become a reseller". Single secondary: "Explore the API". Pure lead-gen. (Exception: the Platform & API page reverses these two at the page level, by design; nav chrome stays canonical.)
4. **Domains lead, everything else attaches.** Hosting is reframed from a retail buy-now hosting line to a wholesale "resell hosting to your customers, Oracle Cloud powered" attach product. It never co-stars with domains.
5. **Transparent wholesale pricing in the open:** published "from" tiers, volume-based ("the more you sell, the more you save"), USD, no login wall in front of pricing. All numbers are marked placeholders.
6. **Global, geo-neutral voice.** No India/APAC lean. Global proof, USD.
7. **Two hard facts only, verbatim, reused as proof strips:** "20+ years as a domain reseller platform" and "100+ ICANN-accredited registrars on OrderBox". Every other figure is a bracketed placeholder.
8. **Anchor claim verbatim** where used: "The wholesale domain registrar built for the people who build the web."
9. **Writing mechanics:** no em-dashes or en-dashes, no emojis, no banned buzzwords, minimal contractions. (These are graded; honor the source copy as written.)
10. **Multi-column footer mirrors the new nav** plus Company column and a USD/region utility row.

#### Per-page changes

**Homepage (/)**
- Replace any hosting-led / search-led hero with a domains-led wholesale hero carrying the anchor claim and the two-fact trust line.
- Add: reseller logo wall, proof strip (2 hard facts + 2 placeholders), four pillar cards, domains-led product ecosystem grid (Domains lead card + attach cards with "from" teasers linking to /pricing), deeper API block with future-tense agent/MCP note and a non-functional code teaser, three "Who it's for" tiles (web hosts first), ways-to-sell row (Storefront/Control panel/API/Integrations naming WHMCS and Plesk), pricing snapshot (3 illustrative tiers), support row, closing accent CTA.
- One copy fix before paste: hero subhead audience list to "Built for web hosts, developers and agencies, and AI and website-builder platforms."

**Domains (/products/domains)**
- Build as the flagship product page: split hero with a captioned non-transacting domain-row illustration (no search), why-resell four cards, an ink heritage band, TLD coverage + wholesale "from" teaser cards (action is "See wholesale pricing" to /pricing, no per-card buy button), full lifecycle grid, ways-to-sell three cards (agent/MCP future-tense note on the API card only), a supporting attach strip (Email/SSL/Hosting), proof strip, ink closing CTA.

**Who it's for, Web hosts and agencies (/who-its-for/web-hosts-agencies)**
- Flagship segment page for the lead audience. Tailored hero, problem-to-outcome ("without / with") pair reinforcing "you do not need to become a registrar," domains-led "what you can resell" block, four how-you-sell cards (API card links to Explore the API), margin + white-label split with placeholder tier teaser, partner support row, placeholder customer story, closing CTA with a single see-also text link to the AI and website-builder platforms segment (link only, never featured).

**Pricing (/pricing)**
- New transparent wholesale pricing page, no search, no cart, no login wall. Hero with both hard facts as proof chips, nine-TLD "from" table (register/renew/transfer, all placeholders), volume tier explainer (ranges use "to" not a dash), adjacent product teasers (Email/SSL/Hosting/Premium DNS, resell-framed), "included free" list, "no hidden fees" callout (claims bracketed pending sign-off), five-item FAQ, closing CTA repeating both hard facts.

**Platform & API (/platform)**
- New developer-facing page driving into the Developer Portal. Split hero with a sandbox code panel; page-level CTAs reversed (Primary "Explore the API", Secondary "Become a reseller") on hero and closing only. Three-ways-to-sell comparison (API column emphasized), modern-API feature grid (present tense, REST/OpenAPI/sandbox/header auth/structured JSON/predictable errors), integrations row (WHMCS, Plesk, third-party), first-10-minutes quickstart rail with representative calls, a single future-tense "On the roadmap" agent/MCP panel (the only place agents/MCP appear), a Developer Portal handoff band, ink closing CTA. All code is illustrative with placeholder keys.

#### Addendum: Product overview pages added (Hosting, Email, SSL)

These three product overview pages extend the v2 wholesale package. Each is a wholesale, lead-gen, resell-framed overview of an add-on service that partners attach around domains. Domains remain the lead product; these never co-star with domains and are framed only as "resell this to your customers under your own brand, at wholesale." Build all three on the resellerclub-ds design system (accent #1E66FF, Space Grotesk display, Hanken Grotesk body, JetBrains Mono for prices and spec strings), with the canonical top nav, both hard facts, and the "Become a reseller" / "Explore the API" CTA pair.

**Hosting (/products/hosting)**
- Resell the full hosting suite, powered by Oracle Cloud, under the partner's brand. Hero (Oracle Cloud trust line + heritage fact, non-transacting control-panel illustration), seven-card suite grid (Shared Linux/Windows, Reseller, WordPress, Cloud, VPS, Managed VPS, Dedicated) with wholesale "from" placeholder teasers, "Why resell hosting" four cards plus an ink "powered by Oracle Cloud" band, an attach-to-domains strip (links to /products/domains, /products/email, /products/ssl), management and support checklist, "Ways to sell" three cards (storefront, control panel, API), proof strip (both hard facts + placeholders), ink closing CTA. Oracle stated as fact; all OCI specs are placeholders.

**Email (/products/email)**
- Resell Business Email by Titan and Google Workspace, wholesale, framed as recurring revenue and stickiness around every domain. Hero, two equal-weight offering cards (Titan with a white-label note marked "[confirm]"; Google Workspace explicitly resold as-is, Google-branded, NOT white-labeled), "Why resell email" four cards, feature highlights (specs as placeholders), attach-to-domains three-step flow, management and support (control panel, provisioning at scale via API, support), proof strip, ink closing CTA. Price teasers use "/mailbox/mo".

**SSL Certificates (/products/ssl)**
- Resell SSL/TLS certificates as a high-attach recurring add-on around domains and hosting. Hero (SSL-specific H1, not the company anchor claim), five certificate-type cards (DV, OV, EV, Wildcard, multi-domain/SAN) with wholesale "from" placeholder teasers, a "certificate authorities and brands" placeholder row (no CA named as fact), "Why resell SSL" four cards, an issuance-and-lifecycle step row (validate, issue and install, renew, reissue), an attach strip to /products/domains and /products/hosting, proof strip, ink closing CTA.

**Shared posture (all three)**
- Pure wholesale lead-gen. No retail buy-now, no add-to-cart, no checkout, no order-now, no per-plan or per-certificate purchase control, no live signup or provisioning UI. The only actions are "Become a reseller" and "Explore the API". Every storefront and control-panel visual is a captioned non-transacting interface illustration. Each page carries "No retail checkout here. This is a wholesale reseller platform." All prices, counts, uptime, mailbox sizes, terms, warranties, and CA/brand names render as visible bracketed placeholders. USD, global and geo-neutral.

**Products nav now deep-links to these pages.** The Products top-nav menu item now opens a menu that deep-links to /products/domains, /products/hosting, /products/email, and /products/ssl (Domains listed first as the lead product). The footer Products column already lists Domains, Email, SSL certificates, and Hosting; point those entries at the same URLs.

**One copy fix before paste (from the consistency report):** normalize the wholesale price teasers on Hosting and Email to the canonical Domains TLD format `from [PLACEHOLDER price: $X.XX/<unit>]   wholesale` (lowercase "from", standalone teaser line, the placeholder hint must not repeat "from"). SSL already matches. Optional cosmetic: rename the Hosting Section 6 storefront card title from "Branded storefront" to "Storefront (Supersite)" to match the package label.

### Update 2026-06-19: Built on OrderBox credibility message

Added an OrderBox platform-credibility message across Home, Web hosts and agencies, Platform & API, and Domains. OrderBox is cited as the proven platform behind ResellerClub (powers 100+ ICANN-accredited registrars, nearly 25 years of domain expertise, ICANN and registry compliance handled, stable infrastructure). LogicBoxes is never named. Homepage gains a dedicated "Built on OrderBox" section after the four pillars and an OrderBox-cluster proof strip. The 20+ years reseller heritage and nearly 25 years platform heritage are tied into one statement, never shown as competing stats.
