# Argon Intelligence — Jekyll Blog Site

- **GitHub Pages**: https://digiahn.github.io (GitHub 계정: DigiAHN)
- **네이버 블로그**: https://blog.naver.com/argon (네이버 계정: argon)

글로벌 시장·지정학 분석 포트폴리오 사이트. 네이버 블로그(argon)와 연계 운영.

---

## 로컬 개발

```bash
# 의존성 설치
bundle install

# 로컬 서버 (http://localhost:4000)
bundle exec jekyll serve --livereload
```

## 새 포스트 작성

`_posts/` 폴더에 `YYYY-MM-DD-slug.md` 형식으로 생성:

```yaml
---
layout: post
title: "포스트 제목"
subtitle: "부제목 (선택)"
category: "글로벌 시장 분석"
tags: [태그1, 태그2]
date: 2025-04-01
reading_time: 7
key_point: "핵심 인사이트 한 줄"
excerpt: "목록 요약문"
---
본문 (Markdown)
```

### 카테고리 4종
- `글로벌 시장 분석`
- `지정학 리스크`
- `에너지·차세대 기술`
- `위클리 브리핑`

---

## GitHub Pages 배포

`main` 브랜치에 push → GitHub Actions 자동 빌드·배포.

### 최초 설정 (1회)
1. GitHub 저장소명: `digiahn.github.io`
2. Settings → Pages → Source: **GitHub Actions**

### 첫 push

```bash
git init
git remote add origin https://github.com/DigiAHN/digiahn.github.io.git
git add .
git commit -m "Initial launch: Argon Intelligence"
git push -u origin main
```

---

## 파일 구조

```
argon-blog/
├── _config.yml            # 사이트 설정 (URL, 카테고리 등)
├── _layouts/
│   ├── default.html       # 공통 레이아웃
│   └── post.html          # 포스트 레이아웃
├── _includes/
│   ├── nav.html           # 고정 네비게이션
│   ├── footer.html        # 푸터
│   ├── chart-ai-infra.html        # AI 인프라 도표
│   ├── chart-smr-race.html        # SMR 경쟁 도표
│   └── chart-us-china-tariff.html # 미·중 관세 도표
├── _posts/                # 포스트 파일 (5편)
├── _sass/
│   └── _variables.scss    # SCSS 변수
├── assets/
│   ├── css/main.scss      # 전체 스타일시트
│   ├── js/main.js         # 인터랙션 스크립트
│   └── images/favicon.svg # 파비콘
├── categories/index.html  # 카테고리 목록 페이지
├── index.html             # 홈페이지
├── posts.html             # 전체 아카이브
├── about.md               # 소개 페이지
├── Gemfile
└── .github/workflows/deploy.yml  # 자동 배포
```

---

## 수정 이력

| 버전 | 날짜 | 내용 |
|------|------|------|
| v1.0 | 2025.03 | 최초 구축 |
| v1.1 | 2025.03 | digiahn 계정으로 URL 변경 |
| v1.2 | 2025.03 | 포스트 4편 + 도표 3종 추가 |
| v1.3 | 2025.04 | 안정화 수정 (CSS 빌드, favicon, categories 페이지, 잘못된 폴더 제거) |

---

## Netlify CMS 관리자 화면 세팅 (최초 1회)

### 1단계 — Netlify에 사이트 등록

1. [netlify.com](https://netlify.com) 접속 → 무료 가입
2. **Add new site → Import an existing project**
3. GitHub 연결 → `digiahn.github.io` 저장소 선택
4. Build command: `jekyll build` / Publish directory: `_site`
5. **Deploy site** 클릭

### 2단계 — Netlify Identity 활성화

1. Netlify 대시보드 → **Site settings → Identity**
2. **Enable Identity** 클릭
3. **Git Gateway** → **Enable Git Gateway** 클릭
4. Registration: **Invite only** 선택 (본인만 접근)

### 3단계 — 관리자 계정 초대

1. Identity → **Invite users**
2. 본인 이메일 입력 → 초대 메일 확인 → 비밀번호 설정

### 4단계 — 관리자 화면 접속

브라우저에서 `https://digiahn.github.io/admin/` 접속
→ 이메일·비밀번호 로그인
→ 포스트 작성·편집·발행 가능!

---

### 관리자 화면에서 할 수 있는 것

| 메뉴 | 기능 |
|------|------|
| 📝 분석 포스트 | 글 작성·편집·삭제, 이미지 첨부 |
| 📰 위클리 브리핑 | 브리핑 전용 템플릿으로 빠른 작성 |
| 📄 페이지 | 소개 페이지 편집 |
| ⚙️ 사이트 설정 | 사이트 제목·설명·네이버 블로그 URL 변경 |
