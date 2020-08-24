import { createAction, handleActions } from "redux-actions";
import { setValue } from "./reducerUtils";

// Actions
const SET_FILTER_CONDITIONS = "shelter/filter/SET_FILTER_CONDITIONS";
const SET_FILTERED_SHELTERS = "shelter/filter/SET_FILTERED_SHELTERS";
const SET_CURRENT_SHELTER = "shelter/filter/SET_CURRENT_SHELTER";

// Action Creators
export const filterActions = {
  setFilterConditions: createAction(SET_FILTER_CONDITIONS),
  setFilteredShelters: createAction(SET_FILTERED_SHELTERS),
  setCurrentShelter: createAction(SET_CURRENT_SHELTER),
};

const initialState = {
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
    [SET_FILTER_CONDITIONS]: setValue("conditions"),
    [SET_FILTERED_SHELTERS]: setValue("shelters"),
    [SET_CURRENT_SHELTER]: setValue("currentShelter"),
  },
  initialState
);
