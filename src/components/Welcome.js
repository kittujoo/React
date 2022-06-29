import React, { Component } from "react";

// class Welcome extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Welcome to {this.props.companyName} {this.props.branch}</h1>
//       </div>
//     );
//   }
// }

// export default Welcome;

class Welcome extends Component {
  render() {
    const { companyName, branch } = this.props;
    // const {state1,state2} = this.props;
    return (
      <div>
        <h1>
          Welcome to {companyName} {branch}
        </h1>
      </div>
    );
  }
}

export default Welcome;
