import { AlertCircle, Info } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// 페이지 안에 고정으로 표시하는 알림. 첫 번째 자식 아이콘이 제목 왼쪽에 배치된다.
export default function AlertExample() {
  return (
    <div className="w-full max-w-lg space-y-4">
      <Alert>
        <Info />
        <AlertTitle>알려드립니다</AlertTitle>
        <AlertDescription>
          새로운 버전이 배포되었습니다. 변경 사항을 확인해 보세요.
        </AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertCircle />
        <AlertTitle>결제에 실패했습니다</AlertTitle>
        <AlertDescription>
          카드 정보를 확인한 뒤 다시 시도해 주세요.
        </AlertDescription>
      </Alert>
    </div>
  );
}
