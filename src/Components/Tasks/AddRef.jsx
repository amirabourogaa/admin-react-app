import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class AddRef extends Component {
state = {
  modal: false
}

toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}

render() {
  return (
    <MDBContainer>
      <MDBBtn onClick={this.toggle}>Add main refrence</MDBBtn>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        <MDBModalHeader toggle={this.toggle}>Main refrence</MDBModalHeader>
        <MDBModalBody>
            <center>
        <form style={{ fontSize: "18px" }} onSubmit={this.onSubmit}>
                      <label name="Employeename">Client name</label><br/>
                      <input
                        required
                        name="ClientName"
                        type="text"
                        placeholder="Client Name"
                        onChange={this.onChange}
                        className="input"
                      ></input>
                      <br></br>
                      <label name="Clientname">Nature of study</label>
                      <br></br>
                      <input
                        required
                        name="NatOfStudy"
                        type="text"
                        placeholder="Nat of study"
                        onChange={this.onChange}
                        className="input"
                      ></input>
                      <br></br>
                      <label name="DueDate">
                        <strong>Project</strong>
                      </label>
                      <br></br>
                      <input
                        style={{ color: "grey" }}
                        required
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
                        style={{ color: "grey" }}
                        required
                        name="project"
                        type="date"
                        onChange={this.onChange}
                        className="input"
                      ></input>
                      <br></br>
                      
                    </form>
                    </center>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
          <MDBBtn color="primary">Add</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}

export default AddRef;