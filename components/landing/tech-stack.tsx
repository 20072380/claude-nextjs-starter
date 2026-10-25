import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";

const stacks = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind CSS v4",
  "shadcn/ui",
  "lucide-react",
  "next-themes",
  "sonner",
  "react-hook-form",
  "zod",
  "usehooks-ts",
];

// 사용 중인 기술 스택 배지 목록
export function TechStack() {
  return (
    <Section id="tech-stack" className="scroll-mt-14">
      <div className="mb-8 space-y-2 text-center">
        <h2 className="text-3xl font-bold tracking-tight">기술 스택</h2>
        <p className="text-muted-foreground">
          검증된 라이브러리 조합으로 구성했습니다.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {stacks.map((stack) => (
          <Badge key={stack} variant="outline" className="h-6 px-3 text-sm">
            {stack}
          </Badge>
        ))}
      </div>
    </Section>
  );
}
