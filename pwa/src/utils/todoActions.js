import { v4 as uuidv4 } from "uuid";

export const addTodo = (todos, setTodos, setTotalTodos, task) => {
  const newTodo = {
    id: uuidv4(),
    task: task,
    completed: false,
    isEditing: false,
  };

  setTodos([...todos, newTodo]);
  setTotalTodos((prev) => prev + 1);
};

export const deleteTodo = (
  todos,
  setTodos,
  setTotalTodos,
  setCompletedTodos,
  id
) => {
  const deletedTodo = todos.find((todo) => todo.id === id);
  const newTodos = todos.filter((todo) => todo.id !== id);

  setTodos(newTodos);
  setTotalTodos((prev) => prev - 1);

  if (deletedTodo && deletedTodo.completed) {
    setCompletedTodos((prev) => prev - 1);
  }
};

export const toggleComplete = (todos, setTodos, setCompletedTodos, id) => {
  const updatedTodos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );

  setTodos(updatedTodos);

  const currentCompleted = updatedTodos.filter((todo) => todo.completed).length;
  setCompletedTodos(currentCompleted);
};

export const updateTodo = (todos, setTodos, task, id) => {
  if (task.trim() === "") {
    return; // Si la tarea está vacía, no hacemos nada
  }

  const updatedTodos = todos.map((todo) =>
    todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
  );

  setTodos(updatedTodos);
};
