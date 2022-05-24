import React from "react";
// import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import DeleteIcon from "@mui/icons-material/Delete";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const TodoItem = ({ todo }) => {
  const dateToDo = (props) => {
    const date = `${props.day}-${props.month}-${props.year} ${props.hour}:${props.minutes}
      `;
    return date;
  };
  const dates = dateToDo(todo.dueDate);
  const checkBox = (props) => {
    if (props) {
      return <CheckBoxIcon className="checkBox-ToDo" />;
    } else return <CheckBoxOutlineBlankIcon className="checkBox-ToDo" />;
  };

  return (
    <>
      <li className="container-ToDo">
        <div className="title-ToDo">
          <p className="priority-ToDo">{todo.priority}</p>
          <h3>{todo.title}</h3>
          {checkBox(todo.completed)}
        </div>
        <div>
          <p>{todo.note}</p>
        </div>
        <div className="containerDateDelete-ToDo">
          <div className="date-ToDo">
            <CalendarMonthIcon />
            <p>{dates}</p>
          </div>
          <DeleteIcon className="buttonDelete-ToDo" />
        </div>
      </li>
    </>
  );
};

export default TodoItem;
