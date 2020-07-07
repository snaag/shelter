import React from "react";

const Fab = props => {
  const { menusStatus } = props;
  const {
    menusActive,
    mapButtonActive,
    locationButtonActive,
    listButtonActive,
    commentButtonActive,
  } = menusStatus;

  const menuType = {
    location: {
      id: 0,
      iconClassName: "fa-compass",
    },
    map: {
      id: 1,
      iconClassName: "fa-map",
    },
    list: {
      id: 2,
      iconClassName: "fa-list",
    },
    comment: {
      id: 3,
      iconClassName: "fa-comment-alt",
    },
  };

  const createButton = type => {
    const { iconClassName } = type;
    return (
      <div className="fab fab-icon-holder">
        <i className={`fas ${iconClassName}`}></i>
      </div>
    );
  };

  return (
    <>
      {menusActive && (
        <div className="fab-container">
          {mapButtonActive && createButton(menuType.map)}
          {locationButtonActive && createButton(menuType.location)}
          {listButtonActive && createButton(menuType.list)}
          {commentButtonActive && createButton(menuType.comment)}
        </div>
      )}
    </>
  );
};

export default Fab;
