import React, { useState } from "react";
import SearchBar from "./SearchBar";
import "../App.css";

function SearchBarContainer({ view }) {
  const [searchInput, setSearchInput] = useState("");

  function handleChange(e) {
    setSearchInput(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    alert("search submitted - replace with api push! query=" + searchInput);
    setSearchInput("");
  }
  return (
    <SearchBar
      handleChange={handleChange}
      onSubmit={handleSubmit}
      searchInput={searchInput}
    />
  );
}

export default SearchBarContainer;
