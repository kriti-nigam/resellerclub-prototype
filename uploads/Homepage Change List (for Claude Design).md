---
date: 2026-06-13
type: changelist
status: draft
tags:
  - project
  - resellerclub
  - website
  - homepage
project:
  - "[[ResellerClub Website Refresh]]"
---

# Homepage Change List (for Claude Design)

Living delta between the current build and the target in [[Homepage Build Spec (Claude Design)]] (the source of truth). This holds only pending and new changes. When a version is built in Claude Design and approved, applied items fold into the Build Spec and are cleared from here. Version history is in [[CHANGELOG]] and `builds/`.

Current build: v1. Target: v2 (apply all items below).

Each item states the section, the action, the exact placement, and the exact content. Facts to verify before publishing are marked CONFIRM. After applying, use the final section order in item 6.

## Status

| Item | Change | Status |
|---|---|---|
| 1 | Remove announcement banner | Pending (v2) |
| 2 | 800+ TLDs consistent | Pending (v2) |
| 3 | Developer section: confirmed only | Pending (v2) |
| 4 | Keep four pillars | Pending (v2) |
| 5 | Hero three-step visual | Pending (v2) |
| 6 | Tighten and merge sections | Pending (v2) |
| 7 | SEO footer | Pending (v2) |
| 8 | On-page SEO basics | Pending (v2) |
| 9 | Trust marks and testimonials | Pending (v2) |
| 10 | Vendor and partner brand strip | Pending (v2) |
| 11 | Partnerships contact path | Pending (v2) |
| 12 | Hero headline swap | Pending (v2) |
| 13 | Developer content links to portal, no docs on site | Pending (v2) |

---

## 1. Remove the announcement banner

Action: delete the entire top promo bar (the dark strip above the nav that reads "New. One wholesale API for domains, email, SSL and hosting, agent and MCP ready. Explore the API").
Result: the sticky nav becomes the topmost element. Do not replace it with another banner.

## 2. Make the TLD count "800+" consistent

"800+ TLDs" is confirmed and must read identically everywhere.
- Nav, Products menu, Domains item description: keep "800+ TLDs at wholesale, white-labeled".
- Product ecosystem, Domains hero copy and its meta stat: keep "800+ TLDs".
- Proof strip: change the TLD stat from "TBD" to the number "800+" with the label "TLDs supported". Remove the dashed TBD marker on that stat only.
- Leave the "Domains under management" stat as TBD with its dashed marker. Do not invent a number.

## 3. Developer section: show only confirmed capabilities

- Code sample: replace the SDK version with a plain HTTPS request, because no official SDK is confirmed for launch. Use this illustrative request, and keep the comment. The exact endpoint, auth header, and field names must match the final OrderBox API Refresh spec before publishing (CONFIRM):
  ```
  curl -X POST https://api.resellerclub.com/domains \
    -H "Authorization: Bearer $RC_API_KEY" \
    -H "Content-Type: application/json" \
    -d '{ "domain": "yourcustomer.com", "years": 1, "privacy": true }'
  ```
- Remove the "Webhooks" feature tile from the developer feature grid (the item with the git-branch icon). It is a later-phase API item, not confirmed for launch.
- Keep these developer feature items only: API overview, Documentation, MCP and agents, Sandbox, Integrations (WHMCS, Plesk).
- Keep the MCP and agent references that appear in the pillars, this section, and the AI-platforms audience card. The site launches in lockstep with the API Refresh, so these are confirmed for launch. Do not lead with them from a top-of-page banner (see item 1).

## 4. Pillars: keep four (no change)

Keep the four pillars exactly as built, in the 2x2 grid: Wholesale by heritage, Built for builders, Everything your customers need, Support built for partners. Do not add a fifth.

## 5. Replace the hero visual with a three-step value flow

Action: remove the mock white-label console panel in the hero. Do not show any literal product panel screenshot; the real panels are not representative.
Replace with a clean, stylized three-step horizontal flow (stacked vertically on mobile), on the design system. Three nodes, left to right, connected by an arrow or line:
1. Integrate. A small code or API snippet card (three or four lines that register a domain). Caption: "Integrate".
2. Sell. A white-label "Your brand" storefront card showing domains, email, and SSL. Caption: "Sell".
3. Earn. A card highlighting reseller margin, with one figure. Caption: "Earn".
The message is ease of integration, selling under your own brand, and keeping your margin. Any figure shown (for example a margin amount) must read as clearly illustrative, not a platform claim.

## 6. Tighten the page: merge and slim

The page is too long and repeats messages. Cut the echoes so each message lands once. Apply these merges:
- Combine the reseller logo wall and the proof stat strip into one Trust band (one section): logo row first with the label "Trusted by resellers worldwide", then the four stats, then the additions in item 9.
- Merge "Ways to sell" into the "Built for builders" section to form one Platform section. It covers building (API overview, Documentation, MCP and agents, Sandbox, Integrations) and selling (Storefront / Supersite, Control panel). Tell the developer and selling story once, here. Do not keep a separate "Ways to sell" section.
- Slim the Support section to a single horizontal band of four short items (24/7 help, Dedicated account management, Migration and onboarding, Technical and API support). Move any longer support detail to the footer. Do not use a full padded section.

