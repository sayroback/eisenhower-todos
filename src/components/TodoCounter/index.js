import React from "react";
import TodoCounterUI from "./TodoCounterUI";
import { TodoProvider } from "../TodoContext";

const TodoCounter = () => {
  return (
    <TodoProvider>
      <TodoCounterUI />
    </TodoProvider>
  );
};

export default TodoCounter;
