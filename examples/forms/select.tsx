"use client";

import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// items를 Select에 넘기면 선택된 항목의 label이 트리거에 표시된다.
const frameworks = [
  { value: "next", label: "Next.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
  { value: "nuxt", label: "Nuxt" },
];

export default function SelectExample() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      <Select items={frameworks} value={value} onValueChange={setValue}>
        <SelectTrigger className="w-56">
          <SelectValue placeholder="프레임워크 선택" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {frameworks.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <p className="text-sm text-muted-foreground">
        선택한 값: {value ?? "없음"}
      </p>
    </div>
  );
}
