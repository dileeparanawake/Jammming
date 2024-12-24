import React from "react";

function Button({ buttonText }) {
  return <button>{buttonText ? buttonText : "click"}</button>;
}

export default Button;
