import React, { Component } from "react";
import FilterCondition from "./FilterCondition";
import FilterList from "./FilterList";
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
