import type { Metadata } from "next"
import { StatsWidgetGrid } from "@/components/dashboard/widgets/stats-widget"
import { RecentActivityWidget } from "@/components/dashboard/widgets/recent-activity-widget"
import { ChartWidget } from "@/components/dashboard/widgets/chart-widget"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDateRangePicker } from "@/components/dashboard/date-range-picker"
import { Button } from "@/components/ui/button"
import { Download, Plus } from "lucide-react"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard admin untuk mengelola website Anda",
}

const recentActivities = [
  {
    id: "1",
    user: {
      name: "Ahmad Fauzi",
      email: "ahmad@example.com",
      avatar: "/images/avatars/ahmad.png",
    },
    action: "menambahkan artikel baru",
    target: "Cara Menggunakan Supabase",
    date: "2 jam yang lalu",
  },
  {
    id: "2",
    user: {
      name: "Siti Rahayu",
      email: "siti@example.com",
      avatar: "/images/avatars/siti.png",
    },
    action: "mengedit halaman",
    target: "Tentang Kami",
    date: "5 jam yang lalu",
  },
  {
    id: "3",
    user: {
      name: "Budi Santoso",
      email: "budi@example.com",
      avatar: "/images/avatars/budi.png",
    },
    action: "menghapus komentar di",
    target: "Artikel Terbaru",
    date: "1 hari yang lalu",
  },
  {
    id: "4",
    user: {
      name: "Dewi Anggraini",
      email: "dewi@example.com",
      avatar: "/images/avatars/dewi.png",
    },
    action: "mengupload gambar ke",
    target: "Galeri",
    date: "2 hari yang lalu",
  },
]

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <CalendarDateRangePicker />
          <Button size="sm">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        </div>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <StatsWidgetGrid />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <ChartWidget
              title="Pengunjung Website"
              description="Jumlah pengunjung website dalam 7 hari terakhir"
              className="col-span-4"
            />
            <RecentActivityWidget activities={recentActivities} className="col-span-3" />
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Artikel Terpopuler</CardTitle>
                <Button variant="outline" size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Tambah Artikel
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Cara Menggunakan Supabase untuk Autentikasi",
                      views: "1,234",
                      date: "2 hari yang lalu",
                    },
                    {
                      title: "Tutorial Membuat Blog dengan Next.js",
                      views: "982",
                      date: "5 hari yang lalu",
                    },
                    {
                      title: "Panduan SEO untuk Website Bisnis",
                      views: "879",
                      date: "1 minggu yang lalu",
                    },
                  ].map((article, index) => (
                    <div key={index} className="flex items-center">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">{article.title}</p>
                        <div className="flex items-center pt-2">
                          <span className="text-xs text-muted-foreground">{article.views} views</span>
                          <span className="mx-2 text-xs text-muted-foreground">•</span>
                          <span className="text-xs text-muted-foreground">{article.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Komentar Terbaru</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      user: "Ahmad Fauzi",
                      comment: "Artikel yang sangat bermanfaat! Terima kasih atas informasinya.",
                      article: "Cara Menggunakan Supabase",
                      date: "1 jam yang lalu",
                    },
                    {
                      user: "Siti Rahayu",
                      comment: "Saya sudah mencoba tutorial ini dan berhasil. Sangat direkomendasikan!",
                      article: "Tutorial Next.js",
                      date: "3 jam yang lalu",
                    },
                    {
                      user: "Budi Santoso",
                      comment: "Apakah ada tutorial lanjutan untuk topik ini?",
                      article: "Panduan SEO",
                      date: "5 jam yang lalu",
                    },
                  ].map((comment, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex items-center">
                        <span className="font-semibold text-sm">{comment.user}</span>
                        <span className="mx-2 text-xs text-muted-foreground">pada</span>
                        <span className="text-xs text-primary">{comment.article}</span>
                      </div>
                      <p className="text-sm">{comment.comment}</p>
                      <p className="text-xs text-muted-foreground">{comment.date}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tugas Mendatang</CardTitle>
                <Button variant="outline" size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Tambah Tugas
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Update konten halaman Tentang Kami",
                      deadline: "Besok, 10:00",
                      priority: "Tinggi",
                    },
                    {
                      title: "Publikasikan artikel SEO baru",
                      deadline: "Jumat, 15:00",
                      priority: "Sedang",
                    },
                    {
                      title: "Review komentar yang tertunda",
                      deadline: "Minggu depan",
                      priority: "Rendah",
                    },
                  ].map((task, index) => (
                    <div key={index} className="flex items-center">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">{task.title}</p>
                        <div className="flex items-center pt-2">
                          <span className="text-xs text-muted-foreground">{task.deadline}</span>
                          <span className="mx-2 text-xs text-muted-foreground">•</span>
                          <span
                            className={`text-xs ${
                              task.priority === "Tinggi"
                                ? "text-red-500"
                                : task.priority === "Sedang"
                                  ? "text-amber-500"
                                  : "text-green-500"
                            }`}
                          >
                            {task.priority}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
