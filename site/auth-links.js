/* ============================================================
   ResellerClub — auth CTA routing by region (prototype).
   Stand-in for india.resellerclub.com: when the footer region
   selector is set to INR, every "Become a reseller" CTA points at
   the India signup variant. Sign In is shared by both regions.
   Load once per page, after the region selector markup.
   ============================================================ */
(function () {
  var KEY = 'rc-region';
  var GLOBAL = 'Become a Reseller.html';
  var INDIA = 'Become a Reseller - India.html';

  function target(cur) { return cur === 'INR' ? INDIA : GLOBAL; }

  function apply(cur) {
    var to = target(cur);
    var links = document.querySelectorAll('a[href$="' + GLOBAL + '"], a[href$="' + INDIA + '"]');
    Array.prototype.forEach.call(links, function (a) {
      var href = a.getAttribute('href');
      var base = href.replace(/Become a Reseller( - India)?\.html$/, '');
      a.setAttribute('href', base + to);
    });
  }

  function current() {
    try { return localStorage.getItem(KEY) || 'USD'; } catch (e) { return 'USD'; }
  }

  function init() {
    apply(current());
    // re-apply when a region option is chosen (selector scripts write localStorage synchronously)
    document.addEventListener('click', function (e) {
      var opt = e.target && e.target.closest ? e.target.closest('.rc-region-opt') : null;
      if (opt && opt.dataset && opt.dataset.cur) apply(opt.dataset.cur);
    });
    // CTAs injected later by nav.js
    if (window.MutationObserver) {
      new MutationObserver(function () { apply(current()); }).observe(document.body, { childList: true, subtree: true });
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
