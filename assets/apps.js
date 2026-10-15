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
    id: 'tuner',
    name: { ko: 'Tuner', en: 'Tuner' },
    storeName: { ko: 'Tuner: Guitar, Ukulele & Bass', en: 'Tuner: Guitar, Ukulele & Bass' },
    category: { ko: 'Tuner · Music', en: 'Tuner · Music' },
    tagline: {
      ko: 'Tuner is a guitar tuner that listens through your microphone and shows you, string by string, whether to tighten or loosen. It also tunes bass, ukulele, violin, cello, banjo and mandolin, and has a metronome built in.',
      en: 'Tuner is a guitar tuner that listens through your microphone and shows you, string by string, whether to tighten or loosen. It also tunes bass, ukulele, violin, cello, banjo and mandolin, and has a metronome built in.'
    },
    icon: '/assets/icons/tuner.png',
    shots: ['/assets/shots/tuner/1.jpg', '/assets/shots/tuner/2.jpg', '/assets/shots/tuner/3.jpg', '/assets/shots/tuner/4.jpg'],
    platforms: {
      ios:     { status: 'live', url: 'https://apps.apple.com/app/id6815243073' },
      android: { status: 'live', url: 'https://play.google.com/store/apps/details?id=com.vismstudio.tuner' }
    },
    links: {
      privacy: 'https://dsm0829.github.io/tuner-privacy/'
    }
  },
  {
    id: 'pdfx',
    name: { ko: 'PDFX', en: 'PDFX' },
    storeName: { ko: 'PDFX: Editor, Reader & Signer', en: 'PDFX: Editor, Reader & Signer' },
    category: { ko: 'PDF editor · Documents', en: 'PDF editor · Documents' },
    tagline: {
      ko: 'PDFX opens your PDFs so you can read, mark up, sign and fill them on your phone. There is no account and no server: files are opened, edited and recognized on your device, and your original file is never changed.',
      en: 'PDFX opens your PDFs so you can read, mark up, sign and fill them on your phone. There is no account and no server: files are opened, edited and recognized on your device, and your original file is never changed.'
    },
    icon: '/assets/icons/pdfx.png',
    shots: ['/assets/shots/pdfx/1.jpg', '/assets/shots/pdfx/2.jpg', '/assets/shots/pdfx/3.jpg', '/assets/shots/pdfx/4.jpg'],
    platforms: {
      ios:     { status: 'live', url: 'https://apps.apple.com/app/id6815243882' },
      android: { status: 'live', url: 'https://play.google.com/store/apps/details?id=com.vismstudio.pdf' }
    },
    links: {
      privacy: 'https://dsm0829.github.io/pdfx-privacy/'
    }
  },
  {
    id: 'scanner',
    name: { ko: 'Scanner', en: 'Scanner' },
    storeName: { ko: 'Scanner: PDF & Document Scan', en: 'Scanner: PDF & Document Scan' },
    category: { ko: 'Document scanner · Utilities', en: 'Document scanner · Utilities' },
    tagline: {
      ko: 'Scanner turns paper into clean PDFs with your phone camera. Point it at a page, and Scanner finds the edges, straightens the page and takes the picture when you hold still.',
      en: 'Scanner turns paper into clean PDFs with your phone camera. Point it at a page, and Scanner finds the edges, straightens the page and takes the picture when you hold still.'
    },
    icon: '/assets/icons/scanner.png',
    shots: ['/assets/shots/scanner/1.jpg', '/assets/shots/scanner/2.jpg', '/assets/shots/scanner/3.jpg', '/assets/shots/scanner/4.jpg'],
    platforms: {
      ios:     { status: 'live', url: 'https://apps.apple.com/app/id6815859133' },
      android: { status: 'live', url: 'https://play.google.com/store/apps/details?id=com.vismstudio.scanner' }
    },
    links: {
      privacy: 'https://dsm0829.github.io/scanner-privacy/'
    }
  },
  {
    id: 'printer',
    name: { ko: 'Printer', en: 'Printer' },
    storeName: { ko: 'Printer: Print & Scan Photos', en: 'Printer: Print & Scan Photos' },
    category: { ko: 'Printing · Utilities', en: 'Printing · Utilities' },
    tagline: {
      ko: 'Printer gets your photos, files and web pages ready for paper and sends them to the Wi-Fi printer next to you.',
      en: 'Printer gets your photos, files and web pages ready for paper and sends them to the Wi-Fi printer next to you.'
    },
    icon: '/assets/icons/printer.png',
    shots: ['/assets/shots/printer/1.jpg', '/assets/shots/printer/2.jpg', '/assets/shots/printer/3.jpg', '/assets/shots/printer/4.jpg'],
    platforms: {
      ios:     { status: 'live', url: 'https://apps.apple.com/app/id6816224646' },
      android: { status: 'live', url: 'https://play.google.com/store/apps/details?id=com.vismstudio.printer' }
    },
    links: {
      privacy: 'https://dsm0829.github.io/printer-privacy/'
    }
  },
  {
    id: 'spreadsheet',
    name: { ko: 'Spreadsheet', en: 'Spreadsheet' },
    storeName: { ko: 'Spreadsheet: XLSX & CSV Editor', en: 'Spreadsheet: XLSX & CSV Editor' },
    category: { ko: 'Spreadsheet · Documents', en: 'Spreadsheet · Documents' },
    tagline: {
      ko: 'Spreadsheet lets you open, edit and save spreadsheets on your phone. Open XLSX and CSV files from the Files app or another app, change a cell and the change is saved right away. No account, no sign-in.',
      en: 'Spreadsheet lets you open, edit and save spreadsheets on your phone. Open XLSX and CSV files from the Files app or another app, change a cell and the change is saved right away. No account, no sign-in.'
    },
    icon: '/assets/icons/spreadsheet.png',
    shots: ['/assets/shots/spreadsheet/1.jpg', '/assets/shots/spreadsheet/2.jpg', '/assets/shots/spreadsheet/3.jpg', '/assets/shots/spreadsheet/4.jpg'],
    platforms: {
      ios:     { status: 'live', url: 'https://apps.apple.com/app/id6816473520' },
      android: { status: 'live', url: 'https://play.google.com/store/apps/details?id=com.vismstudio.spreadsheet' }
    },
    links: {
      privacy: 'https://dsm0829.github.io/spreadsheet-privacy/'
    }
  },
  {
    id: 'vintage',
    name: { ko: 'Vintage', en: 'Vintage' },
    storeName: { ko: 'Vintage: Film Camera & Lenses', en: 'Vintage: Film Camera & Lenses' },
    category: { ko: 'Film camera · Photo', en: 'Film camera · Photo' },
    tagline: {
      ko: 'Vintage is a film camera you build yourself. Pick a body, put on a lens, load a film and shoot — the viewfinder shows the result live, so what you see is what you get.',
      en: 'Vintage is a film camera you build yourself. Pick a body, put on a lens, load a film and shoot — the viewfinder shows the result live, so what you see is what you get.'
    },
    icon: '/assets/icons/vintage.png',
    shots: ['/assets/shots/vintage/1.jpg', '/assets/shots/vintage/2.jpg', '/assets/shots/vintage/3.jpg', '/assets/shots/vintage/4.jpg'],
    platforms: {
      ios:     { status: 'live', url: 'https://apps.apple.com/app/id6816281510' },
      android: { status: 'live', url: 'https://play.google.com/store/apps/details?id=com.vismstudio.vintage' }
    },
    links: {
      privacy: 'https://dsm0829.github.io/vintage-privacy/'
    }
  },
  {
    id: 'ear',
    name: { ko: 'Ear Training', en: 'Ear Training' },
    storeName: { ko: 'Ear Training: Chords & Scales', en: 'Ear Training: Chords & Scales' },
    category: { ko: 'Ear training · Music', en: 'Ear training · Music' },
    tagline: {
      ko: 'Ear Training helps you name what you hear. Listen, pick the name, and see right away if you got it. Missed it? You hear the right answer again from the same note, and you can tap the other buttons to compare. Short lessons, a real piano sound, and no account.',
      en: 'Ear Training helps you name what you hear. Listen, pick the name, and see right away if you got it. Missed it? You hear the right answer again from the same note, and you can tap the other buttons to compare. Short lessons, a real piano sound, and no account.'
    },
    icon: '/assets/icons/ear.png',
    shots: ['/assets/shots/ear/1.jpg', '/assets/shots/ear/2.jpg', '/assets/shots/ear/3.jpg', '/assets/shots/ear/4.jpg'],
    platforms: {
      ios:     { status: 'live', url: 'https://apps.apple.com/app/id6818875288' },
      android: { status: 'live', url: 'https://play.google.com/store/apps/details?id=com.vismstudio.ear' }
    },
    links: {
      privacy: 'https://dsm0829.github.io/ear-privacy/'
    }
  },
  {
    id: 'affirm',
    name: { ko: 'I can', en: 'I can' },
    storeName: { ko: 'I can: Affirmations & Quotes', en: 'I can: Affirmations & Quotes' },
    category: { ko: 'Affirmations · Lifestyle', en: 'Affirmations · Lifestyle' },
    tagline: {
      ko: 'I can brings you one short sentence at a time: an affirmation to say to yourself, or a quote from someone who said it first.',
      en: 'I can brings you one short sentence at a time: an affirmation to say to yourself, or a quote from someone who said it first.'
    },
    icon: '/assets/icons/affirm.png',
    shots: ['/assets/shots/affirm/1.jpg', '/assets/shots/affirm/2.jpg', '/assets/shots/affirm/3.jpg', '/assets/shots/affirm/4.jpg'],
    platforms: {
      ios:     { status: 'live', url: 'https://apps.apple.com/app/id6819462574' },
      android: { status: 'live', url: 'https://play.google.com/store/apps/details?id=com.vismstudio.affirm' }
    },
    links: {
      privacy: 'https://dsm0829.github.io/affirm-privacy/'
    }
  },
  {
    id: 'mail',
    name: { ko: 'Email', en: 'Email' },
    storeName: { ko: 'Email: All Your Mail in One', en: 'Email: All Your Mail in One' },
    category: { ko: 'Email client · Productivity', en: 'Email client · Productivity' },
    tagline: {
      ko: 'Email puts all your mail in one inbox: Gmail, iCloud, Naver, Daum, Yahoo and other IMAP accounts. Your phone talks to your mail provider directly. Your mail and passwords never go through our servers, because there are none.',
      en: 'Email puts all your mail in one inbox: Gmail, iCloud, Naver, Daum, Yahoo and other IMAP accounts. Your phone talks to your mail provider directly. Your mail and passwords never go through our servers, because there are none.'
    },
    icon: '/assets/icons/mail.png',
    shots: ['/assets/shots/mail/1.jpg', '/assets/shots/mail/2.jpg', '/assets/shots/mail/3.jpg', '/assets/shots/mail/4.jpg'],
    platforms: {
      ios:     { status: 'soon' },
      android: { status: 'live', url: 'https://play.google.com/store/apps/details?id=com.vismstudio.mail' }
    },
    links: {
      privacy: 'https://dsm0829.github.io/mail-privacy/'
    }
  },
  {
    id: 'card',
    name: { ko: 'Card Scanner', en: 'Card Scanner' },
    storeName: { ko: 'Card Scanner: Business Cards', en: 'Card Scanner: Business Cards' },
    category: { ko: 'Business cards · Productivity', en: 'Business cards · Productivity' },
    tagline: {
      ko: 'Card Scanner turns paper business cards into contacts you can use.',
      en: 'Card Scanner turns paper business cards into contacts you can use.'
    },
    icon: '/assets/icons/card.png',
    shots: ['/assets/shots/card/1.jpg', '/assets/shots/card/2.jpg', '/assets/shots/card/3.jpg', '/assets/shots/card/4.jpg'],
    platforms: {
      ios:     { status: 'soon' },
      android: { status: 'live', url: 'https://play.google.com/store/apps/details?id=com.vismstudio.card' }
    },
    links: {
      privacy: 'https://dsm0829.github.io/card-privacy/'
    }
  },
  {
    id: 'gym',
    name: { ko: 'Gym Workout', en: 'Gym Workout' },
    storeName: { ko: 'Gym Workout: Tracker & Log', en: 'Gym Workout: Tracker & Log' },
    category: { ko: 'Workout log · Health', en: 'Workout log · Health' },
    tagline: {
      ko: 'Gym Workout is a simple workout log for the gym. Open the app and start logging. There\'s no account and no sign-up, and it works offline.',
      en: 'Gym Workout is a simple workout log for the gym. Open the app and start logging. There\'s no account and no sign-up, and it works offline.'
    },
    icon: '/assets/icons/gym.png',
    shots: ['/assets/shots/gym/1.jpg', '/assets/shots/gym/2.jpg', '/assets/shots/gym/3.jpg', '/assets/shots/gym/4.jpg'],
    platforms: {
      ios:     { status: 'soon' },
      android: { status: 'live', url: 'https://play.google.com/store/apps/details?id=com.vismstudio.gym' }
    },
    links: {
      privacy: 'https://dsm0829.github.io/gym-privacy/'
    }
  },
  {
    id: 'hwp',
    name: { ko: 'HWP Viewer', en: 'HWP Viewer' },
    storeName: { ko: 'HWP Viewer: Open & Edit Hangul', en: 'HWP Viewer: Open & Edit Hangul' },
    category: { ko: 'HWP viewer · Documents', en: 'HWP viewer · Documents' },
    tagline: {
      ko: 'Open and edit Korean word processor documents (.hwp and .hwpx) on your phone — school notices, government letters, forms and announcements.',
      en: 'Open and edit Korean word processor documents (.hwp and .hwpx) on your phone — school notices, government letters, forms and announcements.'
    },
    icon: '/assets/icons/hwp.png',
    shots: ['/assets/shots/hwp/1.jpg', '/assets/shots/hwp/2.jpg', '/assets/shots/hwp/3.jpg', '/assets/shots/hwp/4.jpg'],
    platforms: {
      ios:     { status: 'soon' },
      android: { status: 'live', url: 'https://play.google.com/store/apps/details?id=com.vismstudio.hwp' }
    },
    links: {
      privacy: 'https://dsm0829.github.io/hwp-privacy/'
    }
  },
  {
    id: 'docx',
    name: { ko: 'Docx', en: 'Docx' },
    storeName: { ko: 'Docx: Open & Edit Documents', en: 'Docx: Open & Edit Documents' },
    category: { ko: 'DOCX editor · Documents', en: 'DOCX editor · Documents' },
    tagline: {
      ko: 'Open, read and edit DOCX documents on your phone. Pages are laid out like on a computer, and your changes are saved back in the same DOCX format. No account, no sign-in.',
      en: 'Open, read and edit DOCX documents on your phone. Pages are laid out like on a computer, and your changes are saved back in the same DOCX format. No account, no sign-in.'
    },
    icon: '/assets/icons/docx.png',
    shots: ['/assets/shots/docx/1.jpg', '/assets/shots/docx/2.jpg', '/assets/shots/docx/3.jpg', '/assets/shots/docx/4.jpg'],
    platforms: {
      ios:     { status: 'soon' },
      android: { status: 'live', url: 'https://play.google.com/store/apps/details?id=com.vismstudio.docx' }
    },
    links: {
      privacy: 'https://dsm0829.github.io/docx-privacy/'
    }
  },
  {
    id: 'unzip',
    name: { ko: 'Unzip', en: 'Unzip' },
    storeName: { ko: 'Unzip: RAR, 7Z & ZIP Extractor', en: 'Unzip: RAR, 7Z & ZIP Extractor' },
    category: { ko: 'Archives · Utilities', en: 'Archives · Utilities' },
    tagline: {
      ko: 'Open RAR, 7Z, ZIP and other archives on your phone, see what\'s inside, and extract all or just the files you need. No account, no sign-in.',
      en: 'Open RAR, 7Z, ZIP and other archives on your phone, see what\'s inside, and extract all or just the files you need. No account, no sign-in.'
    },
    icon: '/assets/icons/unzip.png',
    shots: ['/assets/shots/unzip/1.jpg', '/assets/shots/unzip/2.jpg', '/assets/shots/unzip/3.jpg', '/assets/shots/unzip/4.jpg'],
    platforms: {
      ios:     { status: 'soon' },
      android: { status: 'live', url: 'https://play.google.com/store/apps/details?id=com.vismstudio.unzip' }
    },
    links: {
      privacy: 'https://dsm0829.github.io/unzip-privacy/'
    }
  },
  {
    id: 'tvremote',
    name: { ko: 'Universal TV 리모컨', en: 'Universal TV Remote' },
    storeName: { ko: 'Universal: 만능 TV 리모컨', en: 'Universal: TV Remote Control' },
    category: { ko: 'TV 리모컨 · 도구', en: 'TV remote · Tools' },
    tagline: {
      ko: '별도 장비 없이 와이파이로 LG·삼성·Roku TV를 조작합니다. 같은 네트워크의 TV를 자동으로 찾고, 화면 키보드로 글자를 입력하고, 매크로로 여러 명령을 한 번에 실행합니다.',
      en: 'Control LG, Samsung, and Roku TVs over Wi-Fi — no extra hardware. Finds TVs on your network, types with the on-screen keyboard, and runs several commands with one tap.'
    },
    icon: '/assets/icons/tvremote.png',
    shots: ['/assets/shots/tvremote/1.jpg', '/assets/shots/tvremote/2.jpg', '/assets/shots/tvremote/3.jpg'],
    platforms: {
      ios:     { status: 'live',   url: 'https://apps.apple.com/app/id6805628220' },
      android: { status: 'live',   url: 'https://play.google.com/store/apps/details?id=com.vism.tvremote' }
    },
    links: {
      privacy: 'https://dsm0829.github.io/vismremote-privacy/'
    }
  },
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
    shots: ['/assets/shots/fxai/1.jpg', '/assets/shots/fxai/2.jpg', '/assets/shots/fxai/3.jpg', '/assets/shots/fxai/4.jpg'],
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
    shots: ['/assets/shots/clipstash/1.jpg', '/assets/shots/clipstash/2.jpg', '/assets/shots/clipstash/3.jpg', '/assets/shots/clipstash/4.jpg'],
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
    shots: ['/assets/shots/diceroll/1.jpg', '/assets/shots/diceroll/2.jpg', '/assets/shots/diceroll/3.jpg', '/assets/shots/diceroll/4.jpg'],
    platforms: {
      ios:     { status: 'live',   url: 'https://apps.apple.com/app/id6803302729' },
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
    storeName: { ko: '데이럭 — 사주로 보는 너와 나의 좋은 날', en: 'DayLuck — saju and tarot on the web' },
    category: { ko: '사주 · 타로 · 웹 서비스', en: 'Saju & tarot · Web' },
    tagline: {
      ko: '설치 없이 웹에서 보는 사주와 타로. 오늘의 운세와 오늘의 카드는 무료, 사주풀이는 990원부터. 한국어 서비스입니다.',
      en: 'Saju (Korean fortune telling) and tarot in the browser — nothing to install. The daily fortune and one tarot card a day are free; a full reading starts at ₩990. Korean only.'
    },
    icon: '/assets/icons/dayluck.png',
    shots: ['/assets/shots/dayluck/1.jpg', '/assets/shots/dayluck/2.jpg', '/assets/shots/dayluck/3.jpg'],
    platforms: {
      web: { status: 'live', url: 'https://dayluck.today' }
    },
    links: {
      instagram: 'https://www.instagram.com/dayluck_official',
      privacy: 'https://dayluck.today/legal/privacy',
      terms: 'https://dayluck.today/legal/terms'
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
    shots: ['/assets/shots/creatormix/1.jpg', '/assets/shots/creatormix/2.jpg', '/assets/shots/creatormix/3.jpg', '/assets/shots/creatormix/4.jpg'],
    platforms: {
      ios:     { status: 'soon' },
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
    shots: ['/assets/shots/keepmemory/1.jpg', '/assets/shots/keepmemory/2.jpg', '/assets/shots/keepmemory/3.jpg'],
    platforms: {
      ios:     { status: 'live',   url: 'https://apps.apple.com/app/id6803499711' },
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
    shots: ['/assets/shots/codexbible/1.jpg', '/assets/shots/codexbible/2.jpg', '/assets/shots/codexbible/3.jpg', '/assets/shots/codexbible/4.jpg'],
    platforms: {
      ios:     { status: 'live',   url: 'https://apps.apple.com/app/id6804084716' },
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
    shots: ['/assets/shots/holofoil/1.jpg', '/assets/shots/holofoil/2.jpg', '/assets/shots/holofoil/3.jpg', '/assets/shots/holofoil/4.jpg'],
    platforms: {
      android: { status: 'live',   url: 'https://play.google.com/store/apps/details?id=com.holofoil.card' }
    },
    links: {
      privacy: 'https://dsm0829.github.io/holofoil-privacy/'
    }
  },
  {
    id: 'brickid',
    name: { ko: 'BrickDex', en: 'BrickDex' },
    storeName: { ko: 'BrickDex: 브릭 부품 스캐너', en: 'BrickDex: Brick Part Scanner' },
    category: { ko: '부품 스캐너 · 수집', en: 'Part scanner · Collecting' },
    tagline: {
      ko: '브릭을 찍으면 부품번호와 희귀도가 나옵니다. 흩어진 부품을 도감으로 모으고, 내 부품으로 만들 수 있는 세트를 찾습니다.',
      en: 'Photograph a brick to get its part number and rarity. Collect stray parts into a dex, and find sets you can build from what you own.'
    },
    icon: '/assets/icons/brickid.png',
    shots: ['/assets/shots/brickid/1.jpg', '/assets/shots/brickid/2.jpg', '/assets/shots/brickid/3.jpg', '/assets/shots/brickid/4.jpg'],
    platforms: {
      ios:     { status: 'live', url: 'https://apps.apple.com/app/id6807828421' },
      android: { status: 'live', url: 'https://play.google.com/store/apps/details?id=com.brickdex' }
    },
    links: {
      support: 'https://dsm0829.github.io/brickid-privacy/support.html',
      privacy: 'https://dsm0829.github.io/brickid-privacy/'
    }
  }
];
