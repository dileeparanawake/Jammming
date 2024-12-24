import React from "react";
import Button from "./components/Button";

function TogglePlaylistSearch({ view, toggleView }) {
  return (
    <div>
      <h2>
        {view === "searchView"
          ? "Search Results..."
          : "Songs in your playlist..."}
      </h2>
      <p>
        {view === "searchView"
          ? "Add songs to your playlist..."
          : "Songs in your playlist..."}
      </p>
      <Button
        onClick={toggleView}
        buttonText={
          view === "searchView" ? "View playlist..." : "View search results..."
        }
        type="button"
      />
    </div>
  );
}

export default TogglePlaylistSearch;
