import { cn } from "@/lib/utils";

// cn: 조건부 클래스를 합치고, 충돌하는 Tailwind 클래스는 뒤에 오는 값으로 덮어쓴다.
// 컴포넌트의 className prop을 받아 기본 스타일과 합칠 때 사용한다.
const isActive = true;

const merged = cn("px-2 py-1 text-sm", "px-6"); // px-2 → px-6
const conditional = cn("rounded border px-3 py-1", isActive && "bg-primary text-primary-foreground");

export default function CnUtilityExample() {
  return (
    <div className="w-full max-w-md space-y-4 text-sm">
      <div className="space-y-1">
        <p className="text-muted-foreground">
          cn(&quot;px-2 py-1 text-sm&quot;, &quot;px-6&quot;)
        </p>
        <code className="block rounded bg-muted px-2 py-1">{merged}</code>
      </div>
      <div className="space-y-1">
        <p className="text-muted-foreground">조건부 클래스 (isActive = true)</p>
        <span className={conditional}>활성 상태 배지</span>
      </div>
    </div>
  );
}
