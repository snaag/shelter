import { createAction, handleActions } from "redux-actions";
import { setState } from "./reducerUtils";

// Action Types
const SET_STATE = "shelter/map/SET_STATE";

// Action Creators
export const mapActions = {
  setState: createAction(SET_STATE),
};

// Reducer
const initialState = {
  showCurrentPosition: true,
};

export default handleActions(
  {
    [SET_STATE]: setState,
  },
  initialState
);
