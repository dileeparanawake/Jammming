import React from "react";
import "./prototype-elements.css";

import ButtonStandard from "../../components/ButtonStandard/ButtonStandard";

function PrototypeElements(props) {
  // const showPrototype = props.display ? "display true"
  return (
    <div className={props.isHidden(props.className, props.hide)}>
      <ButtonStandard></ButtonStandard>
    </div>
  );
}

export default PrototypeElements;
