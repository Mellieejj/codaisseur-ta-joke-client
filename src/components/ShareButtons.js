import React, { Component } from "react";
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, RedditShareButton, RedditIcon, LinkedinShareButton, LinkedinIcon } from "react-share";

export default class ShareButtons extends Component {
  render() {
    const { joke } = this.props;
    const toShareJoke = joke ? joke[0].setup + " " + joke[0].punchline : null;
    return(
    <div>
      <FacebookShareButton
        children="Programming Jokes"
        url="https://www.haakdraak.nl"
        quote={toShareJoke}
      >
        <FacebookIcon round="true" size="2.5rem" />
      </FacebookShareButton>

      <TwitterShareButton
        url="https://www.haakdraak.nl"
        children="Programming Jokes"
        title={toShareJoke}
      >
        <TwitterIcon round="true" size="2.5rem" />
      </TwitterShareButton>

      <RedditShareButton
        url="https://www.haakdraak.nl"
        children="Programming Jokes"
        title={toShareJoke}
      >
        <RedditIcon round="true" size="2.5rem" />
      </RedditShareButton>

      <LinkedinShareButton
        url="https://www.haakdraak.nl"
        children="Programming Jokes"
        summary={toShareJoke}
      >
        <LinkedinIcon round="true" size="2.5rem" />
      </LinkedinShareButton>
    </div>)
  }
}
