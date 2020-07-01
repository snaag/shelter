import React, { Component } from "react";
import FilterKeyword from "./FilterKeyword";
import FilterItem from "./FilterItem";

class FilterList extends Component {
  render() {
    return (
      <div>
        <FilterKeyword />
        <FilterItem />
      </div>
    );
  }
}

export default FilterList;
