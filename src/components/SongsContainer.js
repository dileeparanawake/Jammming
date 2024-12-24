import React from "react";
import SongItem from "./SongItem";
import isSearchViewActive from "../utilities";

let elementId = 0;

function SongsContainer({ view }) {
  const songs = []; /// will import songs from parent
  for (let i = 0; i < 10; i++) {
    songs.push({
      id: 0,
      title: "song title",
      artist: "artist",
      album: "album",
      imgURL:
        "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
      addedToPlaylist: i < 4 ? true : false,
      displayInSearch: i < 2 ? true : false,
    });
  }

  function toggleSongVisibility(view, addedToPlaylist, displayInSearch) {
    if (displayInSearch && isSearchViewActive(view)) {
      return true;
    } else if (addedToPlaylist && !isSearchViewActive(view)) {
      return true;
    } else {
      return false;
    }
  }
  const songList = songs.map((song) => {
    elementId++;
    return (
      <SongItem
        id={elementId}
        key={elementId}
        title={song.title}
        artist={song.artist}
        album={song.album}
        imgURL={song.imgURL}
        addedToPlaylist={song.addedToPlaylist}
        displayInSearch={song.displayInSearch}
        // style={{
        //   visibility: toggleSongVisibility(
        //     view,
        //     addedToPlaylist,
        //     displayInSearch
        //   )
        //     ? "visible"
        //     : "hidden",
        //   height: toggleSongVisibility(view, addedToPlaylist, displayInSearch)
        //     ? "100%"
        //     : "0px",
        // }}
      />
    );
  });

  return <ul>{songList}</ul>;
}

export default SongsContainer;
