import React from "react";

function SearchBar(props) {
  return (
    <form
      id="searchBar"
      onSubmit={props.handleSubmit}
      aria-label="Search songs"
    >
      <label htmlFor="searchInput">Search by song title</label>
      <input
        id="searchInput"
        type="text"
        placeholder="Search song..."
        name="searchInput"
        value={props.searchTerm}
        onChange={props.handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
