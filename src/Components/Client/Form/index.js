import React from 'react';

const Form = (props) => {
  return (
    <form className="form">
      <div className="form-group">
        <input 
        style={{backgroundColor:'whiteSmoke',color:'whiteSmoke'}}
          className="form-control col col-lg-6 offset-lg-3"
          value={props.filterValue}
          name="filter-employees"
          onChange={props.handleInputChange}
          type="text"
          placeholder="Filter employees list by Name"
        />
      </div>
    </form>
  )
}

export default Form;