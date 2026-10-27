# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 명령어

```bash
npm run dev     # 개발 서버 (Turbopack, http://localhost:3000)
npm run build   # 프로덕션 빌드
npm run start   # 빌드 결과 실행
npm run lint    # ESLint (eslint-config-next)
```

테스트 러너는 설정되어 있지 않습니다. 변경 검증은 `npm run lint`, `npm run build`(타입 검사 + prerender 검증), 필요 시 Playwright MCP(`.mcp.json`)로 화면 확인을 합니다.

새 패키지 설치 시 `ERESOLVE` 오류가 나면 `--legacy-peer-deps`를 붙입니다(`@hookform/resolvers`의 선택적 peer 의존성 문제).

## 작업 워크플로

코드 구현(기능 추가, 버그 수정, 리팩터링, 예제/컴포넌트 추가)을 마치면 **커밋 전에 `code-reviewer` 서브에이전트(`.claude/agents/code-reviewer.md`)를 실행**해 변경사항을 리뷰받습니다. 문서/설정만 바꾼 경우는 생략할 수 있습니다. 리뷰에서 나온 "필수 수정" 항목은 반영한 뒤 마무리하고, 리뷰어는 코드를 직접 고치지 않으므로 수정은 메인 에이전트가 합니다.

`code-reviewer` 다음에 UI 변경(페이지, 레이아웃, 컴포넌트, 예제)이 있으면 `ui-verifier` 서브에이전트(`.claude/agents/ui-verifier.md`)를 실행해 라이트/다크, 모바일/데스크톱 화면과 콘솔 에러를 확인합니다. 이 에이전트도 코드를 직접 고치지 않으며, 지적 사항의 수정은 메인 에이전트가 합니다.

## Next.js 16 주의사항

`AGENTS.md`의 지침대로, 이 버전은 기존 지식과 다릅니다. 코드를 쓰기 전에 `node_modules/next/dist/docs/`의 관련 가이드를 확인하세요. 이 프로젝트에서 특히 중요한 점:

- `next.config.ts`에서 `cacheComponents: true`, `partialPrefetching: true`가 켜져 있습니다. 서버 컴포넌트에서 `new Date()`, `cookies()`, `headers()`, 그리고 `params` 같은 런타임 데이터를 최상단에서 `await`하면 prerender/App Shell 생성이 막힙니다. `<Suspense>`로 감싸고 `await`는 경계 안쪽에서 하거나 `"use cache"`를 사용합니다. 대표 사례는 `app/(marketing)/examples/[category]/page.tsx`입니다(`params` Promise를 그대로 내려보내고 `CategoryContent` 안에서 await).
- 라우트 props 타입은 전역 헬퍼 `PageProps<"/examples/[category]">`를 사용합니다.
- `error.tsx`의 재시도 함수는 `reset`이 아니라 `retry`입니다.
- `middleware`는 `proxy.ts`로 이름이 바뀌었습니다.
- `next.config.ts`에 `experimental.agentFeedback`이 켜져 있어 `next dev`가 `AGENTS.md`의 피드백 블록을 자동으로 다시 씁니다. 해당 블록을 지우지 말고 변경이 생기면 함께 커밋합니다.

## 아키텍처

### 계층 구조 (의존 방향은 위→아래만 허용)

| 계층 | 위치 | 역할 |
|---|---|---|
| L0 | `app/globals.css`, `config/`, `lib/` | 디자인 토큰, 사이트/메뉴 설정, 유틸, zod 스키마 |
| L1 | `components/providers/` | 전역 컨텍스트 (`ThemeProvider`) |
| L2 | `components/ui/` | shadcn 프리미티브 (직접 수정 최소화) |
| L3 | `components/shared/` | 프리미티브 조합 (`Logo`, `ThemeToggle`, `PageHeader`) |
| L4 | `components/layout/` | 페이지 뼈대 (`SiteHeader`, `AppSidebar`, `AuthShell` 등) |
| L5 | `components/landing/`, `components/forms/`, `components/examples/` | 특정 화면 조각 |
| L6 | `app/` | 조립만 담당 |

아래 계층이 위 계층을 import하면 안 됩니다. `app/`에는 로직을 두지 않고 route group별 `layout.tsx`로 뼈대를 조립합니다: `(marketing)`은 헤더+푸터, `(auth)`는 중앙 정렬, `(dashboard)`는 사이드바 레이아웃.

### shadcn / Base UI

shadcn 스타일은 `base-nova`이며 Radix가 아니라 **Base UI** 기반입니다. 트리거 요소를 교체할 때 `asChild` 대신 `render` prop을 씁니다(예: `<DropdownMenuTrigger render={<Button />}>`). 컴포넌트 추가는 `npx shadcn@latest add <name>`이며, 별칭은 `@/components`, `@/lib`, `@/hooks`(`@/*` → 프로젝트 루트)입니다.

### 예제 시스템 (`/examples`)

예제 페이지는 여러 파일에 걸쳐 동작하므로 구조를 알아두어야 합니다.

- `examples/<카테고리>/<이름>.tsx`: `export default` 컴포넌트. 복사해서 바로 쓸 수 있도록 import를 포함해 자체 완결적으로 작성합니다.
- `examples/registry.ts`: 모든 예제를 `examples` 배열에 **수동 등록**하고(컴포넌트를 직접 import), `ExampleMeta`(`id`, `category`, `title`, `description`, `file`, `component?`, `liveHref?`)로 기술합니다. 전체 화면 레이아웃처럼 미리보기가 어려우면 `component` 대신 `liveHref`를 지정합니다.
- `examples/categories.ts`: 카테고리 정의. 목차와 사이드 내비게이션에 자동 반영되고 `generateStaticParams`의 소스입니다.
- `lib/example-source.ts`: 코드 탭용 소스를 `fs`로 직접 읽어 shiki로 하이라이트합니다(`"use cache"`). 읽기 허용 경로는 `examples/`, `components/`로 제한되며 `..`는 거부됩니다. 개발 서버에서는 캐시 때문에 예제 파일을 수정해도 코드 탭이 바로 갱신되지 않을 수 있으니 서버 재시작/새로고침이 필요합니다.

### 설정 중심 커스터마이징

- `config/site.ts`: 사이트 이름/설명/URL (`NEXT_PUBLIC_SITE_URL`)
- `config/nav.ts`: `mainNav`(마케팅), `dashboardNav`(사이드바)
- 테마 색상: `app/globals.css`의 CSS 변수(`:root`, `.dark`)
- 폼: `lib/validations/`에 zod 스키마, `components/forms/login-form.tsx`가 react-hook-form + zod + sonner 패턴의 기준 구현입니다. 인증은 `TODO` 주석 위치(`login-form.tsx`, `dashboard-header.tsx`)에서 연동합니다.

### 라이브러리 선택

직접 구현하지 않고 기존 라이브러리를 씁니다: 테마 `next-themes`, 토스트 `sonner`, 폼 `react-hook-form`+`zod`, 공용 훅 `usehooks-ts`(필요한 훅은 직접 만들지 않음), 클래스 병합 `cn`(`lib/utils.ts`).
