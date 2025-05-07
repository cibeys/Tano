"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { PlusCircle, BarChart, Activity, FileText, MessageSquare, Zap, Clock } from "lucide-react"

interface ComponentListProps {
  onAddComponent: (type: string) => void
}

export function ComponentList({ onAddComponent }: ComponentListProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Component
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => onAddComponent("stats")}>
          <Activity className="mr-2 h-4 w-4" />
          <span>Statistics Card</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onAddComponent("chart")}>
          <BarChart className="mr-2 h-4 w-4" />
          <span>Chart</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onAddComponent("recent-posts")}>
          <FileText className="mr-2 h-4 w-4" />
          <span>Recent Posts</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onAddComponent("recent-comments")}>
          <MessageSquare className="mr-2 h-4 w-4" />
          <span>Recent Comments</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onAddComponent("quick-actions")}>
          <Zap className="mr-2 h-4 w-4" />
          <span>Quick Actions</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onAddComponent("activity-log")}>
          <Clock className="mr-2 h-4 w-4" />
          <span>Activity Log</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
