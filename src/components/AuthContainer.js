import React, { Component } from "react";
import SignupContainer from "./SignupContainer";
import { connect } from "react-redux";
import LoginContainer from "./LoginContainer";

class AuthContainer extends Component {
  render() {
    if(!this.props.user.jwt){
    return (
      <div>
        <p className="error">{this.props.errors ? this.props.errors : null}</p>
        <LoginContainer />
        <SignupContainer />
      </div>
    )}else {
      return (
        <div>
          <p>Hi {this.props.user.name}</p>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  console.log("state", state.user)
  return{
    user: state.user,
    errors: state.errors
  }
}

export default connect(mapStateToProps)(AuthContainer)