import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const CreateTodoButton = (props) => {
  const onClickAdd = () => {
    props.setOpenModal((prevState) => !prevState);
  };
  return (
    <>
      <AddCircleIcon id="create-todo__button" onClick={onClickAdd} />
    </>
  );
};

export default CreateTodoButton;
