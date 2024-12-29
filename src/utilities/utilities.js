// Makes UID
export let createUniqueID = (() => {
  let uniqueID = 1;
  return () => uniqueID++;
})();

//returns true if searchView enabled

export function isSearchViewActive(view) {
  return view === "searchView";
}

// checks if track in myPlaylist

export function checkInPlaylist(searchTrack, songsInPlaylist) {
  const searchTrackURI = searchTrack.uri; // uri for search track
  let foundInPlaylist = false;
  songsInPlaylist.forEach((song) => {
    if (song.display_in_playlist) {
      //finds song in playlist
      const playlistTrackURI = song.uri; // gets uri of song in playlist
      if (playlistTrackURI === searchTrackURI) {
        foundInPlaylist = true;
      }
    }
  });
  return foundInPlaylist;
}

// locate track by URI

export function returnMatchSong(SearchUri, songObjArray) {
  let match = songObjArray.filter((song) => song.uri === SearchUri);
  return match;
}
// add song to playlist

export function addToPlaylist(songsInPlaylist, songsInSearch, uri) {}

//iterate through songs to populate playlist songs / search songs

// // set song isInSearchResult: true

// function displayInSearchResult() {}

// // format new search results

// function formatRawSearchResults(rawSearchResults, songs, setSongs) {
//   let extractedTracks = rawSearchResults.tracks.items;
//   // console.log(extractedTracks.items);
//   for (let key in extractedTracks) {
//     // console.log(key);
//     const searchTrack = extractedTracks[key];
//     const isInPlaylist = checkInPlaylist(searchTrack, songs); // true / false

//     if (isInPlaylist) {
//       //if track is in playlist update isInSearchResult: true
//     }
//     const track = { ...extractedTracks[key], inPlaylist: addToLibrary };
//     // console.log(track.uri);

//     if (!checkInPlaylist(track, playlist) && addToLibrary) {
//       playlist.push(track);
//     }
//   }
// }

// //  Parses searchResult to randomly add track to playlist.

// function addToPlaylist(searchResult, playlist) {
//   let extractedTracks = searchResult.tracks.items;
//   // console.log(extractedTracks.items);
//   for (let key in extractedTracks) {
//     // console.log(key);
//     const addToLibrary = Math.random() < 1;
//     const track = { ...extractedTracks[key], inPlaylist: addToLibrary };
//     // console.log(track.uri);

//     if (!checkInPlaylist(track, playlist) && addToLibrary) {
//       playlist.push(track);
//     }
//   }
// }
