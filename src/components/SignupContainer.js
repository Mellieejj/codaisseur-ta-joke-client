import React, { Component } from "react";
import AuthForm from "./AuthForm";
import { connect } from "react-redux";
import { signup } from "../actions";

class SignupContainer extends Component {
  state = {
    name: "",
    password: "",
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.signup(this.state);
    this.setState({ name: "", password: "" });
    console.log("Submit");
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
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

const mapDispatchToProps = { signup };

export default connect(null, mapDispatchToProps)(SignupContainer);
