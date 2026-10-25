import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// 기본 입력 컴포넌트: Field로 라벨, 입력, 설명을 일관되게 묶는다.
export default function InputTextareaExample() {
  return (
    <FieldGroup className="w-full max-w-sm">
      <Field>
        <FieldLabel htmlFor="example-email">이메일</FieldLabel>
        <Input id="example-email" type="email" placeholder="name@example.com" />
        <FieldDescription>로그인에 사용하는 이메일 주소입니다.</FieldDescription>
      </Field>
      <Field>
        <FieldLabel htmlFor="example-bio">소개</FieldLabel>
        <Textarea id="example-bio" placeholder="자신을 간단히 소개해 주세요." />
      </Field>
      <Field>
        <FieldLabel htmlFor="example-disabled">비활성화</FieldLabel>
        <Input id="example-disabled" disabled defaultValue="수정할 수 없습니다" />
      </Field>
    </FieldGroup>
  );
}
