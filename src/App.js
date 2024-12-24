import "./App.css";
import React from "react";
import SearchBarContainer from "./components/SearchBarContainer";
import SongsContainer from "./components/SongsContainer";
import Button from "./components/Button";
import NamePlaylist from "./NamePlaylist";
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
          <NamePlaylist />
          <SongsContainer />
          <Button buttonText="Save to Spotify" />
        </form>
      </div>
    </div>
  );
}

export default App;
