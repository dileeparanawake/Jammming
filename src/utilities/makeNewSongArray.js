import { makeNewSongObject } from "./makeNewSongObject";
import { checkInPlaylist } from "./utilities";

// iterates through raw search to return array of new song objects

export function makeNewSongArray(rawSearchResult, songsInPlaylist) {
  const rawTracksArray = rawSearchResult.tracks.items;

  const processedTracksArray = [];

  rawTracksArray.forEach((item) => {
    const formattedTrackObj = makeNewSongObject(item);
    if (checkInPlaylist(formattedTrackObj, songsInPlaylist)) {
      formattedTrackObj.display_in_playlist = true;
    }
    processedTracksArray.push(formattedTrackObj);
  });

  //   console.log("processed track array", processedTracksArray);
  return processedTracksArray;
}
