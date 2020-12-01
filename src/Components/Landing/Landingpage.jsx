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
              <Card className=" text-white">
                <Card.ImgOverlay>
                  
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
           
                  <Login />
               
          ) : null}
        </center>
      </div>
    );
  }
}
export default Land;
