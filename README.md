# Next.js 16 웹 스타터킷

Next.js 16 App Router 기반의 모던 웹 스타터킷입니다. 마케팅, 인증, 대시보드 레이아웃과 다크모드, 폼 검증, 토스트까지 갖춰져 있어 클론 후 바로 개발을 시작할 수 있습니다.

## 기술 스택

| 구분 | 기술 |
|---|---|
| 프레임워크 | Next.js 16 (App Router, Turbopack, Cache Components) |
| 언어 | TypeScript (strict) |
| 스타일 | Tailwind CSS v4 |
| UI | shadcn/ui (base-nova, Base UI 기반) |
| 아이콘 | lucide-react |
| 테마 | next-themes |
| 토스트 | sonner |
| 폼 | react-hook-form + zod + @hookform/resolvers |
| 공용 훅 | usehooks-ts |
| 에러 경계 | react-error-boundary |
| 코드 하이라이트 (예제 페이지) | shiki |

## 시작하기

```bash
npm install
npm run dev
```

http://localhost:3000 에서 확인합니다.

| 명령어 | 설명 |
|---|---|
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 프로덕션 빌드 |
| `npm run start` | 빌드 결과 실행 |
| `npm run lint` | ESLint 검사 |

## 제공 화면

| 경로 | 레이아웃 | 설명 |
|---|---|---|
| `/` | 마케팅 | 랜딩 페이지 (헤더, 푸터, 모바일 메뉴) |
| `/login` | 인증 | 로그인 폼 (react-hook-form + zod + 토스트 예시) |
| `/dashboard` | 대시보드 | 사이드바 + 상단 바 (접기, 모바일 Sheet 지원) |
| `/examples` | 마케팅 | 동작하는 예제와 소스 코드 탐색 (상단 메뉴 "예제") |
| `/examples/[category]` | 마케팅 | 카테고리별 예제 9개 페이지 |
| 그 외 | - | `not-found`, `error`, `global-error`, `loading` |

## 예제 페이지

`/examples`에서 스타터킷의 기능을 **실제로 동작하는 예제**와 **소스 코드**로 확인할 수 있습니다. 각 예제는 "미리보기 | 코드" 탭을 제공하고, 코드 탭의 복사 버튼으로 소스를 복사할 수 있습니다.

| 카테고리 | 내용 |
|---|---|
| 테마 | 테마 전환, 색상 토큰 |
| 기본 UI | 버튼, 배지, 카드, 아바타, 스켈레톤, 스피너, Kbd, 구분선 |
| 내비게이션 | 브레드크럼, 탭, 드롭다운 메뉴, 페이지네이션 |
| 오버레이 | 다이얼로그, 알림 다이얼로그, 시트, 팝오버, 툴팁 |
| 피드백 | 토스트, 알림, 진행률, 빈 상태, 에러 경계 |
| 폼 | 입력, 셀렉트, 체크박스·라디오·스위치, 입력 그룹, react-hook-form + zod 폼 |
| 데이터 표시 | 테이블, 검색 테이블, 아코디언, 접이식 영역, 스크롤 영역 |
| 레이아웃 | Container·Section, PageHeader, SiteHeader, SiteFooter, AuthShell, AppSidebar |
| 훅·유틸 | usehooks-ts 훅, cn 유틸, lucide 아이콘 |

### 동작 원리

코드 탭의 소스는 문자열을 복사해 둔 것이 아니라, 빌드 시 **예제 파일을 직접 읽어** shiki로 하이라이트한 결과입니다(`lib/example-source.ts`). 미리보기와 코드가 항상 일치합니다.

### 예제 추가하기

1. `examples/<카테고리>/<이름>.tsx`에 `export default` 컴포넌트를 만듭니다. 복사해 바로 쓸 수 있도록 import를 포함해 자체 완결적으로 작성합니다.
2. `examples/registry.ts`의 `examples` 배열에 `id`, `category`, `title`, `description`, `file`, `component`를 등록합니다.
3. 새 카테고리는 `examples/categories.ts`에 추가합니다. 목차와 사이드 내비게이션에 자동 반영됩니다.

전체 화면 레이아웃처럼 미리보기가 어려운 경우 `component` 대신 `liveHref`를 지정하면 소스와 실제 화면 링크로 제공됩니다.

> 개발 서버(`npm run dev`)에서는 예제 소스 결과가 캐시되어, 예제 파일을 수정해도 코드 탭이 바로 갱신되지 않을 수 있습니다. 서버를 재시작하거나 새로고침하세요. 프로덕션 빌드에는 영향이 없습니다.

## 폴더 구조와 계층

의존 방향은 위에서 아래로만 흐릅니다. 아래 계층이 위 계층을 import하지 않습니다.

