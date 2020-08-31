import { createAction, handleActions } from "redux-actions";
import { setState } from "./reducerUtils";

// Action Types
const GET_SHELTERS = "shelter/filter/GET_SHELTERS";
const SET_STATE = "shelter/filter/SET_STATE";
const START_REQUEST = "shelter/filter/START_REQUEST";
const END_REQUEST = "shelter/filter/END_REQUEST";

// Action Creators
export const filterActions = {
  getShelters: createAction(GET_SHELTERS),
  setState: createAction(SET_STATE),
  startRequest: createAction(START_REQUEST),
  endRequest: createAction(END_REQUEST),
};

const initialState = {
  fetching: false,
  error: null,
  currentShelter: {},
  shelters: [],
  conditions: {
    SEX_TYPE: [],
    BYPERD_TYPE: [],
    SIGUN_CD: [],
  },
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
