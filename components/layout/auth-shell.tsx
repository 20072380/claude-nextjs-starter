import type { ReactNode } from "react";

import { Logo } from "@/components/shared/logo";
import { ThemeToggle } from "@/components/shared/theme-toggle";

// 인증 화면 공통 셸: 로고와 콘텐츠(주로 Card)를 화면 중앙에 배치한다.
export function AuthShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center gap-6 bg-muted/40 p-6">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <Logo className="text-lg" />
      <div className="w-full max-w-sm">{children}</div>
    </div>
  );
}
