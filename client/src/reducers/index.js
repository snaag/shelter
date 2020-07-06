import { combineReducers } from "redux";

import filterReducer from "./filter";
import fabReducer from "./fab";

export default combineReducers({
  filterReducer,
  fabReducer
});
