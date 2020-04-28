import React, { Component } from "react";

export default class AuthForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={this.props.values.name}
          onChange={this.props.onChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={this.props.values.password}
          onChange={this.props.onChange}
        />

        <button type="submit">{this.props.buttonName}</button>
      </form>
    );
  }
}
