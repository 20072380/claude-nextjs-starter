"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";

// next-themes 래퍼: 클래스 기반 다크모드(globals.css의 .dark)와 시스템 테마를 지원한다.
export function ThemeProvider({
  children,
  ...props
}: ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
