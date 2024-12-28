import "./App.css";
import React, { useState } from "react";
import PrototypeElements from "./utilities/PrototypeElements/PrototypeElements";
import PlaylistHeader from "./components/PlaylistHeader/PlaylistHeader";
import SongsContainer from "./components/SongsContainer/SongsContainer";
import TogglePlaylistSearch from "./components/TogglePlaylistSearch/TogglePlaylistSearch";
import SearchPillWrapper from "./components/SearchPill/SearchPillWrapper";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);
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
  return (
    <div className="App">
      {/* <div className="content"> */}
      <PrototypeElements
        className="prototype-elements"
        hide={true}
        isHidden={isHidden}
      ></PrototypeElements>
      <h1>Jammming for Spotify</h1>
      <p>Make custom playlists for Spotify.</p>
      <SearchPillWrapper view={view}></SearchPillWrapper>
      <TogglePlaylistSearch view={view} toggleView={toggleView} />

      <PlaylistHeader view={view} />
      <SongsContainer view={view} />

      {/* </div> */}
    </div>
  );
}

export default App;
