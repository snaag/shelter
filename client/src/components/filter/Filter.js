import React, { Component } from "react";
import FilterCondition from "./FilterCondition";
import FilterList from "./FilterList";
import FilterItemDetail from "./FilterItemDetail";

class Filter extends Component {
  render() {
    return (
      <div>
        <FilterCondition />
        <FilterList />
        <FilterItemDetail />
      </div>
    );
  }
}

export default Filter;
