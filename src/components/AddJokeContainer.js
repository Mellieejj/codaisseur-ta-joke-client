import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addJoke } from "../actions/jokesActions";

import AddJokeForm from "./AddJokeForm";

function AddJokeContainer() {
  const initialJoke = { setup: "", punchline: "" };
  const [joke, setJoke] = useState(initialJoke);

  const user = useSelector((state) => state.user);
  const errors = useSelector((state) => state.errors);
  const dispatch = useDispatch()
  
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addJoke(joke));
    setJoke(initialJoke);
  };

  const onChange = (event) => {
    setJoke({ ...joke, [event.target.name]: event.target.value });
  };

  if (user.jwt) {
    return (
      <div>
        <p className="error">{errors ? errors : null}</p>
        <AddJokeForm
          onSubmit={onSubmit}
          onChange={onChange}
          values={joke}
          buttonName="Add joke"
        />
      </div>
    );
  } else {
    return null;
  }
}

export default AddJokeContainer;
