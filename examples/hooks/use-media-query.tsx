"use client";

import { Monitor, Smartphone } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";

import { Badge } from "@/components/ui/badge";

// useMediaQuery: CSS 미디어 쿼리 일치 여부를 반환한다. 브라우저 창 크기를 바꿔 보세요.
// 서버에서는 알 수 없으므로 initializeWithValue: false로 마운트 후에 값을 읽는다.
export default function UseMediaQueryExample() {
  const isDesktop = useMediaQuery("(min-width: 768px)", {
    initializeWithValue: false,
  });
  const isDark = useMediaQuery("(prefers-color-scheme: dark)", {
    initializeWithValue: false,
  });

  return (
    <div className="flex flex-col items-center gap-3">
      <Badge variant="secondary" className="h-7 px-3 text-sm">
        {isDesktop ? <Monitor /> : <Smartphone />}
        {isDesktop ? "데스크톱 (768px 이상)" : "모바일 (768px 미만)"}
      </Badge>
      <p className="text-sm text-muted-foreground">
        OS 다크 모드: {isDark ? "켜짐" : "꺼짐"}
      </p>
    </div>
  );
}
