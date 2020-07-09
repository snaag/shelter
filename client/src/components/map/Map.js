import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

import "../../styles/Map.css";
import ShelterDetail from "../../containers/map/ShelterMarkerContainer";
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

const getDistance = (location1, location2) => {
  const lat1 = location1.lat;
  const lng1 = location1.lng;
  const lat2 = location2.lat;
  const lng2 = location2.lng;

  return (lat2 - lat1) * (lat2 - lat1) + (lng2 - lng1) * (lng2 - lng1);
};

const getZoom = locations => {
  const distToZoom = {
    10: 13,
    20: 12,
    30: 11,
    350: 10,
    over: 9,
  };
  const length = locations.length;
  const latLng = [];
  const ret = [];

  locations.forEach(location => {
    latLng.push({
      lng: Number(location.REFINE_WGS84_LOGT),
      lat: Number(location.REFINE_WGS84_LAT),
    });
  });

  for (let a = 0; a < length; a++) {
    for (let b = a + 1; b < length; b++) {
      ret.push(getDistance(latLng[a], latLng[b]));
    }
  }

  ret.sort((a, b) => (a > b ? -1 : a < b ? 1 : 0));
  ret[0] = ret[0] * 1000;
  if (ret[0] < 10) return distToZoom[10];
  if (ret[0] < 20) return distToZoom[20];
  if (ret[0] < 30) return distToZoom[30];
  if (ret[0] < 350) return distToZoom[350];
  return distToZoom.over;
};

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
  const zoom = getZoom(props.shelters);

  const MapWithAMarker = withScriptjs(
    withGoogleMap(props => (
      <GoogleMap
        defaultZoom={zoom}
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
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `90vh` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          positions={positions}
          shelter={props.shelter}
          defaultCenter={centerOfLocations(positions)}
        />
      )}
      {props.shelters.length === 0 && (
        <div className="map__need-conditions">
          <span>성별과 기간, 지역을 고른 후 검색해주세요</span>
        </div>
      )}
    </div>
  );
};

export default Map;
