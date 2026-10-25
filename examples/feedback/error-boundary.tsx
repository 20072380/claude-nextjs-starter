"use client";

import { TriangleAlert } from "lucide-react";
import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { Button } from "@/components/ui/button";

// 렌더링 중 에러를 일으키는 컴포넌트
function BrokenWidget(): never {
  throw new Error("위젯 렌더링 중 에러가 발생했습니다.");
}

// react-error-boundary: 컴포넌트 단위로 에러를 격리하고 폴백 UI와 재시도를 제공한다.
// 페이지 전체 에러는 app/error.tsx, 루트 레이아웃 에러는 app/global-error.tsx가 처리한다.
export default function ErrorBoundaryExample() {
  const [broken, setBroken] = useState(false);

  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-4">
      <ErrorBoundary
        // 폴백에서 재시도하면 에러 원인을 해제해 정상 상태로 되돌린다.
        onReset={() => setBroken(false)}
        fallbackRender={({ error, resetErrorBoundary }) => (
          <div
            role="alert"
            className="w-full space-y-3 rounded-lg border border-destructive/40 p-4 text-sm"
          >
            <p className="flex items-center gap-2 font-medium text-destructive">
              <TriangleAlert className="size-4" />
              문제가 발생했습니다
            </p>
            <p className="text-muted-foreground">
              {error instanceof Error ? error.message : String(error)}
            </p>
            <Button size="sm" variant="outline" onClick={resetErrorBoundary}>
              다시 시도
            </Button>
          </div>
        )}
      >
        {broken ? (
          <BrokenWidget />
        ) : (
          <p className="text-sm text-muted-foreground">위젯이 정상 동작 중입니다.</p>
        )}
      </ErrorBoundary>
      <Button variant="destructive" onClick={() => setBroken(true)}>
        에러 발생시키기
      </Button>
    </div>
  );
}
