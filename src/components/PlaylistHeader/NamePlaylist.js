import React from "react";
import Button from "../Button";

function NamePlaylist() {
  return (
    <div>
      <input
        id="playlistSearch"
        name="playlistName"
        type="text"
        placeholder="Name your playlist"
        value=""
      />
      <Button buttonText="Rename" type="button" />
    </div>
  );
}

export default NamePlaylist;
