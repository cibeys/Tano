"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Upload, X, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { getSupabaseClient } from "@/lib/supabase/client"
import { v4 as uuidv4 } from "uuid"

interface FileUploaderProps {
  onUploadComplete: (url: string, fileData?: any) => void
  acceptedFileTypes?: string[]
  maxFileSizeMB?: number
  bucket?: string
  folder?: string
}

export function FileUploader({
  onUploadComplete,
  acceptedFileTypes = ["image/*"],
  maxFileSizeMB = 10,
  bucket = "media",
  folder = "uploads",
}: FileUploaderProps) {
  const [file, setFile] = useState<File | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    setError(null)

    if (!selectedFile) {
      return
    }

    // Check file type
    const fileType = selectedFile.type
    const isValidType = acceptedFileTypes.some((type) => {
      if (type.endsWith("/*")) {
        const mainType = type.split("/")[0]
        return fileType.startsWith(`${mainType}/`)
      }
      return type === fileType
    })

    if (!isValidType) {
      setError(`Invalid file type. Accepted types: ${acceptedFileTypes.join(", ")}`)
      return
    }

    // Check file size
    const maxSizeBytes = maxFileSizeMB * 1024 * 1024
    if (selectedFile.size > maxSizeBytes) {
      setError(`File size exceeds the maximum limit of ${maxFileSizeMB}MB`)
      return
    }

    setFile(selectedFile)
  }

  const uploadFile = async () => {
    if (!file) return

    setUploading(true)
    setProgress(0)
    setError(null)

    try {
      const supabase = getSupabaseClient()

      // Create a unique file name to prevent collisions
      const fileExt = file.name.split(".").pop()
      const fileName = `${uuidv4()}.${fileExt}`
      const filePath = folder ? `${folder}/${fileName}` : fileName

      // Upload the file
      const { data, error } = await supabase.storage.from(bucket).upload(filePath, file, {
        cacheControl: "3600",
        upsert: false,
        onUploadProgress: (progress) => {
          const percent = Math.round((progress.loaded / progress.total) * 100)
          setProgress(percent)
        },
      })

      if (error) {
        throw error
      }

      // Get the public URL
      const {
        data: { publicUrl },
      } = supabase.storage.from(bucket).getPublicUrl(data.path)

      // Save file metadata to the database
      const { data: mediaData, error: mediaError } = await supabase
        .from("media")
        .insert({
          file_name: file.name,
          file_path: data.path,
          file_type: file.type,
          file_size: file.size,
          alt_text: file.name,
        })
        .select()
        .single()

      if (mediaError) {
        console.error("Error saving media metadata:", mediaError)
      }

      // Call the callback with the URL and file data
      onUploadComplete(publicUrl, mediaData || { path: data.path })

      // Reset the state
      setFile(null)
      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }
    } catch (err: any) {
      setError(err.message || "Failed to upload file")
    } finally {
      setUploading(false)
    }
  }

  const cancelUpload = () => {
    setFile(null)
    setError(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className="space-y-4">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {!file ? (
        <div className="border-2 border-dashed rounded-lg p-6 text-center">
          <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
          <p className="mb-2 text-sm text-muted-foreground">Drag and drop your file here, or click to browse</p>
          <p className="text-xs text-muted-foreground">Max file size: {maxFileSizeMB}MB</p>
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            onChange={handleFileChange}
            accept={acceptedFileTypes.join(",")}
          />
          <Button variant="outline" className="mt-4" onClick={() => fileInputRef.current?.click()} type="button">
            Select File
          </Button>
        </div>
      ) : (
        <div className="border rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <div className="mr-2 text-sm font-medium truncate max-w-[200px]">{file.name}</div>
              <div className="text-xs text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)}MB</div>
            </div>
            <Button variant="ghost" size="sm" onClick={cancelUpload} disabled={uploading} type="button">
              <X className="h-4 w-4" />
            </Button>
          </div>

          {uploading ? (
            <div className="space-y-2">
              <Progress value={progress} className="h-2" />
              <p className="text-xs text-center text-muted-foreground">Uploading... {progress}%</p>
            </div>
          ) : (
            <Button className="w-full" onClick={uploadFile} type="button">
              Upload
            </Button>
          )}
        </div>
      )}
    </div>
  )
}
