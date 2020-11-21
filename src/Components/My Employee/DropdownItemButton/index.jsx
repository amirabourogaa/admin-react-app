import React from "react";
import "./style.css";

function DropdownItemButton(props) {

    return(
        <button className="dropdown-item" onClick={props.function} name={props.name}>{props.name}</button>
    )
}

export default DropdownItemButton;