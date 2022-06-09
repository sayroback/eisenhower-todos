import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { TodoContext } from "../TodoContext";

const TodoItem = (props) => {
  const { completeTodo, deleteTodo } = React.useContext(TodoContext);
  const dateToDo = (props) => {
    const date = `${props.day}-${props.month}-${props.year} ${props.hour}:${props.minutes}
      `;
    return date;
  };
  const dates = dateToDo(props.todo.dueDate);
  const checkBox = (props) => {
    if (props) {
      return <CheckBoxIcon className="todo__header__checkbox" />;
    } else
      return <CheckBoxOutlineBlankIcon className="todo__header__checkbox" />;
  };

  return (
    <>
      <article className={`todo ${props.todo.completed && "todo--complete"}`}>
        <header className="todo__header">
          <p className="todo__header__priority">{props.todo.priority}</p>
          <h3 className="todo__header__title">{props.todo.title}</h3>
          <div onClick={() => completeTodo(props.todo.title)}>
            {checkBox(props.todo.completed)}
          </div>
        </header>
        <main>
          <p>{props.todo.note}</p>
        </main>
        <footer className="todo__footer">
          <div className="todo__footer__date">
            <CalendarMonthIcon />
            <p>{dates}</p>
          </div>
          <DeleteIcon
            onClick={() => deleteTodo(props.todo.title)}
            className="todo__footer__delete"
          />
        </footer>
      </article>
    </>
  );
};

export default TodoItem;
