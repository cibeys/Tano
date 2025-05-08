import Link from "next/link"
import Image from "next/image"
import { formatDistanceToNow } from "date-fns"
import { id } from "date-fns/locale"
import { MessageSquare, Eye } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface PostCardProps {
  post: {
    id: number | string
    title: string
    slug: string
    excerpt?: string
    featured_image?: string
    published_at: string
    view_count?: number
    category?: {
      name: string
      slug: string
    }
    author?: {
      username: string
      full_name?: string
      avatar_url?: string
    }
    comments_count?: number
  }
}

export function PostCard({ post }: PostCardProps) {
  const formattedDate = post.published_at
    ? formatDistanceToNow(new Date(post.published_at), { addSuffix: true, locale: id })
    : ""

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <Link href={`/blog/${post.slug}`}>
        <div className="aspect-video w-full overflow-hidden">
          <Image
            src={post.featured_image || "/placeholder.svg?height=400&width=600"}
            alt={post.title}
            width={600}
            height={400}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
        </div>
      </Link>
      <CardHeader className="p-4 pb-0">
        {post.category && (
          <Link href={`/blog/category/${post.category.slug}`}>
            <Badge variant="secondary" className="mb-2">
              {post.category.name}
            </Badge>
          </Link>
        )}
        <Link href={`/blog/${post.slug}`} className="hover:underline">
          <h3 className="line-clamp-2 text-xl font-bold">{post.title}</h3>
        </Link>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        {post.excerpt && <p className="line-clamp-3 text-muted-foreground">{post.excerpt}</p>}
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <div className="flex items-center space-x-2">
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={post.author?.avatar_url || "/placeholder.svg?height=32&width=32"}
              alt={post.author?.full_name || post.author?.username || "Author"}
            />
            <AvatarFallback>
              {post.author?.full_name?.charAt(0) || post.author?.username?.charAt(0) || "A"}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{post.author?.full_name || post.author?.username}</p>
            <p className="text-xs text-muted-foreground">{formattedDate}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-muted-foreground">
          {post.view_count !== undefined && (
            <div className="flex items-center text-xs">
              <Eye className="mr-1 h-3 w-3" />
              {post.view_count}
            </div>
          )}
          {post.comments_count !== undefined && (
            <div className="flex items-center text-xs">
              <MessageSquare className="mr-1 h-3 w-3" />
              {post.comments_count}
            </div>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
