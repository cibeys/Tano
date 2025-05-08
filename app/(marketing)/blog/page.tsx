import type { Metadata } from "next"
import Link from "next/link"
import { getSupabaseServerClient } from "@/lib/supabase/server"
import { PostCard } from "@/components/blog/post-card"
import { ThemeToggle } from "@/components/theme-toggle"

export const metadata: Metadata = {
  title: "Blog | Ozuxa",
  description: "Artikel terbaru tentang teknologi, bisnis, dan pengembangan web dari tim Ozuxa",
  openGraph: {
    title: "Blog | Ozuxa",
    description: "Artikel terbaru tentang teknologi, bisnis, dan pengembangan web dari tim Ozuxa",
    images: [
      {
        url: "/og-blog.png",
        width: 1200,
        height: 630,
        alt: "Blog Ozuxa",
      },
    ],
  },
}

export default async function BlogPage() {
  const supabase = getSupabaseServerClient()

  // Fetch posts
  const { data: posts, error: postsError } = await supabase
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
    .limit(9)

  console.log("Posts query error:", postsError)

  // Fetch categories
  const { data: categories, error: categoriesError } = await supabase
    .from("categories")
    .select("id, name, slug, post_count")
    .order("post_count", { ascending: false })
    .limit(10)

  console.log("Categories query error:", categoriesError)

  // Sample placeholder posts if no posts are found
  const placeholderPosts = posts || [
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
    {
      id: 4,
      title: "Panduan Lengkap Tailwind CSS",
      slug: "panduan-lengkap-tailwind-css",
      excerpt: "Pelajari cara menggunakan Tailwind CSS untuk membuat UI yang menarik dan responsif.",
      featured_image: "/placeholder.svg?height=400&width=600",
      published_at: new Date().toISOString(),
      view_count: 756,
      category: { name: "CSS", slug: "css" },
      author: { username: "admin", full_name: "Admin", avatar_url: "/placeholder.svg?height=100&width=100" },
      comments_count: 4,
    },
    {
      id: 5,
      title: "Menggunakan Server Actions di Next.js",
      slug: "menggunakan-server-actions-di-nextjs",
      excerpt: "Panduan lengkap tentang cara menggunakan Server Actions di Next.js untuk form handling.",
      featured_image: "/placeholder.svg?height=400&width=600",
      published_at: new Date().toISOString(),
      view_count: 645,
      category: { name: "Next.js", slug: "nextjs" },
      author: { username: "admin", full_name: "Admin", avatar_url: "/placeholder.svg?height=100&width=100" },
      comments_count: 2,
    },
    {
      id: 6,
      title: "Strategi Caching di Next.js App Router",
      slug: "strategi-caching-di-nextjs-app-router",
      excerpt: "Pelajari berbagai strategi caching di Next.js App Router untuk performa optimal.",
      featured_image: "/placeholder.svg?height=400&width=600",
      published_at: new Date().toISOString(),
      view_count: 534,
      category: { name: "Next.js", slug: "nextjs" },
      author: { username: "admin", full_name: "Admin", avatar_url: "/placeholder.svg?height=100&width=100" },
      comments_count: 1,
    },
  ]

  // Sample placeholder categories if no categories are found
  const placeholderCategories = categories || [
    { id: 1, name: "Tutorial", slug: "tutorial", post_count: 15 },
    { id: 2, name: "Next.js", slug: "nextjs", post_count: 12 },
    { id: 3, name: "React", slug: "react", post_count: 10 },
    { id: 4, name: "Supabase", slug: "supabase", post_count: 8 },
    { id: 5, name: "CSS", slug: "css", post_count: 6 },
    { id: 6, name: "JavaScript", slug: "javascript", post_count: 5 },
    { id: 7, name: "TypeScript", slug: "typescript", post_count: 4 },
    { id: 8, name: "SEO", slug: "seo", post_count: 3 },
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
                className="flex items-center text-lg font-medium transition-colors text-primary sm:text-sm"
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Blog Ozuxa</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Artikel terbaru tentang teknologi, bisnis, dan pengembangan web
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-[1fr_300px]">
              <div className="space-y-10">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                  {placeholderPosts.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>
                <div className="flex justify-center">
                  <Link
                    href="/blog/page/2"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Lihat Lebih Banyak
                  </Link>
                </div>
              </div>
              <div className="space-y-10">
                <div className="rounded-lg border bg-card p-6">
                  <h2 className="text-xl font-bold mb-4">Kategori</h2>
                  <div className="space-y-2">
                    {placeholderCategories.map((category) => (
                      <Link
                        key={category.id}
                        href={`/blog/category/${category.slug}`}
                        className="flex items-center justify-between hover:text-primary"
                      >
                        <span>{category.name}</span>
                        <span className="text-sm text-muted-foreground">{category.post_count}</span>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg border bg-card p-6">
                  <h2 className="text-xl font-bold mb-4">Berlangganan</h2>
                  <p className="text-muted-foreground mb-4">Dapatkan artikel terbaru langsung ke inbox Anda</p>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <input
                        type="email"
                        placeholder="Email Anda"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      Berlangganan
                    </button>
                  </form>
                </div>
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
