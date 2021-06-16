import React from "react";

// importing css modules
import "../../../../Styles/main.css";

function DescriptionSection() {
  return (
    <div className="DescriptionSection">
      <h1 className="headline">
        Get component in both
      </h1>
      <div className="TechCard-Container">
        
        <div className="TechCard">
          <i className="fab fa-css3-alt"></i>
          <p>
            CSS through <u>CDN</u>
          </p>
        </div>

        <div className="TechCard">
          <i className="fab fa-react"></i>
          <p>
            React through <u>NPM</u>
          </p>
        </div>

      </div>
    </div>
  )
}

export default DescriptionSection;