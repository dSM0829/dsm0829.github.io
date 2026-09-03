/* VISM STUDIO — 공통 스크립트
   1) data-i18n 속성의 문구를 채웁니다. 사이트는 영어 전용이라 토글이 없습니다.
   2) 앱 카드·지원 목록·법적 문서 표를 assets/apps.js 데이터로 렌더링합니다.
   페이지는 data-render="..." 컨테이너만 두면 됩니다. */
(function () {
  'use strict';
  var APPS = window.VISM_APPS || [];
  var SITE = {
    email: 'tmdals999@gmail.com',
    github: 'https://github.com/dSM0829',
    base: 'https://dsm0829.github.io'
  };

  var I18N = {
    en: {
      'title.home': 'VISM STUDIO',
      'title.support': 'Support — VISM STUDIO',
      'title.privacy': 'Privacy & Terms — VISM STUDIO',
      'title.404': 'Page not found — VISM STUDIO',
      'a11y.skip': 'Skip to content',
      'a11y.nav': 'Main menu',
      'a11y.lang': 'Language',
      'nav.apps': 'Apps', 'nav.support': 'Support', 'nav.privacy': 'Privacy',
      'hero.eyebrow': 'iOS · Android app studio',
      'hero.h1a': 'Small utility apps', 'hero.h1b': 'with no clutter',
      'hero.rotate': 'made honestly|made light|made fast|made to last',
      'hero.a11y': 'Small utility apps, with no clutter, made honestly',
      'hero.lede': 'Each app is built to do one job properly — no clutter, no upsell, finished to the same standard on iOS and Android.',
      'hero.cta': 'See the apps', 'hero.cta2': 'Get in touch',
      'apps.h': 'Apps', 'apps.sub': 'What you can install today, and what is in review or on the way.',
      'apps.live': 'Available now', 'apps.soon': 'In review · coming soon',
      'support.h': 'Need help?',
      'support.p': 'One inbox for every app. Include the app name and your device and OS version, and we can answer faster.',
      'support.cta': 'Support page', 'support.email': 'Email us',
      'legal.h': 'Privacy & terms', 'legal.p': 'Each app has its own documents, collected in one place.', 'legal.cta': 'See all',
      'footer.tag': 'Making apps for iOS and Android.',
      'footer.note': 'This site uses no cookies and no analytics.',
      'footer.col.site': 'Site', 'footer.col.store': 'Stores',
      'footer.play': 'Google Play developer page', 'footer.appstore': 'App Store developer page',
      'footer.github': 'GitHub', 'footer.top': 'Back to top',
      'link.website': 'Website', 'link.instagram': 'Instagram', 'link.privacy': 'Privacy policy', 'link.terms': 'Terms', 'link.support': 'Support', 'link.contact': 'Contact',
      'status.live': 'Available', 'status.review': 'In review', 'status.soon': 'Coming soon',
      'sp.eyebrow': 'Support', 'sp.h': 'Need help?',
      'sp.lede': 'Support for every app is by email. The developer reads every message and usually replies within a few days.',
      'sp.tip': 'For a faster answer, include the <b>app name, device and OS version, app version, and the steps that trigger the problem</b>. A screenshot helps.',
      'sp.perapp': 'Support by app', 'sp.perapp.sub': 'Where an app has its own support page or privacy policy, it is listed here. For any app, email {email} — include the app name, device and OS version, and the steps that trigger the problem for a faster answer.', 'sp.faq': 'Common questions',
      'faq1.q': 'I bought Pro (ad removal) but it is locked again',
      'faq1.a': 'Open the app’s settings and tap <b>Restore purchases</b>. Make sure you are signed in with the same Apple Account (or Google account) you used to buy. If that fails, email {email} with your receipt.',
      'faq2.q': 'How do I get a refund?',
      'faq2.a': 'Payments are processed by Apple and Google, so refunds go through the store. For the App Store use <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener">reportaproblem.apple.com</a>; for Google Play use the <a href="https://support.google.com/googleplay/answer/2479637" target="_blank" rel="noopener">Play refund request</a>. If the store declines, email us and we will look into it.',
      'faq3.q': 'How do I turn off ad personalization?',
      'faq3.a': 'iPhone: Settings → Privacy & Security → Tracking lets you turn off tracking per app. Android: Settings → Google → Ads lets you reset or delete your advertising ID. Apps with ads also let you reopen the consent form from their in-app settings. Every feature works the same either way.',
      'faq4.q': 'How do I delete my data?',
      'faq4.a': 'Most of our apps keep data only on your device, so deleting the app deletes the data. For apps that use an account or a server (FX AI, ClipStash), email {email} with the app name and your account details to request deletion.',
      'faq5.q': 'Where do I report a bug or suggest a feature?',
      'faq5.a': 'Email {email}. Put the app name in the subject line so it is easy to find. Pointing out awkward translations also helps a lot.',
      'pp.eyebrow': 'Legal', 'pp.h': 'Privacy policies & terms',
      'pp.lede': 'Each app keeps its own documents. Find the app below. An empty cell means that app has no such document.',
      'pp.col.app': 'App', 'pp.col.privacy': 'Privacy policy', 'pp.col.terms': 'Terms', 'pp.col.support': 'Support', 'pp.col.contact': 'Contact',
      'pp.view': 'View',
      'pp.site.h': 'About this website',
      'pp.site.p1': 'dsm0829.github.io is a static site hosted on GitHub Pages. It sets no cookies and runs no analytics.',
      'shots.alt': 'screenshot',
      'pp.site.p2': 'Server logs are governed by GitHub’s <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener">privacy statement</a> as the hosting provider. Fonts load from Google Fonts, which means your browser contacts Google’s servers.',
      'pp.site.p3': 'Privacy questions about this site or any app:',
      'nf.eyebrow': '404', 'nf.h': 'Page not found', 'nf.p': 'The address may have changed or never existed. The app list is on the home page.', 'nf.home': 'Go home', 'nf.support': 'Support page'
    }
  };

  /* ---------- language ---------- */
  // 이 사이트는 영어 전용이다. 언어 토글과 기기 언어 감지를 두지 않는다.
  var lang = 'en';
  function t(key) {
    var v;
    if (Object.prototype.hasOwnProperty.call(I18N.en, key)) v = I18N.en[key];
    else return key;
    return v.replace(/\{email\}/g, SITE.email);
  }
  function L(v) { // apps.js 는 {ko,en} 형태를 유지한다 — 영어만 꺼내 쓴다
    if (v == null) return '';
    if (typeof v === 'string') return v;
    return v.en || v.ko || '';
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  /* ---------- static text ---------- */
  function applyStatic() {
    document.documentElement.lang = lang;
    var els, i;
    els = document.querySelectorAll('[data-i18n]');
    for (i = 0; i < els.length; i++) els[i].textContent = t(els[i].getAttribute('data-i18n'));
    els = document.querySelectorAll('[data-i18n-html]');
    for (i = 0; i < els.length; i++) els[i].innerHTML = t(els[i].getAttribute('data-i18n-html'));
    els = document.querySelectorAll('[data-i18n-attr]');
    for (i = 0; i < els.length; i++) {
      var pairs = els[i].getAttribute('data-i18n-attr').split(',');
      for (var j = 0; j < pairs.length; j++) {
        var p = pairs[j].split(':');
        if (p.length === 2) els[i].setAttribute(p[0].trim(), t(p[1].trim()));
      }
    }
    els = document.querySelectorAll('[data-email]');
    for (i = 0; i < els.length; i++) {
      els[i].setAttribute('href', 'mailto:' + SITE.email);
      if (els[i].hasAttribute('data-email-text')) els[i].textContent = SITE.email;
    }
    els = document.querySelectorAll('[data-year]');
    for (i = 0; i < els.length; i++) els[i].textContent = String(new Date().getFullYear());
  }

  /* ---------- app helpers ---------- */
  function isLive(app) {
    var p = app.platforms || {};
    return Object.keys(p).some(function (k) { return p[k] && p[k].status === 'live'; });
  }
  function arrow() {
    return '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 12 12 4M6 4h6v6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }
  function platformIcon(kind) {
    if (kind === 'ios') {
      return '<svg class="pf" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">'
        + '<path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/></svg>';
    }
    /* viewBox trimmed to the robot so it reads the same weight as the apple mark */
    return '<svg class="pf" viewBox="3.5 3.8 17 11.2" fill="currentColor" fill-rule="evenodd" aria-hidden="true">'
      + '<path d="M7.2 7.4 5.9 5.1a.5.5 0 0 1 .87-.5l1.32 2.3a9 9 0 0 1 7.82 0l1.32-2.3a.5.5 0 0 1 .87.5l-1.3 2.3A7.6 7.6 0 0 1 20 14.2H4a7.6 7.6 0 0 1 3.2-6.8Zm1.3 3.4a.95.95 0 1 0 0 1.9.95.95 0 0 0 0-1.9Zm7 0a.95.95 0 1 0 0 1.9.95.95 0 0 0 0-1.9Z"/></svg>';
  }
  function storeBtn(kind, p) {
    if (!p) return '';
    var label = kind === 'ios' ? 'App Store' : 'Google Play';
    if (p.status === 'live' && p.url) {
      return '<a class="store" href="' + esc(p.url) + '" target="_blank" rel="noopener">' + platformIcon(kind) + '<span>' + label + '</span>' + arrow() + '</a>';
    }
    var st = p.status === 'review' ? 'review' : 'soon';
    return '<span class="store is-pending">' + platformIcon(kind) + '<span>' + label + '</span><span class="st st-' + st + '">' + esc(t('status.' + st)) + '</span></span>';
  }
  function linkRow(app) {
    var out = [], l = app.links || {};
    if (l.website) out.push('<a href="' + esc(L(l.website)) + '" target="_blank" rel="noopener">' + esc(t('link.website')) + '</a>');
    if (l.instagram) out.push('<a href="' + esc(L(l.instagram)) + '" target="_blank" rel="noopener">' + esc(t('link.instagram')) + '</a>');
    if (l.privacy) out.push('<a href="' + esc(L(l.privacy)) + '" target="_blank" rel="noopener">' + esc(t('link.privacy')) + '</a>');
    if (l.terms)   out.push('<a href="' + esc(L(l.terms)) + '" target="_blank" rel="noopener">' + esc(t('link.terms')) + '</a>');
    if (l.support) out.push('<a href="' + esc(L(l.support)) + '" target="_blank" rel="noopener">' + esc(t('link.support')) + '</a>');
    return out.join('');
  }
  function shotRow(app) {
    var sh = app.shots || [];
    if (!sh.length) return '';
    var name = esc(L(app.name));
    return '<div class="shots" role="list">' + sh.map(function (src, i) {
      return '<img class="shot" role="listitem" src="' + esc(src) + '" alt="' + name +
        ' \u2014 ' + esc(t('shots.alt')) + ' ' + (i + 1) + '" loading="lazy" decoding="async">';
    }).join('') + '</div>';
  }
  function card(app) {
    var p = app.platforms || {};
    return '<article class="app" id="app-' + esc(app.id) + '">' +
      '<img class="app-icon" src="' + esc(app.icon) + '" alt="" width="72" height="72" loading="lazy" decoding="async">' +
      '<div class="app-body">' +
        '<div class="app-head"><h3 class="app-name">' + esc(L(app.name)) + '</h3><span class="app-cat">' + esc(L(app.category)) + '</span></div>' +
        '<p class="app-tag">' + esc(L(app.tagline)) + '</p>' +
        '<div class="stores">' + storeBtn('ios', p.ios) + storeBtn('android', p.android) + '</div>' +
        shotRow(app) +
        '<div class="app-links">' + linkRow(app) + '</div>' +
      '</div></article>';
  }

  /* ---------- renderers ---------- */
  function renderApps() {
    var live = APPS.filter(isLive), soon = APPS.filter(function (a) { return !isLive(a); });
    var el;
    if ((el = document.querySelector('[data-render="apps-live"]'))) el.innerHTML = live.map(card).join('');
    if ((el = document.querySelector('[data-render="apps-soon"]'))) el.innerHTML = soon.map(card).join('');
    var c;
    if ((c = document.querySelector('[data-count="live"]'))) c.textContent = String(live.length);
    if ((c = document.querySelector('[data-count="soon"]'))) c.textContent = String(soon.length);
  }
  function renderSupportList() {
    var el = document.querySelector('[data-render="support-list"]');
    if (!el) return;
    el.innerHTML = APPS.map(function (a) {
      var l = a.links || {}, meta = [];
      if (l.support) meta.push('<a href="' + esc(L(l.support)) + '" target="_blank" rel="noopener">' + esc(t('link.support')) + '</a>');
      if (l.privacy) meta.push('<a href="' + esc(L(l.privacy)) + '" target="_blank" rel="noopener">' + esc(t('link.privacy')) + '</a>');
      var mail = a.contact || SITE.email;
      meta.push('<a href="mailto:' + esc(mail) + '">' + esc(mail) + '</a>');
      return '<div class="support-item"><img src="' + esc(a.icon) + '" alt="" width="44" height="44" loading="lazy" decoding="async">' +
        '<div><div class="name">' + esc(L(a.name)) + ' <span class="app-cat">' + esc(L(a.category)) + '</span></div>' +
        '<div class="meta">' + meta.join('') + '</div></div></div>';
    }).join('');
  }
  function renderLegalTable() {
    var el = document.querySelector('[data-render="legal-table"]');
    if (!el) return;
    function cell(v) {
      return v ? '<a href="' + esc(L(v)) + '" target="_blank" rel="noopener">' + esc(t('pp.view')) + '</a>' : '<span class="none">—</span>';
    }
    var head = '<thead><tr><th>' + esc(t('pp.col.app')) + '</th><th>' + esc(t('pp.col.privacy')) + '</th><th>' + esc(t('pp.col.terms')) + '</th><th>' + esc(t('pp.col.support')) + '</th><th>' + esc(t('pp.col.contact')) + '</th></tr></thead>';
    var body = APPS.map(function (a) {
      var l = a.links || {}, mail = a.contact || SITE.email;
      return '<tr><td><span class="cell-app"><img src="' + esc(a.icon) + '" alt="" width="28" height="28" loading="lazy" decoding="async">' + esc(L(a.name)) + '</span></td>' +
        '<td>' + cell(l.privacy) + '</td><td>' + cell(l.terms) + '</td><td>' + cell(l.support) + '</td>' +
        '<td class="mono"><a href="mailto:' + esc(mail) + '">' + esc(mail) + '</a></td></tr>';
    }).join('');
    el.innerHTML = '<table class="legal">' + head + '<tbody>' + body + '</tbody></table>';
  }

  /* ---------- hero rotator ---------- */
  var rotTimer = null;
  var LETTER_STAGGER = 0.05;   // 초 — developer.ebay.com 과 같은 간격

  function startRotator() {
    if (rotTimer) { clearInterval(rotTimer); rotTimer = null; }
    var el = document.querySelector('[data-rotator]');
    if (!el) return;

    var items = t('hero.rotate').split('|');
    var i = 0;

    // 글자를 하나씩 스팬에 담고 순서대로 지연을 준다. 공백도 한 칸을
    // 차지해야 하므로 같이 담는다(스타일의 white-space: pre 가 폭을 지킨다).
    function paint() {
      el.style.color = 'var(--rot-' + (i % 4 + 1) + ')';
      el.textContent = '';
      var chars = items[i].split('');
      for (var k = 0; k < chars.length; k++) {
        var sp = document.createElement('span');
        sp.className = 'rot-letter';
        sp.textContent = chars[k];
        sp.style.animationDelay = (k * LETTER_STAGGER).toFixed(2) + 's';
        el.appendChild(sp);
      }
    }
    paint();

    // 움직임을 줄이도록 설정한 사용자에게는 첫 문구만 보여주고 멈춘다.
    var mq = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
    if ((mq && mq.matches) || items.length < 2) return;

    rotTimer = setInterval(function () {
      el.classList.add('is-out');
      setTimeout(function () {
        i = (i + 1) % items.length;
        paint();
        el.classList.remove('is-out');
      }, 160);
    }, 2800);
  }

  function renderAll() {
    applyStatic();
    renderApps(); renderSupportList(); renderLegalTable();
    startRotator();
  }


  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', renderAll);
  else renderAll();
})();
