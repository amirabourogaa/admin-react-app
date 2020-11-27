import React, { Component } from "react";
import axios from "axios";
import AddTask from "./AddTask";
import TaskM from "./Tasks";

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  check() {
    axios.get("http://localhost:5500/task").then((response) => {
      if (response.data.length > this.state.data.length) {
        this.setState({ data: response.data });
      }
    });
  }

  render() {
    this.check();
    console.log(this.state.data);
    const AddTaskStyle = {
      float: "left",
      padding: "10px",
      fontFamily: "Arial",
      width: "400px",
    };
    return (
      <div className="container">
        <AddTask></AddTask>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <table class="table table-sm table-dark">
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
        </table>

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
