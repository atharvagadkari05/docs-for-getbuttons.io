import "../../../Styles/main.css";

import React, { useEffect } from "react";

// importing prismJS
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

function ButtonComponentDetailsModal(ButtonComponentDetails) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="ButtonComponentDetailsModal">
      <div className="content">
        <div className="content-header">
          <h2>
            {ButtonComponentDetails.ButtonName}
          </h2>
          <button className={ButtonComponentDetails.ButtonClassName}>{ButtonComponentDetails.ButtonName}</button>
        </div>
        <div className="content-body">
          {/* <p>Relevant Tags</p> */}
          {/* <TagsLayer Tags={ButtonComponentDetails.ButtonTags}/> */}
          <div className="code-snippet-container">
            <p>CSS Code</p>
            <div className="Code">
              <pre>
                <code className={`language-${ButtonComponentDetails.ButtonComponentHTMLCodeSnippet.language}`}>
                  {ButtonComponentDetails.ButtonComponentHTMLCodeSnippet.code_snippet}
                </code>
              </pre>
            </div>
            <p>React Code</p>
            <div className="Code">
              <pre>
                <code className={`language-${ButtonComponentDetails.ButtonComponentReactJSCodeSnippet.language}`}>
                  {ButtonComponentDetails.ButtonComponentReactJSCodeSnippet.code_snippet}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ButtonComponentDetailsModal;