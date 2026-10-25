"use client";

import { useState } from "react";
import { useInterval } from "usehooks-ts";

import { Button } from "@/components/ui/button";
import { Progress, ProgressLabel, ProgressValue } from "@/components/ui/progress";

// 진행률 바: usehooks-ts의 useInterval로 값을 주기적으로 올린다(delay가 null이면 멈춘다).
export default function ProgressExample() {
  const [value, setValue] = useState(0);
  const [running, setRunning] = useState(false);

  useInterval(
    () => {
      setValue((prev) => {
        if (prev >= 100) {
          setRunning(false);
          return 100;
        }
        return prev + 10;
      });
    },
    running ? 300 : null,
  );

  function start() {
    setValue(0);
    setRunning(true);
  }

  return (
    <div className="w-full max-w-sm space-y-4">
      <Progress value={value}>
        <ProgressLabel>업로드</ProgressLabel>
        <ProgressValue />
      </Progress>
      <Button variant="outline" onClick={start} disabled={running}>
        {running ? "진행 중..." : "시작"}
      </Button>
    </div>
  );
}
