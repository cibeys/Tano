"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface Activity {
  id: string
  user: {
    name: string
    email: string
    avatar?: string
  }
  action: string
  target: string
  date: string
}

interface RecentActivityWidgetProps {
  activities: Activity[]
  className?: string
}

export function RecentActivityWidget({ activities, className }: RecentActivityWidgetProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Aktivitas Terbaru</CardTitle>
        <CardDescription>Ada {activities.length} aktivitas terbaru</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarImage src={activity.user.avatar || "/placeholder.svg"} alt={activity.user.name} />
                <AvatarFallback>
                  {activity.user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">
                  <span className="font-semibold">{activity.user.name}</span> {activity.action}{" "}
                  <span className="font-medium text-primary">{activity.target}</span>
                </p>
                <p className="text-sm text-muted-foreground">{activity.date}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
