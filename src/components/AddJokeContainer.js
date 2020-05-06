import React, { Component } from "react";
import { connect } from "react-redux";
import {addJoke} from "../actions/jokesActions"

import AddJokeForm from "./AddJokeForm";

class AddJokeContainer extends Component {
  state = {
    setup: "",
    punchline: "",
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addJoke(this.state);
    this.setState({ setup: "", punchline: "" });
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    if (this.props.user.jwt) {
      return (
        <div>
          <p className="error">{this.props.errors ? this.props.errors : null}</p>
          <AddJokeForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
            buttonName="Add joke"
          />
        </div>
      );
    } else {
      return null;
    }
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    errors: state.errors
  };
}

const mapDispatchToProps = { addJoke };

export default connect(mapStateToProps, mapDispatchToProps)(AddJokeContainer);
