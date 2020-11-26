import React, { Component } from "react";

import "../Dashboard/style.css";

import { Card } from "react-bootstrap";
import { MDBBtn } from "mdbreact";
import axios from "axios";
import Swal from "sweetalert2";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "overview",
      username: "",
      usertitle: "",
    };
    this.setView = this.setView.bind(this);
    this.currentView = this.currentView.bind(this);
    this.profile = this.profile.bind(this);
  }

  setView(view) {
    this.setState({ view: view });
  }
  currentView(view) {
    this.setState({ view: view });
  }
  profile(e) {
    e.preventDefault();
    this.setState({
      check: "profile",
    });
  }

  handleImage = (profileImage) => {
    this.setState({
      profileImage,
    });
  };

  render() {
    switch (this.state.view) {
      case "overview":
        return (
          <div id="dashboard">
            <Sidebar setView={this.setView} />
            <Overview />
          </div>
        );
      case "schedule":
        return (
          <div id="dashboard">
            <Sidebar setView={this.setView} />
            <ScheduleView />
          </div>
        );
      case "performance":
        return (
          <div id="dashboard">
            <Sidebar setView={this.setView} />
            <PerformanceView />
          </div>
        );
      case "administrator":
        return (
          <div id="dashboard">
            <Sidebar setView={this.setView} />
            <AdministratorView />
          </div>
        );
    }
  }
}

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }
  setView(view) {
    this.props.setView(view);
    console.log("level 2 " + view);
  }
  render() {
    return (
      <div className="sidebar-menu">
        <UserProfileView />
        <SidebarMenu
          item1={"Add Client"}
          item2={"Add Employee"}
          item3={"Update Profile"}
          item4={"Add Admin"}
          setView={this.props.setView}
        />
        <div>
          <MDBBtn
            color="warning"
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
          >
            LOGOUT
          </MDBBtn>
        </div>
      </div>
    );
  }
}

class UserProfileView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="user-profile">
        <h3 id="display-name">{this.props.username}</h3>
        <p className="subtitle">{this.props.usertitle}</p>
      </div>
    );
  }
}

class SidebarMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overview: "active-item",
      schedule: "inactive-item",
      performance: "inactive-item",
      administrator: "inactive-item",
    };
    this.setBtnAndView = this.setBtnAndView.bind(this);
  }

  setBtnAndView(view) {
    this.props.setView(view);
    if (view === "overview") {
      this.setState({
        overview: "active-item",
        schedule: "inactive-item",
        performance: "inactive-item",
        administrator: "inactive-item",
      });
    } else if (view === "schedule") {
      this.setState({
        overview: "inactive-item",
        schedule: "active-item",
        performance: "inactive-item",
        administrator: "inactive-item",
      });
    } else if (view === "performance") {
      this.setState({
        overview: "inactive-item",
        schedule: "inactive-item",
        performance: "active-item",
        administrator: "inactive-item",
      });
    } else if (view === "administrator") {
      this.setState({
        overview: "inactive-item",
        schedule: "inactive-item",
        performance: "inactive-item",
        administrator: "active-item",
      });
    }
  }

  render() {
    return (
      <div className="menu-items">
        <a
          style={{ color: "white" }}
          className={this.state.overview}
          onClick={() => this.setBtnAndView("overview")}
        >
          {this.props.item1}
        </a>
        <a
          style={{ color: "white" }}
          className={this.state.schedule}
          onClick={() => this.setBtnAndView("schedule")}
        >
          {this.props.item2}
        </a>
        <a
          style={{ color: "white" }}
          className={this.state.performance}
          onClick={() => this.setBtnAndView("performance")}
        >
          {this.props.item3}
        </a>
        <a
          style={{ color: "white" }}
          className={this.state.administrator}
          onClick={() => this.setBtnAndView("administrator")}
        >
          {this.props.item4}
        </a>
      </div>
    );
  }
}

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", password: "", phoneNumber: "" };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    if (this.state.name === "") {
      return;
    }
    axios
      .post("http://localhost:5500/Client/register", this.state)
      .then((res) => {
        if (res.data === "") {
          Swal.fire({
            title: "a user with the same email already exists",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });

          setTimeout(() => {
            window.location.reload();
          }, 2500);
        } else {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "user was successfully registered",
            showConfirmButton: false,
            timer: 1500,
          });
          setTimeout(() => {
            window.location.reload();
          }, 1600);
        }
      });
    e.preventDefault();
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    return (
      <div className="dash-view">
        <center>
          <Card className="bg-dark text-white" style={{ height: "600px" }}>
            <Card.ImgOverlay>
              <Card.Title>
                <h2 className="view-heading" style={{ color: "gold" }}>
                  Add Client
                </h2>
              </Card.Title>
              <form>
                <br></br>
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  onChange={this.onChange}
                  required
                />{" "}
                <br></br>
                <br></br>
                <input
                  type="email"
                  placeholder="email"
                  required
                  name="email"
                  onChange={this.onChange}
                />{" "}
                <br></br>
                <br></br>
                <input
                  type="password"
                  placeholder="Password"
                  required
                  name="password"
                  onChange={this.onChange}
                />{" "}
                <br></br>
                <br></br>
                <input
                  onChange={this.onChange}
                  type="number"
                  placeholder="PhoneNumber"
                  required
                  name="phoneNumber"
                />{" "}
                <br></br>
                <br></br>
                <MDBBtn color="warning" type="submit" onClick={this.onSubmit}>
                  Add
                </MDBBtn>
              </form>
            </Card.ImgOverlay>
          </Card>
        </center>
        <DashboardCard />
      </div>
    );
  }
}

