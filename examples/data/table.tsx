import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  { id: "INV-001", status: "결제 완료", method: "카드", amount: 250000 },
  { id: "INV-002", status: "대기", method: "계좌이체", amount: 150000 },
  { id: "INV-003", status: "실패", method: "카드", amount: 350000 },
];

// 상태에 따라 배지 색상을 달리한다.
function statusVariant(status: string) {
  if (status === "결제 완료") return "secondary" as const;
  if (status === "실패") return "destructive" as const;
  return "outline" as const;
}

// 기본 테이블: 서버 컴포넌트로도 사용할 수 있다.
export default function TableExample() {
  return (
    <Table>
      <TableCaption>최근 청구서 목록</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>번호</TableHead>
          <TableHead>상태</TableHead>
          <TableHead>결제 수단</TableHead>
          <TableHead className="text-right">금액</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">{invoice.id}</TableCell>
            <TableCell>
              <Badge variant={statusVariant(invoice.status)}>
                {invoice.status}
              </Badge>
            </TableCell>
            <TableCell>{invoice.method}</TableCell>
            <TableCell className="text-right">
              {invoice.amount.toLocaleString("ko-KR")}원
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
