import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Login from "../../containers/login/Login";

import { fabActions } from "../../reducers/fab.reducer";
import { mapActions } from "../../reducers/map.reducer";
import { filterActions } from "../../reducers/filter.reducer";

const Fab = () => {
  const {
    isMenuActive,
    isMapButtonActive,
    isListButtonActive,
    isLocationButtonActive,
    isCommentButtonActive,
  } = useSelector(state => state.fab);
  const dispatch = useDispatch();

  const menuType = {
    map: {
      id: 0,
      iconClassName: "fa-map",
      handle: () => {
        let list = document.body.querySelector(".filter-list");
        list.classList.add("fold");

        let foldedCondition = document.body.querySelector(
          ".filter-condition--fold"
        );
        let unFoldedCondition = document.body.querySelector(
          ".filter-condition--unfold"
        );
        if (foldedCondition) foldedCondition.classList.add("fold");
        if (unFoldedCondition) unFoldedCondition.classList.add("fold");

        dispatch(
          fabActions.setState({
            isMapButtonActive: false,
            isListButtonActive: true,
          })
        );
      },
    },
    list: {
      id: 1,
      iconClassName: "fa-list",
      handle: () => {
        let list = document.body.querySelector(".filter-list");
        list.classList.remove("fold");

        let foldedCondition = document.body.querySelector(
          ".filter-condition--fold"
        );
        let unFoldedCondition = document.body.querySelector(
          ".filter-condition--unfold"
        );
        if (foldedCondition) foldedCondition.classList.remove("fold");
        if (unFoldedCondition) unFoldedCondition.classList.remove("fold");

        dispatch(
          fabActions.setState({
            isMapButtonActive: true,
            isListButtonActive: false,
          })
        );
      },
    },
    location: {
      id: 2,
      iconClassName: "fa-compass",
      handle: useCallback(() => {
        dispatch(filterActions.setState({ currentShelter: {} }));
        dispatch(mapActions.setState({ showCurrentPosition: true }));
      }, [dispatch]),
    },
    comment: {
      id: 3,
      iconClassName: "fa-comment-alt",
      handle: () => {
        // console.log("comment");
      },
    },
  };

  const createButton = type => {
    const { iconClassName } = type;
    return (
      <div className="fab fab-icon-holder" onClick={type.handle}>
        <i className={`fas ${iconClassName}`}></i>
      </div>
    );
  };

  return (
    <>
      <div className="fab-container">
        {isMenuActive && (
          <>
            {isMapButtonActive && createButton(menuType.map)}
            {isListButtonActive && createButton(menuType.list)}
            {isCommentButtonActive && createButton(menuType.comment)}
          </>
        )}
        {isLocationButtonActive && createButton(menuType.location)}
        <Login />
      </div>
    </>
  );
};

export default Fab;
