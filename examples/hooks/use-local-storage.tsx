"use client";

import { Minus, Plus } from "lucide-react";
import { useLocalStorage } from "usehooks-ts";

import { Button } from "@/components/ui/button";

// useLocalStorage: 값을 localStorage에 저장해 새로고침 후에도 유지한다.
// initializeWithValue: false는 서버 렌더링 결과와 맞추기 위해 마운트 후에 저장된 값을 읽는다(hydration 불일치 방지).
export default function UseLocalStorageExample() {
  const [count, setCount, removeCount] = useLocalStorage("example-count", 0, {
    initializeWithValue: false,
  });

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          size="icon"
          aria-label="감소"
          onClick={() => setCount((prev) => prev - 1)}
        >
          <Minus />
        </Button>
        <span className="w-12 text-center text-2xl font-bold tabular-nums">
          {count}
        </span>
        <Button
          variant="outline"
          size="icon"
          aria-label="증가"
          onClick={() => setCount((prev) => prev + 1)}
        >
          <Plus />
        </Button>
      </div>
      <p className="text-sm text-muted-foreground">
        페이지를 새로고침해도 값이 유지됩니다.
      </p>
      <Button variant="ghost" size="sm" onClick={removeCount}>
        초기화
      </Button>
    </div>
  );
}
