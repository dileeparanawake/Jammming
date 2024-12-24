import "./App.css";
import React from "react";
import SearchBarContainer from "./components/SearchBarContainer";
import SongsContainer from "./components/SongsContainer";
import PlaylistHeader from "./PlaylistHeader";
import TogglePlaylistSearch from "./TogglePlaylistSearch";

function App() {
  return (
    <div className="App">
      <div className="content">
        <h1>Jammming for Spotify</h1>
        <p>
          Search your Spotify library, create a custom playlist, then save it to
          your account.
        </p>
        <SearchBarContainer />
        <form action="">
          <TogglePlaylistSearch />
          <PlaylistHeader />
          <SongsContainer />
        </form>
      </div>
    </div>
  );
}

export default App;
