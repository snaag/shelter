import React, { useState } from "react";
import { InfoWindow, Marker } from "react-google-maps";

const ShelterMarker = props => {
  const { details, position } = props;
  const { restAreaName, sexType, byperedType, location } = details;
  const [infoWindowVisible, setInfoWindowVisible] = useState(true);

  const showInfoWindow = () => {
    setInfoWindowVisible(true);
  };

  const closeInfoWindow = () => {
    setInfoWindowVisible(false);
  };

  const koToEngSex = {
    남: "male",
    여: "female"
  };

  const koToEngByprd = {
    // 일시
    일시: "awhile",
    // 단기
    단기: "short",
    // 중장기
    중장기: "mid-and-long"
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
                {sexType.split(",").map(sex => (
                  <div
                    alt={sex}
                    className={`shelter-marker__window__contents__sex-type__${koToEngSex[sex]}`}
                  ></div>
                ))}
              </div>
              <div className="shelter-marker__window__contents__byperd-type">
                <div
                  className={`shelter-marker__window__contents__byperd-type__${koToEngByprd[byperedType]}`}
                />
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
