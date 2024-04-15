const TodoForm = () => {
  return (
    <form className="TodoForm">
      <input
        type="text"
        className="todo-input"
        placeholder="¿Que tenes que hacer?"
      />
      <button type="submit" className="todo-btn">
        Agregar
      </button>
    </form>
  );
};

export default TodoForm;
