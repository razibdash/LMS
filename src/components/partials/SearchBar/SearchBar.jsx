import React from "react";
import "./searchBar.css";
function SearchBar() {
  return (
    <div className="search-bar">
      <form
        action="#"
        className="border  search-form rounded flex items-center"
      >
        <input
          type="text"
          className="w-full px-2 py-1 outline-none"
          placeholder="Search"
          name=""
          id=""
        />
        <button type="submit" className="p-1">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
