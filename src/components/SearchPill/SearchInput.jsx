import React from "react";

function SearchInput({ searchInput, handleChange }) {
  return (
    <input
      type="text"
      className="search-input"
      placeholder="Search by song title..."
      value={searchInput}
      onChange={handleChange}
    />
  );
}

export default SearchInput;
