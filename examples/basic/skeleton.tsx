import { Skeleton } from "@/components/ui/skeleton";

// 데이터를 불러오는 동안 레이아웃을 유지하는 로딩 자리표시자
export default function SkeletonExample() {
  return (
    <div className="flex items-center gap-4">
      <Skeleton className="size-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-48" />
        <Skeleton className="h-4 w-32" />
      </div>
    </div>
  );
}
