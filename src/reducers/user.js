import {JWT} from "../actions/userActions";

export default function (state = "", action) {
  switch (action.type) {
    case JWT:
      return action.payload;
    default:
      return state;
  }
}
