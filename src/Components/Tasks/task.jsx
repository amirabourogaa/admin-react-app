import React, { Component } from "react";
import axios from "axios";
import AddTask from "./AddTask";
import AddRef from "./AddRef";
import TaskM from "./Tasks";

import moment from "moment";

// import { MDBPopover, MDBPopoverBody, MDBBtn, MDBContainer } from "mdbreact";


import Table from "react-bootstrap/Table";

import { Col, Container, Row } from "react-bootstrap";

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      downloadURL: "",
      files: [],
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
            class="btn btn-primary"
            disabled>
            In progress
          </button>);
          
          if(status==="fase 2")
          return (<button
            style={{ width: "200px" }}
            type="button"
            class="btn btn-danger"
            disabled>
            On Hold
          </button>)
          
          if(status==="fase 4")
          return (<button
            style={{ width: "200px" }}
            type="button"
            class="btn btn-success"
            disabled>
            Complete
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


      <div style={{backgroundColor:' rgba(0,0,0,.6)'}}>
            <Container>
  <Row>
    <Col>  <AddTask></AddTask></Col>
    <Col>
        <AddRef></AddRef> 
</Col>
  </Row>
  
</Container>
      


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
              <th>DueDate</th>
              <th>Employee</th>
              <th>Client</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>

            {this.state.data.map((t, i) => (
              <tr>
                <td>{i + 1}</td>
                <td>{moment(t.DueDate).format('MMMM Do YYYY')}</td>
                <td>{t.EmployeeName}</td>
                <td>{t.ClientName}</td>
                <td>{getStatus(t.status)}</td>
              </tr>
            ))}
           

           
           
          </tbody>
        </Table>
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
