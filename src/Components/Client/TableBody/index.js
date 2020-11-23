import React from 'react';
import './style.css';

function TableBody(props) {
  return (
    <tbody>
      {props.employees.map(employee => (
        <tr key={employee.id}>
          <th scope="row" className="text-center">
            <img alt={employee.name} className="image-fluid" src={employee.image}/>
          </th>
          <td>{employee.name}</td>
          <td>{employee.phone}</td>
          <td>{employee.occupation}</td>
          <td>{employee.department}</td>
        </tr>        
      ))}
    </tbody>
  )
}

export default TableBody;