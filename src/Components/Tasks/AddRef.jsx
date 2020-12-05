import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import axios from "axios";
import firebase from "firebase/app";
import Swal from "sweetalert2";

class AddRef extends Component {
  constructor(props){
    super(props)
this.state = {
  modal: false,
  Clientname:'',
  Natureofstudy:'',
  Date:'',
  project:''

}
this.onChange=this.onChange.bind(this)
}

onChange(e){
  this.setState({[e.target.name]:e.target.value})
  console.log(e.target.name,e.target.value)
}

toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}


render() {
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
          let obj={
            project:this.state.project,
            Natureofthestudy:this.state.Natureofstudy,
            Client:this.state.Clientname,
            date:this.state.Date,
              url: downloadURL,  
          }
          
          axios.post("http://localhost:5500/References/add", obj).then(res=>{
            // let timerInterval
            console.log(res)
          })
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
    <MDBContainer>
      
      <MDBBtn clessName='danger ' onClick={this.toggle}>Add main refrence</MDBBtn>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        <MDBModalHeader toggle={this.toggle}><div style={{width:'390px',fontFamily:'serif',fontSize:'25px',fontWeight:'bold'}}>Main refrence</div></MDBModalHeader>
        <MDBModalBody style={{backgroundColor:'whiteSmoke'}}>
            <center>
        <form style={{ fontSize: "22px",fontWeight:'bold' }} onSubmit={this.onSubmit}>
                      <label name="Employeename"><strong>Client name</strong></label><br/>
                      <input
                        required
                        name="Clientname"
                        type="text"
                        placeholder="Client Name"
                        onChange={this.onChange}
                        className="input"
                      ></input>
                      <br></br>
                      <label name="Clientname"><strong>Nature of study</strong></label>
                      <br></br>
                      <input
                        required
                        name="Natureofstudy"
                        type="text"
                        placeholder="Nat of study"
                        onChange={this.onChange}
                        className="input"
                      ></input>
                      <br></br>
                      <label name="project">
                        <strong>Project</strong>
                      </label>
                      <br></br>
                      <input
                        style={{ color: "black" }}
                        required
                        placeholder="Project"
                        name="project"
                        type="text"
                        onChange={this.onChange}
                        className="input"
                      ></input>
                      <br></br>
                      <label name="DueDate">
                        <strong>Date</strong>
                      </label>
                      <br></br>
                      <input
                        style={{ color: "black" }}
                        required
                        name="Date"
                        type="date"
                        onChange={this.onChange}
                        className="input"
                      ></input>
                      <br></br><br></br>
                      <input
                      style={{ color: "grey",width:'400px' }}
          type="file"
          name="upload"
          accept="application/pdf,application/vnd.ms-excel"
          onChange={handleImageAsFile}
        />
        <br/><br/>
        <MDBBtn color="red" onClick={handleFireBaseUpload}>
          add Ref
        </MDBBtn>
                    </form>
                    </center>
        </MDBModalBody>
        
      </MDBModal>
    </MDBContainer>
    );
  }
}

export default AddRef;