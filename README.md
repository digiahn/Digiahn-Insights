# Argon Intelligence — Jekyll Blog Site

- **GitHub Pages**: https://digiahn.github.io (GitHub 계정: DigiAHN)
- **네이버 블로그**: https://blog.naver.com/argon (네이버 계정: argon)

글로벌 시장·지정학 분석 포트폴리오 사이트.  
네이버 블로그(argon)와 연계 운영.

## 로컬 개발 환경

```bash
# 1. 의존성 설치
bundle install

# 2. 로컬 서버 실행 (http://localhost:4000)
bundle exec jekyll serve --livereload
```

## 새 포스트 작성

`_posts/` 폴더에 `YYYY-MM-DD-제목.md` 형식으로 파일 생성:

```yaml
---
layout: post
title: "포스트 제목"
subtitle: "부제목 (선택)"
category: "글로벌 시장 분석"   # 4개 카테고리 중 선택
tags: [태그1, 태그2]
date: 2024-06-15
reading_time: 8                  # 예상 읽기 시간(분)
key_point: "핵심 인사이트 한 줄" # 상단 강조 박스에 표시
excerpt: "목록에 표시될 요약문"
---

본문 내용 (Markdown)
```

### 카테고리 목록
- `글로벌 시장 분석`
- `지정학 리스크`
- `에너지·차세대 기술`
- `위클리 브리핑`

## 배포

`main` 브랜치에 push하면 GitHub Actions가 자동으로 빌드 & 배포합니다.

### GitHub Pages 설정 (최초 1회)
1. GitHub 저장소 → Settings → Pages
2. Source: **GitHub Actions** 선택

## 파일 구조

```
argon-blog/
├── _config.yml          # 사이트 설정
├── _layouts/
│   ├── default.html     # 기본 레이아웃
│   └── post.html        # 포스트 레이아웃
├── _includes/
│   ├── nav.html         # 네비게이션
│   └── footer.html      # 푸터
├── _posts/              # 포스트 파일들
├── assets/
│   ├── css/main.scss    # 스타일시트
│   └── js/main.js       # 자바스크립트
├── index.html           # 홈페이지
├── posts.html           # 아카이브
├── about.md             # 소개 페이지
└── .github/workflows/   # 자동 배포
```

## 커스터마이징

### 네이버 블로그 링크 변경
`_config.yml`의 `naver_blog` 값 수정:
```yaml
naver_blog: "https://blog.naver.com/argon"
```

### 마켓 티커 데이터
`index.html` 내 `.ticker-track` 섹션에서 종목명·가격·등락 수정.  
(추후 실시간 API 연동으로 업그레이드 가능)
