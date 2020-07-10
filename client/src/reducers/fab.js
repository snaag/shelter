import { handleActions } from "redux-actions";

import {
  CHANGE_BUTTONS_STATUS,
  CHANGE_MAP_BUTTON_STATUS,
  CHANGE_LOCATION_BUTTON_STATUS,
  CHANGE_LIST_BUTTON_STATUS,
  CHANGE_COMMENT_BUTTON_STATUS
} from "../actions/index";

const initialState = {
  menusActive: false,
  // 나중에 filter 부분이랑 연결해서
  // 검색 버튼 눌렀을 때 버튼 활성화되도록 함
  mapButtonActive: true,
  locationButtonActive: true,
  listButtonActive: false,
  commentButtonActive: false
};

const fabReducer = handleActions(
  {
    [CHANGE_BUTTONS_STATUS]: (prevState, action) => ({
      ...prevState,
      menusActive: action.payload
    }),
    [CHANGE_MAP_BUTTON_STATUS]: (prevState, action) => ({
      ...prevState,
      mapButtonActive: action.payload
    }),
    [CHANGE_LOCATION_BUTTON_STATUS]: (prevState, action) => ({
      ...prevState,
      locationButtonActive: action.payload
    }),
    [CHANGE_LIST_BUTTON_STATUS]: (prevState, action) => ({
      ...prevState,
      listButtonActive: action.payload
    }),
    [CHANGE_COMMENT_BUTTON_STATUS]: (prevState, action) => ({
      ...prevState,
      commentButtonActive: action.payload
    })
  },
  initialState
);

export default fabReducer;
