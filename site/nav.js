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
      <div class="nav-item' + on('products') + '">' +
'        <a>Products <i data-lucide="chevron-down" class="chev"></i></a>' +
'        <div class="mega wide">' +
'          <span class="mega-label">Products</span>' +
'          <a class="mega-link" href="Domains.html"><span class="mi"><i data-lucide="globe" style="width:18px;height:18px"></i></span><span><span class="mt">Domains</span><span class="md">Wholesale across legacy and new TLDs</span></span></a>' +
'          <a class="mega-link" href="Email.html"><span class="mi"><i data-lucide="mail" style="width:18px;height:18px"></i></span><span><span class="mt">Email</span><span class="md">Titan and Google Workspace</span></span></a>' +
'          <a class="mega-link" href="SSL Certificates.html"><span class="mi"><i data-lucide="shield-check" style="width:18px;height:18px"></i></span><span><span class="mt">SSL certificates</span><span class="md">DV to EV, resold under your brand</span></span></a>' +
'          <a class="mega-link" href="Hosting.html"><span class="mi"><i data-lucide="server" style="width:18px;height:18px"></i></span><span><span class="mt">Hosting</span><span class="md">Oracle Cloud powered, resell suite</span></span></a>' +
'          <a class="mega-link" href="ResellerClub Homepage.html#ecosystem"><span class="mi"><i data-lucide="lock" style="width:18px;height:18px"></i></span><span><span class="mt">Security add-ons</span><span class="md">SiteLock and Xcitium</span></span></a>' +
'        </div>' +
'      </div> +
'      <div class="nav-item' + on('platform') + '"><a href="Platform &amp; API.html">Platform</a></div>' +
'      <div class="nav-item' + on('developers') + '"><a href="Developer Portal.html#home">API &amp; Developer Portal</a></div>' +
'      <div class="nav-item' + on('who') + '"><a href="Who Its For - Web Hosts and Agencies.html">Who it\'s for</a></div>' +
'      <div class="nav-item' + on('pricing') + '"><a href="Pricing.html">Pricing</a></div>' +
      <div class="nav-item' + on('resources') + '">' +
'        <a>Resources <i data-lucide="chevron-down" class="chev"></i></a>' +
'        <div class="mega right">' +
'          <a class="mega-link" href="Developer Portal.html#docs:introduction"><span class="mi"><i data-lucide="book-open" style="width:18px;height:18px"></i></span><span><span class="mt">Docs</span><span class="md">Product and API documentation</span></span></a>' +
'          <a class="mega-link" href="#"><span class="mi"><i data-lucide="life-buoy" style="width:18px;height:18px"></i></span><span><span class="mt">Help center</span><span class="md">Answers and how-tos</span></span></a>' +
'          <a class="mega-link" href="blog.html"><span class="mi"><i data-lucide="newspaper" style="width:18px;height:18px"></i></span><span><span class="mt">Blog</span><span class="md">Product news and guides</span></span></a>' +
'        </div>' +
'      </div> +
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
'        <a href="Developer Portal.html">Documentation</a><a href="#">Help center</a><a href="#">Status</a><a href="blog.html">Blog</a>' +
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
