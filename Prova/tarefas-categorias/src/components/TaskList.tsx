import { useTasks } from "../context/TaskContext";

export default function TaskList({ categoryId }: { categoryId: number }) {
  const { tasks, toggleTaskCompleted } = useTasks();

  const tasksByCategory = tasks.filter((task) => task.categoryId === categoryId);

  return (
    <ul>
      {tasksByCategory.map((task) => (
        <li key={task.id} className="task-item">
  <input
    type="checkbox"
    checked={task.completed}
    onChange={() => toggleTaskCompleted(task.id)}
  />
  <span className={task.completed ? "task-completed" : ""}>
    {task.name}
  </span>
</li>

      ))}
    </ul>
  );
}

