import React, { useState } from "react";
import "./search-pill.css";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import { isSearchViewActive } from "../../utilities/utilities";
import { getSearchResults } from "../../api/getSearchResults";
import { makeNewSongObject } from "../../utilities/makeNewSongObject";
import { makeNewSongArray } from "../../utilities/makeNewSongArray";
function SearchPillWrapper({
  view,
  songsInPlaylist,
  setSongsInPlaylist,
  setSongsInSearch,
  songsInSearch,
}) {
  const [searchInput, setSearchInput] = useState("");

  function handleChange(e) {
    setSearchInput(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const rawSearchResult = await getSearchResults(searchInput);
    setSearchInput("");
    setSongsInSearch(makeNewSongArray(rawSearchResult, songsInPlaylist));
  }

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
