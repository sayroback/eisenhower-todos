import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const TodoSearch = ({ searchValue, setSearchValue }) => {
  const onChangeValueSearch = (event) => {
    console.log(event.target.value);
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
