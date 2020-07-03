const SET_FILTER_CONDITIONS = "SET_FILTER_CONDITIONS";
const SET_FILTERED_SHELTERS = "SET_FILTERED_SHELTERS";

const setFilterConditions = conditions => ({
  type: SET_FILTER_CONDITIONS,
  conditions,
});

const setFilteredShelters = shelters => ({
  type: SET_FILTERED_SHELTERS,
  shelters,
});

export {
  SET_FILTER_CONDITIONS,
  SET_FILTERED_SHELTERS,
  setFilteredShelters,
  setFilterConditions,
};
