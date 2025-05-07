"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  FileText,
  FolderOpen,
  MessageSquare,
  Tag,
  Settings,
  Users,
  Mail,
  LogOut,
  PanelLeft,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useAuth } from "@/lib/hooks/use-auth"
import { useState } from "react"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const { signOut } = useAuth()
  const [collapsed, setCollapsed] = useState(false)

  const toggleSidebar = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div
      className={cn(
        "relative border-r bg-background transition-all duration-300 ease-in-out",
        collapsed ? "w-[70px]" : "w-[240px]",
        className,
      )}
    >
      <div className="absolute right-[-12px] top-6 z-10">
        <Button variant="outline" size="icon" className="h-6 w-6 rounded-full bg-background" onClick={toggleSidebar}>
          <PanelLeft className="h-3.5 w-3.5" />
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
      </div>
      <div className="flex h-[60px] items-center border-b px-6">
        <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
          {!collapsed && <span>OZUXA</span>}
          {collapsed && <span>O</span>}
        </Link>
      </div>
      <ScrollArea className="h-[calc(100vh-60px)]">
        <div className="flex flex-col gap-4 py-4">
          <div className="px-4 py-2">
            <h2 className={cn("text-xs font-semibold text-muted-foreground", collapsed && "text-center")}>
              {!collapsed ? "DASHBOARD" : "D"}
            </h2>
            <div className="mt-2 space-y-1">
              <NavItem
                href="/dashboard"
                icon={LayoutDashboard}
                label="Dashboard"
                active={pathname === "/dashboard"}
                collapsed={collapsed}
              />
              <NavItem
                href="/dashboard/posts"
                icon={FileText}
                label="Posts"
                active={pathname.startsWith("/dashboard/posts")}
                collapsed={collapsed}
              />
              <NavItem
                href="/dashboard/categories"
                icon={FolderOpen}
                label="Categories"
                active={pathname.startsWith("/dashboard/categories")}
                collapsed={collapsed}
              />
              <NavItem
                href="/dashboard/comments"
                icon={MessageSquare}
                label="Comments"
                active={pathname.startsWith("/dashboard/comments")}
                collapsed={collapsed}
              />
              <NavItem
                href="/dashboard/tags"
                icon={Tag}
                label="Tags"
                active={pathname.startsWith("/dashboard/tags")}
                collapsed={collapsed}
              />
              <NavItem
                href="/dashboard/pages"
                icon={FileText}
                label="Pages"
                active={pathname.startsWith("/dashboard/pages")}
                collapsed={collapsed}
              />
            </div>
          </div>
          <div className="px-4 py-2">
            <h2 className={cn("text-xs font-semibold text-muted-foreground", collapsed && "text-center")}>
              {!collapsed ? "SETTINGS" : "S"}
            </h2>
            <div className="mt-2 space-y-1">
              <NavItem
                href="/dashboard/settings"
                icon={Settings}
                label="Settings"
                active={pathname.startsWith("/dashboard/settings")}
                collapsed={collapsed}
              />
              <NavItem
                href="/dashboard/users"
                icon={Users}
                label="Users"
                active={pathname.startsWith("/dashboard/users")}
                collapsed={collapsed}
              />
              <NavItem
                href="/dashboard/subscribers"
                icon={Mail}
                label="Subscribers"
                active={pathname.startsWith("/dashboard/subscribers")}
                collapsed={collapsed}
              />
              <NavItem
                href="/dashboard/builder"
                icon={LayoutDashboard}
                label="Dashboard Builder"
                active={pathname.startsWith("/dashboard/builder")}
                collapsed={collapsed}
              />
            </div>
          </div>
        </div>
        <div className="mt-auto p-4">
          <Button
            variant="ghost"
            className={cn("w-full justify-start", collapsed && "justify-center")}
            onClick={() => signOut()}
          >
            <LogOut className="mr-2 h-4 w-4" />
            {!collapsed && <span>Logout</span>}
          </Button>
        </div>
      </ScrollArea>
    </div>
  )
}

interface NavItemProps {
  href: string
  icon: React.ElementType
  label: string
  active?: boolean
  collapsed?: boolean
}

function NavItem({ href, icon: Icon, label, active, collapsed }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
        active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground",
        collapsed && "justify-center px-2",
      )}
    >
      <Icon className="h-4 w-4" />
      {!collapsed && <span>{label}</span>}
    </Link>
  )
}
