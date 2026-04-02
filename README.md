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
