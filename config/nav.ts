import { LayoutDashboard, type LucideIcon } from "lucide-react";

export type NavItem = {
  title: string;
  href: string;
};

export type SidebarNavItem = NavItem & {
  icon: LucideIcon;
};

export type SidebarNavGroup = {
  label: string;
  items: SidebarNavItem[];
};

// 마케팅 헤더/푸터 메뉴
export const mainNav: NavItem[] = [
  { title: "홈", href: "/" },
  { title: "기능", href: "/#features" },
  { title: "기술 스택", href: "/#tech-stack" },
  { title: "예제", href: "/examples" },
];

// 대시보드 사이드바 메뉴: 페이지를 추가할 때 항목을 이곳에 등록한다.
export const dashboardNav: SidebarNavGroup[] = [
  {
    label: "메인",
    items: [{ title: "개요", href: "/dashboard", icon: LayoutDashboard }],
  },
];
