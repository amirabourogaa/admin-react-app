import React from "react";
import "./style.css";

function ResetButton(props) {

    return (
        <button className="btn btn-secondary dropdown" type="button" onClick={props.resetTable}>
            {props.children}
        </button>
    )
}

export default ResetButton;