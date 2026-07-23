/* ============================================================
   responsive.js — wires up the (previously dead) hamburger.
   Builds a mobile menu panel from the existing .menu markup,
   so it stays in sync with whatever nav a page carries.
   Retries for a few seconds to catch navs injected by nav.js
   or unpacked by the bundler.
   ============================================================ */
(function () {
  'use strict';

  function buildMenu(nav) {
    var menu = nav.querySelector('.menu');
    if (!menu) return null;

    var panel = document.createElement('nav');
    panel.className = 'rc-mobile-menu';
    panel.setAttribute('aria-label', 'Mobile');

    var items = menu.querySelectorAll(':scope > .nav-item');
    items.forEach(function (item) {
      var group = document.createElement('div');
      group.className = 'rc-mm-group';
      var top = item.querySelector(':scope > a');
      var mega = item.querySelector(':scope > .mega');

      if (mega) {
        var label = document.createElement('span');
        label.className = 'rc-mm-label';
        label.textContent = (top ? top.textContent : '').trim();
        group.appendChild(label);
        var sub = document.createElement('div');
        sub.className = 'rc-mm-sub';
        mega.querySelectorAll('a.mega-link').forEach(function (a) {
          var link = document.createElement('a');
          link.className = 'rc-mm-link';
          link.href = a.getAttribute('href') || '#';
          if (a.target) link.target = a.target;
          var t = a.querySelector('.mt');
          link.textContent = (t ? t.textContent : a.textContent).trim();
          sub.appendChild(link);
        });
        group.appendChild(sub);
      } else if (top) {
        var link = document.createElement('a');
        link.className = 'rc-mm-link';
        link.href = top.getAttribute('href') || '#';
        link.textContent = top.textContent.trim();
        group.appendChild(link);
      }
      panel.appendChild(group);
    });

    // CTA buttons (sign in / become a reseller)
    var right = menu.querySelector('.nav-right');
    if (right) {
      var cta = document.createElement('div');
      cta.className = 'rc-mm-cta';
      right.querySelectorAll('a').forEach(function (a) {
        var b = document.createElement('a');
        b.href = a.getAttribute('href') || '#';
        b.textContent = a.textContent.trim();
        b.className = /primary/.test(a.className) ? 'primary' : 'ghost';
        cta.appendChild(b);
      });
      panel.appendChild(cta);
    }
    return panel;
  }

  function wire() {
    var burger = document.querySelector('.hamburger');
    if (!burger || burger.dataset.rcWired) return false;
    var nav = burger.closest('nav') || document;
    var panel = buildMenu(nav);
    if (!panel) return false;

    burger.dataset.rcWired = '1';
    var x = document.createElement('span');
    x.className = 'rc-x';
    x.textContent = '×';
    burger.appendChild(x);
    document.body.appendChild(panel);

    function close() {
      panel.classList.remove('open');
      burger.classList.remove('open');
      document.body.classList.remove('rc-menu-open');
      burger.setAttribute('aria-expanded', 'false');
    }
    burger.addEventListener('click', function () {
      var opening = !panel.classList.contains('open');
      if (opening) {
        panel.classList.add('open');
        burger.classList.add('open');
        document.body.classList.add('rc-menu-open');
        burger.setAttribute('aria-expanded', 'true');
      } else close();
    });
    panel.addEventListener('click', function (e) { if (e.target.closest('a')) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
    window.addEventListener('resize', function () { if (window.innerWidth > 1280) close(); });
    return true;
  }

  function wireRetailBand() {
    var band = document.querySelector('.retail-band');
    if (!band || band.dataset.rcRetailWired) return false;
    band.dataset.rcRetailWired = '1';
    var KEY = 'rc-retail-band-dismissed';
    try {
      if (localStorage.getItem(KEY) === '1') {
        band.classList.add('is-dismissed');
        return true;
      }
    } catch (e) {}
    var btn = band.querySelector('.retail-dismiss');
    if (!btn) return true;
    btn.addEventListener('click', function () {
      band.classList.add('is-dismissed');
      try { localStorage.setItem(KEY, '1'); } catch (e) {}
    });
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
    return true;
  }

  // retry: nav may be injected (nav.js) or unpacked (bundler) after us
  var tries = 0;
  var t = setInterval(function () {
    var wired = wire();
    wireRetailBand();
    if (wired || ++tries > 30) clearInterval(t);
  }, 200);
  if (document.readyState !== 'loading') {
    wire();
    wireRetailBand();
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      wire();
      wireRetailBand();
    });
  }
})();
