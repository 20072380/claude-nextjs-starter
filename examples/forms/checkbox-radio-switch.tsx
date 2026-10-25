"use client";

import { useState } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";

// 선택 입력: 체크박스(다중), 라디오(단일), 스위치(즉시 적용 on/off)
export default function CheckboxRadioSwitchExample() {
  const [agree, setAgree] = useState(false);
  const [plan, setPlan] = useState("free");
  const [notify, setNotify] = useState(true);

  return (
    <div className="w-full max-w-xs space-y-6">
      <Label>
        <Checkbox checked={agree} onCheckedChange={setAgree} />
        이용약관에 동의합니다
      </Label>

      <RadioGroup value={plan} onValueChange={setPlan}>
        <Label>
          <RadioGroupItem value="free" />
          무료 플랜
        </Label>
        <Label>
          <RadioGroupItem value="pro" />
          프로 플랜
        </Label>
      </RadioGroup>

      <Label className="justify-between">
        알림 받기
        <Switch checked={notify} onCheckedChange={setNotify} />
      </Label>

      <p className="text-sm text-muted-foreground">
        약관 {agree ? "동의" : "미동의"} · 플랜 {plan} · 알림 {notify ? "켜짐" : "꺼짐"}
      </p>
    </div>
  );
}
