import React from "react";
import TodoItem from "../TodoItem";
import TodoSearch from "../TodoSearch";
import "../../style/todo-styles.scss";
import CreateTodoButton from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

const TodoCounterUI = () => {
  const {
    completedTodos,
    totalTodos,
    error,
    loading,
    searchedTodos,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <>
      <header className="welcome">
        <h3>Hola!</h3>
        <h1>¿Cuál es tu prioridad?</h1>
        <p>
          Has completado {completedTodos} de {totalTodos} TODOs
        </p>
      </header>
      <TodoSearch />
      <main className="grid-todos">
        <section className="grid-todos__list">
          {error && <p>Desespérate, hubo un error...</p>}
          {loading && <p>Estamos cargando, no desesperes...</p>}
          {!loading && !searchedTodos.length && <p>¡Crea tu primer TODO!</p>}
          {searchedTodos.map((todo, key) => (
            <TodoItem
              key={key}
              todo={todo}
              // onComplete={() => completeTodo(todo.title)}
              // onDelete={() => deleteTodo(todo.title)}
            />
          ))}
        </section>
      </main>
      <div className="create-todo">
        {!!openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}
        <CreateTodoButton setOpenModal={setOpenModal} />
      </div>
      <footer className="todos-footer">
        <div> Develop for Sayroback</div>
      </footer>
    </>
  );
};

export default TodoCounterUI;
