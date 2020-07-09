import { createAction } from "redux-actions";

// Filter
const SET_FILTER_CONDITIONS = "SET_FILTER_CONDITIONS";
const SET_FILTERED_SHELTERS = "SET_FILTERED_SHELTERS";
const SET_CURRENT_SHELTER = "SET_CURRENT_SHELTER";

const setFilterConditions = conditions => ({
  type: SET_FILTER_CONDITIONS,
  conditions,
});

const setFilteredShelters = shelters => ({
  type: SET_FILTERED_SHELTERS,
  shelters,
});

const setCurrentShelter = shelter => ({
  type: SET_CURRENT_SHELTER,
  shelter,
});

// FAB
const CHANGE_BUTTONS_STATUS = "fab/CHANGE_BUTTONS_STATUS";
const CHANGE_MAP_BUTTON_STATUS = "fab/CHANGE_MAP_BUTTON_STATUS";
const CHANGE_LOCATION_BUTTON_STATUS = "fab/CHANGE_LOCATION_BUTTON_STATUS";
const CHANGE_LIST_BUTTON_STATUS = "fab/CHANGE_LIST_BUTTON_STATUS";
const CHANGE_COMMENT_BUTTON_STATUS = "fab/CHANGE_COMMENT_BUTTON_STATUS";

const changeButtonsStatus = createAction(
  CHANGE_BUTTONS_STATUS,
  status => status
);

const changeMapButtonStatus = createAction(
  CHANGE_MAP_BUTTON_STATUS,
  status => status
);

const changeLocationButtonStatus = createAction(
  CHANGE_LOCATION_BUTTON_STATUS,
  status => status
);

const changeListButtonStatus = createAction(
  CHANGE_LIST_BUTTON_STATUS,
  status => status
);

const changeCommentButtonStatus = createAction(
  CHANGE_COMMENT_BUTTON_STATUS,
  status => status
);

//Login

const CHANGE_USER_LOGIN_STATUS = "CHANGE_USER_LOGIN_STATUS";

const changeUserLoginStatus = status => ({
  type: CHANGE_USER_LOGIN_STATUS,
  status,
});

export {
  // Filter
  SET_FILTER_CONDITIONS,
  SET_FILTERED_SHELTERS,
  SET_CURRENT_SHELTER,
  setFilteredShelters,
  setFilterConditions,
  setCurrentShelter,
  // FAB
  //...action type
  CHANGE_BUTTONS_STATUS,
  CHANGE_MAP_BUTTON_STATUS,
  CHANGE_LOCATION_BUTTON_STATUS,
  CHANGE_LIST_BUTTON_STATUS,
  CHANGE_COMMENT_BUTTON_STATUS,
  //...action creator
  changeButtonsStatus,
  changeMapButtonStatus,
  changeLocationButtonStatus,
  changeListButtonStatus,
  changeCommentButtonStatus,
  //LOGIN
  CHANGE_USER_LOGIN_STATUS,
  changeUserLoginStatus,
};
