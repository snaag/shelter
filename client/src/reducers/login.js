import { CHANGE_USER_LOGIN_STATUS, SET_LOGIN_TYPE } from "../actions/index";

const initialState = {
  loginStatus: false,
  loginType: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USER_LOGIN_STATUS:
      return Object.assign({}, state, {
        loginStatus: action.status,
      });
    case SET_LOGIN_TYPE:
      return Object.assign({}, state, {
        loginType: action.loginType,
      });
    default:
      return state;
  }
};

export default loginReducer;
