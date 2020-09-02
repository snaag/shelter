import React from "react";
import FilterCondition from "./FilterCondition";
import FilterList from "./FilterList";

export default function Filter() {
  return (
    <div className="filter">
      <FilterCondition />
      <FilterList />
    </div>
  );
}
