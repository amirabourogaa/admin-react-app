import React from "react";
import "./style.css";

function Table(props) {
    return (
        <table style={{width:'1500px',marginLeft:'10px'}} className="table table-striped bordered hover">{props.children}</table>
    )
}

export default Table;