class ScheduleView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      phoneNumber: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    axios
      .post("http://localhost:5500/employee/register", this.state)
      .then((res) => {
        if (res.data === "") {
          Swal.fire({
            title: "a user with the same email already exists",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
          setTimeout(() => {
            window.location.reload();
          }, 2500);
        } else {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "user was successfully registered",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        setTimeout(() => {
          window.location.reload();
        }, 2500);
      });
  }
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    return (
      <div className="dash-view">
        <center>
          <Card className="bg-dark text-white" style={{ height: "600px" }}>
            <Card.ImgOverlay>
              <Card.Title>
                <h2 className="view-heading" style={{ color: "gold" }}>
                  Add Employee
                </h2>
              </Card.Title>
              <form>
                <br></br>
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  onChange={this.onChange}
                  required
                />{" "}
                <br></br>
                <br></br>
                <input
                  type="text"
                  placeholder="email"
                  required
                  name="email"
                  onChange={this.onChange}
                />{" "}
                <br></br>
                <br></br>
                <input
                  type="password"
                  placeholder="Password"
                  required
                  name="password"
                  onChange={this.onChange}
                />{" "}
                <br></br>
                <br></br>
                <input
                  onChange={this.onChange}
                  type="text"
                  placeholder="PhoneNumber"
                  required
                  name="phoneNumber"
                />{" "}
                <br></br>
                <br></br>
                <MDBBtn color="warning" type="submit" onClick={this.onSubmit}>
                  Add
                </MDBBtn>
                <br></br>
                <br></br>
                <br></br>
              </form>
            </Card.ImgOverlay>
          </Card>
        </center>
        <DashboardCard />
      </div>
    );
  }
}

class PerformanceView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      newPassword: "",
      newPassword1: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    let email = localStorage.getItem("email");
    this.state.email = email;
    if (this.state.newPassword !== this.state.newPassword1) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: " Passwords must be equal!",
      });
      setTimeout(() => {
        window.location.reload();
      }, 2500);
    }
    axios
      .put(`http://localhost:5500/admin/${email}`, this.state)
      .then((res) => {
        if (res.data === "") {
          Swal.fire({
            icon: "error",
            text: "can't update wrong!",
            footer: "<a href>Why do I have this issue?</a>",
          });
          setTimeout(() => {
            window.location.reload();
          }, 2500);
        } else {
          let timerInterval;
          Swal.fire({
            title: "updated!",
            html: "I will close in <b></b> milliseconds.",
            timer: 2000,
            timerProgressBar: true,
            willOpen: () => {
              Swal.showLoading();
              timerInterval = setInterval(() => {
                const content = Swal.getContent();
                if (content) {
                  const b = content.querySelector("b");
                  if (b) {
                    b.textContent = Swal.getTimerLeft();
                  }
                }
              }, 100);
            },
            willClose: () => {
              clearInterval(timerInterval);
            },
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              setTimeout(() => {
                window.location.reload();
              }, 2500);
            }
          });
        }
        console.log(res);
      });
  }
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    return (
      <div className="dash-view">
        <center>
          <Card className="bg-dark text-white" style={{ height: "600px" }}>
            <Card.ImgOverlay>
              <Card.Title>
                <h2 className="view-heading" style={{ color: "gold" }}>
                  Edit Profile
                </h2>
              </Card.Title>
              <form>
                <input
                  type="password"
                  placeholder="Password"
                  required
                  name="password"
                  onChange={this.onChange}
                />{" "}
                <br></br>
                <br></br>
                <input
                  type="password"
                  placeholder="NewPassword"
                  required
                  name="newPassword"
                  onChange={this.onChange}
                />{" "}
                <br></br>
                <br></br>
                <input
                  type="password"
                  placeholder="NewPassword"
                  name="newPassword1"
                  required
                  onChange={this.onChange}
                />{" "}
                <br></br>
                <br></br>
                <MDBBtn color="warning" type="submit" onClick={this.onSubmit}>
                  Add
                </MDBBtn>
                <br></br>
              </form>
            </Card.ImgOverlay>
          </Card>
        </center>
        <DashboardCard />
      </div>
    );
  }
}
class AdministratorView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    axios.post("http://localhost:5500/test/t", this.state).then((res) => {
      console.log(res.data);
    });
  }
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    return (
      <div className="dash-view">
        <center>
          <Card className="bg-dark text-white" style={{ height: "600px" }}>
            <Card.ImgOverlay>
              <h2 className="view-heading" style={{ color: "gold" }}>
                Add Admin
              </h2>
              <input
                type="text"
                placeholder="email"
                required
                name="email"
                onChange={this.onChange}
              />{" "}
              <br></br>
              <br></br>
              <MDBBtn color="warning" type="submit" onClick={this.onSubmit}>
                Add
              </MDBBtn>
              <DashboardCard />
            </Card.ImgOverlay>
          </Card>
        </center>
      </div>
    );
  }
}
var currentView = "overview";

class DashboardCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    switch (currentView) {
      case "overview":
        return (
          <div className="dash-card">
            <OverviewCardContent />
          </div>
        );
      case "schedule":
        return (
          <div className="dash-card">
            <ScheduleCardContent />
          </div>
        );
      case "performance":
        return (
          <div className="dash-card">
            <PerformanceCardContent />
          </div>
        );
      case "administrator":
        return (
          <div className="dash-card">
            <AdministratorCardContent />
          </div>
        );
    }
  }
}

const OverviewCardContent = () => <div></div>;
const ScheduleCardContent = () => <div></div>;
const PerformanceCardContent = () => <div></div>;
const AdministratorCardContent = () => <div></div>;

export default Dashboard;
