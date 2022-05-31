import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const CreateTodoButton = (props) => {
  const onClickAdd = () => {
    props.setOpenModal((prevState) => !prevState);
  };
  return (
    <>
      <AddCircleIcon id="buttonCreate-ToDo" onClick={onClickAdd} />
    </>
  );
};

export default CreateTodoButton;
