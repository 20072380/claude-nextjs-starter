"use client";

import { useState } from "react";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const totalPages = 5;

// 페이지네이션: 현재 페이지를 상태로 관리한다. 실제 목록에서는 href를 ?page= 쿼리로 바꾼다.
export default function PaginationExample() {
  const [page, setPage] = useState(1);

  // 링크 기본 이동을 막고 상태만 변경한다.
  function go(next: number) {
    return (event: React.MouseEvent) => {
      event.preventDefault();
      setPage(Math.min(Math.max(next, 1), totalPages));
    };
  }

  return (
    <div className="space-y-3 text-center">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" onClick={go(page - 1)} />
          </PaginationItem>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (value) => (
              <PaginationItem key={value}>
                <PaginationLink
                  href="#"
                  isActive={value === page}
                  onClick={go(value)}
                >
                  {value}
                </PaginationLink>
              </PaginationItem>
            ),
          )}
          <PaginationItem>
            <PaginationNext href="#" onClick={go(page + 1)} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <p className="text-sm text-muted-foreground">
        현재 {page} / {totalPages} 페이지
      </p>
    </div>
  );
}
