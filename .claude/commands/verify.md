---
description: 변경사항을 lint → build → 화면 확인 순서로 검증합니다
argument-hint: [확인할 경로 (예: /examples/forms)]
---

현재 변경사항을 검증해주세요. 이 프로젝트에는 테스트 러너가 없으므로 아래 순서로 확인합니다. 확인할 경로: $ARGUMENTS

## 절차

1. **변경 범위 파악**: `git status`와 `git diff --stat`으로 바뀐 파일을 확인하고, 영향받는 라우트를 추정합니다. 인자로 경로가 주어지면 그 경로를 우선합니다.
2. **계층 위반 점검**: 변경된 파일의 import가 의존 방향(L0 → L6, 아래 계층이 위 계층을 import 금지)을 어기지 않는지 확인합니다. `app/`에 로직이 들어갔는지도 봅니다.
3. **`npm run lint`** 실행. 오류가 있으면 원인을 수정하고 다시 실행합니다.
4. **`npm run build`** 실행 (타입 검사 + prerender 검증).
   - `cacheComponents` 관련 오류(서버 컴포넌트 최상단의 `params`/`cookies()`/`headers()` await, `new Date()`)가 나오면 `<Suspense>` 경계 안쪽으로 옮기거나 `"use cache"`를 사용하도록 수정합니다. 참고 사례: `app/(marketing)/examples/[category]/page.tsx`.
5. **화면 확인(선택)**: UI 변경이 있으면 `npm run dev`를 백그라운드로 띄우고 Playwright MCP로 해당 경로를 열어 스냅샷과 콘솔 오류를 확인합니다. 확인 후 개발 서버를 종료합니다.
6. **결과 요약**: 단계별 통과/실패와 수정한 내용을 표로 보고합니다. 실행하지 못한 단계는 이유와 함께 명시하고, 통과했다고 단정하지 않습니다.

## 주의

- 검증 중 `AGENTS.md`의 피드백 블록이 자동으로 바뀔 수 있습니다(`experimental.agentFeedback`). 지우지 말고 변경 사실만 알려줍니다.
- 커밋은 하지 않습니다. 커밋이 필요하면 `/git:commit`을 안내합니다.
