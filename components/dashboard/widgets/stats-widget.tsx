"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDown, ArrowUp, BarChart3, DollarSign, Users, Activity } from "lucide-react"

interface StatsWidgetProps {
  title: string
  value: string
  description?: string
  icon?: React.ReactNode
  change?: {
    value: string
    type: "increase" | "decrease"
  }
  className?: string
}

export function StatsWidget({ title, value, description, icon, change, className }: StatsWidgetProps) {
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="h-4 w-4 text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && <p className="text-xs text-muted-foreground">{description}</p>}
        {change && (
          <div className="flex items-center pt-1">
            {change.type === "increase" ? (
              <ArrowUp className="mr-1 h-3 w-3 text-emerald-500" />
            ) : (
              <ArrowDown className="mr-1 h-3 w-3 text-red-500" />
            )}
            <span className={`text-xs ${change.type === "increase" ? "text-emerald-500" : "text-red-500"}`}>
              {change.value}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export function StatsWidgetGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatsWidget
        title="Total Pengunjung"
        value="2,350"
        icon={<Users className="h-4 w-4" />}
        change={{ value: "12.5%", type: "increase" }}
      />
      <StatsWidget
        title="Pendapatan"
        value="Rp 15,456,000"
        icon={<DollarSign className="h-4 w-4" />}
        change={{ value: "8.2%", type: "increase" }}
      />
      <StatsWidget
        title="Artikel Dilihat"
        value="1,234"
        icon={<BarChart3 className="h-4 w-4" />}
        change={{ value: "5.1%", type: "decrease" }}
      />
      <StatsWidget
        title="Tingkat Konversi"
        value="3.2%"
        icon={<Activity className="h-4 w-4" />}
        change={{ value: "2.3%", type: "increase" }}
      />
    </div>
  )
}
