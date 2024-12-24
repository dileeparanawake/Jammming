import React from "react";
import Button from "./Button";

function SongItem({
  elementId,
  title,
  artist,
  album,
  imgURL,
  addedToPlaylist,
  view,
}) {
  return (
    <li addedToPlaylist={addedToPlaylist} elementId={elementId}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <img
            src={imgURL}
            alt="album art"
            style={{
              height: "60px",
              width: "60px",
            }}
          />
        </div>
        <div>
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
      </div>
    </li>
  );
}

export default SongItem;
