import React, { Component } from "react";
import { FcSmartphoneTablet } from "react-icons/fc";
import "bootswatch/dist/lux/bootstrap.min.css";
import { RiLogoutCircleFill } from 'react-icons/ri';
import { Link } from "react-router-dom";
import "../Navbar/style.css";
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
        <nav style={{backgroundColor:'rgba(0, 0, 0, 0.85)'}}className="navbar navbar-expand-lg ">
          <div className="collapse navbar-collapse" >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link style={{color:'white'}}to="/">
                  My Dashboard
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              
              <li className="nav-item">
                <Link style={{color:'white'}} to="/employees">My Employee</Link>
              </li>
              <li className="nav-item">
                <Link style={{color:'white'}} to="/clients">My Clients</Link>
              </li>
              <li className="nav-item">
                <Link style={{color:'white'}} to="/chat">My Calendar</Link>
              </li>

              <li className="nav-item">
                <Link style={{color:'white'}} to="/tasks"> Tasks</Link>
              </li>
              
              <li
                
               
              >
                <a  onClick={() => {
                  localStorage.clear();
                  window.location.reload();
                }}
                style={{width:'120px',height:'40px',fontSize:'16px',marginTop:'0px',marginLeft:'350px'}} 
                class="button b-blue">{" "}
                  <RiLogoutCircleFill />
                  Logout
                </a>
                
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
