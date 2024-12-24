import React from "react";
import "./search-bar.css";

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
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
