import React, { Component } from "react";
import FilterCondition from "../../containers/filter/FilterCondition";
import FilterList from "../../containers/filter/FilterList";
import FilterItemDetail from "./FilterItemDetail";
import "../../styles/Filter.css";

class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <FilterCondition />
        <FilterList />
        <FilterItemDetail />
      </div>
    );
  }
}

export default Filter;
