import React, { Component,Fragment } from "react";

import "../Dashboard/style.css";

import { Card } from "react-bootstrap";
import { MDBBtn } from "mdbreact";
import axios from "axios";
import Swal from "sweetalert2";

import { ActionOpacity } from "material-ui/svg-icons";



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
          setView={this.props.setView}
        />
        <div>
          <a href="/">
            <MDBBtn
              color="warning"
              onClick={() => {
                window.location.reload();
              }}
            >
              LOGOUT
            </MDBBtn>
          </a>
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
          className={this.state.overview}

          href=""
          onClick={() => this.setBtnAndView("overview")}>

          {this.props.item1}
        </a>
        <a
          className={this.state.schedule}
          href="#"
          onClick={() => this.setBtnAndView("schedule")}
        >
          {this.props.item2}
        </a>
        <a
          className={this.state.performance}
          href="#"
          onClick={() => this.setBtnAndView("performance")}
        >
          {this.props.item3}
        </a>
      </div>
    );
  }
}

class Overview extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="dash-view">
        <center>

          
          <div  style = {{height : '600px' , backgroundColor :'rgba(0, 0, 0, 0.85)' , opacity:'0.4px' , width : '400px' }}>
            <>
              <Card.Title>
              <h3 className="view-heading" style = {{color :'#20B2AA'}}>Add Client</h3>
              </Card.Title>
              <form>
            
            <br></br>
            <input type="text" placeholder="FirstName" required />
            <br></br>
            <br></br>
            <input type="text" placeholder="LastName" required />
            <br></br>
            <br></br>
            <input type="text" placeholder="email" required />
            <br></br>
            <br></br>
            <input type="password" placeholder="Password" required />
            <br></br>
            <br></br>
            <input type="text" placeholder="PhoneNumber" required />
            <br></br>
            <br></br>
            <MDBBtn rounded color="warning">Add</MDBBtn>

           
           
          </form>
            </>
          </div>

          

        </center>
        <DashboardCard />
      </div>
    );
  }
}

class ScheduleView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="dash-view">
        <center>

        <Card style = {{height : '600px' , backgroundColor :'rgba(0, 0, 0, 0.85)' , opacity:'0.4px' , width : '400px' }}>
            <Card.ImgOverlay>
              <Card.Title>
              <h2 className="view-heading" style = {{color :'#20B2AA'}}>Add Employee</h2>
              </Card.Title>
              <form>
              
          <br></br>
          <input type="text" placeholder="FirstName" required />
          <br></br>
          <br></br>
          <input type="text" placeholder="LastName" required />
          <br></br>
          <br></br>
          <input type="text" placeholder="email" required />
          <br></br>
          <br></br>
          <input type="password" placeholder="Password" required />
          <br></br>
          <br></br>
          <input type="text" placeholder="PhoneNumber" required />
          <br></br>
          <br></br>

          <MDBBtn color="warning">Add</MDBBtn>
 
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
  }
  render() {
    return (
      <div className="dash-view">

           <center>
        <Card style = {{height : '600px' , backgroundColor :'rgba(0, 0, 0, 0.85)' , opacity:'0.4px' , width : '400px' }}>
            <Card.ImgOverlay>
              <Card.Title>
              <h2 className="view-heading" style = {{color :'#20B2AA'}}>Edit Profile</h2>
              </Card.Title>
              <form>
              
          <br></br>
          <input type="text" placeholder="email" required />
        <br></br>
        <br></br>
        <input type="password" placeholder="Password" required />
        <br></br>
        <br></br>
        <input type="password" placeholder="NewPassword" required />
        <br></br>
        <br></br>
        <input type="password" placeholder="NewPassword" required />
        <br></br>
        <br></br>
       
       <br></br>
          <br></br>

          <MDBBtn color="warning">Edit</MDBBtn>
 
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

        class AdministratorView extends React.Component {
            constructor(props) {
                super(props);
            }
            render() {
                return (
                    <div className="dash-view">
                       <h2 className="view-heading">Add Admin</h2>
                        <input type="text" placeholder="email" required/><br></br><br></br>
                        <input type="password" placeholder="Password" required/><br></br><br></br>
                        <DashboardCard />
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
