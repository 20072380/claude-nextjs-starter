import { Spinner } from "@/components/ui/spinner";

// 라우트 전환 중 표시되는 전역 로딩 UI
export default function Loading() {
  return (
    <div className="flex min-h-svh flex-1 items-center justify-center">
      <Spinner className="size-6 text-muted-foreground" />
    </div>
  );
}
