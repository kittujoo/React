import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogedIn: true
    };
  }
  render() {
    return this.state.isLogedIn && <div>Welcome to VueData as Employee</div>;

    // return this.state.isLogedIn ?
    //   <div>Welcome to VueData as Employee</div> :
    //   <div>Welcome to VueData as Guest</div>

    // let message
    // if(this.state.isLogedIn){
    //   message = <div>Welcome to VueData as Employee</div>;
    // } else {
    //   message = <div>Welcome to VueData as Guest</div>;
    // }
    // return <div>{message}</div>;

    // if(this.state.isLogedIn){
    //   return <div>Welcome to VueData as Employee</div>;
    // } else {
    //   return <div>Welcome to VueData as Guest</div>;
    // }

    // return <div>Welcome to VueData as Guest</div>;
  }
}

export default UserGreeting;
