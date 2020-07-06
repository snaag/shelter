import React, { Component } from "react";
import "../../styles/filter/FilterItem.css";
import icon from "../../assets/icon";

class FilterItem extends Component {
  render() {
    let shelter = this.props.shelter;
    let sexType;
    if (shelter.SEX_TYPE === "M") {
      sexType = <img src={icon.male} alt="" />;
    } else if (shelter.SEX_TYPE === "F") {
      sexType = <img src={icon.female} alt="" />;
    } else if (shelter.SEX_TYPE == "ALL") {
      sexType = [
        <img src={icon.male} alt="" />,
        <img src={icon.female} alt="" />,
      ];
    }

    return (
      <div className="filter-list__item">
        <div
          className="filter-list__item__name"
          onClick={this.props.onItemClick}
        >
          {shelter.RESTARER_NM}
        </div>
        <div className="filter-list__item__tel">
          <a href={`tel:${shelter.CONTCT_NO}`}>
            <img src={icon.phone} alt="" />
          </a>
        </div>
        <div className="filter-list__item__sex-type">{sexType}</div>
        <div className="filter-list__item__period">{shelter.BYPERD_TYPE}</div>
      </div>
    );
  }
}

export default FilterItem;
