import React, { Component } from "react";

export default class AuthForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input
        className="form-control form-control-lg custom-form"
          type="text"
          placeholder="Name"
          name="name"
          value={this.props.values.name}
          onChange={this.props.onChange}
        />
        <input
        className="form-control form-control-lg custom-form"
          type="password"
          placeholder="Password"
          name="password"
          value={this.props.values.password}
          onChange={this.props.onChange}
        />

        <button className="btn btn-outline-default btn-lg btn-dark" type="submit">{this.props.buttonName}</button>
      </form>
    );
  }
}
