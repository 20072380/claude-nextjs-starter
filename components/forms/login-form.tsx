"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { loginSchema, type LoginValues } from "@/lib/validations/auth";

// 로그인 폼: react-hook-form + zod + shadcn Field 조합의 기본 패턴 예시
export function LoginForm() {
  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  async function onSubmit() {
    try {
      // TODO: 실제 인증 로직으로 교체한다. 예: onSubmit(values: LoginValues)로 값을 받아
      // await signIn(values) (Server Action 또는 API 호출)
      toast.success("로그인 요청이 처리되었습니다. (데모)");
    } catch (error) {
      console.error("로그인 실패", error);
      // 서버 에러는 폼 하단에 표시하고 토스트로도 알린다.
      // 연동 후에는 인증 실패와 시스템 오류를 구분해 문구를 선택한다.
      form.setError("root", {
        message: "로그인을 처리하지 못했습니다. 입력 내용을 확인해 주세요.",
      });
      toast.error("로그인에 실패했습니다. 잠시 후 다시 시도해 주세요.");
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>로그인</CardTitle>
        <CardDescription>이메일과 비밀번호를 입력해 주세요.</CardDescription>
      </CardHeader>
      {/* form이 Card와 자식 사이에 끼므로 Card의 gap을 동일하게 적용한다. */}
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        noValidate
        className="flex flex-col gap-4"
      >
        <CardContent>
          <FieldGroup>
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>이메일</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    type="email"
                    autoComplete="email"
                    placeholder="name@example.com"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid ? (
                    <FieldError errors={[fieldState.error]} />
                  ) : null}
                </Field>
              )}
            />
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>비밀번호</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    type="password"
                    autoComplete="current-password"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid ? (
                    <FieldError errors={[fieldState.error]} />
                  ) : null}
                </Field>
              )}
            />
            {form.formState.errors.root ? (
              <FieldError errors={[form.formState.errors.root]} />
            ) : null}
          </FieldGroup>
        </CardContent>
        <CardFooter className="flex-col gap-3">
          <Button
            type="submit"
            className="w-full"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? <Spinner /> : null}
            로그인
          </Button>
          <Link
            href="/"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            홈으로 돌아가기
          </Link>
        </CardFooter>
      </form>
    </Card>
  );
}
