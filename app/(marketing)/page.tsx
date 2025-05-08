import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle2,
  ArrowDown,
  Star,
  Users,
  Code,
  Shield,
  Zap,
  Database,
  LayoutDashboard,
  Globe,
  Sparkles,
  ChevronRight,
} from "lucide-react"
import { getSupabaseServerClient } from "@/lib/supabase/server"
import { PostCard } from "@/components/blog/post-card"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ozuxa - Platform Website Profesional dengan Supabase",
  description:
    "Bangun website profesional dengan landing page, blog, dan dashboard admin yang powerful dalam hitungan menit.",
  openGraph: {
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ozuxa - Platform Website Profesional dengan Supabase",
      },
    ],
  },
}

export default async function LandingPage() {
  const supabase = getSupabaseServerClient()

  // Fetch featured posts for the blog section
  const { data: featuredPosts, error } = await supabase
    .from("posts")
    .select(
      `
      id,
      title,
      slug,
      excerpt,
      featured_image,
      published_at,
      view_count,
      category:category_id(name, slug),
      author:author_id(username, full_name, avatar_url)
      `,
    )
    .eq("status", "published")
    .order("published_at", { ascending: false })
    .limit(3)

  console.log("Supabase query error:", error)

  // Sample placeholder posts if no posts are found
  const placeholderPosts = featuredPosts || [
    {
      id: 1,
      title: "Cara Menggunakan Supabase untuk Autentikasi",
      slug: "cara-menggunakan-supabase-untuk-autentikasi",
      excerpt: "Pelajari cara mengimplementasikan autentikasi dengan Supabase dalam aplikasi Next.js Anda.",
      featured_image: "/placeholder.svg?height=400&width=600",
      published_at: new Date().toISOString(),
      view_count: 1234,
      category: { name: "Tutorial", slug: "tutorial" },
      author: { username: "admin", full_name: "Admin", avatar_url: "/placeholder.svg?height=100&width=100" },
      comments_count: 5,
    },
    {
      id: 2,
      title: "Membangun Blog dengan Next.js dan Supabase",
      slug: "membangun-blog-dengan-nextjs-dan-supabase",
      excerpt: "Tutorial lengkap tentang cara membangun blog dengan Next.js dan Supabase sebagai backend.",
      featured_image: "/placeholder.svg?height=400&width=600",
      published_at: new Date().toISOString(),
      view_count: 982,
      category: { name: "Tutorial", slug: "tutorial" },
      author: { username: "admin", full_name: "Admin", avatar_url: "/placeholder.svg?height=100&width=100" },
      comments_count: 3,
    },
    {
      id: 3,
      title: "Optimasi SEO untuk Website Next.js",
      slug: "optimasi-seo-untuk-website-nextjs",
      excerpt: "Panduan lengkap untuk mengoptimalkan SEO pada website Next.js Anda.",
      featured_image: "/placeholder.svg?height=400&width=600",
      published_at: new Date().toISOString(),
      view_count: 879,
      category: { name: "SEO", slug: "seo" },
      author: { username: "admin", full_name: "Admin", avatar_url: "/placeholder.svg?height=100&width=100" },
      comments_count: 2,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">O</span>
              </div>
              <span className="inline-block font-bold">OZUXA</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link
                href="#features"
                className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
              >
                Fitur
              </Link>
              <Link
                href="#testimonials"
                className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
              >
                Testimoni
              </Link>
              <Link
                href="#pricing"
                className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
              >
                Harga
              </Link>
              <Link
                href="/blog"
                className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
              >
                Blog
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <ThemeToggle />
              <Link
                href="/login"
                className="hidden sm:inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="hidden sm:inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Daftar
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-small-black/[0.2] -z-10" />
          <div
            className="absolute inset-0 flex items-center justify-center -z-10"
            style={{
              background: "radial-gradient(circle at center, rgba(var(--primary-rgb), 0.15) 0%, transparent 70%)",
            }}
          />
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm">
                  <span className="mr-2 rounded-md bg-primary px-2 py-0.5 text-xs text-primary-foreground">Baru</span>
                  <span className="text-muted-foreground">Versi 1.0 telah dirilis</span>
                </div>
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Platform Website Profesional dengan <span className="text-primary">Supabase</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Bangun website profesional dengan landing page, blog, dan dashboard admin yang powerful dalam
                    hitungan menit.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/register"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Mulai Gratis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="#demo-video"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Lihat Demo
                    <ArrowDown className="ml-2 h-4 w-4" />
                  </Link>
                </div>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <CheckCircle2 className="mr-1 h-3 w-3 text-primary" />
                    <span>Gratis 14 hari</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="mr-1 h-3 w-3 text-primary" />
                    <span>Tanpa kartu kredit</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="mr-1 h-3 w-3 text-primary" />
                    <span>Support 24/7</span>
                  </div>
                </div>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl border shadow-2xl sm:w-full lg:order-last">
                <div className="relative h-full w-full bg-muted overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-muted-foreground/20 z-10 rounded-xl" />
                  <Image
                    src="/images/dashboard-preview.png"
                    alt="Dashboard Preview"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover"
                    priority
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEDQIHXG8H1QAAAABJRU5ErkJggg=="
                  />
                  <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-background/80 backdrop-blur-sm p-4 shadow-lg z-20">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Dashboard Admin Ozuxa</h3>
                        <p className="text-xs text-muted-foreground">Kelola konten website Anda dengan mudah</p>
                      </div>
                      <Button size="sm" variant="default">
                        Lihat Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-16 lg:py-20 border-y bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
              <div className="flex flex-col items-center justify-center space-y-2 border-r border-border p-4 last:border-r-0">
                <div className="text-3xl font-bold md:text-4xl">5,000+</div>
                <div className="text-center text-sm text-muted-foreground">Pengguna Aktif</div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 border-r border-border p-4 last:border-r-0">
                <div className="text-3xl font-bold md:text-4xl">10,000+</div>
                <div className="text-center text-sm text-muted-foreground">Website Dibuat</div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 border-r border-border p-4 last:border-r-0">
                <div className="text-3xl font-bold md:text-4xl">99.9%</div>
                <div className="text-center text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 p-4">
                <div className="text-3xl font-bold md:text-4xl">24/7</div>
                <div className="text-center text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Logos Section */}
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-xl font-medium tracking-tight md:text-2xl">Dipercaya oleh perusahaan terkemuka</h2>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center justify-center text-muted-foreground">
                    <div className="h-8 w-32 bg-muted rounded-md flex items-center justify-center">Logo {i}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Demo Video Section */}
        <section id="demo-video" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">Demo</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Lihat Ozuxa dalam Aksi</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Tonton video demo singkat untuk melihat bagaimana Ozuxa dapat membantu bisnis Anda.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-xl border shadow-xl">
              <div className="aspect-video bg-muted relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="lg" className="rounded-full h-16 w-16 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                      <path
                        fillRule="evenodd"
                        d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-.1.643V5.653z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Button>
                </div>
                <Image
                  src="/placeholder.svg?height=600&width=1200"
                  alt="Video Thumbnail"
                  width={1200}
                  height={600}
                  className="h-full w-full object-cover opacity-80"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Fitur Utama
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Semua yang Anda Butuhkan
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Platform lengkap dengan semua fitur yang Anda butuhkan untuk membangun website profesional.
                </p>
              </div>
            </div>

            {/* Feature Tabs */}
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Globe className="h-10 w-10" />,
                  title: "Landing Page Profesional",
                  description:
                    "Buat landing page yang menarik dan profesional untuk bisnis Anda dengan template yang dapat dikustomisasi.",
                  features: [
                    "Template modern dan responsif",
                    "Editor drag-and-drop",
                    "Optimasi SEO bawaan",
                    "Integrasi dengan analytics",
                  ],
                },
                {
                  icon: <LayoutDashboard className="h-10 w-10" />,
                  title: "Dashboard Admin Powerful",
                  description:
                    "Kelola website Anda dengan dashboard admin yang dapat dikustomisasi sesuai kebutuhan Anda.",
                  features: [
                    "Widget yang dapat dikustomisasi",
                    "Analisis real-time",
                    "Manajemen pengguna",
                    "Pengaturan keamanan",
                  ],
                },
                {
                  icon: <Database className="h-10 w-10" />,
                  title: "Sistem Blog Skalabel",
                  description: "Kelola konten blog dengan mudah dan skalabel untuk pertumbuhan bisnis Anda.",
                  features: [
                    "Editor markdown yang kaya fitur",
                    "Kategori dan tag",
                    "Komentar dan moderasi",
                    "Penjadwalan publikasi",
                  ],
                },
                {
                  icon: <Shield className="h-10 w-10" />,
                  title: "Autentikasi Lengkap",
                  description: "Sistem autentikasi lengkap dengan berbagai metode login untuk keamanan maksimal.",
                  features: [
                    "Login email dan password",
                    "Login sosial media",
                    "Verifikasi dua faktor",
                    "Manajemen sesi",
                  ],
                },
                {
                  icon: <Sparkles className="h-10 w-10" />,
                  title: "Database Terstruktur",
                  description: "Struktur database yang teroptimasi untuk performa terbaik dan skalabilitas.",
                  features: [
                    "Skema database yang teroptimasi",
                    "Relasi antar tabel",
                    "Backup otomatis",
                    "Migrasi data mudah",
                  ],
                },
                {
                  icon: <Zap className="h-10 w-10" />,
                  title: "Realtime Features",
                  description: "Fitur realtime untuk komentar, notifikasi, dan interaksi pengguna yang dinamis.",
                  features: [
                    "Komentar realtime",
                    "Notifikasi instan",
                    "Pembaruan konten otomatis",
                    "Analitik pengunjung realtime",
                  ],
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col space-y-4 rounded-lg border p-6 transition-all hover:shadow-md"
                >
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-primary/10 p-4 text-primary">{feature.icon}</div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{feature.description}</p>
                  <ul className="space-y-2 pt-4">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Link href="#" className="inline-flex items-center text-sm font-medium text-primary">
                      Pelajari lebih lanjut
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40 opacity-0 transition-opacity group-hover:opacity-100"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Cara Kerja
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Mulai dalam 3 Langkah Mudah
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Bangun website profesional Anda dengan cepat dan mudah.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Daftar Akun",
                  description:
                    "Buat akun Ozuxa Anda dalam hitungan detik. Tidak diperlukan kartu kredit untuk memulai.",
                  icon: <Users className="h-8 w-8" />,
                },
                {
                  step: "02",
                  title: "Kustomisasi Website",
                  description:
                    "Pilih template dan kustomisasi sesuai kebutuhan bisnis Anda dengan editor yang mudah digunakan.",
                  icon: <Code className="h-8 w-8" />,
                },
                {
                  step: "03",
                  title: "Publikasikan",
                  description:
                    "Publikasikan website Anda dengan satu klik dan mulai menarik pengunjung ke bisnis Anda.",
                  icon: <Globe className="h-8 w-8" />,
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm"
                >
                  <div className="absolute -top-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                    {step.step}
                  </div>
                  <div className="pt-4">
                    <div className="rounded-full bg-primary/10 p-3 text-primary">{step.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-center text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-16 flex justify-center">
              <Link
                href="/register"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Mulai Sekarang
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Testimoni
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Apa Kata Pelanggan Kami</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Dengarkan pengalaman dari pelanggan yang telah menggunakan platform kami.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    "Ozuxa telah membantu kami membangun website profesional dengan cepat dan mudah. Dashboard admin yang dapat dikustomisasi sangat membantu tim kami.",
                  author: "Ahmad Fauzi",
                  role: "CEO, Tech Startup",
                  rating: 5,
                  image: "/placeholder.svg?height=100&width=100",
                },
                {
                  quote:
                    "Sistem blog yang skalabel dan fitur SEO bawaan telah meningkatkan traffic website kami secara signifikan. Sangat direkomendasikan!",
                  author: "Siti Rahayu",
                  role: "Marketing Manager, E-commerce",
                  rating: 5,
                  image: "/placeholder.svg?height=100&width=100",
                },
                {
                  quote:
                    "Integrasi dengan Supabase membuat pengelolaan data menjadi sangat mudah. Kami dapat fokus pada konten tanpa khawatir tentang infrastruktur.",
                  author: "Budi Santoso",
                  role: "CTO, Digital Agency",
                  rating: 5,
                  image: "/placeholder.svg?height=100&width=100",
                },
                {
                  quote:
                    "Fitur realtime untuk komentar dan notifikasi membuat interaksi dengan pengguna menjadi lebih dinamis. Pelanggan kami sangat menyukainya.",
                  author: "Dewi Anggraini",
                  role: "Product Manager, Media Company",
                  rating: 5,
                  image: "/placeholder.svg?height=100&width=100",
                },
                {
                  quote:
                    "Ozuxa membantu kami menghemat waktu dan biaya dalam pengembangan website. Kami sangat puas dengan hasilnya dan akan terus menggunakan layanan ini.",
                  author: "Rudi Hartono",
                  role: "Founder, Startup",
                  rating: 5,
                  image: "/placeholder.svg?height=100&width=100",
                },
                {
                  quote:
                    "Dukungan pelanggan yang luar biasa! Tim Ozuxa selalu siap membantu dan memberikan solusi terbaik untuk kebutuhan kami.",
                  author: "Lina Wijaya",
                  role: "Operations Manager, Retail",
                  rating: 5,
                  image: "/placeholder.svg?height=100&width=100",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm",
                    index === 0 && "md:col-span-2 md:row-span-2 lg:col-span-1 lg:row-span-1",
                  )}
                >
                  <div>
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <div className="mt-4">
                      <p className="text-lg">&ldquo;{testimonial.quote}&rdquo;</p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="mr-3 h-10 w-10 overflow-hidden rounded-full bg-primary/10">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        width={40}
                        height={40}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Harga
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Paket Harga Sederhana</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Pilih paket yang sesuai dengan kebutuhan Anda.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
              {[
                {
                  title: "Starter",
                  price: "Rp 99.000",
                  description: "Untuk website personal atau bisnis kecil.",
                  features: [
                    "Landing page profesional",
                    "Blog sederhana",
                    "Dashboard admin dasar",
                    "1 pengguna admin",
                    "Penyimpanan 5GB",
                    "Dukungan email",
                    "Update bulanan",
                  ],
                  cta: "Mulai Sekarang",
                  popular: false,
                },
                {
                  title: "Professional",
                  price: "Rp 299.000",
                  description: "Untuk bisnis yang sedang berkembang.",
                  features: [
                    "Semua fitur Starter",
                    "Blog dengan kategori dan tag",
                    "Dashboard admin lengkap",
                    "5 pengguna admin",
                    "Penyimpanan 20GB",
                    "Dukungan prioritas",
                    "Update mingguan",
                    "Analitik lanjutan",
                  ],
                  cta: "Pilih Paket",
                  popular: true,
                },
                {
                  title: "Enterprise",
                  price: "Rp 999.000",
                  description: "Untuk bisnis besar dengan kebutuhan khusus.",
                  features: [
                    "Semua fitur Professional",
                    "Blog dengan fitur lanjutan",
                    "Dashboard admin yang dapat dikustomisasi",
                    "Pengguna admin tidak terbatas",
                    "Penyimpanan 100GB",
                    "Dukungan 24/7",
                    "Update harian",
                    "Analitik lanjutan",
                    "API akses",
                    "Integrasi kustom",
                  ],
                  cta: "Hubungi Kami",
                  popular: false,
                },
              ].map((plan, index) => (
                <div
                  key={index}
                  className={`flex flex-col rounded-lg border bg-card text-card-foreground shadow-sm ${
                    plan.popular ? "border-primary ring-2 ring-primary scale-105 z-10" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="rounded-t-lg bg-primary py-1 text-center text-sm font-medium text-primary-foreground">
                      Paling Populer
                    </div>
                  )}
                  <div className="p-6 pt-6">
                    <h3 className="text-2xl font-bold">{plan.title}</h3>
                    <div className="mt-4 flex items-baseline text-5xl font-extrabold">
                      {plan.price}
                      <span className="ml-1 text-xl font-normal text-muted-foreground">/bulan</span>
                    </div>
                    <p className="mt-4 text-muted-foreground">{plan.description}</p>
                  </div>
                  <div className="flex flex-1 flex-col p-6 pt-0">
                    <ul className="mb-6 space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`mt-auto w-full ${
                        plan.popular ? "bg-primary text-primary-foreground" : "bg-primary/80"
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <p className="text-muted-foreground">
                Semua paket termasuk uji coba gratis 14 hari. Tidak diperlukan kartu kredit.
              </p>
              <Link href="#" className="mt-4 inline-block text-sm font-medium text-primary hover:underline">
                Lihat perbandingan paket lengkap
              </Link>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">Blog</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Artikel Terbaru</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Baca artikel terbaru dari tim kami tentang teknologi, bisnis, dan pengembangan web.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {placeholderPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
            <div className="flex justify-center">
              <Link
                href="/blog"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Lihat Semua Artikel
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">FAQ</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pertanyaan Umum</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Jawaban untuk pertanyaan yang sering diajukan tentang Ozuxa.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-8 max-w-3xl space-y-4">
              {[
                {
                  question: "Apa itu Ozuxa?",
                  answer:
                    "Ozuxa adalah platform website profesional yang memungkinkan Anda membangun landing page, blog, dan dashboard admin dengan mudah. Platform ini dibangun dengan Supabase untuk memberikan performa dan keamanan terbaik.",
                },
                {
                  question: "Apakah saya perlu kemampuan coding?",
                  answer:
                    "Tidak, Ozuxa dirancang untuk digunakan oleh siapa saja tanpa perlu kemampuan coding. Namun, jika Anda memiliki pengetahuan coding, Anda dapat menyesuaikan website Anda lebih lanjut.",
                },
                {
                  question: "Bagaimana cara memulai?",
                  answer:
                    "Cukup daftar akun gratis, pilih template, kustomisasi sesuai kebutuhan Anda, dan publikasikan website Anda. Proses ini hanya membutuhkan waktu beberapa menit.",
                },
                {
                  question: "Apakah ada uji coba gratis?",
                  answer:
                    "Ya, kami menawarkan uji coba gratis 14 hari untuk semua paket. Tidak diperlukan kartu kredit untuk memulai.",
                },
                {
                  question: "Apakah saya bisa mengupgrade atau downgrade paket saya?",
                  answer:
                    "Ya, Anda dapat mengupgrade atau downgrade paket Anda kapan saja. Perubahan akan berlaku pada siklus penagihan berikutnya.",
                },
                {
                  question: "Bagaimana dengan dukungan pelanggan?",
                  answer:
                    "Kami menyediakan dukungan pelanggan melalui email untuk semua pengguna. Pengguna paket Professional dan Enterprise juga mendapatkan dukungan prioritas dan dukungan 24/7.",
                },
              ].map((faq, index) => (
                <div key={index} className="rounded-lg border bg-card shadow-sm">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    <p className="mt-2 text-muted-foreground">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <p className="text-muted-foreground">Masih punya pertanyaan?</p>
              <Link
                href="#contact"
                className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Siap Memulai Perjalanan Anda?
                </h2>
                <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                  Bergabunglah dengan ribuan pengguna yang telah meningkatkan kehadiran online mereka dengan Ozuxa.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="/register"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-background px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-background/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Daftar Sekarang
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/login"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-primary-foreground bg-transparent px-8 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary-foreground/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:grid-cols-2 lg:text-left">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Hubungi Kami</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed lg:mx-0">
                Punya pertanyaan? Hubungi kami dan tim kami akan membantu Anda.
              </p>
              <div className="space-y-4 mt-6">
                <div className="flex items-center justify-center lg:justify-start">
                  <div className="rounded-full bg-primary/10 p-2 text-primary mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <span>+62 123 4567 890</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <div className="rounded-full bg-primary/10 p-2 text-primary mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <span>info@ozuxa.com</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <div className="rounded-full bg-primary/10 p-2 text-primary mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <span>Jl. Teknologi No. 123, Jakarta, Indonesia</span>
                </div>
              </div>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2 lg:max-w-none">
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Nama</Label>
                  <Input
                    id="name"
                    placeholder="Nama Anda"
                    className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email Anda"
                    className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Pesan</Label>
                  <textarea
                    id="message"
                    placeholder="Pesan Anda"
                    className="min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                </div>
                <Button type="submit">Kirim Pesan</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row md:gap-8">
          <div className="flex flex-col items-center gap-4 md:items-start md:gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs">O</span>
              </div>
              <span className="inline-block font-bold">OZUXA</span>
            </Link>
            <p className="text-center text-sm text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} Ozuxa. All rights reserved.
            </p>
          </div>
          <div className="flex gap-8 sm:gap-12">
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium">Produk</h3>
              <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                <Link href="#features" className="hover:underline">
                  Fitur
                </Link>
                <Link href="#pricing" className="hover:underline">
                  Harga
                </Link>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </nav>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium">Perusahaan</h3>
              <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                <Link href="/about" className="hover:underline">
                  Tentang Kami
                </Link>
                <Link href="/contact" className="hover:underline">
                  Kontak
                </Link>
                <Link href="/careers" className="hover:underline">
                  Karir
                </Link>
              </nav>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium">Legal</h3>
              <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                <Link href="/privacy" className="hover:underline">
                  Privasi
                </Link>
                <Link href="/terms" className="hover:underline">
                  Syarat & Ketentuan
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
