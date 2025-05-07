"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ComponentSettingsProps {
  type: string
  settings: any
  onSave: (settings: any) => void
}

export function ComponentSettings({ type, settings, onSave }: ComponentSettingsProps) {
  const [loading, setLoading] = useState(false)

  // Get the schema based on component type
  const schema = getSchemaForType(type)

  // Create form with react-hook-form and zod validation
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      ...getDefaultValuesForType(type),
      ...settings,
    },
  })

  const onSubmit = async (values: z.infer<typeof schema>) => {
    setLoading(true)
    try {
      onSave(values)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
        {renderFieldsForType(type, form)}
        <div className="flex justify-end">
          <Button type="submit" disabled={loading}>
            {loading ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </form>
    </Form>
  )
}

function getSchemaForType(type: string) {
  switch (type) {
    case "stats":
      return z.object({
        title: z.string().min(1, "Title is required"),
        value: z.string().min(1, "Value is required"),
        icon: z.string().optional(),
        color: z.string().optional(),
      })
    case "chart":
      return z.object({
        title: z.string().min(1, "Title is required"),
        chartType: z.enum(["bar", "line", "pie"]),
        dataSource: z.string().optional(),
      })
    case "recent-posts":
      return z.object({
        title: z.string().min(1, "Title is required"),
        limit: z.string().transform((val) => Number.parseInt(val, 10)),
        showExcerpt: z.boolean().optional(),
      })
    case "recent-comments":
      return z.object({
        title: z.string().min(1, "Title is required"),
        limit: z.string().transform((val) => Number.parseInt(val, 10)),
      })
    case "quick-actions":
      return z.object({
        title: z.string().min(1, "Title is required"),
        actions: z.string().optional(),
      })
    case "activity-log":
      return z.object({
        title: z.string().min(1, "Title is required"),
        limit: z.string().transform((val) => Number.parseInt(val, 10)),
      })
    default:
      return z.object({
        title: z.string().min(1, "Title is required"),
      })
  }
}

function getDefaultValuesForType(type: string) {
  switch (type) {
    case "stats":
      return {
        title: "Statistics",
        value: "0",
        icon: "activity",
        color: "blue",
      }
    case "chart":
      return {
        title: "Chart",
        chartType: "bar",
        dataSource: "",
      }
    case "recent-posts":
      return {
        title: "Recent Posts",
        limit: "5",
        showExcerpt: false,
      }
    case "recent-comments":
      return {
        title: "Recent Comments",
        limit: "5",
      }
    case "quick-actions":
      return {
        title: "Quick Actions",
        actions: "New Post, New Page",
      }
    case "activity-log":
      return {
        title: "Activity Log",
        limit: "10",
      }
    default:
      return {
        title: "Component",
      }
  }
}

function renderFieldsForType(type: string, form: any) {
  switch (type) {
    case "stats":
      return (
        <>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="value"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Value</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="color"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Color</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a color" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="blue">Blue</SelectItem>
                    <SelectItem value="green">Green</SelectItem>
                    <SelectItem value="red">Red</SelectItem>
                    <SelectItem value="yellow">Yellow</SelectItem>
                    <SelectItem value="purple">Purple</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </>
      )
    case "chart":
      return (
        <>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="chartType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Chart Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a chart type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="bar">Bar Chart</SelectItem>
                    <SelectItem value="line">Line Chart</SelectItem>
                    <SelectItem value="pie">Pie Chart</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dataSource"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Data Source (optional)</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </>
      )
    default:
      return (
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )
  }
}
