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

// const getDetails = shelters => {
//   const ret = [];

//   shelters.forEach(shelter => {
//     ret.push({
//       sexType: shelter.SEX_TYPE,
//       restAreaName: shelter.RESTARER_NM,
//       byperedType: shelter.BYPERD_TYPE,
//       location: shelter.REFINE_LOTNO_ADDR,
//     });
//   });

//   return ret;
// };

const Map = props => {
  const positions = getLocations(props.shelters);
  // const details = getDetails(props.shelters);
  const shelters = props.shelters;

  const MapWithAMarker = withScriptjs(
    withGoogleMap(props => (
      <GoogleMap
        defaultZoom={13}
        defaultCenter={props.defaultCenter}
        defaultOptions={{
          disableDefaultUI: true,
        }}
      >
        {props.positions &&
          props.positions.map((position, idx) => (
            <ShelterDetail
              position={position}
              // details={props.details[idx]}
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
          // details={details}
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
