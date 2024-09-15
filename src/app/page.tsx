import TaskCard from "@/components/task-card";
import prisma from "@/lib/prisma";
import React from "react";

async function HomePage() {
  const tasks = await prisma.task.findMany();
  console.log(tasks);
  return (
    <div className="grid grid-cols-4 gap-x-2">
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
}

export default HomePage;
