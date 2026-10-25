"use client";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useCounter, useToggle } from "usehooks-ts";

// useToggle: boolean 토글, useCounter: 증감/초기화 헬퍼를 제공한다.
export default function UseToggleCounterExample() {
  const [on, toggle] = useToggle(false);
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-3 text-sm">
        <Switch checked={on} onCheckedChange={toggle} aria-label="토글" />
        <span>{on ? "켜짐" : "꺼짐"}</span>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" onClick={decrement}>
          -1
        </Button>
        <span className="w-10 text-center text-lg font-bold tabular-nums">
          {count}
        </span>
        <Button variant="outline" onClick={increment}>
          +1
        </Button>
        <Button variant="ghost" onClick={reset}>
          초기화
        </Button>
      </div>
    </div>
  );
}
