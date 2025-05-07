import { createClient } from "@supabase/supabase-js"
import type { Database } from "@/lib/types/database.types"

// Klien Supabase dengan hak akses admin (service role)
// HANYA GUNAKAN DI SERVER SIDE!
export const getSupabaseAdmin = () => {
  return createClient<Database>(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })
}
