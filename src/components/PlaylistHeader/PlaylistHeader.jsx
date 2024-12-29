import React from "react";
import NamePlaylist from "./NamePlaylist";
import Button from "../Button";
import { isSearchViewActive } from "../../utilities/utilities";

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
        gap: "10px",
        paddingTop: "15px",
      }}
    >
      <NamePlaylist />
      <Button buttonText="Save to Spotify" type="submit" />
    </div>
  );
}

export default PlaylistHeader;
