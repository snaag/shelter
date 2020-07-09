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
            <div className="filter-item-detail--address">
              <span>주소&nbsp;&nbsp;</span>
              {shelter.REFINE_ROADNM_ADDR}
            </div>
            <div className="filter-item-detail--tel">
              <span>연락처&nbsp;&nbsp;</span>
              <a href={`tel:${shelter.CONTCT_NO}`}>{shelter.CONTCT_NO}</a>
            </div>
            <div className="filter-item-detail--head-chief">
              <span>담당자&nbsp;&nbsp;</span>
              {shelter.HEADCHF_NM}
            </div>
            <div className="filter-item-detail--period">
              <span>보호기간&nbsp;&nbsp;</span>
              {shelter.BYPERD_TYPE}
            </div>
            <div className="filter-item-detail--sex-type">
              <span>성별&nbsp;&nbsp;</span>
              {sexType}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default FilterItemDetail;
