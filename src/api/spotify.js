import { SPOTIFY_ACCESS_TOKEN } from "./secrets";

const SPOTIFY_API_URL = "https://api.spotify.com/v1";

export async function search(query, type) {
  const response = await fetch(
    `${SPOTIFY_API_URL}/search?q=${query}&type=${type}`,
    {
      headers: {
        Authorization: `Bearer ${SPOTIFY_ACCESS_TOKEN}`,
      },
    }
  );
  if (response.ok) {
    console.log(response);
    return response.json();
  } else {
    console.error(response.status);
    console.error(response.statusText);
    throw new Error("Request failed!");
  }
}

export async function createPlaylist(name, trackIds) {}
