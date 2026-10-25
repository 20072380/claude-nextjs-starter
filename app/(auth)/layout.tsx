import { AuthShell } from "@/components/layout/auth-shell";

// 인증 영역 레이아웃
export default function AuthLayout({ children }: LayoutProps<"/">) {
  return <AuthShell>{children}</AuthShell>;
}
