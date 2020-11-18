import React, { Component } from "react";

class Profile extends Component {
    constructor(props) {
    super(props);
    this.state = {
        data : [],
        email : "",
        password : "",

    }
    }
     render(){
    return (
        <div>
        <h1>Welcome Boss</h1> 
        <button>Update Profile</button>
        </div>
    )
}
}
export default  Profile;