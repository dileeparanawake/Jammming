import React from "react";

import Button from "./Button";

function SearchBar({ onSubmit, handleChange, searchInput }) {
  return (
    <form id="searchBar" onSubmit={onSubmit} aria-label="Search songs">
      <label htmlFor="searchInput">Search by song title</label>
      <input
        id="searchInput"
        type="text"
        placeholder="Search song..."
        name="searchInput"
        value={searchInput}
        onChange={handleChange}
      />
      <Button buttonText="search"></Button>
    </form>
  );
}

export default SearchBar;
