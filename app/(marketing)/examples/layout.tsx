import { ExamplesNav } from "@/components/examples/examples-nav";
import { Container } from "@/components/layout/container";
import { categories } from "@/examples/categories";

// 예제 영역 레이아웃: 좌측 카테고리 내비게이션 + 콘텐츠
export default function ExamplesLayout({ children }: LayoutProps<"/examples">) {
  // 클라이언트 컴포넌트에는 직렬화 가능한 값만 넘긴다(아이콘 컴포넌트 제외).
  const navItems = categories.map(({ slug, title }) => ({ slug, title }));

  return (
    <Container className="py-8 md:py-12">
      <div className="lg:grid lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-10">
        {/* sticky top을 최초 위치(헤더 3.5rem + 테두리 1px + 상단 패딩 3rem)와 같게 두어,
            스크롤 시작 시 카테고리 영역이 움찔 움직이지 않고 처음부터 고정되게 한다. */}
        <aside className="mb-6 lg:sticky lg:top-[calc(3.5rem+1px+3rem)] lg:mb-0 lg:self-start">
          <ExamplesNav items={navItems} />
        </aside>
        <div className="min-w-0">{children}</div>
      </div>
    </Container>
  );
}
