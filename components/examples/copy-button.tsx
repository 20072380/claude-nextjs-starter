"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useCopyToClipboard, useTimeout } from "usehooks-ts";

import { Button } from "@/components/ui/button";

type CopyButtonProps = {
  code: string;
};

// 코드 복사 버튼: 복사 후 잠시 체크 아이콘으로 바꾸고 토스트로 알린다.
export function CopyButton({ code }: CopyButtonProps) {
  const [, copy] = useCopyToClipboard();
  const [copied, setCopied] = useState(false);

  // copied가 true일 때만 타이머를 동작시켜 1.5초 뒤 원래 아이콘으로 되돌린다.
  useTimeout(() => setCopied(false), copied ? 1500 : null);

  async function handleCopy() {
    const success = await copy(code);
    if (success) {
      setCopied(true);
      toast.success("코드를 복사했습니다.");
    } else {
      toast.error("복사에 실패했습니다. 브라우저 권한을 확인해 주세요.");
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      onClick={handleCopy}
      aria-label="코드 복사"
    >
      {copied ? <Check /> : <Copy />}
    </Button>
  );
}
