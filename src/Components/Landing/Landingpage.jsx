
import { Button, Card } from 'react-bootstrap';
import React from "react";
import Login from "../Login/Login.jsx";








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
 
  
  render() {
    return (
      <div>
       
          <center>
        {!this.state.goToUserLogin ? (
          <div>
              <br></br><br></br><br></br>
              <Card className="bg-dark text-white">
  
  <Card.ImgOverlay>
    <Card.Title>Plan and schedule your workflow online. Increase your team
              efficiency.</Card.Title>
              <Button  variant="danger" className="landB1" onClick={this.toUserLogin}>
            Join as Admin
            </Button>
            
    
  </Card.ImgOverlay>
</Card>
            
            <br />
            
           
            
          
          </div>
        ) : this.state.goToUserLogin ? (
          <Login/>
          
        ) : null}
        </center>
        </div>
    );
  }
}
export default Land;
