import "./button-standard.css";

function ButtonStandard(props) {
  return (
    <button className="button_standard">
      <p>{props.buttonText || "Default click"}</p>
    </button>
  );
}

export default ButtonStandard;
