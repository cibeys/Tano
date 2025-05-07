"use client"

import { useState, useEffect } from "react"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"
import { useAuth } from "./use-auth"

export function useDashboardComponents() {
  const [components, setComponents] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { user } = useAuth()
  const supabase = getSupabaseBrowserClient()

  useEffect(() => {
    if (!user) return

    const fetchComponents = async () => {
      setLoading(true)
      const { data, error } = await supabase
        .from("dashboard_components")
        .select("*")
        .eq("user_id", user.id)
        .order("position", { ascending: true })

      if (error) {
        setError(error.message)
      } else {
        setComponents(data || [])
      }
      setLoading(false)
    }

    fetchComponents()

    // Subscribe to changes
    const channel = supabase
      .channel("dashboard_components_changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "dashboard_components",
          filter: `user_id=eq.${user.id}`,
        },
        () => {
          fetchComponents()
        },
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [user, supabase])

  const addComponent = async (componentType: string) => {
    if (!user) return { error: "User not authenticated" }

    // Get the highest position
    const maxPosition = components.length > 0 ? Math.max(...components.map((c) => c.position)) : -1

    const { error } = await supabase.from("dashboard_components").insert({
      user_id: user.id,
      component_type: componentType,
      position: maxPosition + 1,
      settings: {},
    })

    return { error: error?.message }
  }

  const updateComponent = async (id: string, settings: any) => {
    if (!user) return { error: "User not authenticated" }

    const { error } = await supabase
      .from("dashboard_components")
      .update({ settings })
      .eq("id", id)
      .eq("user_id", user.id)

    return { error: error?.message }
  }

  const removeComponent = async (id: string) => {
    if (!user) return { error: "User not authenticated" }

    const { error } = await supabase.from("dashboard_components").delete().eq("id", id).eq("user_id", user.id)

    return { error: error?.message }
  }

  const reorderComponents = async (orderedIds: string[]) => {
    if (!user || orderedIds.length === 0) return { error: "Invalid operation" }

    // Create a batch of updates
    const updates = orderedIds.map((id, index) => ({
      id,
      position: index,
    }))

    // Use a transaction to update all positions
    const { error } = await supabase.rpc("update_component_positions", {
      updates: updates,
      user_id: user.id,
    })

    return { error: error?.message }
  }

  return {
    components,
    loading,
    error,
    addComponent,
    updateComponent,
    removeComponent,
    reorderComponents,
  }
}
