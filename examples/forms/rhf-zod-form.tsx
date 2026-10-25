"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";

// 검증 스키마: 실제 프로젝트에서는 lib/validations/에 두고 서버에서도 재사용한다.
const inquirySchema = z.object({
  name: z.string().min(2, "이름은 2자 이상이어야 합니다."),
  email: z.email("올바른 이메일 형식이 아닙니다."),
  type: z.string().min(1, "문의 유형을 선택해 주세요."),
  message: z.string().min(10, "문의 내용은 10자 이상 입력해 주세요."),
  agree: z.boolean().refine((value) => value, "개인정보 수집에 동의해 주세요."),
});

type InquiryValues = z.infer<typeof inquirySchema>;

const inquiryTypes = [
  { value: "general", label: "일반 문의" },
  { value: "bug", label: "버그 신고" },
  { value: "feature", label: "기능 제안" },
];

// react-hook-form + zod + shadcn Field로 만든 문의 폼
export default function RhfZodFormExample() {
  const form = useForm<InquiryValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: { name: "", email: "", type: "", message: "", agree: false },
  });

  async function onSubmit(values: InquiryValues) {
    try {
      // TODO: Server Action 또는 API 호출로 교체한다.
      console.info("문의 접수", values);
      toast.success("문의가 접수되었습니다.");
      form.reset();
    } catch (error) {
      console.error("문의 접수 실패", error);
      toast.error("접수에 실패했습니다. 잠시 후 다시 시도해 주세요.");
    }
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      noValidate
      className="w-full max-w-md"
    >
      <FieldGroup>
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="inquiry-name">이름</FieldLabel>
              <Input
                {...field}
                id="inquiry-name"
                autoComplete="name"
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid ? (
                <FieldError errors={[fieldState.error]} />
              ) : null}
            </Field>
          )}
        />
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="inquiry-email">이메일</FieldLabel>
              <Input
                {...field}
                id="inquiry-email"
                type="email"
                autoComplete="email"
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid ? (
                <FieldError errors={[fieldState.error]} />
              ) : null}
            </Field>
          )}
        />
        <Controller
          name="type"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>문의 유형</FieldLabel>
              {/* 선택 전에는 null을 넘겨 placeholder를 표시한다. */}
              <Select
                items={inquiryTypes}
                value={field.value || null}
                onValueChange={(value) => field.onChange(value ?? "")}
              >
                <SelectTrigger
                  className="w-full"
                  aria-invalid={fieldState.invalid}
                >
                  <SelectValue placeholder="유형을 선택하세요" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {inquiryTypes.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {fieldState.invalid ? (
                <FieldError errors={[fieldState.error]} />
              ) : null}
            </Field>
          )}
        />
        <Controller
          name="message"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="inquiry-message">문의 내용</FieldLabel>
              <Textarea
                {...field}
                id="inquiry-message"
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid ? (
                <FieldError errors={[fieldState.error]} />
              ) : null}
            </Field>
          )}
        />
        <Controller
          name="agree"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <Label>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
                개인정보 수집 및 이용에 동의합니다
              </Label>
              {fieldState.invalid ? (
                <FieldError errors={[fieldState.error]} />
              ) : null}
            </Field>
          )}
        />
        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? <Spinner /> : null}
          문의하기
        </Button>
      </FieldGroup>
    </form>
  );
}
