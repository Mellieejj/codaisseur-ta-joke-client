import React, { Component } from "react";
import { getJoke } from "../actions/jokesActions";
import { connect } from "react-redux";
import ShareButtons from "./ShareButtons";

class Jokes extends Component {
  state = {
    timeout: false,
    // currentJoke: null,
  };

  componentDidMount() {
    this.props.getJoke();

    setTimeout(() => {
      this.setState({ ...this.state, timeout: true });
    }, 3000);
  }

  render() {
    const { joke } = this.props;
    return (
      <div className="Joke">
        <div >
          <p>{joke ? joke[0].setup : "Loading a joke for you.... "}</p>
          <p>{this.state.timeout ? joke[0].punchline : null}</p>
        </div>
        <ShareButtons joke={this.props.joke} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("state", state.joke);

  return {
    joke: state.joke,
  };
}

const mapDispatchToProps = { getJoke };

export default connect(mapStateToProps, mapDispatchToProps)(Jokes);
