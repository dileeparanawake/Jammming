import React from "react";
import SongItem from "./SongItem";

let elementId = 0;

function SongsContainer() {
  const songs = [];

  for (let i = 0; i < 10; i++) {
    songs.push({
      id: 0,
      title: "song title",
      artist: "artist",
      album: "album",
      imgURL:
        "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
      addedToPlaylist: i < 4 ? true : false,
      displayInSearch: i > 2 ? true : false,
    });
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
      />
    );
  });

  return <ul>{songList}</ul>;
}

export default SongsContainer;
