import { ExternalLink } from "lucide-react";
import Link from "next/link";

import { CodeBlock } from "@/components/examples/code-block";
import { buttonVariants } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { ExampleMeta } from "@/examples/registry";
import { getExampleSource } from "@/lib/example-source";

type ExampleCardProps = {
  example: ExampleMeta;
};

// 예제 카드: 제목/설명 + [미리보기 | 코드] 탭
// 두 패널을 모두 마운트(keepMounted)해 탭을 오가도 미리보기 상태가 유지된다.
export async function ExampleCard({ example }: ExampleCardProps) {
  const source = await getExampleSource(example.file);
  const Preview = example.component;

  return (
    <section id={example.id} className="scroll-mt-20 space-y-3">
      <div className="space-y-1">
        <h2 className="text-lg font-semibold tracking-tight">
          <a href={`#${example.id}`} className="hover:underline">
            {example.title}
          </a>
        </h2>
        <p className="text-sm text-muted-foreground">{example.description}</p>
      </div>
      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">미리보기</TabsTrigger>
          <TabsTrigger value="code">코드</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" keepMounted>
          <div className="flex min-h-40 flex-col items-center justify-center gap-4 rounded-lg border p-6">
            {Preview ? <Preview /> : null}
            {example.liveHref ? (
              <Link
                href={example.liveHref}
                className={buttonVariants({ variant: "outline" })}
              >
                실제 화면 보기
                <ExternalLink />
              </Link>
            ) : null}
          </div>
        </TabsContent>
        <TabsContent value="code" keepMounted>
          <CodeBlock file={example.file} source={source} />
        </TabsContent>
      </Tabs>
    </section>
  );
}
