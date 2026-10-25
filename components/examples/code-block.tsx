import { CopyButton } from "@/components/examples/copy-button";
import type { ExampleSource } from "@/lib/example-source";

type CodeBlockProps = {
  file: string;
  source: ExampleSource;
};

// 하이라이트된 소스 코드 블록: 파일 경로 헤더 + 복사 버튼 + 스크롤 영역
// html은 프로젝트 내부 파일을 shiki로 변환한 신뢰 가능한 결과다.
export function CodeBlock({ file, source }: CodeBlockProps) {
  return (
    <div className="overflow-hidden rounded-lg border bg-muted/40">
      <div className="flex items-center justify-between border-b px-3 py-1.5">
        <span className="truncate font-mono text-xs text-muted-foreground">
          {file}
        </span>
        <CopyButton code={source.code} />
      </div>
      <div
        className="max-h-96 overflow-auto p-4 text-[13px] leading-relaxed [&_pre]:bg-transparent"
        dangerouslySetInnerHTML={{ __html: source.html }}
      />
    </div>
  );
}
