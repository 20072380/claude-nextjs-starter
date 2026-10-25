"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

type Side = "top" | "right" | "bottom" | "left";

const sides: { value: Side; label: string }[] = [
  { value: "top", label: "위" },
  { value: "right", label: "오른쪽" },
  { value: "bottom", label: "아래" },
  { value: "left", label: "왼쪽" },
];

// 시트: 화면 가장자리에서 밀려 나오는 패널. side로 방향을 정한다.
export default function SheetExample() {
  const [open, setOpen] = useState(false);
  const [side, setSide] = useState<Side>("right");

  function openSheet(next: Side) {
    setSide(next);
    setOpen(true);
  }

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {sides.map((item) => (
          <Button
            key={item.value}
            variant="outline"
            onClick={() => openSheet(item.value)}
          >
            {item.label}
          </Button>
        ))}
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side={side}>
          <SheetHeader>
            <SheetTitle>
              {sides.find((item) => item.value === side)?.label} 시트
            </SheetTitle>
            <SheetDescription>
              필터, 상세 정보, 모바일 메뉴 등에 활용합니다.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}
