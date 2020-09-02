import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { filterActions } from "../../reducers/filter.reducer";

export default function FilterCategoryItem({ title, name, type }) {
  const dispatch = useDispatch();
  const conditions = useSelector(state => state.filter.conditions);

  const handleClickCondition = category => {
    return event => {
      let condition = conditions[category];
      let target = event.target;

      let idx = condition.indexOf(target.title);
      if (idx > -1) {
        condition.splice(idx, 1);
        target.classList.remove("checked");
      } else {
        condition.push(target.title);
        target.classList.add("checked");
      }

      dispatch(
        filterActions.setState({
          conditions: { ...conditions, [category]: condition },
        })
      );
    };
  };

  return (
    <div
      className="filter-category-item"
      title={title}
      onClick={handleClickCondition(type)}
    >
      {name}
    </div>
  );
}
