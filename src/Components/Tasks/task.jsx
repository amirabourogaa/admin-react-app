import React, { Component } from "react";
import axios from "axios";
import AddTask from "./AddTask";
import TaskM from "./Tasks";
import { storage } from "../../fireBase/firebas";
import firebase from "firebase/app";

import { MDBPopover, MDBPopoverBody, MDBBtn, MDBContainer } from "mdbreact";

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      downloadURL: "",
      files: [],
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

    const handleFireBaseUpload = (e) => {
      e.preventDefault(); // prevent page refreshing
      const promises = [];
      console.log(Array.isArray(this.state.files));
      this.state.files.forEach((file) => {
        const uploadTask = firebase
          .storage()
          .ref()
          .child(`your/file/path/${file.name}`)
          .put(file);
        promises.push(uploadTask);
        uploadTask.on(
          firebase.storage.TaskEvent.STATE_CHANGED,
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            if (snapshot.state === firebase.storage.TaskState.RUNNING) {
              console.log(`Progress: ${progress}%`);
            }
          },
          (error) => console.log(error.code),
          async () => {
            const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
            // do something with the url
            console.log(downloadURL);
            axios.post("http://localhost:5500/References/add", {
              url: downloadURL,
            });
          }
        );
      });
      Promise.all(promises)
        .then(() => console.log("hey"))
        .catch((err) => console.log(err.code));
    };

    const handleImageAsFile = (e) => {
      const files = e.target.files[0];
      const array = [];
      array.push(files);
      this.setState({ files: array });
      console.log(this.state.file);
    };
    return (
      <div className="container">
        <AddTask></AddTask>
        <input
          type="file"
          name="upload"
          accept="application/pdf,application/vnd.ms-excel"
          onChange={handleImageAsFile}
        />
        <MDBBtn color="red" onClick={handleFireBaseUpload}>
          add Ref
        </MDBBtn>
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
