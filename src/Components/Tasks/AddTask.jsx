import React, { Component } from "react";
import axios from "axios";

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
      <form onSubmit={this.onSubmit}>
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
        <label name="Clientname">Client name</label>
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
        </label>
        <input
          required
          name="DueDate"
          type="date"
          onChange={this.onChange}
          className="input"
        ></input>
        <br></br>
        <button type="submit" className="">
          Submit
        </button>
      </form>
    );
  }
}

export default AddTask;
