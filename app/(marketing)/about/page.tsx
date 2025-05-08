import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Tentang Ozuxa dan tim di baliknya",
  openGraph: {
    title: "Tentang Kami | Ozuxa",
    description: "Tentang Ozuxa dan tim di baliknya",
    images: [
      {
        url: "/og-about.png",
        width: 1200,
        height: 630,
        alt: "Tentang Ozuxa",
      },
    ],
  },
}

export default function AboutPage() {
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
                href="/#features"
                className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
              >
                Fitur
              </Link>
              <Link
                href="/#testimonials"
                className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
              >
                Testimoni
              </Link>
              <Link
                href="/#pricing"
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
              <Link
                href="/about"
                className="flex items-center text-lg font-medium transition-colors text-primary sm:text-sm"
              >
                Tentang Kami
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Tentang Ozuxa
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Platform website profesional yang membantu bisnis Anda tumbuh
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Visi Kami</h2>
                <p className="text-muted-foreground md:text-lg">
                  Menjadi platform terdepan yang memungkinkan setiap bisnis memiliki kehadiran online yang profesional
                  dan efektif, tanpa perlu keahlian teknis yang mendalam.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  Kami percaya bahwa setiap bisnis, besar maupun kecil, berhak mendapatkan alat yang tepat untuk
                  berkembang di era digital. Itulah mengapa kami membangun Ozuxa - untuk membuat pembuatan website
                  profesional menjadi mudah, cepat, dan terjangkau.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Misi Kami</h2>
                <p className="text-muted-foreground md:text-lg">
                  Menyediakan platform yang intuitif dan powerful yang memungkinkan bisnis dari segala ukuran untuk
                  membangun kehadiran online yang profesional tanpa perlu keahlian teknis atau anggaran besar.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  Kami berkomitmen untuk terus berinovasi dan meningkatkan platform kami, memastikan bahwa pelanggan
                  kami selalu memiliki akses ke fitur terbaru dan terbaik untuk membantu bisnis mereka tumbuh.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Tim Kami</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Bertemu dengan orang-orang berbakat di balik Ozuxa
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Ahmad Fauzi",
                  role: "CEO & Founder",
                  bio: "Ahmad memiliki pengalaman lebih dari 10 tahun dalam pengembangan web dan bisnis digital.",
                  image: "/images/team/ahmad.png",
                },
                {
                  name: "Siti Rahayu",
                  role: "CTO",
                  bio: "Siti adalah ahli teknologi dengan spesialisasi dalam arsitektur cloud dan pengembangan backend.",
                  image: "/images/team/siti.png",
                },
                {
                  name: "Budi Santoso",
                  role: "Head of Design",
                  bio: "Budi memiliki mata yang tajam untuk desain UI/UX dan telah memenangkan beberapa penghargaan desain.",
                  image: "/images/team/budi.png",
                },
                {
                  name: "Dewi Anggraini",
                  role: "Marketing Director",
                  bio: "Dewi adalah ahli pemasaran digital dengan pengalaman dalam membangun strategi pertumbuhan.",
                  image: "/images/team/dewi.png",
                },
                {
                  name: "Rudi Hartono",
                  role: "Customer Success Manager",
                  bio: "Rudi berdedikasi untuk memastikan pelanggan kami mendapatkan hasil maksimal dari platform kami.",
                  image: "/images/team/rudi.png",
                },
                {
                  name: "Lina Wijaya",
                  role: "Head of Content",
                  bio: "Lina adalah penulis dan editor berpengalaman yang memimpin strategi konten kami.",
                  image: "/images/team/lina.png",
                },
              ].map((member, index) => (
                <div key={index} className="flex flex-col items-center space-y-4">
                  <div className="relative h-40 w-40 overflow-hidden rounded-full">
                    <Image
                      src={member.image || "/placeholder.svg?height=160&width=160"}
                      alt={member.name}
                      width={160}
                      height={160}
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-sm text-primary">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Nilai-Nilai Kami</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-4 rounded-full bg-primary/10 p-2 text-primary">
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
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Inovasi</h3>
                      <p className="text-muted-foreground">
                        Kami selalu mencari cara baru dan lebih baik untuk melakukan sesuatu, mendorong batas-batas apa
                        yang mungkin dalam teknologi web.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 rounded-full bg-primary/10 p-2 text-primary">
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
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Kesederhanaan</h3>
                      <p className="text-muted-foreground">
                        Kami percaya bahwa teknologi terbaik adalah yang tidak terlihat - mudah digunakan dan tidak
                        mengganggu.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 rounded-full bg-primary/10 p-2 text-primary">
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
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Kualitas</h3>
                      <p className="text-muted-foreground">
                        Kami tidak berkompromi dalam hal kualitas, memastikan bahwa setiap fitur dan produk yang kami
                        rilis memenuhi standar tertinggi.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Bergabunglah dengan Kami</h2>
                <p className="text-muted-foreground md:text-lg">
                  Kami selalu mencari individu berbakat dan bersemangat untuk bergabung dengan tim kami. Jika Anda
                  bersemangat tentang teknologi web dan ingin membuat perbedaan, kami ingin mendengar dari Anda.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  Kami menawarkan lingkungan kerja yang dinamis dan inklusif, dengan kesempatan untuk belajar dan
                  berkembang bersama perusahaan yang sedang berkembang.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/careers"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Lihat Lowongan
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Hubungi Kami
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                <Link href="/#features" className="hover:underline">
                  Fitur
                </Link>
                <Link href="/#pricing" className="hover:underline">
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
