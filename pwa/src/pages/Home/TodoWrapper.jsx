import React, { useState } from "react";
import { Todo } from "../../components/Todo/Todo";
import { TodoForm } from "../../components/TodoForm/TodoForm";
import TodoFilter from "../../components/TodoFilter/TodoFilter";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "../../components/EditTodoForm";
import Titulo from "../../components/Titulo/Titulo";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [totalTodos, setTotalTodos] = useState(0);
  const [completedTodos, setCompletedTodos] = useState(0);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    setTotalTodos(totalTodos + 1);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => {
      const deletedTodo = prevTodos.find((todo) => todo.id === id);
      const newTodos = prevTodos.filter((todo) => todo.id !== id);

      // Decrement totalTodos
      setTotalTodos(totalTodos - 1);

      // Decrement completedTodos if the deleted todo was completed
      if (deletedTodo && deletedTodo.completed) {
        setCompletedTodos(completedTodos - 1);
      }

      return newTodos;
    });
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );

      const currentCompleted = updatedTodos.filter(
        (todo) => todo.completed
      ).length;
      setCompletedTodos(currentCompleted);

      return updatedTodos;
    });
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
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
      <TodoForm addTodo={addTodo} />

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
              <EditTodoForm key={todo.id} editTodo={editTask} task={todo} />
            ) : (
              <Todo
                key={todo.id}
                task={todo}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
                toggleComplete={toggleComplete}
              />
            )
          )
        : null}
    </div>
  );
};
