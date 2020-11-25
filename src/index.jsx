import React from "react";
import ReactDOM from "react-dom";
import Login from "./Components/Login/Login.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Land from "./Components/Landing/Landingpage.jsx";
import "./Components/My Employee/App.css";
import "./Components/Profile/style.css";
import Navbar from "./Components/Navbar/Navbar.jsx";

class App extends React.Component {
render() {
return (
<div>
{localStorage.getItem("token") === null ? (
<Router>
<div>
<Land />
<Switch>
<Route path="/Login" exact component={Login} />
</Switch>
</div>
</Router>
) : (
<div>
<Navbar />
</div>
)}
</div>
);
}
}

ReactDOM.render(<App />, document.getElementById("root"));
