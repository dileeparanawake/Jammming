import { SPOTIFY_ACCESS_TOKEN } from "./secrets";
const SPOTIFY_API_URL = "https://api.spotify.com/v1";

export async function getSearchResults(query) {
  const params = new URLSearchParams({
    q: query,
    type: "track",
  });

  const queryString = params.toString();

  const url = `${SPOTIFY_API_URL}/search?${queryString}`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${SPOTIFY_ACCESS_TOKEN}`,
    },
  });

  if (response.ok) {
    console.log("Search success", response);
    return response.json();
  } else {
    console.error(response.status);
    console.error(response.statusText);
    const message = await response.text();
    console.error(message);
    throw new Error("Request failed!");
  }
}
