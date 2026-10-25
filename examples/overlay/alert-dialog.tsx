"use client";

import { useState } from "react";
import { toast } from "sonner";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

// 알림 다이얼로그: 삭제처럼 되돌리기 어려운 작업 전에 사용자 확인을 받는다.
// AlertDialogCancel은 자동으로 닫히지만 AlertDialogAction은 일반 버튼이므로,
// open 상태를 직접 제어해 작업 후 닫아 준다.
export default function AlertDialogExample() {
  const [open, setOpen] = useState(false);

  function handleDelete() {
    // TODO: 실제 삭제 API 호출로 교체한다. 실패 시에는 닫지 않고 에러를 안내한다.
    setOpen(false);
    toast.success("삭제되었습니다.");
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger render={<Button variant="destructive" />}>
        계정 삭제
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>정말 삭제하시겠습니까?</AlertDialogTitle>
          <AlertDialogDescription>
            이 작업은 되돌릴 수 없으며 모든 데이터가 영구적으로 삭제됩니다.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>취소</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>삭제</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
