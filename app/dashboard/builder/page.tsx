import type { Metadata } from "next"
import { DashboardBuilder } from "@/components/dashboard/builder/dashboard-builder"

export const metadata: Metadata = {
  title: "Dashboard Builder - Ozuxa",
  description: "Customize your dashboard with the dashboard builder",
}

export default function DashboardBuilderPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard Builder</h1>
        <p className="text-muted-foreground">
          Customize your dashboard by adding, removing, and rearranging components.
        </p>
      </div>

      <DashboardBuilder />
    </div>
  )
}
