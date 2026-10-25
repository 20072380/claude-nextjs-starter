"use client";

import { ChevronsUpDown } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// 접이식 영역: 하나의 영역을 열고 닫는다. 열림 상태는 open/onOpenChange로 제어할 수 있다.
export default function CollapsibleExample() {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="w-full max-w-sm space-y-2">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold">즐겨찾기 3개</h4>
        <CollapsibleTrigger
          render={<Button variant="ghost" size="icon-sm" aria-label="펼치기" />}
        >
          <ChevronsUpDown />
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-3 py-2 text-sm">@next/core</div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-3 py-2 text-sm">@shadcn/ui</div>
        <div className="rounded-md border px-3 py-2 text-sm">@tailwindcss/vite</div>
      </CollapsibleContent>
    </Collapsible>
  );
}
