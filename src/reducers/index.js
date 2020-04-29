import { combineReducers } from "redux";
import user from "./user";
import joke from "./joke";
import errors from "./errors";

export default combineReducers({
  user,
  joke,
  errors,
});
