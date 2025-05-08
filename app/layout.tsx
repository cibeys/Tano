import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/contexts/auth-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Ozuxa - Platform Website Profesional dengan Supabase",
    template: "%s | Ozuxa",
  },
  description:
    "Bangun website profesional dengan landing page, blog, dan dashboard admin yang powerful dalam hitungan menit.",
  keywords: ["website builder", "supabase", "blog platform", "dashboard admin", "landing page"],
  authors: [{ name: "Ozuxa Team" }],
  creator: "Ozuxa",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://ozuxa.com",
    title: "Ozuxa - Platform Website Profesional dengan Supabase",
    description:
      "Bangun website profesional dengan landing page, blog, dan dashboard admin yang powerful dalam hitungan menit.",
    siteName: "Ozuxa",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ozuxa - Platform Website Profesional dengan Supabase",
    description:
      "Bangun website profesional dengan landing page, blog, dan dashboard admin yang powerful dalam hitungan menit.",
    creator: "@ozuxa",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
