import React, { Component } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import '../Login/style.css';
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
          <div id="LoginForm">
            <center>
              <br></br> <br></br>
                    <div class="container">
               <div class="d-flex justify-content-center h-100">
                   <div class="card">
                       <div class="card-header">
                           <h3>Sign In</h3>
                           <div class="d-flex justify-content-end social_icon">
                               <span><i class="fab fa-facebook-square"></i></span>
                               <span><i class="fab fa-google-plus-square"></i></span>
                               <span><i class="fab fa-twitter-square"></i></span>
                           </div>
                       </div>
                       <div class="card-body">
                           <form>
                               <div class="input-group form-group">
                                   <div class="input-group-prepend">
                                       <span class="input-group-text"><i class="fas fa-user"></i></span>
                                   </div>
                               <input type="text" class="form-control" placeholder="username"/>
                                  
                               </div>
                               <div class="input-group form-group">
                                   <div class="input-group-prepend">
                                       <span class="input-group-text"><i class="fas fa-key"></i></span>
                                   </div>
                                   <input type="password" class="form-control" placeholder="password"/>
                               </div>
                          
                               <div class="form-group">
                                   <input type="submit" value="Login" />
                               </div>
                           </form>
                       </div>
                       <div class="card-footer">
                          
                           <div class="d-flex justify-content-center">
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
        <Navbar/>
        
       
        </div>
        )
      }
    }
  }
      
    
  
  export default Login;
  
        