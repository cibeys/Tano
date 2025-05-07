import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold">OZUXA</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link
                href="#features"
                className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
              >
                Pricing
              </Link>
              <Link
                href="/blog"
                className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
              >
                Blog
              </Link>
              <Link
                href="#contact"
                className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Link
                href="/login"
                className="hidden sm:inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="hidden sm:inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Register
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Sistem Website Profesional dengan Supabase
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Platform lengkap untuk membangun website profesional dengan landing page, blog, dan dashboard admin
                    yang powerful.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/register"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Mulai Sekarang
                  </Link>
                  <Link
                    href="#features"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Pelajari Lebih Lanjut
                  </Link>
                </div>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square">
                <div className="h-full w-full bg-muted"></div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Fitur Utama
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Semua yang Anda Butuhkan</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Platform lengkap dengan semua fitur yang Anda butuhkan untuk membangun website profesional.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              {[
                {
                  title: "Landing Page Profesional",
                  description: "Buat landing page yang menarik dan profesional untuk bisnis Anda.",
                },
                {
                  title: "Sistem Blog Skalabel",
                  description: "Kelola konten blog dengan mudah dan skalabel untuk pertumbuhan bisnis.",
                },
                {
                  title: "Dashboard Admin Powerful",
                  description: "Kelola website Anda dengan dashboard admin yang dapat dikustomisasi.",
                },
                {
                  title: "Autentikasi Lengkap",
                  description: "Sistem autentikasi lengkap dengan berbagai metode login.",
                },
                {
                  title: "Database Terstruktur",
                  description: "Struktur database yang teroptimasi untuk performa terbaik.",
                },
                {
                  title: "Realtime Features",
                  description: "Fitur realtime untuk komentar dan notifikasi.",
                },
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                  <div className="rounded-full bg-primary p-2 text-primary-foreground">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-center text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Paket Harga Sederhana</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Pilih paket yang sesuai dengan kebutuhan Anda.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              {[
                {
                  title: "Starter",
                  price: "Rp 99.000",
                  description: "Untuk website personal atau bisnis kecil.",
                  features: [
                    "Landing page",
                    "Blog sederhana",
                    "Dashboard admin dasar",
                    "1 pengguna admin",
                    "Penyimpanan 5GB",
                    "Dukungan email",
                  ],
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
                  ],
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
                  ],
                },
              ].map((plan, index) => (
                <div key={index} className="flex flex-col rounded-lg border bg-card text-card-foreground shadow-sm">
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
                    <Button className="mt-auto w-full">
                      Pilih Paket
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Hubungi Kami</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Punya pertanyaan? Hubungi kami dan tim kami akan membantu Anda.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <label htmlFor="name" className="sr-only">
                    Nama
                  </label>
                  <input
                    id="name"
                    placeholder="Nama"
                    className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="sr-only">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    placeholder="Pesan"
                    className="min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <Button type="submit">Kirim Pesan</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Ozuxa. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
