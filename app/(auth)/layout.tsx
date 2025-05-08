import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"

export const metadata: Metadata = {
  title: "Authentication - Ozuxa",
  description: "Authentication pages for Ozuxa platform",
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="absolute right-4 top-4 md:right-8 md:top-8">
            <ThemeToggle />
          </div>
          <div className="absolute left-4 top-4 md:left-8 md:top-8">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">O</span>
              </div>
              <span className="inline-block font-bold">OZUXA</span>
            </Link>
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
