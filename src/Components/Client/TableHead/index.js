import React from 'react';
import './style.css';

function TableHead(props) {
  return (
    <thead>
      <tr>
        <th scope="col" width="10%"></th>
        <th scope="col" width="25%" name="name">
          Name
          <span className="sort-icon">
            <i className={props.sortIcon}
              onClick={props.handleSort}
              name="name"
            >
            </i>
          </span>
        </th>
        <th scope="col" width="15%"name="phone">
          Phone
          <span className="sort-icon">
            <i className={props.sortIcon}
              onClick={props.handleSort}
              name="phone"
            >
            </i>
          </span>
        </th>
        <th scope="col" width="25%" name="occupation">
          Occupation
          <span className="sort-icon">
            <i className={props.sortIcon}
              onClick={props.handleSort}
              name="occupation"
            >
            </i>
          </span>
        </th>
        <th scope="col" width="25%" name="department">
          Department
          <span className="sort-icon">
            <i className={props.sortIcon}
              onClick={props.handleSort}
              name="department"
            >
            </i>
          </span>
        </th>
      </tr>
    </thead>
  );
}

export default TableHead;