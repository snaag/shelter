import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import FilterItemDetail from "./FilterItemDetail";
import { filterActions } from "../../reducers/filter.reducer";
import icon from "../../assets/icon";

export default function FilterItem({ shelter }) {
  const currentShelter = useSelector(state => state.filter.currentShelter);
  const { RESTARER_NM, BYPERD_TYPE, SEX_TYPE, CONTCT_NO } = shelter;
  const dispatch = useDispatch();

  const handleItemClick = event => {
    if (event.target.name === "call") return;
    return onItemClick(shelter === currentShelter ? {} : shelter);
  };

  const onItemClick = useCallback(
    currentShelter => dispatch(filterActions.setState({ currentShelter })),
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
    <div className="filter-list__item" onClick={handleItemClick}>
      <div className="filter-list__item__name">{RESTARER_NM}</div>
      <div className="filter-list__item__about">
        <div className="filter-list__item__about__type">
          <span className="filter-list__item__about__type__period">
            {BYPERD_TYPE}
          </span>
          {sexTypesSplit[SEX_TYPE].map((sex, idx) => (
            <span
              className={`filter-list__item__about__type__sex__${sex.className}`}
              key={idx}
            >
              {sex.text}
            </span>
          ))}
        </div>
        <span className="filter-list__item__about__call">
          <a href={`tel:${CONTCT_NO}`}>
            <img src={icon.phone} alt="call" name="call" />
          </a>
        </span>
      </div>

      {shelter === currentShelter && <FilterItemDetail shelter={shelter} />}
    </div>
  );
}
