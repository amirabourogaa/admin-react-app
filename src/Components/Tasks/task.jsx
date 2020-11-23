import React, { Component } from "react";
import axios from "axios";
import TaskM from "./Tasks";

import AddTask from "./AddTask";
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
        <div className="AddTask" style={AddTaskStyle}>
          <AddTask></AddTask>
        </div>
        <div className="Tasks">
          {this.state.data.map((task, index) => (
            <div>
              <TaskM task={task} key={index} />
              <br />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Task;
