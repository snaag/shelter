import React from "react";
import FilterCategoryItem from "./FilterCategoryItem";

export default function FilterCategory({ title, type, list }) {
  return (
    <div className="filter-category">
      <div className="filter-category__title">
        <span>{title}</span>
      </div>
      <div className="filter-category__list">
        {list.map((e, i) => (
          <FilterCategoryItem
            title={e.title}
            name={e.name}
            type={type}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}
