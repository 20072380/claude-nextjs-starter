import Link from "next/link";

import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

// 랜딩 페이지 히어로 영역
export function Hero() {
  return (
    <Section className="pt-16 md:pt-28">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <Badge variant="secondary">Next.js 16 · App Router</Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          빠르게 시작하는
          <br />
          모던 웹 스타터킷
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          {siteConfig.description}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/dashboard" className={buttonVariants({ size: "lg" })}>
            대시보드 보기
          </Link>
          <Link
            href="/login"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            로그인 예시
          </Link>
        </div>
      </div>
    </Section>
  );
}
