import request from "superagent";
import { removeError, displayError } from "./userActions";

const baseUrl = "http://localhost:4000";

//get random joke from api
export const RANDOM_JOKE = "RANDOM_JOKE";

function randomJoke(payload) {
  return {
    type: RANDOM_JOKE,
    payload,
  };
}

export const getJoke = () => (dispatch, getState) => {
  request("https://official-joke-api.appspot.com/jokes/programming/random")
    .then((response) => {
      const action = randomJoke(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

const NEW_JOKE = "NEW_JOKE";

function newJoke(payload) {
  return {
    type: NEW_JOKE,
    payload,
  };
}

export const addJoke = (data) => async (dispatch, getState) => {
  try {
    const state = getState();
    const { user } = state;

    const response = await request
      .post(`${baseUrl}/jokes`)
      .set(`Authorization`, `Bearer ${user.jwt}`)
      .send(data);

    const action = newJoke(response.body);
    dispatch(action);
    dispatch(removeError());
    dispatch(displayError("Your joke is created!"));
  } catch (error) {
    if (error.response) {
      const errorMessage = displayError(error.response.body.message);
      dispatch(errorMessage);
    } else {
      console.log(error);
    }
  }
};
