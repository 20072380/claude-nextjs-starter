import {
  Blocks,
  ClipboardCheck,
  Moon,
  ShieldCheck,
  Smartphone,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { Section } from "@/components/layout/section";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: Zap,
    title: "App Router",
    description: "Next.js 16 App Router와 Turbopack으로 빠르게 개발합니다.",
  },
  {
    icon: Moon,
    title: "다크모드",
    description: "next-themes로 라이트/다크/시스템 테마를 깜빡임 없이 지원합니다.",
  },
  {
    icon: ShieldCheck,
    title: "타입 안전",
    description: "TypeScript strict 모드와 zod 스키마로 안전하게 개발합니다.",
  },
  {
    icon: Smartphone,
    title: "반응형 레이아웃",
    description: "마케팅, 인증, 대시보드 레이아웃이 모바일까지 대응합니다.",
  },
  {
    icon: ClipboardCheck,
    title: "폼 검증",
    description: "react-hook-form과 zod, shadcn Field로 폼 패턴을 제공합니다.",
  },
  {
    icon: Blocks,
    title: "shadcn/ui",
    description: "우선순위별로 설치된 UI 컴포넌트를 바로 조합해 사용합니다.",
  },
];

// 주요 기능 카드 그리드
export function Features() {
  return (
    <Section id="features" className="scroll-mt-14 bg-muted/40">
      <div className="mb-10 space-y-2 text-center">
        <h2 className="text-3xl font-bold tracking-tight">주요 기능</h2>
        <p className="text-muted-foreground">
          프로젝트 시작에 필요한 기반이 준비되어 있습니다.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <feature.icon className="mb-2 size-6 text-primary" />
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </Section>
  );
}
