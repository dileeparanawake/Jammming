import React from "react";
import NamePlaylist from "./NamePlaylist";
import Button from "./components/Button";

function PlaylistHeader() {
  return (
    <div>
      <NamePlaylist />
      <Button buttonText="Save to Spotify" type="submit" />
    </div>
  );
}

export default PlaylistHeader;
