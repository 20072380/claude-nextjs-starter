"use client";

import { Download, Mail, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

// 아이콘, 로딩, 비활성화, 링크 버튼 패턴
export default function ButtonStatesExample() {
  const [loading, setLoading] = useState(false);

  function handleClick() {
    setLoading(true);
    // 실제로는 API 호출 등 비동기 작업이 끝난 뒤 로딩을 해제한다.
    setTimeout(() => setLoading(false), 1500);
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button>
        <Mail />
        이메일로 로그인
      </Button>
      <Button variant="outline" size="icon" aria-label="추가">
        <Plus />
      </Button>
      <Button onClick={handleClick} disabled={loading}>
        {loading ? <Spinner /> : <Download />}
        {loading ? "다운로드 중..." : "다운로드"}
      </Button>
      <Button disabled>비활성화</Button>
      {/* 링크를 버튼처럼 보이게 할 때는 buttonVariants를 사용한다. */}
      <Link href="/examples" className={buttonVariants({ variant: "secondary" })}>
        링크 버튼
      </Link>
    </div>
  );
}
