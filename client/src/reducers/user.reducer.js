import { createAction, handleActions } from "redux-actions";
import { setState } from "./reducerUtils";

// Action Types
const SET_STATE = "shelter/user/SET_STATE";

// Action Creators
export const userActions = {
  setState: createAction(SET_STATE),
};

const initialState = {
  loginStatus: false,
  loginType: "",
};

// Reducer
export default handleActions(
  {
    [SET_STATE]: setState,
  },
  initialState
);
