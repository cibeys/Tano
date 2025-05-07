"use client"

import { useState } from "react"
import { Draggable } from "@hello-pangea/dnd"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trash2, SettingsIcon, Grip } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ComponentSettings } from "./component-settings"

interface ComponentCardProps {
  id: string
  index: number
  type: string
  settings: any
  onRemove: (id: string) => void
  onUpdate: (id: string, settings: any) => void
}

export function ComponentCard({ id, index, type, settings, onRemove, onUpdate }: ComponentCardProps) {
  const [open, setOpen] = useState(false)

  const handleSettingsUpdate = (newSettings: any) => {
    onUpdate(id, newSettings)
    setOpen(false)
  }

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps} className="mb-4">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div {...provided.dragHandleProps} className="cursor-grab rounded p-1 hover:bg-muted">
                  <Grip className="h-4 w-4 text-muted-foreground" />
                </div>
                <CardTitle className="text-base">{getComponentTitle(type)}</CardTitle>
                <div className="flex gap-1">
                  <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <SettingsIcon className="h-4 w-4" />
                        <span className="sr-only">Settings</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Edit {getComponentTitle(type)}</DialogTitle>
                      </DialogHeader>
                      <ComponentSettings type={type} settings={settings} onSave={handleSettingsUpdate} />
                    </DialogContent>
                  </Dialog>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-destructive hover:bg-destructive/10 hover:text-destructive"
                    onClick={() => onRemove(id)}
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Remove</span>
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>{renderComponentPreview(type, settings)}</CardContent>
            <CardFooter className="pt-2">
              <p className="text-xs text-muted-foreground">{getComponentDescription(type)}</p>
            </CardFooter>
          </Card>
        </div>
      )}
    </Draggable>
  )
}

function getComponentTitle(type: string): string {
  const titles: Record<string, string> = {
    stats: "Statistics Card",
    chart: "Chart",
    "recent-posts": "Recent Posts",
    "recent-comments": "Recent Comments",
    "quick-actions": "Quick Actions",
    "activity-log": "Activity Log",
  }
  return titles[type] || "Component"
}

function getComponentDescription(type: string): string {
  const descriptions: Record<string, string> = {
    stats: "Displays key statistics and metrics",
    chart: "Visualizes data with customizable charts",
    "recent-posts": "Shows the most recent blog posts",
    "recent-comments": "Displays the latest comments",
    "quick-actions": "Provides shortcuts to common actions",
    "activity-log": "Shows recent activity in the system",
  }
  return descriptions[type] || "Dashboard component"
}

function renderComponentPreview(type: string, settings: any) {
  switch (type) {
    case "stats":
      return (
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">{settings.title || "Statistics"}</p>
            <p className="text-2xl font-bold">{settings.value || "0"}</p>
          </div>
          <div className="rounded-full bg-primary/10 p-2 text-primary">{/* Icon would go here */}</div>
        </div>
      )
    case "chart":
      return (
        <div className="h-[100px] w-full bg-muted/50 flex items-center justify-center">
          <p className="text-sm text-muted-foreground">Chart Preview</p>
        </div>
      )
    default:
      return (
        <div className="h-[60px] w-full bg-muted/50 flex items-center justify-center">
          <p className="text-sm text-muted-foreground">Component Preview</p>
        </div>
      )
  }
}
