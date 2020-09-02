import React from "react";

export default function FilterItemDetail({ shelter }) {
  const {
    SEX_TYPE,
    REFINE_ROADNM_ADDR,
    CONTCT_NO,
    HEADCHF_NM,
    BYPERD_TYPE,
  } = shelter;

  let sexType;
  if (SEX_TYPE === "M") {
    sexType = "남";
  } else if (SEX_TYPE === "F") {
    sexType = "여";
  } else if (SEX_TYPE === "ALL") {
    sexType = "남 / 여";
  }

  return (
    <div className="filter-item-detail">
      <div className="filter-item-detail--address">
        <span>주소&nbsp;&nbsp;</span>
        {REFINE_ROADNM_ADDR}
      </div>
      <div className="filter-item-detail--tel">
        <span>연락처&nbsp;&nbsp;</span>
        <a href={`tel:${CONTCT_NO}`}>{CONTCT_NO}</a>
      </div>
      <div className="filter-item-detail--head-chief">
        <span>담당자&nbsp;&nbsp;</span>
        {HEADCHF_NM}
      </div>
      <div className="filter-item-detail--period">
        <span>보호기간&nbsp;&nbsp;</span>
        {BYPERD_TYPE}
      </div>
      <div className="filter-item-detail--sex-type">
        <span>성별&nbsp;&nbsp;</span>
        {sexType}
      </div>
    </div>
  );
}
