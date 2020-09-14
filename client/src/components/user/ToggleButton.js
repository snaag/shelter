import React, { useState } from "react";

const ToggleButton = ({ toggleOptions, currentValue, changeToggleValue }) => {
  const [clicked, setClicked] = useState(false);

  const handleToggleClick = () => {
    setClicked(!clicked);
    changeToggleValue(
      currentValue === toggleOptions[0] ? toggleOptions[1] : toggleOptions[0]
    );
  };

  return (
    <div
      onClick={handleToggleClick}
      className={`toggle-button-container ${
        clicked ? "toggle-button-container-clicked" : ""
      }`}
    >
      <div
        className={`toggle-circle-unclicked ${
          clicked ? "toggle-circle-clicked" : ""
        }`}
      ></div>
    </div>
  );
};

export default ToggleButton;
