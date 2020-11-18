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
        <h1>Add Admin</h1> 
             <input type="text" placeholder="email" required/><br></br><br></br>
                        <input type="password" placeholder="Password" required/><br></br><br></br>

                        <input type="button" value="Add"/>
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