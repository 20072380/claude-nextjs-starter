import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: string;
  description?: string;
  // 우측 액션 영역(버튼 등)
  children?: ReactNode;
  className?: string;
};

// 페이지 상단 제목 영역: 제목, 설명, 액션 슬롯을 일관된 형태로 제공한다.
export function PageHeader({
  title,
  description,
  children,
  className,
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between",
        className,
      )}
    >
      <div className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        {description ? (
          <p className="text-muted-foreground">{description}</p>
        ) : null}
      </div>
      {children ? <div className="flex items-center gap-2">{children}</div> : null}
    </div>
  );
}
