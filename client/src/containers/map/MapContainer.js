import React from "react";
import { connect } from "react-redux";

import Map from "../../components/map/Map";

const MapContainer = ({ shelters }) => {
  return <Map shelters={shelters} />;
};

const mapStateToProps = state => ({
  shelters: state.filter.shelters,
});

export default connect(mapStateToProps)(MapContainer);
