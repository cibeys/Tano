"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import { TiptapEditor } from "@/components/blog/editor/tiptap-editor"
import { FileUploader } from "@/components/file-upload/file-uploader"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { getSupabaseClient } from "@/lib/supabase/client"
import { slugify } from "@/lib/utils"
import { useAuth } from "@/contexts/auth-context"

export default function CreatePostPage() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [categoryId, setCategoryId] = useState("")
  const [featuredImage, setFeaturedImage] = useState("")
  const [status, setStatus] = useState("draft")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [categories, setCategories] = useState<any[]>([])
  const router = useRouter()
  const { user } = useAuth()

  // Fetch categories on component mount
  useState(() => {
    const fetchCategories = async () => {
      try {
        const supabase = getSupabaseClient()
        const { data, error } = await supabase.from("categories").select("id, name").order("name")

        if (error) {
          throw error
        }

        setCategories(data || [])
      } catch (err: any) {
        console.error("Error fetching categories:", err.message)
      }
    }

    fetchCategories()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    if (!title) {
      setError("Title is required")
      setIsLoading(false)
      return
    }

    if (!content) {
      setError("Content is required")
      setIsLoading(false)
      return
    }

    if (!categoryId) {
      setError("Category is required")
      setIsLoading(false)
      return
    }

    try {
      const supabase = getSupabaseClient()

      // Generate slug from title
      const slug = slugify(title)

      // Check if slug already exists
      const { data: existingPost } = await supabase.from("posts").select("id").eq("slug", slug).single()

      if (existingPost) {
        setError("A post with this title already exists. Please choose a different title.")
        setIsLoading(false)
        return
      }

      // Prepare post data
      const postData = {
        title,
        slug,
        content,
        excerpt: excerpt || title,
        featured_image: featuredImage,
        category_id: categoryId,
        author_id: user?.id,
        status,
        published_at: status === "published" ? new Date().toISOString() : null,
      }

      // Insert post
      const { data, error } = await supabase.from("posts").insert(postData).select()

      if (error) {
        throw error
      }

      // Redirect to post list
      router.push("/dashboard/posts")
      router.refresh()
    } catch (err: any) {
      setError(err.message || "Failed to create post")
    } finally {
      setIsLoading(false)
    }
  }

  const handleImageUpload = (url: string) => {
    setFeaturedImage(url)
  }

  return (
    <div className="container py-10">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Create New Post</h1>
        <p className="text-muted-foreground">Create a new blog post</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 mb-6">
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Post title"
              className="text-lg"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="content">Content</Label>
            <TiptapEditor content={content} onChange={setContent} placeholder="Write your post content here..." />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="excerpt">Excerpt</Label>
            <Textarea
              id="excerpt"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Brief summary of your post (optional)"
              className="resize-none"
              rows={3}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="category">Category</Label>
            <Select value={categoryId} onValueChange={setCategoryId}>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="featured-image">Featured Image</Label>
            {featuredImage ? (
              <div className="relative">
                <img
                  src={featuredImage || "/placeholder.svg"}
                  alt="Featured"
                  className="w-full h-48 object-cover rounded-md"
                />
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute top-2 right-2"
                  onClick={() => setFeaturedImage("")}
                  type="button"
                >
                  Change Image
                </Button>
              </div>
            ) : (
              <Card>
                <CardContent className="p-4">
                  <FileUploader
                    onUploadComplete={handleImageUpload}
                    acceptedFileTypes={["image/*"]}
                    maxFileSizeMB={2}
                    folder="featured-images"
                  />
                </CardContent>
              </Card>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="status">Status</Label>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger id="status">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="published">Published</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <Button variant="outline" onClick={() => router.back()} type="button">
            Cancel
          </Button>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Creating..." : "Create Post"}
          </Button>
        </div>
      </form>
    </div>
  )
}
