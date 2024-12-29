import { createUniqueID } from "./utilities";

// makesTrack from rawsearchresult.tracks.items[index]

export function makeNewSongObject(rawTrackObj) {
  const uniqueID = createUniqueID();
  const formattedTrackObj = {
    key: uniqueID, // set key fn
    id: uniqueID, // set key fn
    className: "trackItem",
    track_name: rawTrackObj.name,
    artist: rawTrackObj.artists[0].name,
    album_name: rawTrackObj.album.name,
    uri: rawTrackObj.uri,
    type: rawTrackObj.type,
    image_url: rawTrackObj.album.images[0].url,
    display_in_playlist: false,
    display_in_search: true,
  };
  return formattedTrackObj;
}
