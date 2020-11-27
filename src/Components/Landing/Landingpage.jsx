import { Button, Card } from "react-bootstrap";
import React from "react";
import Login from "../Login/Login.jsx";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody } from "mdbreact";

class Land extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goToUserLogin: false,
      goToCompanyLogin: false,
    };
    this.toUserLogin = this.toUserLogin.bind(this);
  }
  // take you to user login interface
  toUserLogin() {
    var logUser = !this.state.goToUserLogin;
    this.setState({ goToUserLogin: logUser });
  }
  state = {
    modal10: false,
    modal11: false,
  };

  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };

  render() {
    return (
      <div>
        <center>
          {!this.state.goToUserLogin ? (
            <div>
              <br></br>
              <br></br>
              <br></br>
              <Card className="bg-dark text-white">
                <Card.ImgOverlay>
                  <Card.Title>
                    Plan and schedule your workflow online. Increase your team
                    efficiency.
                  </Card.Title>
                  <Button
                    variant="danger"
                    className="landB1"
                    onClick={this.toUserLogin}
                  >
                    Join as Admin
                  </Button>
                </Card.ImgOverlay>
              </Card>

              <br />
            </div>
          ) : this.state.goToUserLogin ? (
            <MDBContainer>
              <MDBBtn color="warning" onClick={this.toggle(10)}>
                Click to login{" "}
              </MDBBtn>
              <MDBModal
                isOpen={this.state.modal10}
                toggle={this.toggle(10)}
                frame
                position="bottom"
              >
                <MDBModalBody
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.85)" }}
                  className="text-center"
                >
                  <Login />
                </MDBModalBody>
              </MDBModal>
            </MDBContainer>
          ) : null}
        </center>
      </div>
    );
  }
}
export default Land;
