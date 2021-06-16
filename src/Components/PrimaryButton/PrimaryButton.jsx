import React from "react";
import "../../Styles/main.css";

function PrimaryButton(props){
    return(
<div className="PrimaryButton">
    <button className = "btn-1">{props.content}</button>
</div>
    )
}
export default PrimaryButton;