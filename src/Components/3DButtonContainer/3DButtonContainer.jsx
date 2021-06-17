
import { useState } from "react";
import "../../Styles/main.css";
import ThreeDimensionalButton from "./3DButton/3DButton";
import React from "react";

function ThreeDimensionalButtonContainer() {

  const ButtonTextData = {
    "ButtonTextData": [
      {
        "id": "01",
        "data": "Click",
        "layer": "01",
        "color": "blue"
      },
      {
        "id": "02",
        "data": "Click?",
        "layer": "01",
        "color": "orange"
      },
      {
        "id": "03",
        "data": "Click",
        "layer": "01",
        "color": "yellow"
      },
      {
        "id": "04",
        "data": "Click",
        "layer": "01",
        "color": "green"
      },
      {
        "id": "05",
        "data": "Click",
        "layer": "02",
        "color": "black"
      },
      {
        "id": "06",
        "data": "Click",
        "layer": "02",
        "color": "white"
      },
      {
        "id": "07",
        "data": "Click",
        "layer": "02",
        "color": "blue"
      },
      {
        "id": "08",
        "data": "Click",
        "layer": "03",
        "color": "yellow"
      },
      {
        "id": "09",
        "data": "Click",
        "layer": "03",
        "color": "purple"
      },{
        "id": "09",
        "data": "Click",
        "layer": "03",
        "color": "purple"
      }
    ]
  };

  const [buttonTextData] = useState(ButtonTextData.ButtonTextData);

  return (
    <div className="ThreeDimensionalButtonContainer">
      <div className="sampleButtons">
        {
          buttonTextData.map((buttonData, index) => (
            <ThreeDimensionalButton 
              ButtonSpanLayer={buttonData.layer}
              TextData={buttonData.data}
              ButtonColor={buttonData.color}
            />
          ))
        }
      </div>
      {/* <span className="ThreeDimensionalButton-Blue">
        <span className="ButtonTopContent">
        <text className="button-text">Get Started</text>
      </span>
    </span> */}
    </div>
  )
}

export default ThreeDimensionalButtonContainer;