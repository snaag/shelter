import React, { Component } from "react";
import FilterItem from "../../containers/filter/FilterItem";

class FilterList extends Component {
  render() {
    let fallback;
    if (this.props.error?.response.status === 404)
      fallback = (
        <div className="filter-list--empty">검색 결과가 없습니다.</div>
      );
    else if (this.props.error?.response.status === 500)
      fallback = <div className="filter-list--empty">오류가 발생했습니다.</div>;

    return (
      <div className="filter-list">
        {this.props.error
          ? fallback
          : this.props.shelters.map((shelter, i) => (
              <FilterItem key={i} shelter={shelter} />
            ))}
      </div>
    );
  }
}

export default FilterList;
