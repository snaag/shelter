import React, { Component } from "react";

class FilterItem extends Component {
  render() {
    let shelter = this.props.shelter;
    return (
      <div>
        <div>{shelter.OPERT_INST_NM}</div>
        <div>{shelter.CONTCT_NO}</div>
        <div>{shelter.REFINE_ROADNM_ADDR}</div>
        <div>거리</div>
        <div>전화 아이콘</div>
        <div>{shelter.SEX_TYPE}</div>
        <div>{shelter.BYPERD_TYPE}</div>
      </div>
    );
  }
}

export default FilterItem;
