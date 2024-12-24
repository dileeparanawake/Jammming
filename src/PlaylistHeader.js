import React from "react";
import NamePlaylist from "./NamePlaylist";
import Button from "./components/Button";
import isSearchViewActive from "./utilities";

function PlaylistHeader({ view }) {
  return (
    <div
      style={{
        visibility: isSearchViewActive(view) ? "hidden" : "visible",
        height: isSearchViewActive(view) ? "0px" : "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <NamePlaylist />
      <Button buttonText="Save to Spotify" type="submit" />
    </div>
  );
}

export default PlaylistHeader;
