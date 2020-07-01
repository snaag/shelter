import React, { Component } from "react";

class FilterCondition extends Component {
  render() {
    return (
      <div className="filter-condition">
        <div className="filter-condition__gender">
          <div className="filter-condition__gender__title">
            <span>성별</span>
          </div>
          <div className="filter-condition__gender__type">
            <div className="filter-condition__gender__type--male">
              <img />
            </div>
            <div className="filter-condition__gender__type--female">
              <img />
            </div>
          </div>
        </div>
        <div className="filter-condition__period">
          <div className="filter-condition__period__title">
            <span>기간</span>
          </div>
          <div className="filter-condition__period__type--short"></div>
          <div className="filter-condition__period__type--mid"></div>
          <div classNmae="filter-condition__period__type--long"></div>
        </div>
        <div className="filter-condition__city">
          <div className="filter-condition__city__title">
            <span>지역</span>
          </div>
          <div className="filter-condition__city__list">
            {/* 지역 배열 매핑 */}
          </div>
        </div>
      </div>
    );
  }
}

export default FilterCondition;
