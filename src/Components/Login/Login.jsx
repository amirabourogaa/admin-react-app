import React, { Component } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import axios from "axios";
import Swal from "sweetalert2";
import "../Login/style.css";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      view: "main",
    };
    this.changeView = this.changeView.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }
  changeView(e) {
    this.setState({ view: e.target.value });
  }

  onSubmit(e) {
    let obj = {
      email: this.state.email,
      password: this.state.password,
    };
    if (obj.password.length < 8) {
      return Swal.fire({
        icon: "error",
        title: "Please enter a password longer than 8 characters...",
      });
    }
    axios.post("http://localhost:5500/admin/login", obj).then((res) => {
      if (res.data !== false) {
        localStorage.setItem("email", obj.email);
        localStorage.setItem("bangigkeitansscherzwort", res.data);
        window.location.reload();
      } else {
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    });
    e.preventDefault();
  }

  render() {
    if (this.state.view === "main") {
      return (
        <div>

          <center>
            <br></br> <br></br>
            <div class="login-box">
  <h2>Login</h2>
  <form>
    <div class="user-box">
      <input type="text" name="" placeholder="email"  onChange={(e) => this.setState({ email: e.target.value })}
                value={this.state.email}/>
      <label>Username</label>
    </div>
    <div class="user-box">
      <input type="password" placeholder="Password"  onChange={(e) => this.setState({ password: e.target.value })}
                value={this.state.password}/>
      <label>Password</label>
    </div>
    <a  type="button" onClick={this.onSubmit}  >
   
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Login
    </a>
  </form>
</div>
            {/* <form id="form">
              <h1>Hello Boss </h1>
              <input
                required
                type="text"
                placeholder="email"
                onChange={(e) => this.setState({ email: e.target.value })}
                value={this.state.email}
              />
              <br></br> <br></br>
              <input
                required
                type="password"
                placeholder="Password"
                onChange={(e) => this.setState({ password: e.target.value })}
                value={this.state.password}
              />
              <br></br> <br></br>
              <input type="button" value="Login" onClick={this.onSubmit} />
              <br></br> <br></br>
            </form> */}
          </center>
        </div>
      );
    } else if (this.state.view === "Login") {
      return (
        <div>
          <Navbar />
        </div>
      );
    }
  }
}

export default Login;
