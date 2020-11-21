import React, { Component } from 'react';
import Messageform from '../Message/Messageform.jsx';
import Dashboard from "../Dashboard/Dashboard.jsx";
import Board from '../Profile/Board.jsx';
import Employee from '../My Employee/Employee.jsx';
import client from '../Client/Client.jsx';
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
      
      
        render() {
          if (this.state.check === "Dashboard") {
            return (
              <div>
                <div className="navbar">
                  <span className="logo" onClick={(e) => this.profile(e)}>
                  < img src="https://cdn1.iconfinder.com/data/icons/digital-marketing-44/64/72-512.png" width="40px"></img>
                  </span>
                  <span
                    className="nav"
                    className="nav-selected"
                    onClick={(e) => this.Dashboard(e)}  
                  >
                       {" "}  {" "}
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

                </div>
                <Dashboard email={this.state.email} password={this.state.password}/>
              </div>
            );
          }

            else  if (this.state.check === "profile") {
            return (
              <div>
                <div className="navbar">
                  <span className="logo" onClick={(e) => this.profile(e)}>
                  < img src="https://cdn1.iconfinder.com/data/icons/digital-marketing-44/64/72-512.png" width="40px"></img>

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
                </div>
                <Board email={this.state.email} password={this.state.password}/>

              </div>
            );
        
          } else if (this.state.check === "message") {
            return (
              <div>
                 <div className="navbar">
                  <span className="logo" onClick={(e) => this.profile(e)}>
                  < img src="https://cdn1.iconfinder.com/data/icons/digital-marketing-44/64/72-512.png" width="40px"></img>
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
                </div>
                <Messageform email={this.state.email} password={this.state.password}/>
              </div>
            );
          } else if (this.state.check === "Employee") {
            return (
              <div>
                 <div className="navbar">
                  <span className="logo" onClick={(e) => this.profile(e)}>
                  < img src="https://cdn1.iconfinder.com/data/icons/digital-marketing-44/64/72-512.png" width="40px"></img>
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

                </div>
                <Employee email={this.state.email} password={this.state.password}/>
              </div>
            );
          } 
           else if (this.state.check === "client") {
            return (
              <div>
                 <div className="navbar">
                  <span className="logo" onClick={(e) => this.profile(e)}>
                  < img src="https://cdn1.iconfinder.com/data/icons/digital-marketing-44/64/72-512.png" width="40px"></img>
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
                  <span className="nav"  className="nav-selected" onClick={(e) => this.Employee(e)}>
                    {" "}
                    My Clients
                  </span>

                </div>
                <Client email={this.state.email} password={this.state.password}/>
              </div>
            );
          } 
        }
      }
      
      
    export default Navbar;
        
    
