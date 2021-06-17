
import ThreeDimensionalButtonContainer from "../../Components/3DButtonContainer/3DButtonContainer";
import "../../Styles/main.css"
import React from "react";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";
import DescriptionSection from "./Sections/DescriptionSection/DescriptionSection";
import { Route, HashRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <HashRouter basename="/">
        <div className="introduction-container">
          <div className="introduction-description-section">
            <h1 className="massive-headline">
              Love <button className="sample-button-primary">Buttons</button>? Get so many <button className="sample-button-raised">button</button> components. Click Click!!
            </h1>
            <Link to="/docs">
              <PrimaryButton content={"Get Started"}/>
            </Link>
          </div>
          <div className="3d-button-container">
            <ThreeDimensionalButtonContainer />
          </div>
          <DescriptionSection />
        </div>
      </HashRouter>
    </div>
  )
}

export default Home;