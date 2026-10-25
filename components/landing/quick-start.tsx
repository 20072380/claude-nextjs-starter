import { Section } from "@/components/layout/section";

const commands = `npm install
npm run dev
npx shadcn@latest add [component]`;

// 빠른 시작 안내
export function QuickStart() {
  return (
    <Section className="bg-muted/40">
      <div className="mx-auto max-w-2xl space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight">빠른 시작</h2>
        <p className="text-muted-foreground">
          의존성을 설치하고 개발 서버를 실행하세요.
        </p>
        <pre className="overflow-x-auto rounded-lg border bg-background p-4 text-left font-mono text-sm">
          <code>{commands}</code>
        </pre>
      </div>
    </Section>
  );
}
