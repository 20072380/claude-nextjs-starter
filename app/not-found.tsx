import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

// 404 페이지
export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-1 flex-col items-center justify-center gap-4 p-6 text-center">
      <p className="text-sm font-medium text-muted-foreground">404</p>
      <h1 className="text-3xl font-bold tracking-tight">
        페이지를 찾을 수 없습니다
      </h1>
      <p className="text-muted-foreground">
        주소가 잘못되었거나 페이지가 이동되었을 수 있습니다.
      </p>
      <Link href="/" className={buttonVariants()}>
        홈으로 돌아가기
      </Link>
    </div>
  );
}
