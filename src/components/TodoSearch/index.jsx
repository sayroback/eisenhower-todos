import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { TodoContext } from "../TodoContext";

const TodoSearch = () => {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  const onChangeValueSearch = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="container-search-ToDo">
      <input
        onChange={onChangeValueSearch}
        className="search-ToDo"
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
