import React, { Component } from "react";

class FilterItemDetail extends Component {
  render() {
    let shelter = this.props.shelter;
    return (
      <div>
        {shelter && (
          <div className="filter-item-detail">
            <div className="filter-item-detail--name">
              {shelter.RESTARER_NM}
            </div>
            <div className="filter-item-detail--head-chief">
              {shelter.HEADCHF_NM}
            </div>
            <div className="filter-item-detail--city">{shelter.SIGUN_NM}</div>
            <div className="filter-item-detail--address">
              {shelter.REFINE_ROADNM_ADDR}
            </div>
            <div className="filter-item-detail--period">
              {shelter.BYPER_TYPE}
            </div>
            <div className="filter-item-detail--tel">
              <a href={`tel:${shelter.CONTCT_NO}`}>{shelter.CONTCT_NO}</a>
            </div>
            <div className="filter-item-detail--sex-type">
              {shelter.SEX_TYPE}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default FilterItemDetail;
