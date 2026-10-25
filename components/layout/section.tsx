import type { ComponentProps } from "react";

import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

// 페이지 섹션: 상하 여백과 컨테이너를 함께 제공한다.
export function Section({
  className,
  children,
  ...props
}: ComponentProps<"section">) {
  return (
    <section className={cn("py-12 md:py-20", className)} {...props}>
      <Container>{children}</Container>
    </section>
  );
}
