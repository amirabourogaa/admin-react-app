import React from "react";
import "./style.css";




function TableRow(props) {
    return (
        <tr>
            <th scope="row">{props.id}</th>
            <td style={{width:'200px'}}>{props.first_name}</td>
            <td>{props.last_name}</td>
            <td>{props.department}</td>
            <td>{props.role}</td>
            <td>{props.email}</td>
        </tr>
    )
}

export default TableRow;