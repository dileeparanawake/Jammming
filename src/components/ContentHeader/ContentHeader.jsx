import React from "react";
import SearchPillWrapper from "../SearchPill/SearchPillWrapper";
import ButtonStandard from "../ButtonStandard/ButtonStandard";
import "./content-header.css";

function ContentHeader(props) {
  return (
    <div className="content-header">
      <SearchPillWrapper></SearchPillWrapper>
      <ButtonStandard></ButtonStandard>
    </div>
  );
}

export default ContentHeader;
