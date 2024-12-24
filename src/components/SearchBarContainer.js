import React, { useState } from "react";
import SearchBar from "./SearchBar";
import "../App.css";

function SearchBarContainer({ view }) {
  const [searchInput, setSearchInput] = useState("");

  function handleChange(e) {
    setSearchInput((searchInput) => {
      return searchInput + e.target.value;
    });
  }
  return <SearchBar handleChange={handleChange} />;
}

export default SearchBarContainer;
