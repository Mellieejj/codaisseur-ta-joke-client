import React from "react";
import SignupContainer from "./SignupContainer";
import LoginContainer from "./LoginContainer";
import { useSelector } from "react-redux";

function AuthContainer() {
  const user = useSelector((state) => state.user);
  const errors = useSelector((state) => state.errors);

  if (!user.jwt) {
    return (
      <div>
        <p className="error">{errors ? errors : null}</p>
        <LoginContainer />
        <SignupContainer />
      </div>
    );
  } else {
    return (
      <div>
        <p>Hi {user.name}</p>
      </div>
    );
  }
}

export default AuthContainer;
