import React from "react";
import TodoItem from "../TodoItem";
import TodoSearch from "../TodoSearch";
import "../../style/TodoCounter.css";
import CreateTodoButton from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";

const TodoCounterUI = () => {
  const { completedTodos, totalTodos, error, loading, searchedTodos } =
    React.useContext(TodoContext);

  return (
    <div className="layout-container">
      <div className="welcome">
        <h3>Hola!</h3>
        <h1>¿Cuál es tu prioridad?</h1>
        <p>
          Has completado {completedTodos} de {totalTodos} TODOs
        </p>
      </div>
      <TodoSearch />
      <div className="container-list">
        <ul className="list-ToDos">
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
        </ul>
      </div>
      <div className="container-buttonCreate-ToDo">
        <CreateTodoButton />
      </div>
      <footer>
        <div> Develop for Sayroback</div>
      </footer>
    </div>
  );
};

export default TodoCounterUI;
