import {
  ExampleSearchResult1,
  ExampleSearchResult2,
} from "./exampleSearchResults.js";

import { rawResult } from "./tmvp.js";

// console.log(typeof rawResult);
// console.log(rawResult);

// need to refactor to include real search results & add tests for functions.

// dummy search results (simple)

const musicData = {
  results: {
    0: {
      track: "Bohemian Rhapsody",
      album: "A Night at the Opera",
      artist: "Queen",
      uri: "uri:1001",
    },
    1: {
      track: "Stairway to Heaven",
      album: "Led Zeppelin IV",
      artist: "Led Zeppelin",
      uri: "uri:1002",
    },
    2: {
      track: "Imagine",
      album: "Imagine",
      artist: "John Lennon",
      uri: "uri:1003",
    },
    3: {
      track: "Hotel California",
      album: "Hotel California",
      artist: "Eagles",
      uri: "uri:1004",
    },
    4: {
      track: "Billie Jean",
      album: "Thriller",
      artist: "Michael Jackson",
      uri: "uri:1005",
    },
    5: {
      track: "Smells Like Teen Spirit",
      album: "Nevermind",
      artist: "Nirvana",
      uri: "uri:1006",
    },
    6: {
      track: "Sweet Child O' Mine",
      album: "Appetite for Destruction",
      artist: "Guns N' Roses",
      uri: "uri:1007",
    },
    7: {
      track: "Hey Jude",
      album: "Hey Jude",
      artist: "The Beatles",
      uri: "uri:1008",
    },
    8: {
      track: "Like a Rolling Stone",
      album: "Highway 61 Revisited",
      artist: "Bob Dylan",
      uri: "uri:1009",
    },
    9: {
      track: "Purple Haze",
      album: "Are You Experienced",
      artist: "Jimi Hendrix",
      uri: "uri:1010",
    },
    10: {
      track: "Comfortably Numb",
      album: "The Wall",
      artist: "Pink Floyd",
      uri: "uri:1011",
    },
  },
};

const musicData2 = {
  results: {
    // Reused from musicData
    0: {
      track: "Bohemian Rhapsody",
      album: "A Night at the Opera",
      artist: "Queen",
      uri: "uri:1001",
    },
    1: {
      track: "Stairway to Heaven",
      album: "Led Zeppelin IV",
      artist: "Led Zeppelin",
      uri: "uri:1002",
    },
    2: {
      track: "Imagine",
      album: "Imagine",
      artist: "John Lennon",
      uri: "uri:1003",
    },
    3: {
      track: "Hotel California",
      album: "Hotel California",
      artist: "Eagles",
      uri: "uri:1004",
    },
    4: {
      track: "Billie Jean",
      album: "Thriller",
      artist: "Michael Jackson",
      uri: "uri:1005",
    },

    // Unique new entries
    5: {
      track: "Rolling in the Deep",
      album: "21",
      artist: "Adele",
      uri: "uri:2001",
    },
    6: {
      track: "Shape of You",
      album: "Divide",
      artist: "Ed Sheeran",
      uri: "uri:2002",
    },
    7: {
      track: "Blinding Lights",
      album: "After Hours",
      artist: "The Weeknd",
      uri: "uri:2003",
    },
    8: {
      track: "Uptown Funk",
      album: "Uptown Special",
      artist: "Mark Ronson ft. Bruno Mars",
      uri: "uri:2004",
    },
    9: {
      track: "Happy",
      album: "G I R L",
      artist: "Pharrell Williams",
      uri: "uri:2005",
    },
    10: {
      track: "Somebody That I Used to Know",
      album: "Making Mirrors",
      artist: "Gotye ft. Kimbra",
      uri: "uri:2006",
    },
  },
};

// Music in my playlist

let myPlaylistDummy = [
  {
    track: "Bohemian Rhapsody",
    album: "A Night at the Opera",
    artist: "Queen",
    uri: "uri:1001",
    inPlaylist: true,
  },
  {
    track: "Imagine",
    album: "Imagine",
    artist: "John Lennon",
    uri: "uri:1003",
    inPlaylist: true,
  },
];

let examplePlaylist = [];

let removeURI = "spotify:track:3oEo8Pqm5IAi8wQfCI5BpR"; //  name: 'Yellow Submarine - Remastered 2009' from ExampleSearchResult1

// remove tracks from playlist

function removeFromPlaylist(RemoveTrackUri, playlist) {
  let filteredPlaylist = playlist.filter((track) => {
    // console.log(track.uri);
    return track.uri !== RemoveTrackUri;
  });

  console.log("Original playlist length: ", playlist.length);
  console.log("Filtered playlist length: ", filteredPlaylist.length);
  return filteredPlaylist;
}

// checks if track in myPlaylist

function checkInPlaylist(searchTrack, playlist) {
  const searchTrackURI = searchTrack.uri;
  let foundInPlaylist = false;
  playlist.forEach((trackInPlaylist) => {
    const playlistTrackURI = trackInPlaylist.uri;
    if (playlistTrackURI === searchTrackURI) {
      foundInPlaylist = true;
    }
  });
  return foundInPlaylist;
}

//  Parses searchResult to randomly add track to playlist.

function addToPlaylist(searchResult, playlist) {
  let extractedTracks = searchResult.tracks.items;
  // console.log(extractedTracks.items);
  for (let key in extractedTracks) {
    // console.log(key);
    const addToLibrary = Math.random() < 1;
    const track = { ...extractedTracks[key], inPlaylist: addToLibrary };
    // console.log(track.uri);

    if (!checkInPlaylist(track, playlist) && addToLibrary) {
      playlist.push(track);
    }
  }
}

// console.log(track2);

// const tracksArray = [...tracksObj];

// console.log(tracksArray[0]);
addToPlaylist(ExampleSearchResult1, examplePlaylist);
// console.log(examplePlaylist[0]);
// console.log("Playlist 1(", examplePlaylist.length, ") :", examplePlaylist);

// addToPlaylist(ExampleSearchResult2, examplePlaylist);
// console.log("Playlist 2(", examplePlaylist.length, ") :", examplePlaylist);
let removed = removeFromPlaylist(removeURI, examplePlaylist);

// console.log("Bohemian Rhapsody removed: ", examplePlaylist);
// removeFromPlaylist("uri:1003");
// console.log("Imagine removed: ", examplePlaylist);
