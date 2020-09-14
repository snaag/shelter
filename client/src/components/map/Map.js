import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

import ShelterMarker from "./ShelterMarker";
import { googleMap } from "../../config/apiKey";

export default function Map() {
  const [curPos, setCurPos] = useState({
    lat: 37.288122,
    lng: 126.979956,
  });
  const shelters = useSelector(state => state.filter.shelters);
  const { showCurrentPosition } = useSelector(state => state.map);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      setCurPos({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  const MapWithAMarker = withScriptjs(
    withGoogleMap(props => (
      <GoogleMap
        defaultZoom={16}
        defaultCenter={props.defaultCenter}
        defaultOptions={{
          disableDefaultUI: true,
        }}
      >
        <Marker className="current-position" position={curPos} />
        {shelters.map(shelter => (
          <ShelterMarker
            position={{
              lat: Number(shelter.REFINE_WGS84_LAT),
              lng: Number(shelter.REFINE_WGS84_LOGT),
            }}
            shelter={shelter}
            key={shelter.id}
          />
        ))}
      </GoogleMap>
    ))
  );

  return (
    <div className="map">
      <MapWithAMarker
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${googleMap}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%`, width: `100%` }} />}
        containerElement={<div style={{ height: `100%`, width: `100%` }} />}
        mapElement={<div style={{ height: `100%`, width: `100%` }} />}
        defaultCenter={
          shelters.length === 0 || showCurrentPosition
            ? curPos
            : {
                lat: Number(shelters[0].REFINE_WGS84_LAT),
                lng: Number(shelters[0].REFINE_WGS84_LOGT),
              }
        }
      />
    </div>
  );
}
