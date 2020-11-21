import React from "react";
import "./style.css";

function TableRowHeader(props) {

    return (
        <th scope="col">{props.name}</th>
    )
}

export default TableRowHeader; 