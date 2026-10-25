"use client";

import { SearchX } from "lucide-react";
import { useState } from "react";
import { useDebounceValue } from "usehooks-ts";

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const members = [
  { name: "김하늘", role: "관리자", email: "haneul@example.com" },
  { name: "이도윤", role: "개발자", email: "doyun@example.com" },
  { name: "박서연", role: "디자이너", email: "seoyeon@example.com" },
  { name: "최지호", role: "개발자", email: "jiho@example.com" },
  { name: "정수아", role: "기획자", email: "sua@example.com" },
];

// 검색 필터: 입력이 멈춘 뒤 300ms 후에만 필터링한다(useDebounceValue).
// 서버 검색이라면 debouncedQuery가 바뀔 때만 API를 호출하면 된다.
export default function TableSearchExample() {
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounceValue(query, 300);

  const keyword = debouncedQuery.trim().toLowerCase();
  const filtered = members.filter(
    (member) =>
      member.name.toLowerCase().includes(keyword) ||
      member.role.toLowerCase().includes(keyword) ||
      member.email.toLowerCase().includes(keyword),
  );

  return (
    <div className="w-full space-y-3">
      <Input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="이름, 역할, 이메일로 검색"
        aria-label="멤버 검색"
        className="max-w-xs"
      />
      {filtered.length > 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>이름</TableHead>
              <TableHead>역할</TableHead>
              <TableHead>이메일</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((member) => (
              <TableRow key={member.email}>
                <TableCell className="font-medium">{member.name}</TableCell>
                <TableCell>{member.role}</TableCell>
                <TableCell>{member.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <SearchX />
            </EmptyMedia>
            <EmptyTitle>검색 결과가 없습니다</EmptyTitle>
            <EmptyDescription>다른 검색어로 다시 시도해 보세요.</EmptyDescription>
          </EmptyHeader>
        </Empty>
      )}
    </div>
  );
}
