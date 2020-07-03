import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

import "../../styles/Map.css";
import ShelterDetail from "./ShelterMarker";
import { googleMap } from "../../config/apiKey";

const centerOfLocations = locations => {
  const length = locations.length;
  const reducer = (acc, curr) => {
    acc.lat += curr.lat;
    acc.lng += curr.lng;
    return acc;
  };
  const sum = locations.reduce(reducer, { lat: 0, lng: 0 });
  return { lat: sum.lat / length, lng: sum.lng / length };
};

const Map = props => {
  const MapWithAMarker = withScriptjs(
    withGoogleMap(props => (
      <GoogleMap defaultZoom={13} defaultCenter={props.defaultCenter}>
        {props.positions.map((position, idx) => (
          <ShelterDetail position={position} details={props.details[idx]} />
        ))}
      </GoogleMap>
    ))
  );
  return (
    <div className="map">
      <MapWithAMarker
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${googleMap}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        positions={props.shelterLocations}
        details={props.details}
        defaultCenter={centerOfLocations(props.shelterLocations)}
      />
    </div>
  );
};

export default Map;
