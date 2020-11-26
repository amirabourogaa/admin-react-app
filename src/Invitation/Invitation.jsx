import React, { Component } from "react";
import axios from "axios";

class Invitation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hashed: "",
      name: "",
      email: "",
      password: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    axios
      .put("http://localhost:5500/admin/register/invitation/singup", this.state)
      .then((res) => {
        window.location.href = "/";
      });
    e.preventDefault();
  }

  render() {
    if (this.state.hashed === "") {
      this.setState({
        hashed: this.props.location.pathname.slice(
          18,
          this.props.location.pathname.length
        ),
      });
    }
    return (
      <div>
        <center>
          <br></br> <br></br>
          <form id="form">
            <h1>Welcome New Admin </h1>
            <br></br>
            <input
              required
              type="text"
              placeholder="unsername"
              onChange={(e) => this.setState({ name: e.target.value })}
              value={this.state.unsername}
            />
            <br></br>
            <br></br>
            <input
              required
              type="text"
              placeholder="email"
              onChange={(e) => this.setState({ email: e.target.value })}
              value={this.state.email}
            />
            <br></br>
            <br></br>
            <input
              required
              type="password"
              placeholder="Password"
              onChange={(e) => this.setState({ password: e.target.value })}
              value={this.state.password}
            />
            <br></br>
            <br></br>
            <button type="submit" value="Login" onClick={this.onSubmit}>
              Submit
            </button>
            <br></br> <br></br>
          </form>
        </center>
      </div>
    );
  }
}

export default Invitation;
