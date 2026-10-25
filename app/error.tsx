"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";

// 세그먼트 에러 경계: retry()로 다시 렌더링을 시도한다.
export default function Error({
  error,
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  useEffect(() => {
    // TODO: 에러 리포팅 서비스(Sentry 등)로 전송한다.
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-svh flex-1 flex-col items-center justify-center gap-4 p-6 text-center">
      <h1 className="text-3xl font-bold tracking-tight">문제가 발생했습니다</h1>
      <p className="text-muted-foreground">
        잠시 후 다시 시도해 주세요. 문제가 계속되면 관리자에게 문의해 주세요.
      </p>
      <Button onClick={() => retry()}>다시 시도</Button>
    </div>
  );
}