| 계층 | 위치 | 역할 |
|---|---|---|
| L0 기반 | `app/globals.css`, `config/`, `lib/` | 디자인 토큰, 사이트 설정, 유틸, zod 스키마 |
| L1 Provider | `components/providers/` | 전역 컨텍스트 (`ThemeProvider`) |
| L2 UI 프리미티브 | `components/ui/` | shadcn 컴포넌트 (직접 수정 최소화) |
| L3 공용 컴포넌트 | `components/shared/` | 프리미티브 조합 (`Logo`, `ThemeToggle`, `PageHeader`) |
| L4 레이아웃 | `components/layout/` | 페이지 뼈대 (`SiteHeader`, `AppSidebar`, `AuthShell` 등) |
| L5 기능/섹션 | `components/landing/`, `components/forms/` | 특정 화면 조각 |
| L6 라우트 | `app/` | 조립만 담당 (route group별 `layout.tsx`) |

```
app/
  layout.tsx                 루트 (ThemeProvider, TooltipProvider, Toaster, 메타데이터)
  (marketing)/               헤더 + 푸터 레이아웃
  (auth)/                    중앙 정렬 인증 레이아웃
  (dashboard)/               사이드바 레이아웃
components/
  ui/ shared/ layout/ landing/ forms/ providers/ examples/
examples/                    예제 소스 (registry.ts, categories.ts, 카테고리별 폴더)
config/                      site.ts (사이트 정보), nav.ts (메뉴)
hooks/                       use-mobile.ts (usehooks-ts 기반)
lib/                         utils.ts (cn), validations/ (zod 스키마)
```

## 설치된 shadcn 컴포넌트 (우선순위)

| 우선순위 | 컴포넌트 |
|---|---|
| P0 기본 | button, input, textarea, label, badge, separator, card, skeleton, spinner, avatar, kbd |
| P1 내비/오버레이/피드백 | dropdown-menu, sheet, dialog, tooltip, tabs, breadcrumb, scroll-area, sonner, alert, sidebar |
| P2 폼 | field, select, checkbox, radio-group, switch, input-group |
| P3 데이터 표시 | table, pagination, empty, progress, alert-dialog, accordion, popover, collapsible |

필요한 컴포넌트는 그때그때 추가합니다.

```bash
npx shadcn@latest add calendar chart command
```

> 이 프로젝트는 Radix가 아닌 Base UI 기반(base-nova)입니다. 트리거 요소를 교체할 때 `asChild` 대신 `render` prop을 사용합니다.
> 예: `<DropdownMenuTrigger render={<Button />}>`

## 커스터마이징

- **사이트 정보**: `config/site.ts`에서 이름, 설명, URL을 수정합니다. 배포 시 `NEXT_PUBLIC_SITE_URL` 환경변수로 URL을 지정합니다.
- **메뉴**: `config/nav.ts`의 `mainNav`(마케팅)와 `dashboardNav`(사이드바)에 항목을 추가합니다.
- **테마 색상**: `app/globals.css`의 CSS 변수(`:root`, `.dark`)를 수정합니다. [shadcn 테마](https://ui.shadcn.com/themes)의 값을 그대로 붙여넣을 수 있습니다.
- **폼 추가**: `lib/validations/`에 zod 스키마를 만들고 `components/forms/login-form.tsx`를 참고합니다.
- **인증 연동**: `components/forms/login-form.tsx`와 `components/layout/dashboard-header.tsx`의 `TODO` 주석 위치를 실제 인증 로직으로 교체합니다.

## 라이브러리 선택 기준

직접 구현하지 않고 검증된 라이브러리를 사용합니다.

| 기능 | 라이브러리 |
|---|---|
| 다크모드, 시스템 테마, flash 방지 | next-themes |
| 토스트 | sonner |
| 폼 상태와 검증 | react-hook-form, zod |
| media query 등 공용 훅 | usehooks-ts (필요한 훅은 직접 만들지 않고 여기서 가져옵니다) |
| 클래스 병합 | cn (`lib/utils.ts`) |

표준 세트에 포함하지 않은 확장 후보는 다음과 같습니다. 필요할 때 추가하세요.

- 서버 상태 관리: `@tanstack/react-query`
- URL 쿼리 상태: `nuqs`
- 환경변수 검증: `@t3-oss/env-nextjs`
- 날짜 처리: `date-fns`

## Next.js 16 주의사항

- `cacheComponents`가 켜져 있어 서버 컴포넌트에서 `new Date()`, `cookies()`, `headers()`를 직접 쓰면 prerender가 막힙니다. 필요하면 `<Suspense>`로 감싸거나 `use cache`를 사용하세요.
- `error.tsx`의 재시도 함수는 `reset`이 아닌 `retry`입니다.
- `middleware`는 `proxy.ts`로 이름이 바뀌었습니다.
- 자세한 내용은 `node_modules/next/dist/docs/`의 가이드를 참고하세요.

## 설치 시 참고

`@hookform/resolvers`의 선택적 peer 의존성 때문에 새 패키지를 추가할 때 `ERESOLVE` 오류가 나면 `--legacy-peer-deps` 옵션을 붙여 설치합니다. 이미 `package-lock.json`에 해결된 상태이므로 `npm install`은 그대로 동작합니다.
