import React from "react";
import { connect } from "react-redux";

import ShelterMarker from "../../components/map/ShelterMarker";
import { setCurrentShelter } from "../../actions/index";

const ShelterMarkerContainer = ({
  // details,
  position,
  shelter,
  currentShelter,
  setCurrentShelter,
}) => {
  return (
    <ShelterMarker
      // details={details}
      position={position}
      shelter={shelter}
      currentShelter={currentShelter}
      onInfoWindowClick={setCurrentShelter}
    />
  );
};

const mapStateToProps = state => ({
  currentShelter: state.filterReducer.currentShelter,
});

const mapDispatchToProps = { setCurrentShelter };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShelterMarkerContainer);
