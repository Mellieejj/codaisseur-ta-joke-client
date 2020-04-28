import React, { Component } from "react";
import AuthForm from "./AuthForm";
import { connect } from "react-redux";
import { login } from "../actions";

class SignupContainer extends Component {
  state = {
    name: "",
    password: "",
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.login(this.state);
    this.setState({ name: "", password: "" });
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
          buttonName="Login"
        />
      </div>
    );
  }
}

const mapDispatchToProps = { login };

export default connect(null, mapDispatchToProps)(SignupContainer);
