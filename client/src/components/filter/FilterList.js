import React, { Component } from "react";
import FilterItem from "../../containers/filter/FilterItem";

class FilterList extends Component {
  render() {
    return (
      <div className="filter-list">
        {this.props.shelters.map((shelter, i) => {
          if (shelter === "empty") {
            return (
              <div className="filter-list--empty">검색 결과가 없습니다.</div>
            );
          }
          return <FilterItem key={i} shelter={shelter} />;
        })}
      </div>
    );
  }
}

export default FilterList;
