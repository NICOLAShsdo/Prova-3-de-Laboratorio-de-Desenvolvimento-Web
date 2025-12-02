import { useState } from "react";
import { useTasks } from "../context/TaskContext";

export default function AddCategory() {
  const { addCategory } = useTasks();
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    addCategory(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Adicionar Categoria</h3>
      <input
        type="text"
        placeholder="Nome da categoria"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
