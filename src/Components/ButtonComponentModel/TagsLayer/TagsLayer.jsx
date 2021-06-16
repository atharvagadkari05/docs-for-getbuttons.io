import "../../../Styles/main.css";
import React from "react";


function TagsLayer(TagsList) {
  return (
    <div className="TagsLayer">
      {TagsList.ButtonTags}
    </div>
  )
}

export default TagsLayer;