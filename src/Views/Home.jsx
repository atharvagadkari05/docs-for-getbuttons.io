
import ThreeDimensionalButtonContainer from "../Components/3DButtonContainer/3DButtonContainer";
import "../Styles/main.css"
import React from "react";
import PrimaryButton from "../Components/PrimaryButton/PrimaryButton";

const Home = () => {
  return (
    <div className="Home">
      <div className="introduction-container">
        
        <div className="introduction-description-section">
          <h1 className="massive-headline">
            Love <button className="sample-button-primary">Buttons</button>? Get so many <button className="sample-button-raised">button</button> components. Click Click!!
          </h1>
          <PrimaryButton content = {"Get Started"}/>
        </div>
        <div className="3d-button-container">
          <ThreeDimensionalButtonContainer />
        </div>
      </div>
    </div>
  )
}

export default Home;