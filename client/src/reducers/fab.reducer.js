import { createAction, handleActions } from "redux-actions";
import { setValue } from "./reducerUtils";

// Actions
const CHANGE_BUTTONS_STATUS = "shelter/fab/CHANGE_BUTTONS_STATUS";
const CHANGE_MAP_BUTTON_STATUS = "shelter/fab/CHANGE_MAP_BUTTON_STATUS";
const CHANGE_LOCATION_BUTTON_STATUS =
  "shelter/fab/CHANGE_LOCATION_BUTTON_STATUS";
const CHANGE_LIST_BUTTON_STATUS = "shelter/fab/CHANGE_LIST_BUTTON_STATUS";
const CHANGE_COMMENT_BUTTON_STATUS = "shelter/fab/CHANGE_COMMENT_BUTTON_STATUS";

// Action Creators
export const fabActions = {
  changeButtonsStatus: createAction(CHANGE_BUTTONS_STATUS),
  changeMapButtonStatus: createAction(CHANGE_MAP_BUTTON_STATUS),
  changeLocationButtonStatus: createAction(CHANGE_LOCATION_BUTTON_STATUS),
  changeListButtonStatus: createAction(CHANGE_LIST_BUTTON_STATUS),
  changeCommentButtonStatus: createAction(CHANGE_COMMENT_BUTTON_STATUS),
};

const initialState = {
  menusActive: false,
  // 나중에 filter 부분이랑 연결해서
  // 검색 버튼 눌렀을 때 버튼 활성화되도록 함
  mapButtonActive: true,
  locationButtonActive: true,
  listButtonActive: false,
  commentButtonActive: false,
};

// Reducer
export default handleActions(
  {
    [CHANGE_BUTTONS_STATUS]: setValue("menusActive"),
    [CHANGE_MAP_BUTTON_STATUS]: setValue("mapButtonActive"),
    [CHANGE_LOCATION_BUTTON_STATUS]: setValue("locationButtonActive"),
    [CHANGE_LIST_BUTTON_STATUS]: setValue("listButtonActive"),
    [CHANGE_COMMENT_BUTTON_STATUS]: setValue("commentButtonActive"),
  },
  initialState
);
