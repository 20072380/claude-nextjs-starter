"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { NavItem } from "@/config/nav";

type MobileNavProps = {
  items: NavItem[];
  className?: string;
};

// 모바일 메뉴: 햄버거 버튼으로 여는 Sheet. 링크 이동 시 자동으로 닫는다.
export function MobileNav({ items, className }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className={className}
            aria-label="메뉴 열기"
          />
        }
      >
        <Menu />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
          <SheetDescription className="sr-only">사이트 메뉴</SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm font-medium transition-colors hover:bg-muted"
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
