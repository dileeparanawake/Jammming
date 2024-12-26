import React from "react";
import "./search-pill.css";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";

function SearchPillWrapper(props) {
  return (
    <div className="search-pill-wrapper">
      <form name="searchResult">
        <SearchInput></SearchInput>
        <SearchButton></SearchButton>
      </form>
    </div>
  );
}

export default SearchPillWrapper;
