import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import clsx from 'clsx'
import { Task } from '@prisma/client'
import TaskButtonDelete from './task-button-delete'
import Link from 'next/link'

function TaskCard({task}: {task: Task}) {
  return (
    <Card>
          <CardHeader className="flex flex-row justify-between">
            <CardTitle>{task.name}</CardTitle>
            <Badge className={clsx({
              "bg-red-500": task.priority === "urgent",
              "bg-orange-500": task.priority === "high",
              "bg-yellow-500": task.priority === "mid",
              "bg-green-500": task.priority === "low"
            })}>
              {task.priority}
            </Badge>
          </CardHeader>
          <CardContent>
            <p>{task.description}</p>
            <span className="text-slate-500">{new Date(task.createdAt).toLocaleDateString()}</span>
          </CardContent>
          <CardFooter className="flex gap-x-2 justify-end">
            <Link href={`/tasks/${task.id}/edit`}>
              <Button variant={"warning"}>Edit</Button>
            </Link>
            <TaskButtonDelete taskId={task.id} />
          </CardFooter>
        </Card>
  )
}

export default TaskCard