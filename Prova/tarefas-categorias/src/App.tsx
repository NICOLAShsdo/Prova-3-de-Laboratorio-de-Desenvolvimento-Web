import "./App.css";
import AddCategory from "./components/AddCategory";
import CategoryList from "./components/CategoryList";
import { TaskProvider } from "./context/TaskContext";

export default function App() {
  return (
    <TaskProvider>
      <div className="app-container">
        <h1>Gerenciador de Tarefas por Categoria</h1>
        <AddCategory />
        <CategoryList />
      </div>
    </TaskProvider>
  );
}
