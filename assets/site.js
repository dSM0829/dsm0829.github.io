/* VISM STUDIO — 공통 스크립트
   1) 언어(KO/EN) 토글: data-i18n 속성의 문구를 바꿉니다. 선택은 localStorage 에 저장.
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
    ko: {
      'title.home': 'VISM STUDIO',
      'title.support': '지원 — VISM STUDIO',
      'title.privacy': '개인정보 처리방침 · 이용약관 — VISM STUDIO',
      'title.404': '페이지를 찾을 수 없습니다 — VISM STUDIO',
      'a11y.skip': '본문으로 건너뛰기',
      'a11y.nav': '주 메뉴',
      'a11y.lang': '언어 선택',
      'nav.apps': '앱', 'nav.support': '지원', 'nav.privacy': '개인정보',
      'hero.eyebrow': 'iOS · Android 앱 스튜디오',
      'hero.h1': '작은 유틸리티 앱을, 정직하게 만듭니다.',
      'hero.lede': '혼자 만드는 스튜디오입니다. 주사위, 환율, 클립보드, 성경, 사진 정리 — 한 가지 일을 제대로 하는 앱을 iPhone과 Android로 내놓습니다.',
      'hero.cta': '앱 보기', 'hero.cta2': '문의하기',
      'facts.apps': '앱', 'facts.live': '출시', 'facts.platforms': '플랫폼', 'facts.dev': '개발자', 'facts.since': '시작', 'facts.contact': '문의',
      'facts.dev.sub': 'App Store 판매자명 YOU SEUNGMIN',
      'apps.h': '앱', 'apps.sub': '스토어에서 바로 받을 수 있는 앱과, 심사·준비 중인 앱입니다.',
      'apps.live': '출시된 앱', 'apps.soon': '심사 중 · 준비 중',
      'support.h': '도움이 필요하신가요?',
      'support.p': '모든 앱의 문의는 한 곳으로 받습니다. 앱 이름과 기기·OS 버전을 함께 적어 주시면 더 빨리 답할 수 있습니다.',
      'support.cta': '지원 페이지', 'support.email': '이메일 보내기',
      'legal.h': '개인정보 처리방침 · 이용약관', 'legal.p': '앱마다 별도 문서가 있습니다. 한 곳에 모아 두었습니다.', 'legal.cta': '전체 보기',
      'footer.tag': 'iOS와 Android 앱을 만듭니다.',
      'footer.note': '이 사이트는 쿠키와 분석 도구를 쓰지 않습니다.',
      'footer.col.site': '사이트', 'footer.col.store': '스토어',
      'footer.play': 'Google Play 개발자 페이지', 'footer.appstore': 'App Store 개발자 페이지',
      'footer.github': 'GitHub', 'footer.top': '맨 위로',
      'link.website': '웹사이트', 'link.privacy': '개인정보 처리방침', 'link.terms': '이용약관', 'link.support': '지원', 'link.contact': '문의',
      'status.live': '출시', 'status.review': '심사 중', 'status.soon': '준비 중',
      'sp.eyebrow': '지원', 'sp.h': '도움이 필요하신가요?',
      'sp.lede': '모든 앱의 문의는 이메일로 받습니다. 만든 사람이 직접 읽고, 보통 며칠 안에 답합니다.',
      'sp.tip': '빠른 답변을 위해: <b>앱 이름, 기기와 OS 버전, 앱 버전, 문제가 생기는 순서</b>를 적어 주세요. 스크린샷이 있으면 더 좋습니다.',
      'sp.perapp': '앱별 지원 페이지', 'sp.perapp.sub': '앱마다 지원 페이지나 개인정보 처리방침이 있으면 함께 적었습니다. 문의는 어느 앱이든 {email} 로 보내 주세요. 앱 이름, 기기와 OS 버전, 문제가 생기는 순서를 함께 적으면 빨리 답할 수 있습니다.', 'sp.faq': '자주 묻는 질문',
      'faq1.q': '구매한 Pro(광고 제거)가 다시 잠겼어요',
      'faq1.a': '앱 설정의 <b>구매 복원</b>을 눌러 주세요. 구매할 때 쓴 것과 같은 Apple 계정(또는 Google 계정)으로 로그인돼 있어야 합니다. 그래도 안 되면 영수증과 함께 {email} 로 메일 주세요.',
      'faq2.q': '환불은 어떻게 하나요?',
      'faq2.a': '결제는 Apple 과 Google 이 처리하므로 환불도 스토어에 요청합니다. App Store 는 <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener">reportaproblem.apple.com</a>, Google Play 는 <a href="https://support.google.com/googleplay/answer/2479637" target="_blank" rel="noopener">Play 환불 요청</a>에서 진행하세요. 스토어가 거절한 경우 메일로 알려 주시면 확인해 드립니다.',
      'faq3.q': '광고 개인화를 끄고 싶어요',
      'faq3.a': 'iPhone: 설정 → 개인정보 보호 및 보안 → 추적에서 앱의 추적을 끌 수 있습니다. Android: 설정 → Google → 광고에서 광고 ID 를 재설정하거나 삭제할 수 있습니다. 광고가 있는 앱은 앱 안의 설정에서 동의 화면을 다시 열 수 있습니다. 기능은 어느 쪽을 선택해도 똑같이 동작합니다.',
      'faq4.q': '내 데이터를 삭제하고 싶어요',
      'faq4.a': '대부분의 앱은 데이터를 기기에만 저장하므로 앱을 삭제하면 함께 지워집니다. 계정이나 서버를 쓰는 앱(FX AI, ClipStash)은 {email} 로 앱 이름과 계정 정보를 적어 삭제를 요청해 주세요.',
      'faq5.q': '버그 제보나 기능 제안은 어디로 하나요?',
      'faq5.a': '{email} 로 보내 주세요. 제목에 앱 이름을 적어 주시면 찾기 쉽습니다. 번역이 어색한 부분을 알려 주시는 것도 큰 도움이 됩니다.',
      'pp.eyebrow': '법적 고지', 'pp.h': '개인정보 처리방침 · 이용약관',
      'pp.lede': '앱마다 별도 문서를 둡니다. 아래 표에서 앱을 찾아 주세요. 문서가 없는 칸은 해당 앱에 그 문서가 없다는 뜻입니다.',
      'pp.col.app': '앱', 'pp.col.privacy': '개인정보 처리방침', 'pp.col.terms': '이용약관', 'pp.col.support': '지원', 'pp.col.contact': '문의',
      'pp.view': '보기',
      'pp.site.h': '이 웹사이트에 대하여',
      'pp.site.p1': 'dsm0829.github.io 는 GitHub Pages 로 호스팅되는 정적 사이트입니다. 쿠키를 쓰지 않고, 방문자 분석 도구도 넣지 않았습니다.',
      'pp.site.p2': '서버 접속 기록은 호스팅 사업자인 GitHub 의 <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener">개인정보 정책</a>을 따릅니다. 글꼴은 Google Fonts 에서 불러오며, 이때 브라우저가 Google 서버에 접속합니다. 선택한 언어(한국어/English)는 브라우저의 localStorage 에만 저장되고 어디로도 전송되지 않습니다.',
      'pp.site.p3': '이 사이트나 앱의 개인정보에 관한 문의:',
      'nf.eyebrow': '404', 'nf.h': '페이지를 찾을 수 없습니다', 'nf.p': '주소가 바뀌었거나 없는 페이지입니다. 앱 목록은 홈에서 볼 수 있습니다.', 'nf.home': '홈으로', 'nf.support': '지원 페이지'
    },
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
      'hero.h1': 'Small utility apps, made honestly.',
      'hero.lede': 'A one-person studio. Dice, exchange rates, clipboard, Bible, photo cleanup — apps that do one job properly, for iPhone and Android.',
      'hero.cta': 'See the apps', 'hero.cta2': 'Get in touch',
      'facts.apps': 'Apps', 'facts.live': 'Available', 'facts.platforms': 'Platforms', 'facts.dev': 'Developer', 'facts.since': 'Since', 'facts.contact': 'Contact',
      'facts.dev.sub': 'App Store seller: YOU SEUNGMIN',
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
      'link.website': 'Website', 'link.privacy': 'Privacy policy', 'link.terms': 'Terms', 'link.support': 'Support', 'link.contact': 'Contact',
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
      'pp.site.p2': 'Server logs are governed by GitHub’s <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener">privacy statement</a> as the hosting provider. Fonts load from Google Fonts, which means your browser contacts Google’s servers. Your language choice (한국어/English) is stored only in your browser’s localStorage and is never sent anywhere.',
      'pp.site.p3': 'Privacy questions about this site or any app:',
      'nf.eyebrow': '404', 'nf.h': 'Page not found', 'nf.p': 'The address may have changed or never existed. The app list is on the home page.', 'nf.home': 'Go home', 'nf.support': 'Support page'
    }
  };

  /* ---------- language ---------- */
  function detectLang() {
    // 1) URL ?lang=ko|en (공유 링크용: https://dsm0829.github.io/?lang=en) 2) 저장된 선택 3) 브라우저 언어
    try {
      var q = (location.search.match(/[?&]lang=(ko|en)\b/) || [])[1];
      if (q) { try { localStorage.setItem('vism-lang', q); } catch (e0) {} return q; }
    } catch (e1) {}
    try { var s = localStorage.getItem('vism-lang'); if (s === 'ko' || s === 'en') return s; } catch (e) {}
    var n = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    return n.indexOf('ko') === 0 ? 'ko' : 'en';
  }
  var lang = detectLang();
  function t(key) {
    var d = I18N[lang] || I18N.en, v;
    if (Object.prototype.hasOwnProperty.call(d, key)) v = d[key];
    else if (Object.prototype.hasOwnProperty.call(I18N.en, key)) v = I18N.en[key];
    else return key;
    return v.replace(/\{email\}/g, SITE.email);
  }
  function L(v) { // {ko,en} 또는 문자열
    if (v == null) return '';
    if (typeof v === 'string') return v;
    return v[lang] || v.en || v.ko || '';
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
    els = document.querySelectorAll('[data-lang-btn]');
    for (i = 0; i < els.length; i++) els[i].setAttribute('aria-pressed', els[i].getAttribute('data-lang-btn') === lang ? 'true' : 'false');
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
  function storeBtn(kind, p) {
    if (!p) return '';
    var label = kind === 'ios' ? 'App Store' : 'Google Play';
    if (p.status === 'live' && p.url) {
      return '<a class="store" href="' + esc(p.url) + '" target="_blank" rel="noopener"><span>' + label + '</span>' + arrow() + '</a>';
    }
    var st = p.status === 'review' ? 'review' : 'soon';
    return '<span class="store is-pending"><span>' + label + '</span><span class="st st-' + st + '">' + esc(t('status.' + st)) + '</span></span>';
  }
  function linkRow(app) {
    var out = [], l = app.links || {};
    if (l.website) out.push('<a href="' + esc(L(l.website)) + '" target="_blank" rel="noopener">' + esc(t('link.website')) + '</a>');
    if (l.privacy) out.push('<a href="' + esc(L(l.privacy)) + '" target="_blank" rel="noopener">' + esc(t('link.privacy')) + '</a>');
    if (l.terms)   out.push('<a href="' + esc(L(l.terms)) + '" target="_blank" rel="noopener">' + esc(t('link.terms')) + '</a>');
    if (l.support) out.push('<a href="' + esc(L(l.support)) + '" target="_blank" rel="noopener">' + esc(t('link.support')) + '</a>');
    return out.join('');
  }
  function card(app) {
    var p = app.platforms || {};
    return '<article class="app" id="app-' + esc(app.id) + '">' +
      '<img class="app-icon" src="' + esc(app.icon) + '" alt="" width="72" height="72" loading="lazy" decoding="async">' +
      '<div class="app-body">' +
        '<div class="app-head"><h3 class="app-name">' + esc(L(app.name)) + '</h3><span class="app-cat">' + esc(L(app.category)) + '</span></div>' +
        '<p class="app-tag">' + esc(L(app.tagline)) + '</p>' +
        (app.facts ? '<p class="app-facts">' + esc(L(app.facts)) + '</p>' : '') +
        '<div class="stores">' + storeBtn('ios', p.ios) + storeBtn('android', p.android) + '</div>' +
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
  function renderFacts() {
    var el = document.querySelector('[data-render="facts"]');
    if (!el) return;
    var live = APPS.filter(isLive).length;
    var rows = [
      [t('facts.apps'), String(APPS.length)],
      [t('facts.live'), String(live)],
      [t('facts.platforms'), 'iOS · Android'],
      [t('facts.dev'), 'VISM STUDIO<small>' + esc(t('facts.dev.sub')) + '</small>'],
      [t('facts.since'), '2026'],
      [t('facts.contact'), '<a href="mailto:' + SITE.email + '">' + SITE.email + '</a>']
    ];
    el.innerHTML = rows.map(function (r) { return '<div><dt>' + esc(r[0]) + '</dt><dd>' + r[1] + '</dd></div>'; }).join('');
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

  function renderAll() {
    applyStatic();
    renderApps(); renderFacts(); renderSupportList(); renderLegalTable();
  }

  /* ---------- events ---------- */
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-lang-btn]');
    if (!b) return;
    var next = b.getAttribute('data-lang-btn');
    if (next !== 'ko' && next !== 'en') return;
    lang = next;
    try { localStorage.setItem('vism-lang', lang); } catch (err) {}
    renderAll();
  });

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', renderAll);
  else renderAll();
})();
