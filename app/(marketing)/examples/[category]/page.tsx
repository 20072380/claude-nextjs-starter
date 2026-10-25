import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { ExampleCard } from "@/components/examples/example-card";
import { PageHeader } from "@/components/shared/page-header";
import { Skeleton } from "@/components/ui/skeleton";
import { categories, getCategory } from "@/examples/categories";
import { getExamplesByCategory } from "@/examples/registry";

type CategoryPageProps = PageProps<"/examples/[category]">;

// 모든 카테고리를 빌드 시 정적으로 생성한다.
export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);

  return category
    ? { title: `${category.title} 예제`, description: category.description }
    : {};
}

// 카테고리 콘텐츠를 불러오는 동안 보여줄 자리표시자(App Shell에 포함된다).
// 실제 콘텐츠(헤더 + 예제 카드 여러 개 + 하단 이동 nav)와 비슷한 높이로 구성해
// 콘텐츠로 교체될 때 레이아웃 시프트가 생기지 않도록 한다.
function CategorySkeleton() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-5 w-80 max-w-full" />
      </div>
      {Array.from({ length: 3 }, (_, index) => (
        <div key={index} className="space-y-3">
          <div className="space-y-1">
            <Skeleton className="h-7 w-40" />
            <Skeleton className="h-5 w-64 max-w-full" />
          </div>
          <Skeleton className="h-9 w-40" />
          <Skeleton className="h-48 w-full" />
        </div>
      ))}
      <div className="border-t pt-6">
        <Skeleton className="h-5 w-full" />
      </div>
    </div>
  );
}

// params를 최상단에서 await하면 App Shell 생성이 막혀 즉시 내비게이션이 불가능해진다.
// 그래서 params Promise를 그대로 넘기고, await는 Suspense 경계 안쪽에서 수행한다.
export default function ExampleCategoryPage({ params }: CategoryPageProps) {
  return (
    <Suspense fallback={<CategorySkeleton />}>
      <CategoryContent params={params} />
    </Suspense>
  );
}

async function CategoryContent({ params }: Pick<CategoryPageProps, "params">) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const items = getExamplesByCategory(category.slug);
  const index = categories.findIndex((item) => item.slug === category.slug);
  const prev = categories[index - 1];
  const next = categories[index + 1];

  return (
    <div className="space-y-10">
      <PageHeader
        title={`${category.title} 예제`}
        description={category.description}
      />
      {items.map((example) => (
        <ExampleCard key={example.id} example={example} />
      ))}
      <nav
        aria-label="카테고리 이동"
        className="flex items-center justify-between border-t pt-6 text-sm"
      >
        {prev ? (
          <Link
            href={`/examples/${prev.slug}`}
            className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
          >
            <ChevronLeft className="size-4" />
            {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/examples/${next.slug}`}
            className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
          >
            {next.title}
            <ChevronRight className="size-4" />
          </Link>
        ) : null}
      </nav>
    </div>
  );
}
