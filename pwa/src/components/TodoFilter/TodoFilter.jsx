import React from "react";

const TodoFilter = ({ handleFilterChange }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Buscar tarea..."
        className="todo-input rounded-full"
        onChange={(e) => handleFilterChange(e.target.value)}
      />
    </div>
  );
};

export default TodoFilter;
