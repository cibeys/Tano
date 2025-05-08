import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ThemeToggle } from "@/components/theme-toggle"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Kontak Kami",
  description: "Hubungi tim Ozuxa untuk pertanyaan, dukungan, atau umpan balik",
  openGraph: {
    title: "Kontak Kami | Ozuxa",
    description: "Hubungi tim Ozuxa untuk pertanyaan, dukungan, atau umpan balik",
    images: [
      {
        url: "/og-contact.png",
        width: 1200,
        height: 630,
        alt: "Kontak Ozuxa",
      },
    ],
  },
}

export default function ContactPage() {
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
                className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
              >
                Tentang Kami
              </Link>
              <Link
                href="/contact"
                className="flex items-center text-lg font-medium transition-colors text-primary sm:text-sm"
              >
                Kontak
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
                  Hubungi Kami
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Kami siap membantu Anda. Hubungi kami untuk pertanyaan, dukungan, atau umpan balik.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Informasi Kontak</h2>
                <p className="text-muted-foreground">
                  Anda dapat menghubungi kami melalui formulir di samping atau menggunakan informasi kontak di bawah
                  ini.
                </p>
                <div className="space-y-4 mt-6">
                  <div className="flex items-start">
                    <div className="mr-4 rounded-full bg-primary/10 p-2 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Alamat</h3>
                      <p className="text-muted-foreground">Jl. Teknologi No. 123, Jakarta, Indonesia</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 rounded-full bg-primary/10 p-2 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Telepon</h3>
                      <p className="text-muted-foreground">+62 123 4567 890</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 rounded-full bg-primary/10 p-2 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground">info@ozuxa.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 rounded-full bg-primary/10 p-2 text-primary">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Jam Kerja</h3>
                      <p className="text-muted-foreground">Senin - Jumat: 09:00 - 17:00</p>
                      <p className="text-muted-foreground">Sabtu: 09:00 - 13:00</p>
                      <p className="text-muted-foreground">Minggu: Tutup</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Kirim Pesan</h2>
                <p className="text-muted-foreground">
                  Isi formulir di bawah ini dan tim kami akan menghubungi Anda sesegera mungkin.
                </p>
                <form className="space-y-4 mt-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nama</Label>
                      <Input id="name" placeholder="Nama Anda" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Email Anda" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subjek</Label>
                    <Input id="subject" placeholder="Subjek pesan Anda" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Pesan</Label>
                    <textarea
                      id="message"
                      className="min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Pesan Anda"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Kirim Pesan
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">FAQ</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Jawaban untuk pertanyaan yang sering diajukan
                </p>
              </div>
            </div>
            <div className="mx-auto mt-8 max-w-3xl space-y-4">
              {[
                {
                  question: "Bagaimana cara memulai dengan Ozuxa?",
                  answer:
                    "Untuk memulai dengan Ozuxa, cukup daftar akun gratis, pilih template, kustomisasi sesuai kebutuhan Anda, dan publikasikan website Anda. Proses ini hanya membutuhkan waktu beberapa menit.",
                },
                {
                  question: "Apakah saya perlu kemampuan coding?",
                  answer:
                    "Tidak, Ozuxa dirancang untuk digunakan oleh siapa saja tanpa perlu kemampuan coding. Namun, jika Anda memiliki pengetahuan coding, Anda dapat menyesuaikan website Anda lebih lanjut.",
                },
                {
                  question: "Bagaimana cara menghubungi dukungan pelanggan?",
                  answer:
                    "Anda dapat menghubungi dukungan pelanggan kami melalui email di support@ozuxa.com, telepon di +62 123 4567 890, atau melalui formulir kontak di halaman ini.",
                },
                {
                  question: "Berapa lama waktu respons dukungan pelanggan?",
                  answer:
                    "Kami berusaha untuk merespons semua pertanyaan dalam waktu 24 jam. Pengguna paket Professional dan Enterprise mendapatkan dukungan prioritas dengan waktu respons yang lebih cepat.",
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
