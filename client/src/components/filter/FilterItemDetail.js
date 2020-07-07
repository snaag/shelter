import React, { Component } from "react";

class FilterItemDetail extends Component {
  render() {
    let shelter = this.props.shelter;
    let sexType;
    if (shelter.SEX_TYPE === "M") {
      sexType = "남";
    } else if (shelter.SEX_TYPE === "F") {
      sexType = "여";
    } else if (shelter.SEX_TYPE === "ALL") {
      sexType = "남 / 여";
    }

    return (
      <div>
        {shelter && (
          <div className="filter-item-detail">
            <div className="filter-item-detail--head-chief">
              {shelter.HEADCHF_NM}
            </div>
            <div className="filter-item-detail--address">
              {shelter.REFINE_ROADNM_ADDR}
            </div>
            <div className="filter-item-detail--period">
              {shelter.BYPERD_TYPE}
            </div>
            <div className="filter-item-detail--tel">
              <a href={`tel:${shelter.CONTCT_NO}`}>{shelter.CONTCT_NO}</a>
            </div>
            <div className="filter-item-detail--sex-type">{sexType}</div>
          </div>
        )}
      </div>
    );
  }
}

export default FilterItemDetail;
