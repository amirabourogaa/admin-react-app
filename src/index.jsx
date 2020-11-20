import React from "react";
import ReactDOM from "react-dom";
import Login from "./Components/Login/Login.jsx";
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import Land from "./Components/Landing/Landingpage.jsx";
import Board from "./Components/Profile/Board.jsx";
class App extends React.Component {
    render(){
        return (
            <div>
        <Router>
        <div>
            <Land /> 
            <Switch>
                <Route path='/Login' exact component={Login}/>
                 <Route path ='/Board' exact component={Board}/>
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