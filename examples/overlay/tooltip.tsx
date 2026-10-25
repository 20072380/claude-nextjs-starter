import { Info } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

// 툴팁: 마우스를 올리거나 포커스하면 보조 설명을 보여준다.
// TooltipProvider는 루트 레이아웃(app/layout.tsx)에 이미 적용되어 있다.
export default function TooltipExample() {
  return (
    <Tooltip>
      <TooltipTrigger
        render={<Button variant="outline" size="icon" aria-label="도움말" />}
      >
        <Info />
      </TooltipTrigger>
      <TooltipContent>자세한 설명을 확인하세요</TooltipContent>
    </Tooltip>
  );
}
