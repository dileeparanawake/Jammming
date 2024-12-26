import "./App.css";
import React, { useState } from "react";
import PrototypeElements from "./utilities/PrototypeElements";
import SearchBarContainer from "./components/SearchBar/SearchBarContainer";
import SongsContainer from "./components/SongsContainer";
import PlaylistHeader from "./PlaylistHeader";
import TogglePlaylistSearch from "./TogglePlaylistSearch";
import ButtonStandard from "./components/ButtonStandard/ButtonStandard";

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
      <div className="content">
        <PrototypeElements
          className="prototype-elements"
          hide={false}
          isHidden={isHidden}
        ></PrototypeElements>
        <h1>Jammming for Spotify</h1>
        <p>Make custom playlists for Spotify.</p>
        <SearchBarContainer view={view} />
        <TogglePlaylistSearch view={view} toggleView={toggleView} />
        <form action="">
          <PlaylistHeader view={view} />
          <SongsContainer view={view} />
        </form>
      </div>
    </div>
  );
}

export default App;
