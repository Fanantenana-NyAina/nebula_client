"use client";

import {
  Calendar,
  Home,
  Settings,
  Plus,
  CircleDot,
  Layers,
  LogOut,
  User,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";

export function AppSidebar() {
  const myGroups = [
    { name: "Boys Harmony", id: "1", color: "bg-cyan-500" },
    { name: "Pro Sortie ESC", id: "2", color: "bg-purple-500" },
  ];

  return (
    <Sidebar className="border-r border-white/5 bg-black/50 backdrop-blur-xl">
      <SidebarHeader className="h-16 flex items-center px-6 border-b border-white/5">
        <div className="flex items-center justify-center gap-1">
          <Image
            src="/MATCHUP_LOGO.png"
            alt="Logo_G"
            width={50}
            height={40}
            priority
          />
          <h1 className="tracking-[0.2em] text-[1.1rem] font-black text-white">
            MATCHUP
          </h1>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-4 py-6">
        <SidebarGroup>
          <SidebarGroupLabel className="text-white/30 font-bold text-[10px] uppercase tracking-widest mb-2">
            Platform
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="text-white/70 hover:text-white hover:bg-white/5 transition-all"
                >
                  <Link href="/home">
                    <Home className="w-4 h-4" />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="text-white/70 hover:text-white hover:bg-white/5"
                >
                  <Link href="/calendar">
                    <Calendar className="w-4 h-4" />
                    <span>My Availability</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-4">
          <SidebarGroupLabel className="text-white/30 text-[10px] uppercase tracking-widest mb-2 flex justify-between items-center">
            My Circles
            <Plus className="w-3 h-3 cursor-pointer hover:text-white transition-colors" />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* just mocking */}
              {myGroups.map((group) => (
                <SidebarMenuItem key={group.id}>
                  <SidebarMenuButton className="text-white/70 hover:text-white hover:bg-white/5 group">
                    <div
                      className={`w-2 h-2 rounded-full ${group.color} group-hover:animate-pulse`}
                    />
                    <span>{group.name}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-4">
          <SidebarGroupLabel className="text-white/30 text-[10px] uppercase tracking-widest mb-2">
            System
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="text-white/70 hover:text-white hover:bg-white/5">
                  <Settings className="w-4 h-4" />
                  <span>Settings</span>
                </SidebarMenuButton>
                <SidebarMenuButton className="text-white/70 hover:text-white hover:bg-white/5">
                  <User className="w-4 h-4" />
                  <span>Profile</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-white/5">
        <div className="flex items-center gap-3 px-2 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
          <div className="w-8 h-8 rounded-full bg-linear-to-tr from-cyan-500 to-blue-500 shrink-0" />
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-bold text-white truncate">FanaRax</p>
            <div className="flex items-center gap-1">
              <CircleDot className="w-2 h-2 text-green-500" />
              <p className="text-[10px] text-white/40 uppercase tracking-tighter">
                Active
              </p>
            </div>
          </div>
          <LogOut className="w-4 h-4 text-white/20 group-hover:text-red-400 transition-colors" />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
