import React from "react";
import SongItem from "./SongItem";

function SongsContainer() {
  const songs = [];

  for (let i = 0; i < 10; i++) {
    songs.push({
      id: i + 1,
      title: "song title",
      artist: "artist",
      album: "album",
      imgURL:
        "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
      addedToPlaylist: false,
    });
  }

  const songList = songs.map((song) => {
    return (
      <SongItem
        key={song.id}
        title={song.title}
        artist={song.artist}
        album={song.album}
        imgURL={song.imgURL}
        addedToPlaylist={song.addedToPlaylist}
      />
    );
  });

  return <ul>{songList}</ul>;
}

export default SongsContainer;
