(function () {
  var region = document.getElementById('rcRegionFoot') || document.getElementById('rcRegion');
  if (!region) return;
  var btn = region.querySelector('.rc-region-btn');
  var curLabel = region.querySelector('.rc-region-cur');
  var KEY = 'rc-region';
  function close() { region.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
  function open() { region.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); }
  btn.addEventListener('click', function (e) { e.stopPropagation(); region.classList.contains('open') ? close() : open(); });
  region.querySelectorAll('.rc-region-opt').forEach(function (opt) {
    opt.addEventListener('click', function () {
      region.querySelectorAll('.rc-region-opt').forEach(function (o) {
        o.setAttribute('aria-checked', o.dataset.cur === opt.dataset.cur ? 'true' : 'false');
      });
      if (curLabel) curLabel.textContent = opt.dataset.cur;
      try { localStorage.setItem(KEY, opt.dataset.cur); } catch (e) {}
      close();
    });
  });
  document.addEventListener('click', function (e) { if (!region.contains(e.target)) close(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  try {
    var saved = localStorage.getItem(KEY);
    if (saved && curLabel) {
      curLabel.textContent = saved;
      region.querySelectorAll('.rc-region-opt').forEach(function (o) {
        o.setAttribute('aria-checked', o.dataset.cur === saved ? 'true' : 'false');
      });
    }
  } catch (e) {}
})();
