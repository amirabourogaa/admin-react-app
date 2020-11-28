import React, { Component } from "react";
import { FcSmartphoneTablet } from "react-icons/fc";
import "bootswatch/dist/lux/bootstrap.min.css";

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
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/">
                  My Dashboard
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/messages">My messages</Link>
              </li>
              <li className="nav-item">
                <Link to="/employees">My Employee</Link>
              </li>
              <li className="nav-item">
                <Link to="/clients">My Clients</Link>
              </li>
              <li className="nav-item">
                <Link to="/chat">My Calendar</Link>
              </li>

              <li className="nav-item">
                <Link to="/tasks">Give Tasks</Link>
              </li>
              <li
                id="logout"
                onClick={() => {
                  localStorage.clear();
                  window.location.reload();
                }}
              >
                Logout
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
