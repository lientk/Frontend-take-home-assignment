import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'
/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

export type TodoFilterByStatus = 'all' | 'pending' | 'completed'

const Index = () => {
  const [filter, setFilter] = useState<TodoFilterByStatus>('all')

  const handleFilterChange = (value: string) => {
    setFilter(value as TodoFilterByStatus)
  }

  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>

        <Tabs.Root
          onValueChange={handleFilterChange}
          value={filter}
          defaultValue="all"
          orientation="vertical"
          className="mt-10"
        >
          <Tabs.List aria-label="todo">
            <Tabs.Trigger
              value="all"
              className={`mr-2 rounded-full border-[1px] border-gray-200 bg-white px-6 py-3 font-sans text-sm font-bold text-gray-700 hover:bg-gray-800 hover:text-white focus:outline-none data-[state=active]:border-none
                data-[state=active]:bg-gray-700 data-[state=active]:text-white
                `}
            >
              All
            </Tabs.Trigger>
            <Tabs.Trigger
              value="pending"
              className={`mr-2 rounded-full border-[1px] border-gray-200 bg-white px-6 py-3 font-sans text-sm font-bold text-gray-700 hover:bg-gray-800 hover:text-white focus:outline-none data-[state=active]:border-none
                data-[state=active]:bg-gray-700 data-[state=active]:text-white
                `}
            >
              Pending
            </Tabs.Trigger>
            <Tabs.Trigger
              value="completed"
              className={`mr-2 rounded-full border-[1px] border-gray-200 bg-white px-6 py-3 font-sans text-sm font-bold text-gray-700 hover:bg-gray-800 hover:text-white focus:outline-none data-[state=active]:border-none
                data-[state=active]:bg-gray-700 data-[state=active]:text-white
                `}
            >
              Completed
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value={filter}>
            <div className="pt-10">
              <TodoList filter={filter} />
            </div>
          </Tabs.Content>
        </Tabs.Root>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
