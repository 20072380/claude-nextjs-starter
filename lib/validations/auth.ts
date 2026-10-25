import { z } from "zod";

// 로그인 폼 검증 스키마: 클라이언트(react-hook-form)와 서버에서 공용으로 사용한다.
export const loginSchema = z.object({
  email: z.email("올바른 이메일 형식이 아닙니다."),
  password: z.string().min(8, "비밀번호는 8자 이상이어야 합니다."),
});

export type LoginValues = z.infer<typeof loginSchema>;
