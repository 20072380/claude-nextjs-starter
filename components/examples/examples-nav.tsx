"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

type ExamplesNavProps = {
  // 서버 컴포넌트에서 직렬화 가능한 값(slug, title)만 전달받는다.
  items: { slug: string; title: string }[];
};

// 예제 카테고리 내비게이션: 모바일은 가로 스크롤 칩, lg 이상은 세로 목록
export function ExamplesNav({ items }: ExamplesNavProps) {
  const pathname = usePathname();

  const links = [
    { href: "/examples", title: "전체 보기" },
    ...items.map((item) => ({
      href: `/examples/${item.slug}`,
      title: item.title,
    })),
  ];

  return (
    <nav
      aria-label="예제 카테고리"
      className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden"
    >
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors",
              isActive
                ? "bg-muted font-medium text-foreground"
                : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
            )}
          >
            {link.title}
          </Link>
        );
      })}
    </nav>
  );
}
