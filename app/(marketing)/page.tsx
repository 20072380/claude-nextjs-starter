import { Features } from "@/components/landing/features";
import { Hero } from "@/components/landing/hero";
import { QuickStart } from "@/components/landing/quick-start";
import { TechStack } from "@/components/landing/tech-stack";

// 랜딩 페이지: 섹션 컴포넌트를 조립만 한다.
export default function HomePage() {
  return (
    <>
      <Hero />
      <TechStack />
      <Features />
      <QuickStart />
    </>
  );
}
