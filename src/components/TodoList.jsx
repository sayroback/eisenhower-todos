import React from "react";
import TodoItem from "./TodoItem";
import { TODOS } from "./data/dataTODOs.js";

const TodoList = () => {
  return (
    <div className="container-list">
      <ul className="list-ToDos">
        {TODOS.map((todo, key) => (
          <TodoItem key={key} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
