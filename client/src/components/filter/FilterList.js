import React from "react";
import { useSelector } from "react-redux";
import FilterItem from "./FilterItem";
import Loading from "../Loading";

export default function FilterList() {
  const { shelters, fetching, error } = useSelector(state => state.filter);

  let fallback;
  if (error?.response.status === 404)
    fallback = <div className="filter-list--empty">검색 결과가 없습니다.</div>;
  else if (error?.response.status === 500)
    fallback = <div className="filter-list--empty">오류가 발생했습니다.</div>;

  return (
    <div className="filter-list">
      {fetching ? (
        <Loading />
      ) : error ? (
        fallback
      ) : (
        shelters.map((shelter, i) => <FilterItem key={i} shelter={shelter} />)
      )}
    </div>
  );
}
