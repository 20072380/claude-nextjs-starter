import Link from "next/link";

import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

// 대시보드 상단 바: 사이드바 토글, 현재 위치(Breadcrumb), 테마 전환, 사용자 영역
// TODO: 실제 인증을 붙일 때 사용자 정보와 메뉴(DropdownMenu)로 교체한다.
export function DashboardHeader() {
  return (
    <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger />
      {/* 기본 self-stretch가 높이를 덮어쓰므로 self-auto로 해제한다. */}
      <Separator
        orientation="vertical"
        className="mr-2 data-vertical:h-4 data-vertical:self-auto"
      />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage>대시보드</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="ml-auto flex items-center gap-2">
        <ThemeToggle />
        <Link
          href="/login"
          aria-label="로그인 화면으로 이동"
          className={buttonVariants({ variant: "ghost", size: "icon" })}
        >
          <Avatar size="sm">
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </header>
  );
}
