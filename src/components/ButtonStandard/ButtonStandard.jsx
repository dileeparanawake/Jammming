import "./button-standard.css";

function ButtonStandard(props) {
  return (
    <button
      className={
        props.className
          ? props.className + " " + "button_standard"
          : "button_standard"
      }
      onClick={props.onClick}
      type={props.type ? props.type : "button"}
    >
      <p>{props.buttonText || "Default click"}</p>
    </button>
  );
}

export default ButtonStandard;
