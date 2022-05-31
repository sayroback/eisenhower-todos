import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const onClickAdd = (props) => {
  alert(props);
};

const CreateTodoButton = () => {
  return (
    <>
      <AddCircleIcon
        id="buttonCreate-ToDo"
        onClick={() => onClickAdd("Add button")}
      />
    </>
  );
};

export default CreateTodoButton;
