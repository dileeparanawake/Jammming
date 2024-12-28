import React from "react";
import Button from "../Button";
import { isSearchViewActive } from "../../utilities/utilities";
import ButtonStandard from "../ButtonStandard/ButtonStandard";

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
        <ButtonStandard
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
