import React, { Component } from "react";
import AuthForm from "./AuthForm";
import { connect } from "react-redux";

class SignupContainer extends Component {
  state = {
    name: "",
    password: "",
  };

  onSubmit = (event) => {
    event.preventDefault();
    console.log("Submit");
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <AuthForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
          buttonName="Sign up"
        />
      </div>
    );
  }
}

export default connect()(SignupContainer);
