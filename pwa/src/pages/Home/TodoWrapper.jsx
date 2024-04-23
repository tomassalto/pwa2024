import React, { useState } from "react";
import { Todo } from "../../components/Todo/Todo";
import { TodoForm } from "../../components/TodoForm/TodoForm";
import TodoFilter from "../../components/TodoFilter/TodoFilter";
import Titulo from "../../components/Titulo/Titulo";
import { addTodo, deleteTodo, toggleComplete } from "../../utils/todoActions";
import { EditTodoForm } from "../../components/EditTodoForm/EditTodoForm";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [totalTodos, setTotalTodos] = useState(0);
  const [completedTodos, setCompletedTodos] = useState(0);

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const updateTodo = (task, id) => {
    const trimmedTask = task.trim();

    if (trimmedTask === "") {
      return;
    }

    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, task: trimmedTask, isEditing: !todo.isEditing }
          : todo
      )
    );
  };

  const handleAddTodo = (todo) => {
    addTodo(todos, setTodos, setTotalTodos, todo);
  };

  const handleDeleteTodo = (id) => {
    deleteTodo(todos, setTodos, setTotalTodos, setCompletedTodos, id);
  };

  const handleToggleComplete = (id) => {
    toggleComplete(todos, setTodos, setCompletedTodos, id);
  };

  const handleFilterChange = (value) => {
    setFilterValue(value);

    const filtered = todos.filter((todo) =>
      todo.task.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredTodos(filtered);
  };

  const displayTodos = filterValue ? filteredTodos : todos;

  return (
    <div className="TodoWrapper">
      <Titulo text={`¡Todo App!`} />
      <div className="mb-4">
        {totalTodos > 0 ? (
          <>
            <p className="font-bold">
              Total de <span className="txt-todo">Todos</span>:{" "}
              <span className="count">{totalTodos}</span>
            </p>
            <p className="font-bold">
              <span className="txt-todo">Todos</span> completados:{" "}
              <span className="count">{completedTodos}</span>
            </p>
            {completedTodos === totalTodos && (
              <p className="">
                <span className="text-yellow-300">¡Felicidades!</span>{" "}
                Completaste todas tus tareas.
              </p>
            )}
          </>
        ) : (
          <p>¿Qué tenés que hacer hoy?</p>
        )}
      </div>
      <TodoForm addTodo={handleAddTodo} />

      {/* Mostrar TodoFilter solo si hay más de un todo */}
      {totalTodos > 1 && (
        <div>
          <p>¿No encontras tu tarea?</p>
          <TodoFilter handleFilterChange={handleFilterChange} />
        </div>
      )}

      {/* Mostrar mensaje si no hay coincidencias con el filtro */}
      {filterValue && filteredTodos.length === 0 && (
        <p className="">No hay tareas que coincidan con la búsqueda.</p>
      )}
      {/* Display Todos or Message */}
      {displayTodos.length > 0
        ? displayTodos.map((todo) =>
            todo.isEditing ? (
              <EditTodoForm key={todo.id} editTodo={updateTodo} task={todo} />
            ) : (
              <Todo
                key={todo.id}
                task={todo}
                deleteTodo={() => handleDeleteTodo(todo.id)}
                editTodo={editTodo}
                toggleComplete={() => handleToggleComplete(todo.id)}
              />
            )
          )
        : null}
    </div>
  );
};
