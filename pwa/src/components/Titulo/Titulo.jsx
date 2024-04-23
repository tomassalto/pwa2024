const Titulo = ({ text }) => {
  const parts = text.split(/(Todo)/i); // Usamos una expresión regular para mantener la insensibilidad a mayúsculas y minúsculas

  return (
    <h1>
      {parts.map((part, index) =>
        part.toLowerCase() === "todo" ? (
          <span key={index} className="txt-todo">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </h1>
  );
};

export default Titulo;
