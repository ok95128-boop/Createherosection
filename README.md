# 세금노트 - 세무 정보 블로그

자영업자와 프리랜서를 위한 세무 정보 웹 블로그입니다.

## 주요 기능

- ✅ GNB (글로벌 네비게이션 바)
- ✅ 히어로 섹션
- ✅ React Router 기반 라우팅
- ✅ 반응형 디자인
- ✅ Toss 스타일 라이트 테마

## 페이지 구조

- **홈** (`/`): 히어로 섹션 포함 메인 페이지
- **세금 정보** (`/articles`): 세금 정보 아티클 목록
- **세금 계산기** (`/tools`): 세금 계산 도구
- **자주 묻는 질문** (`/faq`): FAQ 페이지
- **문의하기** (`/contact`): 세무사 연결 페이지

## 기술 스택

- React 18
- React Router 7
- Tailwind CSS 4
- Vite 6
- TypeScript
- Lucide React (아이콘)

## 개발 시작하기

```bash
# 의존성 설치
pnpm install

# 개발 서버 시작
pnpm dev

# 빌드
pnpm build
```

## 프로젝트 구조

```
src/
├── app/
│   ├── components/     # 재사용 컴포넌트
│   │   ├── GNB.tsx
│   │   └── HeroSection.tsx
│   ├── pages/          # 페이지 컴포넌트
│   │   ├── HomePage.tsx
│   │   ├── ArticlesPage.tsx
│   │   ├── ToolsPage.tsx
│   │   ├── FAQPage.tsx
│   │   ├── ContactPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── App.tsx         # 앱 진입점
│   ├── Root.tsx        # 공통 레이아웃
│   └── routes.ts       # 라우팅 설정
└── styles/
    ├── index.css
    ├── tailwind.css
    ├── theme.css
    └── fonts.css
```

## 유지보수 가이드

### 새 페이지 추가하기

1. `src/app/pages/` 디렉토리에 새 페이지 컴포넌트 생성
2. `src/app/routes.ts`에 라우트 추가
3. `src/app/components/GNB.tsx`의 `NAV_ITEMS` 배열에 메뉴 항목 추가

### 상수 관리

- **GNB 메뉴**: `src/app/components/GNB.tsx` - `NAV_ITEMS`
- **히어로 텍스트**: `src/app/components/HeroSection.tsx` - 파일 상단 상수들
- **테마 색상**: `src/styles/theme.css`

## 라이선스

MIT