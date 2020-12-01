import React from "react";
import ReactDOM from "react-dom";
import Login from "./Components/Login/Login.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Land from "./Components/Landing/Landingpage.jsx";

import "./Components/My Employee/App.css";
import "./Components/Profile/style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Messageform from "./Components/Message/Messageform";
import Dashboard from "./Components/Dashboard/Dashboard";
import Profile from "./Components/Profile/Profile";
import Employee from "./Components/My Employee/Employee";
import Navbar from "./Components/Navbar/Navbar";
import Client from "./Components/Client/Client";
import Chat from "./Components/Calendar/Chat";
import Task from "./Components/Tasks/task";
import "bootswatch/dist/lux/bootstrap.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "antd/dist/antd.css";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImage: "",
    };
  }
  handleImage = (profileImage) => {
    this.setState({
      profileImage,
    });
  };


  render() {
    return (
      <div>

        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route path="/Login" exact component={Login} />
              <Route path="/" exact component={Land} />
              <Route path="/dashboard" component={Dashboard}></Route>
              <Route path="/messages" component={Messageform}></Route>
              <Route path="/clients" component={Client}></Route>
              <Route path="/employees" component={Employee}></Route>
              <Route path="/profile" component={Profile}></Route>
              <Route path="/chat" component={Chat}></Route>
              <Route path="/tasks" component={Task}></Route>
            </Switch>

          </div>
        </Router>
      </div>
    );
  }

}

ReactDOM.render(<App />, document.getElementById("root"));
