"use client";

import { useState } from "react";
import { useDebounceValue } from "usehooks-ts";

import { Input } from "@/components/ui/input";

// useDebounceValue: 값 변경이 멈춘 뒤 지정한 시간(500ms)이 지나야 갱신된다.
// 검색 API 호출처럼 입력마다 실행하면 비용이 큰 작업에 사용한다.
export default function UseDebounceValueExample() {
  const [text, setText] = useState("");
  const [debouncedText] = useDebounceValue(text, 500);

  return (
    <div className="w-full max-w-sm space-y-3">
      <Input
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="입력해 보세요"
        aria-label="디바운스 입력"
      />
      <dl className="space-y-1 text-sm">
        <div className="flex justify-between">
          <dt className="text-muted-foreground">즉시 값</dt>
          <dd>{text || "-"}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-muted-foreground">디바운스 값 (500ms)</dt>
          <dd>{debouncedText || "-"}</dd>
        </div>
      </dl>
    </div>
  );
}
