import React from "react";
import { useSelector } from "react-redux";
import { CITY } from "../../data/filterCategoryLists";

export default function FilterKeyword() {
  const conditions = useSelector(state => state.filter.conditions);
  return (
    <div className="filter-keyword">
      {conditions.SEX_TYPE.map(condition => (
        <div className="filter-keyword__type" key={condition}>
          {condition === "M" ? "남자" : "여자"}
        </div>
      ))}
      {conditions.BYPERD_TYPE.map(condition => (
        <div className="filter-keyword__type" key={condition}>
          {condition}
        </div>
      ))}
      {conditions.SIGUN_CD.map(condition => (
        <div className="filter-keyword__type" key={condition}>
          {CITY.find(city => city.title === condition).name}
        </div>
      ))}
    </div>
  );
}
