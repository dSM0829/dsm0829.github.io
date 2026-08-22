# dsm0829.github.io — VISM STUDIO 공통 앱 사이트

GitHub Pages 정적 사이트. 빌드 과정 없음 — 파일을 고쳐서 push 하면 끝.

## 구조

```
index.html            홈 (히어로 · 원칙 · 앱 목록 · 지원/법적 고지 안내 · 푸터)
support/index.html    지원 허브 (문의 메일 · 앱별 지원 링크 · 공통 FAQ)   ← 스토어 "지원 URL" 로 사용 가능
privacy/index.html    개인정보·약관 허브 (앱별 문서 표 + 이 사이트의 방침)
404.html              없는 주소로 들어왔을 때
assets/apps.js        ★ 앱 데이터 단일 소스 — 앱 추가/상태 변경은 여기만
assets/site.js        언어 토글(KO/EN) + apps.js 렌더링
assets/site.css       스타일 (토큰은 :root, 다크 모드는 prefers-color-scheme)
assets/icons/*.png    앱 아이콘 (384px)
assets/og.png         링크 미리보기 이미지 1200×630
favicon.svg · robots.txt · sitemap.xml · app-ads.txt · .nojekyll
```

## 앱 추가 / 상태 바꾸기

`assets/apps.js` 의 배열에 객체 하나를 추가하거나 `status` 를 바꿉니다.

- `status`: `'live'` 출시 → 스토어 버튼이 링크가 됨 / `'review'` 심사 중 / `'soon'` 준비 중 (링크 없이 표시만)
- iOS 링크는 `https://apps.apple.com/app/id<ASC 앱 ID>` 형식 — 국가에 관계없이 열립니다.
- 아이콘은 `assets/icons/<id>.png` 에 넣고 `icon: '/assets/icons/<id>.png'` 로 지정. 문의 메일은 전 앱 공통(`site.js` 의 `SITE.email`); 앱별 예외는 `contact` 필드
  (1024px 원본을 `sips -Z 384 in.png --out assets/icons/<id>.png` 로 줄이면 됩니다).
- 문구는 `{ ko: '…', en: '…' }` 두 언어로. 링크도 언어별로 다르면 같은 형식으로 쓸 수 있습니다.

홈 · 지원 · 개인정보 페이지가 같은 데이터를 읽으므로 한 번만 고치면 됩니다.

## 언어

기본값은 브라우저 언어(ko → 한국어, 그 외 영어). 우상단 토글로 바꾸면 localStorage 에 저장됩니다.
공유용 고정 링크: `https://dsm0829.github.io/?lang=en` / `?lang=ko`

사이트 공통 문구(히어로, 섹션 제목, FAQ 등)는 `assets/site.js` 의 `I18N` 사전에 있습니다.

## 로컬 미리보기

```
python3 -m http.server 8765 --directory .
```
→ http://localhost:8765/ (절대 경로 `/assets/...` 를 쓰므로 루트에서 띄워야 합니다)
