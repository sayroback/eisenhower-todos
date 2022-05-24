import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const TodoItem = (props) => {
  const dateToDo = (props) => {
    const date = `${props.day}-${props.month}-${props.year} ${props.hour}:${props.minutes}
      `;
    return date;
  };
  const dates = dateToDo(props.todo.dueDate);
  const checkBox = (props) => {
    if (props) {
      return <CheckBoxIcon className="checkBox-ToDo" />;
    } else return <CheckBoxOutlineBlankIcon className="checkBox-ToDo" />;
  };

  return (
    <>
      <li
        className={`container-ToDo ${
          props.todo.completed && "todo-check--active"
        }`}
      >
        <div className="title-ToDo">
          <p className="priority-ToDo">{props.todo.priority}</p>
          <h3>{props.todo.title}</h3>
          <div onClick={() => props.onComplete(props.todo)}>
            {checkBox(props.todo.completed)}
          </div>
        </div>
        <div>
          <p>{props.todo.note}</p>
        </div>
        <div className="containerDateDelete-ToDo">
          <div className="date-ToDo">
            <CalendarMonthIcon />
            <p>{dates}</p>
          </div>
          <DeleteIcon
            // onClick={() => onDelete("Delete ToDo")}
            className="buttonDelete-ToDo"
          />
        </div>
      </li>
    </>
  );
};

export default TodoItem;
