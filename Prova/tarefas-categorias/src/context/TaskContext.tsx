import { createContext, useContext, useState, type ReactNode } from "react";

interface Category {
  id: number;
  name: string;
}

interface Task {
  id: number;
  categoryId: number;
  name: string;
  completed: boolean;
}

interface TaskContextType {
  categories: Category[];
  tasks: Task[];
  addCategory: (name: string) => void;
  addTask: (categoryId: number, name: string) => void;
  toggleTaskCompleted: (taskId: number) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);

  const addCategory = (name: string) => {
    setCategories([...categories, { id: Date.now(), name }]);
  };

  const addTask = (categoryId: number, name: string) => {
    setTasks([
      ...tasks,
      { id: Date.now(), categoryId, name, completed: false }
    ]);
  };

  const toggleTaskCompleted = (taskId: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <TaskContext.Provider
      value={{ categories, tasks, addCategory, addTask, toggleTaskCompleted }}
    >
      {children}
    </TaskContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTasks = () => {
  const ctx = useContext(TaskContext);
  if (!ctx) throw new Error("useTasks must be used inside TaskProvider");
  return ctx;
};
