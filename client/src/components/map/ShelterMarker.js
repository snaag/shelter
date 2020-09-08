import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { InfoWindow, Marker } from "react-google-maps";

import { filterActions } from "../../reducers/filter.reducer";

export default function ShelterMarker(props) {
  const currentShelter = useSelector(state => state.filter.currentShelter);
  const { position, shelter } = props;
  const { RESTARER_NM, SEX_TYPE, BYPERD_TYPE } = shelter;
  const dispatch = useDispatch();

  const showInfoWindow = () => {
    const selected = currentShelter === shelter ? {} : shelter;
    dispatch(filterActions.setState({ currentShelter: selected }));
  };

  const closeInfoWindow = useCallback(
    () => dispatch(filterActions.setState({ currentShelter: {} })),
    [dispatch]
  );

  const male = { text: "남", className: "male" };
  const female = { text: "여", className: "female" };
  const sexTypesSplit = {
    M: [male],
    F: [female],
    ALL: [male, female],
  };

  return (
    <Marker
      className="shelter-marker"
      position={position}
      onClick={showInfoWindow}
    >
      {shelter === currentShelter && (
        <InfoWindow
          className="shelter-marker__window"
          onCloseClick={closeInfoWindow}
        >
          <div className="shelter-marker__window__contents">
            <div className="shelter-marker__window__contents__name">
              {RESTARER_NM}
            </div>
            <div className="shelter-marker__window__contents__type">
              <span className="shelter-marker__window__contents__type__period">
                {BYPERD_TYPE}
              </span>
              <div className="shelter-marker__window__contents__type__sex">
                {sexTypesSplit[SEX_TYPE].map((sex, idx) => (
                  <span
                    className={`shelter-marker__window__contents__type__sex__${sex.className}`}
                    key={idx}
                  >
                    {sex.text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </InfoWindow>
      )}
    </Marker>
  );
}
