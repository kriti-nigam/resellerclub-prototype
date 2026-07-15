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
'          <a class="mega-link" href="Email.html"><span class="mi"><i data-lucide="mail" style="width:18px;height:18px"></i></span><span><span class="mt">Email &amp; Productivity</span><span class="md">Titan and Google Workspace</span></span></a>' +
'          <a class="mega-link" href="SSL Certificates.html"><span class="mi"><i data-lucide="shield-check" style="width:18px;height:18px"></i></span><span><span class="mt">SSL certificates</span><span class="md">DV to EV, resold under your brand</span></span></a>' +
'          <a class="mega-link" href="Hosting.html"><span class="mi"><i data-lucide="server" style="width:18px;height:18px"></i></span><span><span class="mt">Hosting</span><span class="md">Oracle Cloud powered, resell suite</span></span></a>' +
'          <a class="mega-link" href="Security Add-ons.html"><span class="mi"><i data-lucide="lock" style="width:18px;height:18px"></i></span><span><span class="mt">Security add-ons</span><span class="md">SiteLock and Xcitium</span></span></a>' +
'        </div>' +
'      </div>' +
'      <div class="nav-item' + on('platform') + '"><a href="Platform &amp; API.html">Platform</a></div>' +
'      <div class="nav-item' + on('developers') + '"><a href="Developer Portal.html#home">API &amp; Developer Portal</a></div>' +
'      <div class="nav-item' + on('who') + '"><a href="Who Its For - Web Hosts and Agencies.html">Who it\'s for</a></div>' +
'      <div class="nav-item' + on('pricing') + '"><a href="Pricing.html">Pricing</a></div>' +
'      <div class="nav-item' + on('resources') + '">' +
'        <a>Resources <i data-lucide="chevron-down" class="chev"></i></a>' +
'        <div class="mega right">' +
'          <a class="mega-link" href="Developer Portal.html#docs:introduction"><span class="mi"><i data-lucide="book-open" style="width:18px;height:18px"></i></span><span><span class="mt">Docs</span><span class="md">Product and API documentation</span></span></a>' +
'          <a class="mega-link" href="#"><span class="mi"><i data-lucide="life-buoy" style="width:18px;height:18px"></i></span><span><span class="mt">Help center</span><span class="md">Answers and how-tos</span></span></a>' +
'          <a class="mega-link" href="blog.html"><span class="mi"><i data-lucide="newspaper" style="width:18px;height:18px"></i></span><span><span class="mt">Blog</span><span class="md">Product news and guides</span></span></a>' +
'        </div>' +
'      </div>' +
'    </div>' +
'    <div class="nav-right">' +
'      <a class="btn btn-ghost" href="Sign In.html">Sign in</a>' +
'      <a class="btn btn-primary" href="Become a Reseller.html">Become a reseller</a>' +
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
'      <div class="foot-brand">' +
'        <span class="logo"><img src="resellerclub-ds/assets/resellerclub-mark.png" alt="ResellerClub" style="width:32px;height:32px" /><span class="name">ResellerClub</span></span>' +
'        <p class="blurb">The wholesale domain registrar built for the people who build the web.</p>' +
'      </div>' +
'      <div class="foot-col">' +
'        <h5>Products</h5>' +
'        <a href="Domains.html">Domains</a><a href="Hosting.html">Hosting</a><a href="Email.html">Email &amp; Productivity</a><a href="SSL Certificates.html">SSL certificates</a>' +
'      </div>' +
'      <div class="foot-col">' +
'        <h5>Solutions</h5>' +
'        <a href="Platform &amp; API.html">Platform</a><a href="Developer Portal.html">API &amp; Dev Portal</a><a href="Who Its For - Web Hosts and Agencies.html">Who it\'s for</a>' +
'      </div>' +
'      <div class="foot-col">' +
'        <h5>Pricing</h5>' +
'        <a href="Pricing.html#gtld">Domains</a><a href="Pricing.html#sdh-linux">Hosting</a><a href="Pricing.html#gworkspace">Email &amp; Productivity</a><a href="Pricing.html#ssl">SSL certificates</a>' +
'      </div>' +
'      <div class="foot-col">' +
'        <h5>Resources</h5>' +
'        <a href="#">Help centre</a><a href="Blog.html">Blog</a><a href="Developer Portal.html">Documentation</a>' +
'      </div>' +
'      <div class="foot-col">' +
'        <h5>Company</h5>' +
'        <a href="About Us.html">About Us</a><a href="#">Contact</a><a href="Become a Reseller.html">Become a reseller</a>' +
'      </div>' +
'    </div>' +
'    <div class="foot-bottom">' +
'      <span>&copy; 2026 ResellerClub. A Newfold Digital company.</span>' +
'      <span class="foot-legal">' +
'        <div class="rc-region rc-region-foot" id="rcRegionFoot">' +
'          <button class="rc-region-btn" type="button" aria-haspopup="true" aria-expanded="false" aria-label="Select region and currency">' +
'            <i data-lucide="globe" class="rc-region-glb" style="width:17px;height:17px"></i>' +
'            <span class="rc-region-cur">USD</span>' +
'            <i data-lucide="chevron-down" class="rc-region-chev" style="width:15px;height:15px"></i>' +
'          </button>' +
'          <div class="rc-region-menu" role="menu">' +
'            <div class="rc-region-hd">Region &amp; currency</div>' +
'            <button class="rc-region-opt" type="button" role="menuitemradio" aria-checked="true" data-region="Global" data-cur="USD"><span class="rc-flag">🌐</span><span class="rc-rlabel"><span class="rc-rname">Global</span><span class="rc-rcur">USD &middot; English</span></span><i data-lucide="check" class="rc-rcheck" style="width:17px;height:17px"></i></button>' +
'            <button class="rc-region-opt" type="button" role="menuitemradio" aria-checked="false" data-region="India" data-cur="INR"><span class="rc-flag">🇮🇳</span><span class="rc-rlabel"><span class="rc-rname">India</span><span class="rc-rcur">INR &middot; English</span></span><i data-lucide="check" class="rc-rcheck" style="width:17px;height:17px"></i></button>' +
'            <button class="rc-region-opt" type="button" role="menuitemradio" aria-checked="false" data-region="China" data-cur="CNY"><span class="rc-flag">🇨🇳</span><span class="rc-rlabel"><span class="rc-rname">China</span><span class="rc-rcur">CNY &middot; 中文</span></span><i data-lucide="check" class="rc-rcheck" style="width:17px;height:17px"></i></button>' +
'            <button class="rc-region-opt" type="button" role="menuitemradio" aria-checked="false" data-region="Brazil" data-cur="BRL"><span class="rc-flag">🇧🇷</span><span class="rc-rlabel"><span class="rc-rname">Brazil</span><span class="rc-rcur">BRL &middot; Português</span></span><i data-lucide="check" class="rc-rcheck" style="width:17px;height:17px"></i></button>' +
'          </div>' +
'        </div>' +
'        <a href="#">Privacy</a><a href="#">Terms</a><a href="#">Legal</a><a href="Sign In.html">Sign in</a>' +
'      </span>' +
'    </div>' +
'  </div>' +
'</footer>';
  }


  function initRegionPicker() {
    var region = document.getElementById('rcRegionFoot') || document.getElementById('rcRegion');
    if (!region) return;
    var btn = region.querySelector('.rc-region-btn');
    var curLabel = region.querySelector('.rc-region-cur');
    var KEY = 'rc-region';

    function close() { region.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
    function open() { region.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); }

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      region.classList.contains('open') ? close() : open();
    });

    region.querySelectorAll('.rc-region-opt').forEach(function (opt) {
      opt.addEventListener('click', function () { setRegion(opt.dataset.cur); close(); });
    });

    function setRegion(cur) {
      region.querySelectorAll('.rc-region-opt').forEach(function (o) {
        o.setAttribute('aria-checked', o.dataset.cur === cur ? 'true' : 'false');
      });
      if (curLabel) curLabel.textContent = cur;
      try { localStorage.setItem(KEY, cur); } catch (e) {}
    }

    document.addEventListener('click', function (e) { if (!region.contains(e.target)) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });

    try {
      var saved = localStorage.getItem(KEY);
      if (saved) setRegion(saved);
    } catch (e) {}
  }

  function inject() {
    var h = document.querySelector('[data-rc-header]');
    if (h) h.outerHTML = headerHTML(h.getAttribute('data-rc-header') || '');
    var f = document.querySelector('[data-rc-footer]');
    if (f) f.outerHTML = footerHTML();
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
    initRegionPicker();
  }

  window.RC_footerHTML = footerHTML;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
