import { AppSidebar } from "@/components/layout/app-sidebar";
import { DashboardHeader } from "@/components/layout/dashboard-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

// 대시보드 레이아웃: 사이드바 + 상단 바 + 본문
// Cache Components 환경에서 cookies()를 읽으면 prerender가 막히므로 defaultOpen만 사용한다.
export default function DashboardLayout({ children }: LayoutProps<"/">) {
  return (
    <SidebarProvider defaultOpen>
      <AppSidebar />
      <SidebarInset>
        <DashboardHeader />
        <div className="flex-1 p-4 md:p-6">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
