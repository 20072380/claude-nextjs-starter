import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

// 팝오버: 트리거 근처에 뜨는 작은 패널. 간단한 설정 입력에 적합하다.
export default function PopoverExample() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        크기 설정
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <PopoverHeader>
          <PopoverTitle>크기</PopoverTitle>
          <PopoverDescription>레이어의 너비를 지정합니다.</PopoverDescription>
        </PopoverHeader>
        <div className="space-y-2">
          <Label htmlFor="popover-width">너비</Label>
          <Input id="popover-width" defaultValue="100%" />
        </div>
      </PopoverContent>
    </Popover>
  );
}
