import { useState } from "react";
import { useTasks } from "../context/TaskContext";

export default function AddTask({ categoryId }: { categoryId: number }) {
  const { addTask } = useTasks();
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskName.trim()) return;
    addTask(categoryId, taskName);
    setTaskName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nova tarefa"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
