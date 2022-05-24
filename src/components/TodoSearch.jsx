import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const TodoSearch = () => {
  return (
    <div className="container-search-ToDo">
      <input className="search-ToDo" type="text" placeholder="Buscar TODOS" />
      <button>
        <SearchIcon />
      </button>
    </div>
  );
};

export default TodoSearch;
