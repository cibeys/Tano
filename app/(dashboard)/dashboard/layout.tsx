import type React from "react"
import type { Metadata } from "next"
import { DashboardNav } from "@/components/dashboard/dashboard-nav"
import { UserNav } from "@/components/dashboard/user-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: {
    default: "Dashboard",
    template: "%s | Dashboard",
  },
  description: "Dashboard admin untuk mengelola website Anda",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs">O</span>
              </div>
              <span className="inline-block font-bold">OZUXA</span>
            </a>
            <div className="hidden md:flex">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Cari..." className="w-[200px] pl-8 md:w-[300px] lg:w-[400px]" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <UserNav />
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-[200px] flex-col border-r bg-muted/40 md:flex">
          <DashboardNav />
        </aside>
        <main className="flex-1">
          <Suspense>{children}</Suspense>
        </main>
      </div>
    </div>
  )
}
