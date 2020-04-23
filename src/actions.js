import request from "superagent"

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
     
      console.log("action", action);
      
      dispatch(action)
    })
    .catch(console.error)
  }

