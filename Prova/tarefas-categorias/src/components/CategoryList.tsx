import { useTasks } from "../context/TaskContext";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

export default function CategoryList() {
  const { categories } = useTasks();
  return (
    <div>
      {categories.map((cat) => (
        <div key={cat.id} className="category-block">
          <h2>{cat.name}</h2>
          <AddTask categoryId={cat.id} />
          <TaskList categoryId={cat.id} />
        </div>
      ))}
    </div>
  );
}

