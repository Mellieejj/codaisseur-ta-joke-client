import request from "superagent"

const baseUrl = "http://localhost:4000"

export const RANDOM_JOKE = "RANDOM_JOKE"

function randomJoke (payload) {
  return{
    type: RANDOM_JOKE,
    payload
  }
}

export const getJoke = () =>(dispatch, getState) => {

    request('https://official-joke-api.appspot.com/jokes/programming/random')
    .then(response => {
      const action = randomJoke(response.body)
      dispatch(action)
    })
    .catch(console.error)
  }

  // sign up a user
export const ADD_USER = "ADD_USER"

const addUser = () => {
  return {
    type: ADD_USER
  };
};

export function signup(data) {
  return async function(dispatch) {
    try {
      await request.post(`${baseUrl}/user`).send(data);
      const action = addUser();
      await dispatch(action);
    } catch (error) {
      console.log(error)
    }
  };
}

// login
export const JWT = "JWT"

export const loginUser = payload => {
  return {
    type: JWT,
    payload
  };
};

export function login(data) {
  return async function(dispatch) {
    try {
      const response = await request.post(`${baseUrl}/login`).send(data);
      const action = loginUser(response.body.jwt);
      await dispatch(action);
      } catch (error) {
        console.log(error)
    }
  }
}
