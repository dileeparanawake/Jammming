import "./App.css";
import React, { useState } from "react";
import SearchBarContainer from "./components/SearchBarContainer";
import SongsContainer from "./components/SongsContainer";
import PlaylistHeader from "./PlaylistHeader";
import TogglePlaylistSearch from "./TogglePlaylistSearch";

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

  return (
    <div className="App">
      <div className="content">
        <h1>Jammming for Spotify</h1>
        <p>
          Search your Spotify library, create a custom playlist, then save it to
          your account.
        </p>
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
