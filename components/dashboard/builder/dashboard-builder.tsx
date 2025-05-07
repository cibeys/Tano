"use client"
import { DragDropContext, Droppable } from "@hello-pangea/dnd"
import { ComponentCard } from "./component-card"
import { ComponentList } from "./component-list"
import { useDashboardComponents } from "@/lib/hooks/use-dashboard-components"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export function DashboardBuilder() {
  const { components, loading, error, addComponent, updateComponent, removeComponent, reorderComponents } =
    useDashboardComponents()

  const handleDragEnd = (result: any) => {
    if (!result.destination) return

    const sourceIndex = result.source.index
    const destinationIndex = result.destination.index

    if (sourceIndex === destinationIndex) return

    // Create a new array of component IDs in the new order
    const orderedIds = [...components].sort((a, b) => a.position - b.position).map((c) => c.id)

    // Move the dragged item to the new position
    const [removed] = orderedIds.splice(sourceIndex, 1)
    orderedIds.splice(destinationIndex, 0, removed)

    // Update the positions in the database
    reorderComponents(orderedIds)
  }

  const handleAddComponent = async (type: string) => {
    await addComponent(type)
  }

  const handleUpdateComponent = async (id: string, settings: any) => {
    await updateComponent(id, settings)
  }

  const handleRemoveComponent = async (id: string) => {
    await removeComponent(id)
  }

  if (loading) {
    return <div className="flex items-center justify-center p-8">Loading...</div>
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Dashboard Builder</h2>
        <ComponentList onAddComponent={handleAddComponent} />
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="dashboard-components">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-4">
              {components.length === 0 ? (
                <div className="flex h-[200px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center">
                  <h3 className="text-lg font-medium">No components added yet</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Add components to customize your dashboard</p>
                </div>
              ) : (
                components
                  .sort((a, b) => a.position - b.position)
                  .map((component, index) => (
                    <ComponentCard
                      key={component.id}
                      id={component.id}
                      index={index}
                      type={component.component_type}
                      settings={component.settings}
                      onRemove={handleRemoveComponent}
                      onUpdate={handleUpdateComponent}
                    />
                  ))
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}
