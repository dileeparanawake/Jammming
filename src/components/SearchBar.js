import React from "react";

import Button from "./Button";

function SearchBar({ handleSubmit, searchTerm, handleChange }) {
  return (
    <form id="searchBar" onSubmit={handleSubmit} aria-label="Search songs">
      <label htmlFor="searchInput">Search by song title</label>
      <input
        id="searchInput"
        type="text"
        placeholder="Search song..."
        name="searchInput"
        value={searchTerm}
        onChange={handleChange}
      />
      <Button buttonText="search"></Button>
    </form>
  );
}

export default SearchBar;
