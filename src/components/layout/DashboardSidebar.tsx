
import React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Users, Calendar, Check, DollarSign, ChartBar, Settings, Home, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
  href: string;
}

const SidebarItem = ({ icon: Icon, label, isActive = false, href }: SidebarItemProps) => {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild className={cn(isActive && "bg-sidebar-accent text-sidebar-accent-foreground")}>
        <a href={href} className="flex items-center gap-3">
          <Icon className="h-5 w-5" />
          <span>{label}</span>
        </a>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

const DashboardSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="p-6 text-sidebar-foreground">
          <h1 className="text-xl font-bold">AdvisorHub</h1>
          <p className="text-sm text-sidebar-foreground/70">Financial Advisory Dashboard</p>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarItem icon={Home} label="Dashboard" isActive={true} href="/" />
              <SidebarItem icon={Users} label="Clients" href="/clients" />
              <SidebarItem icon={ChartBar} label="Investments" href="/investments" />
              <SidebarItem icon={Calendar} label="Meetings" href="/meetings" />
              <SidebarItem icon={Check} label="Tasks" href="/tasks" />
              <SidebarItem icon={DollarSign} label="Financials" href="/financials" />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarItem icon={Settings} label="Settings" href="/settings" />
              <SidebarItem icon={LogOut} label="Logout" href="/logout" />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashboardSidebar;
