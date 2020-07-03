import React, { Component } from "react";
import FilterKeyword from "./FilterKeyword";
import FilterItem from "./FilterItem";

class FilterList extends Component {
  render() {
    return (
      <div>
        FilterList
        <FilterKeyword />
        {this.props.shelters.map((shelter, i) => (
          <FilterItem key={i} shelter={shelter} />
        ))}
      </div>
    );
  }
}

export default FilterList;
