import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ExampleCard } from "@/components/examples/example-card";
import { PageHeader } from "@/components/shared/page-header";
import { categories, getCategory } from "@/examples/categories";
import { getExamplesByCategory } from "@/examples/registry";

// 모든 카테고리를 빌드 시 정적으로 생성한다.
export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/examples/[category]">): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);

  return category
    ? { title: `${category.title} 예제`, description: category.description }
    : {};
}

export default async function ExampleCategoryPage({
  params,
}: PageProps<"/examples/[category]">) {
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
