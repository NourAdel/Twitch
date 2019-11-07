import { combineReducers } from "redux";
import authReducer from "./authRedducer";
export default combineReducers({
  auth: authReducer
});
