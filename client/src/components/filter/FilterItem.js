import React, { Component } from "react";

class FilterItem extends Component {
  render() {
    let shelter = this.props.shelter;
    return (
      <div className="filter-list--item" onClick={this.props.onItemClick}>
        <div className="filter-list--item--name">{shelter.RESTARER_NM}</div>
        <div className="filter-list--item--tel">
          <a href={`tel:${shelter.CONTCT_NO}`}>{shelter.CONTCT_NO}</a>
        </div>
        <div className="filter-list--item--sex-type">{shelter.SEX_TYPE}</div>
        <div className="filter-list--item--period">{shelter.BYPERD_TYPE}</div>
      </div>
    );
  }
}

export default FilterItem;
