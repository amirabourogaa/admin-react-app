import React from "react";
import ReactDOM from "react-dom";
import Login from "./Components/Login/Login.jsx";
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import Land from "./Components/Landing/Landingpage.jsx";
import './Components/My Employee/App.css';
import './Components/Profile/style.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

class App extends React.Component {
    render(){
        return (
            <div>
        <Router>
        <div>
            <Land /> 
            <Switch>
                <Route path='/Login' exact component={Login}/>
            </Switch>
        </div>
    </Router>
    </div>
        )
    }
}

ReactDOM.render (
    <App/>,
    document.getElementById("root")
)