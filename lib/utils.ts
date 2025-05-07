import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Converts a string to a URL-friendly slug
 * @param text The text to convert to a slug
 * @returns A URL-friendly slug
 */
export function slugify(text: string): string {
  return text
    .toString()
    .normalize("NFKD") // normalize non-ASCII characters
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .replace(/[^\w-]+/g, "") // remove all non-word chars
    .replace(/--+/g, "-") // replace multiple hyphens with single hyphen
    .replace(/^-+/, "") // trim hyphens from start
    .replace(/-+$/, "") // trim hyphens from end
}
