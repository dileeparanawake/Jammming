import "./button-standard.css";

function ButtonStandard(props) {
  return (
    <button className={props.className || "button_standard"}>
      <p>{props.buttonText || "Default click"}</p>
    </button>
  );
}

export default ButtonStandard;
