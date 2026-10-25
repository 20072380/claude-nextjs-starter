"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// 라이트/다크/시스템 테마 전환 메뉴
export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<Button variant="ghost" size="icon" aria-label="테마 변경" />}
      >
        {/* 서버/클라이언트 렌더링 불일치를 피하려고 CSS(dark:)로 아이콘을 전환한다. */}
        <Sun className="dark:hidden" />
        <Moon className="hidden dark:block" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-36">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun />
          라이트
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon />
          다크
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Monitor />
          시스템
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
