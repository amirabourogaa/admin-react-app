import React from "react";
import "./style.css";

function Dropdown(props) {

    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {props.type}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {props.children}
            </div>
        </div>
    )
}


export default Dropdown;