import React, { useState } from "react";
import AuthForm from "./AuthForm";
import { useDispatch } from "react-redux";
import { login } from "../actions/userActions";

function SignupContainer() {
  const initialUser = {
    name: "",
    password: "",
  };

  const [user, setUser] = useState(initialUser);
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(login(user));
    setUser(initialUser);
  };

  const onChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <div className="auth">
      <AuthForm
        onSubmit={onSubmit}
        onChange={onChange}
        values={user}
        buttonName="Login"
      />
    </div>
  );
}

export default SignupContainer;
