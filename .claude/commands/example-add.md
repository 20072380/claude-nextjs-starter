---
description: /examples 페이지에 새 예제를 추가하고 레지스트리에 등록합니다
argument-hint: <카테고리 slug> <예제 이름(kebab-case)>
---

`/examples`에 새 예제를 추가해주세요. 인자: $ARGUMENTS

## 절차

1. 인자를 `<카테고리> <이름>`으로 해석합니다. 누락되었거나 모호하면 사용자에게 먼저 물어봅니다.
2. `examples/categories.ts`를 읽어 카테고리 slug가 유효한지 확인합니다. 없는 slug면 사용 가능한 slug 목록을 보여주고 중단합니다.
3. `examples/<카테고리>/<이름>.tsx`가 이미 있으면 덮어쓰지 말고 알립니다.
4. 예제 컴포넌트를 작성합니다.
   - `export default` 컴포넌트이며, 복사해서 바로 쓸 수 있도록 import를 모두 포함해 자체 완결적으로 작성합니다.
   - UI는 `components/ui/`의 shadcn(Base UI) 컴포넌트를 사용합니다. 트리거 교체는 `asChild`가 아니라 `render` prop입니다.
   - 클래스 병합은 `cn`(`lib/utils.ts`), 훅은 `usehooks-ts`, 토스트는 `sonner`를 사용합니다. 직접 구현하지 않습니다.
   - 주석은 한국어, 들여쓰기는 2칸, 네이밍은 camelCase(컴포넌트는 PascalCase)입니다.
5. `examples/registry.ts`에 **수동 등록**합니다.
   - 상단에 컴포넌트를 import합니다(기존 import 정렬 순서 유지: 카테고리 → 파일명).
   - `examples` 배열에 `ExampleMeta`(`id`, `category`, `title`, `description`, `file`, `component`)를 추가합니다. `file`은 프로젝트 루트 기준 경로입니다.
   - 전체 화면 레이아웃처럼 미리보기가 어려우면 `component` 대신 `liveHref`를 지정합니다.
6. `npm run lint`를 실행하고 오류가 있으면 수정합니다.
7. 추가한 파일과 등록 위치를 요약해서 알려줍니다. 코드 탭은 캐시 때문에 개발 서버 재시작/새로고침이 필요할 수 있다는 점도 함께 안내합니다.

## 주의

- 새 카테고리는 이 커맨드의 범위가 아닙니다. 필요하면 `examples/categories.ts` 수정을 별도로 제안합니다.
- 서버 컴포넌트에서 `params`, `cookies()`, `new Date()`를 최상단에서 await/호출하지 않습니다(`cacheComponents` 제약).