Final section order (top to bottom):
1. Sticky nav
2. Hero (with the three-step visual from item 5)
3. Trust band (logos, stats, accreditation marks, testimonials, per items 6 and 9)
4. Why ResellerClub (four pillars)
5. Product ecosystem (domains-led) with the vendor strip from item 10
6. Platform (build and sell, merged per item 6)
7. Who it's for (three audience tiles)
8. Pricing snapshot (transparent tiers)
9. Support band (slim, four items)
10. Closing CTA (with the partnerships path from item 11)
11. SEO footer (item 7)

## 7. SEO footer

Replace the navigation-only footer with a richer footer that earns long-tail search and gives crawlers internal links. Keep the existing columns (Products, Platform and Developers, Who it's for, Resources, Company, and legal row), and add:
- A "Popular TLDs" column linking each of: .com, .net, .org, .io, .ai, .co, .dev, .app, .store. Each links to its own TLD page (placeholder links are fine for v1).
- A "Solutions" column linking: Domain reseller program, Become a reseller, White-label domains, Bulk domains, Domain API.
- A short SEO boilerplate paragraph near the bottom of the footer, using this exact text: "ResellerClub is a wholesale domain registrar for web hosts, developers, agencies, and AI and website-builder platforms. Register and manage domains across 800+ TLDs, plus email, SSL, and hosting, under your own brand, by control panel or API."
- Do not add comparison pages or a newsletter signup in v1.

## 8. On-page SEO basics

- Use exactly one H1 on the page: the hero headline.
- Give each section a descriptive, keyword-aligned H2. Examples to use: "Wholesale domains across 800+ TLDs" (product ecosystem), "A domain API built for builders and agents" (Platform), "Built for web hosts, developers, and AI platforms" (Who it's for), "Transparent wholesale pricing" (Pricing).
- Set the meta title to: "ResellerClub: Wholesale Domain Registrar for Builders".
- Set the meta description to: "Wholesale domain registrar for web hosts, developers, and AI builder platforms. Sell domains, email, SSL and hosting under your brand, by panel or API."
- Add descriptive alt text to every image and visual placeholder.
- Use semantic HTML: header, nav, main, section, footer, in a logical heading order. Keep the page mobile-responsive.

## 9. Trust band additions: accreditation marks and testimonials

Add to the Trust band (the merged section from item 6), after the logos and stats:
- A small row of trust and accreditation marks. Show an ICANN mark and registry or security marks. CONFIRM the accurate entity before publishing: ResellerClub resells through the ICANN-accredited registrar Public Domain Registry (PDR), so phrase any accreditation as "Backed by an ICANN-accredited registrar" rather than claiming ResellerClub is itself accredited, unless legal confirms otherwise. Only show an ISO 27001 or similar security mark if Newfold or OrderBox actually holds it (CONFIRM).
- A compact row of two or three named testimonials: quote, person name, company. Use placeholder quotes labeled "placeholder testimonial" until real reseller quotes are supplied (CONFIRM and supply real quotes before publishing).

## 10. Vendor and partner brand strip

Add one horizontal logo strip inside the Product ecosystem section, directly under the product cards, with the label "Works with the tools and providers you already use". Show vendor logos for the real ecosystem: Titan, Google Workspace, Plesk, WHMCS, and the SSL certificate authority ResellerClub resells (CONFIRM which, for example Sectigo). Use placeholder logo boxes until the confirmed set is supplied. Do not imply partnerships that do not exist.

## 11. Partnerships contact path

In the closing CTA section, keep the two existing buttons (primary "Become a reseller", secondary "Explore the API") and add one line of text below them with a tertiary link: "Building a platform or running an agency at scale? Talk to partnerships." The link goes to a contact or partnerships page. Also add a "Partnerships" link under the Company column in the footer. This supports the primary success measure, qualified leads and partnerships.

## 12. Hero headline (replaces the current headline)

- Replace the hero H1 "The wholesale domain registrar built for the people who build the web." with: "Launch, sell, and scale domains, fast."
- Keep the eyebrow "Wholesale domain registrar" above the H1. It carries the category words and SEO while the headline stays short and punchy.
- Keep the subhead unchanged: "For web hosts, developers and agencies, and AI and website-builder platforms. Provision and manage domains, email, SSL and hosting for your customers, under your own brand."
- Closing CTA: do not repeat the new hero line verbatim. Replace the closing H2 "The wholesale registrar built for the people who build the web" with a descriptive sentence, for example: "The wholesale way to sell domains, email, SSL and hosting under your own brand." Keep the footer brand blurb descriptive as well.

## 13. Developer content links to the portal; no API docs on the marketing site

The API documentation lives in the existing Developer Portal (built separately in the same Claude Design project). The marketing homepage must not host API documentation.
- The "Built for builders" block in the Platform section stays a teaser plus link: the developer value, a short code teaser, and CTAs. No reference docs, no endpoint tables, no setup guides on the marketing site.
- All developer nav items (API overview, Documentation, MCP and agents, Sandbox) and every "Explore the API" CTA link into the Developer Portal. Deep-link to the relevant portal section where possible.
- Storefront (Supersite) and Control panel are selling surfaces, not API docs; they can keep their own marketing or help pages and do not move to the portal.

## Optional polish

- Ensure all illustrative figures in the hero flow read as examples, not claims.
