import { createClient } from "@supabase/supabase-js"
import { cookies } from "next/headers"

export function getSupabaseServerClient() {
  const cookieStore = cookies()

  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
    auth: {
      persistSession: false,
    },
    cookies: {
      get(name) {
        return cookieStore.get(name)?.value
      },
    },
  })

  return supabase
}
