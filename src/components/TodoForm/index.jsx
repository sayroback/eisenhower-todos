import React from "react";
import { TodoContext } from "../TodoContext";

const TodoForm = () => {
  const [newTodo, setNewTodo] = React.useState({
    title: "Cebolla",
    note: "nota",
    completed: false,
    priority: "Postergar",
    dueDate: {
      hour: 0,
      minutes: 0,
      day: 0,
      month: 0,
      year: 0,
    },
  });
  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodo.note(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodo);
    setOpenModal(false);
  };

  return (
    <form className="todo-modal__form" onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <input type="text" value={newTodo.title} />
      <textarea
        value={newTodo}
        onChange={onChange}
        placeholder="Cortar la cebolla para el almuerzo"
      />
      <div className="todo-modal__form__buttons">
        <button
          type="button"
          className="todo-modal__form__buttons__button todo-modal__form__buttons__button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="todo-modal__form__buttons__button todo-modal__form__buttons__button--add"
        >
          Añadir
        </button>
      </div>
    </form>
  );
};

export { TodoForm };
