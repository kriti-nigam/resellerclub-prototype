/* ============================================================
   ResellerClub — shared header + footer injector.

   WHY: the logo and navbar are otherwise hand-copied into every
   page. This script lets a new page get them with ONE line, with
   correct links and the design-system styling already applied.

   HOW TO USE on a new page:
   1. In <head>, link the same two stylesheets every page uses:
        <link rel="stylesheet" href="resellerclub-ds/styles.css" />
        <link rel="stylesheet" href="site/site.css" />
   2. In <body>, where you want them, drop placeholders:
        <div data-rc-header></div>      (logo + navbar)
        ... your page content ...
        <div data-rc-footer></div>      (full footer)
   3. Before </body>, load Lucide icons then this script:
        <script src="https://unpkg.com/lucide@latest"></script>
        <script src="site/nav.js"></script>

   OPTIONAL: highlight the current section in the nav by naming it:
        <div data-rc-header="products"></div>
   accepted values: products | platform | developers | who | pricing | resources

   NOTE: the 8 existing pages keep their inline header/footer (so they
   stay directly editable). Use this injector for NEW pages.
   ============================================================ */
(function () {
  "use strict";

  function headerHTML(active) {
    function on(key) { return active === key ? " active" : ""; }
    return '' +
'<header class="topbar">' +
'  <nav class="wrap nav-inner" aria-label="Primary">' +
'    <a class="logo" href="ResellerClub Homepage.html"><img src="resellerclub-ds/assets/resellerclub-mark.png" alt="ResellerClub home" /><span class="name">ResellerClub</span></a>' +
'    <div class="menu">' +
'      <div class="nav-item' + on('products') + '">' +
'        <a>Products <i data-lucide="chevron-down" class="chev"></i></a>' +
'        <div class="mega wide">' +
'          <span class="mega-label">Products</span>' +
'          <a class="mega-link" href="Domains.html"><span class="mi"><i data-lucide="globe" style="width:18px;height:18px"></i></span><span><span class="mt">Domains</span><span class="md">Wholesale across legacy and new TLDs</span></span></a>' +
'          <a class="mega-link" href="Email.html"><span class="mi"><i data-lucide="mail" style="width:18px;height:18px"></i></span><span><span class="mt">Email</span><span class="md">Titan and Google Workspace</span></span></a>' +
'          <a class="mega-link" href="SSL Certificates.html"><span class="mi"><i data-lucide="shield-check" style="width:18px;height:18px"></i></span><span><span class="mt">SSL certificates</span><span class="md">DV to EV, resold under your brand</span></span></a>' +
'          <a class="mega-link" href="Hosting.html"><span class="mi"><i data-lucide="server" style="width:18px;height:18px"></i></span><span><span class="mt">Hosting</span><span class="md">Oracle Cloud powered, resell suite</span></span></a>' +
'          <a class="mega-link" href="ResellerClub Homepage.html#ecosystem"><span class="mi"><i data-lucide="network" style="width:18px;height:18px"></i></span><span><span class="mt">DNS and Premium DNS</span><span class="md">Managed and high-performance DNS</span></span></a>' +
'          <a class="mega-link" href="ResellerClub Homepage.html#ecosystem"><span class="mi"><i data-lucide="lock" style="width:18px;height:18px"></i></span><span><span class="mt">Security add-ons</span><span class="md">SiteLock and Xcitium</span></span></a>' +
'          <a class="mega-link" href="ResellerClub Homepage.html#ecosystem"><span class="mi"><i data-lucide="layout-template" style="width:18px;height:18px"></i></span><span><span class="mt">Website builder</span><span class="md">Sell sites alongside domains</span></span></a>' +
'        </div>' +
'      </div>' +
'      <div class="nav-item' + on('platform') + '">' +
'        <a>Platform <i data-lucide="chevron-down" class="chev"></i></a>' +
'        <div class="mega wide">' +
'          <a class="mega-link" href="Platform &amp; API.html"><span class="mi"><i data-lucide="layers" style="width:18px;height:18px"></i></span><span><span class="mt">Platform overview</span><span class="md">How you build and sell</span></span></a>' +
'          <span class="mega-label">Ways to sell</span>' +
'          <a class="mega-link" href="Platform &amp; API.html#ways"><span class="mi"><i data-lucide="store" style="width:18px;height:18px"></i></span><span><span class="mt">Storefront (Supersite)</span><span class="md">White-label store on the control panel</span></span></a>' +
'          <a class="mega-link" href="Platform &amp; API.html#ways"><span class="mi"><i data-lucide="terminal" style="width:18px;height:18px"></i></span><span><span class="mt">API</span><span class="md">Provision and sell through the API</span></span></a>' +
'          <a class="mega-link" href="Platform &amp; API.html#integrations"><span class="mi"><i data-lucide="plug" style="width:18px;height:18px"></i></span><span><span class="mt">Integrations</span><span class="md">WHMCS and Plesk</span></span></a>' +
'        </div>' +
'      </div>' +
'      <div class="nav-item' + on('developers') + '">' +
'        <a>API &amp; Developer Portal <i data-lucide="chevron-down" class="chev"></i></a>' +
'        <div class="mega wide">' +
'          <span class="mega-label">API &amp; Developer Portal</span>' +
'          <a class="mega-link" href="Developer Portal.html#home"><span class="mi"><i data-lucide="layout-dashboard" style="width:18px;height:18px"></i></span><span><span class="mt">Developer Portal home</span><span class="md">The front door for builders</span></span></a>' +
'          <a class="mega-link" href="Developer Portal.html#docs:introduction"><span class="mi"><i data-lucide="terminal" style="width:18px;height:18px"></i></span><span><span class="mt">API overview</span><span class="md">One REST API for the catalog</span></span></a>' +
'          <a class="mega-link" href="Developer Portal.html#docs:quickstart"><span class="mi"><i data-lucide="book-open" style="width:18px;height:18px"></i></span><span><span class="mt">Documentation</span><span class="md">Guides, reference and SDKs</span></span></a>' +
'          <a class="mega-link" href="Developer Portal.html#docs:check-availability"><span class="mi"><i data-lucide="flask-conical" style="width:18px;height:18px"></i></span><span><span class="mt">Sandbox</span><span class="md">Test against live-shaped data</span></span></a>' +
'        </div>' +
'      </div>' +
'      <div class="nav-item' + on('who') + '">' +
'        <a>Who it\'s for <i data-lucide="chevron-down" class="chev"></i></a>' +
'        <div class="mega">' +
'          <a class="mega-link" href="Who Its For - Web Hosts and Agencies.html"><span class="mi"><i data-lucide="server-cog" style="width:18px;height:18px"></i></span><span><span class="mt">Web hosts</span><span class="md">Bundle domains, email and SSL</span></span></a>' +
'          <a class="mega-link" href="Who Its For - Web Hosts and Agencies.html"><span class="mi"><i data-lucide="code-2" style="width:18px;height:18px"></i></span><span><span class="mt">Developers and agencies</span><span class="md">Provision client domains fast</span></span></a>' +
'          <a class="mega-link" href="ResellerClub Homepage.html#who"><span class="mi"><i data-lucide="bot" style="width:18px;height:18px"></i></span><span><span class="mt">AI and website-builder platforms</span><span class="md">Embed registration in your flow</span></span></a>' +
'        </div>' +
'      </div>' +
'      <div class="nav-item' + on('pricing') + '"><a href="Pricing.html">Pricing</a></div>' +
'      <div class="nav-item' + on('resources') + '">' +
'        <a>Resources <i data-lucide="chevron-down" class="chev"></i></a>' +
'        <div class="mega right">' +
'          <a class="mega-link" href="Developer Portal.html#docs:introduction"><span class="mi"><i data-lucide="book-open" style="width:18px;height:18px"></i></span><span><span class="mt">Docs</span><span class="md">Product and API documentation</span></span></a>' +
'          <a class="mega-link" href="#"><span class="mi"><i data-lucide="life-buoy" style="width:18px;height:18px"></i></span><span><span class="mt">Help center</span><span class="md">Answers and how-tos</span></span></a>' +
'          <a class="mega-link" href="#"><span class="mi"><i data-lucide="newspaper" style="width:18px;height:18px"></i></span><span><span class="mt">Blog</span><span class="md">Product news and guides</span></span></a>' +
'          <a class="mega-link" href="#"><span class="mi"><i data-lucide="award" style="width:18px;height:18px"></i></span><span><span class="mt">Case studies</span><span class="md">How partners grow with us</span></span></a>' +
'          <a class="mega-link" href="#"><span class="mi"><i data-lucide="activity" style="width:18px;height:18px"></i></span><span><span class="mt">Status</span><span class="md">Platform uptime and incidents</span></span></a>' +
'        </div>' +
'      </div>' +
'    </div>' +
'    <div class="nav-right">' +
'      <a class="btn btn-ghost sm" href="Sign In.html">Sign in</a>' +
'      <a class="btn btn-primary sm" href="Become a Reseller.html">Become a reseller</a>' +
'    </div>' +
'    <button class="hamburger" aria-label="Menu"><i data-lucide="menu" style="width:24px;height:24px"></i></button>' +
'  </nav>' +
'</header>';
  }

  function footerHTML() {
    return '' +
'<footer class="site-foot">' +
'  <div class="wrap">' +
'    <div class="foot-grid">' +
'      <div>' +
'        <span class="logo"><img src="resellerclub-ds/assets/resellerclub-mark.png" alt="ResellerClub" style="width:32px;height:32px" /><span class="name">ResellerClub</span></span>' +
'        <p class="blurb">The wholesale domain registrar built for the people who build the web.</p>' +
'      </div>' +
'      <div class="foot-col">' +
'        <h5>Products</h5>' +
'        <a href="Domains.html">Domains</a><a href="Email.html">Email</a><a href="SSL Certificates.html">SSL certificates</a><a href="Hosting.html">Hosting</a><a href="ResellerClub Homepage.html#ecosystem">DNS and Premium DNS</a><a href="ResellerClub Homepage.html#ecosystem">Security add-ons</a><a href="ResellerClub Homepage.html#ecosystem">Website builder</a>' +
'      </div>' +
'      <div class="foot-col">' +
'        <h5>Platform</h5>' +
'        <a href="Platform &amp; API.html">Platform overview</a><a href="Platform &amp; API.html#ways">Ways to sell</a><a href="Platform &amp; API.html#integrations">Integrations (WHMCS, Plesk)</a><a href="Developer Portal.html#home">API &amp; Developer Portal</a><a href="Developer Portal.html#docs:check-availability">Sandbox</a>' +
'      </div>' +
'      <div class="foot-col">' +
'        <h5>Who it\'s for</h5>' +
'        <a href="Who Its For - Web Hosts and Agencies.html">Web hosts</a><a href="Who Its For - Web Hosts and Agencies.html">Developers and agencies</a><a href="#">AI and website-builder platforms</a>' +
'      </div>' +
'      <div class="foot-col">' +
'        <h5>Pricing</h5>' +
'        <a href="Pricing.html">Wholesale pricing</a><a href="Pricing.html#tiers">Volume tiers</a><a href="Pricing.html#table">TLD price list</a>' +
'      </div>' +
'      <div class="foot-col">' +
'        <h5>Resources</h5>' +
'        <a href="Developer Portal.html">Documentation</a><a href="#">Help center</a><a href="#">Status</a><a href="#">Blog</a>' +
'        <h5 style="margin-top:24px">Company</h5>' +
'        <a href="#">About</a><a href="#">Contact</a><a href="Become a Reseller.html">Become a reseller</a><a href="Sign In.html">Sign in</a>' +
'      </div>' +
'    </div>' +
'    <div class="foot-bottom">' +
'      <span>&copy; 2026 ResellerClub. A Newfold Digital company.</span>' +
'      <span class="foot-legal">' +
'        <span class="foot-region"><i data-lucide="globe" style="width:14px;height:14px"></i> Pricing shown in USD</span>' +
'        <a href="#">Privacy</a><a href="#">Terms</a><a href="#">Legal</a><a href="Sign In.html">Sign in</a>' +
'      </span>' +
'    </div>' +
'  </div>' +
'</footer>';
  }

  function inject() {
    var h = document.querySelector('[data-rc-header]');
    if (h) h.outerHTML = headerHTML(h.getAttribute('data-rc-header') || '');
    var f = document.querySelector('[data-rc-footer]');
    if (f) f.outerHTML = footerHTML();
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
