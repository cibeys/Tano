import Link from "next/link"
import { getSupabaseServerClient } from "@/lib/supabase/server"
import { Button } from "@/components/ui/button"
import { Plus, Edit, Eye } from "lucide-react"
import { format } from "date-fns"
import { Badge } from "@/components/ui/badge"
import { DeletePostButton } from "@/components/blog/delete-post-button"

export const metadata = {
  title: "Manage Posts - Ozuxa Dashboard",
  description: "Manage your blog posts",
}

export default async function PostsPage() {
  const supabase = getSupabaseServerClient()

  const { data: posts, error } = await supabase
    .from("posts")
    .select(`
      id,
      title,
      slug,
      status,
      published_at,
      view_count,
      category:category_id(name),
      author:author_id(username, full_name)
    `)
    .order("created_at", { ascending: false })

  return (
    <div className="container py-10">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Posts</h1>
          <p className="text-muted-foreground">Manage your blog posts</p>
        </div>
        <Button asChild>
          <Link href="/dashboard/posts/create">
            <Plus className="mr-2 h-4 w-4" /> New Post
          </Link>
        </Button>
      </div>

      <div className="rounded-md border">
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="[&_tr]:border-b">
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <th className="h-12 px-4 text-left align-middle font-medium">Title</th>
                <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                <th className="h-12 px-4 text-left align-middle font-medium">Category</th>
                <th className="h-12 px-4 text-left align-middle font-medium">Author</th>
                <th className="h-12 px-4 text-left align-middle font-medium">Published</th>
                <th className="h-12 px-4 text-left align-middle font-medium">Views</th>
                <th className="h-12 px-4 text-left align-middle font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="[&_tr:last-child]:border-0">
              {posts?.length === 0 && (
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td colSpan={7} className="p-4 text-center text-muted-foreground">
                    No posts found. Create your first post.
                  </td>
                </tr>
              )}
              {posts?.map((post) => (
                <tr
                  key={post.id}
                  className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                >
                  <td className="p-4 align-middle">{post.title}</td>
                  <td className="p-4 align-middle">
                    <Badge variant={post.status === "published" ? "default" : "secondary"}>
                      {post.status === "published" ? "Published" : "Draft"}
                    </Badge>
                  </td>
                  <td className="p-4 align-middle">{post.category?.name}</td>
                  <td className="p-4 align-middle">{post.author?.full_name || post.author?.username}</td>
                  <td className="p-4 align-middle">
                    {post.published_at ? format(new Date(post.published_at), "MMM d, yyyy") : "—"}
                  </td>
                  <td className="p-4 align-middle">{post.view_count || 0}</td>
                  <td className="p-4 align-middle">
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" asChild>
                        <Link href={`/blog/${post.slug}`}>
                          <Eye className="h-4 w-4" />
                          <span className="sr-only">View</span>
                        </Link>
                      </Button>
                      <Button variant="ghost" size="icon" asChild>
                        <Link href={`/dashboard/posts/edit/${post.id}`}>
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Link>
                      </Button>
                      <DeletePostButton postId={post.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
