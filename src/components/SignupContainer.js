import React, { useState } from "react";
import AuthForm from "./AuthForm";
import { useDispatch } from "react-redux";
import { signup } from "../actions/userActions";

function SignupContainer() {
  const initialSignupUser = {
    name: "",
    password: "",
  };
  const [signupUser, setSignupUser] = useState(initialSignupUser);
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(signupUser));
    setSignupUser(initialSignupUser);
  };

  const onChange = (event) => {
    setSignupUser({ ...signupUser, [event.target.name]: event.target.value });
  };

  return (
    <div className="auth">
      <AuthForm
        onSubmit={onSubmit}
        onChange={onChange}
        values={signupUser}
        buttonName="Sign up"
      />
    </div>
  );
}

export default SignupContainer;
