"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, FileText, Users, Settings, ImageIcon, MessageSquare, BarChart, Layers } from "lucide-react"

const items = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard className="mr-2 h-4 w-4" />,
  },
  {
    title: "Artikel",
    href: "/dashboard/articles",
    icon: <FileText className="mr-2 h-4 w-4" />,
  },
  {
    title: "Halaman",
    href: "/dashboard/pages",
    icon: <Layers className="mr-2 h-4 w-4" />,
  },
  {
    title: "Media",
    href: "/dashboard/media",
    icon: <ImageIcon className="mr-2 h-4 w-4" />,
  },
  {
    title: "Komentar",
    href: "/dashboard/comments",
    icon: <MessageSquare className="mr-2 h-4 w-4" />,
  },
  {
    title: "Pengguna",
    href: "/dashboard/users",
    icon: <Users className="mr-2 h-4 w-4" />,
  },
  {
    title: "Analitik",
    href: "/dashboard/analytics",
    icon: <BarChart className="mr-2 h-4 w-4" />,
  },
  {
    title: "Pengaturan",
    href: "/dashboard/settings",
    icon: <Settings className="mr-2 h-4 w-4" />,
  },
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <nav className="grid items-start px-2 py-4">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={cn(
            "flex items-center rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
            pathname === item.href ? "bg-accent text-accent-foreground" : "transparent",
          )}
        >
          {item.icon}
          {item.title}
        </Link>
      ))}
    </nav>
  )
}
