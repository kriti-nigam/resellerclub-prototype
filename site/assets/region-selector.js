/* ============================================================
   ResellerClub — region / currency selector behavior.
   Works for every .rc-region on the page (topbar AND footer),
   keeping them in sync via a shared localStorage key.
   Load once per page, after the markup. Safe to call twice.
   ============================================================ */
(function () {
  var KEY = 'rc-region';

  function allRegions() {
    return Array.prototype.slice.call(document.querySelectorAll('.rc-region'));
  }

  function applyRegion(cur) {
    allRegions().forEach(function (region) {
      region.querySelectorAll('.rc-region-opt').forEach(function (o) {
        o.setAttribute('aria-checked', o.dataset.cur === cur ? 'true' : 'false');
      });
      var curLabel = region.querySelector('.rc-region-cur');
      if (curLabel) curLabel.textContent = cur;
    });
    try { localStorage.setItem(KEY, cur); } catch (e) {}
  }

  function init() {
    allRegions().forEach(function (region) {
      if (region.dataset.rcInit) return;
      region.dataset.rcInit = '1';

      var btn = region.querySelector('.rc-region-btn');
      if (!btn) return;

      function close() { region.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
      function open() { region.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); }

      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        region.classList.contains('open') ? close() : open();
      });

      region.querySelectorAll('.rc-region-opt').forEach(function (opt) {
        opt.addEventListener('click', function () { applyRegion(opt.dataset.cur); close(); });
      });

      document.addEventListener('click', function (e) { if (!region.contains(e.target)) close(); });
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
    });

    var saved;
    try { saved = localStorage.getItem(KEY); } catch (e) {}
    if (saved && document.querySelector('.rc-region-opt[data-cur="' + saved + '"]')) applyRegion(saved);
  }

  window.rcInitRegion = init;
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
