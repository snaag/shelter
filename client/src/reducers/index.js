import { combineReducers } from "redux";

import filter from "./filter.reducer";
import fab from "./fab.reducer";
import user from "./user.reducer";
import map from "./map.reducer";

export default combineReducers({
  filter,
  fab,
  user,
  map,
});
