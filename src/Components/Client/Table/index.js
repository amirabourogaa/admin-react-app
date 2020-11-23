import React from 'react';
import TableHead from '../TableHead';
import TableBody from '../TableBody';

function Table(props) {
  return (
    <div className="table-responsive-md">
      <table className="table table-dark">
        <TableHead 
          handleSort={props.handleSort}
          sortIcon={props.sortIcon}
        />
        <TableBody 
          employees={props.employees}
        />
      </table>
    </div>
  )
}

export default Table;