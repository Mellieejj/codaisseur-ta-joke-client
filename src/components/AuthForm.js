import React from "react";

export default function AuthForm (props) {
    return (
      <form onSubmit={props.onSubmit}>
        <input
        className="form-control form-control-lg custom-form"
          type="text"
          placeholder="Name"
          name="name"
          value={props.values.name}
          onChange={props.onChange}
        />
        <input
        className="form-control form-control-lg custom-form"
          type="password"
          placeholder="Password"
          name="password"
          value={props.values.password}
          onChange={props.onChange}
        />

        <button className="btn btn-outline-default btn-lg btn-dark" type="submit">{props.buttonName}</button>
      </form>
    );
  }

