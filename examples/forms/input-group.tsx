"use client";

import { Eye, EyeOff, Search } from "lucide-react";
import { useState } from "react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";

// 입력 그룹: 아이콘, 텍스트, 버튼을 입력창 안쪽에 붙인다.
export default function InputGroupExample() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="w-full max-w-sm space-y-4">
      <InputGroup>
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <InputGroupInput placeholder="검색어를 입력하세요" />
      </InputGroup>

      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="example.com" />
      </InputGroup>

      <InputGroup>
        <InputGroupInput
          type={visible ? "text" : "password"}
          placeholder="비밀번호"
          defaultValue="secret-password"
        />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            size="icon-xs"
            aria-label={visible ? "비밀번호 숨기기" : "비밀번호 표시"}
            onClick={() => setVisible((prev) => !prev)}
          >
            {visible ? <EyeOff /> : <Eye />}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
