import React, { Component } from "react";
import FilterCondition from "../../containers/filter/FilterCondition";
import FilterList from "../../containers/filter/FilterList";
import "../../styles/filter/Filter.css";

class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <FilterCondition />
        <FilterList />
      </div>
    );
  }
}

export default Filter;
