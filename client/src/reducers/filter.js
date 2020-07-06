import {
  SET_FILTER_CONDITIONS,
  SET_FILTERED_SHELTERS,
  SET_CURRENT_SHELTER,
} from "../actions/index";

const initialState = {
  shelters: [],
  conditions: {
    SEX_TYPE: [],
    BYPERD_TYPE: [],
    SIGUN_CD: [],
  },
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER_CONDITIONS:
      return Object.assign({}, state, {
        conditions: action.conditions,
      });

    case SET_FILTERED_SHELTERS:
      return Object.assign({}, state, {
        shelters: action.shelters,
      });

    case SET_CURRENT_SHELTER:
      return Object.assign({}, state, {
        currentShelter: action.shelter,
      });

    default:
      return state;
  }
};

export default filterReducer;
