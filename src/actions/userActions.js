import request from "superagent";

// const baseUrl = "http://localhost:4000";
const baseUrl = "https://floating-harbor-87574.herokuapp.com"

//add error
export const ERROR_MESSAGE = "ERROR_MESSAGE";

export const displayError = (payload) => {
  return {
    type: ERROR_MESSAGE,
    payload,
  };
};

//remove error message
export const REMOVE_ERROR = "REMOVE_ERROR";

export const removeError = () => {
  return {
    type: REMOVE_ERROR,
  };
};

// sign up a user
export const ADD_USER = "ADD_USER";

const addUser = () => {
  return {
    type: ADD_USER,
  };
};

export function signup(data) {
  return async function (dispatch) {
    try {
      await request.post(`${baseUrl}/users`).send(data);
      const action = addUser();
      await dispatch(action);
      dispatch(removeError());
      dispatch(displayError("You can login now!"));
    } catch (error) {
      if (error.response) {
        const errorMessage = displayError(error.response.body.message);
        dispatch(errorMessage);
      } else {
        console.error(error);
      }
    }
  };
}

// login
export const JWT = "JWT";

export const loginUser = (payload) => {
  return {
    type: JWT,
    payload,
  };
};

export function login(data) {
  return async function (dispatch) {
    try {
      const response = await request.post(`${baseUrl}/login`).send(data);
      const action = loginUser(response.body);
      await dispatch(action);
      await dispatch(removeError());
    } catch (error) {
      if (error.response) {
        const errorMessage = displayError(error.response.body.message);
        return dispatch(errorMessage);
      }
      console.log(error);
    }
  };
}
