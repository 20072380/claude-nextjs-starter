import type { Metadata } from "next";

import { PageHeader } from "@/components/shared/page-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata: Metadata = {
  title: "대시보드",
};

// 대시보드 개요: 실제 데이터 연결 전까지 Skeleton으로 자리를 표시한다.
export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="개요"
        description="서비스의 주요 지표를 한눈에 확인합니다."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {["방문자", "가입자", "전환율"].map((label) => (
          <Card key={label}>
            <CardHeader>
              <CardDescription>{label}</CardDescription>
              <CardTitle>
                <Skeleton className="h-8 w-24" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-full" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
