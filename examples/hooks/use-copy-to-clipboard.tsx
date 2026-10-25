"use client";

import { Copy } from "lucide-react";
import { toast } from "sonner";
import { useCopyToClipboard } from "usehooks-ts";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// useCopyToClipboard: 클립보드 복사와 마지막 복사 값을 제공한다. 복사 결과는 boolean으로 반환된다.
export default function UseCopyToClipboardExample() {
  const [copiedText, copy] = useCopyToClipboard();
  const command = "npx shadcn@latest add button";

  async function handleCopy() {
    const success = await copy(command);
    if (success) {
      toast.success("명령어를 복사했습니다.");
    } else {
      toast.error("복사에 실패했습니다.");
    }
  }

  return (
    <div className="w-full max-w-md space-y-3">
      <div className="flex gap-2">
        <Input readOnly value={command} aria-label="복사할 명령어" />
        <Button variant="outline" size="icon" onClick={handleCopy} aria-label="복사">
          <Copy />
        </Button>
      </div>
      <p className="text-sm text-muted-foreground">
        마지막으로 복사한 값: {copiedText ?? "없음"}
      </p>
    </div>
  );
}
