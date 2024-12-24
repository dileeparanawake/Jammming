import React from "react";

import Button from "./Button";

function SearchBar({ handleChange, searchInput, handleSubmit }) {
  return (
    <form id="searchBar" onSubmit={handleSubmit} aria-label="Search songs">
      <input
        id="searchInput"
        type="text"
        placeholder="Search song..."
        name="searchInput"
        value={searchInput}
        onChange={handleChange}
      />
      <Button buttonText="search" type="submit"></Button>
    </form>
  );
}

export default SearchBar;
