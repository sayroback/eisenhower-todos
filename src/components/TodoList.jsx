//@ts-checka
import React from 'react'
import TodoItem from './TodoItem';

const TodoList = () => {
  const TODOS = [
  {
    text: "Cebolla",
    completed: false
  },
  {
    text: "Comprar pastel",
    completed: true
  },
  {
    text: "Hacer el curso",
    completed: false
  },
  {
    text: "Lavar ropa",
    completed: true
  }
  ];

  return (
    <div>
      <ul>
        {TODOS.map(todo => (
        <TodoItem key={todo.text} text={todo.text} />
        ))}
      </ul>
    </div>
  )
};

export default TodoList