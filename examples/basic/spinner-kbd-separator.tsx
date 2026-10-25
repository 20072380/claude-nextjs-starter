import { Kbd } from "@/components/ui/kbd";
import { Separator } from "@/components/ui/separator";
import { Spinner } from "@/components/ui/spinner";

// 스피너, 키보드 단축키 표시(Kbd), 구분선
export default function SpinnerKbdSeparatorExample() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Spinner />
        불러오는 중...
      </div>
      <Separator />
      <p className="text-sm">
        사이드바는 <Kbd>Ctrl</Kbd> + <Kbd>B</Kbd> 로 열고 닫을 수 있습니다.
      </p>
      <div className="flex h-5 items-center gap-3 text-sm">
        <span>홈</span>
        <Separator orientation="vertical" className="data-vertical:self-auto" />
        <span>예제</span>
        <Separator orientation="vertical" className="data-vertical:self-auto" />
        <span>문서</span>
      </div>
    </div>
  );
}
