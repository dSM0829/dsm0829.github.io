/* =====================================================================
   VISM STUDIO — 앱 데이터 (단일 소스)
   ---------------------------------------------------------------------
   앱을 추가하거나 상태를 바꿀 때 이 파일만 고치면 홈 · 지원 · 개인정보
   페이지에 모두 반영됩니다.

   status : 'live' 출시됨 | 'review' 심사 중 | 'soon' 준비 중
   - 플랫폼 객체를 아예 빼면 그 플랫폼은 표시되지 않습니다.
   - iOS url 은 https://apps.apple.com/app/id<ASC앱ID> 형식을 쓰면
     국가에 관계없이 열립니다. 'review' 상태면 url 이 있어도 링크하지 않고
     "심사 중" 으로만 보여 줍니다. 출시되면 status 를 'live' 로 바꾸세요.
   - icon 은 /assets/icons/<id>.png 에 둡니다.
   - 문의 메일은 전 앱 공통(site.js 의 SITE.email = tmdals999@gmail.com). 앱별로 다르게 하려면
     객체에 contact: 'someone@example.com' 을 추가하면 그 앱만 바뀝니다.
   ===================================================================== */
window.VISM_APPS = [
  {
    id: 'fxai',
    name: { ko: 'FX AI', en: 'FX AI' },
    storeName: { ko: 'FX AI - 환율 분석', en: 'FX AI - Exchange Rate' },
    category: { ko: '환율 타이밍 · 금융', en: 'Exchange-rate timing · Finance' },
    tagline: {
      ko: 'AI가 12개 통화쌍을 하루 4번 분석해 환전하기 좋은 때를 알려줍니다. 타이밍 점수, 목표 환율 알림, 기술 지표 4종.',
      en: 'AI analyzes 12 currency pairs four times a day to find the best time to exchange. Timing score, target-rate alerts, four technical indicators.'
    },
    icon: '/assets/icons/fxai.png',
    platforms: {
      ios:     { status: 'live', url: 'https://apps.apple.com/app/id6761619382' },
      android: { status: 'live', url: 'https://play.google.com/store/apps/details?id=com.fxai.app' }
    },
    links: {
      website: 'https://fx-ai-prod.web.app',
      privacy: 'https://fx-ai-prod.web.app/privacy.html',
      terms:   'https://fx-ai-prod.web.app/terms.html'
    }
  },
  {
    id: 'clipstash',
    name: { ko: 'ClipStash', en: 'ClipStash' },
    storeName: { ko: 'ClipStash - 클립보드 매니저', en: 'ClipStash - Clipboard Manager' },
    category: { ko: '클립보드 매니저 · 생산성', en: 'Clipboard manager · Productivity' },
    tagline: {
      ko: '복사한 것을 잃어버리지 않게. 클립보드를 자동으로 저장하고 AI가 링크·전화번호·코드·주소를 알아서 정리합니다.',
      en: 'Stop losing what you copy. Auto-saves your clipboard and uses AI to keep URLs, numbers, snippets and addresses organized.'
    },
    icon: '/assets/icons/clipstash.png',
    platforms: {
      ios: { status: 'live', url: 'https://apps.apple.com/app/id6760615594' }
    },
    links: {
      support: 'https://dsm0829.github.io/clipstash-legal/support.html',
      privacy: 'https://dsm0829.github.io/clipstash-legal/privacy-policy.html',
      terms:   'https://dsm0829.github.io/clipstash-legal/terms-of-service.html'
    }
  },
  {
    id: 'diceroll',
    name: { ko: 'DiceRoll', en: 'DiceRoll' },
    storeName: { ko: 'DiceRoll: 실감 나는 3D 주사위 굴리기', en: 'DiceRoll: 3D Dice Roller RPG' },
    category: { ko: '3D 주사위 · 게임 도구', en: '3D dice · Tabletop utility' },
    tagline: {
      ko: '난수가 아니라 진짜 물리. 스와이프로 던지면 주사위가 포물선을 그리며 구르다 멈춥니다. D4–D20, 스킨 8종, 계정 없음.',
      en: 'Real physics, not a random number generator. Swipe to throw and watch the dice tumble and settle. D4–D20, eight skins, no account.'
    },
    icon: '/assets/icons/diceroll.png',
    platforms: {
      ios:     { status: 'review', url: 'https://apps.apple.com/app/id6803302729' },
      android: { status: 'live',   url: 'https://play.google.com/store/apps/details?id=com.diceroll3d.app' }
    },
    links: {
      privacy: 'https://dsm0829.github.io/diceroll-privacy/',
      support: 'https://dsm0829.github.io/diceroll-privacy/support.html'
    }
  },
  {
    id: 'dayluck',
    name: { ko: '데이럭', en: 'DayLuck' },
    storeName: { ko: '데이럭 - 사주로 보는 좋은 날, 운세, 궁합, 만세력', en: 'DayLuck' },
    category: { ko: '사주 · 운세 · 라이프스타일', en: 'Saju fortune · Lifestyle' },
    tagline: {
      ko: '사주로 보는 오늘의 운세와 이달의 좋은 날, 약속 날짜 운세, 친구 궁합, 만세력까지 매일 받아 봅니다.',
      en: 'Daily fortune from your Saju, auspicious days this month, appointment-date readings, friend compatibility and a manseryeok calendar.'
    },
    icon: '/assets/icons/dayluck.png',
    platforms: {
      android: { status: 'live', url: 'https://play.google.com/store/apps/details?id=com.dayluck.app' }
    },
    links: {
      website: 'https://dayluck.today',
      privacy: 'https://classic-eel-26a.notion.site/DAYLUCK-39b6f2bb1ae78166b9a2dc0a30844fe5'
    }
  },
  {
    id: 'creatormix',
    name: { ko: 'CreatorMix Digital', en: 'CreatorMix Digital' },
    storeName: { ko: 'CreatorMix Digital', en: 'CreatorMix Digital' },
    category: { ko: '오디오 · 영상 도구', en: 'Audio & video tools' },
    tagline: {
      ko: '변환, 자르기, 믹스, 압축 — 폰에서 바로 쓰는 무료 오디오·영상 도구 모음.',
      en: 'Free audio & video tools: convert, trim, mix and compress right on your phone.'
    },
    icon: '/assets/icons/creatormix.png',
    platforms: {
      ios:     { status: 'review', url: 'https://apps.apple.com/app/id6799359766' },
      android: { status: 'live',   url: 'https://play.google.com/store/apps/details?id=digital.creatormix.app' }
    },
    links: {
      website: { ko: 'https://creatormix.digital/ko', en: 'https://creatormix.digital/en' },
      privacy: 'https://creatormix.digital/en/privacy'
    }
  },
  {
    id: 'keepmemory',
    name: { ko: 'Keepmemory', en: 'Keepmemory' },
    storeName: { ko: 'Keepmemory: 사진 정리', en: 'Keepmemory: Safe Photo Cleaner' },
    category: { ko: '사진 저장공간 정리 · 사진', en: 'Photo storage cleaner · Photo & Video' },
    tagline: {
      ko: '사진을 한 장도 지우지 않고 저장공간을 확보합니다. 라이브 포토·모션 포토의 숨은 영상만 떼어내고 사진은 그대로 — 같은 해상도, 같은 날짜, 같은 앨범.',
      en: 'Free up phone storage without deleting a single photo. Strips only the hidden video from Live Photos and Motion Photos — same resolution, same date, same albums.'
    },
    icon: '/assets/icons/keepmemory.png',
    platforms: {
      ios:     { status: 'review', url: 'https://apps.apple.com/app/id6803499711' },
      android: { status: 'live', url: 'https://play.google.com/store/apps/details?id=com.spaceback.app' }
    },
    links: {
      website: 'https://dsm0829.github.io/spaceback-site/',
      privacy: 'https://dsm0829.github.io/spaceback-site/privacy.html',
      terms:   'https://dsm0829.github.io/spaceback-site/terms.html'
    }
  },
  {
    id: 'codexbible',
    name: { ko: 'Codex Bible', en: 'Codex Bible' },
    storeName: { ko: '바른성경: 오프라인 성경읽기', en: 'Codex Bible: KJV Offline Study' },
    category: { ko: '오프라인 성경 · 참고', en: 'Offline Bible · Reference' },
    tagline: {
      ko: '신호가 없어도 읽는 성경. 번역본 전체를 내려받아 오프라인으로 읽고, 하이라이트·메모·책갈피를 남깁니다.',
      en: 'Read Scripture with no signal. Download full Bibles, highlight verses, and keep notes and bookmarks — all offline.'
    },
    icon: '/assets/icons/codexbible.png',
    platforms: {
      ios:     { status: 'review', url: 'https://apps.apple.com/app/id6804084716' },
      android: { status: 'live', url: 'https://play.google.com/store/apps/details?id=com.codexbible.app' }
    },
    links: {
      privacy: { ko: 'https://dsm0829.github.io/codex-bible-privacy/', en: 'https://dsm0829.github.io/codex-bible-privacy/en.html' }
    }
  },
  {
    id: 'holofoil',
    name: { ko: 'Holofoil', en: 'Holofoil' },
    storeName: { ko: 'Holofoil: 트레이딩 카드 스캐너', en: 'Holofoil: Trading Card Scanner' },
    category: { ko: '카드 스캐너 · 수집', en: 'Card scanner · Collecting' },
    tagline: {
      ko: '카드를 비추면 어떤 카드인지 알아냅니다. 33,000장을 오프라인으로 인식하고, 보유 목록을 관리하고, 시세와 eBay 매물을 한 번에 확인합니다.',
      en: 'Point your camera at a card and it knows which one. Recognizes 33,000+ cards offline, tracks what you own, and shows values with eBay listings in one tap.'
    },
    icon: '/assets/icons/holofoil.png',
    platforms: {
      ios: { status: 'soon' }
    }
  }
];
