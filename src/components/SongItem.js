import React from "react";
import Button from "./Button";

function SongItem({
  elementId,
  title,
  artist,
  album,
  imgURL,
  addedToPlaylist,
}) {
  return (
    <li addedToPlaylist={addedToPlaylist} elementId={elementId}>
      <div>
        <img src={imgURL} alt="album art" />
        <p>{title}</p>
        <p>{artist}</p>
      </div>
      <div>
        <p>{album}</p>
      </div>
      <div>
        <Button
          buttonText={addedToPlaylist ? "Remove" : "Add"}
          type="button"
        ></Button>
      </div>
    </li>
  );
}

export default SongItem;
