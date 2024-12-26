import "./button-standard.css";

function ButtonStandard(props) {
  return (
    <button className="button_standard">
      {props.buttonText || "Default click"}
    </button>
  );
}

export default ButtonStandard;
