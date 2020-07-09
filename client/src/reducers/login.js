import { CHANGE_USER_LOGIN_STATUS } from "../actions/index";

const initialState = {
  loginStatus: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USER_LOGIN_STATUS:
      return Object.assign({}, state, {
        loginStatus: action.status,
      });

    default:
      return state;
  }
};

export default loginReducer;
