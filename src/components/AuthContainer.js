import React from "react";
import SignupContainer from "./SignupContainer";
import LoginContainer from "./LoginContainer";
import { useSelector } from "react-redux";

function AuthContainer() {
  const user = useSelector((state) => state.user);
  const errors = useSelector((state) => state.errors);

  // console.log("user", user);

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

// function mapStateToProps(state) {
//   console.log("state", state.user);
//   return {
//     user: state.user,
//     errors: state.errors,
//   };
// }

// export default connect(mapStateToProps)(AuthContainer);
export default AuthContainer;
