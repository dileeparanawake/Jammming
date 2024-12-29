import "./App.css";
import React, { useState, useEffect } from "react";
import PrototypeElements from "./utilities/PrototypeElements/PrototypeElements";
import PlaylistHeader from "./components/PlaylistHeader/PlaylistHeader";
import SongsContainer from "./components/SongsContainer/SongsContainer";
import TogglePlaylistSearch from "./components/TogglePlaylistSearch/TogglePlaylistSearch";
import SearchPillWrapper from "./components/SearchPill/SearchPillWrapper";

function App() {
  const [songsInSearch, setSongsInSearch] = useState([]);
  const [songsInPlaylist, setSongsInPlaylist] = useState([]);
  const [songs, setSongs] = useState([]);
  const [view, setView] = useState("searchView");

  function toggleView() {
    setView((prevView) => {
      if (prevView === "searchView") {
        return "playlistView";
      } else {
        return "searchView";
      }
    });
  }

  function isHidden(classname, hide) {
    let classString = "";
    if (hide === true) {
      classString = classname + " " + "hidden";
    } else {
      classString = classname;
    }
    console.log({ className: classString });
    return classString;
  }

  useEffect(() => {
    console.log("songs in search updated :", songsInSearch); // display updated songs
  }, [songsInSearch]);

  return (
    <div className="App">
      {/* <div className="content"> */}
      <PrototypeElements
        className="prototype-elements"
        hide={true}
        isHidden={isHidden}
      ></PrototypeElements>
      <div className="header">
        <h1>
          Ja<span>mmm</span>ing for Spotify
        </h1>
        <p>Make custom playlists for Spotify.</p>
      </div>
      <SearchPillWrapper
        view={view}
        songsInPlaylist={songsInPlaylist}
        setSongsInPlaylist={setSongsInPlaylist}
        songsInSearch={songsInSearch}
        setSongsInSearch={setSongsInSearch}
      ></SearchPillWrapper>
      <TogglePlaylistSearch view={view} toggleView={toggleView} />

      <PlaylistHeader view={view} />
      <SongsContainer
        view={view}
        songsInPlaylist={songsInPlaylist}
        setSongsInPlaylist={setSongsInPlaylist}
        songsInSearch={songsInSearch}
        setSongsInSearch={setSongsInSearch}
        className={"songs-container main"}
      />

      {/* </div> */}
    </div>
  );
}

export default App;
