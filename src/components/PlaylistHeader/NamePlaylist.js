import React, { useState } from "react";
import Button from "../Button";

function NamePlaylist() {
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }
  return (
    <div>
      <input
        id="playlistSearch"
        name="playlistName"
        type="text"
        placeholder="Name your playlist"
        value={input}
        onChange={handleChange}
      />
      <Button buttonText="Rename" type="button" />
    </div>
  );
}

export default NamePlaylist;
