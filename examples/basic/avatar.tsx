import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar";

// 아바타 크기와 그룹
// 이미지가 있으면 <AvatarImage src="..." alt="..." />를 Avatar 안에 추가한다. 로드에 실패하면 Fallback이 표시된다.
export default function AvatarExample() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-3">
        <Avatar size="sm">
          <AvatarFallback>S</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>홍</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarFallback>김</AvatarFallback>
        </Avatar>
      </div>
      <AvatarGroup>
        <Avatar>
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>B</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>+3</AvatarGroupCount>
      </AvatarGroup>
    </div>
  );
}
