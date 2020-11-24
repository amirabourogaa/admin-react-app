
import { Button } from 'react-bootstrap';
import React from "react";
import Login from "../Login/Login.jsx";
import {Route, BrowserRouter as Router , Link} from 'react-router-dom';


import Dashboard from "../Dashboard/Dashboard.jsx";
import Messageform from '../Message/Messageform.jsx';

import Profile from '../Profile/Profile.jsx';
import Employee from '../My Employee/Employee.jsx';
import Client from '../Client/Client.jsx';
import Chat from '../Calendar/Chat.jsx';
import Task from '../Tasks/task.jsx';

import "bootswatch/dist/lux/bootstrap.min.css";


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
              <Router>
                <Route path ='/dashboard' component = {Dashboard}></Route>
                <Route path ='/messages' component = {Messageform}></Route>
                <Route path ='/clients' component = {Client}></Route>
                <Route path ='/employees' component = {Employee}></Route>
                <Route path ='/profile' component = {Profile}></Route>
                <Route path ='/chat' component = {Chat}></Route>
                <Route path ='/tasks' component = {Task}></Route>
                 
                

              <nav fixed class="navbar navbar-expand-lg navbar-dark bg-dark">
 
  <a class="navbar-brand" >Navbar</a>
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor02">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
      <Link to= '/dashboard'>
        <a class="nav-link" href="#"> My Dashboard
          <span class="sr-only">(current)</span>
        </a>
        </Link>
      </li>
      <li class="nav-item">
        <Link to ='/messages'>
        <a class="nav-link" >My messages</a>
        </Link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/messages">My Employee</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/clients">My Clients</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/chat">My Calendar</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">My Calendar</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">My Tasks</a>
      </li>

      
    </ul>
   
  </div>
</nav>
</Router>
            <h3 className="landP">
              Plan and schedule your workflow online. Increase your team
              efficiency.
            </h3>
           
            <br />
            
            <Button  variant="danger" className="landB1" onClick={this.toUserLogin}>
            Join as Admin
            </Button>
            
            
          
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
