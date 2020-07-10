import React, { useState } from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

import ShelterDetail from "../../containers/map/ShelterMarkerContainer";
import { googleMap } from "../../config/apiKey";

const getLocations = shelters => {
  const ret = [];

  shelters.forEach(shelter => {
    ret.push({
      lat: Number(shelter.REFINE_WGS84_LAT),
      lng: Number(shelter.REFINE_WGS84_LOGT),
    });
  });

  return ret;
};

const Map = props => {
  const positions = getLocations(props.shelters);
  const shelters = props.shelters;
  const [curPos, setCurPos] = useState({});

  if (Object.keys(curPos).length === 0) {
    navigator.geolocation.getCurrentPosition(
      position => {
        setCurPos({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => {
        setCurPos({
          lat: 37.288122,
          lng: 126.979956,
        });
      }
    );
  }

  const MapWithAMarker = withScriptjs(
    withGoogleMap(props => (
      <GoogleMap
        defaultZoom={16}
        defaultCenter={props.defaultCenter}
        defaultOptions={{
          disableDefaultUI: true,
        }}
      >
        {props.positions &&
          props.positions.map((position, idx) => (
            <ShelterDetail
              position={position}
              shelter={shelters[idx]}
              key={shelters[idx].id}
            />
          ))}
      </GoogleMap>
    ))
  );

  return (
    <div className="map">
      {props.shelters.length > 0 && (
        <MapWithAMarker
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${googleMap}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%`, width: `100%` }} />}
          containerElement={<div style={{ height: `100%`, width: `100%` }} />}
          mapElement={<div style={{ height: `100%`, width: `100%` }} />}
          positions={positions}
          shelter={props.shelter}
          defaultCenter={{
            lat: Number(shelters[0].REFINE_WGS84_LAT),
            lng: Number(shelters[0].REFINE_WGS84_LOGT),
          }}
        />
      )}
      {props.shelters.length === 0 && (
        <MapWithAMarker
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${googleMap}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%`, width: `100%` }} />}
          containerElement={<div style={{ height: `100%`, width: `100%` }} />}
          mapElement={<div style={{ height: `100%`, width: `100%` }} />}
          defaultCenter={curPos}
        />
      )}
    </div>
  );
};

export default Map;
