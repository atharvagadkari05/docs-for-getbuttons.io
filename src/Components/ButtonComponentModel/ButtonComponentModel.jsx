import "../../Styles/main.css";

import React, { useState } from "react";
import ButtonComponentDetailsModal from "./ButtonComponentDetailsModal/ButtonComponentDetailsModal";

// importing react-modals as state loader
import Modal from "react-modal";
import TagsLayer from "./TagsLayer/TagsLayer";

Modal.setAppElement('#root');

function ButtonComponentModel(ButtonComponentDetails) {
  const [modalState, setModalState] = useState(false);
  return (
    <div className="ButtonComponentModel">
      <button 
        className={ButtonComponentDetails.ButtonClassName}

        // setting up the onclick event using useState
        // this will load the modal and show the properties
        onClick={() => setModalState(true)}
      >
        {ButtonComponentDetails.ButtonName}
      </button>
      <code className="button-className">
        {ButtonComponentDetails.ButtonClassName}
      </code>

      {/* loading the modal component here
          on after setting the useState event as true
      */}
      <Modal 
        isOpen={modalState} 
        onRequestClose={() => setModalState(false)}
        style={
          {
            overlay: {
              backgroundColor: 'rgba(125, 125, 125, 0)',
              width: '900px',
              height: '600px',
              marginRight: 'auto',
              marginLeft: 'auto',
              marginTop: 'auto',
              marginBottom: 'auto'
            }
          }
        }
      >
        <ButtonComponentDetailsModal
          ButtonName={ButtonComponentDetails.ButtonName}
          ButtonClassName={ButtonComponentDetails.ButtonClassName}
          // ButtonTags={ButtonComponentDetails.ButtonTags}
          ButtonComponentHTMLCodeSnippet={ButtonComponentDetails.ButtonCode[0]}
          ButtonComponentReactJSCodeSnippet={ButtonComponentDetails.ButtonCode[1]}
        />
          
        <div>
          <button onClick={() => setModalState(false)}
            className="closeButton">
              Close
          </button>
        </div>
      </Modal>
    </div>
  )
}

export default ButtonComponentModel;