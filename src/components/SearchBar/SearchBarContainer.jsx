import React, { useState } from "react";
import SearchBar from "./SearchBar";
import "../../App.css";
import isSearchViewActive from "../../utilities";
import { search } from "../../api/spotify";

function SearchBarContainer({ view }) {
  const [searchInput, setSearchInput] = useState("");

  function handleChange(e) {
    setSearchInput(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(
      "search submitted - replace with api push! query=" + searchInput
    );
    const searchResults = await search(searchInput, "track");
    console.log(searchResults);
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
