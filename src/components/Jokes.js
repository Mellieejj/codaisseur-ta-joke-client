import React, { Component } from "react";
import { getJoke } from "../actions";
import { connect } from "react-redux";
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, RedditShareButton, RedditIcon, LinkedinShareButton, LinkedinIcon } from "react-share";

class Jokes extends Component {
  state = {
    timeout: false,

    currentJoke: null,
  };

  componentDidMount() {
    this.props.getJoke();

    setTimeout(() => {
      this.setState({ ...this.state, timeout: true });
    }, 3000);
  }

  render() {
    const { joke } = this.props;
    const toShareJoke = joke
      ? joke[0].setup + " " + joke[0].punchline
      : null;

    const shareButtons = <div>
      <FacebookShareButton children="Programming Jokes" url="https://www.haakdraak.nl" quote={toShareJoke}>
    <FacebookIcon round="true" size="2.5rem"/>
    </FacebookShareButton>
    
    <TwitterShareButton url="https://www.haakdraak.nl" children="Programming Jokes" title={toShareJoke}>
    <TwitterIcon round="true" size="2.5rem" />
    </TwitterShareButton>

    <RedditShareButton url="https://www.haakdraak.nl" children="Programming Jokes" title={toShareJoke}>
      <RedditIcon round="true" size="2.5rem" />
    </RedditShareButton>

    <LinkedinShareButton url="https://www.haakdraak.nl" children="Programming Jokes" summary={toShareJoke}>
      <LinkedinIcon round="true" size="2.5rem" />
    </LinkedinShareButton>
    </div>


    return (
      <>
      <div className="Joke">
        <p>{joke ? joke[0].setup : "Loading a joke for you.... "}</p>
        <p>{this.state.timeout ? joke[0].punchline : null}</p>
      </div>
      {shareButtons}
    </>
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
