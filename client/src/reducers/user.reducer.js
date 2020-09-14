import { createAction, handleActions } from "redux-actions";
import { setState } from "./reducerUtils";

// Action Types
const SIGN_IN = "shelter/user/SIGN_IN";
const SIGN_OUT = "shelter/user/SIGN_OUT";
const SIGN_UP = "shelter/user/SIGN_UP";
const SET_STATE = "shelter/user/SET_STATE";
const START_REQUEST = "shelter/user/START_REQUEST";
const END_REQUEST = "shelter/user/END_REQUEST";

// Action Creators
export const userActions = {
  signIn: createAction(SIGN_IN),
  signOut: createAction(SIGN_OUT),
  signUp: createAction(SIGN_UP),
  setState: createAction(SET_STATE),
  startRequest: createAction(START_REQUEST),
  endRequest: createAction(END_REQUEST),
};

const initialState = {
  fetching: false,
  error: null,
  loginStatus: false,
  loginType: "",
};

// Reducer
export default handleActions(
  {
    [SET_STATE]: setState,
    [START_REQUEST]: prevState => ({
      ...prevState,
      fetching: true,
    }),
    [END_REQUEST]: prevState => ({
      ...prevState,
      fetching: false,
    }),
  },
  initialState
);
