import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const TodoSearch = () => {
  return (
    <div>
      <input type="text" placeholder="Buscar TODOS" />
      <button>
        <SearchIcon />
      </button>
    </div>
  );
};

export default TodoSearch;
