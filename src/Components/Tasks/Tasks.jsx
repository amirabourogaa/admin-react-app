import React, { Component } from "react";

class TaskM extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="task container">
        <span className="taskEmp">
          Employee Name: {"      "}
          {this.props.task.EmployeeName}
        </span>
        <br />
        <span className="taskClient">
          Client Name: {this.props.task.ClientName}
        </span>
        <br />
        <span className="taskSdate">
          Start Date: {this.props.task.startDate}
        </span>
        <br />
        <span className="taskSdate">Due Date: {this.props.task.DueDate}</span>
      </div>
    );
  }
}

export default TaskM;
