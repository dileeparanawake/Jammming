import React, { useState } from "react";
import { SPOTIFY_ACCESS_TOKEN } from "../api/secrets";

import { getSearchResults } from "../api/getSearchResults";

const SPOTIFY_API_URL = "https://api.spotify.com/v1";

function Tmvp() {
  const [searchResult, setSearchResult] = useState({});
  const [playlistId, setPlaylistId] = useState(null);

  let query = "Only love";
  // reset data

  function reset() {
    setSearchResult({});
  }

  function handleSubmitSearch(event) {
    // for searchbar form
    event.preventDefault();
    setSearchResult({});
    getSearchResults(query, setSearchResult); // query to be obtained from form result.
  }
  // test submit search request & get response

  // getSearchResults(query, setSearchResult);
  // async function getSearchResults() {
  //   const params = new URLSearchParams({
  //     q: "Only love",
  //     type: "track",
  //   });

  //   const SEARCH_URL = "/search?"; //path
  //   const searchString = params.toString();

  //   // console.log(searchString);

  //   const url = `${SPOTIFY_API_URL}${SEARCH_URL}${searchString}`;

  //   const response = await fetch(url, {
  //     headers: {
  //       Authorization: `Bearer ${SPOTIFY_ACCESS_TOKEN}`,
  //     },
  //   });

  //   if (response.ok) {
  //     console.log(response);
  //     setSearchResult({});
  //     const data = await response.json();
  //     console.log(typeof data);
  //     console.dir(data);
  //     setSearchResult(data);
  //   } else {
  //     console.error(response.status);
  //     console.error(response.statusText);
  //     const message = await response.text();
  //     console.error(message);
  //     throw new Error("Request failed!");
  //   }
  // }

  // test get track from response

  function testRenderResults() {
    const firstTrack = searchResult.tracks?.items?.[0];
    const trackName = firstTrack?.name;
    const artist = firstTrack?.artists?.[0]?.name;
    const album = firstTrack?.album?.name;
    const uri = firstTrack?.uri;
    const imgURL = firstTrack?.album?.images?.[0]?.url;

    return (
      <div>
        <p>{firstTrack ? "Success" : "No results"}</p>
        <p>{imgURL ? "IMG URL: " + imgURL : "No image"}</p>
        <img
          src={imgURL}
          alt="album"
          style={{ width: "40px", height: "40px" }}
        />
        <p>{trackName ? "track :" + trackName : "No track"}</p>
        <p>{artist ? "artist :" + artist : "No artist"}</p>
        <p>{album ? "album :" + album : "No album"}</p>
        <p>{uri ? "uri :" + uri : "No uri"}</p>
      </div>
    );
  }

  // test make new playlist

  async function createPlaylist() {
    const playlistName = "Test Playlist";
    const userId = "dsranawake";
    const CREATE_PLAYLIST_URL = `/users/${userId}/playlists`; // POST - /users/{user_id}/playlists

    const url = `${SPOTIFY_API_URL}${CREATE_PLAYLIST_URL}`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${SPOTIFY_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: {
        name: `${playlistName}`,
        description: "New playlist description",
        public: false,
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setPlaylistId(data);
    } else {
      console.log(response.status);
      console.log(response.statusText);
      const errorJson = await response.json();
      console.error(errorJson.error.message);
      throw new Error("Playlist creation failed!");
    }
  }

  return (
    <div>
      <p>TMVP</p>
      <button onClick={handleSubmitSearch}>Submit Search</button>
      <button onClick={reset}>Reset Search</button>
      <div>{testRenderResults()}</div>
      <button onClick={createPlaylist}>Make Playlist Test Playlist</button>
    </div>
  );
}

export default Tmvp;
