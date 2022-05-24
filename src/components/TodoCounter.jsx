import React from "react";
// import styled from "styled-components";
import TodoItem from "./TodoItem";
import TodoSearch from "./TodoSearch";
import "../style/TodoCounter.css";
import CreateTodoButton from "./CreateTodoButton";
import { TODOS } from "./data/dataTODOs.js";

const TodoCounter = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const [todos, setTodos] = React.useState(TODOS);
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.title.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (props) => {
    const todoIndex = todos.findIndex((todo) => todo.title === props);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  };

  return (
    <div className="layout-container">
      <div className="welcome">
        <h3>Hola!</h3>
        <h1>¿Cuál es tu prioridad?</h1>
        <p>
          Has completado {completedTodos} de {totalTodos} TODOs
        </p>
      </div>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="container-list">
        <ul className="list-ToDos">
          {searchedTodos.map((todo, key) => (
            <TodoItem
              key={key}
              todo={todo}
              onComplete={() => completeTodo(todo.title)}
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

export default TodoCounter;
