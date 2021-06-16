
import "../../../Styles/main.css";
import React from "react";

function ThreeDimensionalButton(buttonProperties) {

  return (
    <span className="ThreeDimensionalButton">
      <span className="ButtonTopContent">
        <text className="button-text">{buttonProperties.TextData}</text>
      </span>
    </span>
  )
}

export default ThreeDimensionalButton;