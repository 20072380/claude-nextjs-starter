---
description: shadcn(Base UI) 컴포넌트를 추가하고 규칙에 맞는지 점검합니다
argument-hint: <컴포넌트 이름 (예: tabs, command)>
---

shadcn 컴포넌트를 추가해주세요. 인자: $ARGUMENTS

## 절차

1. 인자가 없으면 사용자에게 컴포넌트 이름을 물어봅니다. `components/ui/<이름>.tsx`가 이미 있으면 덮어쓰지 말고 알린 뒤 중단합니다.
2. 설치합니다: `npx shadcn@latest add <이름>`
   - `ERESOLVE` 오류가 나면 `--legacy-peer-deps`를 붙여 다시 실행합니다(`@hookform/resolvers` 선택적 peer 의존성 문제).
   - 별칭은 `components.json` 기준(`@/components`, `@/lib`, `@/hooks`)입니다.
3. 생성/변경된 파일을 `git status`로 확인합니다. 예상 밖의 기존 파일 덮어쓰기가 있으면 diff를 보여주고 알립니다.
4. **Base UI 규칙 점검**: 이 프로젝트의 shadcn 스타일은 `base-nova`로 Radix가 아니라 Base UI 기반입니다.
   - 트리거 교체는 `asChild`가 아니라 `render` prop입니다(예: `<DropdownMenuTrigger render={<Button />}>`).
   - 생성된 코드나 사용 예에 `asChild`가 있으면 `render`로 바꿉니다.
   - `components/ui/`는 직접 수정을 최소화합니다.
5. API가 불확실하면 `node_modules/@base-ui/react` 문서/타입이나 Context7로 현재 문서를 확인합니다.
6. `npm run lint`를 실행합니다.
7. 후속 작업을 제안합니다: 해당 컴포넌트의 예제가 필요하면 `/example-add <카테고리> <이름>`을 안내합니다.
8. 추가된 파일, 새로 설치된 의존성, 사용 시 주의점을 요약합니다.
