import Link from "next/link";

import { Container } from "@/components/layout/container";
import { MainNav } from "@/components/layout/main-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Logo } from "@/components/shared/logo";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { mainNav } from "@/config/nav";
import { cn } from "@/lib/utils";

// 마케팅 영역 상단 헤더: 스크롤 시에도 상단에 고정된다.
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="flex h-14 items-center gap-6">
        <MobileNav items={mainNav} className="md:hidden" />
        <Logo />
        <MainNav items={mainNav} className="hidden md:flex" />
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/login"
            className={cn(buttonVariants({ variant: "ghost" }), "hidden sm:inline-flex")}
          >
            로그인
          </Link>
          <Link href="/dashboard" className={buttonVariants()}>
            시작하기
          </Link>
        </div>
      </Container>
    </header>
  );
}
