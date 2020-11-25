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
   
  </a>
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor02">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
      
        <a class="nav-link" href="/dashboard"> 
       
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
        <a class="nav-link" href="/tasks">Give Tasks</a>
      </li>

      
    </ul>
   
  </div>
</nav>


           </div>
         )
          

                </div>
                <Client email={this.state.email} password={this.state.password}/>
              </div>
            );
          }  else if (this.state.check === "Chat") {
            return (
              <div>
                 <div className="navbar">
                  <span className="logo" onClick={(e) => this.profile(e)}>
                  < img src="https://cdn1.iconfinder.com/data/icons/digital-marketing-44/64/72-512.png" width="20px"></img>
                  </span>
                  <span
                    className="nav"
                    className="nav-selected"
                    onClick={(e) => this.Dashboard(e)}
                  >
                    My Dashboard
                  </span>
                  <span className="nav"  className="nav-selected" onClick={(e) => this.message(e)}>
                    {" "}
                    My messages
                  </span>
                  <span className="nav"  className="nav-selected" onClick={(e) => this.Employee(e)}>
                    {" "}
                    My Employee
                  </span>
                  <span className="nav"  className="nav-selected" onClick={(e) => this.client(e)}>
                    {" "}
                    My Clients
                  </span>
                  <span className="nav"  className="nav-selected" onClick={(e) => this.Chat(e)}>
                    {" "}
                   My Calendar
                  </span>
                  <span className="nav"  className="nav-selected" onClick={(e) => this.tasks(e)}>
                    {" "}
                   My Tasks
                  </span>
                </div>
                <Chat email={this.state.email} password={this.state.password}/>
              </div>
            )
        } else if (this.state.check === "Tasks") {
          return (
            <div>
               <div className="navbar">
                <span className="logo" onClick={(e) => this.profile(e)}>
                < img src="https://cdn1.iconfinder.com/data/icons/digital-marketing-44/64/72-512.png" width="20px"></img>
                </span>
                <span
                  className="nav"
                  className="nav-selected"
                  onClick={(e) => this.Dashboard(e)}
                >
                  My Dashboard
                </span>
                <span className="nav"  className="nav-selected" onClick={(e) => this.message(e)}>
                  {" "}
                  My messages
                </span>
                <span className="nav"  className="nav-selected" onClick={(e) => this.Employee(e)}>
                  {" "}
                  My Employee
                </span>
                <span className="nav"  className="nav-selected" onClick={(e) => this.client(e)}>
                  {" "}
                  My Clients
                </span>
                <span className="nav"  className="nav-selected" onClick={(e) => this.Chat(e)}>
                  {" "}
                 My Calendar
                </span>
                <span className="nav"  className="nav-selected" onClick={(e) => this.tasks(e)}>
                  {" "}
                 My Tasks
                </span>
              </div>
              <Task email={this.state.email} password={this.state.password}/>
           
            </div>
          )

      }
    }
  
      
      
    export default Navbar;
        
    
