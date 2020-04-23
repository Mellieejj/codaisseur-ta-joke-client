import { RANDOM_JOKE } from "../actions";

export default function (state = null, action = {}) {
  switch (action.type) {
  
    case RANDOM_JOKE: {
      return action.payload;
    }
    default:
      return state;
  }
}
