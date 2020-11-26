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
        <table class="table table-hover">
  <thead>
    
  </thead>
  <tbody>
   
   
   
    
    <tr class="table-success">
      <th scope="row">Success</th>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr class="table-danger">
      <th scope="row">Danger</th>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr class="table-warning">
      <th scope="row">Warning</th>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
  
     
  </tbody>
</table>
        {/* <table border="1">
          <tr>
            <th>In progress</th>
            <th>In Hold</th>
            <th>In Progress</th>
            <th>Done</th>
          </tr>
        </table> */}
        
        {this.state.data.map((element, index) => {
          return element.status === "fase 1" ? (
            <div className="phase1">
              <TaskM task={element} />
            </div>
          ) : element.status === "fase 2" ? (
            <div className="phase2">
              <TaskM task={element} />
            </div>
          ) : element.status === "fase 3" ? (
            <div className="phase3">
              <TaskM task={element} />{" "}
            </div>
          ) : (
            <div className="phase4">
              <TaskM task={element} />{" "}
            </div>
          );
        })}
      </div>
    );
  }
}
export default Task;