import { removeTask } from '@/actions/task-actions'
import { Button } from './ui/button'
import { Task } from '@prisma/client'

function TaskButtonDelete({taskId}: {taskId: number}) {
    return (
        <form action={removeTask}>
            <input type="hidden" name='taskId' value={taskId} />
            <Button variant={"danger"}>
                Delete
            </Button>
        </form>
    )
}

export default TaskButtonDelete
