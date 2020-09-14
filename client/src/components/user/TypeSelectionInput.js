import React from "react";
import ToggleButton from "./ToggleButton";

const TypeSelectionInput = ({ type, setType }) => {
  return (
    <div className="signin-form-type-selection-container">
      <div className="signin-form-type-first-selection">
        <h3 className={type === "teen" ? "selected" : "deselected"}>청소년</h3>
      </div>
      <div className="signin-form-type-toggle-button-container">
        <ToggleButton
          toggleOptions={["teen", "staff"]}
          currentValue={type}
          changeToggleValue={setType}
        />
      </div>
      <div className="signin-form-type-second-selection">
        <h3 className={type === "staff" ? "selected" : "deselected"}>관리자</h3>
      </div>
    </div>
  );
};

export default TypeSelectionInput;
