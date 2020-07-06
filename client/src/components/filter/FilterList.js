import React, { Component } from "react";
import FilterItem from "../../containers/filter/FilterItem";

class FilterList extends Component {
  render() {
    return (
      <div className="filter-list">
        {this.props.shelters.map((shelter, i) => (
          <FilterItem key={i} shelter={shelter} />
        ))}
      </div>
    );
  }
}

export default FilterList;
