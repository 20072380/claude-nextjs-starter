import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Logo } from "@/components/shared/logo";
import { Separator } from "@/components/ui/separator";
import { mainNav } from "@/config/nav";
import { siteConfig } from "@/config/site";

// 마케팅 영역 하단 푸터
// 연도는 서버 렌더링 시 new Date()를 쓰면 prerender가 막히므로(Cache Components) 표기하지 않는다.
export function SiteFooter() {
  return (
    <footer className="border-t">
      <Container className="py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm space-y-3">
            <Logo />
            <p className="text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        <Separator className="my-6" />
        <p className="text-sm text-muted-foreground">
          © {siteConfig.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
