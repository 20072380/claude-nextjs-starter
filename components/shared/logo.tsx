import { Layers } from "lucide-react";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  // 텍스트에만 적용할 클래스 (예: 사이드바 접힘 시 숨김)
  textClassName?: string;
};

// 사이트 로고: 헤더, 푸터, 인증 화면에서 공통으로 사용한다.
export function Logo({ className, textClassName }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2 font-semibold", className)}
    >
      <span className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
        <Layers className="size-4" />
      </span>
      <span className={textClassName}>{siteConfig.name}</span>
    </Link>
  );
}
