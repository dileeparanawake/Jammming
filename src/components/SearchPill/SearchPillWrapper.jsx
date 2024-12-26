import React from "react";
import "./search-pill.css";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";

function SearchPillWrapper(props) {
  return (
    <form name="searchResult" className="search-pill-wrapper">
      <SearchInput></SearchInput>
      <SearchButton></SearchButton>
    </form>
  );
}

export default SearchPillWrapper;
