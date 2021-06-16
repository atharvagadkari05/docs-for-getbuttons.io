import React, { useState } from "react";
import ButtonComponentModel from "../../Components/ButtonComponentModel/ButtonComponentModel";

// importing css modules
import "../../Styles/main.css";

// importing data for button components
import ButtonComponentData from "../../Data/ButtonComponentData";

function Docs() {
  
  const [_ButtonComponentData] = useState(ButtonComponentData.ButtonComponentData);

  return (
    <div className="Docs">
      <h1 className="headline">
        Documentation for getbuttons.io
      </h1>
      
      <div className="docs-component-container">
        {
          _ButtonComponentData.map((buttonData, index) => (
            <ButtonComponentModel 
              ButtonName={buttonData.button_name}
              ButtonClassName={buttonData.button_className}
              ButtonCode={buttonData.button_code}
              ButtonTags={buttonData.button_tags}
            />
          ))
        }
      </div>

    </div>
  )
}

export default Docs;