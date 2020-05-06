import React from "react";
import AuthContainer from "./AuthContainer";
import AddJokeContainer from "./AddJokeContainer";

function NavBar () {
  return (
    <div className="navbar">
      <div className="title">Programming Jokes</div>
      <div>
        <AuthContainer />
      </div>
      <div>
        <AddJokeContainer />
      </div>
    </div>
  );
};

export default NavBar;
