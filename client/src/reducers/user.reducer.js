import { createAction, handleActions } from "redux-actions";
import { setValue } from "./reducerUtils";

// Actions
const CHANGE_USER_LOGIN_STATUS = "shelter/user/CHANGE_USER_LOGIN_STATUS";
const SET_LOGIN_TYPE = "shelter/user/CHANGE_LOGIN_TYPE";

// Action Creators
export const userActions = {
  changeUserLoginStatus: createAction(CHANGE_USER_LOGIN_STATUS),
  setLoginType: createAction(SET_LOGIN_TYPE),
};

const initialState = {
  loginStatus: false,
  loginType: "",
};

// Reducer
export default handleActions(
  {
    [CHANGE_USER_LOGIN_STATUS]: setValue("loginStatus"),
    [SET_LOGIN_TYPE]: setValue("loginType"),
  },
  initialState
);
