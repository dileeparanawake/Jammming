import React, { useEffect, useState } from "react";
import SongItem from "./SongItem";
import { isSearchViewActive } from "../../utilities/utilities";
import "./songs-container.css";

let elementId = 0;

function SongsContainer({
  view,
  songsInSearch,
  setSongsInSearch,
  songsInPlaylist,
  setSongsInPlaylist,
  className,
}) {
  const [searchSongsDisplayed, setSearchSongsDisplayed] = useState([]);
  const [playlistSongsDisplayed, setPlaylistSongsDisplayed] = useState([]);

  //iterate through songs to populate playlist songs / search songs

  function toggleSongVisibility(view, addedToPlaylist, displayInSearch) {
    if (displayInSearch && isSearchViewActive(view)) {
      return true;
    } else if (addedToPlaylist && !isSearchViewActive(view)) {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    let songList = [];

    if (songsInSearch.length) {
      songList = songsInSearch.map((song) => {
        return (
          <SongItem
            key={song.key}
            id={song.id}
            track_name={song.track_name}
            className={""}
            artist={song.artist}
            album_name={song.album_name}
            uri={song.uri}
            type={song.type}
            image_url={song.image_url}
            display_in_playlist={song.display_in_playlist}
            display_in_search={song.display_in_search}
            view={view}
          />
        );
      });

      console.log(songList);
    }
    setSearchSongsDisplayed(songList);
  }, [songsInSearch, view]);

  return (
    <ul
      className="songs-container main"
      view={view}
      songsInPlaylist={songsInPlaylist}
      setSongsInPlaylist={setSongsInPlaylist}
      songsInSearch={songsInSearch}
      setSongsInSearch={setSongsInSearch}
    >
      <p>{view}</p>
      {searchSongsDisplayed}
    </ul>
  );
}

export default SongsContainer;
