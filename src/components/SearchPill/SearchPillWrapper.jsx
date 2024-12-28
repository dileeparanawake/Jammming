import React, { useState } from "react";
import "./search-pill.css";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import { isSearchViewActive } from "../../utilities/utilities";
import { getSearchResults } from "../../api/getSearchResults";

function SearchPillWrapper({ view }) {
  const [searchInput, setSearchInput] = useState("");

  function handleChange(e) {
    setSearchInput(e.target.value);
  }

  async function handleSubmit(e, searchInput) {
    e.preventDefault();
    const rawSearchResult = await getSearchResults(searchInput);
    console.log("Got search result ", rawSearchResult);
    setSearchInput("");
  }
  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log(
  //     "search submitted - replace with api push! query=" + searchInput
  //   );
  //   const searchResults = await search(searchInput, "track");
  //   console.log(searchResults);
  //   setSearchInput("");
  // }

  return (
    <form
      name="searchResult"
      className={`search-pill-wrapper ${
        isSearchViewActive(view) ? "" : "hidden"
      }`}
      onSubmit={handleSubmit}
      aria-label="Search songs"
    >
      <SearchInput
        handleChange={handleChange}
        searchInput={searchInput}
      ></SearchInput>
      <SearchButton></SearchButton>
    </form>
  );
}

export default SearchPillWrapper;
