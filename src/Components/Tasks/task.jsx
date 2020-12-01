import React, { Component } from "react";
import axios from "axios";
import AddTask from "./AddTask";
import TaskM from "./Tasks";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.check();
  }

  check() {
    axios.get("http://localhost:5500/task").then((response) => {
      if (response.data.length > this.state.data.length) {
        this.setState({ data: response.data });
      }
    });
  }

  render() {
    const getStatus = (status) => {
    if(status==="fase 1" || status==="fase3")
    return (
          <button
            style={{ width: "200px" }}
            type="button"
            class="btn btn-primary">
            In progress
          </button>);
          
          if(status==="fase 2")
          return (<button
            style={{ width: "200px" }}
            type="button"
            class="btn btn-danger">
            In progress
          </button>)
          
          if(status==="fase 4")
          return (<button
            style={{ width: "200px" }}
            type="button"
            class="btn btn-success">
            In progress
          </button>)
          
        
      
    };
    console.log(this.state.data);
    const AddTaskStyle = {
      float: "left",
      padding: "10px",
      fontFamily: "Arial",
      width: "400px",
    };
    return !this.state.data? <div>loading</div>: (
      <div>
        <AddTask></AddTask>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Table
          style={{ marginRight: "1000px", marginTop: "30px" }}
          striped
          bordered
          hover
          variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Description of the Task</th>
              <th>Employee</th>
              <th>Client</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((t, i) => (
              <tr>
                <td>{i + 1}</td>
                <td>descp </td>
                <td>{t.EmployeeName}</td>
                <td>{t.ClientName}</td>
                <td>{getStatus(t.status)}</td>
              </tr>
            ))}
            <tr>
              <td>1</td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <button
                  style={{ width: "200px" }}
                  type="button"
                  class="btn btn-primary">
                  In progress
                </button>
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <button
                  type="button"
                  style={{ width: "200px" }}
                  class="btn btn-danger">
                  On hold
                </button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <button
                  style={{ width: "200px" }}
                  type="button"
                  class="btn btn-success">
                  Done
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
        {/* <table class="table table-sm table-dark">
          <thead>
            <tr>
              <th className="bg-info" scope="col">
                In progress
              </th>
              <th className="bg-danger" scope="col">
                On hold
              </th>
              <th className="bg-warning" scope="col">
                In progress
              </th>
              <th className="bg-success" scope="col">
                Done
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bg-info">IP</td>
              <td className="bg-danger">OH</td>
              <td className="bg-warning">IP</td>
              <td className="bg-success">done</td>
            </tr>
          </tbody>
        </table> */}

        {this.state.data.map((element, index) => {
          return element.status === "fase 1" ? (
            <div className="phase1">
              <TaskM task={element} key={index} />
            </div>
          ) : element.status === "fase 2" ? (
            <div className="phase2">
              <TaskM task={element} key={index} />
            </div>
          ) : element.status === "fase 3" ? (
            <div className="phase3">
              <TaskM task={element} key={index} />{" "}
            </div>
          ) : (
            <div className="phase4">
              <TaskM task={element} key={index} />{" "}
            </div>
          );
        })}
      </div>
    );
  }
}
export default Task;
