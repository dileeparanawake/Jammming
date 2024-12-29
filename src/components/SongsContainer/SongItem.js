import React, { useEffect, useState } from "react";

import {
  addToPlaylist,
  isSearchViewActive,
  returnMatchSong,
} from "../../utilities/utilities";
import ButtonStandard from "../ButtonStandard/ButtonStandard";
import SongsContainer from "./SongsContainer";

function SongItem({
  key,
  id,
  className,
  track_name,
  artist,
  album_name,
  uri,
  type,
  image_url,
  display_in_playlist,
  display_in_search,
  songsInPlaylist,
  setSongsInPlaylist,
  songsInSearch,
  setSongsInSearch,
  view,
}) {
  const [buttonText, setButtonText] = useState("add");
  const [textForClass, setTextForClass] = useState("song-item");

  function CalculateHideTrack(view, buttonText) {
    let hide = false;
    if (isSearchViewActive(view) && display_in_search) {
      hide = false;
    } else if (isSearchViewActive(view) && !display_in_search) {
      hide = true;
    } else if (!isSearchViewActive(view) && buttonText === "remove") {
      hide = false;
    } else if (!isSearchViewActive(view) && buttonText === "add") {
      hide = true;
    }
    return hide;
  }

  useEffect(() => {
    console.log("toggled");
    // console.log("view changed ", view);
    let hide = CalculateHideTrack(view, buttonText);
    console.log("hide track :", hide);
    if (hide) {
      setTextForClass("song-item hide");
    } else {
      setTextForClass("song-item");
    }
  }, [view, buttonText]);

  function handleClick(e) {
    setButtonText((buttonText) => {
      return buttonText === "add" ? "remove" : "add";
    });
  }
  return (
    <li
      key={key}
      id={id}
      className={textForClass}
      uri={uri}
      type={type}
      view={view}
    >
      {/* <p>{view}</p> */}
      {/* <p>{textForClass}</p> */}
      <div className="songs-container left">
        <img src={image_url} alt={track_name} />
        <div className="songs-container song-text">
          <p className="song-text track">{track_name}</p>
          <p className="song-text artist">{artist}</p>
          <p className="song-text album">{album_name}</p>
        </div>
      </div>
      <ButtonStandard
        buttonText={buttonText}
        type="button"
        className={"songs-container"}
        onClick={handleClick}
      />
    </li>
  );
}

export default SongItem;
