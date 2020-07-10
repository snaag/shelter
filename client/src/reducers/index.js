import { combineReducers } from "redux";

import filterReducer from "./filter";
import fabReducer from "./fab";
import loginReducer from "./login";

export default combineReducers({
  loginReducer,
  filterReducer,
  fabReducer,
});
