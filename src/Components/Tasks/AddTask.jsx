import React, { Component } from "react";
import axios from "axios";
import { MDBPopover, MDBPopoverBody, MDBBtn, MDBContainer } from "mdbreact";
class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EmployeeName: "",
      ClientName: "",
      DueDate: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    let stateName = e.target.name;
    let stateValue = e.target.value;
    this.setState({ [stateName]: stateValue });
    console.log(this.state[stateName]);
  }

  onSubmit(e) {
    let obj = {
      EmployeeName: this.state.EmployeeName,
      ClientName: this.state.ClientName,
      DueDate: this.state.DueDate,
      status: "fase 1",
    };
    axios.post("http://localhost:5500/task/create", obj).then((res) => {
      console.log(res);
      window.location.reload();
    });

    e.preventDefault();
  }

  render() {
    return (
      
    <div> 
       <MDBContainer>
     
      <div className="d-flex justify-content-center">
        <MDBPopover
          placement="top"
          popover
          clickable
          
        >
          <MDBBtn color="red">Give Tasks </MDBBtn>
          <div >
            <div>
            <center style ={{width:'270px',backgroundColor:'rgba(0, 0, 0, 0.85)',color:'white'}} class="jumbotron jumbotron-fluid" >
            <h1 style={{color :'white'}}>Give tasks</h1>
            <form style={{fontSize:'18px'}} onSubmit={this.onSubmit}>
            <label name="Employeename">Employee name</label>
            <input
          required
          name="EmployeeName"
          type="text"
          placeholder="Employee Name"
          onChange={this.onChange}
          className="input"
        ></input>
        <br></br>
        <label name="Clientname">Client name</label><br></br>
        <input
          required
          name="ClientName"
          type="text"
          placeholder="Client Name"
          onChange={this.onChange}
          className="input"
        ></input>
        <br></br>
        <label name="DueDate">
          <strong>Due date</strong>
        </label><br></br>
        <input
        style={{color :'grey'}}
          required
          name="DueDate"
          type="date"
          onChange={this.onChange}
          className="input"
        ></input>
        <br></br><br></br>
        <MDBBtn size="lg" tag="a" floating social="pin">
        ADD
      </MDBBtn>
      </form>
      </center>
            </div>
          </div>
        </MDBPopover>

      </div>
    </MDBContainer>
  <div >
  
 
</div>
</div>
       
    );
  }
}

export default AddTask;
