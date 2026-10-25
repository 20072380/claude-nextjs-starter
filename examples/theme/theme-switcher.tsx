"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useIsClient } from "usehooks-ts";

import { Button } from "@/components/ui/button";

const themes = [
  { value: "light", label: "라이트", icon: Sun },
  { value: "dark", label: "다크", icon: Moon },
  { value: "system", label: "시스템", icon: Monitor },
];

// useTheme으로 테마를 읽고 바꾼다.
// 서버에서는 theme을 알 수 없으므로 useIsClient로 마운트 후에만 선택 상태를 표시한다(hydration 불일치 방지).
export default function ThemeSwitcherExample() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const isClient = useIsClient();

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-2">
        {themes.map(({ value, label, icon: Icon }) => (
          <Button
            key={value}
            variant={isClient && theme === value ? "default" : "outline"}
            onClick={() => setTheme(value)}
          >
            <Icon />
            {label}
          </Button>
        ))}
      </div>
      <p className="text-sm text-muted-foreground">
        현재 적용된 테마: {isClient ? resolvedTheme : "-"}
      </p>
    </div>
  );
}
