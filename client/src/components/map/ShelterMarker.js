import React, { useState } from "react";
import { InfoWindow, Marker } from "react-google-maps";

const ShelterMarker = props => {
  const { details, position } = props;
  const { restAreaName, sexType, byperedType } = details;
  const [infoWindowVisible, setInfoWindowVisible] = useState(true);

  const showInfoWindow = () => {
    setInfoWindowVisible(true);
  };

  const closeInfoWindow = () => {
    setInfoWindowVisible(false);
  };

  return (
    <Marker
      className="shelter-marker"
      position={position}
      onClick={showInfoWindow}
    >
      {infoWindowVisible && (
        <InfoWindow
          clasName="shelter-marker__window"
          onCloseClick={closeInfoWindow}
        >
          <div className="shelter-marker__window__contents">
            <div className="shelter-marker__window__contents__type">
              <div className="shelter-marker__window__contents__sex-type">
                {sexType}
              </div>
              <div className="shelter-marker__window__contents__byperd-type">
                {byperedType}
              </div>
            </div>
            <div className="shelter-marker__window__contents__shelter-name">
              {restAreaName}
            </div>
          </div>
        </InfoWindow>
      )}
    </Marker>
  );
};

export default ShelterMarker;
