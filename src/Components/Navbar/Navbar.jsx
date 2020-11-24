import React, { Component } from 'react';
import { FcSmartphoneTablet } from "react-icons/fc";
import "bootswatch/dist/lux/bootstrap.min.css";
import {Route, BrowserRouter as Router , Link} from 'react-router-dom';
import '../Navbar/style.css';
    class Navbar extends Component {
        constructor(props) {
          super(props);
          this.state = {
            data: [],
            email: this.props.email,
            password: this.props.password,
            check: "Dashboard",
          };
          this.profile = this.profile.bind(this);
          this.Dashboard = this.Dashboard.bind(this);
          this.message = this.message.bind(this);
          this.Employee = this.Employee.bind(this);
          this.client = this.client.bind(this);
          this.Chat = this.Chat.bind(this);
          this.tasks = this.tasks.bind(this);
        }
        componentDidMount() {
          this.setState({
            check: "Dashboard",
          });
        }
        Dashboard(e) {
          e.preventDefault();
          this.setState({
            check: "Dashboard",
          });
        }
        client(e) {
          e.preventDefault();
          this.setState({
            check: "client",
          });
        }
        profile(e) {
          e.preventDefault();
          this.setState({
            check: "profile",
          });
        }
        message(e) {
          e.preventDefault();
          this.setState({
            check: "message",
          });
        }
        Employee(e) {
          e.preventDefault();
          this.setState({
            check: "Employee",
          });
        }
        Chat(e) {
          e.preventDefault();
          this.setState({
            check: "Chat",
          });
        }
        tasks(e) {
          e.preventDefault();
          this.setState({
            check: "tasks",
          });
        }
      
      
        render() {
         return (
           <div>  
            <nav  class="navbar navbar-expand-lg navbar-dark bg-dark">
 
  <a class="navbar-brand" >
    <FcSmartphoneTablet/>
  </a>
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor02">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
      
        <a class="nav-link" href="/dashboard"> 
        😈
        My Dashboard
          <span class="sr-only">(current)</span>
        </a>
        
      </li>
      <li class="nav-item">
        
        <a class="nav-link" href="/messages" >My messages</a>
       
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/employees">My Employee</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/clients">My Clients</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/chat">My Calendar</a>
      </li>
     
      <li class="nav-item">
        <a class="nav-link" href="/tasks">My Tasks</a>
      </li>

      
    </ul>
   
  </div>
</nav>

           </div>
         )
          
      }
    }
  
      
      
    export default Navbar;
        
    
