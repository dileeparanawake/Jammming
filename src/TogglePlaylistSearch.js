import React from "react";
import Button from "./components/Button";
import isSearchViewActive from "./utilities";

function TogglePlaylistSearch({ view, toggleView }) {
  return (
    <div>
      <h2>
        {isSearchViewActive(view)
          ? "Search Results..."
          : "Songs in your playlist..."}
      </h2>
      <p>
        {isSearchViewActive(view)
          ? "Add songs to your playlist..."
          : "Edit your playlist..."}
      </p>
      <div>
        <Button
          onClick={toggleView}
          buttonText={
            view === "searchView"
              ? "View playlist..."
              : "View search results..."
          }
          type="button"
        />
      </div>
    </div>
  );
}

export default TogglePlaylistSearch;
