import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// 다이얼로그: 화면 중앙에 뜨는 모달. 닫기 버튼은 DialogClose의 render prop으로 만든다.
export default function DialogExample() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        프로필 수정
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>프로필 수정</DialogTitle>
          <DialogDescription>
            표시될 이름을 변경합니다. 완료되면 저장을 눌러 주세요.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-2">
          <Label htmlFor="dialog-name">이름</Label>
          <Input id="dialog-name" defaultValue="홍길동" />
        </div>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>취소</DialogClose>
          <DialogClose render={<Button />}>저장</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
