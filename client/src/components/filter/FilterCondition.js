import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

import FilterKeyword from "./FilterKeyword";
import FilterCategory from "./FilterCategory";

import { filterActions } from "../../reducers/filter.reducer";

import { SEX, PERIOD, CITY } from "../../data/filterCategoryLists";
import icon from "../../assets/icon";

export default function FilterCondition() {
  const dispatch = useDispatch();
  const [fold, setFold] = useState(false);

  const foldToggle = () => {
    setFold(!fold);
  };

  const handleButtonClick = () => {
    setFold(true);
    getShelters();
  };

  const getShelters = useCallback(() => dispatch(filterActions.getShelters()), [
    dispatch,
  ]);

  return (
    <div className="filter-condition">
      <div className="filter-condition__fold-button">
        <FilterKeyword />
        {fold ? (
          <img src={icon.doubleUpArrow} alt="up arrow" onClick={foldToggle} />
        ) : (
          <img
            src={icon.doubleDownArrow}
            alt="down arrow"
            onClick={foldToggle}
          />
        )}
      </div>
      <div className={`filter-condition--${fold ? "fold" : "unfold"}`}>
        <FilterCategory title="성별" type="SEX_TYPE" list={SEX} />
        <FilterCategory title="기간" type="BYPERD_TYPE" list={PERIOD} />
        <FilterCategory title="지역" type="SIGUN_CD" list={CITY} />
        <div className="filter-condition__filter-button">
          <button onClick={handleButtonClick}>검색</button>
        </div>
      </div>
    </div>
  );
}
