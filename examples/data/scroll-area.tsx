import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const tags = Array.from({ length: 30 }, (_, index) => `v1.${30 - index}.0`);

// 스크롤 영역: 높이를 제한한 목록에 일관된 스크롤바 스타일을 적용한다.
export default function ScrollAreaExample() {
  return (
    <ScrollArea className="h-48 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-3 text-sm font-semibold">릴리스</h4>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
