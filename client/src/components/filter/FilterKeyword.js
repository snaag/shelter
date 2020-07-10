import React, { Component } from "react";
import { cities, cityCodes } from "../../data/city";

class FilterKeyword extends Component {
  render() {
    let conditions = this.props.conditions;
    return (
      <div className="filter-keyword">
        {conditions.SEX_TYPE.map(condition => (
          <div className="filter-keyword__sex" key={condition}>
            {condition === "M" ? "남자" : "여자"}
          </div>
        ))}
        {conditions.BYPERD_TYPE.map(condition => (
          <div className="filter-keyword__period" key={condition}>
            {condition}
          </div>
        ))}
        {conditions.SIGUN_CD.map(condition => (
          <div className="filter-keyword__cities" key={condition}>
            {cities[cityCodes.indexOf(condition)]}
          </div>
        ))}
      </div>
    );
  }
}

export default FilterKeyword;
