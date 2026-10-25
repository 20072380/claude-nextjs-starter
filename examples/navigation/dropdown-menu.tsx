"use client";

import { LogOut, Settings, User } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// 드롭다운 메뉴: 트리거는 render prop으로 Button을 지정한다.
export default function DropdownMenuExample() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        내 계정
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-44">
        <DropdownMenuGroup>
          <DropdownMenuLabel>계정</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => toast("프로필을 열었습니다.")}>
            <User />
            프로필
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => toast("설정을 열었습니다.")}>
            <Settings />
            설정
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          variant="destructive"
          onClick={() => toast.error("로그아웃했습니다.")}
        >
          <LogOut />
          로그아웃
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
