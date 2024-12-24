import React from "react";

function Button({ buttonText, onClick, onSubmit, type }) {
  return (
    <button onClick={onClick} onSubmit={onSubmit} type={type}>
      {buttonText ? buttonText : "click"}
    </button>
  );
}

export default Button;
