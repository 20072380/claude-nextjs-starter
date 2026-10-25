import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/shared/page-header";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { categories } from "@/examples/categories";
import { getExamplesByCategory } from "@/examples/registry";

export const metadata: Metadata = {
  title: "예제",
  description: "스타터킷의 모든 기능을 동작하는 예제와 소스 코드로 확인합니다.",
};

// 실제 페이지로 확인할 수 있는 화면 목록
const livePages = [
  { href: "/login", label: "로그인 화면" },
  { href: "/dashboard", label: "대시보드 화면" },
  { href: "/this-page-does-not-exist", label: "404 화면" },
];

// 예제 목차: 카테고리별 카드
export default function ExamplesPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        title="예제"
        description="스타터킷의 모든 기능을 동작하는 예제와 소스 코드로 확인하세요. 각 예제의 '코드' 탭에서 소스를 복사할 수 있습니다."
      />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {categories.map((category) => {
          const count = getExamplesByCategory(category.slug).length;
          return (
            <Link
              key={category.slug}
              href={`/examples/${category.slug}`}
              className="rounded-xl outline-none transition-opacity hover:opacity-90 focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <Card className="h-full">
                <CardHeader>
                  <category.icon className="mb-2 size-6 text-primary" />
                  <CardTitle>
                    {category.title}
                    <span className="ml-2 text-sm font-normal text-muted-foreground">
                      {count}개
                    </span>
                  </CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          );
        })}
      </div>
      <section className="space-y-3">
        <h2 className="text-lg font-semibold tracking-tight">실제 화면 보기</h2>
        <p className="text-sm text-muted-foreground">
          전체 화면 레이아웃과 상태 페이지는 실제 경로에서 확인합니다.
        </p>
        <div className="flex flex-wrap gap-2">
          {livePages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className={buttonVariants({ variant: "outline" })}
            >
              {page.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
