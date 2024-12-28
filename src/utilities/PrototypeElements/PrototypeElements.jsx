import React from "react";
import "./prototype-elements.css";
import ButtonStandard from "../../components/ButtonStandard/ButtonStandard";
import SearchPillWrapper from "../../components/SearchPill/SearchPillWrapper";
import Tmvp from "../../tmvp/tmvp";

import AppColors from "../AppColors/AppColors";
function PrototypeElements(props) {
  // const showPrototype = props.display ? "display true"
  return (
    <div className={props.isHidden(props.className, props.hide)}>
      <div className="hidden">
        <AppColors />
        <ButtonStandard />
        <SearchPillWrapper></SearchPillWrapper>
        <Tmvp></Tmvp>
      </div>
    </div>
  );
}

export default PrototypeElements;
