import React from "react";
import Button from "./components/Button";

function NamePlaylist() {
  return (
    <div>
      <input
        id="playlistSearch"
        name="playlistName"
        type="text"
        placeholder="Name your playlist"
      />
      <Button buttonText="save" />
    </div>
  );
}

export default NamePlaylist;
