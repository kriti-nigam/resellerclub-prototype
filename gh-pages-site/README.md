# ResellerClub Website Refresh

Static marketing site + developer portal prototype for ResellerClub, the wholesale domain registrar.

## Pages

| File | Page |
|---|---|
| `index.html` / `ResellerClub Homepage.html` | Homepage |
| `Domains.html` | Domains |
| `Email.html` | Email |
| `SSL Certificates.html` | SSL certificates |
| `Hosting.html` | Hosting |
| `Platform & API.html` | Platform overview |
| `Pricing.html` | Pricing |
| `Who Its For - Web Hosts and Agencies.html` | Audience landing |
| `Developer Portal.html` | Interactive developer portal |
| `Become a Reseller.html` / `Sign In.html` / `Auth.html` / `Start a Demo.html` | Auth & onboarding flows |

## Shared assets

- `resellerclub-ds/` — design system (tokens, styles, logo mark)
- `site/` — site-wide CSS + nav script
- `portal/` — React/Babel components for the developer portal

## Deploying to GitHub Pages

1. Create a new repository and push the contents of this folder to the default branch.
2. In **Settings → Pages**, set the source to that branch, root (`/`).
3. The site is served from `index.html`. `.nojekyll` is included so filenames with spaces and leading underscores are served as-is.

Everything is static — no build step required.
