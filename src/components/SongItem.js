import React from "react";
import Button from "./Button";

function SongItem({ key, title, artist, album, imgURL, addedToPlaylist }) {
  return (
    <li key={key} addedToPlaylist={addedToPlaylist}>
      <div>
        <img src={imgURL} alt="album art" />
        <p>{title}</p>
        <p>{artist}</p>
      </div>
      <div>
        <p>{album}</p>
      </div>
      <div>
        <Button buttonText={addedToPlaylist ? "Remove" : "Add"}></Button>
      </div>
    </li>
  );
}

export default SongItem;
