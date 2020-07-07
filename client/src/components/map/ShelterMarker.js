import React, { useState } from "react";
import { InfoWindow, Marker } from "react-google-maps";

const ShelterMarker = props => {
  console.log(props);
  // const { details, position, shelter, currentShelter } = props;
  // const { restAreaName, sexType, byperedType } = details;
  const { position, shelter, currentShelter } = props;
  const { RESTARER_NM, SEX_TYPE, BYPERD_TYPE } = shelter;
  // const [infoWindowVisible, setInfoWindowVisible] = useState(true);

  const showInfoWindow = () => {
    if (currentShelter === shelter) {
      props.onInfoWindowClick({});
      // setInfoWindowVisible(false);
    } else {
      props.onInfoWindowClick(shelter);
      // setInfoWindowVisible(true);
    }

    // if (infoWindowVisible) {
    //   props.onInfoWindowClick(shelter);
    // } else {
    //   props.onInfoWindowClick({});
    // }
    // setInfoWindowVisible(!infoWindowVisible);
  };

  const closeInfoWindow = () => {
    props.onInfoWindowClick({});
    // setInfoWindowVisible(false);
  };

  const koToEngSex = {
    남: "male",
    여: "female",
  };

  const koToEngByprd = {
    // 일시
    일시: "awhile",
    // 단기
    단기: "short",
    // 중장기
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
            <div className="shelter-marker__window__contents__type">
              <div className="shelter-marker__window__contents__sex-type">
                {SEX_TYPE.split(",").map((sex, idx) => (
                  <div
                    alt={sex}
                    className={`shelter-marker__window__contents__sex-type__${koToEngSex[sex]}`}
                    key={idx}
                  ></div>
                ))}
              </div>
              <div className="shelter-marker__window__contents__byperd-type">
                <div
                  className={`shelter-marker__window__contents__byperd-type__${koToEngByprd[BYPERD_TYPE]}`}
                />
              </div>
            </div>
            <div className="shelter-marker__window__contents__shelter-name">
              {RESTARER_NM}
            </div>
          </div>
        </InfoWindow>
      )}
    </Marker>
  );
};

export default ShelterMarker;
