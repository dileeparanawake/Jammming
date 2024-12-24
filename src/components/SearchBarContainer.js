import React, { useState } from "react";
import SearchBar from "./SearchBar";
import "../App.css";
import isSearchViewActive from "../utilities";

function SearchBarContainer({ view }) {
  const [searchInput, setSearchInput] = useState("");

  function handleChange(e) {
    alert("x");
    setSearchInput(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    alert("search submitted - replace with api push! query=" + searchInput);
    setSearchInput("");
  }
  return (
    <div
      style={{
        visibility: isSearchViewActive(view) ? "visible" : "hidden",
        height: isSearchViewActive(view) ? "200%" : "0px",
      }}
    >
      <SearchBar
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchInput={searchInput}
      />
    </div>
  );
}

export default SearchBarContainer;
