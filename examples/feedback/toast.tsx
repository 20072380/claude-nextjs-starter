"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

// sonner 토스트: Toaster는 루트 레이아웃(app/layout.tsx)에 이미 있으므로 어디서든 toast()만 호출하면 된다.
export default function ToastExample() {
  function showPromise() {
    // 실제로는 API 호출 Promise를 넘기면 로딩 → 성공/실패가 자동으로 전환된다.
    const task = new Promise<void>((resolve) => setTimeout(resolve, 1500));
    toast.promise(task, {
      loading: "저장하는 중...",
      success: "저장되었습니다.",
      error: "저장에 실패했습니다.",
    });
  }

  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="outline" onClick={() => toast("기본 알림입니다.")}>
        기본
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.success("성공적으로 처리되었습니다.")}
      >
        성공
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.error("문제가 발생했습니다.")}
      >
        에러
      </Button>
      <Button variant="outline" onClick={() => toast.warning("주의가 필요합니다.")}>
        경고
      </Button>
      <Button variant="outline" onClick={showPromise}>
        Promise
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast("파일을 삭제했습니다.", {
            action: {
              label: "실행 취소",
              onClick: () => toast.success("복구했습니다."),
            },
          })
        }
      >
        실행 취소 액션
      </Button>
    </div>
  );
}
