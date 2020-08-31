import { createAction, handleActions } from "redux-actions";
import { setState } from "./reducerUtils";

// Action Types
const SET_STATE = "shelter/fab/SET_STATE";

// Action Creators
export const fabActions = {
  setState: createAction(SET_STATE),
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
    [SET_STATE]: setState,
  },
  initialState
);
