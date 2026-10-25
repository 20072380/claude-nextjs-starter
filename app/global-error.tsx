"use client";

import { useEffect } from "react";

// 루트 레이아웃 에러 경계: 루트 레이아웃을 대체하므로 자체 html/body가 필요하다.
// 전역 스타일과 앱 테마가 적용되지 않아 인라인 스타일만 사용한다.
export default function GlobalError({
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
    <html lang="ko">
      <body
        style={{
          margin: 0,
          minHeight: "100svh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          fontFamily: "system-ui, sans-serif",
          colorScheme: "light dark",
        }}
      >
        <h1 style={{ fontSize: "1.5rem", margin: 0 }}>문제가 발생했습니다</h1>
        <button
          type="button"
          onClick={() => retry()}
          style={{ padding: "0.5rem 1rem", cursor: "pointer" }}
        >
          다시 시도
        </button>
      </body>
    </html>
  );
}
