import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

export default function ShareButtons(props) {
  const { joke } = props;
  const toShareJoke = joke ? joke[0].setup + " " + joke[0].punchline : null;
  return (
    <div>
      <FacebookShareButton
        children="Programming Jokes"
        url="https://peaceful-shirley-defe62.netlify.app/"
        quote={toShareJoke}
      >
        <FacebookIcon round="true" size="2.5rem" />
      </FacebookShareButton>

      <TwitterShareButton
        url="https://peaceful-shirley-defe62.netlify.app/"
        children="Programming Jokes"
        title={toShareJoke}
      >
        <TwitterIcon round="true" size="2.5rem" />
      </TwitterShareButton>

      <RedditShareButton
        url="https://peaceful-shirley-defe62.netlify.app/"
        children="Programming Jokes"
        title={toShareJoke}
      >
        <RedditIcon round="true" size="2.5rem" />
      </RedditShareButton>

      <LinkedinShareButton
        url="https://peaceful-shirley-defe62.netlify.app/"
        children="Programming Jokes"
        summary={toShareJoke}
      >
        <LinkedinIcon round="true" size="2.5rem" />
      </LinkedinShareButton>
    </div>
  );
}
