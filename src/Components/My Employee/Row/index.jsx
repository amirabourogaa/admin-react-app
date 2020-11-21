import React from "react";
import "./style.css";

function Row(props) {

    return (
        <div className="row justify-content-center">
            {props.children}
        </div>
    )
}

export default Row;