import React from "react";
import ReactDOM from "react-dom";
import Login from "./Components/Login/Login.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Land from "./Components/Landing/Landingpage.jsx";

import "./Components/My Employee/App.css";
import "./Components/Profile/style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
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
import Invitation from "./Invitation/Invitation.jsx";


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
        {localStorage.getItem("bangigkeitansscherzwort") !== null ? (
          <Router>
            <div>
              <Navbar />
              <Switch>
                <Route path="/" exact component={Dashboard}></Route>
                <Route path="/Login" exact exact component={Login} />
                <Route path="/Land" exact exact component={Land} />
                <Route path="/clients" exact component={Client}></Route>
                <Route path="/employees" exact component={Employee}></Route>
                <Route path="/profile" exact component={Profile}></Route>
                <Route path="/chat" exact component={Chat}></Route>
                <Route path="/tasks" exact component={Task}></Route>
                <Route
                  path="/invitation/admin/*"
                  component={Invitation}
                ></Route>
              </Switch>
            </div>
          </Router>
        ) : (
          <Router>
            <Switch>
              <Route path="/" exact exact component={Land} />
              <Route path="/invitation/admin/*" component={Invitation}></Route>
            </Switch>
          </Router>
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
