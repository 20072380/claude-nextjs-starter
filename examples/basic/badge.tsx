import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";

// 상태, 카테고리 표시에 쓰는 배지
export default function BadgeExample() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="secondary">
        <Check />
        완료
      </Badge>
    </div>
  );
}
