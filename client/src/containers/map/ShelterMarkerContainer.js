import React from "react";
import { connect } from "react-redux";

import ShelterMarker from "../../components/map/ShelterMarker";
import { filterActions } from "../../reducers/filter.reducer";

const ShelterMarkerContainer = ({
  position,
  shelter,
  currentShelter,
  setCurrentShelter,
}) => {
  return (
    <ShelterMarker
      position={position}
      shelter={shelter}
      currentShelter={currentShelter}
      onInfoWindowClick={setCurrentShelter}
    />
  );
};

const mapStateToProps = state => ({
  currentShelter: state.filter.currentShelter,
});

const mapDispatchToProps = dispatch => {
  return {
    setCurrentShelter: currentShelter =>
      dispatch(filterActions.setState({ currentShelter })),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShelterMarkerContainer);
