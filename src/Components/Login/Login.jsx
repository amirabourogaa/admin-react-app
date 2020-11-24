import React, { Component } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import '../Login/style.css'
import { MDBBtn } from "mdbreact";
class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: "",
        view : "main",
      }
      this.changeView = this.changeView.bind(this);
    }
  
    handleChange(e) {
      this.setState({
        [e.target.id]: e.target.value,
      });
    }
    changeView(e) {
      this.setState({ view: e.target.value });
    }
    
    render() {
      if (this.state.view === "main") {
        return (
          <div>
            <center>
              <br></br> <br></br>
              
             <div className="container">
               <div className="d-flex justify-content-center h-100">
                   <div className="card">
                       <div className="card-header">
                           <h3>Sign In</h3>
                           <div className="d-flex justify-content-end social_icon">
                               <span><i className="fab fa-facebook-square"></i></span>
                               <span><i className="fab fa-google-plus-square"></i></span>
                               <span><i className="fab fa-twitter-square"></i></span>
                           </div>
                       </div>
                       <div className="card-body">
                           <form>
                               <div className="input-group form-group">
                                   <div className="input-group-prepend">
                                       <span className="input-group-text"><i className="fas fa-user"></i></span>
                                   </div>
                               <input type="text" className="form-control" placeholder="username"/>
                                  
                               </div>
                               <div className="input-group form-group">
                                   <div className="input-group-prepend">
                                       <span className="input-group-text"><i className="fas fa-key"></i></span>
                                   </div>
                                   <input type="password" className="form-control" placeholder="password"/>
                               </div>
                          
                               <div className="form-group">
                                   <input type="submit" value="Login" className="btn float-right login_btn" onClick={this.changeView} />
                               </div>
                           </form>
                       </div>
                       <div className="card-footer">
                          
                           <div className="d-flex justify-content-center">
                               <a href="#">Forgot your password?</a>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
            </center>
          </div>
        )
      } else if (this.state.view ==="Login" ) {
        return (
          <div>
        <h1>it should be something </h1>
        </div>
        )
      }
    }
  }
      
    
  
  export default Login;
  