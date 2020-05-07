import React from "react";
import AuthContainer from "../Auth/AuthContainer";
import AddJokeContainer from "../AddJoke/AddJokeContainer";
import "./NavBar.scss"

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
