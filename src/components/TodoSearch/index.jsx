import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { TodoContext } from "../TodoContext";

const TodoSearch = () => {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  const onChangeValueSearch = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="search-todo">
      <input
        onChange={onChangeValueSearch}
        className="search-todo__input"
        type="text"
        value={searchValue}
        placeholder="Buscar TODOS"
      />
      <button>
        <SearchIcon />
      </button>
    </div>
  );
};

export default TodoSearch;
