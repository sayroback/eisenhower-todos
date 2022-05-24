import React from "react";
// import styled from "styled-components";
import TodoList from "./TodoList";
import TodoSearch from "./TodoSearch";
import "../style/TodoCounter.css";

const TodoCounter = () => {
  return (
    <div className="layout-container">
      <div className="welcome">
        <h3>Hola!</h3>
        <h1>Has completado 2 de 3 TODOs.</h1>
        <TodoSearch />
      </div>
      <TodoList />
      <footer>
        <div> Develop for Sayroback</div>
      </footer>
    </div>
  );
};

export default TodoCounter;
