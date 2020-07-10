import React from "react";
import { InfoWindow, Marker } from "react-google-maps";

const ShelterMarker = props => {
  const { position, shelter, currentShelter } = props;
  const { RESTARER_NM, SEX_TYPE, BYPERD_TYPE } = shelter;

  const showInfoWindow = () => {
    if (currentShelter === shelter) {
      props.onInfoWindowClick({});
    } else {
      props.onInfoWindowClick(shelter);
    }
  };

  const closeInfoWindow = () => {
    props.onInfoWindowClick({});
  };

  const sexTypesSplit = {
    M: ["M"],
    F: ["F"],
    ALL: ["M", "F"],
  };

  const koToEngSex = {
    M: "male",
    F: "female",
  };

  const koToEngByprd = {
    일시: "awhile",
    단기: "short",
    중장기: "mid-and-long",
  };

  return (
    <Marker
      className="shelter-marker"
      position={position}
      onClick={showInfoWindow}
    >
      {shelter === currentShelter && (
        <InfoWindow
          clasName="shelter-marker__window"
          onCloseClick={closeInfoWindow}
        >
          <div className="shelter-marker__window__contents">
            <div className="shelter-marker__window__contents__shelter-name">
              {RESTARER_NM}
            </div>
            <div className="shelter-marker__window__contents__type">
              <div className="shelter-marker__window__contents__byperd-type">
                <div
                  className={`shelter-marker__window__contents__byperd-type__${koToEngByprd[BYPERD_TYPE]}`}
                />
              </div>
              <div className="shelter-marker__window__contents__sex-type">
                {sexTypesSplit[SEX_TYPE].map((sex, idx) => (
                  <div
                    alt={sex}
                    className={`shelter-marker__window__contents__sex-type__${koToEngSex[sex]}`}
                    key={idx}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </InfoWindow>
      )}
    </Marker>
  );
};

export default ShelterMarker;
