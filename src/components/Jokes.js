import React, { Component } from "react";

export default class Jokes extends Component {
  state = {
    timeout: false,
    jokes: [
      {
        id: 28,
        type: "programming",
        setup: "To understand what recursion is...",
        punchline: "You must first understand what recursion is",
      },
      {
        id: 379,
        type: "programming",
        setup:
          "A programmer puts two glasses on his bedside table before going to sleep.",
        punchline:
          "A full one, in case he gets thirsty, and an empty one, in case he doesn’t.",
      },
      {
        id: 385,
        type: "programming",
        setup: "3 SQL statements walk into a NoSQL bar. Soon, they walk out",
        punchline: "They couldn't find a table.",
      },
      {
        id: 74,
        type: "programming",
        setup: "Why do C# and Java developers keep breaking their keyboards?",
        punchline: "Because they use a strongly typed language.",
      },
      {
        id: 15,
        type: "programming",
        setup: "What's the best thing about a Boolean?",
        punchline: "Even if you're wrong, you're only off by a bit.",
      },
      {
        id: 380,
        type: "programming",
        setup: "There are 10 kinds of people in this world.",
        punchline:
          "Those who understand binary, those who don't, and those who weren't expecting a base 3 joke.",
      },
      {
        id: 23,
        type: "programming",
        setup: "Why do programmers always mix up Halloween and Christmas?",
        punchline: "Because Oct 31 == Dec 25",
      },
      {
        id: 24,
        type: "programming",
        setup:
          "A SQL query walks into a bar, walks up to two tables and asks...",
        punchline: "'Can I join you?'",
      },
      {
        id: 35,
        type: "programming",
        setup: "Why do Java programmers wear glasses?",
        punchline: "Because they don't C#",
      },
      {
        id: 378,
        type: "programming",
        setup: "What's the best part about TCP jokes?",
        punchline: "I get to keep telling them until you get them.",
      },
    ],
    currentJoke: null,
  };

  componentDidMount() {
    const random = Math.floor(Math.random() * (9 - 0 + 1) + 0);
    const randomJoke = this.state.jokes[random];

    this.setState({ ...this.state, currentJoke: randomJoke });

    setTimeout(() => {
      this.setState({ ...this.state, timeout: true });
    }, 3000);
  }

  render() {
    console.log(this.state);

    return (
      <div className="Joke">
          {" "}
          <p>
            {this.state.currentJoke
              ? this.state.currentJoke.setup
              : "Loading.... "}
          </p>
          <p>
            {this.state.timeout ? this.state.currentJoke.punchline : null}
          </p>
      </div>
    );
  }
}
