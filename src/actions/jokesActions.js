import request from "superagent";

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
