import { createClient } from "@supabase/supabase-js"
import type { Session, User } from "@supabase/supabase-js"

// Create a singleton to prevent multiple instances
let supabaseClient: ReturnType<typeof createClient> | null = null

export function getSupabaseClient() {
  if (!supabaseClient) {
    supabaseClient = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
  }

  return supabaseClient
}

export async function signUp(email: string, password: string, metadata?: { [key: string]: any }) {
  const supabase = getSupabaseClient()

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: metadata,
    },
  })

  return { data, error }
}

export async function signIn(email: string, password: string) {
  const supabase = getSupabaseClient()

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  return { data, error }
}

export async function signOut() {
  const supabase = getSupabaseClient()

  const { error } = await supabase.auth.signOut()

  return { error }
}

export async function getSession(): Promise<Session | null> {
  const supabase = getSupabaseClient()

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return session
}

export async function getUser(): Promise<User | null> {
  const supabase = getSupabaseClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return user
}

export async function resetPassword(email: string) {
  const supabase = getSupabaseClient()

  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/reset-password`,
  })

  return { data, error }
}

export async function updatePassword(password: string) {
  const supabase = getSupabaseClient()

  const { data, error } = await supabase.auth.updateUser({
    password,
  })

  return { data, error }
}
