"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { NavItem } from "@/config/nav";
import { cn } from "@/lib/utils";

type MainNavProps = {
  items: NavItem[];
  className?: string;
};

// 현재 경로가 메뉴 항목에 해당하는지 판단한다.
// 홈("/")은 정확히 일치할 때만, 그 외는 하위 경로(/examples/*)도 활성으로 본다.
// 해시 링크(/#features)는 경로와 일치할 수 없으므로 항상 비활성이다.
function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

// 데스크톱 상단 메뉴: 현재 경로와 일치하는 항목을 강조한다.
export function MainNav({ items, className }: MainNavProps) {
  const pathname = usePathname();

  return (
    <nav className={cn("items-center gap-6 text-sm", className)}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "transition-colors hover:text-foreground",
            isActivePath(pathname, item.href)
              ? "font-medium text-foreground"
              : "text-muted-foreground",
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
