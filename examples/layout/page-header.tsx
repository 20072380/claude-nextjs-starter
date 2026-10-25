import { Plus } from "lucide-react";

import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";

// 페이지 제목 영역: 제목, 설명, 우측 액션(children)을 한 번에 구성한다.
export default function PageHeaderExample() {
  return (
    <PageHeader
      title="프로젝트"
      description="진행 중인 프로젝트를 관리합니다."
      className="w-full"
    >
      <Button>
        <Plus />
        새 프로젝트
      </Button>
    </PageHeader>
  );
}
