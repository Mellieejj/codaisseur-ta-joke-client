import { combineReducers } from "redux";
import user from "./user"
import joke from "./joke";

export default combineReducers({
  user,
  joke,
});
