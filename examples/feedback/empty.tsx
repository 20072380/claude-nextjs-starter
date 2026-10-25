import { Inbox } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

// 빈 상태: 데이터가 없을 때 다음 행동을 안내한다.
export default function EmptyExample() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Inbox />
        </EmptyMedia>
        <EmptyTitle>받은 메시지가 없습니다</EmptyTitle>
        <EmptyDescription>
          새 메시지가 도착하면 이곳에 표시됩니다.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline">새로고침</Button>
      </EmptyContent>
    </Empty>
  );
}
