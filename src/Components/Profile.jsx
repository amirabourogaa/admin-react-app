import React, { Component } from "react";

class Profile extends Component {
    constructor(props) {
    super(props);
    this.state = {
        data : [],
        email : "",
        password : "",
        view : "",

    }
    }
     render(){
         if(this.state.view===""){
    return (
        <div>
        <h1>Welcome Boss</h1> 

        <button value="update">Update Profile</button>
        </div>
    )} else if(this.state.view==="update"){
        return (
            <div>
                
            </div>
        )
    }
}
}
export default  Profile;