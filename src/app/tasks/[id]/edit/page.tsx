import { TaskForm } from "@/components/task-form"
import prisma from "@/lib/prisma"
import { redirect } from "next/navigation"

async function EditTask({ params }: {
    params: {
        id: string
    }
}) {

    const task = await prisma.task.findFirst({
        where: {
            id: parseInt(params.id)
        }
    })

    if (!task) {
        redirect("/")
    }

    return (
        <div className="flex justify-center items-center my-7">
            <TaskForm task={task} />
        </div>
    )
}

export default EditTask