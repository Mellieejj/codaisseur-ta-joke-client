import React from "react";

export default function AddJokeForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        className="form-control form-control-lg custom-form"
        type="text"
        placeholder="Setup of the joke"
        name="setup"
        value={props.values.setup}
        onChange={props.onChange}
      />
      <input
        className="form-control form-control-lg custom-form"
        type="text"
        placeholder="Punchline of the joke"
        name="punchline"
        value={props.values.punchline}
        onChange={props.onChange}
      />

      <button className="btn btn-outline-default btn-lg btn-dark" type="submit">
        {props.buttonName}
      </button>
    </form>
  );
}
