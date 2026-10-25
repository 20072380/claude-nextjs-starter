"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Logo } from "@/components/shared/logo";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { dashboardNav } from "@/config/nav";

// 대시보드 사이드바: config/nav.ts의 dashboardNav를 기반으로 메뉴를 그린다.
export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="px-4 py-3 group-data-[collapsible=icon]:px-2">
        <Logo textClassName="group-data-[collapsible=icon]:hidden" />
      </SidebarHeader>
      <SidebarContent>
        {dashboardNav.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      render={<Link href={item.href} />}
                      isActive={pathname === item.href}
                      tooltip={item.title}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
